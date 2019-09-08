<template>
  <div class="container">
    <div class="os-phrases" id="os-phrases">
      <h2 class="animated  fadeInLeft">魔獄寶藏大轉盤</h2>
      <h2>to hide</h2>
      <h2>in order to</h2>
      <h2>survive evil</h2>
      <h2>Thanatos</h2>
      <h2>This fall</h2>
      <h2>Prepare</h2>
      <h2>Refresh to replay</h2>
    </div>
    <div class="caselist">
      <ul class="clearfix">
        <div class="wow fadeInLeft" v-for="(item, index) in 200" :key="index">WWWWWW</div>
      </ul>
    </div>
  </div>
</template>

<script>
import { WOW } from "wowjs";
export default {
  data() {
    return {};
  },
  watch: {},

  mounted() {
    new WOW().init();
    // wow.init()

    //    setTimeout(()=>{
    //   $(document).ready(function() {
    // 		$("#os-phrases > h2").lettering('words').children("span").lettering().children("span").lettering();
    // 	})
    // },3000);
    class point {
      constructor(x = 10, y = 20) {
        this.x = x;
        this.y = y;
      }
    }

    let position = new point();

    console.log(position.x, position.y);
  }
};
</script>

<style lang="scss" scoped>
body {
  background: none !important;
}
h2 {
  color: black;
}
</style>