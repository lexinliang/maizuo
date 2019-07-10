// import { stringify } from "querystring";

const state = {
    li:'8119'
}

const getters = {

}

const mutations = {
    handelclick(state,data){
       state.li = data
        console.log(state.li,223334)
        // if(sessionStorage.getItem('id')&&sessionStorage.getItem('id')!=data){
        //     console.log('我是')
        //     // var str = JSON.stringify('id':li)
        // //    sessionStorage.setItem('id',data)
        //     // sessionStorage.setItem('id',data)
        // }else{
        //     console.log(333698522)
        //     // state.li = sessionStorage.getItem('id')
        // //   sessionStorage.setItem('id',data)
        // }
        
    }
}

const actions = {
   
}


export default{
    state,
    getters,
    mutations,
    actions,
    namespaced:true
}