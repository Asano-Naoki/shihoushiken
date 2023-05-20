<template>
  <main>
    <div>
      <h1>司法試験過去問集・短答</h1>
      <v-breadcrumbs
        :items="breadcrumbs"
        divider=">"
      ></v-breadcrumbs>
      
      <!--問題部分-->
      <QuestionComponent 
        :datum="datum"
        :subjectFull="subjectFull"
        :num="num"
      />

      <!--選択肢部分-->
      <ChoicesComponent
        :datum="datum"
        @show-answer="showAnswer"
      />

      <!--正誤結果部分-->
      <ResultComponent
        :datum="datum"
        :show="show"
        :correct="correct"
      />
      
      <!--前の問題と次の問題-->
      <v-btn @click="prevQ">前の問題</v-btn>　<v-btn @click="nextQ">次の問題</v-btn>
    </div>
  </main>
</template>

<script>
import csvData from "../../data/tantou.csv";
import QuestionComponent from './QuestionComponent.vue'
import ChoicesComponent from './ChoicesComponent.vue'
import ResultComponent from './ResultComponent.vue'

export default {
  components: {
    QuestionComponent,
    ChoicesComponent,
    ResultComponent,
  },
  data() {
    return {
      num: this.$route.params.qNum,
      subject: this.$route.params.subject,
      subjectFull: '',
      datum: {},
      correct: false,
      show: false,
    }
  },
  created() {
    //問題を1問だけ取り出す
    this.datum = csvData.filter(d => d.num == this.num && d.subject == this.subject)[0]
    //日本語の科目名を設定する
    switch (this.subject) {
      case 'ken':
        this.subjectFull = '憲法'
        break
      case 'min':
        this.subjectFull = '民法'
        break
      case 'kei':
        this.subjectFull = '刑法'
        break
    }
  },
  computed: {
    breadcrumbs() {
      const breadcrumbs = [
        {
          text: '司法試験過去問集',
          disabled: false,
          to: { name: 'home' },
        },
        {
          text: '短答',
          disabled: false,
          to: { name: 'tantouTop' },
        },
        {
          text: this.subjectFull,
          disabled: false,
          to: { name: 'tantouTop' },
        },
        {
          text: '2020年',
          disabled: false,
          to: { name: 'tantou',  params: { subject: this.subject, qNum: 1 } },
        },
        {
          text: '第'+ this.num + '問',
          disabled: false,
          to: { name: 'tantou',  params: { subject: this.subject, qNum: this.num } },
        },
      ]
      return breadcrumbs
    }
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
  methods: {
    //前の問題
    prevQ() {
      this.$router.push({ name: 'tantou', params: { qNum: Number(this.num) - 1 }})
    },
    //次の問題
    nextQ() {
      this.$router.push({ name: 'tantou', params: { qNum: Number(this.num) + 1 }})
    },
    //解答等の表示
    showAnswer(correct) {
      this.correct = correct
      this.show = true
      window.scrollBy(0, 1000)
    }
  }
}
</script>