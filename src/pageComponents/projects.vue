<template>
  <div>
    <div class="carousel-container">
      <div v-for="(project,projectIndex) in projects"
           v-model="selectedProject"
           :style="{display: project.style}"
      >
        <div class="text">{{selectedProject.projectTitle}}</div>
        <div class="slide-show img-container">
          <img :src=selectedProject.src alt>
          <a class="prev" @click="addSlide(-1)"><img src='../../src/assets/left_arrow.svg'/> </a>
          <a class="next" @click="addSlide(1)"><img src="../../src/assets/right_arrow.svg"/></a>
        </div>
        <div class="proj-desc">
          {{selectedProject.description}}
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "projects",
    data() {
      return {
        projects: [
          {
            id: 1,
            projectTitle: "Foodpanda PWA",
            projectUrl: "http://wv.foodpanda.in/",
            description: "Foodpanda PWA on Ola consumer app",
            src: "https://raw.githubusercontent.com/SwaroopS94/portfolio/carousel_info/client/src/assets/foodpanda_pwa.png",
            style: "none"
          },
          {
            id: 2,
            projectTitle: "Foodpanda Vendor APP",
            projectUrl: "http://wv.foodpanda.in/",
            description: "Foodpanda Vendor Dashboard to receive orders",
            src: "https://homepages.cae.wisc.edu/~ece533/images/arctichare.png",
            style: "none"
          }],
        selectedProject: {},
        carouselSlideIndex: 0
      }
    },
    methods: {
      addSlide(n) {
        this.carouselSlideIndex += n;
        this.carouselSlideShow(this.carouselSlideIndex);
      },
      carouselSlideShow() {
        if (this.carouselSlideIndex >= this.projects.length) {
          this.carouselSlideIndex = 0;
        }
        else if (this.carouselSlideIndex < 0) {
          this.carouselSlideIndex = this.projects.length - 1;
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

  * {
    box-sizing: border-box
  }

  body {
    font-family: Verdana, sans-serif;
    margin: 0
  }

  .mySlides {
    display: none
  }

  img {
    vertical-align: middle;
  }

  .carousel-container {
    height: 300px;
    width: 100%;
    background: grey;
  }

  .img-container img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .img-container {
    width: 100%;
    height: 200px;
    overflow: auto;
    position: relative;
  }

  .prev {
    position: absolute;
    z-index: 10;
    left: 5px;
    top: 38%;
  }

  .next {
    position: absolute;
    right: 5px;
    top: 38%;
  }

  .prev img, .next img {
    object-fit: cover;
    width: 60px;
    height: 60px;
  }

  .carousel-container .proj-desc {
    margin-top: 10px;
  }

  .slide-show {
    transition: all 1s ease-in;
  }



  /* Fading animation */
  .fade {
    -webkit-animation-name: fade;
    -webkit-animation-duration: 1.5s;
    animation-name: fade;
    animation-duration: 1.5s;
  }

  @keyframes slide {
    0% {
      -webkit-transform: translateX(0px);
      -moz-transform: translateX(0px);
      -ms-transform: translateX(0px);
      -o-transform: translateX(0px);
      transform: translateX(0px);
    }
    100% {
      -webkit-transform: translateX(100px);
      -moz-transform: translateX(0px);
      -ms-transform: translateX(0px);
      -o-transform: translateX(0px);
      transform: translateX(100px);
    }
  }

  @-webkit-keyframes fade {
    from {
      opacity: .4
    }
    to {
      opacity: 1
    }
  }

  @keyframes fade {
    from {
      opacity: .4
    }
    to {
      opacity: 1
    }
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