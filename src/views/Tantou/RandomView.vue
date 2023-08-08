<template>
  <v-layout>
    <!-- ランダム出題の対象を選択する左サイドバー -->
    <LeftSidebarRandomComponent
      @get-random-question="getRandomQuestion"
      @update-toggles="updateToggles"
    />
    
    <v-main>
      <h1>司法試験過去問題集・ランダム</h1>
      <br>
      
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
      />

      <!-- ランダムに1問出題 -->
      <v-btn @click="randomQuestion">ランダムに1問出題</v-btn>

    </v-main>
  </v-layout>
</template>

<script>
import csvData from "../../data/tantou.csv";
import QuestionComponent from './QuestionComponent.vue'
import ChoicesComponent from './ChoicesComponent.vue'
import ResultComponent from './ResultComponent.vue'
import LeftSidebarRandomComponent from './LeftSidebarRandomComponent.vue'
import { transformSubject } from '../../helpers/transformSubject.js'

export default {
  components: {
    QuestionComponent,
    ChoicesComponent,
    ResultComponent,
    LeftSidebarRandomComponent,
  },
  data() {
    return {
      num: 1,
      subject: 'ken',
      year: 2023,
      datum: {},
      correct: false,
      show: false,
      subjects: ['ken', 'gyo', 'min', 'syo', 'mso', 'kei', 'kso'],
      years: ['2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006'],
      oldYears: ['2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006'],
      toggle_subjects: [],
      toggle_years: [],
    }
  },
  methods: {
    //解答等の表示
    showAnswer(correct) {
      this.correct = correct
      this.show = true
      window.scrollBy(0, 1000)
    },
    //科目のアルファベット略称から日本語の科目名に
    transformSubject(subject) {
      return transformSubject(subject)
    },
    //ランダムに１問出題
    randomQuestion() {
      try {
        this.getRandomQuestion(this.toggle_subjects, this.toggle_years)
      } catch(e) {
        alert("エラーが発生しました。リロードします。")
        this.$router.go({path: this.$router.currentRoute.path, force: true})
      }
    },
    //ランダムに問題を取得
    getRandomQuestion(toggle_subjects, toggle_years) {
      //初期化
      this.correct = false
      this.show = false
      //選択された科目と年度を取得
      let targetSubjects = toggle_subjects.map( value => this.subjects[value])
      let targetYears = toggle_years.map( value => this.years[value])
      //選択された科目からランダムに１つ取り出す
      this.subject = targetSubjects[Math.floor(Math.random() * targetSubjects.length)]
      //古い年度しかない科目の処理
      const oldSubjects = ['gyo', 'syo', 'mso', 'kso']
      if (oldSubjects.includes(this.subject)) {
        targetYears = targetYears.filter((year) => year < 2014)
      }
      //選択された年度からランダムに１つ取り出す
      this.year = targetYears[Math.floor(Math.random() * targetYears.length)]
      //ランダムに設定した科目と年度から問題を抽出し、１問だけ選んで、問題番号を設定する
      const questionsArray = csvData.filter(d => d.subject == this.subject && d.year == this.year)
      this.datum = questionsArray[Math.floor(Math.random() * questionsArray.length)]
      this.num = this.datum.num
    },
    //子コンポーネントから送られてきた科目と年度をこの親コンポーネントで設定する
    updateToggles(toggle_subjects, toggle_years) {
      this.toggle_subjects = toggle_subjects
      this.toggle_years = toggle_years
    }
  }
}
</script>

