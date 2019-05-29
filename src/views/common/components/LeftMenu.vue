<template>
  <div class="container">
    <ul>
      <li v-for="menu in menuList" :key="menu.route">
        <router-link :to="menu.route">
          <span :class="['menu-icon', menu.icon]"></span>
          <span class="menu-label">{{menu.label}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "LeftMenu",
  data() {
    return {
      menuList: [
        { route: "dashboard", label: "DASHBOARD", icon: "icon-dashboard" },
        { route: "agent", label: "AGENT", icon: "icon-sitemap" },
        { route: "myCruise", label: "MY CRUISE", icon: "icon-boat" },
        { route: "help", label: "HELP", icon: "icon-life-bouy" }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.container {
  width: 240px;
  background-color: #2d4054;
  min-height: 100vh;

  & > ul > li > a {
    display: inline-block;
    width: 100%;
    height: 45px;
    line-height: 45px;
    font-size: 14px;
    color: #ddd;
    text-decoration: none;
    & > .menu-icon {
      padding: 0 10px;
    }
    &:hover {
      color: #00b4cf;
      background-color: #435466;
      cursor: pointer;
    }
  }

  .route-active {
    color: #00b4cf;
    background-color: #435466;
  }
}
</style>