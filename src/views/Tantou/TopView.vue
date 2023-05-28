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
        <v-list-item
            v-for="year in years"
            :title="year"
            :to="'/tantou/'+subject+'/'+year+'/1'"
        ></v-list-item>
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
        cruds: [
          ['Create', 'mdi-plus-outline'],
          ['Read', 'mdi-file-outline'],
          ['Update', 'mdi-update'],
          ['Delete', 'mdi-delete'],
        ],
      }
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
    },
  }
</script>
