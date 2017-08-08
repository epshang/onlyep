<template>
	<div class="header-homepage swiper-container">
		<div class="banner-box swiper-wrapper">
			<div class="swiper-slide">
				<img src="../assets/img/banner/banner.jpg" alt="然也直播">
			</div>
			<div class="swiper-slide">
				<img src="../assets/img/banner/banner1.jpg" alt="然也直播">
			</div>
		</div>
		<div class="swiper-pagination"></div>
		<!-- <div class="search-bar">
				<div class="icon-search"></div>
		</div> -->
	</div>
</template>

<script>
	export default {
		data () {
			return {
				a: '1'
			}
		}
	}
</script>

<style lang='less'>
body {
  overflow-y: scroll;
}

.header-homepage {
  position: relative;
   .banner-box {
     div {
       img {
         width: 100%;
       }
     }
   }
  .swiper-pagination{
    bottom: 35/75rem !important;
    .swiper-pagination-bullet{
      width: 50/75rem;
      height: 3/75rem;
      border-radius: 0;
      margin: 0 15/75rem;
      opacity: 1;
      background: url("../assets/img/icon/bullet.png") no-repeat;
    }
    .swiper-pagination-bullet-active{
      background: url("../assets/img/icon/bullet_active.png") no-repeat;
    }
  }
  .search-bar{
    position: absolute;
    top: 30/75rem;
    right: 30/75rem;
    width: 34/75rem;
    height: 34/75rem;
    background: url("../assets/img/icon/icon_search.png");
    -webkit-background-size: 100%;
    background-size: 100%;
    z-index: 10;
  }
 }

.main{
  width: 100%;
  >div{
    margin-top: 50/75rem;
    .title{
      font-size: 36/75rem;
      color: #fdd947;
      text-align: center;
      line-height: 36/75rem;
    }
    .item-info{
      margin-top: 30/75rem;
      font-size: 0;
      display: none;
      >div{
        display: inline-block;
        width: 50%;
        height: 20/75rem;
        i{
          display: inline-block;
          background-size: 100% !important;
          &.icon-video{
            width: 22/75rem;
            height: 22/75rem;
            background: url("../assets/img/icon/icon_video.png") no-repeat;
          }
          &.icon-play{
            width: 16/75rem;
            height: 20/75rem;
            background: url("../assets/img/icon/icon_play.png") no-repeat;
          }
        }
        span{
          font-size: 20/75rem;
          color: #6d6b6c;
        }
        &.item-info-l{
          padding-right: 20/75rem;
        }
        &.item-info-r{
          padding-left: 20/75rem;
        }
      }
    }
    .room-box{
      width: 100%;
      height: 433/75rem;
      margin-top: 40/75rem;
      background: url("../assets/img/bg/item_bg.png") no-repeat;
      -webkit-background-size: 100%;
      background-size: 100%;
      .room-item-list{
        font-size: 0;
        padding-top: 41/75rem;
        box-sizing: border-box !important;
        li{
          //margin-left: 20/75rem;
          //width: 384/75rem;
          width: 404/75rem;
          padding-left: 20/75rem;
          box-sizing: border-box !important;
          a{
            display: block;
            width: 100%;
            height: 230/75rem;
            img{
              width: 100%;
              height: 100%;
            }
          }
          .room-item-title{
            font-size: 26/75rem;
            line-height: 36/75rem;
            width: 100%;
            color: #ffffff;
            margin-top: 24/75rem;
          }
          .room-item-footer{
            margin-top: 26/75rem;
            text-align: center;
            padding: 0 5/75rem;
            span{
              font-size: 20/75px;
              color: #6d6b6c;
              line-height: 24/75rem;
              //margin-right: 50/75rem;
              i{
                display: inline-block;
                -webkit-background-size: 100% !important;
                background-size: 100% !important;
                &.icon-room{
                  font-size: 14/75rem;
                }
                &.icon-teacher{
                  font-size: 14/75rem;
                }
              }
            }
          }
        }
      }
    }
  }
  .selection-topic{
    width: 100%;
    background-color: #1d1e23;
    margin-top: 48/75rem;
    padding-top: 48/75rem;
    .more{
      margin-right: 30/75rem;
      font-size: 22/75rem;
      color: #6d6b6c;
      &:active{
        color: #fdd947;
      }
    }
    .selection-topic-item-box{
      width: 636/75rem;
      height: 546/75rem;
      margin: 48/75rem auto 0;
      position: relative;
      ul{
        width: 100%;
        li{
          width: 100%;
          a{
            display: block;
            width: 614/75rem;
            margin: 0 auto;
            height: 294/75rem;
            position: relative;
            img{
              width: 100%;
              height: 100%;
            }
            .title-2-box{
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              background-color: rgba(0,0,0,.3);
              h4{
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
          .selection-topic-item-intro{
            width: 555/75rem;
            height: 98/75rem;
            font-size: 20/75rem;
            color: #b3b3b3;
            text-align: center;
            line-height: 36/75rem;
            margin: 27/75rem auto 0;
            span{
              display: inline-block;
              height: 68/75rem;
              overflow: hidden;
            }
          }
          .selection-topic-item-footer{
            margin-top: 30/75rem;
            text-align: center;
            span{
              display: inline-block;
              height: 28/75rem;
              line-height: 28/75rem;
              font-size: 20/75px;
              color: #6d6b6c;
              margin-right: 50/75rem;
              i{
                display: inline-block;
                -webkit-background-size: 100% !important;
                background-size: 100% !important;
                &.icon-hot{
                  width: 24/75rem;
                  height: 28/75rem;
                  background: url("../assets/img/icon/icon_renqi.png") no-repeat;
                }
                &.icon-comment{
                  width: 27/75rem;
                  height: 25/75rem;
                  background: url("../assets/img/icon/icon_comment.png") no-repeat;
                }
              }
            }
          }
        }
      }
      .swiper-pagination{
        position: absolute;
        bottom: 30/75rem;
        left: 0;
        .swiper-pagination-bullet{
          background-color: #6d6b6c;
        }
        .swiper-pagination-bullet-active{
          background-color: #fdd947;
        }
      }
    }
  }
  .teacher-recommend{
    height: 500/75rem;
    width: 100%;
    //background-color: tan;
    .title{
      text-align: left;
      margin-left: 20/75rem;
      .more{
        margin-right: 30/75rem;
        font-size: 22/75rem;
        color: #6d6b6c;
        &:active{
          color: #fdd947;
        }
      }
    }
    ul{
      margin-top: 40/75rem;
      li{
        width: 284/75rem;
        height: 400/75rem;
        background-color: #1d1e23;
        text-align: center;
        padding-top: 20/75rem;
        margin-left: 20/75rem;
        float: left;
        .teacher-img-box{
          width: 83/75rem;
          height: 83/75rem;
          margin: 0 auto;
          img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
        .teacher-name{
          font-size: 26/75rem;
          color: #FFFFFF;
          margin-top: 28/75rem;
        }
        .teacher-fans{
          .icon-fans{
            display: inline-block;
            width: 24/75rem;
            height: 21/75rem;
            margin-top: 8/75rem;
            background: url("../assets/img/icon/icon_fans.png") no-repeat;
            -webkit-background-size:100%;
            background-size: 100%;
          }
          span{
            font-size: 20/75rem;
            color: #6b6d6c;
          }
        }
        .teacher-says{
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
        .gz-teacher{
          width: 120/75rem;
          height: 51/75rem;
          line-height: 51/75rem;
          text-align: center;
          font-size: 24/75rem;
          color: #131419;
          background-color: #fdd947;
          margin: 36/75rem auto 0;
          &.gzed{
            border: 1px solid #fdd947;
            color: #fdd947;
            background-color: #1d1e23;
          }
        }
      }
    }
  }
  .cooperative-agency{
    height: 600/75rem;
    width: 100%;
    margin-top: 70/75rem;
    .cooperative-agency-box{
      ul{
        width: 20rem;
        padding-top: 45/75rem;
        box-sizing: border-box !important;
        li{
          float: left;
          margin-left: 20/75rem;
          box-sizing: border-box !important;
          a{
            display: inline-block;
            width: 284/75rem;
            height: 169/75rem;
            img{
              width: 100%;
              height: 100%;
            }
          }
          .cooperative-agency-name{
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