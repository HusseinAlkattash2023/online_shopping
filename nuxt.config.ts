// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss','@pinia/nuxt'],
  app: {
    head: {
      title: "Nuxt Dojo",
      meta: [{ name: "description", content: "Everything about Nuxt 3" }],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Material+Icons",
        },
      ],
    },
  },

  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY,
  },
});
