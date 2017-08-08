<template>
	<div>
		<!--footer-->
		<div class="footer">
		    <div class="content">
		        <ul>
		            <li @click="homepage" class="fl active">
		                <a class="homepage">
		                    <i class="icon-homepage"></i>首页
		                </a>
		            </li>
		            <li @click="courseList" class="fl">
		                <a class="kind">
		                    <i class="icon-kind"></i>课程
		                </a>
		            </li>
		            <li class="fl"></li>
		            <li @click="topicList" class="fl">
		                <a class="topic">
		                    <i class="icon-topic"></i>话题
		                </a>
		            </li>
		            <li @click="userCenter" class="fl">
		                <aclass="person">
		                    <i class="icon-person"></i>个人
		                </a>
		            </li>
		        </ul>
		        <div class="history">
		            <i class="icon-history"></i>
		        </div>
		    </div>
		</div>
	</div>
</template>

<script>

export default {
	data () {
		return {
			a: '123'
		}
	},
	methods: {
		homepage () {
			alert('homepage')
		},
		courseList () {
			alert('courseList')
		},
		topicList () {
			alert('topicList')
		},
		userCenter (){
			alert('userCenter')			
		}
	}
}
</script>

<style lang='less'>
.footer {
  width: 100%;
  height: 136/75rem;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 20;
  .content {
    height: 98/75rem;
    width: 100%;
    margin-top: 38/75rem;
    background-color: #131419;
    ul {
      width: 100%;
      height: 100%;
      li {
      	float: left;
        width: 20%;
        height: 100%;
        a {
          display: block;
          width: 100%;
          height: 100%;
          padding-top: 5/75rem;
          text-align: center;
          font-size: 22/75rem;
          color: #6d6b6c;
          i {
            display: block;
            margin: 0 auto;
            width: 60/75rem;
            height: 60/75rem;
            background-size: 100% !important;
            &.icon-homepage {
              background: url("../assets/img/icon/fooer_icons/icon_homepage.png") no-repeat;
            }
            &.icon-kind {
              background: url("../assets/img/icon/fooer_icons/icon_kind.png") no-repeat;
            }
            &.icon-topic {
              background: url("../assets/img/icon/fooer_icons/icon_topic.png") no-repeat;
            }
            &.icon-person {
              background: url("../assets/img/icon/fooer_icons/icon_person.png") no-repeat;
            }
          }
        }
        &.active {
          a {
            color: #fdd947;
            i {
              &.icon-homepage {
                background: url("../assets/img/icon/fooer_icons/icon_homepage_active.png") no-repeat;
              }
              &.icon-kind {
                background: url("../assets/img/icon/fooer_icons/icon_kind_active.png") no-repeat;
              }
              &.icon-topic {
                background: url("../assets/img/icon/fooer_icons/icon_topic_active.png") no-repeat;
              }
              &.icon-person {
                background: url("../assets/img/icon/fooer_icons/icon_person_active.png") no-repeat;
              }
            }
          }
        }
      }
    }
    .history {
      width: 136/75rem;
      height: 136/75rem;
      border-radius: 50%;
      background-color: #131419;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      .icon-history {
        display: inline-block;
        width: 106/75rem;
        height: 115/75rem;
        background: url("../assets/img/icon/fooer_icons/icon_history.png") no-repeat;
        -webkit-background-size: 100%;
        background-size: 100%;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
      }
    }
  }
}
</style>