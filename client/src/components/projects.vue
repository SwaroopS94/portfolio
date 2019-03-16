<template>
  <div>
    <div class="carousel-container">
      <div v-for="(project,projectIndex) in projects"
          v-model="selectedProject"
           :style="{display: project.style}"
      >
        <img :src=selectedProject.src>
        <div class="text" >Caption {{selectedProject.id}}</div>
        <button @click="addSlide(-1)">prev</button>
        <button @click="addSlide(1)">next</button>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "projects",
    data(){
      return {
        projects: [
          {
            id: 1,
            projectTitle:"Foodpanda PWA",
            projectUrl: "http://wv.foodpanda.in/",
            Description: "Description Foodpanda PWA",
            src: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
            style:"none"
          },
          {
            id:2,
            projectTitle:"Foodpanda PWA",
            projectUrl: "http://wv.foodpanda.in/",
            Description: "Description Foodpanda PWA",
            src: "https://homepages.cae.wisc.edu/~ece533/images/arctichare.png",
            style:"block"
          }],
        selectedProject: {},
        carouselSlideIndex: 1
      }
    },
    methods: {
      addSlide(n) {
        this.carouselSlideShow(this.carouselSlideIndex =+ n);
      },
      alerter() {
        window.alert("Hello");
      },
      carouselSlideShow(index) {
        let slideIndex;
        if(index > this.projects.length) {
          slideIndex = 0;
        }
        else if(index<1) {
          slideIndex = this.projects.length-1;
        }
        else {
          slideIndex = index;
        }
        this.projects.forEach((slide) => {
          slide.style = "none";
        });
        this.selectedProject = this.projects[slideIndex];
        this.projects[slideIndex].style = "block";
      }
    },
    mounted() {
      this.selectedProject = this.projects[0];
    }
  }
</script>

<style scoped>

  * {box-sizing: border-box}
  body {font-family: Verdana, sans-serif; margin:0}
  .mySlides {display: none}
  img {vertical-align: middle;}

  .carousel-container {
    position: relative;
    width: 100%;
    height: 100px;
    padding-top: 20px;
  }

  .carousel-container img {
    max-height: 100%;
    max-width: 100%;
  }


  /* Position the "next button" to the right */
  .next {
    right: 0;
  }



  /* Fading animation */
  .fade {
    -webkit-animation-name: fade;
    -webkit-animation-duration: 1.5s;
    animation-name: fade;
    animation-duration: 1.5s;
  }

  @-webkit-keyframes fade {
    from {opacity: .4}
    to {opacity: 1}
  }

  @keyframes fade {
    from {opacity: .4}
    to {opacity: 1}
  }
  /* Caption text */
  .text {
    color: black;
    font-size: 20px;
    padding: 8px 12px;
    position: absolute;
    bottom: 8px;
    width: 100%;
    text-align: center;
  }

</style>