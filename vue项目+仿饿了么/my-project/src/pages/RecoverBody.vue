<template>
  <div class="activity-body">
    <a
      v-for="(i,index) in recoverBodyComputed"
      :key="index"
      ubt-data-title="限时好礼"
      ubt-click="951"
      ubt-data-sort_index="0"
      ubt-data-requrest_id
      class="discover-food"
    >
      <img :src="i.imgurl" width="324" height="322" />
      <div>
        <p class="food-name ui-ellipsis">{{i.title}}</p>
        <div class="food-info clearfix">
          <div class="food-price">
            <span class="price ui-ellipsis">
              <span>{{i.points_required}}金币</span>
              <!---->
            </span>
            <del class="original-price ui-ellipsis">¥{{i.original_price}}</del>
          </div>
        </div>
      </div>
      <span class="discount">{{i.corner_marker}}</span>
    </a>
  </div>
</template>

<script>
export default {
  // 双向数据绑定
  data() {
    return {
      recoverBody: []
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
      this.$axios.get("http://localhost:3000/recoverBody").then(({ data }) => {
        // window.console.log(data);
        this.recoverBody = data;
      });
    }
  },
  computed: {
    //   14->10
    recoverBodyComputed() {
      return this.recoverBody;
    }
  }
};
</script>

<style lang="css">
.activity-more,
.gift-list-more {
  font-size: 0.346667rem;
  color: #999;
  text-align: center;
  padding: 0.4rem 0 0.48rem;
  padding: 0 0 4.8vw;
}
.activity-more {
  padding-top: 0;
  padding-bottom: 0.4rem;
  padding-bottom: 4.666667rem !important;
}
.activity-body {
  padding: 0.32rem 0 0.4rem 0.4rem;
  padding: 3.2vw 0 4vw 4vw;
  white-space: nowrap;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.discover-food {
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  width: 2.96rem;
  width: 29.6vw;
  margin-right: 0.16rem;
  margin-right: 1.6vw;
}
.discover-food img {
  width: 4.32rem;
  width: 43.2vw;
  height: 2.933333rem;
  height: 29.333333vw;
  margin-bottom: 0.253333rem;
  margin-bottom: 2.533333vw;
}
.discover-food .discount {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 0.293333rem;
  color: #fff;
  background: #413d3c;
  padding: 0.066667rem;
  padding: 0.666667vw;
}
.discover-food .food-name {
  font-size: 0.346667rem;
  color: #333;
  margin-bottom: 0.133333rem;
  margin-bottom: 1.333333vw;
}
.discover-food .food-price {
  height: 0.64rem;
  height: 6.4vw;
  line-height: 0.64rem;
  line-height: 6.4vw;
}
.discover-food .price {
  font-size: 0.346667rem;
  height: 0.48rem;
  height: 4.8vw;
  line-height: 0.48rem;
  line-height: 4.8vw;
  color: #ff5339;
  margin-right: 0.093333rem;
  margin-right: 0.933333vw;
  max-width: 1.333333rem;
  max-width: 13.333333vw;
  display: inline-block;
  vertical-align: middle;
}
.discover-food .price .yuan {
  font-size: 0.293333rem;
}
.discover-food .original-price {
  font-size: 0.293333rem;
  color: #aaa;
  max-width: 1.066667rem;
  max-width: 10.666667vw;
  display: inline-block;
  vertical-align: middle;
}
.discover-food .grab {
  float: right;
  font-size: 0.4rem;
  color: #fff;
  background: #f94843;
  padding: 0.12rem 0.333333rem;
  padding: 1.2vw 3.333333vw;
  border-radius: 0.08rem;
  border-radius: 0.8vw;
  line-height: 0.4rem;
  line-height: 4vw;
}
.clearfix:after,
.clearfix:before {
  display: table;
  line-height: 0;
  content: "";
  clear: both;
}
.svg-next {
  height: 0.24rem;
  height: 2.4vw;
  width: 0.133333rem;
  width: 1.333333vw;
  margin-left: 0.146667rem;
  margin-left: 1.466667vw;
}
.swipe {
  height: 2.866667rem;
  height: 28.666667vw;
  color: #fff;
}
.swipe img {
  width: 100%;
}
.ui-ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.activity-recommend {
  padding-bottom: 0.4rem;
  padding-bottom: 4vw;
}
.top-banner {
  line-height: 1;
  width: 100%;
  display: block;
}
body[data-v-1421ee24],
html[data-v-1421ee24] {
  -webkit-text-size-adjust: 100%;
}
.order-item[data-v-1421ee24] {
  display: -webkit-flex;
  display: flex;
  background: #fff;
  padding: 0.4rem;
  padding: 4vw;
}
.order-owner[data-v-1421ee24] {
  margin-right: 0.2rem;
  margin-right: 2vw;
  padding-top: 0.026667rem;
  padding-top: 0.266667vw;
}
.order-owner img[data-v-1421ee24] {
  width: 0.8rem;
  width: 8vw;
  border-radius: 50%;
}
.order-detail[data-v-1421ee24] {
  -webkit-flex: 1;
  flex: 1;
}
.owner-name[data-v-1421ee24] {
  font-size: 0;
  color: #666;
  margin-bottom: 0.08rem;
  margin-bottom: 0.8vw;
  padding-left: 0.266667rem;
  padding-left: 2.666667vw;
}
.owner-name .name[data-v-1421ee24] {
  font-size: 0.293333rem;
  font-weight: 700;
}
.owner-name .tag[data-v-1421ee24] {
  display: inline-block;
  margin-left: 0.12rem;
  margin-left: 1.2vw;
  font-size: 0.266667rem;
  color: #f94843;
  border: 1px solid #fda4a2;
  border-radius: 0.026667rem;
  border-radius: 0.266667vw;
  padding: 0 0.053333rem;
  padding: 0 0.533333vw;
}
.rating[data-v-1421ee24] {
  font-size: 0.293333rem;
  color: #999;
  padding: 0 0.266667rem;
  padding: 0 2.666667vw;
}
.rating .rating-star[data-v-1421ee24] {
  margin-right: 0.133333rem;
  margin-right: 1.333333vw;
  position: relative;
  top: 0.026667rem;
  top: 0.266667vw;
}
.rating .rating-star .star[data-v-1421ee24] {
  fill: #ff9a0d;
  width: 0.28rem;
  width: 2.8vw;
  height: 0.28rem;
  height: 2.8vw;
}
.comment[data-v-1421ee24] {
  font-size: 0.32rem;
  color: #666;
  padding: 0 0.266667rem;
  padding: 0 2.666667vw;
  margin-top: 0.213333rem;
  margin-top: 2.133333vw;
  margin-bottom: 0.32rem;
  margin-bottom: 3.2vw;
  word-break: break-all;
}
.comment .ellipsis[data-v-1421ee24] {
  display: none;
}
.comment .unfold[data-v-1421ee24] {
  color: #3190e8;
  cursor: pointer;
  margin-top: 0.066667rem;
  margin-top: 0.666667vw;
  display: inline-block;
}
.comment.overflow .ellipsis[data-v-1421ee24] {
  display: inline;
  display: initial;
}
.comment.overflow .unfold[data-v-1421ee24] {
  display: inline-block;
}
.comment.overflow .sub-text[data-v-1421ee24] {
  display: none;
}
.foods[data-v-1421ee24] {
  border-bottom: 0.026667rem solid #eee;
  border-bottom: 0.266667vw solid #eee;
  padding: 0.266667rem 0.133333rem 0 0.266667rem;
  padding: 2.666667vw 1.333333vw 0 2.666667vw;
  background: #f9f9f9;
}
.foods .restaurant[data-v-1421ee24] {
  font-size: 0.266667rem;
  color: #999;
  margin-bottom: 0.266667rem;
  margin-bottom: 2.666667vw;
}
.foods .restaurant .shop-icon[data-v-1421ee24] {
  position: relative;
  top: 0.026667rem;
  top: 0.266667vw;
  margin-right: 0.08rem;
  margin-right: 0.8vw;
  width: 0.226667rem;
  width: 2.266667vw;
  height: 0.226667rem;
  height: 2.266667vw;
}
.foods .restaurant .restaurant-name[data-v-1421ee24] {
  font-weight: 700;
  color: #888;
}
.foods .restaurant .restaurant-data[data-v-1421ee24] {
  float: right;
}
.foods .food[data-v-1421ee24] {
  display: inline-block;
  position: relative;
  margin-right: 0.133333rem;
  margin-right: 1.333333vw;
  margin-bottom: 0.266667rem;
  margin-bottom: 2.666667vw;
  width: 2.466667rem;
  width: 24.666667vw;
  height: 2.466667rem;
  height: 24.666667vw;
  min-width: 31%;
}
.foods .food .food-amount[data-v-1421ee24] {
  position: absolute;
  right: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.7);
  font-size: 0.24rem;
  font-weight: 700;
  color: #fff;
  padding: 0 0.053333rem;
  padding: 0 0.533333vw;
  border-bottom-left-radius: 0.08rem;
  border-bottom-left-radius: 0.8vw;
}
.foods .food img[data-v-1421ee24] {
  width: 100%;
  height: 100%;
  max-height: 2.48rem;
  max-height: 24.8vw;
  margin: 0;
}
.foods .food .food-name[data-v-1421ee24] {
  position: absolute;
  width: 100%;
  bottom: 0;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAABaCAYAAACSa4e+AAAAAXNSR0IArs4c6QAAAUFJREFUKBVVUkuug0AMC0lA9ALsOQXL3v843fFpy7OdMughtRqc+JMwcZ6nd3jSzPz5fFosy9LP8+w5TVO8Xi/zdV3j8Xh4juPo+753/vl8chgGz23bvO97Yyne77cl/gJalt/vVwc2Bx4XAvRMII6DJdwDEt3dDLEgmvAJNpPOhMmERIrVvBIF6RzHoYPLnTGuuShoikEJ6cDUGIM9xYKy5mLmaHnULEHUAwRzKDNPkE5j0+oUjD3NlM3U4aSdmqUDuBbOKYF0Ci8dItJhD146eql8WwDmSynzoLnIVONlypFPOnMbyRITaOTaD0o1eztQA7/6cDiI3rZBVn0mbYwsums/YkGeyKmRW7N6UNdc9ycgItYvYbst90241qLVlVdjcT/a8w/5zyKz7tjlXuHBSoVHmestU+m0cQCXV0Murz+WU14hDV2l3wAAAABJRU5ErkJggg==);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  font-size: 0.293333rem;
  font-weight: 700;
  color: #fff;
  padding: 0.56rem 0.12rem 0.133333rem;
  padding: 5.6vw 1.2vw 1.333333vw;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.order-footer[data-v-1421ee24] {
  position: relative;
  padding: 0.266667rem;
  padding: 2.666667vw;
  background: #fcfcfc;
  min-height: 1.333333rem;
  min-height: 13.333333vw;
}
.price[data-v-1421ee24] {
  background: #fcfcfc;
  font-size: 0.32rem;
  font-weight: 700;
  color: #666;
  margin-top: 0.133333rem;
  margin-top: 1.333333vw;
}
.price .amount[data-v-1421ee24] {
  position: relative;
  top: 0.026667rem;
  top: 0.266667vw;
  font-size: 0.426667rem;
  color: #ff6000;
  margin: 0 0.133333rem;
  margin: 0 1.333333vw;
}
.price .reduce[data-v-1421ee24] {
  font-size: 0.24rem;
  color: #ff6000;
}
.benefit[data-v-1421ee24] {
  font-size: 0.266667rem;
  color: #666;
  max-width: 4.8rem;
  max-width: 48vw;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.benefit span[data-v-1421ee24] {
  line-height: 0.266667rem;
  line-height: 2.666667vw;
  display: inline-block;
  padding: 0.04rem;
  padding: 0.4vw;
  margin-right: 0.133333rem;
  margin-right: 1.333333vw;
  border-radius: 0.053333rem;
  border-radius: 0.533333vw;
  background-color: #f88615;
  color: #fff;
}
.buy[data-v-1421ee24] {
  display: block;
  position: absolute;
  right: 0.333333rem;
  right: 3.333333vw;
  top: 0.266667rem;
  top: 2.666667vw;
  padding: 0.133333rem 0.533333rem;
  padding: 1.333333vw 5.333333vw;
  border: 1px solid #3190e8;
  border-radius: 0.053333rem;
  border-radius: 0.533333vw;
  font-size: 0.346667rem;
  color: #3190e8;
}
.recommend-36uLI {
  display: inline-block;
  position: relative;
  width: 4.6rem;
  width: 46vw;
  background: #fff;
  border: 1px solid #eee;
  text-align: left;
}
.recommend-36uLI:active {
  opacity: 0.9;
}
.recommend-2Mcp6 {
  display: block;
  width: 4.6rem;
  width: 46vw;
  height: 4.6rem;
  height: 46vw;
}
.recommend-1NWp9 {
  position: absolute;
  top: 4.066667rem;
  top: 40.666667vw;
  left: 0;
  right: 0;
  height: 0.533333rem;
  height: 5.333333vw;
  line-height: 0.533333rem;
  line-height: 5.333333vw;
  text-align: center;
  font-size: 0.266667rem;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.6);
}
.recommend-1XTm_,
.recommend-2_Rj-,
.recommend-2HWZI {
  margin: 0 0.213333rem 0 0.266667rem;
  margin: 0 2.133333vw 0 2.666667vw;
}
.recommend-2_Rj- {
  padding-top: 0.106667rem;
  padding-top: 1.066667vw;
}
.recommend-2HWZI {
  padding-bottom: 0.08rem;
  padding-bottom: 0.8vw;
}
.recommend-3MjdR {
  overflow: hidden;
  color: #333;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 700;
  font-size: 0.4rem;
}
.recommend-2wozE {
  margin-top: 0.08rem;
  margin-top: 0.8vw;
  color: #666;
  font-size: 0.266667rem;
}
.recommend-2HWZI {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
}
.recommend-2lnd7 {
  font-size: 0.426667rem;
}
.recommend-2Nr2c {
  margin-left: 0.133333rem;
  margin-left: 1.333333vw;
  padding: 0 0.053333rem;
  padding: 0 0.533333vw;
  border: 1px solid #f66d6b;
  border-radius: 0.053333rem;
  border-radius: 0.533333vw;
  color: #f66d6b;
  font-size: 0.266667rem;
}
.recommend-1XTm_,
.recommend-2Nr2c {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
}
.recommend-1XTm_ {
  height: 0.88rem;
  height: 8.8vw;
  border-top: 1px dashed #ccc;
}
.recommend-evJyV {
  display: -webkit-flex;
  display: flex;
  -webkit-flex: 1 1 auto;
  flex: 1 1 auto;
  -webkit-align-items: center;
  align-items: center;
  overflow: hidden;
}
.recommend-evJyV svg {
  display: block;
  -webkit-flex: 0 0 0.266667rem;
  -webkit-flex: 0 0 2.666667vw;
  flex: 0 0 0.266667rem;
  flex: 0 0 2.666667vw;
  width: 0.266667rem;
  width: 2.666667vw;
  height: 0.266667rem;
  height: 2.666667vw;
  fill: #bbb;
}
.recommend-evJyV span {
  -webkit-flex: 1 1 auto;
  flex: 1 1 auto;
  overflow: hidden;
  margin-left: 0.16rem;
  margin-left: 1.6vw;
  color: #999;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.293333rem;
}
.price-1qtfb {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: baseline;
  align-items: baseline;
}
.price-1qtfb i {
  margin-right: 0.04rem;
  margin-right: 0.4vw;
  font-style: normal;
}
.price-1bP9Q {
  color: #ff6000;
  font-size: 1em;
}
.price-1bP9Q i {
  font-size: 0.65em;
}
.price-1bP9Q span {
  font-weight: 700;
}
.price-cQGHJ {
  margin-left: 0.106667rem;
  margin-left: 1.066667vw;
  color: #999;
  font-size: 0.65em;
}
.wall-16TaH {
  padding-left: 0.133333rem;
  padding-left: 1.333333vw;
}
.wall-16TaH > * {
  margin: 0.12rem;
  margin: 1.2vw;
}
</style>