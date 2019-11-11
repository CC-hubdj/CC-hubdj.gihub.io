<template>
  <van-cell-group>
    <van-cell title="我的地址" icon="location-o" is-link />
  </van-cell-group>
</template>

<script>
import Vue from "vue";
import { Cell, CellGroup } from "vant";

Vue.use(Cell).use(CellGroup);
export default {};
</script>

<style lang="css">
.van-cell-group {
  margin-top: 0.266667rem;
  margin-top: 2.666667vw;
  /* border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd; */
  font-size: 0.426667rem;
  line-height: 0.453333rem;
  line-height: 4.533333vw;
  background: #fff;
}
.van-cell__right-icon {
  margin-right: -0.4447rem !important;
  color: #bbb;
  font-size: 0.9rem;
}
.van-cell {
  font-size: 0.9999rem;
}
.van-icon-location-o:before{
  width: 0.48rem;
  width: 4.8vw;
  height: 0.48rem;
  height: 4.8vw;
  fill: rgb(74, 165, 240);
}
</style>