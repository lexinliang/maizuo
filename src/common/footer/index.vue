<template>
    <div class="footer">
           <ul>
            <router-link v-for="(item,index) in teBars" :key="index"  :to="item.path" tag="li">
                <i class="iconfont" v-html="item.icon"></i>
                <span>{{item.title}}</span>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name:"tabBar",

    data(){
        return{
            teBars:[
                {icon:'&#xe679;',title:'电影',path:"/film"},
                {icon:'&#xe61d;',title:'影院',path:"/movie"},
                {icon:'&#xe64a;',title:'特惠',path:"/odds"},
                {icon:'&#xe60e;',title:'我的',path:"/mine"},
               ],
            
        }
    }
}
</script>


<style>
.footer{
    position:fixed;
    background: #fff;
    left: 0;
    bottom: 0;
    border-top:.005rem solid #ccc;
    width:100%;
    height: .5rem;
    z-index: 50;
}
.footer ul{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content:space-around;
    align-content: center;
}
.footer>ul>li{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.footer>ul>.router-link-active{
    color:#ff5f16;
}
    
</style>