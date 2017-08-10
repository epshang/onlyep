<template>
 <!--main-->
<div class="main">
    <!--热门直播-->
    <div class="hot-live">
        <div class="title">热门直播</div>
        <div class="hot-live-info item-info">
            <div class="room-count texta-r item-info-l">
                <i class="icon-room"></i>
                <span>&nbsp;房间68</span>
            </div>
            <div class="room-moods item-info-r">
                <i class="icon-moods"></i>
                <span>&nbsp;人气109万人次</span>
            </div>
        </div>
        <div class="room-box swiper-li-container">
            <ul class="room-item-list swiper-wrapper clearfix" id="js-hot-live"></ul>
        </div>
    </div>
    <!--最新入驻-->
    <div class="new-settled">
        <div class="title">最新入驻</div>
        <div class="new-settled-info item-info">
            <div class="room-count texta-r item-info-l">
                <i class="icon-room"></i>
                <span>&nbsp;房间68</span>
            </div>
            <div class="room-moods item-info-r">
                <i class="icon-moods"></i>
                <span>&nbsp;人气109万人次</span>
            </div>
        </div>
        <div class="room-box swiper-li-container">
            <ul class="room-item-list swiper-wrapper clearfix" id="js-new-settled"></ul>
        </div>
    </div>
    <!--官方推荐-->
    <div class="official-recommend">
        <div class="title">官方推荐</div>
        <div class="official-recommend-info item-info">
            <div class="room-count texta-r item-info-l">
                <i class="icon-room"></i>
                <span>&nbsp;房间68</span>
            </div>
            <div class="room-moods item-info-r">
                <i class="icon-moods"></i>
                <span>&nbsp;人气109万人次</span>
            </div>
        </div>
        <div class="room-box swiper-li-container">
            <ul class="room-item-list swiper-wrapper clearfix" id="js-official-recommend"></ul>
        </div>
    </div>
    <!--精彩录播-->
    <div class="wonderful-recorder" style="display: none;">
        <div class="title">精彩录播</div>
        <div class="wonderful-recorder-info item-info">
            <div class="video-count texta-r item-info-l">
                <i class="icon-video"></i>
                <span>&nbsp;视频68</span>
            </div>
            <div class="play-count item-info-r">
                <i class="icon-play"></i>
                <span>&nbsp;播放10万次</span>
            </div>
        </div>
        <div class="room-box swiper-li-container">
            <ul class="room-item-list swiper-wrapper clearfix">
                <li class="room-item fl swiper-slide">
                    <a href="###">
                        <img src="img/mobile/img/20170224114032.png" alt="直播">
                    </a>
                    <div class="room-item-title">CME：黄金强力稳固1225 原油看跌40美元</div>
                    <div class="room-item-footer">
                    <span class="item-hot">
                        <i class="icon-hot"></i> 1158
                    </span>
                        <span class="item-comment">
                        <i class="icon-comment"></i> 1158
                    </span>
                    </div>
                </li>
                <li class="room-item fl swiper-slide">
                    <a href="###">
                        <img src="img/mobile/img/20170224114032.png" alt="直播">
                    </a>
                    <div class="room-item-title">CME：黄金强力稳固1225 原油看跌40美元</div>
                    <div class="room-item-footer">
                    <span class="item-hot">
                        <i class="icon-hot"></i> 1158
                    </span>
                        <span class="item-comment">
                        <i class="icon-comment"></i> 1158
                    </span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <!--精选话题-->
    <div class="selection-topic">
        <div class="title">精选话题
            <a href="###" class="more fr" style="display: none;">更多></a>
        </div>
        <div class="selection-topic-info item-info" style="display: block;">
            <div class="topic-count texta-r item-info-l">
                <!-- <i class="icon-topic"></i> -->
                <span id="topicCount">&nbsp;话题0</span>
            </div>
            <div class="discuss-count item-info-r">
                <!-- <i class="icon-discuss"></i> -->
                <span id="commentCount">&nbsp;讨论0</span>
            </div>
        </div>
        <div class="selection-topic-item-box swiper-container-4">
            <ul class="swiper-wrapper" id="js-selected-topic">
                
            </ul>
            <div class="swiper-pagination"></div>
        </div>
    </div>
    <!--名师推荐-->
    <div class="teacher-recommend swiper-container-2" style="display: none;">
        <div class="title">名师推荐
            <a href="###" class="more fr">更多></a>
        </div>
        <ul class="teacher-recommend-list swiper-wrapper clearfix" id="js-teacher-recommend"></ul>
    </div>
    <!--合作机构-->
    <div class="cooperative-agency">
        <div class="title">王牌公会</div>
        <div class="cooperative-agency-info item-info" style="display: block;">
            <div class="topic-count texta-r item-info-l">
                <i class="iconfont icon-momentposttopic"></i>
                <span id="guildCount">&nbsp;公会0</span>
            </div>
            <div class="discuss-count item-info-r">
                <i class="iconfont icon-taolun"></i>
                <span id="teacherCount">&nbsp;0</span>
            </div>
        </div>
        <div class="cooperative-agency-box swiper-container-3">
            <ul class="swiper-wrapper" id="js-cooperative-agency">
                
            </ul>
        </div>
    </div>
</div>
</template>

<script>
import prefix from '../interFace.js'
var api = prefix
export default {
  data() {
    return {
      hotVideo: [],
      newLiveRoom: [],
      governmentAdvice: [],
      videoRecord: [],
      selectedTopic: [],
      newGuild: [],
      hotTeacher: [],
      notices: []
    }
  },
  created (){
    $.ajax({
      type: 'POST',
      url: api+'/indexInterface',
      dataType: 'json',
      success: (res) => {
        console.log(res)
      }
    })
  }
}
</script>

<style lang='less' scope>
body {
  overflow-y: scroll;
}

.main {
  width: 100%;
  >div {
    margin-top: 50/75rem;
    .title {
      font-size: 36/75rem;
      color: #fdd947;
      text-align: center;
      line-height: 36/75rem;
    }
    .item-info {
      margin-top: 30/75rem;
      font-size: 0;
      display: none;
      >div {
        display: inline-block;
        width: 50%;
        height: 20/75rem;
        i {
          display: inline-block;
          background-size: 100% !important;
          &.icon-video {
            width: 22/75rem;
            height: 22/75rem;
            background: url("../assets/img/icon/icon_video.png") no-repeat;
          }
          &.icon-play {
            width: 16/75rem;
            height: 20/75rem;
            background: url("../assets/img/icon/icon_play.png") no-repeat;
          }
        }
        span {
          font-size: 20/75rem;
          color: #6d6b6c;
        }
        &.item-info-l {
          padding-right: 20/75rem;
        }
        &.item-info-r {
          padding-left: 20/75rem;
        }
      }
    }
    .room-box {
      width: 100%;
      height: 433/75rem;
      margin-top: 40/75rem;
      background: url("../assets/img/bg/item_bg.png") no-repeat;
      -webkit-background-size: 100%;
      background-size: 100%;
      .room-item-list {
        font-size: 0;
        padding-top: 41/75rem;
        box-sizing: border-box !important;
        li {
          //margin-left: 20/75rem;
          //width: 384/75rem;
          width: 404/75rem;
          padding-left: 20/75rem;
          box-sizing: border-box !important;
          a {
            display: block;
            width: 100%;
            height: 230/75rem;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .room-item-title {
            font-size: 26/75rem;
            line-height: 36/75rem;
            width: 100%;
            color: #ffffff;
            margin-top: 24/75rem;
          }
          .room-item-footer {
            margin-top: 26/75rem;
            text-align: center;
            padding: 0 5/75rem;
            span {
              font-size: 20/75px;
              color: #6d6b6c;
              line-height: 24/75rem; //margin-right: 50/75rem;
              i {
                display: inline-block;
                -webkit-background-size: 100% !important;
                background-size: 100% !important;
                &.icon-room {
                  font-size: 14/75rem;
                }
                &.icon-teacher {
                  font-size: 14/75rem;
                }
              }
            }
          }
        }
      }
    }
  }
  .selection-topic {
    width: 100%;
    background-color: #1d1e23;
    margin-top: 48/75rem;
    padding-top: 48/75rem;
    .more {
      margin-right: 30/75rem;
      font-size: 22/75rem;
      color: #6d6b6c;
      &:active {
        color: #fdd947;
      }
    }
    .selection-topic-item-box {
      width: 636/75rem;
      height: 546/75rem;
      margin: 48/75rem auto 0;
      position: relative;
      ul {
        width: 100%;
        li {
          width: 100%;
          a {
            display: block;
            width: 614/75rem;
            margin: 0 auto;
            height: 294/75rem;
            position: relative;
            img {
              width: 100%;
              height: 100%;
            }
            .title-2-box {
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              background-color: rgba(0, 0, 0, .3);
              h4 {
                font-size: 30/75rem;
                font-weight: bold;
                width: 329/75rem;
                height: 80/75rem;
                text-align: center;
                color: #FFFFFF;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                margin: auto;
                z-index: 10;
              }
            }
          }
          .selection-topic-item-intro {
            width: 555/75rem;
            height: 98/75rem;
            font-size: 20/75rem;
            color: #b3b3b3;
            text-align: center;
            line-height: 36/75rem;
            margin: 27/75rem auto 0;
            span {
              display: inline-block;
              height: 68/75rem;
              overflow: hidden;
            }
          }
          .selection-topic-item-footer {
            margin-top: 30/75rem;
            text-align: center;
            span {
              display: inline-block;
              height: 28/75rem;
              line-height: 28/75rem;
              font-size: 20/75px;
              color: #6d6b6c;
              margin-right: 50/75rem;
              i {
                display: inline-block;
                -webkit-background-size: 100% !important;
                background-size: 100% !important;
                &.icon-hot {
                  width: 24/75rem;
                  height: 28/75rem;
                  background: url("../assets/img/icon/icon_renqi.png") no-repeat;
                }
                &.icon-comment {
                  width: 27/75rem;
                  height: 25/75rem;
                  background: url("../assets/img/icon/icon_comment.png") no-repeat;
                }
              }
            }
          }
        }
      }
      .swiper-pagination {
        position: absolute;
        bottom: 30/75rem;
        left: 0;
        .swiper-pagination-bullet {
          background-color: #6d6b6c;
        }
        .swiper-pagination-bullet-active {
          background-color: #fdd947;
        }
      }
    }
  }
  .teacher-recommend {
    height: 500/75rem;
    width: 100%; //background-color: tan;
    .title {
      text-align: left;
      margin-left: 20/75rem;
      .more {
        margin-right: 30/75rem;
        font-size: 22/75rem;
        color: #6d6b6c;
        &:active {
          color: #fdd947;
        }
      }
    }
    ul {
      margin-top: 40/75rem;
      li {
        width: 284/75rem;
        height: 400/75rem;
        background-color: #1d1e23;
        text-align: center;
        padding-top: 20/75rem;
        margin-left: 20/75rem;
        float: left;
        .teacher-img-box {
          width: 83/75rem;
          height: 83/75rem;
          margin: 0 auto;
          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
        .teacher-name {
          font-size: 26/75rem;
          color: #FFFFFF;
          margin-top: 28/75rem;
        }
        .teacher-fans {
          .icon-fans {
            display: inline-block;
            width: 24/75rem;
            height: 21/75rem;
            margin-top: 8/75rem;
            background: url("../assets/img/icon/icon_fans.png") no-repeat;
            -webkit-background-size: 100%;
            background-size: 100%;
          }
          span {
            font-size: 20/75rem;
            color: #6b6d6c;
          }
        }
        .teacher-says {
          width: 241/75rem;
          height: 53/75rem;
          font-size: 22/75rem;
          color: #b3b3b3;
          margin: 30/75rem auto 0;

          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical
        }
        .gz-teacher {
          width: 120/75rem;
          height: 51/75rem;
          line-height: 51/75rem;
          text-align: center;
          font-size: 24/75rem;
          color: #131419;
          background-color: #fdd947;
          margin: 36/75rem auto 0;
          &.gzed {
            border: 1px solid #fdd947;
            color: #fdd947;
            background-color: #1d1e23;
          }
        }
      }
    }
  }
  .cooperative-agency {
    height: 600/75rem;
    width: 100%;
    margin-top: 70/75rem;
    .cooperative-agency-box {
      ul {
        width: 20rem;
        padding-top: 45/75rem;
        box-sizing: border-box !important;
        li {
          float: left;
          margin-left: 20/75rem;
          box-sizing: border-box !important;
          a {
            display: inline-block;
            width: 284/75rem;
            height: 169/75rem;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .cooperative-agency-name {
            font-size: 30/75rem;
            color: #FFFFFF;
            text-align: center;
            margin-top: 10/75rem;
          }
        }
      }
    }
  }
}
</style>