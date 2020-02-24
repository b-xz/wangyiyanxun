<template>
  <div id="cat">
    <header>
        <div class="banner">
            <div class="left">购物车</div>
            <div class="right">领券</div>
        </div> 
    </header>
    <div class="service">
        <ul>
            <li>
                 <i class="iconfont icon-iconheji_huabanfuben--copy-copy-copy"></i>
                 <span>30天无忧退货</span>
            </li>
            <li>
                 <i class="iconfont icon-iconheji_huabanfuben--copy-copy-copy"></i>
                 <span>48小时快速退款</span>
            </li>
            <li>
                 <i class="iconfont icon-iconheji_huabanfuben--copy-copy-copy"></i>
                 <span>满88元免邮费</span>
            </li>
        </ul>
    </div>
    <div class="cnt">
       <div class="content">
            <div class="img"></div>
            <div class="text">
                <div class="title">去添加点什么吧</div>
                <div class="btn">登录</div>
            </div>
       </div>
    </div>
  </div>
</template>

<script >
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #cat
    background #ededed
    header
      width 100%
      height 88px
      background #fff
      .banner   
        width 100%
        height 88px
        box-sizing border-box
        padding 0 30px
        line-height 88px
        position relative
        .left
           float left
           font-size 37px
        .right
            float right
            font-size 30px
            margin-right 30px
            color red
        &:after
            display block
            content ''
            position absolute
            left 0
            bottom 0
            background-color #d9d9d9
            height 1px
            width 100%
    .service
        width 100%
        height 70px
        ul
         width 100%
         height 100%
         box-sizing border-box
         padding 0 30px
         background #eee
         display  flex
         justify-content space-between
         flex-flow row nowrap
         align-items center
         li
           text-align center
           color #666
    .cnt
      position fixed
      top 158px
      left 0
      bottom 0
      width 100%
      background-color #f4f4f4
      text-align center
      .content
        position absolute
        top -50px
        right 0
        bottom 0
        left 0
        height 300px
        margin auto
        .img
          display inline-block
          vertical-align middle
          width 248px
          height 248px
          margin-bottom 8
          background-image url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png)
          background-size 248px 248px
          background-position center center
          background-repeat no-repeat
        .text
          font-size 28px
          line-height 1
          color #7f7f7f
          .title
            margin-bottom 50px
            line-height 1
            color #999
          .btn
            margin auto
            width 480px
            height 92px
            font-size 30px
            line-height 92px 
            color #fff
            background-color #DD1A21
            border-radius 3px
</style>
