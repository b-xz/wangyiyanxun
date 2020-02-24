<template>
  <div>
    <!-- 头部 -->
    <header id="home">
         <div @click="goPath('/search')" class="box">
           <i class="iconfont icon-sousuo"></i>
            <span class="search" >搜索商品, 共20259款好物</span>
         </div>
     </header>
    <!-- 主体 -->
    <div class="container"> 
     <div class="left" >
        <div class="wrap">
            <ul> 
                <li v-for="(navItem, index) in left" 
                    :key="index" 
                    :class="activeId===index?'active':''"
                    @click="ListId(index)">
                    {{navItem.name}}
                </li> 
            </ul>
        </div> 
     </div>
     <div class="right">
        <div class="wrapper">
            <div class="content">
                <div class="item" v-show="activeId==index" v-for="(item,index) in right" :key="index">
                    <div class="banner">
                        <img :src="item.imgUrl" alt="">
                    </div>
                    <div>
                      <ul class="list" v-if="item.categoryList">
                          <li class="cateItem" v-for="(cateItem,index) in item.categoryList" :key="index">
                              <div class="cateImgWrapper">
                                  <img :src="cateItem.bannerUrl" alt="">
                              </div>
                              <div class="name">
                                  {{cateItem.name}}
                              </div>
                          </li>
                      </ul>
                      <ul class="list" v-if="item.subCateList">
                          <li class="cateItem" v-for="(cateItem,index) in item.subCateList" :key="index">
                              <div class="cateImgWrapper">
                                  <img :src="cateItem.wapBannerUrl" alt="">
                              </div>
                              <div class="name">
                                  {{cateItem.name}}
                              </div>
                          </li>
                      </ul>
                    </div>
                </div>
            </div>
        </div>
     </div>
    </div>
  </div>
</template>

<script>
  import cateNav from '../../datas/cateNavDatas.json'
  import cateLists from '../../datas/cateLists.json'
  import BScroll from 'better-scroll'
  export default {
    data(){
      return {
        left: [],
        activeId: 0,
        right: [],
      }
    },
    methods:{
      ListId(index){
        this.activeId = index
      },
      goPath(path){
          path !== this.$route.path && this.$router.push(path)
      },
    },
    mounted(){
      this.left = cateNav.categoryL1List
      this.right= cateLists
      this.$nextTick(()=>{
        new BScroll( '.left .wrap', {
            scrollY: true,
            click: true
        })
        new BScroll( '.right .wrapper', {
            scrollY: true,
            click: true
        })
      })    
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
        width 690px
        height 56px
        line-height 56px
        margin 0 16px
        justify-content center
        align-items: center
        background-color #ededed
        font-size 28px
        i 
          display inline-block
          width 63px
          height 56px
          text-align center
          font-size 36px
          line-height 56px
    .container
      display flex
      width 100%
      height 1148px  
      overflow hidden    
      .left
        display inline-block
        width 162px
        height 1148px
        background-color #fff
        .wrap
          height 1148px
          width 162px
          overflow hidden
          ul
            box-sizing border-box
            padding 20px 0 98px
            height 1150px
            li
              width 162px
              height 50px
              margin-top 40px
              color #333
              line-height 50px
              font-size 28px
              text-align center
              position relative
            .active
              color #ab2b2b
              &:before
                  content ""
                  display block
                  width 6px
                  height 50px
                  position absolute
                  background-color #ab2b2b
      .right
        display inline-block
        width 587px
        height 1148px
        background-color #fff
        box-sizing border-box
        padding 30px 30px 21px
        margin-left 1px
        .wrapper
          width 528px
          height 1148px
          overflow hidden
          background-color #fff
          .content
            box-sizing border-box
            width 528px
            .item
              width 528px
              .banner
                width 528px
                height 192px
                img 
                    width 528px
                    height 192px
              .list
                width 528px
                clearFix()
                .cateItem
                  float left
                  width 144px
                  height 216px
                  margin-right 32px
                  .cateImgWrapper
                    width 144px
                    height 144px
                    img
                      width 144px
                      height 144px 
                      background-color #fff
                  .name
                    width 144px
                    font-size 24px  
                    line-height 36px
                    color #333
                    text-align center
</style>
