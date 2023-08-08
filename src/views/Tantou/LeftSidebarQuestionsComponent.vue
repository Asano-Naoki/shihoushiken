<template>
    <v-navigation-drawer permanent width=150>
      <v-list nav>
        <v-list-item
            v-for="question in questions"
            :title="'第'+question+'問'"
            :to="'/tantou/'+subject+'/'+year+'/'+question"
            ref=question
          ></v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    questions: [],
    subject: '',
    year: '',
  },
}
</script>
