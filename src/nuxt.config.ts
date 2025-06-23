// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/ui','@nuxt/fonts', '@nuxt/icon'],
  components: true,
  fonts: {
    families: [
      { name: 'Inter', provider: 'google' },
      { name: 'Lora', provider: 'google' }
    ]
  },
  ssr: false,
  nitro: {
    preset: 'static'
  },
  app: {
    baseURL: '/wovenspaces/',
  },
  colorMode: {
    preference: 'light'
  }
})
