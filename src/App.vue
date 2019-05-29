<template>
  <div>
    <div class="top-bar">
      <TopBar></TopBar>
    </div>

    <div class="section clear">
      <div class="left-content">
        <LeftMenu></LeftMenu>
      </div>
      <div class="right-content">
        <router-view></router-view>
      </div>
    </div>
    <div class="footer">
      <span>©Copyright 2017 ThoughtWorks</span>
    </div>
  </div>
</template>

<script>
import TopBar from "./views/common/components/TopBar";
import LeftMenu from "./views/common/components/LeftMenu";

export default {
  name: "App",
  components: {
    TopBar,
    LeftMenu
  }
};
</script>

<style lang="less">
body {
  background-color: #f3f3f3;
}
</style>

<style lang="less" scoped>
@import "./themes/common/normalize.css";
@import "./themes/common/base.css";
@import "./ASSETS/font icons/fonts.css";

@top-bar-height: 60px;

.top-bar {
  position: fixed;
  width: 100%;
}
.section {
  padding-top: @top-bar-height;
  max-width: 1200px;
  margin: 0 auto;
}

.left-content {
  float: left;
}

.right-content {
  margin-left: 265px;
  min-height: 100vh;
}

.footer {
  font-size: 14px;
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #fff;
  height: 35px;
  line-height: 35px;
  box-shadow: 0 -2px 2px #eee;
  text-align: center;
}
</style>