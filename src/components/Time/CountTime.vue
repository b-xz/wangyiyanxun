<template>
<div class="Date">
        <span class="date">{{h}}</span>
        <span>:</span>
        <span class="date">{{m}}</span>
        <span>:</span>
        <span class="date">{{s}}</span>
      </div>
</template>
<script>
export default {
  name: 'Date',
  data() {
    return {
      d: '',
      h: '',
      m: '',
      s: '',
    }
  },
  created() {
    this.countTime()
  },
  methods: {
    countTime: function() {
      //获取当前时间
      var date = new Date()
      var now = date.getTime()
      //设置截止时间
      var endDate = new Date('2020-2-19 23:23:23')
      var end = endDate.getTime()
      //时间差
      var leftTime = end - now
      //定义变量 d,h,m,s保存倒计时的时间
      if (leftTime >= 0) {
        this.d = Math.floor(leftTime / 1000 / 60 / 60 / 24)//天数我没用到，暂且写上
        this.h = Math.floor((leftTime / 1000 / 60 / 60) % 24)
        this.m = Math.floor((leftTime / 1000 / 60) % 60)
        this.s = Math.floor((leftTime / 1000) % 60)
      }
      //递归每秒调用countTime方法，显示动态时间效果
      setTimeout(this.countTime, 1000)
    },
  },
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.Date
  display inline-block
  margin-left 12px
  span 
    float: left
   &.date
    color #ffffff
    width 36px
    height 36px
    border-radius 4px
    background-color #000
    text-align center
    line-height 36px
    margin 0 10px
</style>