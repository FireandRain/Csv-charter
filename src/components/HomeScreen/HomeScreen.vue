<template>
  <div id="app">
    <img alt="Suade logo" src="../../assets/logo.png" />
    <FileUploader msg="Upload your file" />
  </div>
</template>

<script>
import FileUploader from "./FileUploader.vue";

export default {
  name: "HomeScreen",
  components: {
    FileUploader
  }
};
</script>

<style></style>
