<template>
  <div class="header_upper">
    <a-row>
      <a-col
        :span="12"
        v-for="(item, index) in productionList[activeIndex]"
        :key="index"
      >
        <div class="header_upper_inner">
          <div class="header_upper_title" v-if="item.title">
            {{ item.title
            }}<img class="upper_img" src="@/assets/right_gray.png" />
          </div>
          <div class="header_upper_line" v-if="item.title"></div>
          <div
            :class="{
              single_item: true,
              single_item_active: indexI == selectIndustry - 1,
            }"
            v-for="(itemI, indexI) in item.itemSingle"
            :key="indexI + 1"
            @click="clickOneDustry(indexI + 1)"
          >
            {{ itemI.name }}
          </div>
        </div>
      </a-col>
      <a-col v-if="activeIndex == '0' && selectIndustry" :span="12">
        {{ productionList[0].itemSingle }}
        <div class="header_upper_inner">
          <div class="header_upper_title">行业细分</div>
          <div class="header_upper_line"></div>
          <div
            class="single_item"
            v-for="(item, index) in productionList[0][0].itemSingle[
              selectIndustry - 1
            ].specialList"
            :key="index"
          >
            {{ item.name }}
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
  <div class="header">
    <div class="logo_header" @click="toHome">
      <img src="@/assets/huaxinLogo.png" height="40" />
    </div>
    <div class="header_right">
      <div class="right_button">
        <div class="button_single" @click="openMenu('0')">
          产品 <img src="@/assets/drag.png" class="drug_icon" />
        </div>
        <div class="button_single" @click="openMenu('1')">
          服务和支持 <img src="@/assets/drag.png" class="drug_icon" />
        </div>
        <div class="button_single" @click="openMenu('2')">
          合作伙伴 <img src="@/assets/drag.png" class="drug_icon" />
        </div>
        <div class="button_single" @click="openMenu('3')">
          关于华信医疗 <img src="@/assets/drag.png" class="drug_icon" />
        </div>
        <div class="line"></div>
        <div class="tool_bar">
          <!-- <img class="tool_icon" src="@/assets/search.png" /> -->
          <img class="tool_icon" src="@/assets/user.png" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup name="HeaderTop">
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
const activeIndex = ref(false);
const selectIndustry = ref();
const router = useRouter();
const productionList = reactive([
  [
    {
      title: "按类别",
      itemSingle: [
        {
          name: "智慧云医疗类别",
          url: "",
          specialList: [
            {
              name: "医院信息化管理系统 (HIS)",
            },
            {
              name: "Lis",
            },
          ],
        },
        {
          name: "信华信重庆医药类别",
          url: "",
          specialList: [
            {
              name: "连锁药房",
            },
            {
              name: "云药房",
            },
            {
              name: "药品OCR",
            },
          ],
        },
        {
          name: "数据医保类别",
          url: "",
          specialList: [
            {
              name: "医疗保险运行服务",
            },
            {
              name: "信用就医平台",
            },
            {
              name: "基金监管",
            },
          ],
        },
        {
          name: "生态化医养类别",
          url: "",
          specialList: [
            {
              name: "产品蓝图C层",
            },
          ],
        },
        {
          name: "智能化宜居类别",
          url: "",
          specialList: [
            {
              name: "孙鹤规划",
            },
          ],
        },
      ],
    },
    // {
    //   title: "按行业",
    //   itemSingle: [
    //     {
    //       name: "医疗行业",
    //       url: "",
    //     },
    //     {
    //       name: "家居行业",
    //       url: "",
    //     },
    //     {
    //       name: "物联网行业",
    //       url: "",
    //     },
    //     {
    //       name: "软件下载",
    //       url: "",
    //     },
    //     {
    //       name: "应用生命周期管理",
    //       url: "",
    //     },
    //   ],
    // },
  ],
  [
    {
      title: "服务与支持",
      itemSingle: [
        {
          name: "基础支持",
          url: "",
        },
        {
          name: "成功计划和服务",
          url: "",
        },
        {
          name: "高级服务",
          url: "",
        },
        {
          name: "产品支持",
          url: "",
        },
        {
          name: "软件下载",
          url: "",
        },
      ],
    },
  ],
  [
    {
      title: "合作伙伴概览",
      itemSingle: [
        {
          name: "查找信华信智慧云合作伙伴",
          url: "",
        },
        {
          name: "成为信华信智慧云合作伙伴",
          url: "",
        },
        {
          name: "SAP Pinnacle Awards",
          url: "",
        },
        {
          name: "查找信华信智慧云合作伙伴",
          url: "",
        },
        {
          name: "成为信华信智慧云合作伙伴",
          url: "",
        },
      ],
    },
    {
      title: "合作伙伴登录",
      itemSingle: [
        {
          name: "SAP Partner Portal",
          url: "",
        },
      ],
    },
  ],
  [
    {
      title: "",
      itemSingle: [
        {
          name: "公司信息",
          url: "",
        },
        {
          name: "招贤纳士",
          url: "",
        },
        {
          name: "客户案例",
          url: "",
        },
        {
          name: "活动",
          url: "",
        },
        {
          name: "投资者关系",
          url: "",
        },
        {
          name: "新闻中心",
          url: "",
        },
      ],
    },
  ],
]);
const openMenu = (e) => {
  showMenu(e);
};
const toHome = () => {
  let currentRoute = router.currentRoute;
  if (currentRoute && currentRoute.value.path == "/") {
    window.scrollTo(0, 0);
  }
  router.push("/");
};
const clickOneDustry = (index) => {
  selectIndustry.value = index;
};
const showMenu = (e) => {
  $(document).ready(function () {
    if (e != activeIndex.value) {
      $(".header_upper").css({ display: "none", height: "auto" });
      $(".header_upper").slideDown("slow");
      activeIndex.value = e;
      selectIndustry.value = "";
    } else {
      $(".header_upper").slideToggle("slow");
      activeIndex.value = e;
    }
    if (e == "0") {
      $(".header_upper").css({
        left: "50%",
        right: "auto",
      });
    } else if (e == "1") {
      $(".header_upper").css({
        left: "59%",
        right: "auto",
      });
    } else {
      $(".header_upper").css({
        right: "32px",
        left: "auto",
      });
    }
  });
  // 收起
  $(".body > *")
    .not(".header_upper")
    .not(".header")
    .click(function () {
      $(".header_upper").css({ display: "none" });
      selectIndustry.value = "";
    });
  $(".logo_header").click(function () {
    $(".header_upper").css({ display: "none" });
    selectIndustry.value = "";
  });
  // end
  $(".body > *")
    .not(".contact_us_content")
    .click(function () {
      $(".contact_us_content").css({ display: "none" });
    });
};
// onMounted(() => {
window.onscroll = function () {
  $(".header_upper").css({ display: "none" });
};
$(document).ready(function () {
  $(".body > *")
    .not(".header_upper")
    .not(".header")
    .click(function () {
      $(".header_upper").css({ display: "none" });
    });
  $(".logo_header").click(function () {
    $(".header_upper").css({ display: "none" });
  });
  $(".header").click(function () {
    $(".contact_us_content").css({ display: "none" });
  });
  $(".body > *")
    .not(".contact_us_content")
    .click(function () {
      $(".contact_us_content").css({ display: "none" });
    });
});
// });
</script>

<style lang="less" scoped>
.header {
  height: 64px;
  padding: 0 50px;
  background: #000;
  position: fixed;
  top: 0%;
  width: 100%;
  opacity: 0.9;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  .logo_header {
    color: #fff;
    font-size: 24px;
    line-height: 64px;
    cursor: pointer;
    opacity: 1;
    display: flex;
    align-items: center;
  }
  .header_right {
    .right_button {
      // float: right;
      display: flex;
      align-items: center;
      .button_single {
        color: #c6c6c6;
        line-height: 64px;
        font-size: 16px;
        padding: 0 18px;
        cursor: pointer;
        font-weight: lighter;
        .drug_icon {
          height: 20px;
          margin-top: -4px;
        }
        &:hover {
          background: #313030;
          color: #fff;
        }
        &:active {
          background: #232323;
        }
      }
      .line {
        border-left: solid 1px #c6c6c6;
        opacity: 0.6;
        height: 20px;
        margin: 0 18px;
      }
      .tool_bar {
        height: 64px;
        line-height: 60px;
        .tool_icon {
          height: 30px;
          padding: 0 10px;
          cursor: pointer;
        }
        &:hover {
          background: #313030;
          color: #fff;
        }
      }
    }
  }
}
.header_upper {
  position: fixed;
  top: 64px;
  //   right: 32px;
  padding: 32px 26px;
  background: #f7f8fc;
  box-shadow: 0 0 20px 5px #0000001a;
  display: none;
  z-index: 7;
  .header_upper_inner {
    padding: 0 26px;
    width: 300px;
    .header_upper_title {
      color: #3c3c3c;
      margin-bottom: 16px;
      .upper_img {
        height: 16px;
        margin-top: -3px;
        padding-left: 4px;
      }
    }
    .header_upper_line {
      width: 100%;
      border-top: solid 1px #3c3c3c;
      opacity: 0.2;
      margin-bottom: 6px;
      // background: ##3c3c3c;
    }
    .single_item {
      color: #3c3c3c;
      opacity: 0.7;
      line-height: 34px;
      cursor: pointer;
      &:hover {
        opacity: 0.9;
      }
      // font-weight: lighter;
    }
    .single_item_active {
      opacity: 0.9;
      color: #007db8;
    }
  }
}
</style>
