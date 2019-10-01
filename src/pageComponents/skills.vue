<template>
  <div>
    <div class="skills-container">
      <div class="skill-label">
      Skills
      </div>
      <div class="skills" v-if="skills && skills.length>0">
        <div v-for="(skill, index) in skills" v-if="skill && skill.progress">
          <span> {{skill.name}}</span>
          <circular-progress-bar :skillName="skill.name" :progress="skill.progress"></circular-progress-bar>
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
    overflow: scroll hidden;
  }

  .skills {
    display: flex;
  }

  .skill-label {
    font-size: 40px;
    font-weight: bold;

  }
</style>