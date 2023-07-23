<template>
  <main>
    <h1>司法試験過去問集・検索</h1>

    <!--検索フォーム-->
    <v-text-field
      v-model="word"
      density="compact"
      variant="solo"
      label="検索"
      append-inner-icon="mdi-magnify"
      single-line
      @update:modelValue="search"
    ></v-text-field>

    <!--検索結果-->
    <v-table>
      <thead>
        <tr>
          <th>
            科目
          </th>
          <th>
            年度
          </th>
          <th>
            問題番号
          </th>
          <th>
            問題
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="result in results"
          :key="result.refIndex"
          class="tr-link"
          @click="onClick(result.item)"
        >
          <td>{{ subjectFull(result.item.subject) }}</td>
          <td>{{ result.item.year }}</td>
          <td>{{ result.item.num }}</td>
          <td v-html=highlight(result.item.q,result.matches[0].indices)></td>
        </tr>
      </tbody>
    </v-table>

  </main>
</template>

<script>
import csvData from "../data/tantou.csv";
import Fuse from 'fuse.js'
import { transformSubject } from '../helpers/transformSubject.js'

export default {
  data() {
    return {
      word: "",
      results: [],
    }
  },
  methods: {
    //検索
    search() {
      var options = {
        threshold: 0.3,
        includeMatches: true,
        keys: [
          "q",
          "c1",
          "c2",
          "c3",
          "c4",
          "c5",
        ]
      };
      var fuse = new Fuse(csvData, options);
      this.results = fuse.search(this.word);
    },
    //ハイライト
    highlight(text,matches) {
      console.log(matches)
      const splitedText = []
      let startIndex = 0
      for (let i = 0; i < matches.length; i++) {
        let a = text.slice(startIndex, matches[i][0]) + '<span style="font-weight:bold; background-color:yellow;">'
        let b = text.slice(matches[i][0], matches[i][1]+1) + '</span>'
        splitedText.push(a, b)
        startIndex = matches[i][1]+1
        if (i == matches.length-1) {
          let c = text.slice(matches[i][1]+1)
          splitedText.push(c)
        }
      }
      return splitedText.join('')
    },
    //クリックしたらその問題に移動
    onClick(item) {
      let routeData = this.$router.resolve({ name: 'tantou', params: { subject: item.subject, year: item.year, qNum: item.num }})
      window.open(routeData.href, '_blank');
    },
    //科目名を日本語の正式名に
    subjectFull(subject) {
      return transformSubject(subject)
    },    
  }
}
</script>

<style>
.tr-link {
  cursor:pointer;
}
.tr-link:hover {
  background-color: lightgrey;
}
</style>
