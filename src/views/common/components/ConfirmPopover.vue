<template>
  <Popover :placement="placement" :title="title" v-model="isPopoverShow" trigger="manual">
    <p>{{content}}</p>
    <div>
      <button type="button" @click="okBtnClick">确定</button>
      <button type="button" @click="cancelBtnClick">取消</button>
    </div>
    <slot slot="reference"></slot>
  </Popover>
</template>

<script>
import { Popover } from "element-ui";

export default {
  name: "ConfirmPopover",
  components: {
    Popover
  },
  data() {
    return {
      isPopoverShow: false
    };
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: String,
    content: String,
    width: {
      type: Number,
      default: 200
    },
    placement: {
      type: String,
      default: "bottom",
      validator: value => {
        const positionList = [
          "top",
          "top-start",
          "top-end",
          "bottom",
          "bottom-start",
          "bottom-end",
          "left",
          "left-start",
          "left-end",
          "right",
          "right-start",
          "right-end"
        ];
        return positionList.includes(value);
      }
    }
  },
  watch: {
    visible(val) {
      this.isPopoverShow = val;
    }
  },
  methods: {
    okBtnClick() {
      this.$emit("confirmPopover");
    },
    cancelBtnClick() {
      this.$emit("cancelPopover");
    }
  },
  mounted() {
    console.log(this.content, 123);
  }
};
</script>

<style lang="scss" scoped>
</style>