<template>
    <!-- 轮播图 -->
    <div class="swiper-container">
      <div class="swiper-wrapper img-list">
        
        <div class="swiper-slide" v-for="(item,index) in bannerList" :key="index">
          <img :src="item.imgUrl"/>
          
        </div>

        <!-- <div class="swiper-slide" >
          <img src="https://static.maizuo.com/v5/upload/ec37728b66e7f4bcfa0aa31b3d3afa5f.jpg?x-oss-process=image/quality,Q_70"/>
          
        </div>
        <div class="swiper-slide" >
          <img src="https://static.maizuo.com/v5/upload/11383fd13de7b161c70b20c9c8cea9fd.jpg?x-oss-process=image/quality,Q_70"/>
          
        </div>
        <div class="swiper-slide" >
          <img src="https://static.maizuo.com/v5/upload/11383fd13de7b161c70b20c9c8cea9fd.jpg?x-oss-process=image/quality,Q_70"/>
          
        </div> -->
        
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination mint-swipe-indicators"></div>
    </div>
</template>


<script>
import {getMoviebanner} from "api/movie"
import { mapState, mapMutations } from "vuex";
export default {
     name:"movieBanner",
      computed:{
       
        ...mapState({
          
            cityId:state=>state.citylist.cityId
           
        }),
        
    },
    async created(){
       let data = await getMoviebanner(this.cityId);
       this.bannerList = data.data;
      
     },
      data(){
         return{
           bannerList:[],
          
         }
       },
       
}
</script>

<style scoped>
.img-list img {
  width: 3.75rem;
  height: 2.1rem;
}

</style>
