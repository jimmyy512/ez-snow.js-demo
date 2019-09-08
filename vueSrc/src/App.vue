<template>
    <div id="APP">
      <template >
        <router-view v-if="!$route.meta.keepAlive"></router-view>
      </template>
    </div>
</template>

<script>
export default {
  data() {
    return {
    
    };
  },
  created() {}
}
   
</script>

<style lang="scss">
@import 'style/main.scss';
body{
  background: url(../assets/image/banner.png) no-repeat;
  background-size:contain;
}
</style>

<style lang="scss" scoped>
#APP{
  height:100%;
  // font-family: 'Noto Sans TC', sans-serif;
  font-family:Microsoft JhengHei;
  // background-position: center top;
}
</style>
