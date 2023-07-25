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
            v-for="year in years(subject)"
            :title="year"
            :to="'/tantou/'+subject+'/'+year+'/'+qNum(subject, year)"
        ></v-list-item>
      </v-list-group>
    </v-list>
    
</main>
</template>

<script>
import { transformSubject } from '../../helpers/transformSubject.js'

  export default {
    data() {
      return {
        open: [],
        subjects: ['ken', 'gyo', 'min', 'syo', 'mso', 'kei', 'kso'],
      }
    },
    methods: {
      subjectFull(subject) {
        return transformSubject(subject)
      },
      years(subject) {
        const oldSubjects = ['gyo', 'syo', 'mso', 'kso']
        if (oldSubjects.includes(subject)) {
          return ['2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006']
        }
        else {
          return ['2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006']
        }
      },
      qNum(subject, year) {
        if (subject == 'gyo' && ['2014', '2013', '2012', '2011'].includes(year)) {
          return 21
        }
        else if (subject == 'syo' && year == 2014) {
          return 38
        }
        else if (subject == 'syo' && ['2013', '2012', '2011'].includes(year)) {
          return 37
        }
        else if (subject == 'mso' && year == 2014) {
          return 57
        }
        else if (subject == 'mso' && ['2013', '2012', '2011'].includes(year)) {
          return 56
        }
        if (subject == 'kso' && ['2014', '2013', '2012', '2011'].includes(year)) {
          return 21
        }
        else {
          return 1
        }
      }
    },
  }
</script>
