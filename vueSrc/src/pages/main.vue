<template>
  <div id="main">
    <div class="header">
      <h2>ez-snow.js</h2>
      <h3>一個能快速製作下雪效果的套件</h3>
      <el-button plain @click="viewGitHubClick()">view on GitHub</el-button>
    </div>

    <div class="content container">
      <h2 class="title">
        特點
      </h2>
      <ol class="specialPoint">
        <li>能夠簡單快速使用下雪特效。</li>
        <li>提供已NPM的方式安裝套件。</li>
        <li>能夠自定義速度與方向。</li>
      </ol>

      <h2 class="title">
        安裝
      </h2>
      <pre class="hljs" style="display: block; overflow-x: auto; padding: 0.5em; background: rgb(68, 68, 68); color: rgb(221, 221, 221);">$ npm <span class="hljs-selector-tag" style="color: rgb(255, 255, 255); font-weight: 700;">i</span> ez-snow.js</pre>
      <h2 class="title">
        使用
      </h2>
      <pre class="hljs" style="display: block; overflow-x: auto; padding: 0.5em; background: rgb(40, 43, 46); color: rgb(224, 226, 228);">import ezSnow from <span class="hljs-string" style="color: rgb(236, 118, 0);">'ez-snow.js'</span>;
  /**
  * 初始化
  * @constructor
  * @<span class="hljs-keyword" style="color: rgb(147, 199, 99); font-weight: 700;">param</span> {string} <span class="hljs-keyword" style="color: rgb(147, 199, 99); font-weight: 700;">appendDomName</span> - 下雪要插入的DOM.
  * @<span class="hljs-keyword" style="color: rgb(147, 199, 99); font-weight: 700;">param</span> {string} <span class="hljs-keyword" style="color: rgb(147, 199, 99); font-weight: 700;">srcPath</span> - 圖片路徑.
  * @<span class="hljs-keyword" style="color: rgb(147, 199, 99); font-weight: 700;">param</span> {number} <span class="hljs-keyword" style="color: rgb(147, 199, 99); font-weight: 700;">bgWidth</span> - 產生後的圖片寬度.
  * @<span class="hljs-keyword" style="color: rgb(147, 199, 99); font-weight: 700;">param</span> {number} <span class="hljs-keyword" style="color: rgb(147, 199, 99); font-weight: 700;">bgHeight</span> - 產生後的圖片高度.
  */
  new ezSnow(<span class="hljs-string" style="color: rgb(236, 118, 0);">"body"</span>,<span class="hljs-string" style="color: rgb(236, 118, 0);">"your image path"</span>,30,20).init();</pre>
      <h3>此頁面的body下雪效果,就是使用上述代碼!</h3>

      <h2 class="title">
        當螢幕大小發生變動時
      </h2>
      <pre class="hljs" style="display: block; overflow-x: auto; padding: 0.5em; background: rgb(40, 43, 46); color: rgb(224, 226, 228);">    var ez=<span class="hljs-keyword" style="color: rgb(147, 199, 99); font-weight: 700;">new</span> ezSnow(<span class="hljs-string" style="color: rgb(236, 118, 0);">"body"</span>,<span class="hljs-string" style="color: rgb(236, 118, 0);">"../../assets/image/snow2.png"</span>,<span class="hljs-number" style="color: rgb(255, 205, 34);">30</span>,<span class="hljs-number" style="color: rgb(255, 205, 34);">20</span>)
      .init();

      var resizeTimer
      <span class="hljs-built_in" style="color: rgb(140, 187, 173);">window</span>.onresize=<span class="hljs-function"><span class="hljs-params">()</span>=&gt;</span>{
        clearTimeout(resizeTimer);
        resizeTimer=setTimeout(<span class="hljs-function"><span class="hljs-params">()</span>=&gt;</span>{
          ez.reInit();
        },<span class="hljs-number" style="color: rgb(255, 205, 34);">250</span>);
      }</pre>
      <h3>可以在視窗發生改變的事件中，呼叫reInit()函數，讓套件重新計算新的雪球位子。</h3>

      <h2 class="title">
        example 1 : 下大雪
      </h2>
       <el-button class="showExampleBtn" plain size="medium" @click="showBigSnow()">點我顯示效果</el-button>
      <div class="example1" v-if="isShowBigSnow">
      </div>
      <pre class="hljs" style="display: block; overflow-x: auto; background: rgb(25, 23, 28); color: rgb(139, 135, 146); padding: 0.5em;">        new ezSnow(<span class="hljs-string" style="color: rgb(42, 146, 146);">".example1"</span>,<span class="hljs-string" style="color: rgb(42, 146, 146);">"../../assets/image/snow.png"</span>,<span class="hljs-number" style="color: rgb(170, 87, 60);">30</span>,<span class="hljs-number" style="color: rgb(170, 87, 60);">30</span>)
      <span class="hljs-meta" style="color: rgb(170, 87, 60);">    .setFullMode</span>(true)
      <span class="hljs-meta" style="color: rgb(170, 87, 60);">    .setSnowNum</span>(<span class="hljs-number" style="color: rgb(170, 87, 60);">70</span>)
      <span class="hljs-meta" style="color: rgb(170, 87, 60);">    .setAutoDirection</span>(true)
      <span class="hljs-meta" style="color: rgb(170, 87, 60);">    .setRandomPhysics</span>(true,[<span class="hljs-number" style="color: rgb(170, 87, 60);">1</span>,<span class="hljs-number" style="color: rgb(170, 87, 60);">1</span>],[<span class="hljs-number" style="color: rgb(170, 87, 60);">4</span>,<span class="hljs-number" style="color: rgb(170, 87, 60);">2</span>])
      <span class="hljs-meta" style="color: rgb(170, 87, 60);">    .init</span>()<span class="hljs-comment" style="color: rgb(126, 120, 135);">;</span></pre>

      <h2 class="title">
        example 2 : 跳舞松鼠
      </h2>
      <el-button class="showExampleBtn" plain size="medium" @click="showCute()">點我顯示效果</el-button>
      <div class="example2" v-if="isShowCute">
      </div>
      <pre class="hljs" style="display: block; overflow-x: auto; background: rgb(25, 23, 28); color: rgb(139, 135, 146); padding: 0.5em;">        new ezSnow(<span class="hljs-string" style="color: rgb(42, 146, 146);">".example2"</span>,<span class="hljs-string" style="color: rgb(42, 146, 146);">"../../assets/image/cute.gif"</span>,<span class="hljs-number" style="color: rgb(170, 87, 60);">41</span>,<span class="hljs-number" style="color: rgb(170, 87, 60);">48</span>)
      <span class="hljs-meta" style="color: rgb(170, 87, 60);">    .setFullMode</span>(true)
      <span class="hljs-meta" style="color: rgb(170, 87, 60);">    .setSnowNum</span>(<span class="hljs-number" style="color: rgb(170, 87, 60);">5</span>)
      <span class="hljs-meta" style="color: rgb(170, 87, 60);">    .setAutoDirection</span>(false,false)
      <span class="hljs-meta" style="color: rgb(170, 87, 60);">    .setRandomPhysics</span>(true,[<span class="hljs-number" style="color: rgb(170, 87, 60);">5</span>,<span class="hljs-number" style="color: rgb(170, 87, 60);">1</span>],[<span class="hljs-number" style="color: rgb(170, 87, 60);">2</span>,<span class="hljs-number" style="color: rgb(170, 87, 60);">0.5</span>])
      <span class="hljs-meta" style="color: rgb(170, 87, 60);">    .setAutoScale</span>(true,<span class="hljs-number" style="color: rgb(170, 87, 60);">2</span>,<span class="hljs-number" style="color: rgb(170, 87, 60);">0.5</span>)
      <span class="hljs-meta" style="color: rgb(170, 87, 60);">    .setFadeFactor</span>(<span class="hljs-number" style="color: rgb(170, 87, 60);">0.03</span>)
      <span class="hljs-meta" style="color: rgb(170, 87, 60);">    .setFadeOutDistance</span>(<span class="hljs-number" style="color: rgb(170, 87, 60);">50</span>)
      <span class="hljs-meta" style="color: rgb(170, 87, 60);">    .init</span>()<span class="hljs-comment" style="color: rgb(126, 120, 135);">;</span></pre>

      <h2 class="title">
        example 3 : 下大雨
      </h2>
      <el-button class="showExampleBtn" plain size="medium" @click="showRain()">點我顯示效果</el-button>
      <div class="example3" v-if="isShowRain">
      </div>
    </div>

  </div>
</template>

<script>
import {WOW} from 'wowjs';
import ezSnow from 'ez-snow.js';
export default {
  data() {
    return {
      ez:null,
      cute:null,
      bigSnow:null,
      rain:null,
      resizeTimer:null,
      isShowCute:false,
      isShowBigSnow:false,
      isShowRain:false,
    };
  },
  created() {
 
  },
  destroyed() {
    if(this.ez!=null)
      this.ez.destroy();
    if(this.cute!=null)
      this.cute.destroy();
    clearTimeout(this.resizeTimer);
    window.onresize=null;
  },
  mounted() {
    this.ez=new ezSnow("body","../../assets/image/snow2.png",30,20)
    .init();

    this.resizeTimer=null;
    window.onresize=()=>{
      clearTimeout(this.resizeTimer);
      this.resizeTimer=setTimeout(()=>{
        ez.reInit();
      },250);
    }

    /**
    * 初始化
    * @constructor
    * @param {string} appendDomName 
    * 下雪要插入的DOM.
    * @param {string} srcPath 
    * 圖片路徑.
    * @param {number} bgWidth 
    * 產生後的圖片寬度.
    * @param {number} bgHeight 
    * 產生後的圖片高度.
    */

    /** @function destroy()
    * 自我銷毀、並移除所有圖片，在vue使用時，記得在destroyed鉤子中，呼叫此函數。
    * --
    */

    /** @function reInit()
    * 會先自我銷毀一次，再重新初始化一次。
    * 可搭配視窗大小縮放事件
    this.resizeTimer=null;
    window.onresize=()=>{
      clearTimeout(this.resizeTimer);
      this.resizeTimer=setTimeout(()=>{
        ez.reInit();
      },250);
    }
    */

    /** @function setFullMode(isFullMode)
    * 設定出生位子是否全屏
    * --
    * @param {boolean} isFullMode @default false
    *   true : 全屏隨機出生 , false : 最上邊出生.
    */

    /** @function setSnowNum(snowSum)
    * 設定產生的圖片數量
    * --
    * @param {number} snowSum @default 10
    * 可以填入你想要出現多少個圖片在畫面上
    */

    /** @function setFadeFactor(fadeFactor)
    * fade漸層效果係數
    * --
    * @param {number} fadeFactor @default 0.05
    * 數值越小漸層效果越久，反之越快
    */

    /** @function setFadeFactor(distance)
    * 在圖片離最下方終點到一定距離時，開始出現漸出效果
    * --
    * @param {number} distance @default 50
    * 單位為px像素，數值越小漸層效果越慢出現，反之越快出現。
    */

    /** @function setAutoDirection(isRandDireciotn,directionWay)
    * 設定是否隨機轉向飄,如果關閉隨機轉向飄,請傳入飄的指定方向
    * --
    * @param {boolean} isRandDireciotn @default true
    * 是否開啟隨機轉向飄,若為true,@directionWay 可以不用傳參數
    * 若為false,@directionWay 一定要傳參數,指定飄的方向
    * @param {boolean} directionWay @default true
    * true : 飄向左邊  , false : 飄向右邊
    */

    /** @function setAutoScale(RandScaleMode,ScaleMax,ScaleMin)
    * 設定是否隨機縮放大小
    * --
    * @param {boolean} RandScaleMode @default true
    * 是否開啟隨機縮放大小
    * @param {number} ScaleMax @default 1.5
    * 最大係數
    * @param {number} ScaleMin @default 0.5
    * 最小係數
    */

    /** @function setRandomPhysics(isPhyRandom,Vx,Vy)
    * 此函數為多態函數,主要控制是否隨機，左、右、落下係數。 
    * --
    * 如果
    * @param {boolean} isPhyRandom @default true
    * 是否開啟隨機左、右、落下係數。
    * 若參數 @isPhyRandom 為 @false Vx、 Vy 參數將會變成 @array 型別
      * @param {array} Vx @default [0.4,0.1]
      * Vx[0] : x係數隨機最大值
      * Vx[1] : x係數隨機最小值
      * @param {array} Vy @default [0.4,0.2]
      * Vy[0] : y係數隨機最大值
      * Vy[1] : y係數隨機最小值
    * 
    * 若參數 @isPhyRandom 為 @true Vx、 Vy 參數將會變成 @number 型別
    * @param {number} Vx @default 0
    * x係數值
    * @param {number} Vx @default 0.2
    * y係數值
    */
  },
  methods:{
    viewGitHubClick(){
      window.open('https://github.com/jimmyy512/ez-snow.js');
    },
    showBigSnow(){
      this.isShowBigSnow=true;

      this.$nextTick(()=>{
        this.bigSnow=new ezSnow(".example1","../../assets/image/snow.png",30,30)
        .setFullMode(true)
        .setSnowNum(70)
        .setAutoDirection(true)
        .setRandomPhysics(true,[1,1],[4,2])
        .init();
      })
    },
    showCute(){
      this.isShowCute=true;

      this.$nextTick(()=>{
        this.cute=new ezSnow(".example2","../../assets/image/cute.gif",41,48)
        .setFullMode(true)
        .setSnowNum(5)
        .setAutoDirection(false,false)
        .setRandomPhysics(true,[5,1],[2,0.5])
        .setAutoScale(true,2,0.5)
        .setFadeFactor(0.03)
        .setFadeOutDistance(150)
        .init();
      })
    },
    showRain(){
      this.isShowRain=true;

      this.$nextTick(()=>{
        new ezSnow(".example3","../../assets/image/rain.png",41,48)
        .setFullMode(true)
        .setSnowNum(70)
        .setAutoDirection(false,true)
        .setRandomPhysics(true,[3,2],[4,2])
        .setAutoScale(true,5,2)
        .setFadeFactor(0.05)
        .setFadeOutDistance(50)
        .init();
      })
    },
  }
};
</script>

<style lang="scss">
@import '../style/mixin.scss';

.hljs{
  text-align:left;
}
.header{
  text-align: center;
  padding:30px;
  color:whitesmoke;
  background: #3868ab;
  background-image: linear-gradient(120deg,#3868ab,#9a5b4d);
  h2{
    margin-top:0px;
    font-size:2rem;
  }
}

.content{
  color:#606c71;
  font-weight: 500;
  h3{
    margin:10px;
    padding-left:10px;
  }
  .title{
    color:#528aa0;
    margin-top:35px;
  }
  .specialPoint
  {
    li{
      padding:10px;
    }
  }
  .example1,
  .example2,
  .example3{
    width:100%;
    height:500px;
    background: rgb(40, 43, 46);
  }
  .showExampleBtn{
    margin:15px;
  }
}
</style>