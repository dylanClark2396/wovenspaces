// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  components: true,
  modules: ['@nuxt/ui', '@nuxt/fonts', '@nuxt/icon'],
  ssr: false,
  nitro: {
    preset: 'static'
  },
  app: {
    baseURL: '/wovenspaces/',
  },
  colorMode: {
    preference: 'dark'
  }
})
