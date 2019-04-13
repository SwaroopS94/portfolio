<template>
  <div>
    <div class="skills-container">
      <span class="skill-label">
      Skills
    </span>
      <circular-progress-bar :progress="30"></circular-progress-bar>
    </div>
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

  .skills-container {
    width: 100%;
  }
</style>