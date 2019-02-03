<template>
  <div>
    <header class="header-container" id="Description">
      <img src="../../src/assets/lemon_tea.png" />
      <hamburger-menu :data="menuData"></hamburger-menu>
      <span class="header-desc-text">
        Anything in Javascript and Android
      </span>
      <div class="header-intro-text">
        I'm Swaroop
      </div>
    </header>
    <div id="about">
      <span>
        About
      </span>
      <p>
        I also work for one another product
        company trying to build things every
        single day going with the flow.
      </p>
    </div>
  </div>
</template>

<script>
  import HamburgerMenu from "../components/hamburger-menu";

  export default {
    components: {HamburgerMenu},
    name: "landing-page",
    data() {
      return {
        menuData:['Home','About','Projects','Contact']
      }
    },
    methods: {

    }
  }
</script>

<style scoped>
  .header-desc-text {
    font-size:30px;
    font-family: "Arial Rounded MT Bold";
    opacity: 1.0;
    color: #8AACB8;
  }
  .header-intro-text {
    font-size: 50px;
    font-family: "Arial Rounded MT Bold";
    opacity: 2.0;
    color: White;
    size: auto;
  }
  .header-container {
    width: 100%;
    height: 300px;
    position: relative;
  }
  .header-container img {
    width: 100%;
    height: 100%;
    opacity: 0.2;
    position: absolute;
    display: block;
    margin: auto;
    z-index: 10;
    object-fit: cover;
  }
</style>