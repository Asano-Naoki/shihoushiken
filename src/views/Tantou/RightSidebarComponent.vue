<template>
    <v-navigation-drawer permanent location="right" width=600>
      <object v-if="hanreiPdfUrl"
        :data=hanreiPdfUrl
        type="application/pdf"
      ></object>
      <div v-if="joubunNumber">
        <iframe src="http://localhost:5173/xml/constitution.xml"></iframe>
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