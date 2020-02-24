<template>
  <div id="app">
   <router-view></router-view>
   <Footer v-show="$route.meta.isShowFooter"/>
  </div>
</template>

<script>
import Footer from './components/Footer/footer'
export default {
  name: 'app',
   components: {Footer},
}
</script >

<style lang="stylus" rel="stylesheet/stylus">
</style>
