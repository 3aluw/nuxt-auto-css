import { defineNuxtPlugin } from '#app'
import{addRouteMiddleware, useHead,  useRuntimeConfig} from "#app"
import {ModuleOptions} from "../module"

export default defineNuxtPlugin((nuxtApp) => {
  
const options = useRuntimeConfig().public.myModule as ModuleOptions


addRouteMiddleware((to, from) => {
if(!options.folders.length) return;

const checkFolderName = options.folders.find((folderName:string)=>{ return to.path.includes(`/${folderName}/`)  });

    
 if (checkFolderName ) {
 const path = `/style/${checkFolderName}.css`
     useHead({
        title : "sad",
        link: [
          {rel: 'stylesheet', type: 'text/css', href:`${path}` , key:"s"},]
      })
    }
  })

})
