import { defineNuxtModule, addPlugin, createResolver, extendPages  } from '@nuxt/kit'
import { defu } from 'defu'
import {useRuntimeConfig} from "#app"
// Module options TypeScript interface definition
export interface ModuleOptions {
  folders : string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'my-module',
    configKey: 'myModule'
  },
  // Default configuration options of the Nuxt module
  defaults: {
    folders: "test"
  },
  setup (options, nuxt) {


    const resolver = createResolver(import.meta.url)

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))
    nuxt.options.runtimeConfig.public.myModule = defu([nuxt.options.runtimeConfig.public.myModule], {
      folders: options.folders
    })
    
    nuxt.hook('pages:extend', pages => {

    })
 
   
    

  }
})
