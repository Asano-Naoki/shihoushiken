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
      //科目名のアルファベット略称から日本語完全名に変換
      subjectFull(subject) {
        return transformSubject(subject)
      },
      //2015年からは憲法・民法・刑法だけになったのでその調整
      years(subject) {
        const oldSubjects = ['gyo', 'syo', 'mso', 'kso']
        if (oldSubjects.includes(subject)) {
          return ['2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006']
        }
        else {
          return ['2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006']
        }
      },
      //2014年以前の同じ系統（公法系、民事系、刑事系）での科目の切り替わり問題数を設定
      qNum(subject, year) {
        if (subject == 'gyo' && ['2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006'].includes(year)) {
          return 21
        }
        else if (subject == 'syo' && year == 2014) {
          return 38
        }
        else if (subject == 'syo' && ['2013', '2012', '2011', '2010', '2009', '2007', '2006'].includes(year)) {
          return 37
        }
        else if (subject == 'syo' && ['2008', '2007'].includes(year)) {
          return 36
        }
        else if (subject == 'mso' && year == 2014) {
          return 57
        }
        else if (subject == 'mso' && ['2013', '2012', '2011', '2010', '2009', '2006'].includes(year)) {
          return 56
        }
        else if (subject == 'mso' && year == 2008) {
          return 55
        }
        else if (subject == 'mso' && year == 2007) {
          return 53
        }
        if (subject == 'kso' && ['2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006'].includes(year)) {
          return 21
        }
        else {
          return 1
        }
      }
    },
  }
</script>
