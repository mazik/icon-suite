<template>
  <div id="preview" class="flex justify-center items-center w-full h-24">
    <span v-html="Svg"></span>
  </div>
</template>

<script>
export default {
  name: "PreviewWidget",
  props: {
    Svg: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
#preview {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cg fill='%239C92AC' fill-opacity='0.20'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E");
}
</style>
