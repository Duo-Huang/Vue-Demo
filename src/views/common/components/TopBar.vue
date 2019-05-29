<template>
  <div id="top-bar">
    <div>
      <span class="logo">
        <img src="../../../ASSETS/logo/logo.svg">
      </span>
      <span class="user-header">
        <img src="../../../ASSETS/logo/avatar.jpg">
        <span class="toggle-icon icon-angle-down"></span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopBar"
};
</script>

<style lang="less" scoped>
@top-bar-height: 60px;
#top-bar {
  > div {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
  }
  background-color: #fff;
  height: @top-bar-height;
  box-shadow: 0 2px 2px #eee;

  .logo {
    display: inline-block;
    padding: 10px 0 10px 0;
    font-size: 0;
    & > img {
      height: 40px;
    }
  }

  .user-header {
    position: relative;
    float: right;
    display: inline-block;
    padding: 10px 20px 10px 0;
    font-size: 0;
    & > img {
      height: 40px;
      border-radius: 50%;
      cursor: pointer;
    }
  }

  .toggle-icon {
    font-size: 24px;
    display: none;
    position: absolute;
    color: #e1e4e6;
  }

  @media screen and (max-width: 1200px) {
    .user-header {
      padding: 10px 50px 10px 0;
    }
    .toggle-icon {
      display: inline-block;
      top: 20px;
      right: 25px;
    }
  }
}
</style>