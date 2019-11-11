<template>
  <section class="parts unmerge">
    <div class="entry list3">
      <a ubt-click="1757" ubt-data-url="https://h5.ele.me/exchange/" class>
        <div class="content-wrapper">
          <p class="title" style="color: rgb(255, 153, 0);">金币商城</p>
          <p class="tips">0元好物在这里</p>
        </div>
        <img
          loading
          class="icon"
          src="https://cube.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?x-oss-process=image/format,webp"
        />
        <img style="display: none;" />
      </a>
      <a ubt-click="1757" ubt-data-url="https://h5.ele.me/commend/#/" class>
        <div class="content-wrapper">
          <p class="title" style="color: rgb(27, 169, 225);">推荐有奖</p>
          <p class="tips">20元现金拿不停</p>
        </div>
        <img
          loading
          class="icon"
          src="https://cube.elemecdn.com/5/72/7232274c3c1934861abb86ba32b7bjpeg.jpeg?x-oss-process=image/format,webp"
        />
        <img style="display: none;" />
      </a>
      <a ubt-click="1757" ubt-data-url="/discover/koubei/" class>
        <div class="content-wrapper">
          <p class="title" style="color: rgb(237, 102, 96);">周边优惠</p>
          <p class="tips">领取口碑好券</p>
        </div>
        <img
          loading
          class="icon"
          src="https://cube.elemecdn.com/5/10/2351e989d4171479ba0d7b5c06053jpeg.jpeg?x-oss-process=image/format,webp"
        />
        <img style="display: none;" />
      </a>
    </div>
    <!---->
  </section>
</template>

<style lang="css">
.discover {
  padding-bottom: 0.013333rem;
  padding-bottom: 0.133333vw;
}
section {
  margin-bottom: 0.28rem;
  margin-bottom: 2.8vw;
  background: #fff;
  border-top: 1px solid #eee;
  border-bottom: 0.013333rem solid #eee;
  border-bottom: 0.133333vw solid #eee;
}
section.parts {
  border-bottom: none;
  background: transparent none repeat 0 0 / auto auto padding-box border-box
    scroll;
  background: initial;
}
.unmerge > .entry:first-child {
  margin-bottom: 0.28rem;
  margin-bottom: 2.8vw;
}
.unmerge > .entry:last-child {
  border-top: 1px solid #ededed;
}
.entry {
  border-width: 1px 0;
  box-sizing: border-box;
  overflow: hidden;
  display: -webkit-flex;
  display: flex;
  background: #fff;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
}
.entry:first-child {
  border-top: 0;
}
.entry .content-wrapper {
  max-width: 3rem;
  max-width: 30vw;
}
.entry a {
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-align-items: center;
  align-items: center;
  width: 100%;
  height: 2.133333rem;
  height: 21.333333vw;
  padding: 0 0.4rem;
  padding: 0 4vw;
  border-bottom: 1px solid #ededed;
}
.entry .sub-pic-hash {
  height: 2.4rem;
  height: 24vw;
  padding: 0;
}
.entry .sub-pic-hash img {
  width: 100%;
}
.entry .icon {
  width: 1.6rem;
  width: 16vw;
}
.entry .title {
  line-height: 1.2;
  font-size: 1.0rem;
  margin-bottom: 0.16rem;
  margin-bottom: 1.6vw;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.entry .title img {
  width: 0.48rem;
  width: 4.8vw;
  margin-right: 0.066667rem;
  margin-right: 0.666667vw;
  vertical-align: middle;
}
.entry .tips {
  line-height: 1.2;
  font-size: 0.32rem;
  color: #999;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.entry.list2 a:first-child,
.entry.list3 a:first-child {
  border-right: 1px solid #ededed;
}
.entry.list2 a {
  width: 50%;
  float: left;
}
.entry.list2 a:nth-child(odd) {
  border-right: 1px solid #ededed;
}
.entry.list2 .icon {
  width: 1.2rem;
  width: 12vw;
}
.entry.list3 {
  position: relative;
}
.entry.list3 a {
  width: 50%;
}
.entry.list3 a:nth-child(3n + 1) {
  border-right: 1px solid #ededed;
}
.entry.list3 .icon {
  width: 1.2rem;
  width: 12vw;
}
.entry.list3 a:first-child {
  position: absolute;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-align-items: flex-start;
  align-items: flex-start;
  -webkit-align-items: normal;
  align-items: normal;
  height: 4.266667rem;
  height: 42.666667vw;
  padding: 0.586667rem 0.293333rem 0.16rem 0.426667rem;
  padding: 5.866667vw 2.933333vw 1.6vw 4.266667vw;
}
.entry.list3 a:first-child .icon {
  -webkit-align-self: flex-end;
  align-self: flex-end;
  width: 2rem;
  width: 20vw;
}
.entry.list3 a:nth-child(2),
.entry.list3 a:nth-child(3) {
  margin-left: 50%;
}
.entry.list2 .sub-pic-hash,
.entry.list3 .sub-pic-hash {
  width: 100%;
}
</style>