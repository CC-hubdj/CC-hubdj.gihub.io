<template>
  <van-divider class="deviders">推荐商家</van-divider>
</template>

<script>
import Vue from "vue";
import { Divider } from "vant";

Vue.use(Divider);
export default {
  //   data() {
  //     return {};
  //   }
};
</script>

<style lang="css" scoped>
.deviders {
  height: 9.6vw;
  font-size: 0.96rem;
  color: #000;
  margin: 0;
}
.van-divider:before,
.van-divider:after {
  display: block;
  content: "";
  width: 2.0vw;
  height: 0.266667vw;
  background-color: rgb(150, 143, 143);
}
</style>