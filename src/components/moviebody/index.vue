<template>
<div id="class">
     <Loading v-if="cinemaFlag"/>

      <div class="list-li"  v-if="!cinemaFlag" >
          <div ref="list">
            <ul>
                
                <li v-for="(item,index) in list" :key="index"  @touchstart="handelclick(item.cinemaId)" @click="hendl" :code="item.cinemaId">
                    
                        <div class="site">
                            <p>{{item.name}}</p>
                            <span>{{item.address}}</span>
                        </div>
                        <div class="price">
                            <p>￥ <span>{{(item.lowPrice)/100}}</span> 起</p>
                            <span>{{ item.Distance   &lt; 1 ?'距离未知': parseInt(item.Distance)+'公里'}}</span>
                        </div>
                    
                </li>
              
            </ul>
              </div>
        </div>
    </div>
</template>

<script>
import {getmove} from "api/movie"
// import { constants } from 'crypto';
import {mapState,mapMutations} from 'vuex';
// import Bactter from "better-scroll";/
// import { all } from 'q';
// import {mapState,mapMutations,mapActions,mapGetters} from "vuex";
export default {
    name:"moviebody",
    props:{
        title:{
            type:String,
            default:''
        }
    },
    async created(){     
        let data =await getmove();
         if(data){
            this.cinemaFlag = false;
            }else{
                this.cinemaFlag = true;
            }   
        this.list = data.data.cinemas;
        this.$emit("handel",data)
        this.data = this.title;
        console.log(data)
        this.handelclick(this.num)
    },
    computed:{
        ...mapState({
            // state=>state.stroes.li
        })
    },
    methods:{
        ...mapMutations({
            handelclick:'stroes/handelclick'
            
        }),
        hendl(index){
            this.$router.push('/details')
            //
        //    this.num = index;
        //     console.log(this.num)
        }
    },
    // mounted(){
    //     this.scroll = new Bactter(this.$refs.list)
    // },
   
    data(){
        return{
            list:[],
            data:"",
            cinemaFlag :true,
            num:''
        }
    },

    
}
</script>

<style>
#class{
    height: 100%;
}
 .list-li{
    position: relative;
    top:.93rem;
    bottom: .5rem;
}
.list-li>div{
    height: 100%;
}
.list-li>div>ul{
    /* height: 100%; */
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
}
.list-li>div>ul>li{
    position: relative;
    box-sizing: border-box;
    background-color: #fff;
    border-bottom: 1px solid #ededed;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 15px;
}

.site{
    width: 2.8rem;
    height: 100%;
    overflow: hidden;
}
.site>p{
    color:#191a1b;
    font-size: .15rem;
    line-height: .22rem;
}
.site>span{
    color: #797d82;
    display: block;
    width: 100%;
    font-size: .12rem;
    margin-top: .05rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    
}
.price{
    width:.7rem;
    height: 100%;
    text-align: right;
}
.price>p{
    color:#ff6700;
    font-size: .1rem;
    line-height: .25rem;
}
.price>p>span{
    font-size: .14rem;

}
.price>span{
    color:#797d82;
    font-size: .11rem;
}
   
</style>