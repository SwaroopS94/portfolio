<template>
  <div>
    <span>
      {{message}}
    </span>
  </div>
</template>

<script>
  export default {
    name: "toast",
    props: {
      message: {
        default: "Empty---",
        type: String
      }
    }
  }
</script>

<style scoped>

</style>