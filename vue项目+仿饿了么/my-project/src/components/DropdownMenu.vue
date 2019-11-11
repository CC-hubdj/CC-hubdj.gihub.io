<template>
  <van-sticky :sticky="true" :offset-top="50">
    <van-dropdown-menu>
      <van-dropdown-item v-model="value" :options="option" />
      <van-dropdown-item title="距离最近" />
      <van-dropdown-item title="品质联盟" />
      <van-dropdown-item title="筛选" ref="item">
        <van-switch-cell v-model="switch1" title="包邮" />
        <van-switch-cell v-model="switch2" title="团购" />
        <van-button block type="info" @click="onConfirm">确认</van-button>
      </van-dropdown-item>
    </van-dropdown-menu>
  </van-sticky>
</template>
<script>
import Vue from "vue";
import { DropdownMenu, DropdownItem, switchCell, Search } from "vant";
Vue.use(DropdownMenu)
  .use(DropdownItem)
  .use(switchCell)
  .use(Search);
export default {
  data() {
    return {
      value: 0,
      switch1: false,
      switch2: false,
      option: [
        { text: "综合排序", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 }
      ]
    };
  },
  methods: {
    onConfirm() {
      this.$refs.item.toggle();
    }
  }
};
</script>

