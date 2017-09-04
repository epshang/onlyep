<template>
  <div>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
    <div class="menu-wrapper">
      <ul class="menu-list">
        <router-link :to="item.to" v-for="(item,index) in menuList" :key="index" tag="li" class="menu-item" active-class="active" >
          <span class="icon" :class="classMap[item.type]"></span>
          <span class="text">{{item.name}}</span>
        </router-link>
      </ul>
      <div class="history-wrapper">
        <span class="icon"></span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    created() {
      this.classMap=['homepage','course','history','topic','person']
    },
    data() {
      return {
        isSelected: false,
        menuList: [
          {
            name: '首页',
            to: '/homepage',
            type: 0
          },
          {
            name: '课程',
            to: '/course',
            type: 1
          },
          {
            name: '历史',
            to: '/history',
            type: 2
          },
          {
            name: '话题',
            to: '/topic',
            type: 3
          },
          {
            name: '个人',
            to: '/person',
            type: 4
          }
        ]
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  @import "./common/stylus/mixin.styl"

  .menu-wrapper
    position: absolute
    left 0
    bottom 0
    height 50px
    width 100%
    background #131419
    .menu-list
      display flex
      height 100%
      box-shadow 0 0 20px #131419;
      .menu-item
        flex 1
        height 100%
        padding-top 2px
        text-align center
        .icon
          display inline-block
          width 30px
          height 30px
          background-size 30px 30px
          background-repeat no-repeat
          &.homepage
            bg-image('./assets/menu/homepage_0')
          &.course
            bg-image('./assets/menu/course_0')
          &.topic
            bg-image('./assets/menu/topic_0')
          &.person
            bg-image('./assets/menu/person_0')
        .text
          display block
          font-size 11px
          color #6d6b6c
        &.active
          .icon
            &.homepage
              bg-image('./assets/menu/homepage_1')
            &.course
              bg-image('./assets/menu/course_1')
            &.topic
              bg-image('./assets/menu/topic_1')
            &.person
              bg-image('./assets/menu/person_1')
          .text
            color #fdd947
    .history-wrapper
      position absolute
      top -18px
      left 0
      bottom 0
      right 0
      z-index 10
      margin auto
      width 68px
      height 68px
      background #131419
      border-radius 50%
      text-align center
      .icon
        display inline-block
        margin-top 5px
        line-height 68px
        width 53px
        height 58px
        background-size 53px 58px
        background-repeat no-repeat
        bg-image('./assets/menu/mascot')

</style>

