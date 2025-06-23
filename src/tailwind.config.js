const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './app.vue',
    './nuxt.config.ts'
  ],
  theme: {
    extend: {
      colors: {
        wovenPrimary: '#4F46E5',
        wovenPrimaryLight: '#6366F1',
        wovenSecondary: '#A78B6F',
        wovenText: '#111827',
        wovenMuted: '#6B7280',
        wovenAccent: '#F97372',
        wovenBgLight: '#F9FAFB',
        wovenBgDark: '#F5F5F4'
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        serif: ['Lora', ...defaultTheme.fontFamily.serif]
      }
    }
  }
}
