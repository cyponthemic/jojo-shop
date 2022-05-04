<template>
  <div class="bg-white">
    <!--
    Mobile menu

    Off-canvas menu for mobile, show/hide based on off-canvas menu state.
  -->
    <div
      v-show="menu"
      class="fixed inset-0 flex z-40 lg:hidden"
      role="dialog"
      aria-modal="true"
    >
      <!--
      Off-canvas menu overlay, show/hide based on off-canvas menu state.

      Entering: "transition-opacity ease-linear duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "transition-opacity ease-linear duration-300"
        From: "opacity-100"
        To: "opacity-0"
    -->
      <Transition
        name="custom-classes"
        enter-from-class="opacity-0"
        enter-active-class="transition-opacity ease-linear duration-300"
        enter-to-class="opacity-100"
        leave-from-class="opacity-100"
        leave-active-class="transition-opacity ease-linear duration-300"
        leave-to-class="opacity-0"
      >
        <div
          v-show="menu"
          class="fixed inset-0 bg-black bg-opacity-25"
          aria-hidden="true"
        ></div>
      </Transition>

      <!--
      Off-canvas menu, show/hide based on off-canvas menu state.

      Entering: "transition ease-in-out duration-300 transform"
        From: "-translate-x-full"
        To: "translate-x-0"
      Leaving: "transition ease-in-out duration-300 transform"
        From: "translate-x-0"
        To: "-translate-x-full"
    -->
      <!-- assuming Animate.css is included on the page -->
      <Transition
        name="custom-classes"
        enter-from-class="-translate-x-full"
        enter-active-class="transition ease-in-out duration-300 transform"
        enter-to-class="translate-x-0"
        leave-from-class="translate-x-0"
        leave-active-class="transition ease-in-out duration-300 transform"
        leave-to-class="-translate-x-full"
      >
        <div
          v-show="menu"
          class="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto"
        >
          <div class="px-4 pt-5 pb-2 flex">
            <button
              type="button"
              class="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
              @click="() => (menu = false)"
            >
              <span class="sr-only">Close menu</span>
              <!-- Heroicon name: outline/x -->
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div class="border-t border-gray-200 py-6 px-4 space-y-6">
            <div
              v-for="link in links"
              :key="'mobile-' + link.uri"
              class="flow-root"
            >
              <nuxt-link
                :to="link.uri"
                class="-m-2 p-2 block font-medium text-gray-900"
              >
                {{ link.name }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </Transition>
    </div>

    <header class="relative bg-white">
      <p
      v-if="settings && settings.banner_text"
        class="bg-indigo-500 h-10 flex items-center justify-center text-sm font-medium text-white px-4 sm:px-6 lg:px-8"
      >
       {{ settings.banner_text }}
      </p>

      <nav aria-label="Top" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="border-b border-gray-200">
          <div class="h-16 flex items-center">
            <!-- Mobile menu toggle, controls the 'mobileMenuOpen' state. -->
            <button
              type="button"
              class="bg-white p-2 rounded-md text-gray-400 lg:hidden"
              @click="() => (menu = !menu)"
            >
              <span class="sr-only">Open menu</span>
              <!-- Heroicon name: outline/menu -->
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <!-- Logo -->
            <div class="ml-4 flex lg:ml-0" :class="{ 'opacity-0': home }">
              <nuxt-link to="/">
                <span class="sr-only">JOJO</span>
                <img class="h-8 w-auto" src="/JOJOLOGO_SM.svg" alt="" />
              </nuxt-link>
            </div>

            <!-- Flyout menus -->
            <div class="hidden lg:ml-8 lg:block lg:self-stretch">
              <div class="h-full flex space-x-8">
                <div
                  v-for="link in links"
                  :key="'desktop-nav-' + link.uri"
                  class="flex"
                >
                  <div class="relative flex">
                    <!-- Item active: "border-indigo-500 text-indigo-500", Item inactive: "border-transparent text-gray-700 hover:text-gray-800" -->
                    <nuxt-link
                      :to="link.uri"
                      type="button"
                      class="border-transparent text-gray-700 hover:text-gray-800 relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px"
                      aria-expanded="false"
                      >{{ link.name }}</nuxt-link
                    >
                  </div>
                </div>
              </div>
            </div>

            <div class="ml-auto flex items-center">
              <!-- Cart -->
              <div class="ml-4 flow-root lg:ml-6">
                <a
                  class="group -m-2 p-2 flex items-center"
                  @click.prevent="$store.commit('cart/open')"
                >
                  <!-- Heroicon name: outline/shopping-bag -->
                  <svg
                    class="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  <span
                    class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800"
                    >{{ $store.getters['cart/total_items'] }}</span
                  >
                  <span class="sr-only">items in cart, view bag</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menu: false,
      links: [
        {
          name: 'Sauce',
          uri: '/products/tomato-sauce',
        },
        // {
        //   name: 'Merch',
        //   uri: '/products/category/merch',
        // },
        {
          name: 'Wholesale',
          uri: '/wholesale',
        },
      ],
    }
  },
  computed: {
    home() {
      return this.$route.fullPath === '/'
    },
  },
  watch: {
    '$route.fullPath': {
      handler(value) {
        this.menu = false
      },
    },
  },
}
</script>
