<template>
<div>
   <Loading v-if="cinemaFlag"/>

    <div id="film"  v-if="!cinemaFlag">
    <div class="film-header" v-if="flg">
      <router-link class="iconfont iconiconfontjiantou1" to="/movie" tag="i" ></router-link>
    </div>
       <Header :title="msg" v-if="!flg">
            <template v-slot:left>
              <div class="left" >
                    
                    <router-link class="iconfont iconiconfontjiantou1" to="/movie" tag="i"></router-link>
                </div>
            </template>

            <template v-slot:right>
                <div class="right">
               
               </div>
            </template>
        </Header>

    <div class="film-title">
      <p>{{fix.name}}</p>
    </div>
    <div class="film-box">
    <div class="film-top">
      <div class="film-dex">
        <ul>
          <li v-for="(item,index) in fix.services?fix.services:''" :key="index">{{item.name?item.name:''}}</li>
          <i class="iconfont iconyoujiantou"></i>
        </ul>
      </div>
      <div class="film-dw">
        <i class="iconfont icondingwei"></i>
        <p>{{fix.address}}</p>
        <i class="iconfont iconweibiaoti-"></i>
      </div>
    </div>
    <div class="film-lb" ref="banners">
      <div
        data-v-0134b84b
        class="swiper-container swiper-container-initialized swiper-container-horizontal"
        ref="banner"
      >
        <div
          class="swiper-wrapper"
          style="transform: translate3d(-2.98125rem, 0rem, 0rem); transition-duration: 0ms; height:1.80rem;"
        >
  
                <img
                  data-v-0134b84b
                  v-for="(item,index) in det"
                  :key="index"
                   class="swiper-slide"
                  :src="item.poster"
                  style="width: 1.1rem; margin-right:.16rem;"
                  @click="handel(item.poster,index,item)"
                  ref="img"
                  :class="bggggg==index?'img':''"
                />
        </div>
        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
      </div>
    </div>
    <div :class="fixed==true?'film-wrap':''">
    <div class="caption">
      <h3>
        <span>{{text[0]}}:</span>
        <!-- <span>{{text[1]}}</span> -->
        <span>{{text[1]}}</span>
        <span>分</span>
      </h3>
      <p>{{text[2]}} | {{text[3]}} | {{text[4]}}</p>
    </div>
    <div class="date-list">
      <div class="box">
        <ul>
          <router-link v-for="(item,index) in day[bggggg]" :key="index" tag="li" :to="host[index]">{{timestampToTime(item).M+'月'+timestampToTime(item).D+'日'}}</router-link>
       
        </ul>
      </div>
    </div>
    </div>
    <!-- <Deslist/> -->
   <router-view></router-view>
    <div class="schedule-list">
       
      <ul>
        <li v-for="(item,index) in lis" :key="index">
          <div class="time">
            <p>{{timestampToTime(item.showAt).h +':'+ timestampToTime(item.showAt).m}}</p>
            <span>{{timestampToTime(item.endAt).h+':'+timestampToTime(item.endAt).m}}分散场</span>
          </div>
          <div class="language">
            <p>{{item.filmLanguage}}{{item.imagery}}</p>
            <span>{{item.hallName}}</span>
          </div>
          <div class="film-price">
            <p>￥{{item.salePrice/100}}</p>
            <a href="#">购票</a>
          </div>
        </li>
      </ul>
      </div>
      
    </div>
  </div>
</div>
</template>


<script>
import "swiper/dist/css/swiper.css";
import Swiper from "swiper";
import {getmovess} from "api/movie"
import {getdest} from "api/movie"
import Header from "common/header"
import {getdesli} from "api/movie"
import {mapState,mapGetters} from 'vuex'
// import Deslist from "./deslist"
export default {
  components:{
      
        Header,
        // Deslist
    },
  // props:['id'],
  data() {
    return {
      msg: "深圳凤凰国际影城西乡店",
      // slect: ["前台兑换", "儿童票", "停车", "3D眼镜"],
      host: ["/details/deslist","/details/deslist1","/details/deslist2","/details/deslist3"],
      flg:true,
      lis:[],
      det:[],
      bggggg: 0,
      text:[],
      fixed:false,
      day:[],
      cinemaFlag:true,
      fix:{}
      // num:''
    };
  },
    computed: {
      ...mapGetters({
        num:state =>state.stroes.li
      }),
    },
  methods: {
    
    handel(pic,index,item) {
      this.$refs.banners.style.background = "url(" + pic + ")";
      this.text[0] = item.name;
      this.text[1] = item.grade;
      this.text[2] = item.category
      this.text[3] = item.runtime;
      this.text[4] = item.director;
      this.bggggg = index;
      
      console.log(this.num)
    
    },

  
    handleScroll () {
          var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
          if(scrollTop>49){
            this.flg = false
          }else{
            this.flg = true
          }
           if(scrollTop>300){
            this.fixed = true
          }else{
            this.fixed = false
          }
          console.log(this.num)
        }


  },
  async activated(){   
   
      let data =await getmovess() ;
       if(data){
            this.cinemaFlag = false;
            }else{
                this.cinemaFlag = true;
            } 
      this.lis = data.data.schedules;
      let dat = await getdest()
      this.det =dat.data.films
      for(var i=0;i<dat.data.films.length;i++){
        this.day.push(dat.data.films[i].showDate)
      } 
      this.text = [this.det[0].name,this.det[0].grade,this.det[0].category,this.det[0].runtime,this.det[0].director]
      console.log(data,'weee')
     
      console.log(this.num)
      let ddd = await getdesli(this.num)
      console.log(ddd,6969696)
      this.fix = ddd.data.cinema;
      console.log(this.fix,355565)
    },
  mounted() {
    new Swiper(this.$refs.banner, {
      slideToClickedSlide: true,
      centeredSlides: true,
      slidesPerView: "auto",
      observeParents:true,
      observer:true,
  
    });

    //监听滚动事件
    window.addEventListener('scroll', this.handleScroll)

  }
};
</script>


<style scoped>

.film-wrap {
    position: fixed;
    top: .44rem;
    width: 100%;
    background: #fff;
}


.box::after,.caption::after{
  content: " ";
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 1px;
    border-bottom: 1px solid #ededed;
    color: #ededed;
    -webkit-transform-origin: 0 100%;
    -ms-transform-origin: 0 100%;
    transform-origin: 0 100%;
    -webkit-transform: scaleY(.5);
    -ms-transform: scaleY(.5);
    transform: scaleY(.5);
}

.film-header {
  width: 100%;
  height: 0.44rem;
  line-height: 0.44rem;
  background: #fff;
  z-index: 222;
  position: fixed;
  top:0;
  left: 0;
}
.film-header > i {
  font-size: 0.25rem;
}
.film-title {
  width: 100%;
   background: #fff;
  position: relative;
  top: .44rem;
  left: 0;
  line-height: 0.44rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.17rem;
}
.film-box{
    position: relative;
    top:.44rem;
    left: 0;
     background: #fff;
}
.film-dex {
  width: 100%;
  height: 0.35rem;
}
.film-dex > ul {
  width: 100%;
  height: 100%;
  padding: 0.05rem 0 0.15rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
}
.film-dex > ul > li {
  padding: 0.02rem 0.06rem;
  border: 0.01rem solid #ff6700;
  font-size: 0.06rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ff6700;
  margin-right: 0.05rem;
  border-radius: 0.03rem;
}
.film-dex > ul > i {
  color: #ff6700;
  margin-top: -0.05rem;
}
.film-dw {
  height: 0.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.film-dw > p {
  width: 2.77rem;
  padding: 0 0.1rem;
  box-sizing: border-box;
  height: 0.2rem;
  overflow: hidden;
  white-space: nowrap;
  line-height: 0.2rem;
  text-overflow: ellipsis;
}
/* .swiper-container{
} */
.film-lb {
  position: relative;
  margin-bottom: 0.1rem;
  background: url(https://pic.maizuo.com/usr/movie/8c0eb501a6671e333618f4aaed1ad3ea.jpg)
    no-repeat;
  background-size: cover;
}
.swiper-container {
  background: rgba(255, 255, 255, 0.8);
}

.img-wrap img {
  width: 1rem;
  height: 1.4rem;
  margin-right: 0.16rem;
}

.img-wrap .img {
  width: 1rem;
  height: 1.6rem;
  margin-right: 0.16rem;
}
.swiper-wrapper .swiper-slide {
  top: 0.3rem;
}
.swiper-container .swiper-wrapper .solider {
  top: 0.1rem;
}
.caption {
  height: 0.8rem;
  padding: 0.1rem 0;
  box-sizing: border-box;
  width: 100%;
  text-align: center;
  position: relative;
}
.caption > h3 {
  margin-bottom: 0.1rem;
  height: 0.2rem;
}
.caption > h3 > span {
  margin-right: 0.05rem;
  color: #191a1b;
  font-size: 0.15rem;
  line-height: 0.18rem;
}
.caption > h3 > span:nth-child(2) {
  color: #ff6700;
  font-style: italic;
}
.caption > p {
  padding: 0 12%;
  box-sizing: border-box;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  height: 0.18rem;
  color: #797d82;
  font-size: 0.13rem;
}
.date-list {
  width: 3.75rem;
  height: 0.49rem;
  overflow-y: hidden;
  overflow-x: auto;
}
/* .box {
  width: 7rem;
  height: 0.49rem;
  padding: 0.16rem 0;
  box-sizing: border-box;
} */
.box > ul {
  float: left;
  display: flex;
  overflow-y: hidden;
  overflow-x: auto;
}
.box > ul > li {
  height: 0.16rem;
  padding: .2rem;
  box-sizing: border-box;
  line-height: 0.16rem;
  float: left;
  /* margin: 0 0.2rem; */
}
.schedule-list{
  height: 100%;
  position: absolute;
  top:4rem;
}
.schedule-list > ul > li {
  width: 100%;
  height: 0.74rem;
  padding: 0.15rem;
   background: #fff;
  box-sizing: border-box;
  border-bottom: .01rem solid #ededed;
  float: left;
}
.schedule-list > ul > li > div {
  float: left;
}
.time {
  width: 1rem;
  height: 100%;
}
.time > p {
  font-size: 0.15rem;
  color: #191a1b;
}
.time > span {
  font-size: 0.13rem;
  color: #797d82;
  margin-top: 0.02rem;
}
.language {
  width: 1.3rem;
  height: 100%;
}
.language > p {
  font-size: 0.15rem;
  color: #191a1b;
}
.language > span {
  font-size: 0.13rem;
  color: #797d82;
  margin-top: 0.02rem;
}
.film-price{
    width:1.1rem;
    height: 100%;

    /* float: left; */
}
.film-price>p{
    display: block;
    height: .46rem;
    line-height:.46rem;
    float: left;
    font-size: .2rem;
    color: #ff5f16;
}
.film-price>a{
    display: inline-block;
    width:.5rem;
    height: .25rem;
    border:.01rem solid #ff5f16;
    text-align: center;
    line-height: .25rem;
    border-radius: .03rem;
    margin:.1rem 0 0 0.1rem;

}
.router-link-active{
  color:#ff5f16;
  border-bottom: 1px solid #ff5f16;
  box-sizing: border-box;
}    
</style>