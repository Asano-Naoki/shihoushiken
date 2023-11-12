<template>
    <v-navigation-drawer permanent location="right" width=600>
      <!-- 判例 -->
      <object v-if="hanreiPdfUrl"
        :data=hanreiPdfUrl
        type="application/pdf"
      ></object>
      <!-- 条文 -->
      <div v-if="joubunNumber">
        <iframe :src=joubunSrc></iframe>
      </div>
    </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    hanreiPdfUrl: String,
    joubunSubject: String,
    joubunNumber: String,
  },
  computed: {
    joubunSrc() {
      if (location.host.includes('github')) {
        return `${location.protocol}//${location.host}/shihoushiken/html/${this.joubunSubject}.html#Mp-At_${this.joubunNumber}`
      }
      else {
        return `${location.protocol}//${location.host}/html/${this.joubunSubject}.html#Mp-At_${this.joubunNumber}`
      }
    }
  }
}
</script>

<style scoped>
object,
iframe {
  width: 600px;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
}

</style>