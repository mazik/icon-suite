<template>
  <section class="flex flex-col h-screen">
    <header class="flex items-center border-b leading-loose">
      <div class="w-64 flex-none p-2">
        <svg
          class="w-6 h-6"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16z"
          />
        </svg>
      </div>
      <div class="border-l border-r w-full p-2">
        <div class="w-4/5 flex-grow-0 m-auto">
          <div class="relative">
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg
                class="w-4 h-4 text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  class="fill-current"
                  d="M12.9 14.32a8 8 0 111.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 108 2a6 6 0 000 12z"
                />
              </svg>
            </span>
            <input
              class="rounded border w-full pl-8 outline-none focus:shadow-outline placeholder-gray-600"
              type="text"
              placeholder="Find in All Sets"
            />
          </div>
        </div>
      </div>
      <div class="flex w-64 flex-none p-2">
        <svg
          class="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
          />
        </svg>
        <svg
          class="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M0 2C0 .9.9 0 2 0h14l4 4v14a2 2 0 01-2 2H2a2 2 0 01-2-2V2zm5 0v6h10V2H5zm6 1h3v4h-3V3z"
          />
        </svg>
      </div>
    </header>
    <main class="flex-1 flex overflow-y-hidden bg-white">
      <aside class="bg-gray-100 w-64 flex-shrink-0 flex flex-col px-2">
        <section class="text-gray-800">
          <button
            class="flex items-center w-full rounded px-4 py-1 my-2 bg-blue-500 text-white"
          >
            <svg
              class="w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                class="fill-current"
                d="M16 16v2H4v-2H0V4h4V2h12v2h4v12h-4zM14 5.5V4H6v12h8V5.5zm2 .5v8h2V6h-2zM4 6H2v8h2V6z"
              />
            </svg>
            All Icons
          </button>
          <button
            class="flex items-center w-full rounded px-4 py-1 mb-2 hover:bg-blue-500 hover:text-white"
          >
            <svg
              class="w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                class="fill-current"
                d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
              />
            </svg>
            Starred
          </button>
          <button
            class="flex items-center w-full rounded px-4 py-1 hover:bg-blue-500 hover:text-white"
          >
            <svg
              class="w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                class="fill-current"
                d="M14.66 15.66A8 8 0 1 1 17 10h-2a6 6 0 1 0-1.76 4.24l1.42 1.42zM12 10h8l-4 4-4-4z"
              />
            </svg>
            Recently Used
          </button>
        </section>
        <h2 class="text-gray-800 font-semibold tracking-wide mt-4">
          Your Icon Sets
        </h2>
        <section class="overflow-y-scroll"></section>
        <section class="mt-auto mb-2 relative">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg
              class="w-4 h-4 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path class="fill-current" d="M12 12l8-8V0H0v4l8 8v8l4-4v-4z" />
            </svg>
          </span>
          <input
            class="rounded border w-full pl-8 outline-none focus:shadow-outline placeholder-gray-600"
            type="text"
            placeholder="Filter Icon Sets"
          />
        </section>
      </aside>
      <main class="relative flex flex-col flex-grow border-l border-r">
        <section class="flex flex-wrap justify-between overflow-y-scroll">
          <button
            class="relative w-32 h-32 bg-gray-100 m-4 p-4 flex flex-col items-center outline-none focus:shadow-outline"
          >
            <span class="w-12 h-12">
              <svg viewBox="0 0 24 24">
                <path
                  class="fill-current"
                  d="M11 23a2 2 0 01-2-2v-2h6v2a2 2 0 01-2 2h-2m1-22c.71 0 1.39.09 2.05.26C15.22 2.83 16 5.71 16 9c0 2.28-.38 4.37-1 7a2 2 0 01-2 2h-2a2 2 0 01-2-2c-.62-2.63-1-4.72-1-7 0-3.29.78-6.17 1.95-7.74C10.61 1.09 11.29 1 12 1m8 7c0 3.18-1.85 7.92-4.54 9.21C16.41 15.39 17 11.83 17 9c0-2.83-.59-5.39-1.54-7.21C18.15 3.08 20 4.82 20 8M4 8c0-3.18 1.85-4.92 4.54-6.21C7.59 3.61 7 6.17 7 9s.59 6.39 1.54 8.21C5.85 15.92 4 11.18 4 8z"
                />
              </svg>
            </span>
            <span class="mt-auto w-24 text-xs truncate">airballon</span>
          </button>
        </section>
        <p
          class="absolute right-0 bottom-0 text-xs bg-gray-700 text-white rounded p-1"
        >
          Copied to clipboard
        </p>
      </main>
      <aside
        class="bg-gray-100 w-64 flex-shrink-0 overflow-y-scroll ml-auto px-2"
      ></aside>
    </main>
    <footer></footer>
  </section>
</template>

<script>
export default {
  name: "Home"
};
</script>
