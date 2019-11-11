<template>
  <div id="activity">
    <div class="activity-header">
      <span class="line left"></span>
      <svg class="activity-icon">
        <RecoverUse xlink:href="#alarm" />
      </svg>
      限时好礼
      <span class="line right"></span>
    </div>
    <p class="activity-sub-title">金币换豪礼</p>
    <RecoverBody />
    <p class="activity-more">
      查看更多
      <svg class="svg-next">
        <use xlink:href="#tab_found_next_page" />
        <svg viewBox="0 0 16 25" id="tab_found_next_page">
          <path
            fill="none"
            fill-rule="evenodd"
            stroke="#CCC"
            stroke-linecap="round"
            stroke-width="3"
            d="M2.127 2l10.87 10.582L2.291 23.11"
          />
        </svg>
      </svg>
    </p>
  </div>
</template>

<script>
import RecoverUse from "./RecoverUse";
import RecoverBody from "./RecoverBody";
export default {
  components: {
    RecoverUse,
    RecoverBody,
  }
};
</script>

<style lang="css">
#activity {
  background-color: #fff;
}
.activity-header {
  padding-top: 0.52rem;
  padding-top: 5.2vw;
  text-align: center;
  font-size: 1.11rem;
  font-weight: 700;
  color: #333;
}

.activity-icon {
  position: relative;
  top: 0.053333rem;
  top: 0.533333vw;
  width: 0.44rem;
  width: 4.4vw;
  height: 0.44rem;
  height: 4.4vw;
}
.line {
  display: inline-block;
  margin: 0.213333rem 0.093333rem 0.173333rem;
  margin: 2.133333vw 0.933333vw 1.733333vw;
  border: 1px solid #333;
  width: 0.4rem;
  width: 4vw;
  height: 0;
  position: relative;
}
.line:after {
  position: absolute;
  top: -0.066667rem;
  top: -0.666667vw;
  content: "";
  background: #333;
  height: 0.133333rem;
  height: 1.333333vw;
  width: 0.133333rem;
  width: 1.333333vw;
  border-radius: 50%;
}
.left{
    padding-bottom: 0 !important;
    overflow: visible !important;
}
.line.left:after {
  right: -0.066667rem;
  right: -0.666667vw;
}
.line.right:after {
  left: -0.066667rem;
  left: -0.666667vw;
}
.activity-sub-title {
  font-size: 0.293333rem;
  color: #999;
  text-align: center;
  padding-bottom: 0.213333rem;
  padding-bottom: 2.133333vw;
}
</style>