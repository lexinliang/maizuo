<template>
<div>
            <div class="list-nav">
                <ul>
                    <li v-for="(item,index) in navs" :key="index" @click="hadelclick(index)">
                        <span>{{item.title}}</span>
                        <i class="iconfont" v-html="item.iconfont"></i>
                        </li>
                </ul>
            </div>
            <div class="list-mask" v-show="falg">
                    <div class="list-item1" v-if="ret[0]">
                        <ul>
                            <li v-for="(item,indexs) in list" :key="indexs">{{item}}</li>
                        </ul>
                    </div>
                    <div class="list-item2" v-if="ret[1]">
                        <ul>
                            <li>App订票</li>
                            <li>前台兑换</li>
                        </ul>
                    </div>
                    <div class="list-item3" v-if="ret[2]">
                        <ul>
                            <li>最近去过</li>
                            <li>离我最近</li>
                        </ul>
                
                    </div>
        </div>
</div>
</template>


<script>
import {getmove} from "api/cinemas";

import { mapState, mapMutations } from "vuex";
export default {
    name:"moviemask",
     computed:{
       
        ...mapState({
          
            cityId:state=>state.citylist.cityId
           
        }),
        
    },
        data(){
        return{
             navs:[
                {
                    title:'全城',
                    iconfont:'&#xe625;'
                },
                                {
                    title:'APP订票',
                    iconfont:'&#xe625;'
                },
                                {
                    title:'最近去过',
                    iconfont:'&#xe625;'
                }
            ],
            falg:false,
            ret:[0,0,0],
            case:'0',
            list:[],
            data:"",
        }
    },
     async created(){     
        let data =await getmove(this.cityId);
         if(data){
            this.cinemaFlag = false;
            }else{
                this.cinemaFlag = true;
            }   
        //this.list = data.data.cinemas;
        console.log(data.data.cinemas.length)
        for(var i=0;i<data.data.cinemas.length;i++){
            if(this.list.indexOf(data.data.cinemas[i].districtName)==-1){
                this.list.push(data.data.cinemas[i].districtName)
            }
        }
         console.log( this.list)
        this.$emit("handel",data)
        this.data = this.title;
        
    },
    methods:{
        hadelclick(index){
    
                this.falg = true
              for(var i=0;i<this.ret.length;i++){
                  if(i==index){
                      console.log(111);
                    this.ret[index] =  !this.ret[index]
                     this.$forceUpdate()
                     if( !this.ret[index]){
                          this.falg = false
                     }else{
                         this.falg = true
                     }
                  }else{
                       console.log(222);
                      this.ret[i] =false ;
                         this.$forceUpdate()
                      }


              }
        },
        // handelchilci(indexs){
        //     alert('11')
        //     // this.case = indexs
        // }
    }

}
</script>


<style>
 .list-mask{
    height: 100%;
    width: 100%;
    position: fixed;
    top:0;
    left: 0;
    background: rgba(0, 0, 0, .5)
}
.list-item1{
    width: 100%;
    min-height: 1.45rem;
    position: fixed;
    top: .93rem;
    left: 0;
}
.list-item1>ul{
    padding-left:.1rem;
    box-sizing: border-box;
     background: #fff;
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  
}
.list-item1>ul>li{
    width:.79rem;
    height: .3rem;
    border-radius: .03rem;
    border:.01rem solid rgba(210,214,220,.5);
    line-height: .3rem;
    text-align: center;
    color:#797d82;
    margin-bottom: .15rem;
    margin-right: .1rem;
}
.list-item2,.list-item3{
    width: 100%;
    background:#fff;
    min-height: 1.45rem;
    position: fixed;
    top: .93rem;
    left: 0;
   
}
.list-item2>ul,.list-item3>ul{
    height: 100%;
    width: 100%;
}
.list-item2>ul>li,.list-item3>ul>li{
    height: .44rem;
    padding: 0 .15rem;
    width: 100%;
    line-height: .44rem;
}
.list-item1>ul>.active,.list-item2>ul>.active,.list-item3>ul>.active{
    color:#ff6700;
}
   
</style>