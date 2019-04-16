<template>
  <div :id="'circular_progress'+progress">
    <span class="label">{{progress}}<span class="smaller">%</span></span>
  </div>
</template>

<script>
  export default {
    name: "circular-progress-bar",
    props: {
      progress: {
        type: Number,
        default: 0
      }
    },
    mounted() {
      console.log("Progress : ",this.progress);
      let circularProgressPercentage = 90*this.progress/25;
      let circularProgressStyle = document.createElement("style");
      circularProgressStyle.type = "text/css";
      circularProgressStyle.innerHTML = ".pie-wrapper--solid.progress-50:before {" +
      "background: #e67e22;" +
      "-webkit-transform: rotate(0deg);" +
      `transform: rotate(${circularProgressPercentage}deg);` +
      "}";
      let circularProgressBar = document.getElementById(`circular_progress`+this.progress);
      circularProgressBar.className = "pie-wrapper pie-wrapper--solid progress-50";
    }
  }
</script>

<style scoped>



  .pie-wrapper--solid {
    border-radius: 50%;
    overflow: hidden;
  }
  html,
  body {
    background: #ecf0f1;
    color: #444;
    font-family: "Lato", Tahoma, Geneva, sans-serif;
    font-size: 16px;
    padding: 10px;
  }

  .pie-wrapper {
    height: 10em;
    width: 10em;
    margin: 15px;
    position: relative;
  }
  .pie-wrapper .pie {
    height: 100%;
    width: 100%;
    clip: rect(0, 1em, 1em, 0.5em);
    left: 0;
    position: absolute;
    top: 0;
  }
  .pie-wrapper .pie .half-circle {
    height: 100%;
    width: 100%;
    border: 0.1em solid #3498db;
    border-radius: 50%;
    clip: rect(0, 0.5em, 1em, 0);
    left: 0;
    position: absolute;
    top: 0;
  }
  .pie-wrapper .label {
    background: #34495e;
    border-radius: 50%;
    bottom: 0.4em;
    color: #ecf0f1;
    cursor: default;
    display: block;
    font-size: 0.25em;
    left: 0.4em;
    line-height: 2.8em;
    position: absolute;
    right: 0.4em;
    text-align: center;
    top: 0.4em;
  }
  .pie-wrapper .label .smaller {
    color: #bdc3c7;
    font-size: 0.45em;
    padding-bottom: 20px;
    vertical-align: super;
  }


  .pie-wrapper--solid {
    border-radius: 50%;
    overflow: hidden;
  }
  .pie-wrapper--solid:before {
    border-radius: 0 100% 100% 0 / 50%;
    content: "";
    display: block;
    height: 100%;
    margin-left: 50%;
    -webkit-transform-origin: left;
    transform-origin: left;
  }
  .pie-wrapper--solid .label {
    background: transparent;
  }
  .pie-wrapper--solid.progress-50 {
    background: linear-gradient(to right, #e67e22 50%, #34495e 50%);
  }

</style>