<template>
  <div>
    <h3 class="title">Dashboard</h3>
    <ConfirmPopover
      :visible="isPopoverShow"
      :width="240"
      @confirmPopover="onConfirmPopover"
      @cancelPopover="onCancelPopover"
      title="警告"
      content="确定要删除此内容吗？"
    >
      <button type="button" @click="onSave">保存</button>
    </ConfirmPopover>
  </div>
</template>

<script>
import ConfirmPopover from "../common/components/ConfirmPopover";

export default {
  components: {
    ConfirmPopover
  },
  data() {
    return {
      isPopoverShow: false
    };
  },
  methods: {
    onSave() {
      if (this.isPopoverShow) {
        return;
      }
      console.log("保存");
      this.isPopoverShow = true;
    },
    onConfirmPopover() {
      console.log("确认");
      this.isPopoverShow = false;
    },
    onCancelPopover() {
      console.log("取消");
      this.isPopoverShow = false;
    }
  }
};
</script>

<style lang="less" scoped>
@color = red;
.title {
  color: red;
}
</style>