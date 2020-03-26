<template>
  <aside class="bg-gray-100 w-64 flex-shrink-0 overflow-y-scroll ml-auto px-2">
    <section class="text-gray-800 py-2">
      <div
        v-if="!isIconSelected"
        class="flex flex-col h-screen items-center justify-center"
      >
        <p class="text-sm">No selection</p>
      </div>
      <div v-else>
        <div v-if="customizedSvg" class="flex justify-center">
          <PreviewWidget :Svg="customizedSvg" />
        </div>
        <PrismEditor
          :line-numbers="true"
          :code="format(customizedSvg)"
          language="html"
        ></PrismEditor>
        <hr class="my-5" />
        <div class="flex justify-between">
          <h2 class="text-gray-800 font-semibold tracking-wide">
            Customize
          </h2>
          <button
            @click="customizedSvg = true"
            class="px-4 border rounded bg-white outline-none focus:shadow-outline"
          >
            Reset
          </button>
        </div>
        <div>
          <div>
            <label
              for="size"
              class="flex justify-between text-gray-700 text-sm font-bold"
            >
              <span>Size</span>
              <span class="font-normal">{{ dimension }}px</span>
            </label>
            <input
              v-model="dimension"
              class="w-full bg-gray-400 rounded-lg overflow-hidden appearance-none leading-tight outline-none focus:shadow-outline"
              id="size"
              type="range"
              min="1"
              max="100"
              step="1"
            />
          </div>
          <div>
            <label
              for="stroke"
              class="block text-gray-700 text-sm font-bold mb-2"
            >
              <input
                v-model="isStrokeWidthEnable"
                class="mr-2"
                type="checkbox"
              />
              Enable Stroke Width
            </label>
            <input
              v-model="strokeWidth"
              class="w-full bg-gray-400 rounded-lg overflow-hidden appearance-none leading-tight outline-none focus:shadow-outline"
              id="stroke"
              type="range"
              min="0.1"
              max="10"
              value="1"
              step="0.1"
              :disabled="!isStrokeWidthEnable"
            />
          </div>
          <div>
            <label
              for="fill-color"
              class="block text-gray-700 text-sm font-bold mb-2"
            >
              <input v-model="isFillEnable" class="mr-2" type="checkbox" />
              Enable Fill Color
            </label>
            <input
              class="w-full rounded-lg overflow-hidden appearance-none leading-tight outline-none focus:shadow-outline"
              id="fill-color"
              type="color"
              :disabled="!isFillEnable"
              v-model="fill"
            />
          </div>
          <div>
            <label
              for="stroke-color"
              class="block text-gray-700 text-sm font-bold mb-2"
            >
              <input v-model="isStrokeEnable" class="mr-2" type="checkbox" />
              Enable Stroke Color
            </label>
            <input
              class="w-full rounded-lg overflow-hidden appearance-none leading-tight outline-none focus:shadow-outline"
              id="stroke-color"
              type="color"
              :disabled="!isStrokeEnable"
              v-model="stroke"
            />
          </div>
        </div>
        <hr />
        <h2 class="text-gray-800 font-semibold tracking-wide">
          Information
        </h2>
        <InformationWidget :current="currentIcon" />
      </div>
    </section>
  </aside>
</template>

<script>
import PrismEditor from "vue-prism-editor";
import PreviewWidget from "@/components/PreviewWidget.vue";
import InformationWidget from "@/components/InformationWidget.vue";

export default {
  name: "CustomizerPanel",
  components: {
    PrismEditor,
    PreviewWidget,
    InformationWidget
  },

  props: {
    isIconSelected: {
      type: Boolean,
      required: true,
      default: false
    },
    currentIcon: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      fill: "none",
      isFillEnable: true,
      dimension: 50,
      stroke: "#4A5568",
      isStrokeEnable: true,
      strokeWidth: 0,
      isStrokeWidthEnable: true
    };
  },

  computed: {
    customizedSvg: {
      get() {
        let modifiedSvg = this.insertAt(
          this.currentIcon.icon,
          ` width="${this.dimension}" height="${this.dimension}"`,
          4
        );

        if (this.isFillEnable) {
          if (modifiedSvg.includes("fill")) {
            modifiedSvg = modifiedSvg.replace(
              /(fill=")(.*?)(")/,
              `$1${this.fill}$3`
            );
          } else {
            modifiedSvg = this.insertAt(modifiedSvg, ` fill="${this.fill}"`, 4);
          }
        }

        if (this.isStrokeEnable) {
          if (modifiedSvg.includes("stroke")) {
            modifiedSvg = modifiedSvg.replace(
              /(stroke=")(.*?)(")/,
              `$1${this.stroke}$3`
            );
          } else {
            modifiedSvg = this.insertAtPath(
              modifiedSvg,
              `stroke="${this.stroke}"`
            );
          }
        }

        if (this.isStrokeWidthEnable) {
          if (modifiedSvg.includes("stroke-width")) {
            modifiedSvg = modifiedSvg.replace(
              /(stroke-width=")(.*?)(")/,
              `$1${this.strokeWidth}$3`
            );
          } else {
            modifiedSvg = this.insertAtPath(
              modifiedSvg,
              `stroke-width="${this.strokeWidth}"`
            );
          }
        }

        return modifiedSvg.replace(/(fill=")(.*?)(")/, `$1${this.fill}$3`);
      },
      set() {
        this.fill = this.defaultFill(this.currentIcon.icon);
        this.dimension = 50;
        this.stroke = this.defaultStroke(this.currentIcon.icon);
        this.strokeWidth = this.defaultStrokeWidth(this.currentIcon.icon);
      }
    }
  },

  watch: {
    currentIcon: {
      handler() {
        this.fill = this.defaultFill(this.currentIcon.icon);
        this.stroke = this.defaultStroke(this.currentIcon.icon);
        this.strokeWidth = this.defaultStrokeWidth(this.currentIcon.icon);
      }
    }
  },

  methods: {
    insertAt(str, sub, pos) {
      return `${str.slice(0, pos)}${sub}${str.slice(pos)}`;
    },

    insertAtPath(Svg, str) {
      return Svg.replace(/(.*?<path)(.?)(.*?<\/svg>)/, `$1 ${str} $3`);
    },

    format(html) {
      const tab = "\t";
      let result = "";
      let indent = "";

      html.split(/>\s*</).forEach(function(element) {
        if (element.match(/^\/\w/)) {
          indent = indent.substring(tab.length);
        }

        result += indent + "<" + element + ">\r\n";

        if (element.match(/^<?\w[^>]*[^/]$/)) {
          indent += tab;
        }
      });

      return result.substring(1, result.length - 3);
    },

    defaultStroke(Svg) {
      if (Svg.includes("stroke")) {
        this.isStrokeEnable = true;
        return (this.stroke = Svg.match(/(stroke=")(.*?)(")/)[2]);
      }

      return (this.isStrokeEnable = false);
    },

    defaultStrokeWidth(Svg) {
      if (Svg.includes("stroke-width")) {
        this.isStrokeWidthEnable = true;
        return (this.strokeWidth = Svg.match(/(stroke-width=")(.*?)(")/)[2]);
      }

      return (this.isStrokeWidthEnable = false);
    },

    defaultFill(Svg) {
      if (Svg.includes("fill")) {
        this.isFillEnable = true;
        return (this.strokeWidth = Svg.match(/(fill=")(.*?)(")/)[2]);
      }

      return (this.isFillEnable = false);
    }
  }
};
</script>
