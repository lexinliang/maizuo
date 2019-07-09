
import router from 'router'
const state = {
    cityName:sessionStorage.getItem('cityName')||'深圳',
    cityId:sessionStorage.getItem('cityId')||440300,
    filmId:sessionStorage.getItem('filmId')||4703,
    goodsid:'zb5MkOFQ',
    cinemaId:sessionStorage.getItem('cinemaId')||6486
}

const mutations = {
    citytext(state,$event){
       let text=$event.currentTarget.innerText;//城市名称
        let id = $event.currentTarget.getAttribute("id")//城市ID
        console.log(text,id);
        state.cityName = text;
        state.cityId = id;
        sessionStorage.setItem('cityName',text);
        sessionStorage.setItem('cityId',id);
        router.back();
    },
    backmovie(state,filmId){
       console.log(filmId)
         state.filmId = filmId;
         sessionStorage.setItem('filmId',filmId);
      
         router.push({name: 'moviedes'});
     },
     getgoodslist(state,goodsid){
        console.log(goodsid)
          state.goodsid = goodsid;
       
          router.push({name: 'goodslist'});
      },

      savecinemaId(state,cinemaId){
        state.cinemaId = cinemaId;
        sessionStorage.setItem('cinemaId',cinemaId);
        router.push({name: 'details'});
        console.log(cinemaId)
      }
}

export default{
    state,
    mutations,
    namespaced:true
}