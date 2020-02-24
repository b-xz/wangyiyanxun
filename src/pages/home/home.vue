<template>
  <div id="index">
     <header id="home">
      <div class="top">
        <div class="logoContainer">
            <a href="" class="logo"></a>
        </div>
        <div class="search">
            <div @click="goPath('/search')" class="searchBtn">
                <i class="iconfont icon-sousuo" ></i>
                <span class="placeholder" >搜索商品, 共20259款好物</span>
            </div>
        </div>
        <div class="login">登录</div>
      </div>
      <div class="headerBottom">
        <ul class="listItem">
          <li class="navItem active">推荐</li>
          <li v-for="(item, index) in indexCateModule" :key="index">{{item.name}}</li>
        </ul>
        <div class="toggle">
          <i class="iconfont icon-jiantouxia"></i>
        </div>
      </div>
     </header>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <img v-for="(image, index) in indexCateModule" :key="index" class="swiper-slide" :src="image.imgUrl" alt="">
        </div>
        <div class="swiper-pagination"></div>
     </div>
     <div class="m-indexServicePolicy">
       <ul class="list">
         <li v-for="(item,index) in indexJson.policyDescList" :key="index">
          <img :src="item.icon" alt="">
          <span>{{item.desc}}</span>
        </li>
       </ul>
     </div>
     <div class="container">
       <div class="listNav">
         <div class="listItem">
           <div v-for="(item,index) in indexJson.kingKongModule.kingKongList" :key="index" class="item">
             <img :src="item.picUrl" alt="">
             <span>{{item.text}}</span>
           </div>
         </div>
       </div>
       <div class="Big">
         <div class="bigTop">
           <div class="topImg">
             <img src="" alt="">
             <div class="topText">
               <span></span>
             </div>
           </div>
         </div>
         <div class="bigCenter">
           <a href="#"></a>
         </div>
         <div class="bigFooter">
           <a class="b1" href="#"></a>
           <a class="b2" href="#"></a>
         </div>
         <div class="bigFooter">
           <a class="b3" href="#"></a>
           <a class="b4" href="#"></a>
         </div>
       </div>
       <div class="new">
         <div class="newTitle">
           <span>新人专享礼</span>
         </div>
         <div class="newContent">
           <div class="left">
             <div class="text">新人专享礼包</div>
             <div class="imgWrap">
                <img src="http://yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="">
             </div>
           </div>
           <div class="right">
             <div class="top">
               <div class="t-content">
                  <div class="img">
                  </div>
                  <div class="text">
                    <div class="text-t">福利社</div>
                    <div class="text-b">今日特价</div>
                  </div>
               </div>
             </div>
             <div class="bottom">
               <div class="b-cotent">
                 <div class="txt">
                   <div class="title">新人拼团</div>
                   <div class="tag">1元起包邮</div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
       <!-- 热销榜 -->
       <div class="sell">
         <div class="title">类目热销榜</div>
         <div class="center">
            <li v-for="(categoItem,index) in indexJson.categoryHotSellModule.categoryList" :key="index">
              <a :href="categoItem.targetUrl">
                <span>{{categoItem.categoryName}}</span>
                <img :src="categoItem.showPicUrl" alt="">
              </a>
            </li>
         </div>
       </div>
       <!-- 限时购 -->
        <div class="time">
          <div class="moduleTitle">
            <div class="left">
              <span>限时购</span>
              <Time/>
            </div>
            <div class="right">
                <span>更多</span>
                <i class="iconfont icon-arrow-right-copy-copy"></i>
            </div>
          </div>
          <div class="cnt"> 
            <ul>
              <li v-for="(timeItem,index) in indexJson.flashSaleModule.itemList" :key="index">
                <img :src="timeItem.picUrl" alt="">
                <div class="text">
                  <span>￥{{timeItem.activityPrice}}</span>
                  <span>￥{{timeItem.originPrice}}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!-- 新品首发 -->
        <div class="launch">
          <div class="newTop">
            <div class="left">
              <span>新品首发</span>
            </div>
            <div class="right">
                <span>更多</span>
                <i class="iconfont icon-arrow-right-copy-copy"></i>
            </div>
          </div>
          <div class="newBottom">
            <ul>
              <li v-for="(newItem,index) in newShop" :key="index" class="list">
                <img :src="newItem.primaryPicUrl" alt="">
                <div class="present">{{newItem.name}}</div>
                <div class="money">￥{{newItem.retailPrice}}</div>
                <div class="special">
                  <span>特价</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!-- 商品指南 -->
        <div class="shopGuide">
          <ul class="list">
            <li v-for="(item, index) in indexJson.sceneLightShoppingGuideModule" :key="index">
              <div class="title">{{item.styleItem.title}}</div>
              <div class="text">{{item.styleItem.desc}}</div>
              <img :src="item.styleItem.picUrlList[0]" alt="">
              <img :src="item.styleItem.picUrlList[1]" alt="">
            </li>
          </ul>
        </div>
        <!-- 版权 -->
        <div class="foot">
          <div class="box">
            <div class="top">
               <a href="" class="downLoad">下载APP </a>
               <a href="" class="computer"> 电脑版 </a>
            </div>
            <p class="copyRight">
                <span>网易公司版权所有©1997-2020</span>
                <span>视频经营许可证:JY13301080111719</span>
            </p>
          </div>
        </div>
     </div>
     <div class="newUser">
     </div>
  </div>
</template>

<script>
  import _ from 'lodash'
  import Time from '../../components/Time/CountTime'
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/css/swiper.min.css'
  import indexCateModule from '../../datas/indexCateModule.json'
  import indexJson from '../../datas/index.json'
  export default {
    data() {
      return {
        indexCateModule ,
        indexJson,
        newShop:[] 
      }
    },
    components: {Time},
    methods:{
      goPath(path){
          path !== this.$route.path && this.$router.push(path)
        },
    },
    mounted(){
      new BScroll('.headerBottom',{
        scrollX : true
      })
      new Swiper('.swiper-container', {
        observer:true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents:true,//修改swiper的父元素时，自动初始化swiper
        loop : true,
        autoplay: true,//可选选项，自动滑动
        pagination: {
          el: '.swiper-pagination',
        },
      })
      this.newShop = _.chunk(indexJson.newItemList,6)[0]
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
 #index 
  width 100%
  margin-bottom 98px
  background #ededed
  #home 
   width 100%
   height 147px
   background #fff
   .top
        background-color #fff
        width 100%
        height 88px
        padding 16px 30px
        box-sizing border-box
        .logoContainer
            width 138px
            height 40px
            float left
            .logo
                display inline-block
                width 138px
                height 40px
                margin-top 8px
                margin-right 20px
                background-size 100%
                background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp)    
        .search
            width 460px
            height 56px
            float left
            .searchBtn
                margin-left 20px
                background-color #ededed
                border-radius 8px
                color #515151
                display flex
                justify-content center
                filter none
                font-size 28px
                height 56px
                line-height 42px
                .iconfont
                    color #666
                    display block
                    height 28px
                    line-height 60px
                    margin-right 10px
                    font-size 28px
                    vertical-align middle
                    width 28px
                .placeholder
                    line-height 56px
                    color #666
        .login
            width 74px
            height 40px
            float left
            color #dd1a21
            border-radius 8px
            border 1px solid #dd1a21
            text-align center
            line-height 40px
            margin-left 16px
            margin-top 7px
   .headerBottom
      width 100%
      height 60px
      display flex
      overflow hidden
      position relative
      .listItem
        display flex
        flex-wrap nowrap
        white-space nowrap
        li
          height 60px
          font-size 28px
          font-weight 700
          text-align center
          line-height 60px
          padding 0 5px
          box-sizing border-box
          margin 0 10px
          position relative
          &.active
            color #dd1a21
            &:after
              content:''
              display block
              width 100%
              height 2px
              position absolute
              left 0
              bottom 0
              background #dd1a21
      .toggle
        position absolute
        top 0
        right 0
        width 100px
        height 60px
        text-align center
        line-height 60px
        background #fff
        .iconfont
          font-size 36px
   .swiper-container
     width 100%
     height 370px
     .swiper-wrapper
      width 100%
      height 370px
      .swiper-slide
        width 100%
        height 100%
  .m-indexServicePolicy
      background-color #fff
      width 100%
      padding 0 30px
      height 72px
      box-sizing border-box
      .list
        display flex
        height 100%
        line-height 72px
        li
          display inline-block
          width 228px
          height 100%
          line-height 72px
          margin 0 20px
          img 
            display inline-block
            width 32px
            height 32px
            margin-right 5px
            vertical-align middle
          span
            vertical-align middle
  .listNav
    width 100%
    height 340px
    background #fff
    .item
      float left
      width 110px
      height 156px
      margin 10px 20px 0px
      img 
        display block
        width 110px
        height 110px
      span 
        display block
        margin-top 10px
        width 100%
        height 36px
        font-size 24px
        line-height 36px
        text-align center
        white-space nowrap
  .Big
    width 100%
    height 828px
    background-color #1674e3
    .bigTop
      width 100%
      height 240px
      background-image url(https://yanxuan.nosdn.127.net/5db28c137605ea7576c986e9c285e1c6.png?quality=75&type=webp&imageView&thumbnail=750x0)
      background-size 100% 100%
      position relative
      .topImg
        position absolute
        width 168px
        height 168px
        top 14%
        left 10%
        img 
          display block
          width 100%
          height 100%
        .topText
          position absolute
          width 152px
          height 32px
          line-height 32px
          text-align center
          left 8px
          bottom 8px
          color #fff
          opacity 0.96
          background-color #F48F18
          border-radius 16px
    .bigCenter
      display flex
      width 750px
      height 160px
      margin 20px  20px 8px
      a
        display block
        width 710px
        height 100%
        margin-left 0
        justify-content center
        background-image url(https://yanxuan.nosdn.127.net/a4187bffa2a0431ec5d6e2dd1070d6c5.gif?imageView&quality=75)
        background-size 100% 100%
    .bigFooter
      width 710
      height 186px
      display flex
      align-items center
      justify-content space-between
      margin 0 20px 8px
      a
        display block
        float left
        width 351px
        height 186px
        &.b1
          background:url(https://yanxuan.nosdn.127.net/28244c6ae7ef78424ea5317a0d72dd6a.png?quality=75&type=webp&imageView&thumbnail=375x0)
          background-size:100% 100%
        &.b2
          background:url(https://yanxuan.nosdn.127.net/15b56691109bba3adf6156fd44f14073.png?quality=75&type=webp&imageView&thumbnail=375x0)
          background-size:100% 100%
        &.b3
          background:url(https://yanxuan.nosdn.127.net/83b35324b02e31aa202a12971fa7f8c3.png?quality=75&type=webp&imageView&thumbnail=375x0)
          background-size:100% 100%
        &.b4
          background:url(https://yanxuan.nosdn.127.net/2c98b2002572ec4cd0824bc810d7d31f.png?quality=75&type=webp&imageView&thumbnail=375x0)
          background-size:100% 100%
  .new
    width 100%
    height 558px
    margin 20px 0
    padding-bottom 30px
    background #fff
    .newTitle
      height 90px
      width 690px
      padding 0 30px
      line-height 90px
      font-size 32px
      text-align center
      span 
        position relative
        display: inline-block
        &:before
          content ''
          position: absolute
          left -40px
          top: 45px
          width: 24px
          height: 4px
          background: #333
        &:after
          content ''
          position: absolute
          right -40px
          top: 45px
          width: 24px
          height: 4px
          background: #333
    .newContent
      width 720px
      height 468px
      padding-left 30px
      .left
        width 343px
        height 434px
        background #F9E9CF
        margin-right 4px
        float left
        .text
          font-size 32px
          padding 30px 0 0 30px
        .imgWrap
          margin 37px auto
          width 258px
          height 257px
          img 
            width 258px
            height 257px
      .right
        width 343px
        height 434px
        float left
        .top
          width 100%
          height 215px
          background #F9E9CF
          margin-bottom 4px
          .t-content
            width 313px
            height 195px
            padding 20px 0 0 30px
            margin-right 4px 
            font-size 24px
            color  #333
            position relative
            .img
              position absolute
              top 15px
              right 0
              width 200px
              height 200px
              background-image url(https://yanxuan-item.nosdn.127.net/7487173f00c801dfe62cb6a8d6e36abd.png?quality=75&type=webp&imageView&thumbnail=200x200)
            .text
              position relative
              .text-t
                font-size 32px
              .text-b
                color #7F7F7F

        .bottom
          width 343px
          height 215px
          background #FFECC2
          border-radius 4px
          .b-cotent
            width 313px
            height 195px
            padding 20px 0 0 30px
            margin-right 4px
          .txt
            width 313px
            height 80px
            .title
              font-size 32px
              margin-bottom 4px
            .tag
              width 101px
              height 32px
              line-height 32px
              padding 0 10px
              background #CBB693
              font-size 22px
              border-radius 4px
              color #fff
              text-align center
  .sell
    width 100%
    height 710px
    margin-bottom 20px
    background #fff
    .title
      width 100%
      height 100px
      line-height 100px
      padding 0 30px
      box-sizing border-box
      font-size 32px
    .center
      width 100%
      height 610px
      padding  0 20px 20px 30px
      box-sizing:border-box
      li:nth-child(-n+2)
        float left
        width 340px
        height 200px
        margin 0 10px 10px 0
        background #EBEFF6
        span 
          float left
          padding-left  24px
          color #333
          font-size 28px
          margin-top 66px
          position relative
          &:before
            content ''
            position absolute
            left 24px
            bottom -16px
            width 48px
            height 4px
            background #333
        img 
          display block
          float right
          width 200px
          height 200px
      li:first-child
        background #F9F3E4
      li:nth-child(n+3)
        float left
        width 165px
        height 180px
        margin  0 10px 10px 0
        background #F5F5F5
        border-radius 4px
        span 
          display block
          margin-top 10px
          text-align center
          color #333
        img 
          display block
          width 120px
          height 120px
          margin 2px 0 0 23px
  .time
    width 100%
    height 700px
    background #fff
    .moduleTitle
      width 100%
      height 100px
      line-height 100px
      padding 0 30px
      box-sizing border-box
      .left 
        float left
        width 290px
        height 100px
        font-size 32px
        span 
          float left
      .right
        float right
        span
          font-size 28px
          line-height 100px
        i
          font-size 32px
          line-height 100px
    .cnt
      width 100%
      height 600px
      padding 0 10px 0 30px 
      box-sizing border-box
      ul
        width 100%
        height 100%
        overflow hidden
        li
          float left
          width 216px
          height 270px
          margin-right 20px
          padding-bottom 30px
          img 
            display block
            width 100%
            height 216px
            margin-bottom 12px
          .text
            width 100%
            height 42px
            line-height 42px
            padding-left 20px
            box-sizing border-box
            span 
              font-size 30px
              text-align center
              color #dd1a21
              &:last-child
                text-decoration line-through
                color #ccc
                font-size 26px
                margin-left 10px
  .launch
    width 100%
    height 922px
    padding-bottom 26px
    margin-bottom 20px
    box-sizing border-box
    background #fff
    .newTop
      width 100%
      height 100px
      line-height 100px
      padding 0 30px
      box-sizing border-box
      .left 
        float left
        width 290px
        height 100px
        font-size 32px
        span 
          float left
      .right
        float right
        span
          font-size 28px
          line-height 100px
        i
          font-size 32px
          line-height 100px
    .newBottom
      width 100%
      height 796px
      padding-left 10px
      box-sizing border-box
      ul 
        width 100%
        height 100%
        overflow hidden
        li
          float left
          width 216px
          height 398px
          margin-left 20px
          padding-bottom 13px
          box-sizing border-box
          img 
            display block
            width 100%
            height 216px
            margin-bottom 12px
          .present
            width 100%
            height 72px
            text-overflow ellipsis
          .money
            width 100%
            height 48px
            line-height 48px
            color red
          .special
            width 100%
            height 33px
            margin-bottom 4px
            span 
              height 28px
              line-height 28px
              padding 0 8px
              margin-bottom 5px
              border 1px solid red
              border-radius 15px
              color #DD1A21
  .shopGuide
    width 100%
    height 576px
    padding 10px 30px 30px 26px
    box-sizing border-box
    margin-bottom 20px
    background #fff
    ul
      width 100%
      height 100%
      overflow hidden
      li
        float left
        width 343px
        height 264px
        margin 4px 0 0 4px
        padding 20px 0 0 20px
        box-sizing border-box
        background #eee
        .title
          width 100%
          height 48px
          line-height 48px
          padding-left 10px
          box-sizing border-box
          font-size 32px
        .text
          width 100%
          height 36px
          line-height 36px
          padding-left 10px
          box-sizing border-box
          font-size 24px
        img 
          display block
          float left
          width 150px
          height 150px
          margin-right 4px
  .foot
    width 100%
    height 244px
    background #414141
    border-top 1px solid rgba(0,0,0,.15)
    .box
      width 100%
      height 100%
      padding 54px 20px 28px
      box-sizing border-box
      .top
        width 100%
        height 62px
        margin-bottom 36px
        display flex
        text-align center
        padding 0 158px
        box-sizing border-box
        a
          display block
          box-sizing border-box
          width 172px
          height 62px
          border 1px solid #999
          color #fff
          text-align center
          margin-right 58px
          line-height 62px
          border-radius 4px
      .copyRight
        text-align center
        span
            color #999
            display block
            font-size 24px
            line-height 32px
  .newUser
    width 112px
    height 80px
    position fixed
    right 0
    bottom 240px
    z-index 7
    background url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/wapNewUserEntry-b69d0624fd.png)
</style>
