<template>
  <div>
    <div class="carousel-container">
      <div v-for="(project,projectIndex) in projects"
          v-model="selectedProject"
           :style="{display: project.style}"
      >
        <div class="img-container">
          <div class="text" >Caption {{selectedProject.id}}</div>
          <img :src=selectedProject.src>
          <button class="prev" @click="addSlide(-1)">prev</button>
          <button class="next" @click="addSlide(1)">next</button>
        </div>
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
            style:"none"
          }],
        selectedProject: {},
        carouselSlideIndex: 0
      }
    },
    methods: {
      addSlide(n) {
        this.carouselSlideIndex+=n;
        this.carouselSlideShow(this.carouselSlideIndex);
      },
      carouselSlideShow() {
        if(this.carouselSlideIndex >= this.projects.length) {
          this.carouselSlideIndex  = 0;
        }
        else if(this.carouselSlideIndex <0) {
          this.carouselSlideIndex  = this.projects.length-1;
        }
        this.projects.forEach((slide) => {
          slide.style = "none";
        });
        this.selectedProject = this.projects[this.carouselSlideIndex];
        this.selectedProject.style = "block";
      }
    },
    mounted() {
      this.selectedProject = this.projects[0];
      this.selectedProject.style = "block";
    }
  }
</script>

<style scoped>

  * {box-sizing: border-box}
  body {font-family: Verdana, sans-serif; margin:0}
  .mySlides {display: none}
  img {vertical-align: middle;}

  .carousel-container {
     width: 100%;
  }

  .img-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .img-container {
    height: 200px;
    width: 100%;
    border-radius: 50px;
  }

  .prev {
    margin:auto auto auto 0;
  }

  .nect {
    margin:auto 0 auto auto;
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
    width: 100%;
    text-align: center;
  }

</style>