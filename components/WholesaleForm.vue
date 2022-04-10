<template>
  <div class="py-16 bg-indigo-500 text-white flex justify-center items-center">
    <div class="mx-auto">
      <form
        name="wholesale"
        action="/thanks"
        method="post"
        netlify
        netlify-honeypot="bot-field"
        class="jojo-form font-mono lg:text-4xl leading-loose"
        data-v-701601a0=""
        _lpchecked="1"
      >
        <input type="hidden" name="form-name" value="wholesale" />

        <label for="form_name" data-v-701601a0="">Hey </label>
        <input
          id="form_name"
          name="name"
          placeholder="first last"
          data-v-701601a0=""
        /><br data-v-701601a0="" />
        <div class="h-5" data-v-701601a0=""></div>
        <label for="form_company" data-v-701601a0="">from </label>
        <input
          id="form_company"
          name="company"
          placeholder="company name"
          data-v-701601a0=""
        /><br data-v-701601a0="" />
        <div class="h-5" data-v-701601a0=""></div>
        <label for="form_email" data-v-701601a0=""> What's your email? </label>
        <div class="h-2" data-v-701601a0=""></div>
        <input
          id="form_email"
          name="email"
          placeholder="your@email.com"
          class="-mt-3"
          data-v-701601a0=""
        />
        <div class="h-5" data-v-701601a0=""></div>
        <label for="form_number" data-v-701601a0=""> Phone number? </label>
        <div class="h-2" data-v-701601a0=""></div>
        <input
          id="form_number"
          name="number"
          placeholder="04XXXXXXXX"
          class="-mt-3"
          data-v-701601a0=""
        />
        <div class="h-5" data-v-701601a0=""></div>
        <label for="form_quantity" data-v-701601a0=""> How saucy? </label>
        <div class="h-2" data-v-701601a0=""></div>
        <input
          id="form_quantity"
          placeholder="X Bottles/L per week"
          name="quantity"
          class="-mt-3"
          data-v-701601a0=""
        />
        <div class="h-6" data-v-701601a0=""></div>
        <div class="w-full flex justify-end" data-v-701601a0="">
          <button
            type="submit"
            class="text-blue bg-indigo hover:bg-blue hover:text-indigo border-4 border-solid border-white my-3 px-4 py-3 leading-none"
            data-v-701601a0=""
          >
            Let's get saucy
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
