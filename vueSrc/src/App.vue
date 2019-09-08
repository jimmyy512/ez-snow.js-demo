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
</style>