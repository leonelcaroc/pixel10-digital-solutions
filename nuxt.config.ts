export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@bootstrap-vue-next/nuxt', '@pinia/nuxt', '@vueuse/nuxt'],

  router: {
    options: {
      linkActiveClass: 'active'
    }
  },

  routeRules: {
    '/': { redirect: '/dashboards/analytics' }
  },

  app: {
    baseURL: '/rizz_nuxt/'
  },

  ignore: ['pages/**/**/**/components/*'],

  plugins: [
    { src: '~/plugins/apexcharts', mode: 'client' },
    { src: '~/plugins/justgage', mode: 'client' },
    { src: '~/plugins/toastui', mode: 'client' },
    { src: '~/plugins/apexcharts', mode: 'client' },
    { src: '~/plugins/jquery', mode: 'client' },
    { src: '~/plugins/jsvectormap', mode: 'client' },
    { src: '~/plugins/leaflet', mode: 'client' },
    { src: '~/plugins/huebee', mode: 'client' }
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'legacy',
          includePaths: ['node_modules']
        }
      }
    }
  },

  compatibilityDate: '2025-02-02'
})
function defineNuxtConfig(arg0: { devtools: { enabled: boolean; }; modules: string[]; router: { options: { linkActiveClass: string; }; }; routeRules: { '/': { redirect: string; }; }; app: { baseURL: string; }; ignore: string[]; plugins: { src: string; mode: string; }[]; vite: { css: { preprocessorOptions: { scss: { api: string; includePaths: string[]; }; }; }; }; compatibilityDate: string; }) {
  throw new Error("Function not implemented.");
}

