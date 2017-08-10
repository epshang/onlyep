<template>
	<div class="header-slide">
		<div class="banner-box">
			<div class="slide-item">
				<img src="../assets/img/banner/banner.jpg" alt="然也直播">
			</div>
			<div class="slide-item">
				<img src="../assets/img/banner/banner1.jpg" alt="然也直播">
			</div>
		</div>
		<div class="swiper-pagination"></div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			a: '1'
		}
	}
}
</script>
<<style lang="less" scoped>
.header-slide {
  position: relative;
  width: 100%;
  height: 420/75rem;
  .banner-box {
	  width: 100%;
	  height: 100%;
    .slide-item {
		width: 100%;
		height: 100%;
		position: absolute;
		img {
			width: 100%;
		}
    }
  }
  .swiper-pagination {
    bottom: 35/75rem !important;
    .swiper-pagination-bullet {
      width: 50/75rem;
      height: 3/75rem;
      border-radius: 0;
      margin: 0 15/75rem;
      opacity: 1;
      background: url("../assets/img/icon/bullet.png") no-repeat;
    }
    .swiper-pagination-bullet-active {
      background: url("../assets/img/icon/bullet_active.png") no-repeat;
    }
  }
  .search-bar {
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
</style>

