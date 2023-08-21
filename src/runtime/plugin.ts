import { defineNuxtPlugin } from '#app'
import{addRouteMiddleware, useHead,  useRuntimeConfig} from "#app"


export default defineNuxtPlugin((nuxtApp) => {
  console.log('Plugin injected by my-module!');
  console.log(nuxtApp);
  nuxtApp.hook('app:mounted',(app)=>{console.log(app);})
  const options = useRuntimeConfig().public.myModule;
  console.log( "options",options)
  /*addRouteMiddleware((to, from) => {
    if (to.path === '/test/one') {
      console.log("head", useHead({
        title : "sad"
      }))
    }
  })*/

})
