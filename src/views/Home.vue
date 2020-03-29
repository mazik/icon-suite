<template>
  <section class="flex flex-col h-screen">
    <header class="flex items-center border-b leading-loose">
      <div class="w-64 flex-none p-2">
        <button
          @click="importIcon"
          class="flex items-center w-full px-4 border rounded bg-white outline-none focus:shadow-outline"
        >
          <svg
            class="w-4 h-4 mr-2"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16z"
            />
          </svg>
          Import
        </button>
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
              v-model="search"
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
        <div
          v-if="loading"
          class="flex justify-center items-center h-full text-gray-700"
        >
          <svg
            class="w-4 h-4 fill-current animation-spin animation-linear"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M5.516 14.224c-2.262-2.432-2.222-6.244.128-8.611a6.074 6.074 0 013.414-1.736L8.989 1.8a8.112 8.112 0 00-4.797 2.351c-3.149 3.17-3.187 8.289-.123 11.531l-1.741 1.752 5.51.301-.015-5.834-2.307 2.323zm6.647-11.959l.015 5.834 2.307-2.322c2.262 2.434 2.222 6.246-.128 8.611a6.07 6.07 0 01-3.414 1.736l.069 2.076a8.122 8.122 0 004.798-2.35c3.148-3.172 3.186-8.291.122-11.531l1.741-1.754-5.51-.3z"
            />
          </svg>
        </div>
        <section
          v-if="filteredIcons.length && !loading"
          class="flex flex-wrap justify-between overflow-y-scroll"
        >
          <button
            class="relative w-32 h-32 bg-gray-100 m-4 p-4 flex flex-col items-center outline-none focus:shadow-outline"
            v-for="(icon, index) in filteredIcons"
            :key="index"
            @click="select(icon)"
            draggable="true"
            @dragstart="dragStart(icon.path, $event)"
            @dblclick="copy(icon.icon)"
          >
            <span class="w-12 h-12" v-html="icon.icon"></span>
            <span
              class="mt-auto w-24 text-xs truncate"
              v-text="icon.name"
            ></span>
          </button>
        </section>
        <section
          v-if="!loading && !filteredIcons.length"
          class="flex flex-col h-full items-center justify-center overflow-y-scroll leading-loose"
        >
          <EmptyIllustration />
          <h2 class="text-2xl font-semibold text-gray-900">No Icons to Show</h2>
          <button
            @click="importIcon"
            class="text-sm border rounded shadow px-3 py-1 tracking-wider bg-gray-100 text-gray-900 outline-none focus:shadow-outline"
          >
            Select an icons directory to import
          </button>
        </section>
        <p
          v-show="tooltip"
          class="absolute right-0 bottom-0 text-xs bg-gray-700 text-white rounded p-1"
        >
          Copied to clipboard
        </p>
      </main>
      <CustomizerPanel :isIconSelected="selected" :currentIcon="selectedIcon" />
    </main>
    <footer></footer>
  </section>
</template>

<script>
import { debounce } from "lodash";
import { ipcRenderer } from "electron";
import CustomizerPanel from "@/components/CustomizerPanel.vue";
import EmptyIllustration from "@/components/EmptyIllustration.vue";

export default {
  name: "Home",
  components: {
    CustomizerPanel,
    EmptyIllustration
  },
  data() {
    return {
      icons: [],
      search: "",
      tooltip: false,
      selected: false,
      selectedIcon: {},
      filteredIcons: [],
      loading: false
    };
  },
  created() {
    ipcRenderer.on("get-icon-svg", (event, icons) => {
      this.icons = icons;
      this.filteredIcons = icons;
      this.loading = false;
    });

    ipcRenderer.on("loading-status", (event, status) => {
      this.loading = status;
    });
  },

  watch: {
    search: {
      handler(search) {
        this.loading = true;
        this.setIconsDebounced(search);
      },
      immediate: true
    }
  },

  methods: {
    importIcon() {
      ipcRenderer.send("import-icon-path");
    },

    setIconsDebounced: debounce(function(search) {
      this.filteredIcons = this.icons.filter(icon =>
        icon.name.toLowerCase().includes(search.toLowerCase())
      );
      this.loading = false;
    }, 500),

    dragStart(path, event) {
      event.preventDefault();
      ipcRenderer.send("onDragStart", path);
    },

    copy(icon) {
      this.$copyText(icon).then(
        () => {
          this.tooltip = true;
          setTimeout(() => {
            this.tooltip = false;
          }, 500);
        },
        event => {
          ipcRenderer.send("error", event);
        }
      );
    },

    select(icon) {
      this.selected = true;
      this.selectedIcon = icon;
    }
  }
};
</script>
