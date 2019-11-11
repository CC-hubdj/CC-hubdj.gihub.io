<template>
  <section>
    <div class="profile-3g0uv">
      <div class="index-18Ili headers" style="width: 110px; height: 110px;">
        <img
          v-if="tel"
          src="../assets/link.jpg"
          class="fanfan"
        />
        <img
          v-else
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAM1BMVEXE5/XI6fbT7fjW7/jl9fvw+f3////a8Pnt+PzL6vb7/v7i8/rP7Pf4/P7e8vn0+/3p9vvI4mwRAAACI0lEQVR4Ae3YBxbkIAgGYDCKgqbc/7LbS5hJexvMNr7Xp/0j9oBzzjnnnHPOuX8Qhq/wycwhJvopxQGfSM2F3pXcOZuj0DaJDN1gpSMRoY9B6Jhk6AALnSsI1tpIV0jrX+ZHyp3putwzN9XA8BmHmvolN1LGCWENp5GUADZYVGyGd1lFC4OJmVYqbKu0MoOFem22TPrv3cf004ywa6A1htvStdw2Go+vcC03C5EuzV3pSv/iQsqCllN4gj1tJmWC+342JV1dx8cGBuR8nEbznVHNkQW28UxKBeV+pRtsCrrMEsDGeLIIVlISgg08HqiYSIlgJRxWuoku8wA2VCU3dwVlZugQnE4PnYt+t05wR6FvysmeIPltrC8mC3U97t65bRQq9whO23uC6gRp9sFMa9NOJ8z2wWF3T1BvDfdXzLLb4oL7a1m9P53mq50PwSR42ltA2v6eEC2uFGH38Ja39wRVDUGDTSJudH+ETSg3G6wuESO8anxSpww3xF+aGvX+yWvQZ72rohQ0O+wFeI6q9QiPYr0cPGih31Rs1pfjBy2/KxnlYjJPtTYwNFy7CE5CnyzGxf4pMWzhQkTWyTjTWkV4hVW6PNhjIWUZdF+okgiDnSakSakhMHAItQhpAXom7xN+8nG1OnTawkRXJARzlc5V6KElOpYadJJH2jdm6CjPtG3O0FmL780eY4MncI5J6CtJMTM8iwODc84555xzzv0PPgKMKi2olgNo0QAAAABJRU5ErkJggg=="
        />
      </div>
      <div class="profile-xfCcC">
        <p class="profile-1_mtk mtk" v-if="tel"></p>
        <p class="profile-1_mtk mtk" @click="login" v-else>登录/注册</p>
        <p class="profile-1UP72">
          <svg fill="#fff">
            <use xlink:href="#mobile" />
            <svg viewBox="0 0 655 1024" id="mobile">
              <path
                d="M0 122.501v778.998C0 968.946 55.189 1024 123.268 1024h408.824c68.52 0 123.268-54.846 123.268-122.501V122.501C655.36 55.054 600.171 0 532.092 0H123.268C54.748 0 0 54.846 0 122.501zM327.68 942.08c-22.622 0-40.96-18.338-40.96-40.96s18.338-40.96 40.96-40.96 40.96 18.338 40.96 40.96-18.338 40.96-40.96 40.96zM81.92 163.84h491.52V819.2H81.92V163.84z"
              />
            </svg>
          </svg>
          <span v-if="tel" v-text="tel" style="font-zise:1.32rem;"></span>
          <span v-else>登录后享受更多特权</span>
          <!---->
        </p>
      </div>
      <span class="profile-2XuMq" @click="logOut">
        <svg fill="#fff">
          <use xlink:href="#arrow-right" />
          <svg viewBox="0 0 1024 1024" id="arrow-right" class="icon">
            <path
              d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z"
              class="selected"
            />
          </svg>
        </svg>
      </span>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      tel: 0
    };
  },
  created() {
    this.RegOrLogined();
  },
  methods: {
    login() {
      this.$router.push({
        name: "reg"
      });
    },
    RegOrLogined() {
      window.console.log(this.tel);
      let user = JSON.parse(window.sessionStorage.getItem("token"));
      //   window.console.log(user);
      let data1 = user.split("&");
    //   window.console.log(data1);
      for (let i = 0; i < data1.length; i++) {
        let data2 = data1[i].split("="); //0: "username" 1: "13677811681"  0: "password"  1: "123456"
        // window.console.log(data2);
        if (data2[0] == "username" && data2[1]) {
          this.tel = data2[1];
        }
      }
    //   window.console.log(this.tel);
    },
    logOut() {
      this.$router.push({
        name: "logout"
      });
    }
  }
};
</script>

<style lang="css">
.headers{
    margin: 0px -52px 0 0 !important;
    line-height: 10.066667rem !important;
}
section {
  margin-bottom: 0;
}
/* .fanfan{
    margin-bottom: 26px;
} */
.index-18Ili {
  border-radius: 50%;
  line-height: 13.066667rem;
}
.index-18Ili > img,
.index-18Ili > span {
  border-radius: 50%;
  width: 55% !important;
  height: 55% !important;
}
.index-18Ili > span {
  display: inline-block;
  background: url(//shadow.elemecdn.com/faas/h5/static/sprite.3ffb5d8.png);
}

.profile-3g0uv {
  display: -webkit-flex;
  display: flex;
  background-image: linear-gradient(90deg, #0af, #0085ff);
  /* padding: 0 0.4rem; */
  padding: 0 4vw !important;
  color: #fff;
  -webkit-align-items: center;
  align-items: center;
}
.profile-3g0uv > img {
  -webkit-flex-shrink: 0;
  flex-shrink: 0;
  border-radius: 50%;
  width: 1.6rem;
  width: 16vw;
  height: 1.6rem;
  height: 16vw;
}
.profile-2XuMq svg {
  width: 0.266667rem;
  width: 2.666667vw;
  height: 0.56rem;
  height: 5.6vw;
}
.profile-xfCcC {
  overflow: hidden;
  margin-left: 0.48rem;
  margin-left: -8.2vw !important;
  -webkit-flex-grow: 1;
  flex-grow: 1;
}
.profile-xfCcC p {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.profile-1_mtk {
  font-size: 1.3336rem ;
  margin-bottom: 0.213333rem;
  margin-bottom: 2.133333vw;
  font-weight: 700;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  width: 11.333333rem;
  margin-left: 48px;
}
.profile-1_mtk img {
  height: 0.373333rem;
  height: 3.733333vw;
  margin-left: 0.133333rem;
  margin-left: 1.333333vw;
}
.mtk{
 font-size: 1.3336rem  !important;
}
.profile-1UP72 {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  font-size: 0.32rem;
  margin-left: 50px;
}
.profile-1UP72 svg {
  margin-right: 0.066667rem;
  margin-right: 0.666667vw;
  width: 0.186667rem;
  width: 1.866667vw;
  height: 0.293333rem;
  height: 2.933333vw;
}
.profile-1gjgY {
  -webkit-flex-shrink: 0;
  flex-shrink: 0;
  font-size: 1.6rem;
  line-height: 1.6rem;
  line-height: 16vw;
  border-radius: 50%;
  background: #fff;
  display: inline-block;
  vertical-align: middle;
}
.profile-1gjgY,
.profile-1gjgY svg {
  width: 1.6rem;
  width: 16vw;
  height: 1.6rem;
  height: 16vw;
}
.profile-1reTe {
  margin-top: 0.266667rem;
  margin-top: 2.666667vw;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  font-size: 0.426667rem;
  line-height: 0.453333rem;
  line-height: 4.533333vw;
  background: #fff;
}
.profile-1nfoQ {
  text-align: center;
}
.profile-1nfoQ img {
  width: 9.36rem;
  width: 93.6vw;
  height: 2.706667rem;
  height: 27.066667vw;
}
.profile-2dyk_ {
  text-align: center;
  margin: 0.613333rem auto;
  margin: 6.133333vw auto;
  color: #4da6f0;
  font-size: 0.4rem;
}
.index-2MEEn {
  font-size: 0.426667rem;
  color: #333;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  padding-left: 0.666667rem;
  padding-left: 6.666667vw;
}
.index-2MEEn:not(:last-child) .index-yydpu {
  border-bottom: 1px solid #eee;
}
.index-161Mm {
  margin-left: -0.266667rem;
  margin-left: -2.666667vw;
  margin-right: 0.266667rem;
  margin-right: 2.666667vw;
}
.index-161Mm svg {
  width: 0.48rem;
  width: 4.8vw;
  height: 0.48rem;
  height: 4.8vw;
}
.index-yydpu {
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  width: 100%;
  padding: 0.373333rem 0.266667rem 0.373333rem 0;
  padding: 3.733333vw 2.666667vw 3.733333vw 0;
}
.index-3Z8It svg {
  width: 0.266667rem;
  width: 2.666667vw;
  height: 0.266667rem;
  height: 2.666667vw;
  fill: #bbb;
}
.index-1G7HV {
  display: table;
  width: 100%;
  height: 2.24rem;
  height: 22.4vw;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
}
.index-1G7HV svg {
  width: 0.693333rem;
  width: 6.933333vw;
  height: 0.693333rem;
  height: 6.933333vw;
}
.index-1ryAh {
  display: table-cell;
  width: 33.3333%;
  vertical-align: middle;
  text-align: center;
}
.index-1ryAh:not(:last-child) {
  border-right: 1px solid #ddd;
}
.index-3S6cZ {
  margin-top: 0.133333rem;
  margin-top: 1.333333vw;
  font-size: 0.32rem;
  line-height: 0.373333rem;
  line-height: 3.733333vw;
  font-weight: 500;
  color: #666;
  font-weight: 700;
}
.index-2FmrF {
  padding: 0.453333rem 0 0.293333rem;
  padding: 4.533333vw 0 2.933333vw;
  font-size: 0.693333rem;
  line-height: 0.693333rem;
  line-height: 6.933333vw;
  font-weight: 700;
}
.index-2V-Hh {
  font-size: 0.32rem;
  line-height: 0.32rem;
  line-height: 3.2vw;
}
.index-9OH4E {
  position: relative;
  -webkit-flex-direction: column;
  flex-direction: column;
  -webkit-justify-content: center;
  justify-content: center;
  margin-top: 0.266667rem;
  margin-top: 2.666667vw;
  width: 100%;
  height: 2.133333rem;
  height: 21.333333vw;
  padding: 0 0.746667rem;
  padding: 0 7.466667vw;
  background-image: linear-gradient(90deg, #ead68a, #fff4c0 71.7%, #fff4c0);
}
.index-1v3Lc,
.index-9OH4E {
  display: -webkit-flex;
  display: flex;
}
.index-1v3Lc {
  height: 0.546667rem;
  height: 5.466667vw;
  -webkit-align-items: center;
  align-items: center;
}
.index-1v3Lc > p {
  display: inline;
  font-size: 0.386667rem;
  color: #a57c00;
}
.index-1v3Lc > p > span {
  color: #955919;
  font-weight: 700;
}
.index-3YJpI {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  margin-top: 0.053333rem;
  margin-top: 0.533333vw;
  font-size: 0.533333rem;
  line-height: 0.8rem;
  line-height: 8vw;
  color: #6c3b07;
  font-weight: 700;
}
.index-3YJpI > span {
  color: #f43730;
  font-weight: bolder;
}
.index-3YJpI > svg {
  margin-left: 0.133333rem;
  margin-left: 1.333333vw;
  width: 0.186667rem;
  width: 1.866667vw;
  height: 0.32rem;
  height: 3.2vw;
}
.index-3H3Wr {
  width: 2.826667rem;
  width: 28.266667vw;
  height: 2.133333rem;
  height: 21.333333vw;
  position: absolute;
  top: 0;
  right: 0;
}
.index-3JbNA {
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-align-items: center;
  align-items: center;
  margin: 0.213333rem 0;
  margin: 2.133333vw 0;
  padding: 0.373333rem 0;
  padding: 3.733333vw 0;
  background: url(//shadow.elemecdn.com/faas/h5/static/supervip-bg.b3ed53c.png)
    no-repeat;
  background-size: cover;
}
.index-3JbNA > svg {
  -webkit-flex: 0 0 2.4rem;
  -webkit-flex: 0 0 24vw;
  flex: 0 0 2.4rem;
  flex: 0 0 24vw;
  width: 1.546667rem;
  width: 15.466667vw;
  height: 0.986667rem;
  height: 9.866667vw;
  opacity: 0.7;
}
.index-3JbNA > div {
  -webkit-flex: 1;
  flex: 1;
}
.index-9J3ng > h3 {
  color: #a39a83;
  font-size: 0.293333rem;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
}
.index-9J3ng > h3 img {
  width: 0.96rem;
  width: 9.6vw;
  height: 0.32rem;
  height: 3.2vw;
  margin-left: 0.106667rem;
  margin-left: 1.066667vw;
}
.index-3z8sh {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  margin-top: 0.053333rem;
  margin-top: 0.533333vw;
  color: #333;
  font-size: 0.48rem;
}
.index-3z8sh span {
  color: #b29000;
}
.index-3z8sh > svg {
  width: 0.266667rem;
  width: 2.666667vw;
  height: 0.266667rem;
  height: 2.666667vw;
}
.index-2CYdD {
  display: -webkit-flex;
  display: flex;
  height: 0.546667rem;
  height: 5.466667vw;
  -webkit-align-items: center;
  align-items: center;
  font-size: 0.373333rem;
  color: #a57c00;
}
.index-2CYdD .index-c725M {
  color: #fff3bf;
  font-size: 0.32rem;
  padding: 0.053333rem;
  padding: 0.533333vw;
  background: linear-gradient(119deg, #f33131, #fb7228);
  margin-right: 0.133333rem;
  margin-right: 1.333333vw;
  border-radius: 0.026667rem;
  border-radius: 0.266667vw;
}
.index-2CYdD .index-2Gjnn {
  font-weight: 600;
  color: #955919;
}
</style>