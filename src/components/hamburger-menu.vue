<template>
  <nav role="navigation">
    <div id="menuToggle">
      <!--
      A fake / hidden checkbox is used as click reciever,
      so you can use the :checked selector on it.
      -->
      <input type="checkbox" />

      <!--
      Some spans to act as a hamburger.

      They are acting like a real hamburger,
      not that McDonalds stuff.
      -->
      <span></span>
      <span></span>
      <span></span>

      <!--
      Too bad the menu has to be inside of the button
      but hey, it's pure CSS magic.
      -->
      <ul id="menu">
        <a href="#">
          <li v-for="item in data">
            {{item}}
          </li>
        </a>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "hamburger-menu",
    data() {
      return {
        data: [1,2,3,4]
      }
    }
  }
</script>

<style scoped>

</style>