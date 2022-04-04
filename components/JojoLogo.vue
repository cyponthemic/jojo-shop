<template>
  <div
    class="content relative overflow-hidden flex justify-center items-center py-24 px-16"
  >
    <img class="h-full w-auto" src="/JOJOLOGO.svg" alt="" />

    <div
      class="absolute bottom-0 left-0 right-0 px-4 py-5 text-right sm:px-6 justify-center flex"
    >
      <a
        href="#sauce"
        type="submit"
        class="inline-flex justify-center items-center space-x-2 py-2 px-6 border border-transparent shadow-sm text-lg font-medium rounded-full text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <span> Shop </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </a>
    </div>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: calc(100vh - 105px);
  position: relative;
  align-items: center;
  justify-content: center;
  min-height: 300px;
}
</style>
