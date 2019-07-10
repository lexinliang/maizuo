import axios from "axios";

const http = axios.create({
    timeout:5000,
    withCredentials:true,
   
})
//156177921210492605106789//mall.film-ticket.cinema.list//156177921210492605106789
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