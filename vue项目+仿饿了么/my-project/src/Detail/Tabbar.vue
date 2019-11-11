<template>
  <van-tabs v-model="activeName" :sticky="true">
    <van-tab title="点餐" name="a">
      <Recommend1 />
      <CartFoot />
      <Sidebar />
    </van-tab>
    <van-tab title="评价" name="b">
          <Recommend2 />
    </van-tab>
    <van-tab title="商家" name="c">
      <Recommend3 />
    </van-tab>
  </van-tabs>
</template>

<script>
import Vue from "vue";
import { Tab, Tabs, Button } from "vant";
Vue.use(Tab)
  .use(Tabs)
  .use(Button);
import Recommend1 from "./Recommend1.vue";
import Recommend2 from "./Recommend2.vue";
import Recommend3 from "./Recommend3.vue";
import Sidebar from "../Detail/Sidebar.vue";
import CartFoot from "../Detail/CartFoot.vue";
export default {
  name: "app",
  data() {
    return {
      //   active: 0,
      activeName: "a"
    };
  },
  components: {
    Recommend1,
    Recommend2,
    Recommend3,
    Sidebar,
    CartFoot
  }
};
</script>

<style lang="css" >
.van-tabs__line {
  width: 32.5px !important;
  background-color: rgb(35, 149, 255) !important;
}

.van-tab--active {
  color: #333 !important;
  font-weight: 700 !important;
}

.van-tab {
  color: #666;
  font-weight: 400;
  font-size: 16px;
}
.van-button {
  width: 100%;
}

.van-button--primary {
  background-color: #fff;
  border: none;
}
.van-button::before {
  background-color: #fff;
}

.van-hairline--top-bottom::after,
.van-hairline-unset--top-bottom::after {
  border-top: none;
}

.van-tabs__content {
  color: #000;
  /* margin-top: 90px; */
}
</style>