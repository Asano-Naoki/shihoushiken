<template>
  <!--答えが３個以上の場合-->

  <!--答えが２個の場合-->
  <template v-if="datum.a.length == 2">
    <p>２こです</p>
    <p>{{ toggle_multiple }}</p>
    <v-item-group
      v-model="toggle_multiple"
      multiple
    >
      <v-item v-for="choice in filteredChoices" v-slot:default="{ active, toggle }">
        <p
          :color="active ? 'primary' : ''"
          class="d-flex align-center"
          dark
          height="200"
          @click="toggle"
        >
          {{ choice.substr(0, 2) }}
        </p>
      </v-item>
    </v-item-group>
  </template>

  <!--答えが１個の場合-->
  <template v-else>
    <v-table>
      <tbody>
        <tr v-for="choice in filteredChoices">
        <td><v-btn @click="getResult(choice)">{{ choice.substr(0, 2) }}</v-btn></td>
        <td>{{ choice.substr(2) }}</td>
        </tr>
      </tbody>
    </v-table>
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
    }
  },
  computed: {
    //選択肢として表示する配列（見出し行がcで始まる配列）を返す
    filteredChoices() {
      return Object.keys(this.datum).filter(k => k.startsWith('c')).map(k => this.datum[k])
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
      const correct = this.hankaku2Zenkaku(selectedChoice) == this.datum.a ? true : false
      this.$emit('showAnswer', correct)
    },
  }
}
</script>