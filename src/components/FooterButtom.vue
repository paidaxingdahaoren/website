<template>
    <div class="footer">
      <div class="footer_contain">
        <a-row justify="space-between" align="middle">
          <a-col :span="11">
            <img src="@/assets/huaxinLogo.png" height= "40"/> 
          </a-col>
          <a-col :span="7">
            <div class="filings">
              示例备案号——备案备案备案备案备案备案备案案
            </div>
          </a-col>
          <a-col :span="2">
            <div class="followup">关注我们<img src="@/assets/wechat.png" height="20" style="margin-left: 6px; margin-top: -4px"/></div>
          </a-col>
        </a-row>
      </div>
    </div>
</template>
<script setup name="FooterBUttom">
import {onMounted} from "vue"
onMounted(() => {
  let windowBottom = document.documentElement.scrollWidth
  document.querySelector('.footer').style.top = windowBottom
})
</script>

<style lang="less" scoped>
.footer {
  position: absolute;
  bottom: -100px;
  width: 100%;
  background: #222;
  z-index:10; 
  .footer_contain {
    padding: 30px 50px 40px;
    color: #999;
    font-size: 16px;
    .footer_logo {
      color: #fff;
      font-size: 24px;
    }
    .filings {
      font-size: 16px;
    }
    .followup {
      font-size: 16px;
      cursor: pointer;
    }
  }
}
</style>
