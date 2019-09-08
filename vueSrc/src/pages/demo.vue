<template>
  <div id="main" class="container">
    <div class="test">
      <div class="container"></div>
    </div>

    <div class="header">
      <svg-icon icon-class="logo" class="logoIcon"></svg-icon>
      <div class="Pc selectBar">
        <div class="option">
          <a href>首頁</a>
        </div>
        <div class="option">
          <a href="https://www.104.com.tw/company/1a2x6bkqow">招募</a>
        </div>
        <div class="option">
          <a href="#secondIntroAnchor">產品</a>
        </div>
        <div class="option">
          <a href="#thirdIntroAnchor">服務</a>
        </div>
        <div class="option">
          <a href="#contactAnchor">聯繫</a>
        </div>
      </div>
      <div class="Mobile selectBar" @click="canShowMobileNavBar=!canShowMobileNavBar">
        <div class="selectBarBtn">
          <svg-icon icon-class="threeLine" class="threeLineIcon"></svg-icon>
        </div>
      </div>
      <transition name="fade">
        <div class="Mobile mobileNavBar" v-if="canShowMobileNavBar">
          <a href="#">
            <div class="option">首頁</div>
          </a>
          <a href="https://www.104.com.tw/company/1a2x6bkqow">
            <div class="option">招募</div>
          </a>
          <a href="#secondIntroAnchor">
            <div class="option">產品</div>
          </a>

          <a href="#thirdIntroAnchor">
            <div class="option">服務</div>
          </a>

          <a href="#contactAnchor">
            <div class="option">聯繫</div>
          </a>
        </div>
      </transition>
    </div>

    <div class="introduct">
      <div class="banner animated flip">
        USERS
        <div class="title1 animated fadeInLeft">全球APP產品代營運最佳選擇</div>
        <div class="title2 animated fadeInRight">協助您完成APP內容優化、營運方案的規劃與執行並找到最優質的用戶</div>
      </div>
      <div
        class="slogan animated flash"
      >產品經營恆古不變的挑戰就是極大化漏斗模型的成效，WiseWorks 的夥伴是一群在產品運營領域深耕多年的專家，涵蓋遊戲，社群，內容與技術等多方面領域，我們幫助您的產品在茫茫流量中找到精準 TA，並且透過一系列的產品規劃建立用戶黏著度，讓您的 TA 對您的產品愛不釋手，最終幫助您獲取最大的產品利潤</div>
    </div>

    <div class="secondBG">
      <div class="secondIntro">
        <div class="AnchorBlock">
          <div id="secondIntroAnchor"></div>
        </div>
        <div class="header wow lightSpeedIn">專業的諮詢與服務</div>
        <div class="bottomInfo">
          <div class="topBlock wow fadeInLeft">
            讓專業的人給你最專業的服務
            <br />
          </div>
          <div class="bottomBlock wow fadeInRight">
            為了跟進時代的潮流，當你打算將傳統企業轉型成電子商務服務時是否有感受到流量導入的困難與昂貴?
            <br />
            <br />你只是需要的是一個熟悉市場及產品推廣的專業建議與團隊，來為你越過這個坡道以邁向成功。
          </div>
        </div>

        <div class="IntroBlockList clearf">
          <div class="IntroBlockCentre">
            <div class="IntroBlock clearf" v-for="(it,index) in secondIntroData" :key="index">
              <img :src="it.logo" class="iconImage wow fadeInDown" />
              <div class="title wow fadeInDown">{{it.title}}</div>
              <div class="split wow fadeInDown"></div>
              <div class="top wow fadeInLeft">{{it.introductTop}}</div>
              <div class="bottom wow fadeInRight">{{it.introductBottom}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="thirdBG">
      <div class="thirdIntro">
        <div class="AnchorBlock">
          <div id="thirdIntroAnchor"></div>
        </div>
        <div class="header wow flipInX">我們的服務</div>
        <div class="bottomInfo">
          <div class="topBlock wow flipInX">創新的電子商務合作運模式</div>
          <div class="bottomBlock wow fadeInLeft">設計+定位+品牌+營運 一條龍服務</div>
        </div>

        <div class="IntroBlockList clearf wow flipInX" style="width:fit-content;max-width:1222px;">
          <div
            class="IntroBlock clearf wow fadeInDown"
            v-for="(it,index) in thirdIntroData"
            :key="index"
          >
            <img :src="it.logo" class="iconImage" />
            <div class="cardBody">
              <div class="title wow fadeInRight">{{it.title}}</div>
              <div class="cardBodyContent wow fadeInLeft" v-html="it.introduct"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer">
      <div class="AnchorBlock">
        <div id="contactAnchor"></div>
        <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1519.6978141923596!2d121.54119769875753!3d25.05202365713825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abde3fedea27%3A0x8f885ef9a36cb23b!2zMTA0OTHlj7DljJfluILkuK3lsbHljYDljZfkuqzmnbHot6_kuInmrrUxNjjomZ8!5e0!3m2!1szh-TW!2stw!4v1563863593970!5m2!1szh-TW!2stw" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> -->
      </div>
      <div class="footerBlocks clearf">
        <!-- <div class="footerBlock" v-for="(it,index) in 1" :key="it">{{footerData[index]}}</div> -->
        <div class="bottomData">
          <div class="comTitle wow fadeInRight">{{footerData}}</div>
          <div class="comInfo wow fadeInRight">{{footerData2}}</div>
          <!-- <div class="wow fadeInLeft">{{footerData2}}</div> -->
          <div class="comInfo wow fadeInRight">{{footerData3}}</div>
        </div>
      </div>
      <!-- <div class="copyRight">© 2019 帷幄實業有限公司版權所有</div> -->
      <div class="copyRightEng">© 2019 Copyright ©Wiseworks Co.,Ltd</div>
    </div>
  </div>
</template>

<script>
import { WOW } from "wowjs";
import ezSnow from '@/lib/ezSnow.js';
export default {
  data() {
    return {
      secondIntroData: [
        {
          logo: "assets/image/01-1.png",
          title: "可靠與專業",
          introductTop: "成功不能墨守成規",
          introductBottom: "能對應狀況並靈活轉換操作手段"
        },
        {
          logo: "assets/image/01-2.png",
          title: "網路化思維",
          introductTop: "追求點擊轉化極大率",
          introductBottom: "全面性的線上曝光與線下導流"
        },
        {
          logo: "assets/image/01-3.png",
          title: "挑戰極限的精神",
          introductTop: "除了好，還要更好",
          introductBottom: "超越今天的成就是明天的目標"
        },
        {
          logo: "assets/image/01-4.png",
          title: "大數據分析",
          introductTop: "精準的分析打入用戶",
          introductBottom: "有效提昇自然流量與營運效益"
        }
      ],
      thirdIntroData: [
        {
          logo: "assets/image/02-Y.png",
          title: "品牌形象經營：",
          introduct: "提升品牌能見度<br>增加粉絲信賴感<br>建立品牌專業形象"
        },
        {
          logo: "assets/image/02-R.png",
          title: "精準導流、導購：",
          introduct:
            "定期數據分析、成效追蹤。<br>瞄準受眾輪廓與痛點設計<br>內容導流至銷售管道"
        },
        {
          logo: "assets/image/02-B.png",
          title: "社群互動：",
          introduct:
            "增加粉絲黏著度與造訪意願<br>大量提升觸及曝光產出優質內容，促進點擊與分享"
        }
      ],
      footerData: "帷幄實業有限公司",
      footerData2: "臺北市中山區南京東路3段168號14樓",
      footerData3: "service@wisework.io",
      canShowMobileNavBar: false,
      ezSnow:null,
      resizeTimer:null,
      degs:new Array(50).fill(0)
    };
  },
  created() {},
  mounted() {
    new WOW().init();

    this.ezSnow=new ezSnow(".secondIntro","snow",34.5,23)
    // .setCustomEvent((snow,index)=>{
    //   snow.style.transform=
    //     `rotate(${this.degs[index] > 360 ? this.degs[index]%=360 : this.degs[index]+=2}deg)`;
    // })
    // .setPhysics(true,[5,1],[3,3])
    // .setPhysics(false,2,3)
    // .setDirection(true)
    // .setFadeFactor(0.05)
    // .setResetMode("Random")
    // .setSnowSum(50)
    // .setFullMode(true)
    .setAutoScale(true,2,0.5)
    .init();

    // setTimeout(()=>{
    //   this.ezSnow.destroy()
    //   this.ezSnow
    //   .setSnowSum(40)
    //   .setAutoScale(false)
    //   .init();
    // },4000);

    window.onresize=()=>{
      clearTimeout(this.resizeTimer);
      this.resizeTimer=setTimeout(()=>{
        this.ezSnow.reInit();
      },250);
    }
  },
  destroyed(){
    window.onresize=null;
  }
};
</script>

<style lang="scss">
.snow{
  background:url("../../assets/image/taiwan.png");
}

//vue fade動畫
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
//當螢幕寬度小於這個時 開始RWD手機樣式
$RWD_Width: "768px";
$RWDSE_Width: "320px";
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
#main {
  .header {
    padding: 20px 20px;
    .logoIcon {
      width: 150px !important;
      height: 40px !important;
    }
    // 當螢幕寬度小於768時切換Mobile版面
    .Pc {
      display: block;
    }
    .Mobile {
      display: none;
    }
    @media screen and (max-width: $RWD_Width) {
      .Pc {
        display: none;
      }
      .Mobile {
        display: block;
      }
    }
    .Pc.selectBar {
      float: right;
      .option {
        display: inline-block;
        padding: 0.5rem 1rem;
        font-size: 22px;
        font-weight: bold;
        a {
          color: white;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
          text-decoration-color: #ffff37;
        }
      }
    }
    .Mobile.selectBar {
      opacity: 0.8;
      width: 60px;
      float: right;
      position: fixed;
      right: 11px;
      top: 20px;
      .selectBarBtn {
        z-index: 1;
        background-color: white;
        border: 1px gray solid;
        padding: 0.25rem 0.75rem;
        text-align: center;
        cursor: pointer;
        .threeLineIcon {
          width: 30px !important;
          height: 30px !important;
        }
      }
    }
    .mobileNavBar {
      z-index: 1;
      position: fixed;
      top: 70px;
      right: 10px;
      padding: 20px;
      width: 30%;
      background-color: white;
      a {
        display: block;
        color: #666;
        text-decoration: none;
        display: block;
        height: 38px;
        line-height: 38px;
      }
      a:first-child {
        border: 2px solid orange;
        border-top: 0px;
        border-left: 0px;
        border-right: 0px;
      }
      a:last-child {
        margin-bottom: 0px;
      }
      a:hover {
        border: 2px solid orange;
        border-top: 0px;
        border-left: 0px;
        border-right: 0px;
      }
    }
  }
  .introduct {
    margin-top: 250px;
    margin-left: 50px;
    @media screen and (max-width: $RWD_Width) {
      margin: 0 auto;
      margin-top: 100px;
      padding: 30px;
    }
    @media screen and (max-width: $RWDSE_Width) {
      margin-top: 50px;
    }
    .banner {
      @media screen and (max-width: $RWD_Width) {
        width: auto;
        margin-top: 20px;
        font-size: 80px;
        z-index: -10;
      }
      position: relative;
      color: #ffecec;
      opacity: 0.6;
      width: 800px;
      font-size: 120px;
      line-height: 120px;
      font-weight: bolder;
      .title1 {
        @media screen and (max-width: $RWD_Width) {
          font-size: 20px;
          line-height: 22px;
          top: 70px;
        }
        position: absolute;
        color: #b81c23;
        font-size: 36px;
        left: 0;
        top: 30px;
        font-weight: 700;
      }
      .title2 {
        @media screen and (max-width: $RWD_Width) {
          font-size: 12px;
          line-height: 18px;
          margin-top: 10px;
          top: 95px;
        }
        position: absolute;
        color: #b81c23;
        font-size: 24px;
        left: 0;
        top: 80px;
      }
    }
    .slogan {
      @media screen and (max-width: $RWD_Width) {
        width: 100%;
        font-size: 14px;
        margin-top: 24px;
        z-index: -10;
      }
      width: 580px;
      margin-top: 80px;

      font-size: 20px;
      line-height: 28px;
    }
  }

  .secondBG {
    background: url(../../assets/image/back.png) no-repeat;
    .secondIntro {
      @media screen and (max-width: $RWD_Width) {
        max-width: 80%;
      }
      max-width: 60%;
      margin: 0 auto;
      .AnchorBlock {
        width: 100%;
        #secondIntroAnchor {
          width: 50px;
          height: 5px;
          background-color: #ffcd39;
          margin: 0 auto;
          margin-top: 50px;
        }
      }
      .header {
        @media screen and (max-width: $RWD_Width) {
          font-size: 26px;
        }
        font-size: 40px;
        line-height: 100px;
        text-align: center;
        padding: 0px 20px;
        font-weight: 600;
      }
      .bottomInfo {
        .topBlock,
        .bottomBlock {
          text-align: center;
        }
        .topBlock {
          @media screen and (max-width: $RWD_Width) {
            font-size: 18px;
          }
          font-weight: 800;
          font-size: 24px;
        }
        .bottomBlock {
          @media screen and (max-width: $RWD_Width) {
            font-size: 16px;
            margin-top: 10px;
          }
          margin-top: 5px;
          font-size: 20px;
          font-weight: 600;
        }
      }
      .contentWidth {
        width: fit-content;
      }
      .IntroBlockList {
        margin-top: 60px;

        .IntroBlock {
          @media screen and (max-width: $RWD_Width) {
            width: 50%;
          }
          text-align: center;
          float: left;
          width: 50%;
          margin-top: 20px;
          .iconImage {
            width: 104px;
            height: 90px;
          }
          .title {
            @media screen and (max-width: $RWDSE_Width) {
              font-size: 18px;
            }
            font-size: 20px;
            margin: 20px 0px;
            font-weight: bold;
          }
          .split {
            width: 50px;
            height: 2px;
            margin: 0 auto;
            background: #d1ddfc;
            margin-bottom: 20px;
          }
          .top,
          .bottom {
            font-weight: bold;
            font-size: 16px;
            word-wrap: break-word;
          }
          .top {
            @media screen and (max-width: $RWDSE_Width) {
              font-size: 8px;
            }
            margin-bottom: 10px;
            font-weight: bold;
          }
          .bottom {
            @media screen and (max-width: $RWDSE_Width) {
              font-size: 8px;
            }
            font-weight: bold;
          }
        }
      }
    }
  }

  .thirdBG {
    .thirdIntro {
      max-width: 80%;
      margin: 0 auto;
      margin-top: 10px;
      .AnchorBlock {
        width: 100%;
        #thirdIntroAnchor {
          width: 50px;
          height: 5px;
          background-color: #ffcd39;
          margin: 0 auto;
          margin-top: 50px;
        }
      }
      .header {
        @media screen and (max-width: $RWD_Width) {
          font-size: 30px;
        }
        font-size: 40px;
        line-height: 100px;
        text-align: center;
        padding: 0px 20px;
        font-weight: 600;
      }
      .bottomInfo {
        .topBlock,
        .bottomBlock {
          text-align: center;
        }
        .topBlock {
          @media screen and (max-width: $RWD_Width) {
            font-size: 20px;
          }
          font-weight: 800;
          font-size: 24px;
        }
        .bottomBlock {
          @media screen and (max-width: $RWD_Width) {
            font-size: 16px;
          }
          margin-top: 5px;
          font-size: 20px;
          font-weight: 600;
        }
      }
      .IntroBlockList {
        @media screen and (max-width: $RWD_Width) {
          text-align: center;
          width: 80%;
        }
        margin-top: 20px;
        margin: 20px auto;
        .IntroBlock {
          @media screen and (max-width: $RWD_Width) {
            max-width: 100%;
            width: 100%;
            margin: 0px;
          }
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
          padding: 15px;
          max-width: 32%;
          float: left;
          margin-right: 10px;
          .iconImage {
            width: 100%;
            height: 100%;
            max-height: 250px;
          }
          .cardBody {
            @media screen and (max-width: $RWDSE_Width) {
              padding: 20px 0px;
              height: 134px;
            }
            padding: 20px;
            height: 186px;
            .title {
              @media screen and (max-width: 800px) {
                font-size: 0.95rem;
              }
              font-size: 1.25rem;
              font-weight: 700;
            }
            .cardBodyContent {
              @media screen and (max-width: $RWDSE_Width) {
                font-size: 14px;
              }
              font-size: 1rem;
              margin-top: 10px;
              margin-bottom: 40px;
            }
          }
        }
        .IntroBlock:last-child {
          margin-right: 0px;
        }
      }
    }
  }
  .bottomData {
    text-align: center;
    font-size: 14px;
    color: white;
    font-weight: bolder;
    margin-top: 39px;
    padding-bottom: 10px;
  }
  .comTitle {
    @media screen and (max-width: $RWD_Width) {
      font-size: 24px;
      margin-bottom: 23px;
    }
    font-size: 34px;
    margin-bottom: 23px;
  }
  .comInfo {
    @media screen and (max-width: $RWD_Width) {
      font-size: 13px;
      margin-top: 5px;
    }
    font-size: 15px;
    margin-top: 5px;
  }
  .footer {
    @media screen and (max-width: $RWD_Width) {
      background: #d8888c;
      width: 80%;
      margin: 0 auto;
      height: auto;
    }

    background: url(../../assets/image/blue.png) no-repeat;
    height: 211px;
    .AnchorBlock {
      width: 100%;
      #contactAnchor {
        width: 50px;
        height: 5px;
        background-color: #ffcd39;
        margin: 0 auto;
        margin-top: 50px;
      }
    }
    .footerBlocks {
      @media screen and (max-width: $RWD_Width) {
      }
      @media screen and (max-width: $RWDSE_Width) {
        font-size: 15px;
        padding-top: 10px;
      }

      max-width: 80%;
      margin: 0 auto;
      .footerBlock {
        @media screen and (max-width: $RWD_Width) {
          width: 100%;
          margin-top: 30px;
        }
        @media screen and (max-width: $RWDSE_Width) {
          padding: 25px 6px 45px 71px;
        }
        background: white url(../../assets/image/0424-1.png) left bottom
          no-repeat;
        height: 188px;
        padding: 40px 10px 40px 130px;
        width: 31%;
        float: left;
        margin-right: 10px;
        word-wrap: break-word;
      }
      .footerBlock_2 {
        @media screen and (max-width: $RWD_Width) {
          width: 100%;
          margin-top: 30px;
        }
        @media screen and (max-width: $RWDSE_Width) {
          padding: 36px 6px 45px 87px;
        }
        background: white url(../../assets/image/0424-2.png) left bottom
          no-repeat;
        height: 188px;
        padding: 40px 10px 40px 130px;
        width: 31%;
        float: left;
        margin-right: 10px;
        word-wrap: break-word;
      }
      .footerBlock_3 {
        @media screen and (max-width: $RWD_Width) {
          width: 100%;
          margin-top: 30px;
        }
        @media screen and (max-width: $RWDSE_Width) {
          padding: 31px 10px 45px 104px;
        }
        background: white url(../../assets/image/0424-3.png) left bottom
          no-repeat;
        height: 188px;
        padding: 40px 10px 40px 130px;
        width: 31%;
        float: left;
        margin-right: 10px;
        word-wrap: break-word;
      }
    }
    .copyRightEng {
      @media screen and (max-width: $RWDSE_Width) {
        font-size: 14px;
      }
      text-align: center;
      font-size: 14px;
      color: white;
      font-weight: bolder;
      padding-bottom: 10px;
      margin-top: 30px;
    }
  }
}
</style>