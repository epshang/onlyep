<!-- The ref attr used to find the swiper instance -->
<template>
  <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
    <!-- slides -->
    <swiper-slide v-for="(item,index) in slideImgs" :key="index">
      <img :src="item.url" alt="" class="slide-img">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
// swiper options example:
export default {
  name: 'carrousel',
  props: {
    slideImgs: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
      // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
      notNextTick: true,
      swiperOption: {
        // swiper optionss 所有的配置同swiper官方api配置
        autoplay: 3000,
        loop: true,
        direction: 'horizontal',
        autoHeight: true,
        pagination: '.swiper-pagination'
      }
    }
  },
  // you can find current swiper instance object like this, while the notNextTick property value must be true
  // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  }
}
</script>

<style lang="stylus" scoped>
.swiper-container
  width 100%
  height 100%
  .swiper-wrapper
    width 100%
    height 100%
    .slide-img
      width 100%
      height 100%
</style>
