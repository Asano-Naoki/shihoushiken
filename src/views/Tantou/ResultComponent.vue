<template>
  <div :class="{ hide: !show }">
    <div class="result">
      <p v-if="correct" style="color:red;">○　正解</p>
      <p v-else style="color:blue;">×　不正解</p>
    </div>
    <p class="answer">正解：{{ datum.a }}</p>
    <p class="explanation"  v-html=filteredExplanation></p>
  </div>
</template>

<script>
import hanreiData from "../../data/hanrei.csv";

export default {
  props: {
    datum: {},
    show: Boolean,
    correct: Boolean,
  },
  computed: {
    filteredExplanation() {
      let returnString = this.datum.explanation.replace(/hanrei (\d+)/g, this.parseHanrei)
      return returnString
    },
  },
  methods: {
    parseHanrei(match, id) {
      const hanrei = hanreiData.filter(d => d.id == id)
      const linkText = `${hanrei[0].name}・${hanrei[0].date}${hanrei[0].court}${hanrei[0].type}`
      const hanreiBaseUrl = 'https://www.courts.go.jp/app/hanrei_jp/detail2?id='
      const linkTag1 = `<a target=”_blank” href="${hanreiBaseUrl}${id}">${linkText}</a>`
      const hanreiPdfBaseURl = 'https://www.courts.go.jp/app/files/hanrei_jp/'
      const digit3 = id.slice(-3)
      const digit6 = ('000000' + id).slice(-6);
      const linkTag2 = `<a target=”_blank” href="${hanreiPdfBaseURl}${digit3}/${digit6}_hanrei.pdf">全文PDF</a>`
      return `${linkTag1}、${linkTag2}`
    },
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