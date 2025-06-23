// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui','@nuxt/fonts', '@nuxt/icon'],
  css: ['~/assets/css/main.css'],
  components: true,
  fonts: {
    families: [
      {
        name: 'DM Sans',
        weights: ['400', '500', '700']
      }
    ]
  },
  ssr: false,
  nitro: {
    preset: 'static'
  },
  app: {
    baseURL: '/wovenspaces/',
  },
})
