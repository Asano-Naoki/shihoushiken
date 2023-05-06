<template>
  <main>
    <div>
      <h1>司法試験過去問集・短答</h1>
      <div>
        <!--問題部分-->
        <v-card :title="title" variant="outlined">
          <v-card-text class="q">{{ filteredQ }}</v-card-text>
        </v-card>

        <!--選択肢部分-->
        <ChoicesComponent
          :datum="datum"
          @show-answer="showAnswer"
        />

        <!--正誤結果部分-->
        <div :class="{ hide: !show }">
          <div class="result">
            <p v-if="correct" style="color:red;">○　正解</p>
            <p v-else style="color:blue;">×　不正解</p>
          </div>
          <p class="answer">正解：{{ datum.a }}</p>
        </div>
        
        <!--前の問題と次の問題-->
        <v-btn @click="prevQ">前の問題</v-btn>　<v-btn @click="nextQ">次の問題</v-btn>
      </div>
    </div>
  </main>
</template>

<script>
import csvData from "../data/tantou.csv";
import ChoicesComponent from './ChoicesComponent.vue'

export default {
  components: {
    ChoicesComponent,
  },
  data() {
    return {
      num: this.$route.params.qNum,
      subject: this.$route.params.subject,
      datum: {},
      correct: false,
      show: false,
      toggle_multiple: [],
    }
  },
  created() {
    this.datum = csvData.filter(d => d.num == this.num && d.subject == this.subject)[0]
  },
  beforeRouteUpdate (to, from, next) {
    this.num = to.params.qNum
    this.subject = to.params.subject
    this.datum = csvData.filter(d => d.num == to.params.qNum && d.subject == to.params.subject)[0]
    this.correct = false
    this.show = false
    window.scrollTo(0, 0)
    next()
  },  
  computed: {
    //タイトル（科目・年度・問題番号）の生成
    title() {
      let subjectFull = ''
      switch (this.subject) {
        case 'min':
          subjectFull = '民法'
          break
        case 'kei':
          subjectFull = '刑法'
      }
      return "2020年"+subjectFull+"第"+this.num+"問"
    },
    //問題部分の改行の調整（改行１つから２つに）
    filteredQ() {
      return this.datum.q.replace(/\n/g,'\n\n')
    },
  },
  methods: {
    //前の問題
    prevQ() {
      this.$router.push({ name: 'tantou', params: { qNum: Number(this.num) - 1 }})
    },
    //次の問題
    nextQ() {
      this.$router.push({ name: 'tantou', params: { qNum: Number(this.num) + 1 }})
    },
    showAnswer(correct) {
      console.log('ans')
      this.correct = correct
      this.show = true
      window.scrollBy(0, 1000)
    }
  }
}
</script>

<style scoped>
.q {
  font-size: 18px;
  white-space: pre-wrap;
  line-height: 40px;
}
.result {
  font-size:36px;
}
.answer {
  font-size:24px;
  margin-top:20px;
  margin-bottom:20px;
}
.hide {
    visibility: hidden;
}
</style>