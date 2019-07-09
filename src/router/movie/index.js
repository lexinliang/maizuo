export default{
    path:"/movie",
    component:()=>import("views/movie"),
    name:"movie",
    meta:{
        flag:true
    },
  
//    redirect:"/movie/movieNow",
//     children:[
//         {
//             path:"movieNow",
//             component:()=>("components/movie/movieNow.vue"),
//             name:"movieNow"
//         },
//         {
//             path:"movieWill",
//             component:()=>("components/movie/movieWill.vue"),
//             name:"movieWill"
//         }
//     ]
}