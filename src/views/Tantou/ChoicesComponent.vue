<template>
  <!--答えが３個以上の場合-->
  <template v-if="datum.a.length > 2">
    <div v-for="i in datum.a.length">
      <v-item-group v-model="$data['toggle' + i]" mandatory selected-class="bg-grey">
        <v-container>
          <v-row>
            <v-col v-for="n in 2" cols=1>
              <v-item v-slot:default="{ selectedClass, toggle }">
                <v-btn :class="selectedClass" @click="toggle">{{ n }}</v-btn>
              </v-item>
            </v-col>
          </v-row>
        </v-container>  
      </v-item-group>
    </div>
    <v-btn @click="getResult([toggle1, toggle2, toggle3, toggle4, toggle5])">解答確認</v-btn>
  </template>

  <!--答えが２個の場合-->
  <template v-else-if="datum.a.length == 2">
    <v-container>
      <v-item-group v-model="toggle_multiple" multiple selected-class="bg-grey">
        <v-item v-for="choice in filteredChoices" v-slot:default="{ selectedClass, toggle }">
          <v-row align="center">
            <v-col cols=1>
              <v-btn :class="selectedClass" @click="toggle">{{ choice.substr(0, 2) }}</v-btn>
            </v-col>
            <v-col cols=11 class="choice">
              {{ choice.substr(2) }}
            </v-col>
          </v-row>
        </v-item>
      </v-item-group>
    </v-container>
    <v-btn @click="getResult(toggle_multiple)">解答確認</v-btn>
  </template>

  <!--答えが１個の場合-->
  <template v-else>
    <v-container>
      <v-row align="center" v-for="choice in filteredChoices">
        <v-col cols=1>
          <v-btn @click="getResult(choice)">{{ choice.substr(0, 2) }}</v-btn>
        </v-col>
        <v-col cols=11 class="choice">
          {{ choice.substr(2) }}
        </v-col>
      </v-row>
    </v-container>
  </template>
</template>

<script>
export default {
  emits: ['showAnswer'],
  props: {
    datum: {},
  },
  data() {
    return {
      toggle_multiple: [],
      toggle1: '',
      toggle2: '',
      toggle3: '',
      toggle4: '',
      toggle5: '',
    }
  },
  computed: {
    //選択肢として表示する配列（見出し行がcで始まる配列）を返す
    filteredChoices() {
      return Object.keys(this.datum).filter(k => k.startsWith('c')).filter(k => this.datum[k] != '').map(k => this.datum[k])
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
      let selectedChoice = ''
      //複数解答の問題の場合
      if (typeof choice == 'object') {
        //選択された選択肢番号（配列は0から始まるので1を足していることに注意）を文字列として結合する
        let fiveChoice = Object.values(choice).map(x => x + 1).reduce((acc, cur) => {
          return acc + String(cur)
        })
        selectedChoice = fiveChoice.slice(0, this.datum.a.length)
        this.toggle_multiple = []
        this.toggle1 = ''
        this.toggle2 = ''
        this.toggle3 = ''
        this.toggle4 = ''
        this.toggle5 = ''
      }
      //単数解答の問題の場合
      else {
        selectedChoice = choice.substr(0,1)
      }
      const correct = this.hankaku2Zenkaku(selectedChoice) == this.datum.a ? true : false
      this.$emit('showAnswer', correct)
    },
    setToggle(i) {
      return 'toggle' + String(i)
    }
  }
}
</script>

<style scoped>
.choice {
  font-size:18px;
}
</style>