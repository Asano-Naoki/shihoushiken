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
        style="display:none;"
      ></object>
    </div>
    <p @click="poppdf">pop</p>
    <p>【参考判例】</p>
    <div v-for="hanrei in hanreis">
      <v-dialog v-model="dialog" width="50%" scroll-strategy="reposition">
        <v-card>
          <v-card-title class="vss-movable">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </v-card-title>
          <object
            :data=hanreiPdfUrl
            type="application/pdf"
            style="width:100%; height:600px;"
          ></object>
          <v-card-actions>
            <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <p>
        <a target=_blank :href=getHanreiLink(hanrei)>{{ getHanrei(hanrei) }}</a>、
        <a @click.prevent="showHanreiPdf(hanrei)" href="">全文PDF</a>
      </p>
    </div>
  </div>
</template>

<script>

(function () {
  const d = {}
  const isMovable = (targ) => {
    return targ.classList?.contains("vss-movable")
  }
  document.addEventListener("mousedown", e => {
    const closestDialog = e.target.closest(".v-overlay__content")
    const title = closestDialog?.querySelector(".v-card-title")
    if ( e.button === 0 && closestDialog != null && (isMovable(e.target)) || isMovable(e.target.parentNode) ) {
      d.el = closestDialog // movable element
      d.el.classList.add("moved"); 

      const element = document.querySelector(".v-overlay__content:not(.moved)")
    console.log(element)
    element.style.display = "none"


      d.handle = title // enable dlg to be moved down beyond bottom
      d.mouseStartX = e.clientX
      d.mouseStartY = e.clientY
      d.elStartX = d.el.getBoundingClientRect().left
      d.elStartY = d.el.getBoundingClientRect().top
      d.el.style.position = "fixed"
      d.el.style.margin = 0
      d.oldTransition = d.el.style.transition
      d.el.style.transition = "none"
    }
  })
  document.addEventListener("mousemove", e => {
    if (d.el === undefined) return
    d.el.style.left = Math.min(
      Math.max(d.elStartX + e.clientX - d.mouseStartX, 0),
      window.innerWidth - d.el.getBoundingClientRect().width
    ) + "px"
    d.el.style.top = Math.min(
      Math.max(d.elStartY + e.clientY - d.mouseStartY, 0),
      window.innerHeight - d.handle.getBoundingClientRect().height
    ) + "px"
  })
  document.addEventListener("mouseup", () => {
    if (d.el === undefined) return
    d.el.style.transition = d.oldTransition
    d.el = undefined
  })
})()

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
      showpdf2: false,
      hanreiPdfUrl: 'http://localhost:5173/062292_hanrei.pdf',
      hanreis: [51765, 50336, 62292],
      joubuns: {},
      dialog: false,
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
      this.showpdf2 = false;
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
  //    this.showpdf2 = true;
      this.dialog = true;
    },
    getHanreiLink(id) {
      return `https://www.courts.go.jp/app/hanrei_jp/detail2?id=${id}`
    }
  },
}


</script>

<style scoped>
/* object {
  width: 600px;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
} */

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
.v-overlay.v-dialog .vss-movable {
  cursor: grab;
}
.v-overlay.v-dialog .vss-movable:hover {
  background-color: #eee;
}
.v-overlay.v-dialog .vss-movable:active {
  cursor: grabbing;
}
</style>