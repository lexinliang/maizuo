<template>
<div>
     <Loading v-if="cinemaFlag"/>

      <div class="list-li"  v-if="!cinemaFlag">
            <ul>
                <!-- <router-link v-for="(item,index) in list" :key="index" tag="li" @click="savecinemaId(item.cinemaId)" :to="{name:'details',params:{id:item}}" :code="item.cinemaId">
                    
                        <div class="site">
                            <p>{{item.name}}</p>
                            <span>{{item.address}}</span>
                        </div>
                        <div class="price">
                            <p>￥ <span>{{(item.lowPrice)/100}}</span> 起</p>
                            <span>{{ item.Distance   &lt; 1 ?'距离未知': parseInt(item.Distance)+'公里'}}</span>
                        </div>
                    
                </router-link> -->

                 <li v-for="(item,index) in list" :key="index"  @click="savecinemaId(item.cinemaId)">
                    
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
</template>

<script>
import {getmove} from "api/cinemas"

import { mapState, mapMutations } from "vuex";
export default {
    name:"moviebody",
    computed:{
       
        ...mapState({
          
            cityId:state=>state.citylist.cityId
           
        }),
        
    },
    props:{
        title:{
            type:String,
            default:''
        }
    },
    async created(){     
        let data =await getmove(this.cityId);
         if(data){
            this.cinemaFlag = false;
            }else{
                this.cinemaFlag = true;
            }   
        this.list = data.data.cinemas;
        this.$emit("handel",data)
        this.data = this.title;
        
    },
   
    data(){
        return{
            list:[],
            data:"",
            cinemaFlag :true
        }
    },
    methods:{
         ...mapMutations({
            savecinemaId: "citylist/savecinemaId"
            })
    }

    
}
</script>

<style>
 .list-li{
    position: relative;
    top:.93rem;
    bottom: .5rem;
}
.list-li>ul{
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
}
.list-li>ul>li{
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