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
        <v-table>
          <tbody>
            <tr
              v-for="choice in filteredChoices"
            >
              <td><v-btn @click="getResult(choice)">{{ choice.substr(0, 2) }}</v-btn></td>
              <td>{{ choice.substr(2) }}</td>
            </tr>
          </tbody>
        </v-table>

        <!--正誤結果部分-->
        <div v-show="show">
          <div class="result">
            <p v-if="correct" style="color:red;">○　正解</p>
            <p v-else style="color:blue;">×　不正解</p>
          </div>
          <p class="answer">正解：{{ datum.a }}</p>
          <v-btn><router-link :to="{ name: 'sample', params: { qNum: this.nextNum }}">次の問題</router-link></v-btn>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import csvData from "../data/min2020.csv";

export default {
  data() {
    return {
      title: "2020年民法第"+this.$route.params.qNum+"問",
      correct: false,
      show: false,
      datum: {},
      thisNum: this.$route.params.qNum,
      nextNum: Number(this.$route.params.qNum) +1,
    }
  },
  created() {
    this.datum = csvData.filter(d => d.num == this.thisNum)[0]
  },
  beforeRouteUpdate (to, from, next) {
    this.title = "2020年民法第"+to.params.qNum+"問"
    this.correct = false
    this.show = false
    this.datum = csvData.filter(d => d.num == to.params.qNum)[0]
    this.thisNum = to.params.qNum
    this.nextNum = Number(to.params.qNum) +1
    window.scrollTo(0, 0)
    next()
  },  
  computed: {
    //問題部分の改行の調整
    filteredQ() {
      return this.datum.q.replace(/\n/g,'\n\n')
    },
    //選択肢として表示する配列を返す
    filteredChoices() {
      return Object.keys(this.datum).filter(k => k.includes('c')).map(k => this.datum[k])
    }
  },
  methods: {
    //半角→全角（選択肢と解答を照合するため）
    hankaku2Zenkaku(str) {
      return str.replace(/[０-９]/g, function(s) {
        return String.fromCharCode(s.charCodeAt(0) - 0xFEE0)
      })
    },
    //選択肢のボタンを押したら正解等を表示
    getResult(choice) {
      const selectedChoice = choice.substr(0,1)
      this.correct = this.hankaku2Zenkaku(selectedChoice) == this.datum.a ? true : false
      this.show = true
    },
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
</style>