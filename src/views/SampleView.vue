<template>
  <main>
    <div style="border:solid; height:1000px;">
      <h1>サンプルページ</h1>
      <div>
        <v-card title="2020年民法第11問" variant="outlined">
          <v-card-text class="q">{{ text.replace(/\n/g,'\n\n') }}</v-card-text>
        </v-card>
      </div>
    </div>
  </main>
</template>

<script>
import result from "../data/min2020.csv";

export default {
  data() {
    return {
      text: result[10].q,
      result: {},
    }
  },
  created() {
    console.log(result[10].q)
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