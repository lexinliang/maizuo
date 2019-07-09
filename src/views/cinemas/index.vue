<template>

<div id="list">
        <!-- <HeaderCom title="影院">
            <template v-slot:back="props">
                <div class="back">
                    <span>深圳</span>
                    <i class="iconfont" v-html="props.icon"></i>
                </div>
            </template>
            <template v-slot:search="fdj">
                <div class="search">
                    <router-link class="iconfont iconfangdajing" v-html="fdj.fdj" to="/search"></router-link>
                </div>
            </template>
        </HeaderCom> -->


        <HeaderCom title="影院">
            <template v-slot:left>
              <div class="left"  @click="backmovie()">
                    <span>{{cityname}}</span>
                    <i class="iconfont iconiconfontarrows1"></i>
                </div>
            </template>

            <template v-slot:right>
                <div class="right">
                  <!-- <i class="iconfont iconfangdajing"></i> -->
                    <router-link class="iconfont iconfangdajing"  to="/search" tag="i"></router-link>

               </div>
            </template>
        </HeaderCom>


        <Moviebody/>
        <Moviemask/>
        
</div>
</template>

<script>
import Moviebody from "components/moviebody"
import Moviemask from "components/moviemask"
import { mapState, mapMutations } from "vuex";
export default {
    name:"cinemas",
     computed:{
       
        ...mapState({
          
            cityname:state=>state.citylist.cityName
           
        }),
        
    },
    components:{
        Moviebody,
        Moviemask,
        
    },
    methods:{
         backmovie(){
				this.$router.push({name: 'citylist'});
		},
    }

}
</script>


<style scope>
.list-nav{
    width: 100%;
    height: .49rem;
    background: #fff;
    position: fixed;
    top:.44rem;
    left: 0;
    z-index: 55;
}
.list-nav>ul{
    width:100%;
    height: 100%;
    display: flex;
}
.list-nav>ul>li{
    height: .49rem;
    width:33.333%;
    text-align: center;
    line-height: .49rem;

}
.list-nav>ul>li>span{
    font-size: .14rem;
    color:#191a1b;
}
.list-nav>ul>li>i{
    font-size: .08rem;
    margin: .03rem;
}   
.list-li{
    position: absolute;
    top: 0.93rem;
    left: 0;
} 
</style>