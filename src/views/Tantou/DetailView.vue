<template>
  <div @click="hidepdf">
  <v-layout>
    <!-- 問題番号を表示する左サイドバー -->
    <LeftSidebarQuestionsComponent 
        :questions="questions"
        :subject="subject"
        :year="year"
    />  

    <!-- 解説のPDFと条文を表示する右サイドバー -->
    <RightSidebarComponent v-if="isExplanationVisible" 
      :hanreiPdfUrl="hanreiPdfUrl"
      :joubunSubject="joubunSubject"
      :joubunNumber="joubunNumber"
    />  

    <v-main>
      <h1>司法試験過去問題集・短答</h1>

      <!--パンくずリスト-->
      <v-breadcrumbs
        :items="breadcrumbs"
        divider=">"
      ></v-breadcrumbs>
      
      <!--問題部分-->
      <QuestionComponent 
        :datum="datum"
        :subject="subject"
        :num="num"
        :year="year"
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
        @show-hanrei="showHanrei"
        @show-joubun="showJoubun"
      />
      
      <!--前の問題と次の問題-->
      <v-btn @click="prevQ">前の問題</v-btn>　<v-btn @click="nextQ">次の問題</v-btn>
    </v-main>
  </v-layout>
  </div>
</template>

<script>
import csvData from "../../data/tantou.csv";
import QuestionComponent from './QuestionComponent.vue'
import ChoicesComponent from './ChoicesComponent.vue'
import ResultComponent from './ResultComponent.vue'
import LeftSidebarQuestionsComponent from './LeftSidebarQuestionsComponent.vue'
import RightSidebarComponent from './RightSidebarComponent.vue'
import { transformSubject } from '../../helpers/transformSubject.js'

export default {
  components: {
    QuestionComponent,
    ChoicesComponent,
    ResultComponent,
    LeftSidebarQuestionsComponent,
    RightSidebarComponent,
  },
  data() {
    return {
      num: this.$route.params.qNum,
      subject: this.$route.params.subject,
      year: this.$route.params.year,
      datum: {},
      correct: false,
      show: false,
      isExplanationVisible: false,
      hanreiPdfUrl: '',
      joubunSubject: '',
      joubunNumber: '',
      questions: [],
    }
  },
  created() {
    //問題番号を設定
    const questionsArray = csvData.filter(d => d.subject == this.subject && d.year == this.year)
    const firstNum = Number(questionsArray[0].num)
    this.questions = this.range(firstNum, (firstNum + questionsArray.length))
    //問題を1問だけ取り出す
    this.datum = csvData.filter(d => d.subject == this.subject && d.year == this.year && d.num == this.num)[0]
  },
  computed: {
    breadcrumbs() {
      const breadcrumbs = [
        {
          text: '司法試験過去問題集',
          disabled: false,
          to: { name: 'home' },
        },
        {
          text: '短答',
          disabled: false,
          to: { name: 'tantouTop' },
        },
        {
          text: transformSubject(this.subject),
          disabled: false,
          to: { name: 'tantouTop' },
        },
        {
          text: this.year+'年',
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
    this.year = to.params.year
    this.datum = csvData.filter(d => d.subject == to.params.subject && d.year == to.params.year && d.num == to.params.qNum )[0]
    this.correct = false
    this.show = false
    this.isExplanationVisible = false
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
    },
    //解説中の判例を表示
    showHanrei(hanreiId) {
      const digit6 = ('000000' + hanreiId).slice(-6);
      this.hanreiPdfUrl = `http://localhost:5173/pdf/${digit6}_hanrei.pdf`
      this.joubunSubject = ''
      this.joubunNumber = ''
      this.isExplanationVisible = true;
    },
    //解説中の条文を表示
    showJoubun(subject, number) {
      this.hanreiPdfUrl = ``
      this.joubunSubject = subject
      this.joubunNumber = number
      this.isExplanationVisible = true;
    },
    //連番を作成
    range(start, end) {
      let continuousArray = []
      for (let i = start; i < end; i++) {
        continuousArray.push(i)
      }
      return continuousArray;
    },
  }
}
</script>