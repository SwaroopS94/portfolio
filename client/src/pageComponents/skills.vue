<template>
  <div>
    <div class="skills-container">
      <div class="skill-label">
      Skills
      </div>
      <div class="skills">
        <div v-for="(skill, index) in skills" v-if="skill && skill.progress">
          <circular-progress-bar :class="getSkillClass(index)" :progress="skill.progress"></circular-progress-bar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CircularProgressBar from "../components/circular-progress-bar";

  export default {
    components: {CircularProgressBar},
    name: "skills",
    props: {
      skills:{
        type: Array,
        default: []
      }
    },
    methods: {
      getSkillClass(index) {
        return (index!==0)?'first-skill':'';
      }
    }
  }
</script>

<style scoped>

  .skills-container {
    margin-top: 30px;
    width: 100%;
    text-align: center;
  }

  .skills {
    display: flex;
  }
</style>