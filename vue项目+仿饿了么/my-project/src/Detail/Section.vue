<template>
  <section data-v-425277ec class="container menuview-menuList_JqDMu" coupons-data="[object Object]">
    <div data-v-425277ec class="scroller">
      <dl data-v-425277ec role="menu">
        <dt data-v-425277ec role="heading" aria-label="热销，大家喜欢吃，才叫真好吃。">
          <div data-v-425277ec class="category-title">
            <strong data-v-425277ec class="category-name">热销</strong>
            <span data-v-425277ec class="category-desc">大家喜欢吃，才叫真好吃。</span>
          </div>
          <!---->
        </dt>
        <dd data-v-425277ec aria-label="干炒牛河粉，原价18元，现价18元。" role="menuitem" class>
          <div data-v-425277ec class="fooddetails-root_2HoY2" scan-data="{entity}">
            <span class="fooddetails-logo_2Q0S7">
              <!---->
              <img
                src="https://cube.elemecdn.com/b/30/39c696dfd9005002d9276f1091bb0jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp"
                alt="干炒牛河粉"
                title="干炒牛河粉"
              />
            </span>
            <section class="fooddetails-info_1fBtn">
              <p class="fooddetails-name_P4hpW">
                <!---->
                <span class="fooddetails-nameText_250s_">干炒牛河粉</span>
                <!---->
              </p>
              <p class="fooddetails-desc_3tvBJ">
                牛肉
                主要原料：牛肉
              </p>
              <p class="fooddetails-sales_1ETVq">
                <span>月售67份</span>
                <span>好评率83%</span>
              </p>
              <div class="fooddetails-activityRow_1FKti">
                <!---->
                <!---->
              </div>
              <span
                class="salesInfo-price_3_oc1_0 fooddetails-salesInfo_MPG41"
                style="color: rgb(255, 83, 57);"
              >
                <span>18</span>
                <!---->
                <!---->
              </span>
              <div class="fooddetails-button_RwKqC">
                <span>
                  <!---->
                  <span class="cartbutton-entitybutton_9fUdS">
                    <!---->
                    <!---->
                    <a href="javascript:" role="button" aria-label="添加商品">
                      <svg style="fill: rgb(35, 149, 255);">
                        <use xlink:href="#cart-minus" />
                      </svg>
                    </a>
                  </span>
                </span>
              </div>
            </section>
          </div>
        </dd>
        <!---->
      </dl>
    </div>
    <div data-v-425277ec>
      <div class="specpanel-mask_1zC4L" style="display: none;"></div>
      <div class="specpanel-root_QLZIb" style="display: none;">
        <!---->
      </div>
    </div>
    <!---->
  </section>
</template>

<script>
export default {
  methods: {
    // onLoad() {
    //   this.$axios.get("http://localhost:3000/restaurants").then(({ data }) => {
    //     this.restaurants = this.restaurants.concat(data);
    //     // ES6
    //     // this.restaurants = [...this.restaurants, ...data];
    //     window.console.log(data);

    //     // 加载状态结束
    //     this.loading = false;
    //     // 数据全部加载完成
    //     if (this.restaurants.length >= 15) {
    //       this.finished = true;
    //     }
    //   });
    //   window.console.log("到底部了");
    // },
    // 跳转详情页
    navToDetailShow(index) {
      //  /detail/123?plan=private
      this.$router.push({
        name: "detailShow",
        // 建议用这种方式
        params: { id: index }
        // query: { plan: "private" }
      });
      // window.location.href
      window.console.log(index);
    }
  }
};
</script>