<template>
  <div class="homepage">
    <div class="header">
      <header-slide :slide-imgs="slideImgs"></header-slide>
    </div>
    <div class="content">
      <!-- 热门直播 -->
      <div class="content-item hot-live">
        <div class="title-wrapper">
          <h2 class="title">热门直播</h2>
          <div class="play-info">
            <div class="room">
              <span class="icon icon-room"></span>房间45</div>
            <div class="hot">
              <span class="icon icon-popularity"></span>人气100万</div>
          </div>
        </div>
        <div class="rooms-wrapper">
          <ul class="room-list clearfix">
            <li class="room-item fl" v-for="(item, index) in hotVideo" :key="index">
              <div class="cover-img">
                <img src="./1.jpg" alt="">
              </div>
              <div class="title">CME：黄金强力稳固1225 原油看跌40美元</div>
              <div class="room-item-footer">
                <div class="item fl">
                  <span class="icon icon-teacher"></span>12</div>
                <div class="item">
                  <span class="icon icon-renqi"></span>12</div>
                <div class="item fr">
                  <span class="icon icon-room"></span>12</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import HeaderSlide from '../../components/homepage/headerSlide'
import axios from 'axios'
export default {
  components: {
    HeaderSlide
  },
  created() {
    var _this = this
    axios.get('/api/home')
      .then(function(response) {
        console.log(_this.newLiveRoom)
        _this.hotVideo = response.data.hotVideo
        _this.governmentAdvice = response.data.governmentAdvice
        _this.newLiveRoom = response.data.newLiveRoom
        //_this.videoRecord = response.data.videoRecord
        _this.selectedTopic = response.data.selectedTopic
        _this.newGuild = response.data.newGuild
      })
      .catch(function(response) {
        console.log(response)
      });
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
      }],
      hotVideo: [],
      newLiveRoom: [],
      governmentAdvice: [],
      //videoRecord: [],
      selectedTopic: [],
      newGuild: []
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/stylus/index.styl"
  .header
    height: 210px
  .content
    .content-item
      .title-wrapper
        padding-top 25px
        text-align center
        .title
          font-size 18px
          color title-font
        .play-info
          font-size 0
          padding-top 16px
          >div
            display inline-block
            font-size 10px
            line-height 20px
            color item-font
            .icon
              display inline-block
              vertical-align top
              width 20px
              height 20px
              background-size 100%
              &.icon-room
                margin-right 10px
                bg-image('../../assets/homepage/home_roomIcon')
              &.icon-popularity
              margin-left 10px
                bg-image('../../assets/homepage/home_popularityIcon')
      .rooms-wrapper
        margin-top 20px
        padding-top 18px
        height 216px
        width 100%
        bg-image('../../assets/homepage/home_cellBg')
        background-size cover
        .room-list
          .room-item
            margin-left 10px
            width 192px
            .cover-img
              height 115px
              img
                width 100%
                height 100%
            .title
              margin-top 13px
              font-size 13px
              color base-color
              line-height 20px
            .room-item-footer     
              margin-top 20px         
              font-size 0
              text-align center
              .item
                display inline-block
                line-height 20px
                vertical-align top
                font-size 10px
                color item-font
                .icon
                  display inline-block
                  vertical-align top
                  width 20px
                  height 20px
                  background-size 100%
                  &.icon-room
                    bg-image('../../assets/homepage/home_roomIcon')
                  &.icon-renqi
                    bg-image('../../assets/homepage/home_popularityIcon')
</style>
