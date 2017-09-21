<template>
  <div class="slide-wrapper">
    <transition name="fade">
      <div v-show="isShow" class="slide-item">
        <a href="###">
          <img :src="slideImgs[1].url" :alt="slideImgs[1].name" class="slide-img">
        </a>
      </div>
    </transition>
    <!-- <transition name="fade-old">
      <div v-show="!isShow" class="slide-item">
        <a href="###">
          <img :src="slideImgs[nowIndex].url" :alt="slideImgs[nowIndex].name" class="slide-img">
        </a>
      </div>
    </transition> -->
  </div>
</template>

<script>
export default {
  props: {
    slideImgs: {
      type: Array,
      default: []
    }
  },
	data() {
		return {
      nowIndex: 0,
      isShow: true
		}
  },
  computed: {
    nextIndex() {
      if(this.nowIndex === this.slideImgs.length - 1) {
        return 0
      } else {
        return this.nowIndex + 1
      }
    }
  },
  methods: {
    goto(index) {
      this.isShow = false
      setTimeout(() => {
        this.isShow = true
        this.nowIndex = index
      }, 10)
    },
    autoSlide() {
      setInterval(() => {
        this.goto(this.nextIndex)
      }, 10000)
    }
  },
  mounted() {
    this.autoSlide()
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .slide-wrapper
    height 210px
    position relative
    .slide-item
      width 100%
      height 100%
      position absolute
      left 0
      top 0
      .slide-img
        width 100%
        height 100%
  .fade-leave
    opacity 0
  .fade-enter-active
    transition  all 10s linear
    opacity 1
  .fade-leave,.fade-enter
    opacity 0
  .fade-old-enter-active,.fade-old-leave-active
    transition  all .5s linear
    opacity 1
  .fade-old-leave-to,.fade-old-enter-to
    opacity 0
</style>
