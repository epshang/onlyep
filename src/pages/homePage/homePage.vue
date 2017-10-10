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
        <div class="rooms-wrapper" ref="hotLiveWrapper">
          <ul class="room-list clearfix" ref="hotLiveList">
            <li class="room-item" v-for="(item, index) in hotVideo" :key="index">
              <div class="cover-img">
                <img :src="FilePath + item.imgUrl" :onerror="errorImg">
              </div>
              <div class="title">{{item.title}}</div>
              <div class="room-item-footer">
                <div class="item fl">
                  <span class="icon icon-teacher"></span>{{item.name}}</div>
                <div class="item">
                  <span class="icon icon-renqi"></span>{{item.hotCount}}</div>
                <div class="item fr">
                  <span class="icon icon-room"></span>{{item.liveRoomName}}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- 最新入驻 -->
      <div class="content-item new-live">
        <div class="title-wrapper">
          <h2 class="title">最新入驻</h2>
          <div class="play-info">
            <div class="room">
              <span class="icon icon-room"></span>房间45</div>
            <div class="hot">
              <span class="icon icon-popularity"></span>人气100万</div>
          </div>
        </div>
        <div class="rooms-wrapper" ref="newLiveRoomWrapper">
          <ul class="room-list clearfix" ref="newLiveRoomList">
            <li class="room-item" v-for="(item, index) in newLiveRoom" :key="index">
              <div class="cover-img">
                <img :src="FilePath + item.imgUrl" :onerror="errorImg">
              </div>
              <div class="title">{{item.title}}</div>
              <div class="room-item-footer">
                <div class="item fl">
                  <span class="icon icon-teacher"></span>{{item.name}}</div>
                <div class="item">
                  <span class="icon icon-renqi"></span>{{item.hotCount}}</div>
                <div class="item fr">
                  <span class="icon icon-room"></span>{{item.liveRoomName}}</div>
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
import BScroll from 'better-scroll'
import axios from 'axios'
export default {
  components: {
    HeaderSlide
  },
  created() {
    const _this = this
    axios.post('/api/home')
      .then(function(response) {
        console.log(response.data)
        _this.hotVideo = response.data.hotVideo
        _this.newLiveRoom = response.data.newLiveRoom
        _this.governmentAdvice = response.data.governmentAdvice
        //_this.videoRecord = response.data.videoRecord
        _this.selectedTopic = response.data.selectedTopic
        _this.newGuild = response.data.newGuild
        _this.$nextTick(() => {
          _this.$refs.hotLiveList.style.width = _this.hotVideo.length*202 + 'px'
          _this.$refs.newLiveRoomList.style.width = _this.newLiveRoom.length*202 + 'px'
          _this._initScroll()
        })
      })
      .catch(function(response) {
        console.log(response)
      });
  },
  data() {
    return {
      errorImg: 'this.src="' + require('../../assets/error-img.png') + '"',
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
  },
  methods: {
    _initScroll() {
      this.hotLiveScroll = new BScroll(this.$refs.hotLiveWrapper,{
        click: true,
        scrollX: true,
        scrollY: false
      })
      this.newLiveRoomScroll = new BScroll(this.$refs.newLiveRoomWrapper,{
        click: true,
        scrollX: true,
        scrollY: false
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/stylus/index.styl"
  .header
    height: 210px
  .content
    padding-bottom 68px
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
            &.room
              margin-right 10px
            &.hot
              margin-left 10px
            .icon
              display inline-block
              vertical-align top
              width 20px
              height 20px
              background-size 100%
              &.icon-room
                bg-image('../../assets/homepage/home_roomIcon')
              &.icon-popularity
                bg-image('../../assets/homepage/home_popularityIcon')
      .rooms-wrapper
        margin-top 20px
        padding-top 18px
        height 216px
        width 100%
        bg-image('../../assets/homepage/home_cellBg')
        background-size 100%
        background-repeat: no-repeat;
        .room-list
          .room-item
            display inline-block
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
