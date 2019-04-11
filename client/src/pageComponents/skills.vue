<template>
  <div>
    <circular-progress-bar :progress="'30%'"></circular-progress-bar>
  </div>
</template>

<script>
  import CircularProgressBar from "../components/circular-progress-bar";

  export default {
    components: {CircularProgressBar},
    name: "skills"
  }
</script>

<style scoped>

</style>