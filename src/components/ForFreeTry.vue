<template>
  <a-modal
    v-model:open="visible"
    title="模拟线上多端联动"
    width="600px"
    @cancel="onCancel"
  >
    <a-row class="modify">
      <a-col :span="11"
        ><div class="free_title">模拟客户手机端操作体验</div>
        <img :src="QRcode" height="160" class="communityImg"
      /></a-col>
      <a-col :span="10" :offset="3">
        <div class="free_title">管理平台操作体验</div>
        <div class="free_pc">
          <div class="free_cont">模拟账号： <span>superAdmin</span></div>
          <div class="free_cont">模拟密码： <span>9272652930</span></div>
          <a-button
            type="primary"
            @click="toFreeTry"
            style="width: 100%"
            class="toFreeTry_class"
          >
            <!-- <a href="https://service.drugstore-cloud.com/osweb" target="_blank"> -->
            <a :href="systemHref" target="_blank"> 去试用 </a></a-button
          >
        </div>
      </a-col>
    </a-row>
  </a-modal>
</template>
<script name="ForFreeTry" setup>
import { defineProps, computed, defineEmits } from "vue";
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  ifVisible: {
    type: Boolean,
    default: false,
  },
  systemHref: {
    type: String,
    default: "",
  },
  QRcode: {
    type: String,
    defualt: "",
  },
});
const emits = defineEmits(["close"]);
const visible = computed(() => props.ifVisible);
const onCancel = () => {
  emits("close");
};
const toFreeTry = () => {};
</script>
<style lang="less" scoped>
.free_pc {
  padding-left: 10px;
}
.free_cont:nth-child(2) {
  padding-bottom: 14px;
}
.free_cont {
  font-size: 14px;
  font-size: #8f8787;
}

/deep/.ant-modal-footer {
  display: none !important;
}
.modify {
  padding: 10px 20px 20px;
  position: relative;
}
.toFreeTry_class {
  position: absolute;
  right: 0;
  bottom: 0;
}
.free_title {
  font-size: 20px;
  position: relative;
  padding-left: 12px;
  margin: 16px 0 10px;
  &::before {
    content: "";
    position: absolute;
    height: 16px;
    width: 4px;
    background: #007db8;
    left: 0;
    top: 8px;
  }
}
.communityImg {
  margin-left: 34px;
}
</style>
