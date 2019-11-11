<template>
  <div class="App-3Q8Qb">
    <div class="container">
      <div class="LoginHeader-1jXn6">
        <img src="//shadow.elemecdn.com/faas/h5/static/logo.ba876fd.png" class="LoginHeader-85WpV" />
      </div>
      <!-- <header class="header">注册</header> -->
      <div class="content">
        <van-field v-model="tel" placeholder="请输入手机号" :error-message="usertel" clearable />
        <van-field
          v-model="password"
          type="password"
          placeholder="请输入密码"
          :error-message="pass"
          clearable
        />
        <van-field v-model="sms" center placeholder="请输入短信验证码" :error-message="test" clearable>
          <van-button
            class="sendCode"
            :disabled="flag"
            slot="button"
            size="small"
            type="primary"
            @click="sendCode"
          >{{ buttonmsg }}</van-button>
        </van-field>
      </div>
      <section class="MessageLogin-15xD9">
        新用户登录即自动注册，并表示已同意
        <a
          href="//h5.ele.me/service/agreement/#initTitle=%E7%94%A8%E6%88%B7%E6%9C%8D%E5%8A%A1%E5%8D%8F%E8%AE%AE&amp;key=ruleQue18"
        >《用户服务协议》</a>
        和
        <a
          href="http://terms.alicdn.com/legal-agreement/terms/suit_bu1_other/suit_bu1_other201903051859_43484.html"
        >《隐私权政策》</a>
      </section>
      <!-- <van-button type="primary" url="/vant/mobile.html" class="reg">登录</van-button> -->
      <van-button
        class="reg"
        type="primary"
        :loading="loading"
        loading-text="登录中..."
        size="large"
        :disabled="zhud"
        @click="register"
      >登录</van-button>
      <!-- <van-divider @click="toLogin">去登录</van-divider> -->
      <a href="###" class="MessageLogin-31EIr" @click="aboutUs">关于我们</a>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import qs from "qs";
import { Field, Button, Toast, Divider } from "vant";
import axios from "axios";
Vue.use(Field);
Vue.use(Button);
Vue.use(Toast);
Vue.use(Divider);

export default {
  data() {
    return {
      tel: "",
      password: "",
      sms: "",
      buttonmsg: "点击发送验证码",
      flag: false,
      adminCode: "",
      zhud: false,
      loading: false
    };
  },
  //手机号、密码以及验证码的计算属性判断
  computed: {
    usertel() {
      if (this.tel === "") {
        return "";
      } else if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(this.tel)) {
        return "手机号格式错误";
      } else {
        return "";
      }
    },
    pass() {
      if (this.password === "") {
        return "";
      } else if (this.password.length < 6) {
        return "密码不可小于6位";
      } else {
        return "";
      }
    },
    test() {
      if (this.sms === "") {
        return "";
      } else if (this.sms.length !== 5) {
        return "验证码格式错误";
      } else {
        return "";
      }
    }
  },
  methods: {
    // 点击登录
    toLogin() {
      this.$router.replace("/login");
    },
    // 验证码
    sendCode() {
      var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
      if (this.tel == "") {
        this.$toast("手机号不能为空");
      } else if (!reg.test(this.tel)) {
        this.$toast("手机号格式不正确");
      } else {
        this.flag = true;
        //验证码的时间设置 可有可无
        let time = 5;
        let timer = "";
        timer = setInterval(() => {
          time--;
          if (time === 0) {
            clearInterval(timer);
            this.flag = false;
            this.buttonmsg = "点击发送验证码";
            return;
          }
          this.flag = true;
          this.buttonmsg = time + "秒后重新发送";
        }, 1000);
        this.getCode();
      }
    },

    getCode() {
      if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(this.tel) || this.tel === "") {
        Toast("手机号码输入有误");
      } else {
        axios
          .get("https://www.daxunxun.com/users/sendCode?tel=" + this.tel)
          .then(res => {
            if (res.data === 1) {
              Toast("用户名已注册，请更改");
            } else if (res.data === 0) {
              Toast("获取验证码失败");
            } else {
              this.adminCode = res.data.code;
              window.console.log(this.adminCode);
            }
          });
      }
    },
    register() {
      if (this.tel === "" || this.usertel === "手机号码格式错误") {
        Toast("手机号码输入有误");
        return;
      }
      if (this.password === "" || this.pass === "密码格式错误，最少为6位") {
        Toast("密码输入有误");
        return;
      }
      //   if (this.sms === "" || this.sms !== this.adminCode) {
      //     Toast("验证码输入有误");
      //     return;
      //   }
      this.reallR();
    },
    reallR() {
      this.zhud = true;
      this.loading = true;
      axios
        .post(
          "http://localhost:3000/register",
          qs.stringify({
            username: this.tel,
            password: this.password
          })
        )
        .then(res => {
          this.zhud = false;
          this.loading = false;
          if (res.data === true) {
            Toast("登录成功");
            this.$router.push({
              name: "mine"
            });
            // Toast("用户名已注册，请直接登录");
          }
          // else if (res.data === 0) {
          //   Toast("注册失败");
          // }
          else {
            Toast("注册成功,请再次点击登录！");
            // this.$router.push = { name: "mine" };
            this.$router.push({
              name: "reg"
            });
            // 用户信息加密
            // const info = Buffer.from(JSON.stringify(res.config.data)).toString('base64')
          }
          window.sessionStorage.setItem(
            "token",
            JSON.stringify(res.config.data)
          );
          window.console.log(res);
        });
    },
    aboutUs() {
      this.$router.push({
        name: "aboutus"
      });
    }
    // regCode() {
    //   this.$router.push({
    //     name: "regcode"
    //   });
    // }
  },
  mounted() {
    2;
    3;
  }
};
</script>


<style lang="css" scoped>
.sendCode {
  color: #fff;
  background-color: #07c160;
  border: 1px solid #07c160;
  height: 100% !important;
}
body,
html {
  width: 100%;
  height: 100%;
  font-size: 12px;
  background: #fff;
}
.content {
  margin-top: 1.333333rem;
}
.reg {
  color: #fff;
  background-color: #07c160;
  border: 1px solid #07c160;
  margin-top: 1.4rem;
  border-radius: 0.23333rem;
}
.reg::before {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background-color: #000;
  border: inherit;
  border-color: #000;
  border-radius: inherit;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  opacity: 0;
  content: " ";
}
.van-cell {
  padding: 0.4rem 0;
}
.van-cell:not(:last-child)::after {
  border-bottom: none;
}
.van-field__body {
  border: 1px solid #ebedf0 !important;
  border-radius: 0.23333rem !important;
  height: 2.8rem !important;
  font-size: 1.213333rem;
}
.App-1EAON {
  width: 100%;
  height: 100%;
}
.App-3Q8Qb {
  width: 300px;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
  -webkit-justify-content: center;
  justify-content: center;
  margin: 0 auto;
}
.LoginHeader-1jXn6 {
  padding-top: 3.533333rem;
}
.App-3Q8Qb > div:last-child {
  min-height: 296px;
}
.App-PZaG3 .App-3Q8Qb,
.App-PZaG3 .App-OjtAb {
  opacity: 0.4;
}
.App-OjtAb {
  -webkit-justify-content: center;
  justify-content: center;
  position: relative;
  width: 100%;
  background: #f5f5f5;
}
.App-1EAON,
.App-OjtAb {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
}
.App-1EAON {
  -webkit-align-items: center;
  align-items: center;
}
.App-1EAON > div:first-child {
  -webkit-flex: 1 1 auto;
  flex: 1 1 auto;
}
.App-1EAON > div:first-child + div {
  -webkit-flex: 0 0 104px;
  flex: 0 0 104px;
}
@media (max-width: 768px) {
  .App-1EAON {
    height: auto;
    min-height: 100%;
    padding-top: 40px;
  }
  .App-3Q8Qb {
    -webkit-justify-content: flex-start;
    justify-content: flex-start;
  }
  .App-OjtAb {
    background: #fff;
    -webkit-justify-content: space-between;
    justify-content: space-between;
  }
}
.MessageLogin-31EIr {
  display: none;
  margin-top: 20px;
  text-align: center;
  color: #999;
}
@media (max-width: 768px) {
  .MessageLogin-31EIr {
    display: block;
  }
}
.MessageLogin-FsPlX {
  position: relative;
  margin-bottom: 16px;
  height: 48px;
  font-size: 14px;
  background: #fff;
}
.MessageLogin-FsPlX > * {
  display: inline-block;
  position: absolute;
  top: 50%;
  right: 10px;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
.MessageLogin-FsPlX > input {
  width: 100%;
  height: 100%;
  left: 0;
  padding-left: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  color: #333;
  -webkit-appearance: none;
}
.MessageLogin-FsPlX > input::-webkit-input-placeholder {
  color: #999;
}
.MessageLogin-FsPlX > input::placeholder {
  color: #999;
}
.MessageLogin-FsPlX > input:focus {
  border-color: #0089dc;
}
.MessageLogin-1LX22 {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
}
.MessageLogin-1LX22 img {
  display: block;
  width: 85px;
  height: 32px;
}
.MessageLogin-12c03 {
  margin-left: 10px;
  color: #666;
  font-size: 12px;
  line-height: 14px;
}
.MessageLogin-12c03 > span {
  color: #2395ff;
  cursor: pointer;
}
.MessageLogin-15xD9 {
  margin-top: 12px;
  color: #999;
  font-size: 14px;
  line-height: 20px;
}
.MessageLogin-15xD9 a {
  color: #2395ff;
}
.MessageLogin-iYvWA {
  margin-top: 16px;
}
.CountButton-3e-kd {
  padding: 0;
  border-radius: 6px;
  color: #2395ff;
  background: transparent;
  text-align: center;
  font-size: 14px;
}
.CountButton-3e-kd[disabled] {
  color: #ccc;
}
.SubmitButton-2wG4T {
  display: block;
  width: 100%;
  height: 42px;
  margin-top: 30px;
  border-radius: 4px;
  background: #4cd96f;
  color: #fff;
  cursor: pointer;
  text-align: center;
  font-size: 16px;
  line-height: 42px;
}
.SubmitButton-2wG4T[disabled] {
  background: #ccc;
}
.SubmitButton-2wG4T:focus,
.SubmitButton-2wG4T:hover {
  background: #4cd964;
}
.SubmitButton-2wG4T:disabled {
  background: #ccc;
}
.form-Kr7wg {
  display: none;
  margin-top: 20px;
  text-align: center;
  color: #999;
}
@media (max-width: 768px) {
  .form-Kr7wg {
    display: block;
  }
}
.form-b6px1 {
  position: relative;
  margin-bottom: 16px;
  height: 48px;
  font-size: 14px;
  background: #fff;
}
.form-b6px1 > * {
  display: inline-block;
  position: absolute;
  top: 50%;
  right: 10px;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
.form-b6px1 > input {
  width: 100%;
  height: 100%;
  left: 0;
  padding-left: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  color: #333;
  -webkit-appearance: none;
}
.form-b6px1 > input::-webkit-input-placeholder {
  color: #999;
}
.form-b6px1 > input::placeholder {
  color: #999;
}
.form-b6px1 > input:focus {
  border-color: #0089dc;
}
.form-2o2sO {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
}
.form-2o2sO img {
  display: block;
  width: 85px;
  height: 32px;
}
.form-2DBWI {
  margin-left: 10px;
  color: #666;
  font-size: 12px;
  line-height: 14px;
}
.form-2DBWI > span {
  color: var(--global-blue-color);
  cursor: pointer;
}
.SwitchButton-2b6RO {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  padding: 0 6px;
  width: 40px;
  height: 16px;
  color: #999;
  font-size: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  transition: background-color 0.3s, border-color 0.3s;
}
.SwitchButton-1rBfm {
  position: absolute;
  top: -1px;
  left: -1px;
  width: 16px;
  height: 16px;
  border: 1px solid #ddd;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
  transition: transform 0.3s, -webkit-transform 0.3s;
}
.SwitchButton-3wLB9 {
  -webkit-justify-content: flex-start;
  justify-content: flex-start;
  color: #fff;
  border-color: #3190e8;
  background: #3190e8;
}
.SwitchButton-3wLB9 .SwitchButton-1rBfm {
  -webkit-transform: translate3d(24px, 0, 0);
  transform: translate3d(24px, 0, 0);
}
.SwitchButton-3BmOw {
  -webkit-justify-content: flex-end;
  justify-content: flex-end;
}
.LoginFooter-UxQIr {
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-align-items: center;
  align-items: center;
}
.LoginFooter-2KaAB {
  line-height: 16px;
  color: #999;
  line-height: 18px;
  text-align: center;
}
.LoginFooter-2KaAB > h2 {
  font-size: 12px;
  color: #555;
}
.LoginFooter-2KaAB > .LoginFooter-1QHDG {
  display: inline-block;
  margin-top: 12px;
}
.LoginFooter-3s25U:after {
  content: "|";
  padding: 0 4px;
}
@media (max-width: 768px) {
  .LoginFooter-2KaAB {
    display: none;
  }
}
.LoginHeader-1jXn6 {
  text-align: center;
}
.LoginHeader-1jXn6 .LoginHeader-85WpV {
  height: 56px;
}
.LoginHeader-22Up7 {
  margin-top: 40px;
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
}
.LoginHeader-22Up7 > a {
  font-size: 14px;
  padding-bottom: 4px;
  cursor: pointer;
  display: block;
  width: 58px;
  margin: 0 20px;
}
.LoginHeader-22Up7 > a:focus,
.LoginHeader-22Up7 > a:hover {
  color: #000;
}
.LoginHeader-22Up7 > a.LoginHeader-33EiC {
  color: #2395ff;
  font-weight: 700;
  border-bottom: 2px solid #2395ff;
}
.AlipayLogin-2XPS- {
  border-top: 1px solid #eee;
  text-align: center;
  padding-bottom: 15px;
  background-color: #fafafa;
  padding: 16px 0;
  width: 100%;
}
.AlipayLogin-2XPS-.AlipayLogin-3h4HY {
  filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feColorMatrix type="matrix" color-interpolation-filters="sRGB" values="0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0" /></filter></svg>#filter');
  -webkit-filter: grayscale(1);
  filter: grayscale(1);
}
.AlipayLogin-3B7m1 {
  color: #666;
}
.AlipayLogin-1gWwX {
  width: 300px;
  margin: 0 auto;
  padding: 12px 0;
  border: 1px solid #ddd;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  border-radius: 2px;
  font-size: 16px;
  color: #25abee;
}
.AlipayLogin-3BwhX {
  width: 18px;
  height: 18px;
  margin-right: 6px;
}
.AlipayLogin-25u8B {
  font-size: 13px;
  color: #999;
  margin-top: 12px;
}
</style>