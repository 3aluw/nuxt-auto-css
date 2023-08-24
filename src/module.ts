import { defineNuxtModule, addPlugin, createResolver, extendPages  } from '@nuxt/kit'
import  {defu}  from 'defu'


// Module options TypeScript interface definition
export interface ModuleOptions {
  folders : string[]
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-css-manager',
    configKey: 'cssManager'
  },
  // Default configuration options of the Nuxt module
  defaults: {
    folders: []
  },
  setup (options, nuxt) {
//create a plugin and provide it with moduleOptions
    const resolver = createResolver(import.meta.url)
    addPlugin(resolver.resolve('./runtime/plugin'))
    nuxt.options.runtimeConfig.public.myModule = defu(nuxt.options.runtimeConfig.public.myModule, {
      folders: options.folders
    })

  }
})
