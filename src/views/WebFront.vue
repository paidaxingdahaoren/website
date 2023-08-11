<template>
  <div class="body">
    <div class="header">
      <!-- <div class="logo">重庆医疗</div>    -->
    </div>
    <div class="logo" @click="toHome">重庆医疗</div>
    <div class="main">
      <div class="banner"></div>
      <div class="login_content">
        <div class="login_title">
          <div class="ask_login">免费试用</div>
        </div>
        <div class="form">
          <a-form
            :model="form"
            name="basic"
            :label-col="{ span: 8 }"
            :wrapper-col="{ span: 16 }"
            autocomplete="off"
            @finish="onFinish"
            @finishFailed="onFinishFailed"
          >
            <a-row>
              <a-col :span="8">
                <a-form-item label="" name="nation" class="oneItem">
                  <!-- <a-input v-model:value="formState.nation" placeholder="国家/地区" /> -->
                  <a-select
                    allowClear
                    v-model:value="formState.nation"
                    placeholder="国家地区"
                  >
                    <a-select-option value="1"> 中国</a-select-option>
                    <a-select-option value="2"> 美国</a-select-option>
                    <a-select-option value="3"> 日本</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <a-form-item label="" name="nation" class="oneItem">
                  <a-input
                    v-model:value="formState.surname"
                    placeholder="姓氏"
                  />
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <a-form-item label="" name="nation" class="oneItem">
                  <a-input
                    v-model:value="formState.firstname"
                    placeholder="名字"
                  />
                </a-form-item>
              </a-col>
            </a-row>
            <a-row>
              <a-col :span="8">
                <a-form-item label="" name="company" class="oneItem">
                  <a-select
                    allowClear
                    v-model:value="formState.company"
                    placeholder=""
                  >
                    <a-select-option value="1"> 公司1</a-select-option>
                    <a-select-option value="2"> 公司2</a-select-option>
                    <a-select-option value="3"> 公司3</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <a-form-item label="" name="phone" class="oneItem">
                  <a-input v-model:value="formState.phone" placeholder="电话" />
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <a-form-item label="" name="email" class="oneItem">
                  <a-input
                    v-model:value="formState.email"
                    placeholder="电子邮件"
                  />
                </a-form-item>
              </a-col>
            </a-row>
            <a-row>
              <a-col :span="8">
                <a-form-item label="" name="company" class="oneItem">
                  <a-select
                    allowClear
                    v-model:value="formState.company"
                    placeholder=""
                  >
                    <a-select-option value="1"> 部门1</a-select-option>
                    <a-select-option value="2"> 部门2</a-select-option>
                    <a-select-option value="3"> 部门3</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <a-form-item label="" name="phone" class="oneItem">
                  <a-select
                    allowClear
                    v-model:value="formState.relationship"
                    placeholder=""
                  >
                    <a-select-option value="1">员工</a-select-option>
                    <a-select-option value="2">合作伙伴</a-select-option>
                    <a-select-option value="3">客户</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
            </a-row>
            <div class="login_button_content">
              <div class="button_contain">
                <a-button type="primary" class="login_button" >快速注册</a-button >
                <div class="alrady_have_account">
                  已有账号？
                  <a class="quick_login">快速登录</a>
                </div>
              </div>
            </div>
          </a-form>
        </div>
      </div>

      <div class="offer-content">
        <a-row style="width: 100%">
          <a-col :span="15">
            <div class="login-content">
              <div class="login-content-title">
                立即注册，探索创建重庆华信医疗共赢
              </div>
              <div class="login-content-subtitle">
                示例：面向“新型中国企业”的云解决方案
              </div>
              <div class="line">注册后您将了解到：</div>
              <div class="line">
                ERP云-企业重构业务流程的利器，了解云技术与业务流程转型战略相结合如何改进业务流程,
                ERP云-企业重构业务流程的利器，了解云技术与业务流程转型战略相结合如何改进业务流程,
              </div>
              <div class="line">
                HR云-利用 SAP SuccessFactors 解决方案上云的十大理由及主要收益，
                HR云-利用 SAP SuccessFactors 解决方案上云的十大理由及主要收益
              </div>
              <div class="line">
                ERP云-企业重构业务流程的利器，了解云技术与业务流程转型战略相结合如何改进业务流程
              </div>
              <div class="line">
                HR云-利用 SAP SuccessFactors 解决方案上云的十大理由及主要收益
              </div>
              <div class="line">测试测试测试测试测试测试</div>
              <div class="line">测试测试测试测试测试测试</div>
            </div>
          </a-col>
          <a-col :offset="1" :span="8">
            <div class="imglogin">
              <img class="imglogin_tag" src="@/assets/medical_img.jpg" />
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
    <div class="footer">
      <div class="footer_contain">
        <a-row>
          <a-col :span="8">
            <div class="lineOne">
              <div class="line_title">快速链接</div>
              <div class="line_content">
                <div>可持续性管理</div>
                <div>智慧企业</div>
                <div>可持续性管理</div>
                <div>智慧企业</div>
                <div>可持续性管理</div>
                <div>智慧企业</div>
                <div>可持续性管理</div>
                <div>智慧企业</div>
              </div>
            </div>
          </a-col>
          <a-col :span="8">
            <div class="lineOne">
              <div class="line_title">快速链接</div>
              <div class="line_content">
                <div>可持续性管理</div>
                <div>智慧企业</div>
                <div>可持续性管理</div>
                <div>智慧企业</div>
                <div>可持续性管理</div>
                <div>智慧企业</div>
                <div>可持续性管理</div>
                <div>智慧企业</div>
              </div>
            </div>
          </a-col>
          <a-col :span="8">
            <div class="lineOne">
              <div class="line_title">快速链接</div>
              <div class="line_content">
                <div>可持续性管理</div>
                <div>智慧企业</div>
                <div>可持续性管理</div>
                <div>智慧企业</div>
                <div>可持续性管理</div>
                <div>智慧企业</div>
                <div>可持续性管理</div>
                <div>智慧企业</div>
              </div>
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>

<script name="HellowWorld" setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
// eslint-disable-next-line no-unused-vars
const formState = reactive({
  nation: "",
  surname: "",
  firstname: "",
});
const router = useRouter();
const onFinish = () => {
};

const onFinishFailed = () => {
};
const toHome = () => {
  router.push("/");
};
// 关闭联系我们弹窗
$(document).ready(function () {
  $(".body > *")
    .not(".contact_us_content")
    .click(function () {
      $(".contact_us_content").css({ display: "none" });
    });
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.body {
  position: relative;
}
.header {
  height: 70px;
  padding: 0 50px;
  background: #000;
  position: fixed;
  top: 0%;
  width: 100%;
  opacity: 1;
  z-index: 2;
  .logo {
    color: #fff;
    font-size: 24px;
    line-height: 70px;
    cursor: pointer;
    opacity: 1;
  }
}
.logo {
  color: #fff;
  font-size: 24px;
  line-height: 70px;
  cursor: pointer;
  opacity: 1;
  position: fixed;
  top: 0%;
  padding-left: 50px;
  z-index: 2;
}
.main {
  
  .banner {
    // width: 100%;
    background-image: url("@/assets/banner.jpg");
    background-size: cover;
    width: 100%;
    height: 600px;
    // background: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  }
  .login_content {
    font-size: 30px;
    padding: 30px 30px 30px 50px;
    position: absolute;
    background: #fff;
      box-shadow: 0 0 20px 5px #0000001a;
    left: 50%;
    transform: translate(-50%);
    top: 570px;

    .login_title {
      display: flex;
      align-items: flex-end;
      align-items: bottom;
      text-align: center;
      .ask_login {
        width: 100%;
        text-align: center;
      }

      .login_now {
        font-size: 18px;
        color: #256d8e;
        font-weight: lighter;
        cursor: pointer;
      }
    }
    .form {
      padding: 30px 0 0;
      width: 750px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      /deep/.ant-select-selector {
        height: 40px;
      }
      .login_button_content {
        width: 100%;
        display: flex;
        .button_contain {
          margin-left: auto;
          margin-right: auto;
          .login_button {
          height: 50px;
          width: 380px;
          font-size: 18px;
          background: #3867a9;
          border-radius: 0;
        }
        
        .alrady_have_account {
            padding-top:10px;
            text-align: center;
            .quick_login {
                padding-left: 4px;
                cursor: pointer;
                &:hover {
                    color: #3867a9;
                }
            }
            
        }
        }
        // 
      }
    }
  }
  .offer-content {
    margin-top: 350px;
    padding: 0 90px;
    display: flex;
    width: 100%;
  }
  .login-content {
    padding: 84px 25px;
    // width: 600px;
    .login-content-title {
      font-size: 50px;
      text-align: center;
    }
    .login-content-subtitle {
      font-weight: lighter;
      text-align: center;
      font-size: 24px;
      color: #3c3c3c;
      line-height: 60px;
    }
    .line {
      margin: 10px;
      font-size: 18px;
      font-weight: lighter;
    }
  }
  .imglogin {
    // background-image: url("@/assets/medical_img.jpg");
    // width: 100px;
    // background-size: 100px;
    // background-repeat: no-repeat;
    overflow: hidden;
    height: 500px;
    padding-top: 100px;
    .imglogin_tag {
      height: 100%;
    }
  }
}
.footer {
  background: #222;
  .footer_contain {
    padding: 30px 80px 40px;
    .lineOne {
      padding: 0 25px;
      color: #999;
      font-weight: lighter;
      .line_title {
        line-height: 42px;
        font-size: 20px;
      }
      .line_content {
        padding: 10px 0;
        font-size: 18px;
        line-height: 38px;
      }
    }
  }
}
</style>
