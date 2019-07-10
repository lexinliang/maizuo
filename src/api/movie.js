import http from "utils/http.js"

//https://m.maizuo.com/gateway?cityId=440300&ticketFlag=1&k=6422262
export const getmove = ()=>http("get","/gateway?cityId=440300&ticketFlag=1&k=6422262",{ headers:{'X-Host': 'mall.film-ticket.cinema.list',
'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.0.4","e":"156177921210492605106789"}'}}
  )

  export const getmovess = ()=>http("get","/gateway/?cinemaId=8119&k=1776028",{ headers:{'X-Host': 'mall.film-ticket.film.cinema-show-film',
  'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.0.4","e":"156179258510505490009078"}'}}
  )


  export const getdest = ()=>http("get","/gateway/?cinemaId=8119&k=541453",{ headers:{'X-Host': 'mall.film-ticket.film.cinema-show-film',
  'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.0.4","e":"156179258510505490009078"}'}})

  export const getdesli = (id) =>http('get',"/gateway/?cinemaId="+id+"&k=1094834",{ headers:{'X-Host': 'mall.film-ticket.cinema.info',
  'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.0.4","e":"156179258510505490009078"}'}})