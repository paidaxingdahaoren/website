<template>
  <div class="body">
    <!-- banner_black -->
    <div class="banner_white">
      <div class="banner_content">
        <a-row>
          <a-col :span="12" :offset="1">
            <div class="banner_des">
              <h1 class="banner_title">利用信华信智慧云，做好全方位准备</h1>
              <div class="banner_info">
                采用信华信智慧云，你可以选择一款完整的模块化信华信智慧云解决方案来满足不同业务需求。（示例描述）
              </div>
              <a-button type="primary" class="export_button" @click="toSolution(0)"
                >立即探索</a-button
              >
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
    <div class="solution_plan">
      <div class="solution_content">
        <div class="solution_title">
          <div class="solution_title_font">专为你量身定制的解决方案</div>
          <a-button class="solution_title_button"
            >深入了解所有产品（按字母排序）
            <img src="@/assets/right_arrow.png" class="arrow_icon"
          /></a-button>
        </div>
      </div>
      <div class="solution_cards">
        <div class="solution_card_contain">
          <a-row>
            <a-col
              :span="12"
              v-for="(item, index) in solutionList"
              :key="index"
            >
              <div class="solution_one_card" @click="toSolution(index)">
                <div class="solution_one_inner_card leftCard">
                  <h5 class="solution_title">{{ item.title }}</h5>
                  <p class="solution_des">
                    {{ item.des }}
                  </p>
                  <a class="solution_link">
                    {{ item.link }}
                    <img
                      src="@/assets/solution_icon.png"
                      class="go_solution_icon"
                    />
                  </a>
                </div>
              </div>
            </a-col>
          </a-row>
        </div>
      </div>
    </div>
    <div class="simple_introduce">
      <div class="introduce_title">
        信华信智慧云，领先企业成长和发展的信赖之选
      </div>
      <div class="introduce_subTitle">
        <a-row>
          <a-col :span="10">
            <div class="introduce_subTitle_font">智慧云简介</div>
            <h3 class="subTitle_title">面向所有企业的云解决方案</h3>
            <div class="introduce_des">
              久经验证，出类拔萃：充分集成，打破孤岛，提升效率，尽释潜能。
            </div>
            <a-button type="primary" class="introduce_button"
              >开启新华信智慧云解决方案之旅</a-button
            >
          </a-col>
          <a-col :span="13" :offset="1">
            <!-- <div class="introduce_img"></div> -->
            <img src="@/assets/medical.jpg" class="introduce_img" />
          </a-col>
        </a-row>
      </div>
    </div>
    <div class="example">
      <div class="example_content">
        <div>深受全国所有规模企业的信赖</div>
        <a-button type="primary" class="example_button"
          >查看智慧云客户案例</a-button
        >
      </div>
      <div class="wrapper">
        <div class="wapper_content">
          <div class="logo_oneItem">
            <img src="@/assets/huaxin.png" height="100" />
          </div>
          <div class="logo_oneItem">
            <img src="@/assets/huaxin.png" height="100" />
          </div>
          <div class="logo_oneItem">
            <img src="@/assets/huaxin.png" height="100" />
          </div>
          <div class="logo_oneItem">
            <img src="@/assets/huaxin.png" height="100" />
          </div>
          <div class="logo_oneItem">
            <img src="@/assets/huaxin.png" height="100" />
          </div>
        </div>
        <div class="wapper_content">
          <div class="logo_oneItem">
            <img src="@/assets/huaxin.png" height="100" />
          </div>
          <div class="logo_oneItem">
            <img src="@/assets/huaxin.png" height="100" />
          </div>
          <div class="logo_oneItem">
            <img src="@/assets/huaxin.png" height="100" />
          </div>
          <div class="logo_oneItem">
            <img src="@/assets/huaxin.png" height="100" />
          </div>
          <div class="logo_oneItem">
            <img src="@/assets/huaxin.png" height="100" />
          </div>
        </div>
        <div class="wapper_content">
          <div class="logo_oneItem">
            <img src="@/assets/huaxin.png" height="100" />
          </div>
          <div class="logo_oneItem">
            <img src="@/assets/huaxin.png" height="100" />
          </div>
          <div class="logo_oneItem">
            <img src="@/assets/huaxin.png" height="100" />
          </div>
          <div class="logo_oneItem">
            <img src="@/assets/huaxin.png" height="100" />
          </div>
          <div class="logo_oneItem">
            <img src="@/assets/huaxin.png" height="100" />
          </div>
        </div>
      </div>
    </div>
    <div class="news">
      <div class="top_card">
        <div class="title_tiny">最新内容</div>
        <div class="all_example">
          <a-row>
            <a-col :span="6">
              <img src="@/assets/client.jpg" class="client_img" />
            </a-col>
            <a-col :span="17" :offset="1" class="example_control">
              <div class="center_box">
                <div class="right_content">客户成功</div>
                <div class="right_content_title">信华信精选客户案例集</div>
                <div class="right_content_des">
                  甄选「新型中国企业」故事，见证繁花似锦的云端征途。助力企业帷幄四方，开拓转型灵感，照亮变革之道。
                </div>
                <a-button type="primary">下载信华信案例集</a-button>
              </div>
            </a-col>
          </a-row>
        </div>
      </div>
      <div class="upper_card">
        <a-row>
          <a-col :span="12" v-for="(item, index) in newsList" :key="index">
            <div class="news_card">
              <div class="new_banner"></div>
              <div class="news_text">
                <div class="type">{{ item.newsType }}</div>
                <div class="news_title">{{ item.newsTitle }}</div>
                <div class="news_des">
                  {{ item.newsDes }}
                </div>
                <a-button type="primary">观看回放</a-button>
              </div>
            </div>
          </a-col>
          <a-col :span="12"></a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>

<script name="HellowWorld" setup>
import { reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
import { message } from 'ant-design-vue';
// import ContactUs from '@/components/ContactUs'
// eslint-disable-next-line no-unused-vars
const router = useRouter();

const solutionList = reactive([
  {
    title: "智慧云（药房 | 诊疗）管理系统",
    des: "描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述",
    link: "深入了解智慧云",
  },
  {
    title: "医保局信息化建设",
    des: "描述描述描述描述述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述",
    link: "深入了解医保局信息化建设",
  },

  {
    title: "医疗健康数字化",
    des: "描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述",
    link: "深入了解医疗健康数字化",
  },
  {
    title: "社区医养生态建设",
    des: "描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述",
    link: "深入了解社区医养生态建设",
  },
  {
    title: "IoT方向",
    des: "端到端IoT毫米波雷达解决方案,描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述",
    link: "深入了解IoT毫米波雷达",
  },
  {
    title: "SAP",
    des: "描述描述描述描述描述述述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述",
    link: "深入了解SAP",
  },
]);
const newsList = reactive([
  {
    newsType: "市场活动",
    newsTitle: "市场活动1",
    newsDes:
      "最新事件描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述",
  },
  {
    newsType: "市场活动",
    newsTitle: "市场活动2",
    newsDes:
      "最新事件描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述",
  },
  {
    newsType: "新报告",
    newsTitle: "新报告1",
    newsDes:
      "最新事件描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述",
  },
  {
    newsType: "新报告",
    newsTitle: "新报告2",
    newsDes:
      "最新事件描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述",
  },
]);

const toSolution = (i) => {
  switch (i) {
    case 0:
      router.push("/SolutionPlan");
      break;
    case 1:
      message.warn('功能暂未开放')
      break;
    case 2:
      router.push("/MedicalHealth");
      break;
    case 3:
      router.push("/CommunityMedical");
      break;
    case 4:
      message.warn('功能暂未开放')
      break;
    case 5:
      message.warn('功能暂未开放')
      break;
  }
};
onMounted(() => {
  window.scrollTo(0, 0);
});
window.onscroll = function () {
  $(".header_upper").css({ display: "none" });
};
$(document).ready(function () {
  // 轮播图， 无限循环播放
  $(".logo_oneItem").each(function (i) {
    $(".logo_oneItem")
      .eq(i)
      .hover(
        function () {
          $(".wapper_content").css({ animationPlayState: "paused" });
          $(".logo_oneItem").eq(i).css({
            transform: "scale(1.2)",
            transition: "all 0.3s",
          });
        },
        function () {
          //离开就恢复初始样式
          $(".logo_oneItem").css({
            transform: "scale(1)",
            transition: "all 0.3s",
          });
          $(".wapper_content").css({ animationPlayState: "running" });
        }
      );
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.body {
  position: relative;
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
  z-index: 2;
  font-weight: lighter;
  cursor: pointer;
  .message_icon {
    height: 38px;
    padding-bottom: 4px;
  }
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
  height: 852px;
  background-image: url("@/assets/work.jpg");
  background-size: cover;
  background-position: 20% 0;
  .banner_content {
    color: #000;
    padding: 164px 90px 80px;
    height: 100%;
    width: 90%;
    display: flex;
    align-items: center;
    .banner_des {
      .banner_title {
        font-size: 64px;
        line-height: 76px;
      }
      .banner_info {
        font-weight: lighter;
        font-size: 30px;
        margin-bottom: 32px;
        line-height: 38px;
      }
      .export_button {
        margin-bottom: 20px;
      }
    }
  }
}
.banner_black {
  height: 852px;
  background-image: url("@/assets/banner_product.jpg");
  background-size: cover;
  background-position: 20%;
  .banner_content {
    color: #fff;
    padding: 164px 90px 80px;
    height: 100%;
    // width: 100%;
    display: flex;
    align-items: center;
    .banner_des {
      .banner_title {
        font-size: 64px;
        // font-weight: lighter;
        line-height: 76px;
      }
      .banner_info {
        font-weight: lighter;
        font-size: 30px;
        margin-bottom: 32px;
      }
      .export_button {
        margin-bottom: 20px;
      }
    }
  }
}
// 解决方案
.solution_plan {
  padding: 84px 0 20px;
  .solution_content {
    padding: 0 90px;
    .solution_title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .solution_title_font {
        font-size: 18px;
        padding-left: 20px;
        position: relative;
        margin-bottom: 52px;
        &:before {
          content: "";
          position: absolute;
          height: 38px;
          width: 4px;
          background: #000;
          left: 0px;
          top: -8px;
        }
      }
      .solution_title_button {
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        .arrow_icon {
          height: 30px;
        }
      }
      /deep/.ant-btn {
        color: #1677ff;
        border-color: #1677ff;
        background: #fff !important;
      }
    }
  }
  .solution_cards {
    padding: 0 65px;
    .solution_card_contain {
      .solution_one_card {
        margin: 25px;
        &:hover {
          transform: scale(1.05); //放大倍数，可以根据需求自行修改
          transition: all 0.3s; //设置动画执行的时间为0.6s
        }
        .leftCard {
        }
        .solution_one_inner_card {
          padding: 32px;
          box-shadow: 0 0 20px 5px #0000001a;
          cursor: pointer;

          .solution_title {
            font-size: 24px;
            margin-bottom: 20px;
          }
          .solution_des {
            font-size: 18px;
            font-weight: lighter;
            margin-bottom: 20px;
            line-height: 26px;
          }
          .solution_link {
            font-size: 18px;
            display: flex;
            color: #007db8;
            .go_solution_icon {
              height: 20px;
              margin-top: 2px;
              margin-left: 4px;
            }
          }
        }
      }
    }
  }
}
.simple_introduce {
  padding: 90px 84px;
  .introduce_title {
    font-size: 50px;
    text-align: center;
  }
  .introduce_subTitle {
    margin-top: 52px;
    .introduce_subTitle_font {
      font-size: 18px;
      padding-left: 20px;
      position: relative;
      margin-bottom: 52px;
      &:before {
        content: "";
        position: absolute;
        height: 38px;
        width: 4px;
        background: #000;
        left: 0px;
        top: -8px;
      }
    }
    .subTitle_title {
      font-size: 36px;
      // background-color: #0070f2;
      // background-image: linear-gradient(90deg,#002a86,#0070f2);
      color: #1a65bc;
    }
    .introduce_des {
      font-size: 22px;
      padding-top: 5px;
      line-height: 30px;
      color: #3c3c3c;
    }
    .introduce_button {
      margin-top: 32px;
    }
    .introduce_img {
      // background-image: url("@/assets/medical.jpg");
      // width: 100%;
      // height: 800px;
      width: 100%;
    }
  }
}
.example {
  background-image: url("@/assets/china.png");
  background-size: 100% 94%;
  background-repeat: no-repeat;
  padding: 100px 0;
  .example_content {
    padding: 0 90px;
    font-size: 45px;
    font-weight: bolder;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .example_button {
    margin: 150px 0 100px;
  }
  .wrapper {
    display: flex;
    width: 100%;
    overflow: hidden;
    .wapper_content {
      animation: scroll 36s linear infinite;
      display: flex;
      .logo_oneItem {
        width: 450px;
        text-align: center;
        cursor: pointer;
      }
    }
    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-100%);
      }
    }
  }
}
.news {
  padding: 84px 0px 20px;
  .top_card {
    padding: 0 90px;
    .title_tiny {
      font-size: 18px;
      padding-left: 20px;
      position: relative;
      margin-bottom: 52px;
      &:before {
        content: "";
        position: absolute;
        height: 38px;
        width: 4px;
        background: #000;
        left: 0px;
        top: -8px;
      }
    }
    .all_example {
      padding: 0 32px;
      margin-bottom: 25px;
      box-shadow: 0 0 20px 5px #0000001a;
      .example_control {
        position: relative;
      }
      .center_box {
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
      }
      .client_img {
        // height: 280px;
        width: 100%;
      }
      .right_content {
        margin-bottom: 20px;
      }
      .right_content_title {
        color: #1a65bc;
        font-size: 24px;
        margin-bottom: 20px;
      }
      .right_content_des {
        margin-bottom: 30px;
        font-size: 18px;
        font-weight: lighter;
      }
    }
  }
  .upper_card {
    padding: 0 65px;
    .news_card {
      margin: 25px;
      box-shadow: 0 0 20px 5px #0000001a;
      .brain_icon {
        width: 100%;
        // height: 150px;
        // height: 100px;
        // object-fit: fill; // 填充，撑满
        clip: rect(0px, 0px, 120px, 0px);
      }
      .new_banner {
        background-image: url("@/assets/brain.jpg");
        height: 300px;
        background-size: cover;
      }
      .news_text {
        padding: 32px;
        .type {
          margin-bottom: 18px;
        }
        .news_title {
          font-size: 22px;
          margin-bottom: 18px;
        }
        .news_des {
          font-size: 18px;
          line-height: 25px;
          margin-bottom: 24px;
        }
      }
    }
  }
}
</style>
