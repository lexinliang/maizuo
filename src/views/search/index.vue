<template>
    <div>
        <Loading v-if="cinemaFlag"/>
     <div id="searh" ref="search" v-if="!cinemaFlag">

        <div class="ipt">
            <form>
                <i class="iconfont" v-html="msg"></i>
                <input type="text" placeholder="输入影城名称" @input="handelchange($event)">
                
            </form>
            <div @click="handedelect()">取消</div>
         </div>
         <div class="search-content" ref="show">
             <div class="search-heard">
                 离你最近
             </div>
             <div class="search-list">
                 <ul>
                     <li v-for="(item,index) in lists" :key="index">{{item}}</li>
                 </ul>
             </div>
         </div>
         
        <!-- <Moviebody v-show="flag" :title="val" @handel="handelss"/> -->
         <div class="list-li" v-show="flag">
            <ul>
                <router-link v-for="(item,index) in list" :key="index" tag="li" to="/details" :code="item.cinemaId">
                    
                        <div class="site">
                            <p>{{item.name}}</p>
                            <span>{{item.address}}</span>
                        </div>
                        <div class="price">
                            <p>￥ <span>{{(item.lowPrice)/100}}</span> 起</p>
                            <span>{{ item.Distance < 1 ?'距离未知': parseInt(item.Distance)+'公里'}}</span>
                        </div>
                    
                </router-link>
            </ul>
        </div>
    </div>
    </div>
</template>


<script>
import Moviebody from "components/moviebody"
import {getmove} from "api/cinemas"
import { mapState, mapMutations } from "vuex";
// import {mapState,mapMutations,mapActions,mapGetters} from "vuex";
export default {
    name:"search",
     computed:{
       
        ...mapState({
          
            cityId:state=>state.citylist.cityId
           
        }),
        
    },
    data(){
        return{
            msg:'&#xe60d;',
            lists:['深圳传奇影城后瑞店','深圳凤凰国际影城西乡店','深圳德金国际影城福永店','深圳益田国际影城(福永店)'],
            flag:false,
            lis:[],
            list:[],
            val:'',
            cinemaFlag:true
        }
    },
    async created(){     
        let data =await getmove(this.cityId);   
         if(data){
            this.cinemaFlag = false;
            }else{
                this.cinemaFlag = true;
            }

        this.lis = data.data.cinemas;
    },
    methods:{
        handedelect(){
            this.$router.back()
        },
        handelchange(e){
           this.$refs.show.style.display = 'none'
        
               this.flag = true
               if(e.target.value==''){
                 
                   this.flag = false;
                   this.$refs.show.style.display = 'block'
               }
                 this.val = e.target.value
                 this.list=[]
            //    console.log(this.val,22)
               for(var i = 0  ; i<this.lis.length ; i++){
                  var reg = new RegExp(this.val,'g') 
                 
                  if(reg.test(this.lis[i].address)){
                      this.list.push(this.lis[i])
                  }
            
               }
                console.log(this.list,333)

    
       },

    }
    

}
</script>


<style scope>
body{
    padding:.1rem;
    box-sizing: border-box;
    background: #fff;
}
/* .list-li{
 
} */

 .ipt{
    width:100%;
    height: .49rem;
    display: flex;
    box-sizing: border-box;
    /* padding: .1rem; */
}
.ipt>form{
    width:3rem;
    background-color: #f4f4f4;
    height: .3rem;
    line-height: .3rem;
    box-sizing: border-box;
    padding: 0  .07rem;
}
.ipt>form>input{
    width:2.37rem;
    height: .25rem;
    border:0;
    background: rgba(0,0,0,0);
    margin-left: .07rem;
    margin-bottom:.025rem;
}
.ipt>div{
    /* float: right; */
    height: .3rem;
    line-height: .3rem;
    color:#191a1b;
    font-size: .14rem;
    width: .43rem;
    text-align: center;
}
.search-heard{
    font-size: .13rem;
    color:#bdc0c5;
    margin: .16rem 0;
}
.search-list>ul{
    display: flex;
    flex-wrap: wrap;
}
.search-list>ul>li{
    height: 30px;
    background-color: hsla(0,0%,96%,.6);
    line-height: 14px;
    border-radius: 3px;
    box-sizing: border-box;
    font-size: 13px;
    padding: 8px 12px;
    margin-bottom: 10px;
    margin-right: 10px;
}
 .list-li{
    /* position: relative; */
    /* top:.93rem;
    bottom: .5rem; */
    position: absolute;
    top:0.49rem;
    left: 0;
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