<template>
  <main>
    <h1>司法試験過去問題集・判例検索</h1>

    <!--検索フォーム-->
    <v-textarea
      v-model="text"
      label="関連する判例を探したい文章を自由に入力してください。"
    ></v-textarea>

    <!-- 探索開始ボタン -->
    <v-btn
        :disabled="loading"
        :loading="loading"
        block
        class="text-none mb-4"
        color="indigo-darken-3"
        size="x-large"
        variant="flat"
        @click="search"
      >
        判例探索開始
    </v-btn>
    <p v-if="loading">結果が表示されるまで数十秒かかります。気長にお待ちください。</p>


    <!--検索結果-->
    <div class="result">
      <dl class="result-dl" v-for="header in headers">
        <dt class="result-dt">{{ header }}</dt>
        <dd class="result-dd" v-for="item in filteredData[header]">
          <span v-html=item></span>
        </dd>
      </dl>
    </div>

  </main>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      loading: false,
      text: "",
      headers: ["全文PDF", "類似度", "ID", "事件番号", "事件名", "裁判年月日", "法廷名", "裁判種別", "結果", "判例集等巻・号・頁", "原審裁判所名", "原審事件番号", "原審裁判年月日", "判示事項", "裁判要旨", "参照法条", "全文PDF"],
      data: {},
    }
  },
  computed: {
    // 全文PDFへのリンクを作成
    filteredData() {
      let data = this.data
      let pdflink = ''
      if (data["ID"]) {
        if (location.host.includes('github')) {
          pdflink = Object.values(data["ID"]).map((x) => `${location.protocol}//${location.host}/shihoushiken/pdf/${('000000' + x).slice(-6)}_hanrei.pdf`);
        }
        else {
          pdflink = Object.values(data["ID"]).map((x) => `<a href=${location.protocol}//${location.host}/pdf/${('000000' + x).slice(-6)}_hanrei.pdf>全文PDF</a>`);
        }
        console.log(pdflink)
        data["全文PDF"] = pdflink
      }
      return data
    },
  },
  methods: {
    //検索
    search() {
      console.log(this.text)
      this.loading = true
      axios.get('https://5hiwblksm9.execute-api.ap-northeast-1.amazonaws.com/hanrei', { 
          params: {
            text: this.text,
          }
      })
           .then(response => {
              console.log(response)
              this.data = response.data
              this.loading = false
           })
          .catch(error => {
              console.log(error)
              alert('エラーが発生しました。もう一度試してみてください。')
              this.loading = false
          })
    },
  }
}
</script>

<style>
.result {
  overflow-x: auto;
  scroll-behavior: smooth;
}
.result-dl {
  width: 2000px;
  margin: 0;
  padding: 0;
  display: table;
  border: 1px solid #d5d5d5;
  border-bottom: none;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.result-dt {
  width: 160px;
  background: #f5f5f5;
  border-right: 1px solid #d5d5d5;
  font-weight: 700;
  text-align: left;
  vertical-align: middle;
  display: table-cell;
  padding: 20px;
  margin: 0;
}
.result-dd {
  width:160px;
  display: table-cell;
  padding: 20px;
  margin: 0;
  margin-inline-start: 40px;
  border-right: 1px solid #d5d5d5;
}
</style>
