<template>
  <main>
    <h1>司法試験過去問集・短答</h1>

    <v-list v-model:opened="open">
      <v-list-group v-for="subject in subjects" :value="subject">
        <!-- 見出し１ -->
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            :title="subjectFull(subject)"
          ></v-list-item>
        </template>
        <!-- 中身１ -->
        <v-list-group v-for="year in years">
          <!-- 見出し２ -->
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              :title="year"
            ></v-list-item>
          </template>
          <!-- 中身２ -->
          <v-list-item
            v-for="question in questions"
            :title="'第'+question+'問'"
            :to="'tantou/'+subject+'/'+year+'/'+question"
          ></v-list-item>
        </v-list-group>
      </v-list-group>
    </v-list>
    
</main>
</template>

<script>
  export default {
    data() {
      return {
        open: [],
        subjects: ['ken', 'min', 'kei'],
        years: ['2022', '2021', '2020', '2019', '2018'],
        questions: [],
        cruds: [
          ['Create', 'mdi-plus-outline'],
          ['Read', 'mdi-file-outline'],
          ['Update', 'mdi-update'],
          ['Delete', 'mdi-delete'],
        ],
      }
    },
    created() {
      this.questions = this.range(1, 30)
    },
    methods: {
      subjectFull(subject) {
        switch (subject) {
          case 'ken':
            return '憲法'
            break
          case 'min':
            return '民法'
            break
          case 'kei':
            return '刑法'
            break
        }
      },
      range(start, end) {
        let continuousArray = []
        for (let i = start; i <= end; i++) {
          continuousArray.push(i)
        }
        return continuousArray;
      },
    },
  }
</script>
