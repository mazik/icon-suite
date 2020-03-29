<template>
  <aside class="bg-gray-100 w-64 flex-shrink-0 ml-auto text-gray-700 p-2">
    <div
      v-if="!isIconSelected"
      class="flex flex-col h-full items-center justify-center"
    >
      <p class="text-sm">No selection</p>
    </div>
    <div v-else class="flex flex-col h-screen overflow-y-hidden">
      <div>
        <div v-if="customizedSvg" class="flex justify-center">
          <PreviewWidget :Svg="customizedSvg" />
        </div>
        <PrismEditor
          :line-numbers="true"
          :code="format(customizedSvg)"
          language="html"
        ></PrismEditor>
        <hr class="mb-4" />
      </div>
      <div class="overflow-y-scroll">
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
                id="stroke"
                class="mr-2"
                type="checkbox"
              />
              Enable Stroke Width
            </label>
            <input
              v-model="strokeWidth"
              class="w-full bg-gray-400 rounded-lg overflow-hidden appearance-none leading-tight outline-none focus:shadow-outline"
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
              <input
                v-model="isFillEnable"
                id="fill-color"
                class="mr-2"
                type="checkbox"
              />
              Enable Fill Color
            </label>
            <input
              class="w-full rounded-lg overflow-hidden appearance-none leading-tight outline-none focus:shadow-outline"
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
              <input
                v-model="isStrokeEnable"
                id="stroke-color"
                class="mr-2"
                type="checkbox"
              />
              Enable Stroke Color
            </label>
            <input
              class="w-full rounded-lg overflow-hidden appearance-none leading-tight outline-none focus:shadow-outline"
              type="color"
              :disabled="!isStrokeEnable"
              v-model="stroke"
            />
          </div>
          <hr class="my-2" />
          <div>
            <label for="strokeLineCap" class="text-sm font-bold text-gray-700">
              <input
                v-model="isStrokeLineCapEnable"
                id="strokeLineCap"
                class="mr-2"
                type="checkbox"
              />
              Enable <code class="font-normal">stroke-linecap</code> Style
            </label>
            <div class="flex items-center text-gray-700">
              <input
                class="ml-1"
                type="radio"
                name="strokeLineCapStyle"
                id="butt"
                value="butt"
                v-model="strokeLineCap"
                :disabled="!isStrokeLineCapEnable"
              />
              <label class="flex items-center" for="butt">
                <svg
                  class="w-24 stroke-current"
                  viewBox="0 0 6 2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="1" y1="1" x2="5" y2="1" stroke-linecap="butt" />
                  <path d="M1,1 h4 M1,3" stroke="pink" stroke-width="0.025" />
                </svg>
                <code>butt</code>
              </label>
            </div>
            <div class="flex items-center text-gray-700">
              <input
                class="ml-1"
                type="radio"
                name="strokeLineCapStyle"
                id="round"
                value="round"
                v-model="strokeLineCap"
                :disabled="!isStrokeLineCapEnable"
              />
              <label class="flex items-center" for="round">
                <svg
                  class="w-24 stroke-current"
                  viewBox="0 0 6 2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="1" y1="1" x2="5" y2="1" stroke-linecap="round" />
                  <path d="M1,1 h4 M1,3" stroke="pink" stroke-width="0.025" />
                </svg>
                <code>round</code>
              </label>
            </div>
            <div class="flex items-center text-gray-700">
              <input
                class="ml-1"
                type="radio"
                name="strokeLineCapStyle"
                id="square"
                value="square"
                v-model="strokeLineCap"
                :disabled="!isStrokeLineCapEnable"
              />
              <label class="flex items-center" for="square">
                <svg
                  class="w-24 stroke-current"
                  viewBox="0 0 6 2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="1" y1="1" x2="5" y2="1" stroke-linecap="square" />
                  <path d="M1,1 h4 M1,3" stroke="pink" stroke-width="0.025" />
                </svg>
                <code>square</code>
              </label>
            </div>
          </div>
          <hr class="my-2" />
          <div>
            <label for="strokeLineJoin" class="text-sm font-bold text-gray-700">
              <input
                v-model="isStrokeLineJoinEnable"
                id="strokeLineJoin"
                class="mr-2"
                type="checkbox"
              />
              Enable <code class="font-normal">stroke-linejoin</code> Style
            </label>
            <div class="flex items-center text-gray-700">
              <input
                class="ml-1"
                type="radio"
                name="strokeLineJoinStyle"
                id="miter"
                value="miter"
                v-model="strokeLineJoin"
                :disabled="!isStrokeLineJoinEnable"
              />
              <label class="flex items-center" for="miter">
                <svg
                  class="w-24 stroke-current"
                  viewBox="0 0 9 7"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1,5 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5"
                    fill="none"
                    stroke-linejoin="miter"
                  />
                  <g id="highlight">
                    <path
                      d="M1,5 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5"
                      stroke="pink"
                      fill="none"
                      stroke-width="0.025"
                    />
                    <circle cx="1" cy="5" r="0.05" fill="pink" />
                    <circle cx="3" cy="2" r="0.05" fill="pink" />
                    <circle cx="5" cy="5.5" r="0.05" fill="pink" />
                  </g>
                </svg>
                <code>miter</code>
              </label>
            </div>
            <div class="flex items-center text-gray-700">
              <input
                class="ml-1"
                type="radio"
                name="strokeLineJoinStyle"
                id="strokeLineJoinRound"
                value="round"
                v-model="strokeLineJoin"
                :disabled="!isStrokeLineJoinEnable"
              />
              <label class="flex items-center" for="strokeLineJoinRound">
                <svg
                  class="w-24 stroke-current"
                  viewBox="0 0 9 7"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1,5 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5"
                    fill="none"
                    stroke-linejoin="round"
                  />
                  <g id="highlight">
                    <path
                      d="M1,5 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5"
                      stroke="pink"
                      fill="none"
                      stroke-width="0.025"
                    />
                  </g>
                </svg>
                <code>round</code>
              </label>
            </div>
            <div class="flex items-center text-gray-700">
              <input
                class="ml-1"
                type="radio"
                name="strokeLineJoinStyle"
                id="bevel"
                value="bevel"
                v-model="strokeLineJoin"
                :disabled="!isStrokeLineJoinEnable"
              />
              <label class="flex items-center" for="bevel">
                <svg
                  class="w-24 stroke-current"
                  viewBox="0 0 9 7"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1,5 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5"
                    fill="none"
                    stroke-linejoin="bevel"
                  />
                  <g id="highlight">
                    <path
                      d="M1,5 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5"
                      stroke="pink"
                      fill="none"
                      stroke-width="0.025"
                    />
                  </g>
                </svg>
                <code>bevel</code>
              </label>
            </div>
            <div class="flex items-center text-gray-700">
              <input
                class="ml-1"
                type="radio"
                name="strokeLineJoinStyle"
                id="miter-clip"
                value="miter-clip"
                v-model="strokeLineJoin"
                :disabled="!isStrokeLineJoinEnable"
              />
              <label class="flex items-center" for="miter-clip">
                <svg
                  class="w-24 stroke-current"
                  viewBox="0 0 9 7"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1,5 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5"
                    fill="none"
                    stroke-linejoin="miter-clip"
                  />
                  <g id="highlight">
                    <path
                      d="M1,5 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5"
                      stroke="pink"
                      fill="none"
                      stroke-width="0.025"
                    />
                  </g>
                </svg>
                <code>miter-clip</code>
              </label>
            </div>
            <div class="flex items-center text-gray-700">
              <input
                class="ml-1"
                type="radio"
                name="strokeLineJoinStyle"
                id="arcs"
                value="arcs"
                v-model="strokeLineJoin"
                :disabled="!isStrokeLineJoinEnable"
              />
              <label class="flex items-center" for="arcs">
                <svg
                  class="w-24 stroke-current"
                  viewBox="0 0 9 7"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1,5 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5"
                    fill="none"
                    stroke-linejoin="arcs"
                  />
                  <g id="highlight">
                    <path
                      d="M1,5 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5"
                      stroke="pink"
                      fill="none"
                      stroke-width="0.025"
                    />
                  </g>
                </svg>
                <code>arcs</code>
              </label>
            </div>
          </div>
        </div>
        <InformationWidget :current="currentIcon" class="mb-20" />
      </div>
    </div>
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
      isStrokeWidthEnable: true,
      strokeLineCap: false,
      isStrokeLineCapEnable: false,
      strokeLineJoin: false,
      isStrokeLineJoinEnable: false
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

        if (this.isStrokeLineCapEnable) {
          if (modifiedSvg.includes("stroke-linecap")) {
            modifiedSvg = modifiedSvg.replace(
              /(stroke-linecap=")(.*?)(")/,
              `$1${this.strokeLineCap}$3`
            );
          } else {
            modifiedSvg = this.insertAtPath(
              modifiedSvg,
              `stroke-linecap="${this.strokeLineCap}"`
            );
          }
        }

        if (this.isStrokeLineJoinEnable) {
          if (modifiedSvg.includes("stroke-linejoin")) {
            modifiedSvg = modifiedSvg.replace(
              /(stroke-linejoin=")(.*?)(")/,
              `$1${this.strokeLineJoin}$3`
            );
          } else {
            modifiedSvg = this.insertAtPath(
              modifiedSvg,
              `stroke-linejoin="${this.strokeLineJoin}"`
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
        this.strokeLineCap = this.defaultStrokeLineCap(this.currentIcon.icon);
        this.strokeLineJoin = this.defaultStrokeLineJoin(this.currentIcon.icon);
      }
    }
  },

  watch: {
    currentIcon: {
      handler() {
        this.fill = this.defaultFill(this.currentIcon.icon);
        this.stroke = this.defaultStroke(this.currentIcon.icon);
        this.strokeWidth = this.defaultStrokeWidth(this.currentIcon.icon);
        this.strokeLineCap = this.defaultStrokeLineCap(this.currentIcon.icon);
        this.strokeLineJoin = this.defaultStrokeLineJoin(this.currentIcon.icon);
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
    },

    defaultStrokeLineCap(Svg) {
      if (Svg.includes("stroke-linecap")) {
        this.isStrokeLineCapEnable = true;
        return (this.strokeLineCap = Svg.match(
          /(stroke-linecap=")(.*?)(")/
        )[2]);
      }

      return (this.strokeLineCap = false);
    },

    defaultStrokeLineJoin(Svg) {
      if (Svg.includes("stroke-linejoin")) {
        this.isStrokeLineJoinEnable = true;
        return (this.strokeLineJoin = Svg.match(
          /(stroke-linejoin=")(.*?)(")/
        )[2]);
      }

      return false;
    }
  }
};
</script>

<style scoped>
.prism-editor-wrapper {
  @apply h-auto;
}
</style>
