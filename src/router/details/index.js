export default{
    path:"/details",
    component:()=>import("views/details"),
    name:"details",
    props:true,
    children:[
        {path:'deslist',
        component:()=>import("views/details/deslist"),
        name:"deslist"
        }
    ],
    meta:{
        flag:false,
    }
}