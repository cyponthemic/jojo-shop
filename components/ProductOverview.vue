<template>
  <div class="bg-white">
    <div class="pt-6">
      <nav aria-label="Breadcrumb">
        <ol
          role="list"
          class="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8"
        >
          <li>
            <div class="flex items-center">
              <a
                href="#"
                class="mr-2 text-sm font-medium text-gray-900 capitalize"
              >
                Shop
              </a>
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                class="w-4 h-5 text-gray-300"
              >
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          </li>

          <li>
            <div class="flex items-center">
              <a
                href="#"
                class="mr-2 text-sm font-medium text-gray-900 capitalize"
              >
                {{ product.metadata.category }}
              </a>
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                class="w-4 h-5 text-gray-300"
              >
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          </li>

          <li class="text-sm">
            <a
              href="#"
              aria-current="page"
              class="font-medium text-gray-500 hover:text-gray-600"
            >
              {{ product.name }}
            </a>
          </li>
        </ol>
      </nav>

      <!-- Image gallery -->
      <div
        class="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8"
      >
        <div class="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
          <img
            :src="product.images[0]"
            alt="Two each of gray, white, and black shirts laying flat."
            class="w-full h-full object-center object-cover"
          />
        </div>
      </div>

      <!-- Product info -->
      <div
        class="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8"
      >
        <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1
            class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl"
          >
            {{ product.metadata.title || product.name }}
          </h1>
        </div>

        <!-- Options -->
        <div class="mt-4 lg:mt-0 lg:row-span-3">
          <h2 class="sr-only">Product information</h2>
          <p class="text-3xl text-gray-900">{{ amount | price }}</p>

          <form class="mt-10" @submit.prevent="submit">
            <!-- Sizes -->
            <div v-if="variants && variants.length > 1" class="mt-10">
              <div class="flex items-center justify-between">
                <h3 class="text-sm text-gray-900 font-medium">
                  {{ product.metadata.variant }}
                </h3>
              </div>

              <fieldset class="mt-4">
                <legend class="sr-only">
                  Choose a {{ product.metadata.variant }}
                </legend>
                <div
                  class="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                >
                  <!-- Active: "ring-2 ring-indigo-500" -->
                  <template v-for="price in variants">
                    <label
                      v-if="price.disabled"
                      :key="price.id"
                      class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-gray-50 text-gray-200 cursor-not-allowed"
                    >
                      <input
                        type="radio"
                        name="size-choice"
                        value="XXS"
                        disabled
                        class="sr-only"
                        aria-labelledby="size-choice-0-label"
                      />
                      <p id="size-choice-0-label">{{ price.nickname }}</p>

                      <div
                        v-if="price.disabled"
                        aria-hidden="true"
                        class="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none"
                      >
                        <svg
                          class="absolute inset-0 w-full h-full text-gray-200 stroke-2"
                          viewBox="0 0 100 100"
                          preserveAspectRatio="none"
                          stroke="currentColor"
                        >
                          <line
                            x1="0"
                            y1="100"
                            x2="100"
                            y2="0"
                            vector-effect="non-scaling-stroke"
                          />
                        </svg>
                      </div>
                    </label>

                    <!-- Active: "ring-2 ring-indigo-500" -->
                    <label
                      v-else
                      :key="price.id"
                      :class="
                        price.id === variant ? 'ring-2 ring-indigo-500' : ''
                      "
                      class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer"
                    >
                      <input
                        v-model="variant"
                        type="radio"
                        name="size-choice"
                        :value="price.id"
                        class="sr-only"
                        aria-labelledby="size-choice-1-label"
                      />
                      <p id="size-choice-1-label">{{ price.nickname }}</p>

                      <!--
                    Active: "border", Not Active: "border-2"
                    Checked: "border-indigo-500", Not Checked: "border-transparent"
                  -->
                      <div
                        class="absolute -inset-px rounded-md pointer-events-none"
                        aria-hidden="true"
                      ></div>
                    </label>
                  </template>
                </div>
              </fieldset>
            </div>

            <button
              type="submit"
              class="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add to bag
            </button>

            <div v-if="error" class="mt-2 text-center text-indigo-500">
              Select a {{ product.metadata.variant }}
            </div>
          </form>
        </div>

        <div
          class="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8"
        >
          <!-- Description and details -->
          <div>
            <h3 class="sr-only">Description</h3>

            <div class="space-y-6">
              <p class="text-base text-gray-900">
                {{ product.metadata.description }}
              </p>
            </div>
          </div>

          <div class="mt-10">
            <h2 class="text-sm font-medium text-gray-900">Details</h2>

            <div class="mt-4 space-y-6">
              <p class="text-sm text-gray-600">
                The 6-Pack includes two black, two white, and two heather gray
                Basic Tees. Sign up for our subscription service and be the
                first to get new, exciting colors, like our upcoming
                &quot;Charcoal Gray&quot; limited release.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      variant: null,
      error: false,
    }
  },
  computed: {
    variants() {
      return this.prices
        .filter((price) => price.product === this.product.id)
        .sort((a, b) => a.metadata.order - b.metadata.order)
    },
    prices() {
      return this.$store.getters['prices/items']
    },
    price() {
      return this.prices.find((price) => price.id === this.variant)
    },
    amount() {
      return this.price ? this.price.unit_amount : this.variants[0]?.unit_amount
    },
  },
  watch: {
    variant(value) {
      if (value && this.error) {
        this.error = false
      }
    },
  },
  methods: {
    submit() {
      if (!this.variant) {
        this.error = true
        return
      }

      this.$store.commit('cart/add', {
        ...this.product,
        quantity: 1,
        price: this.price,
      })
      this.$store.commit('cart/open')
    },
  },
}
</script>
