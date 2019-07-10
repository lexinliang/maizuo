<template>
    <div class="schedule-list">
      <ul>
        <li v-for="(item,index) in 6" :key="index">
          <div class="time">
            <p>11:00</p>
            <span>13.10分散场</span>
          </div>
          <div class="language">
            <p>{{11}}{{222}}</p>
            <span>122</span>
          </div>
          <div class="film-price">
            <p>￥{{11111/100}}</p>
            <a href="#">购票</a>
          </div>
        </li>
      </ul>
      </div>

</template>


<script>
export default {
    name:"deslist",
    //   async created(){     
    //   let data =await getmovess()   
    //   this.lis = data.data.schedules;
    //   let dat = await getdest()
    //   this.det =dat.data.films
    //   for(var i=0;i<dat.data.films.length;i++){
    //     this.day.push(dat.data.films[i].showDate)
    //   } 
    //   this.text = [this.det[0].name,this.det[0].grade,this.det[0].category,this.det[0].runtime,this.det[0].director]
    //   console.log(this.day.length)
    // },
    //   methods: {
    //     handel(pic,index,item) {
    //       this.$refs.banners.style.background = "url(" + pic + ")";
    //       this.text[0] = item.name;
    //       this.text[1] = item.grade;
    //       this.text[2] = item.category
    //       this.text[3] = item.runtime;
    //       this.text[4] = item.director;
    //       this.bggggg = index;
        
    //     },
    //   },
    //     data() {
    // return {
    //   msg: "深圳凤凰国际影城西乡店",
    //   slect: ["前台兑换", "儿童票", "停车", "3D眼镜"],
    //   host: "深圳宝安区西乡街道宝安大道5010号西部硅谷（后瑞地铁站A出口）B座1楼",
    //   flg:true,
    //   lis:[],
    //   det:[],
    //   bggggg: 0,
    //   text:[],
    //   fixed:false,
    //   day:[]
    // };





}
</script>


<style>
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
    
</style>