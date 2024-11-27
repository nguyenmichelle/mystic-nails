// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
  ssr: false,
  googleFonts: {
    families: {
      Nunito: [400, 500, 700], // Versatile sans-serif
      Poppins: [300, 400, 600], // Stylish geometric sans-serif
      Lora: [400, 700], // Optional serif for headings
    },
    display: 'swap', // This makes the font swap smoothly when loaded
  }
})
