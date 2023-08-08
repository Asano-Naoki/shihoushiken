<template>
    <!-- 対象科目選択 -->
    <v-navigation-drawer permanent width=100>
      <h4 style="margin-left:10px; margin-top:10px;">科目選択</h4>
      <v-btn class="all-button" color="grey-lighten-2" @click="checkSubjects">全て選択</v-btn>
      <v-btn class="all-button" color="grey-lighten-2" @click="clearSubjects">全て解除</v-btn>
      <v-item-group v-model="toggle_subjects" multiple selected-class="bg-grey" @update:modelValue="update">
        <v-item v-for="subject in subjects" v-slot:default="{ selectedClass, toggle }">
          <v-btn class="all-button" :class="selectedClass" @click="toggle" style="width:100%;">{{ transformSubject(subject) }}</v-btn>
        </v-item>
      </v-item-group>
    </v-navigation-drawer>

    <!-- 対象年度選択 -->
    <v-navigation-drawer style="margin-left:5px;" permanent width=100>
      <h4 style="margin-left:10px; margin-top:10px;">年度選択</h4>
      <v-btn class="all-button" color="grey-lighten-2" @click="checkYears">全て選択</v-btn>
      <v-btn class="all-button" color="grey-lighten-2" @click="clearYears">全て解除</v-btn>
      <v-item-group v-model="toggle_years" multiple selected-class="bg-grey" @update:modelValue="update">
        <v-item v-for="year in years" v-slot:default="{ selectedClass, toggle }">
          <v-btn class="all-button" :class="selectedClass" @click="toggle" style="width:100%;">{{ year }}</v-btn>
        </v-item>
      </v-item-group>
    </v-navigation-drawer>
</template>

<script>
import { transformSubject } from '../../helpers/transformSubject.js'

export default {
  emits: ['getRandomQuestion', 'updateToggles'],
  data() {
    return {
      subjects: ['ken', 'gyo', 'min', 'syo', 'mso', 'kei', 'kso'],
      years: ['2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006'],
      toggle_subjects: [0, 1, 2, 3, 4, 5, 6],
      toggle_years: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
    }
  },
  created() {
    this.update()
    this.$emit("getRandomQuestion", this.toggle_subjects, this.toggle_years)
  },
  methods: {
    //科目のアルファベット略称から日本語の科目名に
    transformSubject(subject) {
      return transformSubject(subject)
    },
    //この子コンポーネントで選択されている科目と年度を親コンポーネントに伝える
    update() {
      this.$emit("updateToggles", this.toggle_subjects, this.toggle_years)
    },
    //科目と年度の解除と選択
    checkSubjects() {
      this.toggle_subjects = [0, 1, 2, 3, 4, 5, 6]
      this.update()
    },
    clearSubjects() {
      this.toggle_subjects = []
    },
    checkYears() {
      this.toggle_years = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
      this.update()
    },
    clearYears() {
      this.toggle_years = []
    },
  }
}
</script>

<style scoped>
.all-button {
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: small;
}
</style>
