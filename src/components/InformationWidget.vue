<template>
  <div>
    <hr class="mb-2" />
    <h2 class="text-gray-800 font-semibold tracking-wide">
      Information
    </h2>
    <ul class="text-xs text-gray-600 leading-relaxed tracking-wide">
      <li>
        <span class="font-bold">Name:</span>
        {{ name(current.name) }}
      </li>
      <li><span class="font-bold">Type:</span> SVG</li>
      <li>
        <span class="font-bold">Size:</span>
        {{ size(current.size) }}
      </li>
      <li><span class="font-bold">Dimensions:</span> Scalable</li>
      <li>
        <span class="font-bold">Created:</span>
        {{ date(current.date) }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "InformationWidget",
  props: {
    current: {
      type: Object,
      required: true
    }
  },

  methods: {
    name(name) {
      return name
        .split(".")
        .slice(0, -1)
        .join(".");
    },

    size(size) {
      let i = Math.floor(Math.log(size) / Math.log(1024));

      return (
        (size / Math.pow(1024, i)).toFixed(2) * 1 +
        " " +
        ["B", "KB", "MB", "GB", "TB"][i]
      );
    },

    date(date) {
      return new Date(date).toLocaleDateString();
    }
  }
};
</script>
