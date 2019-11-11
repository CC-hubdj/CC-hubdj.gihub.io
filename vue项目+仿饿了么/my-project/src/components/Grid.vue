<template>
  <van-grid :column-num="5">
    <van-grid-item
      v-for="(g,index) in gridsComputed"
      :key="index"
      :icon="g.imgurl"
      :text="g.name"
      style="width:90px;height:90px"/>
  </van-grid>
</template>

<script>
// 按需引入
import Vue from "vue";
import { Grid, GridItem } from "vant";
Vue.use(Grid).use(GridItem);

export default {
  // 双向数据绑定
  data() {
    return {
      grids: []
    };
  },
  // 获取数据
  created() {
    this.loadMore();
  },
  methods: {
    //请求后端的宫格数据
    loadMore() {
      //   // 写法1
      this.$axios.get("http://localhost:3000/entries").then(({ data }) => {
        // window.console.log(data);
        this.grids = data;
      });
    }
  },
  computed: {
    //   14->10
    gridsComputed() {
      return this.grids.slice(0, 10);
    }
  }
};
</script>

<style lang="css" >
.van-hairline--top{
    margin-bottom: 10px;
}
.van-grid-item__icon {
  font-size: 45px;
}
[class*=van-hairline]::after {
    border: none;
}
</style>