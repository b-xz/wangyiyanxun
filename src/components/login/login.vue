<template>
  <div>
    <header id="home">
      <div class="box">
        <div @click="goPath('/home')" class="b-left">
          <i class="iconfont icon-home"></i>
        </div>
        <div class="b-center">
          <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp" alt="">
        </div>
        <div class="b-row">
          <i @click="goSearch('/search')"  class="iconfont icon-sousuo"></i>
          <i class="iconfont icon-gouwuche"></i>
        </div>
      </div>
    </header>
    <!-- 中心导航 -->
    <div class="content">
        <div class="top">
          <div class="logo">
              <img src="//yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt="">
          </div>
          <div class="btn">
            <div class="iphone">
             <i class="iconfont icon-shouji"></i>
             <span>手机号快捷登录</span>
            </div>
            <div  @click="goToLogin" class="Email">
              <i class="iconfont icon-youxiang"></i>
              <span>邮箱帐号登录</span>
            </div>
          </div>
        </div>
        <div class="bottom">
           <div class="item">
             <i class="iconfont icon-icon4"></i>
             <span>微信</span>
           </div>
           <div class="item">
             <i class="iconfont icon-QQ"></i>
             <span>微信</span>
           </div>
           <div class="item">
             <i class="iconfont icon-weibo"></i>
             <span>微博</span>
           </div>
        </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods:{
          goToLogin(){
              this.$router.replace('/email')
          },
          goPath(path){
             this.$router.push(path)
          },
          goSearch(path){
             this.$router.push(path)
          },
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #home
    width 100%
    height 88px
    background #fff
    position relative
    &:after
      content ''
      position: absolute
      background-color #d9d9d9
      left 0
      width 100%
      height 1px
      transform-origin 50% 100% 0
      bottom 0
    .box
      position absolute
      top 16px
      display flex
      width 100%
      height 56px
      line-height 56px
      box-sizing border-box
      padding 0 16px
      font-size 28px
      .b-left
        width 46px
        height 100%
        .iconfont
          font-size 36px
      .b-center
        position absolute
        width 140px
        height 100%
        text-align center
        left 50%
        margin-left -70px
        img 
          width 100%
          height 100%
      .b-row
        position absolute
        right 0
        margin-right 20px 
        width 140px
        height 100%
        i 
          display inline-block
          margin-left 15px
        .iconfont
          font-size 48px
  .content
    position relative
    width 100%
    height 1264px
    background #F2F5F4
    .top
      width 100%
      height 750px
      .logo
        width 100%
        height 480px
        padding 160px 0 232px 0
        box-sizing border-box
        text-align center
        img 
          display inline-block
          width 280px
          height 100%
      .btn
        width 100%
        height 220px
        padding 0 20px
        box-sizing border-box
        margin-bottom 205px
        .iphone
          width 100%
          height 94px
          line-height 94px
          margin-bottom 32px
          font-size 36px
          color #fff
          background  #DD1A21
          text-align center
          .iconfont
            margin-right 16px 
            font-size 40px
        .Email
          width 100%
          height 94px
          line-height 94px
          font-size 36px
          border 1px solid #DD1A21
          color #DD1A21
          text-align center
          .iconfont
            margin-right 16px 
            font-size 40px
    .bottom
      width 100%
      height 40px
      display flex
      justify-content center
      color #7f7f7f
      box-sizing border-box
      position absolute
      bottom 80px
      font-size 28px
      line-height 36px
      .item
        color #7f7f7f
        display inline-block
        height 40px
        padding 0 40px
        font-size 28px
        border-right 1px solid #7f7f7f
        &:last-child
            border-right none
        i 
            font-size 28px
            margin-right 5px
</style>
