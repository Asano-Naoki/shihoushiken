<template>
  <main>
    <h1>司法試験過去問題集・判例検索</h1>

    <!--検索フォーム-->
    <v-textarea
      v-model="text"
      label="関連する判例を探したい文章を自由に入力してください。"
    ></v-textarea>

    <v-select
      v-model="apiVersion"
      :items="versionOptions"
      item-title="label"
      item-value="value"
      label="検索アルゴリズム"
      variant="outlined"
      density="comfortable"
    />

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
    <v-pagination v-model="resultPageNum" :length="20" @update:modelValue="update"></v-pagination>
    <div class="result">
      <dl class="result-dl" v-for="header in headers">
        <dt class="result-dt">{{ header }}</dt>
        <dd class="result-dd" v-for="item in page(filteredData[header])">
          <span v-html=item></span>
        </dd>
      </dl>
    </div>
    <v-pagination v-model="resultPageNum" :length="20" @update:modelValue="update"></v-pagination>


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
      resultPageNum: 1,
      apiVersion: 'v2',
      versionOptions: [
        { label: 'v1（BoW）', value: 'v1' },
        { label: 'v2（Embedding）', value: 'v2' },
      ],
    }
  },
  computed: {
    // 全文PDFへのリンクを作成
    filteredData() {
      let data = this.data
      let pdflink = ''
      if (data["ID"]) {
        if (location.host.includes('github')) {
          pdflink = Object.values(data["ID"]).map((x) => `<a target="_blank" href=${location.protocol}//${location.host}/shihoushiken/pdf/${x}.pdf>全文PDF</a>`);
        }
        else {
          pdflink = Object.values(data["ID"]).map((x) => `<a target="_blank" href=${location.protocol}//${location.host}/pdf/${x}.pdf>全文PDF</a>`);
        }
        data["全文PDF"] = pdflink
      }
      return data
    },
  },
  created() {
    if(this.$route.params['text']) {
      this.text = this.$route.params['text']
      this.search()
    }
  },
  methods: {
    //検索
    search() {
      this.loading = true
      // バージョンに応じたURLを設定
      let apiUrl = '';
      if (this.apiVersion == 'v1') {
        apiUrl = 'https://y0b0gygpsl.execute-api.ap-northeast-1.amazonaws.com/hanrei/';
      } else if (this.apiVersion == 'v2') {
        apiUrl = 'https://2wi66q2ng1.execute-api.ap-northeast-1.amazonaws.com/hanrei';
      }
      axios.get(apiUrl, { 
        headers: {'x-api-key': import.meta.env.VITE_AWS_GATEWAY_API_KEY},
        params: {
          text: this.text,
        }
      })
           .then(response => {
              this.data = response.data
              this.loading = false
           })
          .catch(error => {
              alert('エラーが発生しました。もう一度試してみてください。')
              this.loading = false
          })
    },
    page(resultArray) {
      if (this.data["ID"]) {
        return Object.values(resultArray).slice((this.resultPageNum-1)*5,this.resultPageNum*5)
      }
      return resultArray
    },
    update() {
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
  width: 1200px;
  margin: 0;
  padding: 0;
  display: table;
  border: 1px solid #d5d5d5;
  border-bottom: none;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.result-dl:last-child {
  width: 1200px;
  margin: 0;
  padding: 0;
  display: table;
  border: 1px solid #d5d5d5;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.result-dt {
  width: 200px;
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
  width:200px;
  display: table-cell;
  padding: 20px;
  margin: 0;
  margin-inline-start: 40px;
  border-right: 1px solid #d5d5d5;
}
</style>
