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
    <div class="content">
      <div class="logo">
        <img src="//yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt="" class="img">
      </div>
      <div class="userBox">
        <div class="userBoxContent">
          <div class="mailNumber">
            <input type="text" placeholder="邮箱账号">
          </div>
          <div class="pwd">
            <input type="password" placeholder="密码">
          </div>
          <div class="question">
            <a href="https://zc.reg.163.com/m/regInitialized?pd=yanxuan&pkid=QyOtTGv&pkht=you.163.com&tp=2&as=3&curl=http%3A%2F%2Fm.you.163.com%2Fucenter">注册账号</a>
            <a href="https://reg.163.com/resetpwd/index.do">忘记密码</a>
          </div>
          <div class="loginBox">
            <div class="login">登录</div>
          </div>
        </div>
      </div>
      <div class="otherWay">
        <span>其他方式登录</span>
        <i class="iconfont iconxuanxiangqiayoujiantou"></i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
     methods: {
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
  @import "../../common/stylus/mixins.styl"
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
    width 100%
    height 100%
    box-sizing border-box
    .logo
      width 100%
      height 90px
      margin-top 156px
      text-align center
      .img
        display inline-block
        width 268px
        height 90px
    .userBox
      margin 20px 20px 0
      width 710px
      height 578px
      .userBoxContent
        width 100%
        padding-top 114px
        .mailNumber
          width 100%
          height 90px
          bottom-border-1px(#ddd)
          input 
            width 710px
            height 50px
            margin 40px 0
            font-size 28px
            border none 
            outline none
        .pwd
          width 100%
          height 80px
          bottom-border-1px(#ddd)
          input 
            width 710px
            height 50px
            margin 20px 0
            font-size 28px
            border none 
            outline none
        .question
          width 100%
          height 40px
          font-size 28px
          display flex
          justify-content space-between
          margin-top 20px
          font-size 14px
          a
            font-size 28px
        .loginBox
          width 100%
          height 90px
          margin-top 20px
          .login
            width 100%
            height 90px
            color #ffffff
            background #dd1a21
            text-align center
            line-height 90px
            font-size 28px
            border-radius 8px
    .otherWay   
      font-size 28px
      color #333  
      text-align center 
      .iconfont
        margin-left 4px
        font-size 28px
        color #888    
</style>
