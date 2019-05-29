<template>
  <div class="box" v-show="open">
    <div class="header">
      <span>sepearate >>>></span>
      <span>X</span>
    </div>
    <div class="content">
      <input ref="input" type="text" placeholder="e.g. Chrome...">
    </div>
    <div class="footer">
      <button type="button" @click.stop="ok">Add resource</button>
      <button type="button" @click.stop="cancel">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Popup",
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      open: this.isOpen
    };
  },
  methods: {
    ok() {
      this.closeHandle();
    },
    cancel() {
      this.closeHandle();
    },
    closeHandle() {
      this.$refs.input.value = "";
      this.open = false;
      this.$emit("popup-state-change", this.open);
    }
  },
  watch: {
    isOpen: function(newVal) {
      this.open = newVal;
    }
  }
};
</script>

<style lang="less" scoped>
.box {
  position: absolute;
  background-color: #fff;
  border: 1px solid blue;
  height: 80px;
  width: 300px;
}
</style>