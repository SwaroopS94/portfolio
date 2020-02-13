<template>
  <div>
    <div class="skills-container">
      <div class="skill-label">
        Skills
      </div>
      <div id="skillContainer" class="skills" v-if="skills && skills.length>0">
        <div class="skills-block" v-for="(skill, index) in skills" v-if="skill && skill.progress">
          <div class="skill-name"> {{skill.name}}</div>
          <div class="linear-progress-bar">
            <div :id="'lin_'+index" class="linear-progress">

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "skills",
    props: {
      skills: {
        type: Array,
        default: []
      }
    },
    methods: {
      getSkillClass(index) {
        return (index !== 0) ? 'first-skill' : '';
      },
      onSkillsFocussed(skillIndex, skillProgress) {
        if (this.skills.length > 0) {
          let domElem = document.getElementById(`lin_${skillIndex}`);
          domElem.style.width = skillProgress;
        }
      },
      onScrollOffsetReached() {
        console.log("Checking for Offset : ",);
      }
    },
    mounted() {
      let debouncedFunction = debounce(this.onScrollOffsetReached.bind(this), 1000);
      window.addEventListener("scroll", debouncedFunction());
    }
  }
</script>

<style scoped>

  .skills-container {
    margin-top: 30px;
    width: 100%;
    text-align: center;
    overflow: scroll hidden;
    margin-bottom: 30px;
  }

  .skill-label {
    font-size: 40px;
    font-weight: bold;
  }

  .skills .skill-name {
    font-size: 20px;
    font-family: sans-serif;
    font-weight: bold;
    text-align: left;
  }

  .linear-progress-bar {
    width: 300px;
    border: 3px solid black;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    margin: auto;
  }

  .linear-progress-bar .linear-progress {
    width: 0;
    height: 5px;
    background: #000;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
    -webkit-transition: width 2s;
    -moz-transition: width 2s;
    -ms-transition: width 2s;
    -o-transition: width 2s;
    transition: width ease-in-out 2s;
  }

  .skills-block {
    width: 350px;
    margin: auto;
    display: block;
    text-align: left;
    padding: 40px 0px 0px 0px;
  }


</style>