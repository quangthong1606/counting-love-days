// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  css: [
    "~/assets/css/css.css",
    "~/assets/css/honeycomb.css",
    "~/assets/css/time_counting.css",
  ],
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.cdnfonts.com/css/vermin-vibes-2",
        },
        {
          rel: "stylesheet",
          href: "https://font.googleapis.com/css2?family-Nunito:wght@400;500;600&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap",
        },
      ],
      script: [
        { type: "text/javascript", src: "js/js.js" },
        {
          type: "text/javascript",
          src: "js/time_counting.js",
        },
        {
          src: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js",
        },
      ],
    },
  },
});
