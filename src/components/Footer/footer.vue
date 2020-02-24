<template>
  <div id="footer">
      <div :class="{active: $route.path === '/home'}" @click="goPath('/home')" class="item">
        <i class="iconfont icon-shouye"></i>
        <span>首页</span>
      </div>
      <div :class="{active: $route.path === '/sort'}" @click="goPath('/sort')" class="item">
        <i class="iconfont icon-fenlei"></i>
        <span>分类</span>
      </div>
      <div :class="{active: $route.path === '/shop'}" @click="goPath('/shop')" class="item">
        <i class="iconfont icon-tianjia-fangkuang"></i>
        <span>值得买</span>
      </div>
      <div :class="{active: $route.path === '/cart'}" @click="goPath('/cart')" class="item">
        <i class="iconfont icon-gouwuche"></i>
        <span>购物车</span>
      </div>
      <div :class="{active: $route.path === '/personal'}" @click="goPath('/personal')" class="item">
        <i class="iconfont icon-geren"></i>
        <span>个人</span>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
      methods:{
          goPath(path){
              path !== this.$route.path && this.$router.push(path)
          },
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    #footer
      z-index 6
      display flex
      position fixed 
      left 0
      bottom 0
      border-top 1px solid #d9d9d9
      width 100%
      height 98px
      box-sizing border-box
      background #fff
      .item
        width 20%
        height 98px
        text-align center
        display flex
        flex-direction column
        margin-top 10px
        &.active
          color red
        .iconfont
          font-size 36px
        span 
          font-size 24px
          line-height 40px
        
</style>
