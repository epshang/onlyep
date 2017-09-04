<template>
  <div>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
    <div class="menu-wrapper">
      <ul class="menu-list">
        <router-link :to="item.to" v-for="item in menuList" tag="li" class="menu-item">
          <span class="icon" :class="classMap[item.type]"></span>
          <span class="text">{{item.name}}</span>
        </router-link>
      </ul>
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
  .menu-wrapper
    position: absolute
    left: 0
    bottom: 0
    height: 50px
    width: 100%
    background: teal
    .menu-list
      display: flex
      .menu-item
        flex: 1
</style>

