<template>
   <div id="header">
        <slot name="back" :icon="icon"></slot>
        <h1>{{title}}</h1>
        <!-- <router-view></router-view> -->
        <slot name="search" :fdj="fdj" ></slot>
    </div>
</template>


<script>
export default {
    name: "headercom",
    props:{
        title:{
            type:String,
            default:'卖坐电影',
          
        }
    },
    data(){
        return{
              icon:"&#xe625;",
              fdj:"&#xe60d;"
        }
    },
};
</script>


<style scoped>
#header{
    height: .44rem;
    width: 100%;
    background: #fff;
    z-index: 60;
    position: fixed;
    top:0;
    left: 0;
    display: flex;
    justify-content:space-between;
    align-items: center;
}
.search,.back{
    width:.6rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.back>span{
    font-size: .14rem;
}
.back>i{
    margin-left: .05rem;
    font-size: .06rem;
    margin-top:.035rem;
}
#header>h1{
    color:#191a1b;
    font-size: .17rem;
}</style>