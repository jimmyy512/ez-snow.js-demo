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
     <pre class="hljs" style="display: block; overflow-x: auto; padding: 0.5em; background: rgb(51, 51, 51); color: rgb(255, 255, 255);">  import ezSnow from <span class="hljs-string" style="color: rgb(162, 252, 162);">'ez-snow.js'</span>;
  /**
  * 初始化
  * @constructor
  * @<span class="hljs-keyword" style="color: rgb(252, 194, 140);">param</span> {string} <span class="hljs-keyword" style="color: rgb(252, 194, 140);">appendDomName</span> - 下雪要插入的DOM.
  * @<span class="hljs-keyword" style="color: rgb(252, 194, 140);">param</span> {string} <span class="hljs-keyword" style="color: rgb(252, 194, 140);">srcPath</span> - 圖片路徑.
  * @<span class="hljs-keyword" style="color: rgb(252, 194, 140);">param</span> {number} <span class="hljs-keyword" style="color: rgb(252, 194, 140);">bgWidth</span> - 產生後的圖片寬度.
  * @<span class="hljs-keyword" style="color: rgb(252, 194, 140);">param</span> {number} <span class="hljs-keyword" style="color: rgb(252, 194, 140);">bgHeight</span> - 產生後的圖片高度.
  */
  new ezSnow(<span class="hljs-string" style="color: rgb(162, 252, 162);">"body"</span>,<span class="hljs-string" style="color: rgb(162, 252, 162);">"your image path"</span>,30,20).init();</pre>
      <h3>此頁面的body下雪效果,就是使用上述代碼!</h3>

      <h2 class="title">
        當螢幕大小發生變動時
      </h2>
      <pre class="hljs" style="display: block; overflow-x: auto; padding: 0.5em; background: rgb(51, 51, 51); color: rgb(255, 255, 255);">      var ez=<span class="hljs-keyword" style="color: rgb(252, 194, 140);">new</span> ezSnow(<span class="hljs-string" style="color: rgb(162, 252, 162);">"body"</span>,<span class="hljs-string" style="color: rgb(162, 252, 162);">"./assets/image/snow2.png"</span>,<span class="hljs-number" style="color: rgb(211, 99, 99);">30</span>,<span class="hljs-number" style="color: rgb(211, 99, 99);">20</span>)
      .init();
      var resizeTimer
      <span class="hljs-built_in" style="color: rgb(255, 255, 170);">window</span>.onresize=<span class="hljs-function"><span class="hljs-params">()</span>=&gt;</span>{
        clearTimeout(resizeTimer);
        resizeTimer=setTimeout(<span class="hljs-function"><span class="hljs-params">()</span>=&gt;</span>{
          ez.reInit();
        },<span class="hljs-number" style="color: rgb(211, 99, 99);">250</span>);
      }</pre>
      <h3>可以在視窗發生改變的事件中，呼叫reInit()函數，讓套件重新計算新的雪球位子。</h3>

      <h2 class="title">
        example 1 : 下大雪
      </h2>
       <el-button class="showExampleBtn" plain size="medium" @click="showBigSnow()">點我顯示效果</el-button>
      <div class="example1" v-if="isShowBigSnow">
      </div>
     <pre class="hljs" style="display: block; overflow-x: auto; padding: 0.5em; background: rgb(51, 51, 51); color: rgb(255, 255, 255);">  new ezSnow(<span class="hljs-string" style="color: rgb(162, 252, 162);">".example1"</span>,<span class="hljs-string" style="color: rgb(162, 252, 162);">"./assets/image/snow.png"</span>,<span class="hljs-number" style="color: rgb(211, 99, 99);">30</span>,<span class="hljs-number" style="color: rgb(211, 99, 99);">30</span>)
<span class="hljs-meta" style="color: rgb(252, 155, 155);">  .setFullMode</span>(true)
<span class="hljs-meta" style="color: rgb(252, 155, 155);">  .setSnowNum</span>(<span class="hljs-number" style="color: rgb(211, 99, 99);">70</span>)
<span class="hljs-meta" style="color: rgb(252, 155, 155);">  .init</span>()<span class="hljs-comment" style="color: rgb(136, 136, 136);">;</span></pre>

      <h2 class="title">
        example 2 : 跳舞松鼠
      </h2>
      <el-button class="showExampleBtn" plain size="medium" @click="showCute()">點我顯示效果</el-button>
      <div class="example2" v-if="isShowCute">
      </div>
     <pre class="hljs" style="display: block; overflow-x: auto; padding: 0.5em; background: rgb(51, 51, 51); color: rgb(255, 255, 255);">  new ezSnow(<span class="hljs-string" style="color: rgb(162, 252, 162);">".example2"</span>,<span class="hljs-string" style="color: rgb(162, 252, 162);">"./assets/image/cute.gif"</span>,<span class="hljs-number" style="color: rgb(211, 99, 99);">41</span>,<span class="hljs-number" style="color: rgb(211, 99, 99);">48</span>)
<span class="hljs-meta" style="color: rgb(252, 155, 155);">  .setFullMode</span>(true)
<span class="hljs-meta" style="color: rgb(252, 155, 155);">  .setSnowNum</span>(<span class="hljs-number" style="color: rgb(211, 99, 99);">5</span>)
<span class="hljs-meta" style="color: rgb(252, 155, 155);">  .setAutoDirection</span>(false,false)
<span class="hljs-meta" style="color: rgb(252, 155, 155);">  .setRandomPhysics</span>(true,[<span class="hljs-number" style="color: rgb(211, 99, 99);">5</span>,<span class="hljs-number" style="color: rgb(211, 99, 99);">1</span>],[<span class="hljs-number" style="color: rgb(211, 99, 99);">2</span>,<span class="hljs-number" style="color: rgb(211, 99, 99);">0.5</span>])
<span class="hljs-meta" style="color: rgb(252, 155, 155);">  .setAutoScale</span>(true,<span class="hljs-number" style="color: rgb(211, 99, 99);">2</span>,<span class="hljs-number" style="color: rgb(211, 99, 99);">0.5</span>)
<span class="hljs-meta" style="color: rgb(252, 155, 155);">  .setFadeFactor</span>(<span class="hljs-number" style="color: rgb(211, 99, 99);">0.03</span>)
<span class="hljs-meta" style="color: rgb(252, 155, 155);">  .setFadeOutDistance</span>(<span class="hljs-number" style="color: rgb(211, 99, 99);">50</span>)
<span class="hljs-meta" style="color: rgb(252, 155, 155);">  .init</span>()<span class="hljs-comment" style="color: rgb(136, 136, 136);">;</span></pre>

      <h2 class="title">
        example 3 : 下大雨
      </h2>
      <el-button class="showExampleBtn" plain size="medium" @click="showRain()">點我顯示效果</el-button>
      <div class="example3" v-if="isShowRain">
      </div>
      <pre class="hljs" style="display: block; overflow-x: auto; padding: 0.5em; background: rgb(51, 51, 51); color: rgb(255, 255, 255);">  new ezSnow(<span class="hljs-string" style="color: rgb(162, 252, 162);">".example3"</span>,<span class="hljs-string" style="color: rgb(162, 252, 162);">"./assets/image/rain.png"</span>,<span class="hljs-number" style="color: rgb(211, 99, 99);">41</span>,<span class="hljs-number" style="color: rgb(211, 99, 99);">48</span>)
<span class="hljs-meta" style="color: rgb(252, 155, 155);">  .setFullMode</span>(true)
<span class="hljs-meta" style="color: rgb(252, 155, 155);">  .setSnowNum</span>(<span class="hljs-number" style="color: rgb(211, 99, 99);">70</span>)
<span class="hljs-meta" style="color: rgb(252, 155, 155);">  .setAutoDirection</span>(false,true)
<span class="hljs-meta" style="color: rgb(252, 155, 155);">  .setRandomPhysics</span>(true,[<span class="hljs-number" style="color: rgb(211, 99, 99);">3</span>,<span class="hljs-number" style="color: rgb(211, 99, 99);">2</span>],[<span class="hljs-number" style="color: rgb(211, 99, 99);">4</span>,<span class="hljs-number" style="color: rgb(211, 99, 99);">2</span>])
<span class="hljs-meta" style="color: rgb(252, 155, 155);">  .setAutoScale</span>(true,<span class="hljs-number" style="color: rgb(211, 99, 99);">5</span>,<span class="hljs-number" style="color: rgb(211, 99, 99);">2</span>)
<span class="hljs-meta" style="color: rgb(252, 155, 155);">  .setFadeFactor</span>(<span class="hljs-number" style="color: rgb(211, 99, 99);">0.05</span>)
<span class="hljs-meta" style="color: rgb(252, 155, 155);">  .setFadeOutDistance</span>(<span class="hljs-number" style="color: rgb(211, 99, 99);">50</span>)
<span class="hljs-meta" style="color: rgb(252, 155, 155);">  .init</span>()<span class="hljs-comment" style="color: rgb(136, 136, 136);">;</span></pre>

      <h2 class="title">
        example 4 : 旋轉星星
      </h2>
      <el-button class="showExampleBtn" plain size="medium" @click="showStar()">點我顯示效果</el-button>
      <div class="example4" v-if="isShowStar">
      </div>
      <pre class="hljs" style="display: block; overflow-x: auto; padding: 0.5em; background: rgb(51, 51, 51); color: rgb(255, 255, 255);">        <span class="hljs-built_in" style="color: rgb(255, 255, 170);">let</span> starDeg=<span class="hljs-built_in" style="color: rgb(255, 255, 170);">new</span> Array(<span class="hljs-number" style="color: rgb(211, 99, 99);">50</span>).fill(<span class="hljs-number" style="color: rgb(211, 99, 99);">0</span>);
        <span class="hljs-built_in" style="color: rgb(255, 255, 170);">new</span> ezSnow(<span class="hljs-string" style="color: rgb(162, 252, 162);">".example4"</span>,<span class="hljs-string" style="color: rgb(162, 252, 162);">"./assets/image/star.png"</span>,<span class="hljs-number" style="color: rgb(211, 99, 99);">30</span>,<span class="hljs-number" style="color: rgb(211, 99, 99);">30</span>)
        .setFullMode(<span class="hljs-literal" style="color: rgb(252, 194, 140);">true</span>)
        .setSnowNum(starDeg.<span class="hljs-built_in" style="color: rgb(255, 255, 170);">length</span>)
        .setAutoDirection(<span class="hljs-literal" style="color: rgb(252, 194, 140);">false</span>,<span class="hljs-literal" style="color: rgb(252, 194, 140);">false</span>)
        .setRandomPhysics(<span class="hljs-literal" style="color: rgb(252, 194, 140);">false</span>,<span class="hljs-number" style="color: rgb(211, 99, 99);">0</span>,<span class="hljs-number" style="color: rgb(211, 99, 99);">4</span>)
        .setAutoScale(<span class="hljs-literal" style="color: rgb(252, 194, 140);">true</span>,<span class="hljs-number" style="color: rgb(211, 99, 99);">2</span>,<span class="hljs-number" style="color: rgb(211, 99, 99);">0.5</span>)
        .setFadeFactor(<span class="hljs-number" style="color: rgb(211, 99, 99);">0.05</span>)
        .setFadeOutDistance(<span class="hljs-number" style="color: rgb(211, 99, 99);">100</span>)
        .setCustomEvent((it,index)=&gt;{
          it.<span class="hljs-built_in" style="color: rgb(255, 255, 170);">style</span>.<span class="hljs-built_in" style="color: rgb(255, 255, 170);">transform</span>=
            `rotate(${starDeg[index] &gt; <span class="hljs-number" style="color: rgb(211, 99, 99);">360</span> ? starDeg[index]<span class="hljs-symbol" style="color: rgb(211, 99, 99);">%</span>=<span class="hljs-number" style="color: rgb(211, 99, 99);">360</span> : starDeg[index]+=<span class="hljs-number" style="color: rgb(211, 99, 99);">2</span>}deg)`;
        })
        .init();</pre>

      <h2 class="title">
        問題1:
      </h2>
      <h3>如果再vue-cli 2.x 打包時會出現 ERROR<br> in assets/js/vendor.de21e3800f4b42989ca9.js from UglifyJs
        Unexpected token: name (ezSnow)
      </h3>
      <h2 class="title">
        解法:
      </h2>
      <h3>
        打開webpack.base.conf 並在  module: { rules: [] }<br>
        rules裡添加
      </h3>
      <pre class="hljs" style="display: block; overflow-x: auto; padding: 0.5em; background: rgb(51, 51, 51); color: rgb(255, 255, 255);">      {
        <span class="hljs-attribute" style="color: rgb(255, 255, 170);">test</span>: /\.js$/,
        loader: <span class="hljs-string" style="color: rgb(162, 252, 162);">'babel-loader'</span>,
        include: [<span class="hljs-built_in" style="color: rgb(255, 255, 170);">resolve</span>(<span class="hljs-string" style="color: rgb(162, 252, 162);">'node_modules/ez-snow.js'</span>)]
      },</pre>

      <h2 class="title">
        API:
      </h2>
      <pre class="hljs" style="display: block; overflow-x: auto; padding: 0.5em; background: rgb(51, 51, 51); color: rgb(255, 255, 255);">/**
    * 初始化
    * <span class="hljs-meta" style="color: rgb(252, 155, 155);">@constructor</span>
    * <span class="hljs-meta" style="color: rgb(252, 155, 155);">@param</span> {string} appendDomName 
    * 下雪要插入的DOM.
    * <span class="hljs-meta" style="color: rgb(252, 155, 155);">@param</span> {string} srcPath 
    * 圖片路徑.
    * <span class="hljs-meta" style="color: rgb(252, 155, 155);">@param</span> {number} bgWidth 
    * 產生後的圖片寬度.
    * <span class="hljs-meta" style="color: rgb(252, 155, 155);">@param</span> {number} bgHeight 
    * 產生後的圖片高度.
    */

    /** <span class="hljs-meta" style="color: rgb(252, 155, 155);">@function</span> destroy()
    * 自我銷毀、並移除所有圖片，在vue使用時，記得在destroyed鉤子中，呼叫此函數。
    * --
    */

    /** <span class="hljs-meta" style="color: rgb(252, 155, 155);">@function</span> reInit()
    * 會先自我銷毀一次，再重新初始化一次。
    * 可搭配視窗大小縮放事件
    this.resizeTimer=<span class="hljs-literal" style="color: rgb(252, 194, 140);">null</span>;
    window.onresize=()=&gt;{
      clearTimeout(this.resizeTimer);
      this.resizeTimer=setTimeout(()=&gt;{
        ez.reInit();
      },<span class="hljs-number" style="color: rgb(211, 99, 99);">250</span>);
    }
    */

    /** <span class="hljs-meta" style="color: rgb(252, 155, 155);">@function</span> setFullMode(isFullMode)
    * 設定出生位子是否全屏
    * --
    * <span class="hljs-meta" style="color: rgb(252, 155, 155);">@param</span> {boolean} isFullMode <span class="hljs-meta" style="color: rgb(252, 155, 155);">@default</span> <span class="hljs-literal" style="color: rgb(252, 194, 140);">false</span>
    *   <span class="hljs-literal" style="color: rgb(252, 194, 140);">true</span> : 全屏隨機出生 , <span class="hljs-literal" style="color: rgb(252, 194, 140);">false</span> : 最上邊出生.
    */

    /** <span class="hljs-meta" style="color: rgb(252, 155, 155);">@function</span> setSnowNum(snowSum)
    * 設定產生的圖片數量
    * --
    * <span class="hljs-meta" style="color: rgb(252, 155, 155);">@param</span> {number} snowSum <span class="hljs-meta" style="color: rgb(252, 155, 155);">@default</span> <span class="hljs-number" style="color: rgb(211, 99, 99);">10</span>
    * 可以填入你想要出現多少個圖片在畫面上
    */

    /** <span class="hljs-meta" style="color: rgb(252, 155, 155);">@function</span> setFadeFactor(fadeFactor)
    * fade漸層效果係數
    * --
    * <span class="hljs-meta" style="color: rgb(252, 155, 155);">@param</span> {number} fadeFactor <span class="hljs-meta" style="color: rgb(252, 155, 155);">@default</span> <span class="hljs-number" style="color: rgb(211, 99, 99);">0.05</span>
    * 數值越小漸層效果越久，反之越快
    */

    /** <span class="hljs-meta" style="color: rgb(252, 155, 155);">@function</span> setFadeFactor(distance)
    * 在圖片離最下方終點到一定距離時，開始出現漸出效果
    * --
    * <span class="hljs-meta" style="color: rgb(252, 155, 155);">@param</span> {number} distance <span class="hljs-meta" style="color: rgb(252, 155, 155);">@default</span> <span class="hljs-number" style="color: rgb(211, 99, 99);">50</span>
    * 單位為px像素，數值越小漸層效果越慢出現，反之越快出現。
    */

    /** <span class="hljs-meta" style="color: rgb(252, 155, 155);">@function</span> setAutoDirection(isRandDireciotn,directionWay)
    * 設定是否隨機轉向飄,如果關閉隨機轉向飄,請傳入飄的指定方向
    * --
    * <span class="hljs-meta" style="color: rgb(252, 155, 155);">@param</span> {boolean} isRandDireciotn <span class="hljs-meta" style="color: rgb(252, 155, 155);">@default</span> <span class="hljs-literal" style="color: rgb(252, 194, 140);">true</span>
    * 是否開啟隨機轉向飄,若為<span class="hljs-literal" style="color: rgb(252, 194, 140);">true</span>,<span class="hljs-meta" style="color: rgb(252, 155, 155);">@directionWay</span> 可以不用傳參數
    * 若為<span class="hljs-literal" style="color: rgb(252, 194, 140);">false</span>,<span class="hljs-meta" style="color: rgb(252, 155, 155);">@directionWay</span> 一定要傳參數,指定飄的方向
    * <span class="hljs-meta" style="color: rgb(252, 155, 155);">@param</span> {boolean} directionWay <span class="hljs-meta" style="color: rgb(252, 155, 155);">@default</span> <span class="hljs-literal" style="color: rgb(252, 194, 140);">true</span>
    * <span class="hljs-literal" style="color: rgb(252, 194, 140);">true</span> : 飄向左邊  , <span class="hljs-literal" style="color: rgb(252, 194, 140);">false</span> : 飄向右邊
    */

    /** <span class="hljs-meta" style="color: rgb(252, 155, 155);">@function</span> setAutoScale(RandScaleMode,ScaleMax,ScaleMin)
    * 設定是否隨機縮放大小
    * --
    * <span class="hljs-meta" style="color: rgb(252, 155, 155);">@param</span> {boolean} RandScaleMode <span class="hljs-meta" style="color: rgb(252, 155, 155);">@default</span> <span class="hljs-literal" style="color: rgb(252, 194, 140);">true</span>
    * 是否開啟隨機縮放大小
    * <span class="hljs-meta" style="color: rgb(252, 155, 155);">@param</span> {number} ScaleMax <span class="hljs-meta" style="color: rgb(252, 155, 155);">@default</span> <span class="hljs-number" style="color: rgb(211, 99, 99);">1.5</span>
    * 最大係數
    * <span class="hljs-meta" style="color: rgb(252, 155, 155);">@param</span> {number} ScaleMin <span class="hljs-meta" style="color: rgb(252, 155, 155);">@default</span> <span class="hljs-number" style="color: rgb(211, 99, 99);">0.5</span>
    * 最小係數
    */

    /** <span class="hljs-meta" style="color: rgb(252, 155, 155);">@function</span> setRandomPhysics(isPhyRandom,Vx,Vy)
    * 此函數為多態函數,主要控制是否隨機，左、右、落下係數。 
    * --
    * 如果
    * <span class="hljs-meta" style="color: rgb(252, 155, 155);">@param</span> {boolean} isPhyRandom <span class="hljs-meta" style="color: rgb(252, 155, 155);">@default</span> <span class="hljs-literal" style="color: rgb(252, 194, 140);">true</span>
    * 是否開啟隨機左、右、落下係數。
    * 若參數 <span class="hljs-meta" style="color: rgb(252, 155, 155);">@isPhyRandom</span> 為 <span class="hljs-meta" style="color: rgb(252, 155, 155);">@false</span> Vx、 Vy 參數將會變成 <span class="hljs-meta" style="color: rgb(252, 155, 155);">@array</span> 型別
      * <span class="hljs-meta" style="color: rgb(252, 155, 155);">@param</span> {<span class="hljs-keyword" style="color: rgb(252, 194, 140);">array</span>} Vx <span class="hljs-meta" style="color: rgb(252, 155, 155);">@default</span> [<span class="hljs-number" style="color: rgb(211, 99, 99);">0.4</span>,<span class="hljs-number" style="color: rgb(211, 99, 99);">0.1</span>]
      * Vx[<span class="hljs-number" style="color: rgb(211, 99, 99);">0</span>] : x係數隨機最大值
      * Vx[<span class="hljs-number" style="color: rgb(211, 99, 99);">1</span>] : x係數隨機最小值
      * <span class="hljs-meta" style="color: rgb(252, 155, 155);">@param</span> {<span class="hljs-keyword" style="color: rgb(252, 194, 140);">array</span>} Vy <span class="hljs-meta" style="color: rgb(252, 155, 155);">@default</span> [<span class="hljs-number" style="color: rgb(211, 99, 99);">0.4</span>,<span class="hljs-number" style="color: rgb(211, 99, 99);">0.2</span>]
      * Vy[<span class="hljs-number" style="color: rgb(211, 99, 99);">0</span>] : y係數隨機最大值
      * Vy[<span class="hljs-number" style="color: rgb(211, 99, 99);">1</span>] : y係數隨機最小值
    * 
    * 若參數 <span class="hljs-meta" style="color: rgb(252, 155, 155);">@isPhyRandom</span> 為 <span class="hljs-meta" style="color: rgb(252, 155, 155);">@true</span> Vx、 Vy 參數將會變成 <span class="hljs-meta" style="color: rgb(252, 155, 155);">@number</span> 型別
    * <span class="hljs-meta" style="color: rgb(252, 155, 155);">@param</span> {number} Vx <span class="hljs-meta" style="color: rgb(252, 155, 155);">@default</span> <span class="hljs-number" style="color: rgb(211, 99, 99);">0</span>
    * x係數值
    * <span class="hljs-meta" style="color: rgb(252, 155, 155);">@param</span> {number} Vx <span class="hljs-meta" style="color: rgb(252, 155, 155);">@default</span> <span class="hljs-number" style="color: rgb(211, 99, 99);">0.2</span>
    * y係數值
    */</pre>
    </div>

    <div class="footer">
      ez-snow.js 由 Majitoo 編寫
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
      star:null,
      resizeTimer:null,
      isShowCute:false,
      isShowBigSnow:false,
      isShowRain:false,
      isShowStar:false,
      starDeg:new Array(50).fill(0),
    };
  },
  created() {
 
  },
  destroyed() {
    if(this.ez!=null)
      this.ez.destroy();
    if(this.cute!=null)
      this.cute.destroy();
    if(this.rain!=null)
      this.rain.destroy();
    if(this.star!=null)
      this.star.destroy();
    clearTimeout(this.resizeTimer);
    window.onresize=null;
  },
  mounted() {
    this.ez=new ezSnow("body","./assets/image/snow2.png",30,20)
    .init();

    this.resizeTimer=null;
    window.onresize=()=>{
      clearTimeout(this.resizeTimer);
      this.resizeTimer=setTimeout(()=>{
        this.ez.reInit();
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
        this.bigSnow=new ezSnow(".example1","./assets/image/snow.png",30,30)
        .setFullMode(true)
        .setSnowNum(70)
        .init();
      })
    },
    showCute(){
      this.isShowCute=true;

      this.$nextTick(()=>{
        this.cute=new ezSnow(".example2","./assets/image/cute.gif",41,48)
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
        this.rain=new ezSnow(".example3","./assets/image/rain.png",41,48)
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
    showStar(){
      this.isShowStar=true;
      this.$nextTick(()=>{
        this.star=new ezSnow(".example4","./assets/image/star.png",30,30)
        .setFullMode(true)
        .setSnowNum(this.starDeg.length)
        .setAutoDirection(false,false)
        .setRandomPhysics(false,0,4)
        .setAutoScale(true,2,0.5)
        .setFadeFactor(0.05)
        .setFadeOutDistance(100)
        .setCustomEvent((it,index)=>{
          it.style.transform=
            `rotate(${this.starDeg[index] > 360 ? this.starDeg[index]%=360 : this.starDeg[index]+=2}deg)`;
        })
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
  .example3,
  .example4{
    width:100%;
    height:500px;
    background: rgb(40, 43, 46);
  }
  .showExampleBtn{
    margin:15px;
  }
}

.footer{
  background-color: #f1f1f1;
  color:gray;
  padding:20px;
  text-align:center;
}
</style>