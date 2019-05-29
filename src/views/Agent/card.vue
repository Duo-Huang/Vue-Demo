<template>
  <div class="card-container">
    <div class="logo">
      <img :src="osLogoMap[data.os]" :alt="data.os">
    </div>
    <div class="info">
      <div class="service-info">
        <span class="icon icon-desktop"></span>
        <span class="name">{{data.name}}</span>
        <span class="status" :style="{backgroundColor: statusMap[data.status]}">{{data.status}}</span>
        <span class="icon icon-info"></span>
        <span class="ip">{{data.ip}}</span>
        <span class="icon icon-folder"></span>
        <span class="location">{{data.location}}</span>
      </div>
      <div class="reources">
        <ul class="clear">
          <li class="add-resource" @click="addResource">
            <span class="icon-plus"></span>
            <Popup :isOpen="add" @popup-state-change="popupStateChange"></Popup>
          </li>
          <li v-for="resource in resources" :key="resource" class="system">
            <span>{{resource}}</span>
            <span class="icon-trash delete"></span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Popup from "../common/components/Popup";

export default {
  name: "Card",
  components: {
    Popup
  },
  props: {
    data: {
      type: Object
    }
  },
  data() {
    return {
      osLogoMap: {
        windows: require("../../ASSETS/os icons/windows.png"),
        ubuntu: require("../../ASSETS/os icons/ubuntu.png"),
        debian: require("../../ASSETS/os icons/debin.png"),
        suse: require("../../ASSETS/os icons/suse.png"),
        centos: require("../../ASSETS/os icons/cent_os.png")
      },
      statusMap: {
        idle: "#7fbc39",
        building: "#ff9a2a"
      },
      resources: this.data.resources,
      add: false
    };
  },
  methods: {
    addResource() {
      this.add = true;
    },
    popupStateChange(state) {
      this.add = state;
    }
  }
};
</script>

<style lang="less" scoped>
@card-container-height: 100px;
.card-container {
  height: @card-container-height;
  background-color: #fff;
  margin-top: 15px;
  padding: 0 20px;
}
.logo {
  float: left;
  height: 100%;
  line-height: @card-container-height;
  font-size: 0;
  & > img {
    width: 70px;
    height: 70px;
    vertical-align: middle;
  }
}
.info {
  float: left;
  height: 100%;
  & > .service-info {
    margin: 15px 30px;
  }
  & > .reources {
    margin: 20px 30px;
  }
  .icon {
    color: #aaa;
    margin-right: 5px;
  }
  .name {
    color: #00b4cf;
    padding: 0 5px;
  }
  .status {
    height: 25px;
    display: inline-block;
    line-height: 25px;
    padding: 0 10px;
    color: #fff;
    margin: 0 40px 0 20px;
  }
  .ip {
    margin-right: 15px;
  }
}

.reources {
  li {
    float: left;
    height: 25px;
    line-height: 25px;
    font-size: 14px;
    .icon-plus {
      cursor: pointer;
      width: 25px;
      height: 25px;
      line-height: 25px;
      text-align: center;
      display: inline-block;
      color: #fff;
      background-color: #00b4cf;
    }
  }
  li.system {
    margin-left: 15px;
    background-color: #e1e4e6;
    padding: 0 5px;
    & > span {
      vertical-align: middle;
    }
    & > .delete {
      cursor: pointer;
      &:hover {
        color: #00b4cf;
      }
    }
  }
}
</style>