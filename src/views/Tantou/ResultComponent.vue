<template>
  <div :class="{ hide: !show }">
    <div class="result">
      <p v-if="correct" style="color:red;">○　正解</p>
      <p v-else style="color:blue;">×　不正解</p>
    </div>
    <p class="answer">正解：{{ datum.a }}</p>
    <p class="explanation">{{ filteredExplanation }}</p>
    <div>
      <object
        :data=hanreiPdfUrl
        type="application/pdf"
      ></object>
    </div>
    <p @click="poppdf">pop</p>
    <p>【参考判例】</p>
    <div v-for="hanrei in hanreis">
      <p>
        <a target=_blank :href=getHanreiLink(hanrei)>{{ getHanrei(hanrei) }}</a>、
        <a @click.prevent="showHanreiPdf(hanrei)" href="">全文PDF</a>
      </p>
    </div>
  </div>
</template>

<script>
import hanreiData from "../../data/hanrei.csv";

export default {
  props: {
    datum: {},
    show: Boolean,
    showpdf: Boolean,
    correct: Boolean,
  },
  data() {
    return {
      showpdf2: true,
      hanreiPdfUrl: 'http://localhost:5173/062292_hanrei.pdf',
      hanreis: [51765, 50336, 62292],
      joubuns: {},
    }
  },
  computed: {
    filteredExplanation() {
      let returnString = this.datum.explanation.replace(/hanrei (\d+)/g, this.parseHanrei)
      returnString = returnString.replace(/joubun ([a-z]+) (\d+)/g, this.parseJoubun)
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
//      const linkTag2 = `<a @click="poppdf" target=”_blank” href="${hanreiPdfBaseURl}${digit3}/${digit6}_hanrei.pdf">全文PDF</a>`
      const linkTag2 = `<a @click="poppdf">全文PDF</a>`
      return `${linkTag1}、${linkTag2}`
    },
    parseJoubun(match, subject, number) {
      let result = '';
      console.log('joubun')

      //replaceの関数内では非同期処理が使えないのでこのようにしている
      const request = new XMLHttpRequest();
      request.open("GET", `https://elaws.e-gov.go.jp/api/1/articles;lawId=321CONSTITUTION_19470503_000000000000000;article=${number}`, false);
      request.send(null);

      if (request.status === 200) {
        const sentences = request.responseXML.getElementsByTagName("Sentence")
        for (let sentence of sentences) {
          result += sentence.textContent
        }
      }

      return `<span class="joubun"><span>日本国憲法${number}条</span><span class="joubun-text">${result}</span></span>`
    },
    poppdf() {
      console.log('child');
      this.showpdf2 = true;
    },
    getHanrei(id) {
      const hanrei = hanreiData.filter(d => d.id == id)
      const linkText = `${hanrei[0].name}・${hanrei[0].date}${hanrei[0].court}${hanrei[0].type}`
      return linkText
    },
    showHanreiPdf(id) {
      console.log('child');
      const digit6 = ('000000' + id).slice(-6);
      this.hanreiPdfUrl = `http://localhost:5173/${digit6}_hanrei.pdf`
      console.log(this.hanreiPdfUrl)
      this.showpdf2 = true;      
    },
    getHanreiLink(id) {
      return `https://www.courts.go.jp/app/hanrei_jp/detail2?id=${id}`
    }
  },
}
</script>

<style scoped>
object {
  width: 600px;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
}

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