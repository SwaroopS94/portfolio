<template>
  <div class="landing-page">
    <header class="header-container" id="Description">
      <img class="container-img" src="../../src/assets/lemon_tea.png" />
      <span class="header-desc-text">
        Anything in Javascript and Android
      </span>
      <div class="header-intro-text">
        I'm Swaroop
      </div>
    </header>
    <div id="about">
      <div>
        About
      </div>
      <img class="profile-pic" src="../../src/images/Profile.jpg" />
      <p>
        I also work for one another product
        company trying to build things every
        single day going with the flow.
      </p>
    </div>
    <projects class="projects"></projects>
    <skills class="skills" :skills="skills"></skills>
  </div>
</template>

<script>
  import HamburgerMenu from "../components/hamburger-menu";
  import Projects from "../pageComponents/projects";
  import Skills from "../pageComponents/skills";
  import mock_data from '../../mock.json';

  export default {
    components: {
      Skills,
      Projects,
      HamburgerMenu},
    name: "landing-page",
    data() {
      return {
        menuData:['Home','About','Projects','Contact'],
        skills: ""
      }
    },
    mounted() {
      this.skills = mock_data.skills;
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

  .projects {
    margin-top: 10px;
  }
  .skills {
    margin-top: 30px;
    width: 100%;
  }

  .landing-page {
    position: relative;
  }
</style>