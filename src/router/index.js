import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import movie from "./movie"
import active from "./active"
import moviedes from "./moviedes"
import goodslist from "./goodslist"
import citylist from "./citylist"


import cinemas from "./cinemas"
import mine from "./mine"
import details from "./details";
import login from "./login";
import search from "./search";

export default new Router({
  routes: [
    {
      path:'/',
      redirect:"/movie"
    },
    movie,
    cinemas,
    active,
    mine,
    moviedes,
    goodslist,
    citylist,
    details,
    login,
    search
  ]
})
