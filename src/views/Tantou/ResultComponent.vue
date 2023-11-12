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
        <a @click.prevent="showJoubun(joubun.subject, joubun.number)" href="">{{ joubun.japaneseSubject }}{{ getDisplayJoubunNumber(joubun.number) }}</a>
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
    datum: Object,
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
    // csvファイルの解説から表示する解説を作る
    filteredExplanation() {
      let returnString = this.datum.explanation.replace(/hanrei (X?\d+)/g, this.parseHanrei)
      returnString = returnString.replace(/joubun ([a-z]+) (\d+[_\d]*)/g, this.parseJoubun)
      return returnString
    },
    // 解説に判例が含まれていたら判例IDをリストにして返す
    filteredHanreis() {
      const hanreiMatches = this.datum.explanation.match(/hanrei \d+/g)
      if (hanreiMatches) {
        return hanreiMatches.map((x) => x.slice(7, ))
      }
      else {
        return []
      }
    },
    // 解説に条文が含まれていたら条文の科目と番号をリストにして返す
    filteredJoubuns() {
      const joubunMatches = this.datum.explanation.match(/joubun [a-z]+ (\d+[_\d]*)/g)
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
    // 解説中でマッチした部分をreplaceの関数内で表示用に調整
    parseHanrei(match, id) {
      return this.getHanrei(id)
    },
    parseJoubun(match, subject, number) {
      const japaneseSubject = transformJoubunSubject(subject)
      return `${japaneseSubject}${this.getDisplayJoubunNumber(number)}`
    },
    // 判例IDから表示用のテキストを取得
    getHanrei(id) {
      const hanrei = hanreiData.filter(d => d.id == id)
      console.log(hanrei)
      const linkText = `${hanrei[0].name}・${hanrei[0].date}${hanrei[0].court}${hanrei[0].type}`
      return linkText
    },
    // 判例IDから詳細結果ページのURLを構築
    getHanreiLink(id) {
      return `https://www.courts.go.jp/app/hanrei_jp/detail2?id=${id}`
    },
    // 右サイドバーに判例全文PDFを表示
    showHanreiPdf(id) {
      this.$emit('showHanrei', id)
    },
    // 右サイドバーに条文を表示
    showJoubun(subject, number) {
      this.$emit('showJoubun', subject, number)
    },
    // ○条の△という形の調整
    getDisplayJoubunNumber(number) {
      const splitNumber = number.split('_')
      let displayNumber = `${splitNumber[0]}条`
      if (splitNumber[1]) {
        displayNumber = displayNumber + 'の' + splitNumber[1]
      }
      return displayNumber
    }
  },
}


</script>

<style scoped>
.result {
  font-size:36px;
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