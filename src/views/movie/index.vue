<template>
  <div class="home">
    <!-- 头部 -->
        <div class="city-fixed"  @click="backmovie()">
          <span>{{cityname}}</span>
          <i class="iconfont iconiconfontarrows1" style="font-size: 10px;  margin-left:4px;"></i>
        </div>

        <Header title="电影" v-show="!flg">
            <template v-slot:left>
              <div class="left" @click="backmovie()">
                    <span>{{cityname}}</span>
                    <i class="iconfont iconiconfontarrows1"></i>
                </div>
            </template>

            <template v-slot:right>
                <div class="right">
          
               </div>
            </template>
        </Header>
  
    
    <!-- 轮播图 -->
    <movieBanner/>

    <!-- 即将上映 -->
      <div :class="[('nav-bas'),(flg==false?'tab-wrap':'')]">
            <div class="title01">
              <!-- <router-link :class="show?'active':''" @click="clickF(true)" to="/movie/movienows" tag="p">正在热映</router-link> -->
                <p :class="show?'active':''" @click="clickF(true)" >正在热映</p>
            </div>
            <div class="title01">
               <!-- <router-link :class="!show?'active':''" @click="clickF(false)" to="/movie/moviewills" tag="p">即将上映</router-link> -->
                <p :class="!show?'active':''" @click="clickF(false)" >即将上映</p>
            </div>
      </div>

      <!-- 电影列表之正在热映 -->
      <movieNow v-if="show" />
      <!-- 电影列表之即将上映 -->
     <movieWill v-if="!show"/>
     <router-view/>
  </div>
</template>


<script>
// window.addEventListener('scroll',function()
// { var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; 
// if(scrollTop>210){  this.active = false ;console.log(this.active,active)  } },true)

import "swiper/dist/css/swiper.css";
import Swiper from "swiper";
import movieBanner from "components/movie/movieBanner"
import movieNow from "components/movie/movieNow"
import movieWill from "components/movie/movieWill"
import Header from "common/header"
import{mapState,mapMutations} from "vuex";
export default {
  components:{
       movieBanner,
        movieNow,
        movieWill,
        Header
    },
     computed:{
       
        ...mapState({
          
            cityname:state=>state.citylist.cityName
           
        }),
        
    },
  data(){
    return{
      show:true,//正在热映
      active:true,
       flg:true//标题
    }
    
  },
  methods:{
    clickF(ret){
      this.show = ret;
    
    },
     backmovie(){
				this.$router.push({name: 'citylist'});
		},
    handleScroll () {
          var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
          if(scrollTop>210){
            this.flg = false
          }else{
            this.flg = true
          }
        }

  },
  mounted() {
    new Swiper(".swiper-container", {
      observer:true,
      autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
      },
      loop: true,
      pagination: {
        el: ".swiper-pagination"
      }
    });
    //监听滚动事件
    window.addEventListener('scroll', this.handleScroll)
  }
};
</script>


<style  scoped>
/* 分页器 */

.filxed{
     background: #fff;
 }

.city-fixed {
  position: absolute;
  top: 0.08rem;
  left: 0.07rem;
  color: #fff;
  z-index: 10;
  font-size: 0.13rem;
  background: rgba(0, 0, 0, 0.2);
  height: 0.3rem;
  line-height: 0.3rem;
  border-radius: 0.15rem;
  text-align: center;
  padding: 0 4px;
  display: flex;
  justify-content: center;
  align-items: center;
   width: 0.6rem;
}
.city-fixed span{
  
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* 即将上演 */
.nav-bas.tab-wrap {
    position: fixed;
    top: .44rem;
}


.nav-bas {
    position: relative;
    z-index: 100;
    width: 100%;
    height: 100%;
    height:.49rem;
    overflow-x: hidden;
    background: #fff;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    display: flex;
    justify-content:center;
    align-items: center;
    cursor: pointer;
}
.nav-bas .title01{
  width: 50%;
  height: .49rem;
  display: flex;
  justify-content:center;
  align-items: center;
}
.nav-bas .title01 p{
  line-height: .47rem;
  color: #191a1b;
  font-size: .16rem;
}
.nav-bas .title01 .active{
  color: #ff5f16;
  border-bottom: 2px#ff5f16 solid;
}


</style>