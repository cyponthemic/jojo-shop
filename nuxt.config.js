export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: !process.env.PREVIEW_ENABLED,
  server: {
    port: 3000,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'JOJO Tomato Sauce',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'A family tradition now ready to share with the world. Small batch and handmade in Melbourne. No preservatives, no additives, no nasties. Only good things inside. A sauce for the whole community to be shared and loved time & time again.',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Playfair+Display&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [`@/assets/css/global.css`],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    './plugins/price.js',
    './plugins/settings.js',
    './plugins/vuex-persist.js',
    { src: './plugins/aos.js', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/composition-api/module'
  ],

  googleFonts: {
    families: {
      Inconsolata: [200, 300, 400, 500],
    },
  },

  router: {
    middleware: ['storyblok']
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    [
      'nuxt-rfg-icon',
      {
        static: true,
        staticPath: '~static/favicons/',
        masterPicture: '~static/favicons/mstile-150x150.png',
        rfg: {
          favicon_generation: {
            api_key: '3821b6dfeb4776bb06dfbd644f56ab1655d15247',
            master_picture: {
              type: 'inline',
              content:
                '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',
            },
            favicon_design: {
              ios: {
                picture_aspect: 'background_and_margin',
                background_color: '#ffffff',
                margin: '14%',
                assets: {
                  ios6_and_prior_icons: false,
                  ios7_and_later_icons: false,
                  precomposed_icons: false,
                  declare_only_default_icon: true,
                },
              },
              desktop_browser: {
                design: 'raw',
              },
              windows: {
                picture_aspect: 'no_change',
                background_color: '#da532c',
                on_conflict: 'override',
                assets: {
                  windows_80_ie_10_tile: false,
                  windows_10_ie_11_edge_tiles: {
                    small: false,
                    medium: true,
                    big: false,
                    rectangle: false,
                  },
                },
              },
              android_chrome: {
                picture_aspect: 'no_change',
                theme_color: '#ffffff',
                manifest: {
                  display: 'standalone',
                  orientation: 'not_set',
                  on_conflict: 'override',
                  declared: true,
                },
                assets: {
                  legacy_icon: false,
                  low_resolution_icons: false,
                },
              },
              safari_pinned_tab: {
                picture_aspect: 'silhouette',
                theme_color: '#5bbad5',
              },
            },
            settings: {
              scaling_algorithm: 'Mitchell',
              error_on_image_too_small: false,
              readme_file: false,
              html_code_file: false,
              use_path_as_is: false,
            },
          },
        },
      },
    ],
    [
      'storyblok-nuxt',
      {
        accessToken: 'zaP19JbOdrLk99V93b89PAtt',
        cacheProvider: 'memory'
      }
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['three'],
    extend(config, { isDev, isClient }) {
      config.module.rules.push({
        test: /\.(glsl|vs|fs|vert|frag)$/,
        exclude: /node_modules/,
        use: ['raw-loader', 'glslify-loader'],
      })
    },
  },

  generate: {
    async routes() {
      const stripe = require('stripe')(
        'sk_test_51KVvuZAIN5fbbozg6DgyiVPBz5n1taOP8iYob99af0rEK2VNv7CbFiyZZyqmMUdruCb6cTPzD1T06aI4GlUF4T0w00n2maLozJ'
      )

      const products = await stripe.products.list()

      return [
        ...products.data.map(
          (product) => `/products/${product.metadata.handle}`
        ),
        ...products.data.map(
          (product) => `/products/category/${product.metadata.category}`
        ),
      ]
    },
  },
}
