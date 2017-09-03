<template>
  <div>
    <header-slide></header-slide>
    <div class="main">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <!--footer-->
    <div class="menu-list">
      
    </div>
  </div>
</template>

<script>
import indexPage from '../pages/index'
import headerSlide from '../components/headerSlide'

export default {
  components: {
    indexPage,
    headerSlide
  },
  data() {
    return {
      isSelected: false,
      menuList: [
      {
        name: '首页'
      },
      {
        name: '课程'
      },
      {
        name: '历史'
      },
      {
        name: '话题'
      },
      {
        name: '个人'
      }
      ]
    }
  }
}
</script>

<style lang='less'>

</style>