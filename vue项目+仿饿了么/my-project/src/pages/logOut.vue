<template>
  <div class="logOut">
    <div class="Load-wrapper_3h35P-W Load-fixed_1L8WA4k" style="display: none;">
      <div class="Load-loading-main_1LVs9py">
        <div class="Load-loading-icon_2LvpNhI"></div>
      </div>
    </div>
    <div>
      <ul class="main-22 fanimg">
        <li class="main-3Idiu main-2O">
          <b>头像</b>
          <span class="main-nwHdE">
            <input type="file" accept="image/jpeg, image/jpg, image/png" class="main-1mfZE" />
            <div class="index-18Ili fimg1" style="width: 120px; height: 120px;">
              <img v-if="tel" src="../assets/link.jpg" />
              <img
                v-else
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAM1BMVEXE5/XI6fbT7fjW7/jl9fvw+f3////a8Pnt+PzL6vb7/v7i8/rP7Pf4/P7e8vn0+/3p9vvI4mwRAAACI0lEQVR4Ae3YBxbkIAgGYDCKgqbc/7LbS5hJexvMNr7Xp/0j9oBzzjnnnHPOuX8Qhq/wycwhJvopxQGfSM2F3pXcOZuj0DaJDN1gpSMRoY9B6Jhk6AALnSsI1tpIV0jrX+ZHyp3putwzN9XA8BmHmvolN1LGCWENp5GUADZYVGyGd1lFC4OJmVYqbKu0MoOFem22TPrv3cf004ywa6A1htvStdw2Go+vcC03C5EuzV3pSv/iQsqCllN4gj1tJmWC+342JV1dx8cGBuR8nEbznVHNkQW28UxKBeV+pRtsCrrMEsDGeLIIVlISgg08HqiYSIlgJRxWuoku8wA2VCU3dwVlZugQnE4PnYt+t05wR6FvysmeIPltrC8mC3U97t65bRQq9whO23uC6gRp9sFMa9NOJ8z2wWF3T1BvDfdXzLLb4oL7a1m9P53mq50PwSR42ltA2v6eEC2uFGH38Ja39wRVDUGDTSJudH+ETSg3G6wuESO8anxSpww3xF+aGvX+yWvQZ72rohQ0O+wFeI6q9QiPYr0cPGih31Rs1pfjBy2/KxnlYjJPtTYwNFy7CE5CnyzGxf4pMWzhQkTWyTjTWkV4hVW6PNhjIWUZdF+okgiDnSakSakhMHAItQhpAXom7xN+8nG1OnTawkRXJARzlc5V6KElOpYadJJH2jdm6CjPtG3O0FmL780eY4MncI5J6CtJMTM8iwODc84555xzzv0PPgKMKi2olgNo0QAAAABJRU5ErkJggg=="
              />
              <!-- <span class="logimg" style="background-position: 0px 600px; background-size: 120px;"></span> -->
            </div>
            <svg class="main-1kNSK">
              <use xlink:href="#arrow" />
              <svg viewBox="0 0 547 987" id="arrow">
                <path
                  fill="#999"
                  fill-rule="evenodd"
                  d="M0 931.973l51.2 54.613 494.933-494.933L51.2.133 0 51.333l440.32 440.32L0 931.973z"
                />
              </svg>
              <svg viewBox="0 0 547 987" id="arrow">
                <path
                  fill="#999"
                  fill-rule="evenodd"
                  d="M0 931.973l51.2 54.613 494.933-494.933L51.2.133 0 51.333l440.32 440.32L0 931.973z"
                />
              </svg>
            </svg>
          </span>
        </li>
        <li class="main-3Idiu">
          <b>用户名</b>
          <span class="main-2cJz_" v-text="tel">
            <svg class="main-1kNSK">
              <use xlink:href="#arrow" />
              <svg viewBox="0 0 547 987" id="arrow">
                <path
                  fill="#999"
                  fill-rule="evenodd"
                  d="M0 931.973l51.2 54.613 494.933-494.933L51.2.133 0 51.333l440.32 440.32L0 931.973z"
                />
              </svg>
            </svg>
          </span>
        </li>
      </ul>
      <h2 class="main-1OkSR">账号绑定</h2>
      <ul class="main-22cQX">
        <li class="main-3Idiu">
          <span>
            <i class="main-2X7GQ">
              <svg class="main-oBMZZ">
                <use xlink:href="#mobile" />
                <svg viewBox="0 0 11 16" id="mobile">
                  <path
                    fill="#0097FF"
                    fill-rule="evenodd"
                    d="M1 0h9a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1zm.5 1a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5h-8zm4 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                  />
                </svg>
              </svg>
            </i>
            <b>手机</b>
          </span>
          <span>
            <span class="main-2cJz_" v-text="tel"></span>
            <svg class="main-1kNSK">
              <use xlink:href="#arrow" />
              <svg viewBox="0 0 547 987" id="arrow">
                <path
                  fill="#999"
                  fill-rule="evenodd"
                  d="M0 931.973l51.2 54.613 494.933-494.933L51.2.133 0 51.333l440.32 440.32L0 931.973z"
                />
              </svg>
            </svg>
          </span>
        </li>
      </ul>
      <h2 class="main-1OkSR">安全设置</h2>
      <ul class="main-22cQX">
        <li class="main-3Idiu">
          <span>登录密码</span>
          <span class="main-2cJz_">
            <span class="main-3ED6M">已设置</span>
            <svg class="main-1kNSK">
              <use xlink:href="#arrow" />
              <svg viewBox="0 0 547 987" id="arrow">
                <path
                  fill="#999"
                  fill-rule="evenodd"
                  d="M0 931.973l51.2 54.613 494.933-494.933L51.2.133 0 51.333l440.32 440.32L0 931.973z"
                />
              </svg>
            </svg>
          </span>
        </li>
        <!---->
      </ul>
      <button type="button" class="main-aGw6s ag" @click="removeToken">退出登录</button>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      tel: 0
    };
  },
  created() {
    this.RegOrLogineds();
  },
  methods: {
    removeToken() {
      window.sessionStorage.removeItem("token");
      this.$router.push({
        name: "mine"
      });
    },
    RegOrLogineds() {
      window.console.log(this.tel);
      let user = JSON.parse(window.sessionStorage.getItem("token"));
      //   window.console.log(user);
      let data1 = user.split("&");
      //  window.console.log(data1);
      for (let i = 0; i < data1.length; i++) {
        let data2 = data1[i].split("="); //0: "username" 1: "13677811681"  0: "password"  1: "123456"
        // window.console.log(data2);
        if (data2[0] == "username" && data2[1]) {
          this.tel = data2[1];
        }
      }
      //   window.console.log(this.tel);
    }
  }
};
</script>

<style lang="css">
.logOut {
  height: 100%;
  background-color: #f5f5f5;
}
.index-18Ili {
  border-radius: 50%;
  margin: 19px -52px 0 0;
}
.fimg1 {
  margin: 0 -52px 0 0 !important;
  line-height: 11.066667rem !important;
}
.index-18Ili > img,
.index-18Ili > span {
  border-radius: 50%;
  width: 100%;
  height: 100%;
}
.index-18Ili > span {
  display: inline-block;
  background: url(//shadow.elemecdn.com/faas/h5/static/sprite.3ffb5d8.png);
}
.main-22cQX {
  background-color: #fff;
  width: 100%;
  font-size:-0.673333rem;
  color: #333;
}
.fanimg {
  font-size: 1.026667rem !important;
  background: #fff !important;
}
.main-3Idiu {
  padding: 0.266667rem 0.373333rem;
  padding: 2.666667vw 3.733333vw;
  cursor: pointer;
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-align-items: center;
  align-items: center;
}
.main-3Idiu:last-child {
  padding: 0.373333rem;
  padding: 3.733333vw;
  border-top: 1px solid #eee;
}
.main-2O {
  position: relative;
  height: 80px;
}
.main-nwHdE {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
}
.main-1kNSK {
  fill: #ddd;
  height: 0.48rem;
  height: 4.8vw;
  width: 0.48rem;
  width: 4.8vw;
  display: inline-block;
  line-height: 1.2rem;
  line-height: 12vw;
  padding-top: 0.133333rem;
  padding-top: 1.333333vw;
}
.main-2X7GQ {
  padding: 0.053333rem;
  padding: 0.533333vw;
  border-radius: 0.106667rem;
  border-radius: 1.066667vw;
  margin-right: 0.133333rem;
  margin-right: 0.666667vw;
  vertical-align: middle;
}
.main-oBMZZ {
  height: 0.426667rem;
  height: 4.266667vw;
  width: 0.426667rem;
  width: 4.266667vw;
}
.main-1mfZE {
  display: block;
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.main-2cJz_ {
  color: #666;
}
.main-27dMr {
  height: 1.333333rem;
  height: 13.333333vw;
  width: 1.333333rem;
  width: 13.333333vw;
  border-radius: 0.6rem;
  border-radius: 6vw;
}
.main-27dMr > svg {
  width: 100%;
  height: 100%;
}
.main-1OkSR {
  margin: 0.426667rem 0 0.186667rem 0.373333rem;
  margin: 4.266667vw 0 1.866667vw 3.733333vw;
  font-size: 0.32rem;
  color: #999;
}
.main-3ED6M {
  color: #0097ff;
}
.main-aGw6s {
  display: block;
  width: 100%;
  text-align: center;
  padding: 0.373333rem 0;
  padding: 3.733333vw 0;
  margin: 0.533333rem 0;
  margin: 5.333333vw 0;
  color: #ff5339;
  border-radius: 0.08rem;
  border-radius: 0.8vw;
  font-size: 1.526667rem;
  font-weight: 700;
  background-color: #fff;
}
.ag{
     font-size: 1.16667rem !important;
}
.changepw-3LrxS {
  background-color: #fff;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  width: 100%;
  padding: 0.266667rem 0.266667rem 0;
  padding: 2.666667vw 2.666667vw 0;
}
.changepw-lCnqr {
  margin-top: 0.266667rem;
  margin-top: 2.666667vw;
}
.changepw-3bmr- {
  display: block;
  margin-top: 0.133333rem;
  margin-top: 1.333333vw;
  width: 100%;
  padding: 0.213333rem 0.106667rem;
  padding: 2.133333vw 1.066667vw;
  background: #f2f2f2;
  border: 1px solid #ddd;
  border-radius: 0.026667rem;
  border-radius: 0.266667vw;
  font-size: 0.4rem;
}
.changepw-3bmr-:hover {
  border: 1px solid #3199e8;
}
.changepw-1GfOJ {
  display: block;
  text-align: center;
  padding: 0.293333rem 0;
  padding: 2.933333vw 0;
  margin: 0.4rem auto;
  margin: 4vw auto;
  color: #fff;
  border-radius: 0.08rem;
  border-radius: 0.8vw;
  font-size: 0.453333rem;
  font-weight: 800;
  background-color: #3199e8;
  width: 95%;
}
.changepw-1GfOJ[disabled] {
  background-color: #ccc;
}
.changepw-378Bw {
  display: -webkit-flex;
  display: flex;
  -webkit-align-content: center;
  align-content: center;
  -webkit-justify-content: center;
  justify-content: center;
  padding: 1.6rem 0 0.426667rem;
  padding: 16vw 0 4.266667vw;
}
.changepw-1OY0R {
  color: #ea3106;
  font-size: 0.346667rem;
}
.changepw-2pPz5 {
  border: 1px solid #ea3106;
}
svg {
  height: 1.6rem;
  height: 16vw;
  width: 1.6rem;
  width: 16vw;
}
.changepw-_2Y8Z {
  font-size: 0.48rem;
  color: #666;
  padding: 0.133333rem;
  padding: 1.333333vw;
  text-align: center;
}
.changepw-2TVn_ {
  display: block;
  text-align: center;
  padding: 0.293333rem 0;
  padding: 2.933333vw 0;
  margin: 0.4rem auto;
  margin: 4vw auto;
  color: #fff;
  border-radius: 0.08rem;
  border-radius: 0.8vw;
  font-size: 0.453333rem;
  font-weight: 800;
  background-color: #3199e8;
  width: 60%;
}
.changepw-1hXB4 {
  color: #ea3106;
  background-color: #fffeea;
  border-bottom: 1px solid #ddd;
  font-size: 0.4rem;
  padding: 0.266667rem;
  padding: 2.666667vw;
}
.username-3qH12 {
  padding-top: 0.4rem;
  padding-top: 4vw;
}
.username-3fn_k {
  background-color: #fff;
  border-top: 1px solid #eee;
  border-bottom: 0.013333rem solid #eee;
  border-bottom: 0.133333vw solid #eee;
}
.username-3fn_k input {
  font-size: 0.4rem;
  width: 100%;
  height: 1.173333rem;
  height: 11.733333vw;
}
.username-1oSHV,
.username-3fn_k input {
  padding: 0 0.4rem;
  padding: 0 4vw;
}
.username-39myV {
  display: block;
  outline: none;
  -webkit-appearance: none;
  color: #fff;
  width: 100%;
  height: 1.28rem;
  height: 12.8vw;
  font-size: 0.426667rem;
  font-weight: 700;
  border-radius: 0.16rem;
  border-radius: 1.6vw;
  background-color: #00d762;
}
.username-39myV.username-3erKU {
  background-color: #c7c7c7;
}
.username-2fjrW {
  margin: 0.266667rem 0;
  margin: 2.666667vw 0;
  color: #a9a9a9;
  font-size: 0.293333rem;
}
body,
html {
  width: 100%;
  height: 100%;
}
.index-32XvY {
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-between;
  justify-content: space-between;
 padding-top: 0.266667rem;
 padding-top: 2.666667vw;
  padding: 0.266667rem 0.4rem;
  padding: 2.666667vw 4vw;
  width: 100%;
  height: 1.173333rem;
  height: 11.733333vw;
  background: #fff;
}
.index-32XvY > p {
  line-height: 0.64rem;
  line-height: 6.4vw;
  font-size: 0.4rem;
  color: #333;
}
.index-32XvY svg {
  margin-left: 0.133333rem;
  margin-left: 1.333333vw;
  width: 0.293333rem;
  width: 2.933333vw;
  height: 0.293333rem;
  height: 2.933333vw;
}
.index-2VZDn {
  position: relative;
  width: 1.12rem;
  width: 11.2vw;
  border: 1px solid #e5e5e5;
  border-radius: 1.333333rem;
  border-radius: 13.333333vw;
}
.index-2VZDn,
.index-2VZDn:after {
  height: 100%;
  transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
  transition: transform 0.3s, -webkit-transform 0.3s;
}
.index-2VZDn:after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 0.613333rem;
  width: 6.133333vw;
  background: #fff;
  box-shadow: 0 0.026667rem 0.08rem 0 rgba(0, 0, 0, 0.3);
  box-shadow: 0 0.266667vw 0.8vw 0 rgba(0, 0, 0, 0.3);
  border-radius: 100%;
}
.index-2VZDn.index-lt_Ql {
  background: #4cd964;
  border: none;
}
.index-2VZDn.index-lt_Ql:after {
  -webkit-transform: translate3d(0.533333rem, 0, 0);
  -webkit-transform: translate3d(5.333333vw, 0, 0);
  transform: translate3d(0.533333rem, 0, 0);
  transform: translate3d(5.333333vw, 0, 0);
}
.index-3PEjb {
  display: -webkit-flex;
  display: flex;
  position: fixed;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-flex-direction: column;
  flex-direction: column;
  padding: 0 0.8rem;
  padding: 0 8vw;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #fff;
  background: rgba(0, 0, 0, 0.8);
}
.index-3PEjb > h3 {
  margin-top: 0.346667rem;
  margin-top: 3.466667vw;
  font-size: 0.48rem;
  font-weight: 700;
}
.index-3PEjb > li {
  padding-top: 0.533333rem;
  padding-top: 5.333333vw;
  width: 100%;
  line-height: 1.4;
  font-size: 0.346667rem;
  text-align: left;
}
.index-3G0WD {
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-align-items: center;
  align-items: center;
  padding-top: 4.826667rem;
  padding-top: 48.266667vw;
  width: 1.2rem;
  width: 12vw;
  height: 1.2rem;
  height: 12vw;
  border: 2px solid #7b7b7b;
  border-radius: 50%;
}
.index-3G0WD > svg {
  width: 0.6rem;
  width: 6vw;
  height: 0.6rem;
  height: 6vw;
}
</style>