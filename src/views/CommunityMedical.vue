<template>
  <div class="body">
    <!-- banner_black -->
    <ForFreeTry
      :QRcode="forFreeTryList.QRcode"
      :systemHref="forFreeTryList.systemHref"
      :ifVisible="forFreeTryList.visible"
      @close="closeFree"
    />

    <div class="banner_black">
      <div class="banner_content">
        <a-row>
          <a-col :span="12" :offset="1">
            <div class="banner_des">
              <h1 class="banner_title">社区医养生态建设管理系统</h1>
              <div class="banner_info">
                示例描述示例描述示例描述示例描述示例描述示例描述示例描述示例描述示例描述。（示例描述）
              </div>
              <a-button
                type="primary"
                class="export_button"
                @change="toSolution"
                >下载云诊疗操作指引</a-button
              >
              <a-button
                type="primary"
                class="export_button"
                @change="toSolution"
                style="margin-left: 30px"
                ><a @click="handleFree">免费试用</a></a-button
              >
              <!-- href="https://service.drugstore-cloud.com/opweb"
                target="_blank" -->
              <!-- window.location.href -->
            </div>
          </a-col>
        </a-row>
      </div>
    </div>

    <div class="anchor">
      <div class="anchor_nav">
        <div class="inner_width">
          <div
            :class="{ anchor_oneItem: true, active: activeAnchorIndex == '1' }"
            @click="toAnchor('1', '#overview')"
          >
            概览
          </div>
          <div
            :class="{ anchor_oneItem: true, active: activeAnchorIndex == '2' }"
            @click="toAnchor('2', '#industry')"
          >
            行业
          </div>
          <div
            :class="{ anchor_oneItem: true, active: activeAnchorIndex == '3' }"
            @click="toAnchor('3', '#customer')"
          >
            客户
          </div>
          <div
            :class="{ anchor_oneItem: true, active: activeAnchorIndex == '4' }"
            @click="toAnchor('4', '#analyses')"
          >
            分析报告
          </div>
        </div>
      </div>
    </div>
    <div class="anchor_content">
      <div class="overview" id="overview">
        <div class="text_info">
          <div class="overview_title">选择适合你的社区医养生态建设管理系统</div>
          <div class="overview_des">
            描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述。
          </div>
        </div>
        <div class="system_des">
          <a-row>
            <a-col :span="12" style="padding: 0 20px">
              <img src="@/assets/heart.jpg" class="system_des_img" />
              <div class="system_des_textAlign">
                <div class="system_des_title">采用即装即用的解决方案</div>
                <div class="system_des_content">
                  部署云端企业ERP管理系统，基于行业卓越实践，实现全新突破，高效运营、构建和改进你的业务流程。(示例描述)
                </div>
                <a-button type="primary" class="system_des_button"
                  >深入了解解决方案</a-button
                >
              </div>
            </a-col>
            <a-col :span="12" style="padding: 0 20px">
              <img src="@/assets/heart.jpg" class="system_des_img" />
              <div class="system_des_textAlign">
                <div class="system_des_title">采用即装即用的解决方案</div>
                <div class="system_des_content">
                  部署云端企业ERP管理系统，基于行业卓越实践，实现全新突破，高效运营、构建和改进你的业务流程。(示例描述)
                </div>
                <a-button type="primary" class="system_des_button"
                  >深入了解解决方案</a-button
                >
              </div>
            </a-col>
          </a-row>
        </div>
      </div>
      <div
        class="anchor_content"
        style="background: #f7f7f7; height: 500px"
        id="industry"
      >
        <div class="overview">
          <div class="text_info">
            <div class="overview_title">行业模块示例</div>
            <div class="overview_des">
              描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述。
            </div>
          </div>
        </div>
      </div>
      <div
        class="anchor_content"
        style="background: #fff; height: 500px"
        id="customer"
      >
        <div class="overview">
          <div class="text_info">
            <div class="overview_title">客户模块示例</div>
            <div class="overview_des">
              描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述。
            </div>
          </div>
        </div>
      </div>
      <div
        class="anchor_content"
        style="background: #f7f7f7; height: 600px"
        id="analyses"
      >
        <div class="overview">
          <div class="text_info">
            <div class="overview_title">分析报告模块示例</div>
            <div class="overview_des">
              描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述。
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script name="CommunityMedical" setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import ForFreeTry from "@/components/ForFreeTry.vue";
// eslint-disable-next-line no-unused-vars
const router = useRouter();

const activeAnchorIndex = ref();
// const showFreeAlert = ref(false);
const forFreeTryList = ref({
  QRcode: require("@/assets/communityCode.png"),
  systemHref: "https://service.drugstore-cloud.com/osweb",
  visible: false,
});

const toSolution = () => {};
const handleFree = () => {
  // showFreeAlert.value = true;
  forFreeTryList.value.visible = true;
};
// const toFreeTry= () =>{}

$(document).ready(function () {
  $(".body > *")
    .not(".contact_us_content")
    .click(function () {
      $(".contact_us_content").css({ display: "none" });
      $(".wechatShow").css({ display: "block" });
      $(".publicCode").css({ display: "none" });
    });
});
const toAnchor = (index, selector) => {
  document.querySelector(selector).scrollIntoView({
    // behavior: "smooth",
    // block:"center"
  });
  document.documentElement.scrollTop = document.documentElement.scrollTop - 100; // 没有回调只能写没有特效了，不然无法控制特效时间
  // setTimeout(() => {
  activeAnchorIndex.value = index;
  // }, 500);
};
const closeFree = () =>{
  forFreeTryList.value.visible = false
}

onMounted(() => {
  window.scrollTo(0, 0);
  window.onscroll = function () {
    //scrollTop就是触发滚轮事件时滚轮的高度
    $(".header_upper").css({ display: "none" });
    let anchor = document.querySelector(".anchor");
     //为了保证兼容性，这里取两个值，哪个有值取哪一个
    let scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    let offsetTop =
      document.querySelector(".anchor") &&
      document.querySelector(".anchor").offsetTop;
    if ((scrollTop+70) > offsetTop) {
      anchor && anchor.classList.add("fiexd");
    }
    if (scrollTop < (535-100)) {
      anchor && anchor.classList.remove("fiexd");
    }
    let overviewT =
      document.querySelector("#overview") &&
      document.querySelector("#overview").offsetTop;
    if (scrollTop <= overviewT - 200) {
      activeAnchorIndex.value = "";
    } else if (scrollTop > overviewT - 100 && scrollTop < overviewT + 600) {
      activeAnchorIndex.value = "1";
    } else if (
      scrollTop > overviewT &&
      scrollTop + 600 > overviewT &&
      scrollTop < overviewT + 1200
    ) {
      activeAnchorIndex.value = "2";
    } else if (
      scrollTop > overviewT &&
      scrollTop + 900 > overviewT &&
      scrollTop < overviewT + 1500
    ) {
      activeAnchorIndex.value = "3";
    } else if (
      scrollTop > overviewT &&
      scrollTop + 1300 > overviewT &&
      scrollTop < overviewT + 1800
    ) {
      activeAnchorIndex.value = "4";
    }
  };
});

onMounted(() => {});
</script>

<style scoped lang="less">
.body {
  position: relative;
}

.logo {
  color: #fff;
  font-size: 24px;
  line-height: 64px;
  cursor: pointer;
  opacity: 1;
  position: fixed;
  top: 0%;
  padding-left: 80px;
  z-index: 2;
}
.banner_white {
  // height: 686px;
  height: 352px;
  background: #000;
  background-image: url("@/assets/banner_white.jpg");
  background-size: cover;
  background-position: 20% 0;
  .banner_content {
    color: #000;
    padding: 164px 90px 80px;
    height: 100%;
    width: 60%;
    display: flex;
    align-items: center;
    .banner_des {
      .banner_title {
        font-size: 45px;
      }
      .banner_info {
        font-weight: lighter;
        font-size: 20px;
        margin-bottom: 32px;
      }
      .export_button {
        margin-bottom: 20px;
      }
    }
  }
}
.banner_black {
  height: 552px;
  background-image: url("@/assets/work.jpg");
  background-size: cover;
  background-position: 20%;
  .banner_content {
    color: #000;
    padding: 164px 90px 80px;
    height: 100%;
    // width: 100%;
    display: flex;
    align-items: center;
    .banner_des {
      .banner_title {
        font-size: 50px;
        // font-weight: lighter;
        line-height: 76px;
      }
      .banner_info {
        font-weight: lighter;
        font-size: 24px;
        margin-bottom: 32px;
        line-height: 32px;
      }
      .export_button {
        margin-bottom: 20px;
      }
    }
  }
}
.anchor {
  background: #f8f8f8;
  z-index: 2;
  position: absolute;
  top: 510px;
  width: 100%;
  .anchor_nav {
    height: 76px;
    width: 100%;
    display: flex;
    background: #eaeaea;
    .inner_width {
      // width: 30%;
      display: flex;
      justify-content: space-between;
      font-size: 18px;
      line-height: 76px;
      margin: auto;
    }
    .anchor_oneItem {
      padding: 0 18px;
      margin: 0 20px;
      color: rgb(136, 132, 132);
      cursor: pointer;
      &:hover {
        color: #433911;
        font-size: 20px;
      }
    }
  }
}
.active {
  border-bottom: 3px solid #f0ab00;
  color: #433911 !important;
  font-size: 20px;
}
.anchor_content {
  // padding: 0 90px;
  .overview {
    padding: 84px 90px;
    text-align: center;
    .text_info {
      margin: 0 88px;
      padding: 0 25px;
      .overview_title {
        color: #333;
        font-size: 46px;
        line-height: 84px;
      }
      .overview_des {
        font-weight: lighter;
        font-size: 20px;
        color: #3c3c3c;
        line-height: 30px;
        text-indent: 24px; // 首行缩进
      }
    }
  }
  .system_des {
    margin-top: 52px;
    // text-align: left;
    .system_des_img {
      width: 100%;
    }
    .system_des_textAlign {
      text-align: left;
      .system_des_title {
        font-size: 26px;
        line-height: 60px;
      }
      .system_des_content {
        font-size: 19px;
        font-weight: lighter;
        color: #3c3c3c;
        margin-bottom: 12px;
      }
      .system_des_button {
        margin: 12px 0 20px;
        /deep/.ant-btn {
          background: #fff !important;
        }
      }
    }
  }
}
.industry {
  background: #fff;
}

.fiexd {
  position: fixed;
  top: 64px;
  // font-size: 20px;
}
.free_title {
  font-size: 20px;
  position: relative;
  padding-left: 12px;
  margin: 16px 0 10px;
  text-align: center;
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
</style>
