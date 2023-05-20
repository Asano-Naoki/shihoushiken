<template>
  <v-card :title="title" variant="outlined">
    <v-card-text class="q">{{ filteredQ }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    datum: {},
    subjectFull: '',
    num: '',
    year: '',
  },
  computed: {
    //タイトル（科目・年度・問題番号）の生成
    title() {
      return this.subjectFull+this.year+"年第"+this.num+"問"
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