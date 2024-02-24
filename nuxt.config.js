export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["nuxt-icon", "@nuxt/image", "nuxt-swiper"],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      "defineStore", // import { defineStore } from 'pinia'
      ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  image: {
    provider: "imagekit",
    imagekit: {
      baseURL: "https://ik.imagekit.io/sharp/BigBang/",
      modifiers: {
        format: "webp",
        fit: "cover",
      },
    },
  },
});
