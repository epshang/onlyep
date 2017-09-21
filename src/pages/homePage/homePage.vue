<template>
  <div>
    <div class="header">
      <header-slide></header-slide>
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
      pp: '1'
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    height: 210px
    background red
</style>
