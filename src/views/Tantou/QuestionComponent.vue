<template>
  <v-card :title="title" variant="outlined">
    <v-card-text class="q" v-html=filteredQ></v-card-text>
  </v-card>
</template>

<script>
import { transformSubject } from '../../helpers/transformSubject.js'

export default {
  props: {
    datum: {},
    subject: '',
    num: '',
    year: '',
  },
  computed: {
    //タイトル（科目・年度・問題番号）の生成
    title() {
      return transformSubject(this.subject)+this.year+"年第"+this.num+"問"
    },
    //問題部分の改行の調整（改行１つから２つに）
    filteredQ() {
      return this.datum.q.replace(/\n/g,'\n\n')
    },
  },
}
</script>

<style scoped>
.q {
  font-size: 18px;
  white-space: pre-wrap;
  line-height: 40px;
}
</style>