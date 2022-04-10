<template>
  <div class="bg-white">
    <div class="pt-6">
      <nav v-if="breadcrumbs" aria-label="Breadcrumb">
        <ol
          role="list"
          class="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8"
        >
          <li>
            <div class="flex items-center">
              <nuxt-link
                to="/products"
                href="#"
                class="mr-2 text-sm font-medium text-gray-900 capitalize"
              >
                Shop
              </nuxt-link>
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
              <nuxt-link
                :to="`/products/category/${product.metadata.category}`"
                class="mr-2 text-sm font-medium text-gray-900 capitalize"
              >
                {{ product.metadata.category }}
              </nuxt-link>
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

      <!-- Product info -->
      <div
        class="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8"
      >
        <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <!-- Image gallery -->
          <div
            v-if="product.metadata.handle === 'tomato-sauce'"
            class="relative w-full h-full"
          >
            <JojoBottle />
          </div>
          <div v-else class="sm:px-6">
            <div
              class="aspect-w-4 aspect-h-4 rounded-lg overflow-hidden lg:block"
            >
              <img
                :src="product.images[0]"
                alt="Two each of gray, white, and black shirts laying flat."
                class="w-full h-full object-center object-cover"
              />
            </div>
          </div>
        </div>

        <!-- Options -->
        <div class="mt-4 lg:mt-0 lg:row-span-3">
          <h1
            class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl mb-2"
          >
            {{ product.metadata.title || product.name }}
          </h1>
          <h2 class="sr-only">Product information</h2>
          <p class="text-3xl text-gray-900">{{ amount | price }}</p>

          <!-- Description and details -->
          <div class="mt-2">
            <h3 class="sr-only">Description</h3>

            <div class="space-y-6">
              <p class="text-base text-gray-900">
                {{ product.metadata.description }}
              </p>
            </div>
          </div>

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
                      :for="`size-choice-${price.id}-label`"
                      class="group text-center relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer"
                    >
                      <input
                        v-model="variant"
                        type="radio"
                        name="size-choice"
                        :value="price.id"
                        class="sr-only"
                         :id="`size-choice-${price.id}-label`"
                        :aria-labelledby="`size-choice-${price.id}-label`"
                      />
                      <p>
                        {{ price.nickname }}
                      </p>

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

            <div class="mt-10 flex space-x-2">
              <FormsTextField
                v-model="quantity"
                name="quantity"
                min="1"
                type="number"
              />
              <button
                type="submit"
                class="w-full bg-indigo-500 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Add to bag
              </button>
            </div>

            <div v-if="error" class="mt-2 text-center text-indigo-500">
              Select a {{ product.metadata.variant }}
            </div>
          </form>

          <div class="mt-10">
            <h2 class="text-sm font-medium text-gray-900">Details</h2>

            <div class="mt-4 space-y-6">
              <p
                class="text-sm text-gray-600"
                v-html="product.metadata.details"
              ></p>
            </div>
          </div>

          <div class="mt-10">
            <h2 class="text-sm font-medium text-gray-900">Shipping</h2>
            <div class="mt-4 space-y-6">
              <p class="text-sm text-gray-600">
                All delivery options require Full Name & Mobile so we can talk
                saucy on delivery day.
              </p>
            </div>
          </div>
          <AccordionItem
            v-for="(item, index) in shipping"
            :key="'shipping-' + index"
            :title="item.title"
            :description="item.description"
          />
        </div>

        <div
          class="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8"
        ></div>
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
    breadcrumbs: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      variant: null,
      error: false,
      quantity: 1,
      shipping: [
        {
          title: 'FREE LOCAL MELBOURNE DELIVERY',
          description: `Click 'Local Delivery' at the checkout & we’ll personally drop JOJO at your door.
*Inner Melbourne suburbs`,
        },
        {
          title: 'CLICK & COLLECT',
          description: `Click ‘Pickup Footscray’ to Click & Collect JOJO from our Western Suburbs pickup point <br><br>
Click ‘Pickup Abbotsford’ to Click & Collect JOJO from our Melbourne pickup point.`,
        },
        {
          title: 'DOMESTIC SHIPPING',
          description: `Shipping is free for orders over $50 within Australia. <br>
Orders under $50 are charged a flat rate of $5 for Standard and $10 for Express.`,
        },
        {
          title: 'INTERNATIONAL SHIPPING',
          description: `JOJO is still in the process of shipping international orders.`,
        },
      ],
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
      if (this.variants.length === 1) {
        this.variant = this.variants[0].id
      }
      if (!this.variant) {
        this.error = true
        return
      }

      this.$store.commit('cart/add', {
        ...this.product,
        quantity: this.quantity,
        price: this.price,
      })
      this.$store.commit('cart/open')
    },
  },
}
</script>
