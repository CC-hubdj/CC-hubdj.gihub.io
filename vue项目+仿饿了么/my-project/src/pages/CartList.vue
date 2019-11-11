<template>
  <div class="car-list-container">
    <ul>
      <li class="car-list" v-for="(v,i) in goodsList" :key="i">
        <div class="car-list__img">
          <img :src="v.url" />
        </div>
        <div class="car-list__detail">
          <p class="car-list__detail__title">{{v.title}}</p>
          <p class="car-list__detail__number">
            数量：
            <button
              class="number--decrease iconfont icon-jianhao"
              @click="changeNumber(v.id,-1)"
            ></button>
            <input type="text" readonly v-model="v.number" />
            <button class="number--increase iconfont icon-iconfont7" @click="changeNumber(v.id,1)"></button>
          </p>
          <p class="car-list__detail__type">
            规格：
            <span>{{v.stock}}</span>
          </p>
          <p class="car-list__detail__price">
            单价：
            <span>￥{{v.price}}</span>
          </p>
          <p class="car-list__detail__sum">
            小计：
            <span>￥{{v.price*v.number}}</span>
          </p>
        </div>
        <div class="car-list__operate">
          <span class="iconfont icon-shanchu delete-goods" @click="del(v.id)"></span>
          <label>
            <input
              type="checkbox"
              name="goods"
              :checked="v.select==true"
              @change="toggleSelect(v.id)"
            />
            <span></span>
          </label>
        </div>
      </li>
    </ul>
    <div class="car-foot-nav">
      <button class="sum-price">总额：￥{{sum}}</button>
      <router-link :to="{name:'index'}" class="continue-shopping" tag="button">继续购物</router-link>
      <button class="to-pay">去结算</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";
export default {
  name: "car",
  data() {
    return {};
  },

  methods: {
    ...mapMutations(["deleteGoods", "updateGoods"]),
    findPosition(id) {
      return this.goodsList.findIndex(item => {
        return item.id == id;
      });
    },

    changeNumber(id, val) {
      var i = this.findPosition(id);
      var number = this.goodsList[i].number;
      this.updateGoods({
        index: i,
        key: "number",
        value: number + val <= 0 ? 1 : number + val
      });
    },

    del(id) {
      var i = this.findPosition(id);
      this.deleteGoods(i);
    },

    toggleSelect(id) {
      var i = this.findPosition(id);
      var select = this.goodsList[i].select;
      this.updateGoods({
        index: i,
        key: "select",
        value: !select
      });
    }
  },
  computed: {
    ...mapGetters(["sum"]),
    goodsList() {
      return this.$store.state.goodsList;
    }
  },
  mounted() {
    this.$ajax.get("/api/car", function(res) {
      window.console.log(res);
    });
  }
};
</script>