<template>
  <main>
    <div style="height:1000px;">
      <h1>サンプルページ</h1>
      <div>
        <!--問題部分-->
        <v-card title="2020年民法第11問" variant="outlined">
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
          <p class="answer">正解：{{ a }}</p>
          <v-btn>次の問題</v-btn>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import result from "../data/min2020.csv";

export default {
  data() {
    return {
      q: result[10].q,
      choices: result[10],
      a: result[10].a,
      correct: false,
      show: false,
    }
  },
  created() {
    console.log(result[10].q)
  },
  computed: {
    filteredQ() {
      return this.q.replace(/\n/g,'\n\n')
    },
    filteredChoices() {
      delete this.choices.q
      delete this.choices.a
      return this.choices
    }
  },
  methods: {
    hankaku2Zenkaku(str) {
      return str.replace(/[０-９]/g, function(s) {
        return String.fromCharCode(s.charCodeAt(0) - 0xFEE0)
      })
    },
    getResult(choice) {
      const selectedChoice = choice.substr(0,1)
      this.correct = this.hankaku2Zenkaku(selectedChoice) == this.a ? true : false
      this.show = true
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
</style>