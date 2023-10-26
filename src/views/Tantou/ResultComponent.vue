<template>
  <div :class="{ hide: !show }">
    <!-- 正解・不正解 -->
    <div class="result">
      <p v-if="correct" style="color:red;">○　正解</p>
      <p v-else style="color:blue;">×　不正解</p>
    </div>
    <p class="answer">正解：{{ datum.a }}</p>

    <!-- 解説 -->
    <p class="explanation">{{ filteredExplanation }}</p>
    <p v-if="filteredHanreis.length">【参考判例】</p>
    <div v-for="hanrei in filteredHanreis">
      <p>
        <a target=_blank :href=getHanreiLink(hanrei)>{{ getHanrei(hanrei) }}</a>、
        <a @click.prevent="showHanreiPdf(hanrei)" href="">全文PDF</a>
      </p>
    </div>
    <p v-if="filteredJoubuns.length">【参考条文】</p>
    <div v-for="joubun in filteredJoubuns">
      <p>
        <a @click.prevent="showJoubun(joubun.subject, joubun.number)" href="">{{ joubun.japaneseSubject }}{{ joubun.number }}条</a>
      </p>
    </div>
  </div>
</template>

<script>
import hanreiData from "../../data/hanrei.csv"
import { transformJoubunSubject } from '../../helpers/transformSubject.js'

export default {
  emits: ['showHanrei', 'showJoubun'],
  props: {
    datum: {},
    show: Boolean,
    correct: Boolean,
  },
  data() {
    return {
      hanreiPdfUrl: '',
      joubuns: {},
    }
  },
  computed: {
    filteredExplanation() {
      let returnString = this.datum.explanation.replace(/hanrei (\d+)/g, this.parseHanrei)
      returnString = returnString.replace(/joubun ([a-z]+) (\d+)/g, this.parseJoubun)
      return returnString
    },
    filteredHanreis() {
      const hanreiMatches = this.datum.explanation.match(/hanrei \d+/g)
      if (hanreiMatches) {
        return hanreiMatches.map((x) => x.slice(7, ))
      }
      else {
        return []
      }
    },
    filteredJoubuns() {
      const joubunMatches = this.datum.explanation.match(/joubun [a-z]+ \d+/g)
      if (joubunMatches) {
        return joubunMatches.map((x) => {
          return {'subject' : x.split(' ')[1],
                  'japaneseSubject' : transformJoubunSubject(x.split(' ')[1]),         
                  'number' : x.split(' ')[2]
          }
        })
      }
      else {
        return []
      }
    },
  },
  methods: {
    parseHanrei(match, id) {
      return this.getHanrei(id)
    },
    parseJoubun(match, subject, number) {
      const japaneseSubject = transformJoubunSubject(subject)
      return `${japaneseSubject}${number}条`
    },
    getHanrei(id) {
      const hanrei = hanreiData.filter(d => d.id == id)
      const linkText = `${hanrei[0].name}・${hanrei[0].date}${hanrei[0].court}${hanrei[0].type}`
      return linkText
    },
    getHanreiLink(id) {
      return `https://www.courts.go.jp/app/hanrei_jp/detail2?id=${id}`
    },
    showHanreiPdf(id) {
      this.$emit('showHanrei', id)
    },
    showJoubun(subject, number) {
      this.$emit('showJoubun', subject, number)
    }
  },
}


</script>

<style scoped>
.result {
  font-size:36px;
}
.explanation ::v-deep .joubun {
  cursor: pointer;
}
.explanation ::v-deep .joubun-text {
  display: none;
}
.explanation ::v-deep .joubun:hover .joubun-text{
  display: inline-block;
  width: 300px;
  position: absolute;
  top: -200px;
  left: 200px;
  border: solid 1px;
  padding: 10px;
}
.answer {
  font-size:24px;
  margin-top:20px;
  margin-bottom:20px;
}
.explanation {
  white-space: pre-wrap;
}
.hide {
    visibility: hidden;
}
</style>