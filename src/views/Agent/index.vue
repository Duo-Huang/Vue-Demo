<template>
  <div class="container">
    <div class="header">
      <div class="overview">
        <img src alt>
      </div>
      <div class="overview"></div>
      <div class="overview"></div>
    </div>
    <div class="content">
      <Card v-for="card in cardList" :key="card.id" :data="card"></Card>
    </div>
  </div>
</template>

<script>
import Card from "./card";
import axios from "axios";

export default {
  components: {
    Card
  },
  data() {
    return {
      cardList: []
    };
  },
  async created() {
    const res = await axios.get("/twh/agents");
    const cardList = res.data;
    if (cardList && cardList.length > 0) {
      this.cardList = cardList;
    }
  }
};
</script>

<style lang="less" scoped>
@header-height: 180px;
@header-margin-bottom: 20px;
.container {
  height: 100vh;
}
.header {
  height: @header-height;
  margin-bottom: @header-margin-bottom;
  .overview {
    &:first-child {
      margin-left: 0;
    }
    height: 140px;
    width: 30%;
    background-color: green;
    float: left;
    margin: 20px 0;
    margin-left: 5%;
  }
}
.content {
  height: calc(~"100% - " @header-height - @header-margin-bottom);
}
</style>