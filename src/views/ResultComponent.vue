<template>
  <div :class="{ hide: !show }">
    <div class="result">
      <p v-if="correct" style="color:red;">○　正解</p>
      <p v-else style="color:blue;">×　不正解</p>
    </div>
    <p class="answer">正解：{{ datum.a }}</p>
  </div>
</template>

<script>
export default {
  props: {
    datum: {},
    show: Boolean,
    correct: Boolean,
  },
}
</script>

<style scoped>
.result {
  font-size:36px;
}
.answer {
  font-size:24px;
  margin-top:20px;
  margin-bottom:20px;
}
.hide {
    visibility: hidden;
}
</style>