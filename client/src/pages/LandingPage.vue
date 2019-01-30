<template>
  <div>
    <header class="header-background">
      <hamburger-menu :data="menuData"></hamburger-menu>
      <span class="header-desc-text">
        Anything in Javascript and Android
      </span>
      <div class="header-intro-text">
        I'm Swaroop
      </div>
    </header>
  </div>
</template>

<script>
  import HamburgerMenu from "../components/hamburger-menu";

  export default {
    components: {HamburgerMenu},
    name: "landing-page",
    data() {
      return {
        menuData: ['Home','About','Projects','Contact']
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
    color: #8AACB8;
  }
  .header-intro-text {
    font-size: 50px;
    font-family: "Arial Rounded MT Bold";
    color: White;
    size: auto;
  }
  .header-background {
    background-image: ;
  }
</style>