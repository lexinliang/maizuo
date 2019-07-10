import Vue from 'vue'
import Router from 'vue-router'


import film from "./film";
import movie from "./movie";
import odds from "./odds";
import mine from "./mine";
import search from "./search";
import details from "./details";
import login from "./login";
// import deslist from "./details/deslist"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'movie'
    },
    film,
    movie,
    odds,
    mine,
    search,
    details,
    login,
    // deslist

  ]
})
