<template>
  <div id="search">
      <div class="header">
          <div class="top">
              <div class="sBox">
                <i class="iconfont icon-sousuo"></i>
                <input type="text" :placeholder="search"> 
              </div>
              <span @click="goPath">取消</span>
          </div>
      </div>
      <div class="bttom">
        <div class="title">热门搜索</div>
        <div class="list">
          <a href="javescript:;" v-for="(item,index) in hotSearch" :key="index" :class="item.highlight?'highlight':''">{{item.keyword}}</a>
        </div>
      </div>
  </div>
</template>

<script >
  import axios from 'axios'
  let url = "/api/xhr/search/init.json"
  export default {
      data(){
          return {
              search:"",
              hotSearch:[]
          }
      },
      methods:{
        goPath(){
          this.$router.go(-1)
        },
      },
      mounted(){
        axios.post(url,{}).then((res)=>{  
          this.search = res.data.data.defaultKeyword.keyword;
          this.hotSearch = res.data.data.hotKeywordVOList;
           console.log( res.data.data.hotKeywordVOList)
        })
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #search
    width 100%
    height 491px
    background #fff
    .header
        width 100%
        height 87px
        .top
           position relative
           width 100%
           height 87px
           line-height 87px
           padding 0 30px
           box-sizing border-box
           .sBox
              width 605px
              position absolute
              top 50%
              margin-top -23px
              display flex
              height 56px
              line-height 56px
              padding 0 20px
              background #ededed
              box-sizing border-box 
              .iconfont
                font-size 28px
                color rgba(0,0,0,0.8)
                box-sizing border-box
                margin 0 16px 0 0
              input 
                width 520px
                height 39px
                padding-left 2px
                box-sizing border-box
                outline none //去除选中的边框
                background #ededed
                color rgba(0,0,0,0.8)
                margin auto 0 
           span 
            position absolute
            right 30px
            top 50%
            margin-top -21px
            display block
            width 56px
            font-size 28px
            height 42px
            color #333
            line-height 42px
    .bttom
      width 100%
      height 404px
      box-sizing border-box
      margin-bottom 20px
      padding 0 30px 30px
      .title
        height 90px
        width 100%
        line-height 90px
        font-size 28px
        color #999
      .list
        margin-right -30px
        margin-bottom -32px
        a
          display block
          float left
          color #333
          line-height 45px
          border 1px solid #999
          padding 0 15px
          margin 0 32px 32px 0
        .highlight
          color #DD1A21
          border-color #DD1A21
</style>
