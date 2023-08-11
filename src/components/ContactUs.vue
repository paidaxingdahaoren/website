<template>
  <div class="contact_us_content">
    <a-row>
      <a-col :span="14">
        <div class="contact_us_content_left">
          <div class="call">请拨打官方热线</div>
          <div>重庆</div>
          <div class="number">400-619-0727</div>
          <div>
            或者浏览完整列表，查找 <a style="color: #fff">当地电话号码</a>
          </div>
        </div>
      </a-col>
      <a-col :span="10" class="contact_us_right_contain">
        <div style="margin: auto">
          <div class="contact_us_content_right">
            <a-row justify="space-around">
              <a-col :span="6">
                <img src="@/assets/contact.png" height="40" />
              </a-col>
              <a-col :span="18">
                <div class="wechatShow">
                  <div class="contact_oneItem wechat">关注微信公众号</div>
                  <div class="contact_onItem_des">
                    关注微信公众号，我们尽快与您联系
                  </div>
                </div>
                <div class="publicCode">
                  信华信重庆企业公众号
                  <img src="@/assets/communityCode.png" height="90" style="padding-top: 8px"/>
                </div>
              </a-col>
            </a-row>
          </div>
          <div class="contact_line"></div>
          <div class="contact_us_content_right">
            <a-row justify="space-around">
              <a-col :span="6">
                <img src="@/assets/chat_right.png" height="40" />
              </a-col>
              <a-col :span="18">
                <div class="contact_oneItem">联系我们</div>
                <div class="contact_onItem_des">
                  如有任何建议、问题或者反馈，欢迎发送电子邮件给我们。
                </div>
              </a-col>
            </a-row>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
  <div class="contact_us">
    <div class="contact_us_inner">
      <img src="@/assets/messages.png" class="message_icon" />
      <div>联系我们</div>
    </div>
  </div>
</template>

<script setup name="ContactUs">
$(document).ready(function () {
  $(".contact_us").click(function () {
    $(".contact_us_content").css({ display: "block" });
    $(".header_upper").css({ display: "none" });
  });
  $(".wechat").click(function () {
    $(".wechatShow").css({ display: "none" });
    $(".publicCode").css({ display: "block" });
  });
  $(".body > *")
    .not(".contact_us_content")
    .click(function () {
      $(".contact_us_content").css({ display: "none" });
      $(".wechatShow").css({ display: "block" });
      $(".publicCode").css({ display: "none" });
    });
});
</script>

<style scoped lang="less">
.contact_us_content {
  width: 44%;
  position: fixed;
  right: 0;
  top: 34%;
  z-index: 6;
  display: none;
  .contact_us_content_left {
    padding: 83px 22px;
    text-align: center;
    background: #007db8;
    color: #fff;
    .call {
      font-size: 22px;
      margin-bottom: 26px;
    }
    .number {
      font-size: 38px;
      line-height: 38px;
      margin-top: 10px;
      margin-bottom: 40px;
      // margin: 10px 90px 40px ;
      cursor: pointer;
      position: relative;
      &:hover {
        &:before {
          content: "";
          position: absolute;
          height: 2px;
          width: 234px;
          background: #fff;
          bottom: 0;
        }
      }
    }
  }
  .contact_us_right_contain {
    padding: 20px 0;
    background: #e9ebf1;
    display: flex;
    position: relative;
    .contact_line {
      width: 80%;
      transform: translate(13%, 0);
      position: absolute;
      left: 0;
      height: 2px;
      background: gray;
      opacity: 0.1;
    }
    .contact_us_content_right {
      width: 100%;
      padding: 27px 24px;
      // height: 100%;
      .contact_oneItem {
        color: #007db8;
        padding-bottom: 10px;
        cursor: pointer;
        font-size: 18px;
      }
      .contact_onItem_des {
        color: #545454;
        line-height: 18px;
      }
    }
  }
}
.contact_us {
  padding: 16px 25px;
  background: #007db8;
  position: fixed;
  right: 0;
  top: 45%;
  color: #fff;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 4;
  font-weight: lighter;
  opacity: 0.8;
  cursor: pointer;
  .message_icon {
    height: 38px;
    padding-bottom: 4px;
  }
  &:hover {
    opacity: 1;
  }
}
.publicCode {
  display: none;
  font-size: 18px;
  color: #007db8;
  padding-bottom: 4px;
  // text-align: center;
}
</style>
