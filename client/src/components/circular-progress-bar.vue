<template>
  <div class="pie-wrapper pie-wrapper--solid progress-50">
    <span class="label">25<span class="smaller">%</span></span>
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
    }
  }
</script>

<style scoped>
  @import url(https://fonts.googleapis.com/css?family=Lato:700);
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  html,
  body {
    background: #ecf0f1;
    color: #444;
    font-family: "Lato", Tahoma, Geneva, sans-serif;
    font-size: 16px;
    padding: 10px;
  }

  .set-size {
    font-size: 10em;
  }

  .charts-container:after {
    clear: both;
    content: "";
    display: table;
  }

  .pie-wrapper {
    height: 10em;
    width: 10em;
    margin: 15px;
    position: relative;
  }
  .pie-wrapper:nth-child(3n + 1) {
    clear: both;
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
  .pie-wrapper .shadow {
    height: 100%;
    width: 100%;
    border: 0.1em solid #bdc3c7;
    border-radius: 50%;
  }
  .pie-wrapper.style-2 .label {
    background: none;
    color: #7f8c8d;
  }
  .pie-wrapper.style-2 .label .smaller {
    color: #bdc3c7;
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
  .pie-wrapper--solid.progress-65 {
    background: linear-gradient(to right, #e67e22 50%, #34495e 50%);
  }
  .pie-wrapper--solid.progress-65:before {
    background: #e67e22;
    -webkit-transform: rotate(126deg);
    transform: rotate(126deg);
  }
  .pie-wrapper--solid.progress-50 {
    background: linear-gradient(to right, #e67e22 50%, #34495e 50%);
  }
  .pie-wrapper--solid.progress-50:before {
    background: #e67e22;
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }


  .pie-wrapper--solid.progress-25 {
    background: linear-gradient(to right, #9b59b6 50%, #34495e 50%);
  }
  .pie-wrapper--solid.progress-25:before {
    background: #34495e;
    -webkit-transform: rotate(-270deg);
    transform: rotate(-270deg);
  }
  .pie-wrapper--solid.progress-88 {
    background: linear-gradient(to right, #3498db 50%, #34495e 50%);
  }
  .pie-wrapper--solid.progress-88:before {
    background: #3498db;
    -webkit-transform: rotate(43.2deg);
    transform: rotate(43.2deg);
  }

</style>