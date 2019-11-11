<template>
  <div z-index="10" id="cart">
    <button type="button" class="index-essentialTip_vf4aS_0" style="display: none;">去点必选品</button>
    <footer class="cartview-cartview_m8q55">
      <div class="cartview-cartmask_39Pun" style="z-index: 10; display: none;"></div>
      <div class="cartview-cartbody_3QIXw cartview-cartbodyNoTip_1MF9b" style="z-index: 11;">
        <section class="discount-tip-discountTip_3QgtV_0" style="display: none;"></section>
        <div style="opacity: 0;">
          <div class="cartview-cartheader_1Wk12">
            <div class="cartview-headerText_1pEZG">
              <span>已选商品</span>
              <!---->
              <!---->
            </div>
            <a href="javascript:" ubt-click="101179" class="cartview-cartheaderRemove_1Xg8n">
              <svg>
                <use xlink:href="#cart-remove" />
              </svg>
              <span>清空</span>
            </a>
          </div>
          <div class="entityList-cartbodyScroller_nZp54_0">
            <!---->
            <ul class="entityList-cartlist_1hnWi_0"></ul>
            <!---->
          </div>
        </div>
      </div>
      <div class="bottomNav-cartfooter_1Xb8t_0" style="z-index: 11;">
        <span
          role="button"
          aria-label="购物车"
          attr-quantity="0"
          class="bottomNav-carticon_E1nII_0 bottomNav-empty_3zwfj_0"
          @click="alertCartList"
        >
          <!---->
        </span>
        <div role="button" aria-label="购物车有商品0件，共0元，。" class="bottomNav-cartInfo_3l5zP_0">
          <p class="bottomNav-carttotal_1DJt5_0">
            <span class="bottomNav-carttotalOriginal_2tu8R_0">未选购商品</span>
          </p>
          <p class="bottomNav-cartdelivery_1TjrT_0"></p>
        </div>
        <a role="button" href="javascript:;" class="submit-btn-submitbutton_3t114_0">
          <span>去结算</span>
        </a>
      </div>
    </footer>
    <van-action-sheet v-model="show" :style="{height:'50%'}" title="购物车">
      <CartList />
    </van-action-sheet>
    <!---->
  </div>
</template>

<script>
import CartList from "../pages/CartList.vue";
export default {
  data() {
    return {
      show: false
    };
  },
  components: {
    CartList
  },
  methods: {
    alertCartList() {
      this.show = true;
      //   this.$router.push({
      // path: "/cartList",
      // name: "cartList"
      // query: {
      //   id: JSON.stringify(i2.id),
      //   item: JSON.stringify(i2)
      // }
      //   });
      // window.location.href
      //   window.console.log(index);
    }
  }
};
</script>

<style lang="css" scoped>
.van-action-sheet__close {
  width: 0.746667rem;
  width: 1.466667vw;
  height: 0.746667rem;
  height: 5.466667vw !important;
  border-radius: 50%;
}
.bottomNav-cartfooter_1Xb8t_0 {
  z-index: 9999 !important;
}
#cart {
  overflow: hidden;
}
.submit-btn-submitbutton_3t114_0 {
  font-size: 0.9rem;
}

.bought-list-root_Z7_6c_0 {
  padding-left: 0.266667rem;
  padding-left: 2.666667vw;
}
.bought-list-container_LrfQG_0,
.bought-list-content_1C8Ez_0 {
  display: -webkit-flex;
  display: flex;
}
.bought-list-content_1C8Ez_0 {
  padding: 0.133333rem 0.133333rem 0.133333rem 0.053333rem;
  padding: 1.333333vw 1.333333vw 1.333333vw 0.533333vw;
  overflow-x: scroll;
}
.bought-list-content_1C8Ez_0::-webkit-scrollbar {
  display: none;
}
.bought-list-item_1-8xu_0 {
  height: 1.786667rem;
  height: 17.866667vw;
  width: 4.373333rem;
  width: 43.733333vw;
  padding: 0.266667rem;
  padding: 2.666667vw;
  -webkit-flex: none;
  flex: none;
  box-shadow: 0 0 0.08rem 0 rgba(0, 0, 0, 0.15);
  box-shadow: 0 0 0.8vw 0 rgba(0, 0, 0, 0.15);
  border-radius: 0.026667rem;
  border-radius: 0.266667vw;
  margin-right: 0.133333rem;
  margin-right: 1.333333vw;
}
.bought-list-title_1erXM_0 {
  font-size: 0.373333rem;
  margin-bottom: 0.266667rem;
  margin-bottom: 2.666667vw;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.bought-list-info_2ieui_0 {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: space-between;
  justify-content: space-between;
}
.index-essentialTip_vf4aS_0 {
  position: fixed;
  bottom: 2rem;
  bottom: 20vw;
  right: 0.133333rem;
  right: 1.333333vw;
  color: #fff;
  padding: 0.133333rem 0.266667rem;
  padding: 1.333333vw 2.666667vw;
  box-shadow: 0 0.013333rem 0.026667rem #ddd;
  box-shadow: 0 0.133333vw 0.266667vw #ddd;
  font-size: 0.32rem;
  font-weight: 700;
  background-color: #ff6000;
  -webkit-appearance: none;
  outline: none;
  border: 0.08rem solid #fff;
  border: 0.8vw solid #fff;
  border-radius: 0.666667rem;
  border-radius: 6.666667vw;
  z-index: 10;
  transition: opacity 0.3s ease;
}
.index-essentialTip_vf4aS_0:active {
  opacity: 0.7;
}
.index-essentialTip_vf4aS_0.index-isIPhoneX_gADqz_0 {
  bottom: 2.453333rem;
  bottom: 24.533333vw;
}
.disabletip-root_23zsl_0 {
  z-index: 10;
  position: fixed;
  bottom: 1.28rem;
  bottom: 12.8vw;
  left: 0;
  right: 0;
  background-color: rgba(255, 250, 218, 0.98);
  height: 0.96rem;
  height: 9.6vw;
  color: #666;
  font-size: 0.32rem;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  padding: 0.16rem 0.266667rem;
  padding: 1.6vw 2.666667vw;
  box-shadow: 0 0.013333rem 0 0.013333rem #eceae0;
  box-shadow: 0 0.133333vw 0 0.133333vw #eceae0;
}
.disabletip-root_23zsl_0.disabletip-isIPhoneX_1XasZ_0 {
  bottom: 1.733333rem;
  bottom: 17.333333vw;
}
.disabletip-moreBtn_2UQtV_0 {
  text-align: center;
  line-height: 0.64rem;
  line-height: 6.4vw;
  text-decoration: none;
  display: block;
  color: #ff5339;
  border: 0.013333rem solid #ff5339;
  border: 0.133333vw solid #ff5339;
  height: 0.64rem;
  height: 6.4vw;
  width: 2.24rem;
  width: 22.4vw;
  font-size: 0.32rem;
}
.disabletip-text__QAMJ_0 {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
}
.disabletip-icon_2Z7dt_0 {
  height: 0.346667rem;
  height: 3.466667vw;
  width: 0.346667rem;
  width: 3.466667vw;
  margin-right: 0.16rem;
  margin-right: 1.6vw;
}
</style>