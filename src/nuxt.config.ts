// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxt/icon','@nuxt/ui'],
  ssr: false,
  nitro: {
    preset: 'static'
  },
  app: {
    baseURL: '/wovenspaces/',
  },
})
