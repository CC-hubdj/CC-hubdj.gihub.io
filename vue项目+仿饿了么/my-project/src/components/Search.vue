<template>
  <van-sticky :sticky="true">
    <van-search
      v-model="value"
      placeholder="搜索饿了么商家、商品名称"
      show-action
      shape="round"
      @search="onSearch"
      class="main-search"
    >
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
  </van-sticky>
</template>

<script>
import Vue from "vue";
import { Search } from "vant";
Vue.use(Search);

export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {
    //搜索
    onSearch() {
      this.$store.dispatch("setAuthor", {
        value: this.value
      });
      window.console.log(this.value);
    }
  }
};
</script>

<style lang="css">
.main-search {
  background-image: linear-gradient(90deg, #0af, #0085ff) !important;
  height: 3.2rem;
  position: relative;
  padding-right: 1.016667rem !important;
}
.main-search .van-search__content {
  height: 2.2rem !important;
  width: 2.666667rem;
  background-color: #fff;
}
.main-search .van-cell {
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: #fff;
}
.main-search .van-field__body {
  border: 1px solid #fff !important;
  height: 2.4rem !important;
  font-size: 1.213333rem;
}
.main-search .van-field__control {
  display: block;
  height: 100%;
  line-height: 5.96rem !important;
  font-size: 15px !important;
}
.main-search .van-search__content--round {
  border-radius: 0;
}
.main-search .van-cell__value {
  text-align: center;
}
.main-search .van-search__action {
  border-radius: 10%;
  position: absolute;
  right: 1.066667rem;
  /* top: rem; */
  background-color: #f7f8fa;
}
</style>