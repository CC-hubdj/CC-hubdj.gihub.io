<template>
  <div data-v-425277ec class="foodpanel-root_SzxU5">
    <div class="foodpanel-close_1_uql" style="display:none;">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        class="foodpanel-closeIcon_3a1DT"
      >
        <defs>
          <path
            id="a"
            d="M13.132 12l6.47-6.47a.75.75 0 0 0-1.061-1.06l-6.47 6.47-6.47-6.47a.75.75 0 0 0-1.06 1.06L11.01 12l-.072.071.071.071-6.47 6.47a.75.75 0 0 0 1.061 1.06l6.47-6.47 6.47 6.47a.75.75 0 0 0 1.06-1.06l-6.47-6.47.072-.07-.071-.072z"
          />
        </defs>
        <g fill="none" fill-rule="evenodd">
          <use fill="#fff" fill-rule="nonzero" xlink:href="#a" />
          <path d="M0 0h24v24H0z" />
        </g>
      </svg>
    </div>
    <div class="foodpanel-body_2RnD3">
      <div class="foodpanel-foodimg_15mlk">
        <img :src="sidebarComputed2(item.image_path)" :alt="item.name" />
      </div>
      <div class="foodpanel-foodinfo_3TGO2">
        <div class="foodpanel-foodname_1WIeM">
          <span class="attrTag-attrTag_2f7Ms_0 mini-tag-tag_1I2lF_0 foodpanel-tag_1lbRq">
            招牌
            <span class="attrTag-attrGhost_q-Hwj_0 mini-tag-ghost_2_w2f_0">招牌</span>
          </span>
          <p class="foodpanel-content_1evFj">{{item.name}}</p>
          <!---->
        </div>
        <div class="foodpanel-foodsales_1RSMf">
          <span>月售{{item.month_sales}}份</span>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span>好评率{{item.satisfy_rate}}%</span>
        </div>
        <div class="foodpanel-priceLine_17q14">
          <span
            class="salesInfo-price_3_oc1_0 foodpanel-salesInfo_3pRJz"
            style="color: rgb(255, 83, 57);"
          >
            <span>{{item.lowest_price}}</span>
            <span class="salesInfo-lowestPrice_3yG6H_0">起</span>
            <!---->
          </span>
          <div class="foodpanel-activityRow_39KPY">
            <!---->
            <!---->
          </div>
          <span class="foodpanel-cartBtn_2n3F_">
            <!---->
            <span class="cartbutton-entitybutton_9fUdS">
              <!---->
              <!---->
              <a  href="javascript:" role="button" aria-label="添加商品">
                <svg>
                  <use xlink:href="#cart-minus" />
                </svg>
              </a>
            </span>
          </span>
        </div>
        <p class="foodpanel-desc_xNJ_K">
          独门绝技
          {{item.description}}
        </p>
        <p class="foodpanel-priceDesc_o6B25">
          <span>价格说明</span>
          <svg>
            <use xlink:href="#question" />
            <svg viewBox="0 0 11 11" id="question">
              <g fill="none" fill-rule="evenodd">
                <path fill="#FFF" d="M-61-513h375v812H-61z" />
                <g fill-rule="nonzero">
                  <path fill="none" d="M-1-1h12v12H-1z" />
                  <path
                    fill="#7F7F7F"
                    d="M5.138 10.268a5.118 5.118 0 1 1 0-10.236 5.118 5.118 0 0 1 0 10.236zm0-.512a4.606 4.606 0 1 0 0-9.212 4.606 4.606 0 0 0 0 9.212zm.095-7.677c.578 0 1.048.144 1.41.447.361.296.542.7.542 1.207 0 .413-.117.759-.343 1.029-.082.093-.335.312-.76.658a1.423 1.423 0 0 0-.38.439c-.099.168-.144.354-.144.556v.144h-.967v-.144c0-.312.054-.582.18-.801.118-.236.462-.582 1.022-1.046l.154-.16c.163-.194.253-.397.253-.616 0-.296-.09-.523-.262-.692-.18-.169-.443-.253-.768-.253-.407 0-.705.118-.886.363-.163.202-.244.489-.244.86h-.95c0-.616.19-1.097.57-1.45.38-.364.904-.54 1.573-.54zM5.07 7.014c.19 0 .353.051.48.17.126.109.19.252.19.43a.58.58 0 0 1-.2.438.706.706 0 0 1-.47.169.673.673 0 0 1-.47-.177.567.567 0 0 1-.19-.43c0-.178.064-.321.19-.43a.666.666 0 0 1 .47-.17z"
                  />
                </g>
              </g>
            </svg>
          </svg>
        </p>
      </div>
      <!---->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      item: ""
    };
  },
   methods:{
  },
  activated() {},
  created() {
    var obj = eval("(" + this.$route.query.id + ")");
    var obj2 = eval("(" + this.$route.query.item + ")");
    // window.console.log(obj2);
    this.id = obj;
    this.item = obj2;
    // window.console.log(this.item);
  },

  mounted() {},

  components: {
      
  },

  computed: {
    sidebarComputed2() {
      return function(imgs) {
        let str = "";
        if (imgs.indexOf("png") > 0) {
          str = "png";
        } else {
          str = "jpeg";
        }
        let url = imgs.slice(0, 3) + "/" + imgs.slice(3);
        url = url.slice(0, 1) + "/" + url.slice(1);
        // console.log(url)
        url = `https://cube.elemecdn.com/${url}.${str}`;
        return url;
      };
    }
  },
};
</script>

<style lang="css" scoped>
/* .van-action-sheet__close{
    opacity: 0 !important;
} */
.mini-tag-ghost_2_w2f_0 {
  font-size: 1.43333rem !important;
}
.foodpanel-activityRow_39KPY {
  display: -webkit-flex;
  display: flex;
  overflow: hidden;
}
.foodpanel-spicyIcon_7023k {
  position: absolute;
  right: 0;
  top: 0;
  height: 0.346667rem;
  height: 3.466667vw;
  width: 0.346667rem;
  width: 3.466667vw;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAA7RJREFUWAnVV11oVEcU/s7NdRNjwpJsFAomkZgfRQ2ViFZIQVBEqQhSIpRGUfClEBAhQV+CUVAU3zT0obQolkJFsI9SFS2l2CjSKkSqccX4E2lidteENmuSvXN6bvSaXcydO9leBOdhZ+bOd77z7ZlzZ84FPsjWvT6Gk5/Ofx/arUAnJ9ZtQGp8AGnreiA2BIBe0NcbapDOXIRNhSieU4vuTWtD8KmlsLWrqfGLKCAbJYVpELpRTHEtPoRFvSCHF6M0AhAdQ9vlwyH4C6TQbxmxksgA1vvJH1etXpBVMARHAQ6igX8tJIBekI07yLBsmWoMyV8gjV4Q8B0yjkuyKpApJIBe0P5fL0DxJBjNuNalfwFCEhTsxLZ6MZFZid6e5pGapQOS55bDcwfL+m+/DElDDo0+QgJtTKgrIgjLh8Yu79kY7Tu9tPieUv8ODlfVf89NTXNy2EKYaAUlK2tPRSadDtgWehdE7PPLSrBvfRSjEYqAVWtyeHRvCBpyKHy3LFHVsP14U3HbrVgBUCSBYIaVnsSWB2mUjstR4DbGmteD8H59BQGqpeKVQtmEHENDY6gbddB58x80Pxuf9s6on56EM3LP4RlborLuBoNXz7j45iERTZSXRkrp7l2RHU7zzyHiTJALZo6kRidD3TZfQXI+vwgS5K4rwmcmOFOMryC55v4yI+Gd3NIimR9O8xVEjNtGLpg/St348wsjrAHIV1ChHflFMn7qIgvikRPhCC9aVxSEM1n3FVTyqHdQCrOrJiSSb1VJNXDYBBuE8RXkGhLhTBDB23Xm9lRlw9a38zwHWkFlu7/8USrGWybcU1UTOWdfVjb8r1LF92D0RCSql6yFyvwmDrXiPbxEdQRkb449vve792w2faATl1husU5TUknwKCvn0nB1/TZTm2xcYIQ8cKKq9pw42+7NTXr5t91lhWineDzrAtRbBkbIMy+fH20l0E/e3KSXmqAtMUF3ZhMt4wi5AtyCLPVi5FvF2GkiKAdD+ANknZ6r6MK8p/ef56xlTWYlyLNLVtd1yBfbUakGNOWLh363l0gPyEsSJ+K/CdbV8id933iovAS5xolFtZ+wg7MyrPPI8uqJfqh48qDVszXOIc/A62P98Z5YwcJGi3BA6iLDi9izlp7ooQX6Kva4b0fW06kP5ex53uNkzZIVnFGfM9TH4q1BQr9Y6qWpjwDZIvnc5H55FhePPXKi/Vy+q/UmdXW9qYWn3ea9ZdMUM49EDOHQodf8Bw+yRFHS5gNs/wHNcRQy4ri8mQAAAABJRU5ErkJggg==)
    no-repeat;
  background-size: contain;
}
.foodpanel-root_SzxU5 {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
.foodpanel-body_2RnD3 {
  position: relative;
  background-color: #fff;
  -webkit-flex-direction: column;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 2rem;
  padding-bottom: 20vw;
}
.foodpanel-foodimg_15mlk {
  width: 100%;
  height: 10rem;
  height: 100vw;
  display: block;
}
.foodpanel-foodimg_15mlk img {
  width: 100%;
  height: 100%;
}
.foodpanel-foodinfo_3TGO2 {
  position: relative;
  padding: 0.4rem 0.4rem 0;
  padding: 5vw 4vw 0;
  width: 100%;
  min-height: 2.933333rem;
  min-height: 29.333333vw;
}
.foodpanel-foodname_1WIeM {
  position: relative;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  margin-bottom: 0.24rem;
  margin-bottom: -2.6vw;
  margin-top: -0.566667rem;
}
.foodpanel-foodname_1WIeM .foodpanel-tag_1lbRq {
  margin-right: 0.133333rem;
  margin-right: 1.333333vw;
}
.foodpanel-foodname_1WIeM .foodpanel-content_1evFj {
  font-size: 1.233333rem;
  font-weight: 700;
  width: 7.466667rem;
  width: 74.666667vw;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.foodpanel-desc_xNJ_K {
  font-size: 0.293333rem;
  color: #666;
  line-height: 0.373333rem;
  line-height: 3.733333vw;
}
.foodpanel-priceDesc_o6B25 {
  display: -webkit-flex;
  display: flex;
  font-size: 0.293333rem;
  color: #666;
  margin-top: 0.266667rem;
  margin-top: 2.666667vw;
  -webkit-align-items: center;
  align-items: center;
  line-height: 0.293333rem;
  line-height: 2.933333vw;
  height: 0.293333rem;
  height: 2.933333vw;
}
.foodpanel-priceDesc_o6B25 svg {
  margin-left: 0.053333rem;
  margin-left: 0.533333vw;
  margin-top: 0.026667rem;
  margin-top: 0.266667vw;
  width: 0.293333rem;
  width: 2.933333vw;
  height: 0.293333rem;
  height: 2.933333vw;
}
.foodpanel-foodsales_1RSMf {
  font-size: 0.293333rem;
  color: #666;
  line-height: 1;
  margin-bottom: 0.24rem;
  margin-bottom: 2.4vw;
  margin-top: 4vw;
}
.foodpanel-close_1_uql {
  width: 0.746667rem;
  width: 7.466667vw;
  height: 0.746667rem;
  height: 7.466667vw;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.2);
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  position: absolute;
  z-index: 1;
  top: 0.213333rem;
  top: 2.133333vw;
  right: 0.4rem;
  right: 4vw;
}
.foodpanel-closeIcon_3a1DT {
  width: 0.533333rem;
  width: 5.333333vw;
  height: 0.533333rem;
  height: 5.333333vw;
}
.foodpanel-priceLine_17q14 {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  margin-bottom: 0.24rem;
  margin-bottom: 2.4vw;
}
.foodpanel-salesInfo_3pRJz {
  margin-right: 0.133333rem;
  margin-right: 1.333333vw;
}
.foodpanel-cartBtn_2n3F_ {
  position: absolute;
  right: 0.4rem;
  right: 5vw;
}
.foodpanel-rec_y81Zr {
  padding: 0.4rem 0.4rem 0;
  padding: 4vw 4vw 0;
}
.foodpanel-recTitle_2TKP0 {
  color: #333;
  font-size: 0.426667rem;
  font-weight: 700;
  margin-bottom: 0.266667rem;
  margin-bottom: 2.666667vw;
}
.foodpanel-recImg_XOjOX {
  width: 4.4rem;
  width: 44vw;
  height: 4.4rem;
  height: 44vw;
  display: block;
  border-top-right-radius: 0.08rem;
  border-top-right-radius: 0.8vw;
  border-top-left-radius: 0.08rem;
  border-top-left-radius: 0.8vw;
}
.foodpanel-recList_qGC5B {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  margin: 0 -0.16rem;
  margin: 0 -1.6vw;
}
.foodpanel-recItem_3IhZ2 {
  width: 4.4rem;
  width: 44vw;
  box-shadow: 0 0 0.08rem 0 rgba(0, 0, 0, 0.07);
  box-shadow: 0 0 0.8vw 0 rgba(0, 0, 0, 0.07);
  margin: 0 0.16rem 0.32rem;
  margin: 0 1.6vw 3.2vw;
  border-radius: 0.08rem;
  border-radius: 0.8vw;
}
.foodpanel-recInfo_PTFxn {
  padding: 0.266667rem;
  padding: 2.666667vw;
}
.foodpanel-recName_3rz0f {
  color: #333;
  font-size: 0.4rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 9em;
  margin-bottom: 0.266667rem;
  margin-bottom: 2.666667vw;
}
.foodpanel-recPrice_2Nq8F {
  -webkit-justify-content: space-between;
  justify-content: space-between;
  margin-top: 0.266667rem;
  margin-top: 2.666667vw;
}
.foodcommon-activity_2wCAV,
.foodpanel-recPrice_2Nq8F {
  display: -webkit-flex;
  display: flex;
}
.foodcommon-activity_2wCAV > span {
  height: 0.4rem;
  height: 4vw;
  padding: 0 0.08rem;
  padding: 0 0.8vw;
}
.foodcommon-activity_2wCAV .foodcommon-rateGhost_1xmLU {
  border-radius: 0.026667rem;
  border-radius: 0.266667vw;
  border: 0.026667rem solid hsla(8, 79%, 62%, 0.3);
  border: 0.266667vw solid hsla(8, 79%, 62%, 0.3);
  color: #eb6551;
}
.foodcommon-activity_2wCAV .foodcommon-rateTextGhost_1a27R {
  color: #f07373;
}
.foodcommon-stockTip_2gIB4 {
  background-color: rgba(255, 76, 13, 0.15);
  border-radius: 0.026667rem;
  border-radius: 0.266667vw;
  font-size: 0.266667rem;
  color: #ff4c0d;
  height: 0.346667rem;
  height: 3.466667vw;
  line-height: 0.346667rem;
  line-height: 3.466667vw;
  padding: 0 0.066667rem;
  padding: 0 0.666667vw;
  vertical-align: middle;
  margin-left: 0.08rem;
  margin-left: 0.8vw;
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
/*# sourceMappingURL=https://pages.elenet.me/perf-sentry-sourcemaps/h5/1571292521694/shop.6d1126a.css.map*/
</style>