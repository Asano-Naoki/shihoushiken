<template>
  <main>
    <h1>司法試験過去問題集</h1>
    <br>

    <v-btn @click="tantou">短答・科目年度別</v-btn>　<v-btn @click="random">短答・ランダム</v-btn>　<v-btn @click="search">検索</v-btn>
  </main>
</template>

<script>
export default {
  methods: {
    tantou() {
      this.$router.push({ name: 'tantouTop'})
    },
    random() {
      this.$router.push({ name: 'random'})
    },
    search() {
      this.$router.push({ name: 'search'})
    },
  }
}
</script>
