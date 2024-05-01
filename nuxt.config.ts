export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-icon', ['@nuxtjs/google-fonts', {
    families: {
      'Lobster Two': [100, 200, 300, 400, 500, 600, 700],
      Inter: [100, 200, 300, 400, 500, 600, 700]
    }
  }], '@formkit/auto-animate/nuxt', '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt', '@nuxt/image', '@nuxt/ui', '@vueuse/nuxt', 'v-wave/nuxt', '@sidebase/nuxt-auth', '@nuxtjs/seo', 'nuxt-aos', "@nuxtjs/tailwindcss"],
  css: ['animate.css/animate.min.css'],
  app: {
    head: {
      titleTemplate: '%s %separator %site.name',
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '76x76',
          href: '/apple-touch-icon.png'
        },
        {
          rel: 'icon',
          sizes: '32x32',
          type: 'image/png',
          href: '/favicon-32x32.png'
        },
        {
          rel: 'icon',
          sizes: '16x16',
          type: 'image/png',
          href: '/favicon-16x16.png'
        },
        {
          rel: 'manifest',
          href: '/site.webmanifest'
        },
        {
          rel: 'mask-icon',
          href: '/safari-pinned-tab.svg',
          color: '#5bbad5'
        }
      ],
      meta: [
        {
          name: 'msapplication-TileColor',
          content: '#da532c'
        },
        {
          name: 'theme-color',
          content: '#ffffff'
        }
      ]
    }
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },
  robots: {
    disallow: ['/']
  },
  colorMode: {
    preference: 'light'
  },
  typescript: {
    shim: false
  },
  sitemap: {
    enabled: false
  },
  features: {
    devLogs: false
  },
  tailwindcss: {
    quiet: true
  }
})
