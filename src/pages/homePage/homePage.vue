<template>
  <div class="homepage">
    <div class="header">
      <header-slide :slide-imgs="slideImgs"></header-slide>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
import HeaderSlide from '../../components/homepage/headerSlide'
export default {
  components: {
    HeaderSlide
  },
  data() {
    return {
      slideImgs: [{
        type: 0,
        name: 'banner1',
        url: require('../../assets/homepage/home_banner1@2x.jpg')
      },
      {
        type: 1,
        name: 'banner2',
        url: require('../../assets/homepage/home_banner2@2x.png')
      }]
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    height: 210px
</style>
