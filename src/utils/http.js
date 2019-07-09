import axios from "axios";

const http = axios.create({
    timeout:5000,
    withCredentials:true,
    // headers: {'X-Host': 'mall.film-ticket.film.list',
    // 'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.0.4","e":"156177921210492605106789"}'}
})

http.interceptors.request.use((config)=>{
    if(config.method == "get"){
        //config.params = {...config.data}
    }else if(config.method =="post"){
        config.headers["content-type"] = "application/x-www-form-urlencoded";
    }

    return config
},(err)=>{
    return Promise.reject(err);
})


http.interceptors.response.use((res)=>{
    if(res.status == 200){
        return res.data;
    }
},(err)=>{
    return Promise.reject(err);
})


export default (method,url,headers,data={})=>{
    if(method == "get"){
       
        return http.get(url,headers,{
            params:data
        })
    }else if(method == "post"){
        return http.post(url,data);
    }
}