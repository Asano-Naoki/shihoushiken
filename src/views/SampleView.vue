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
        <p>{{ result }}</p>
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
      result: '',
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
      this.result = this.hankaku2Zenkaku(selectedChoice) == this.a ? '正解' : '不正解'
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
</style>