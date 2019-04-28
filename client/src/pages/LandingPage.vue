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
    <div class="about" id="about">
      <div>
        About Me
      </div>
      <img class="profile-pic" src="../../src/images/Profile.jpg" />
      <p>
        {{mockData.aboutMeDesc}}
      </p>
    </div>
    <projects class="projects"></projects>
    <skills class="skills" :skills="skills"></skills>
    <div class="footer">
      <span class="contact-header">Get in touch!!</span>
      <div class="contact-message">
        <textarea placeholder="Want to share something" v-model="messageData"/>
      </div>
      <button class="send-message" @click="sendMessage()">
        Send Message
      </button>
      <div>
        <ul class="social-contacts">
          <li v-if="socialContacts && socialContacts.length>0" v-for="contact in socialContacts">
            <a :href="contact.src" style="width: 100%; height: 100%;" :class="getFontClass(contact.name)" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import HamburgerMenu from "../components/hamburger-menu";
  import Projects from "../pageComponents/projects";
  import Skills from "../pageComponents/skills";
  import mock_data from '../../mock.json';
  import axios from 'axios';
  import common from "../../src/common.js";

  export default {
    components: {
      Skills,
      Projects,
      HamburgerMenu},
    name: "landing-page",
    data() {
      return {
        menuData:['Home','About','Projects','Contact'],
        skills: [],
        messageData: "",
        socialContacts: [],
        mockData: mock_data
      }
    },
    mounted() {
      this.skills = JSON.parse(JSON.stringify(mock_data.skills));
      this.socialContacts = mock_data.socialContacts;

    },
    methods: {
      sendMessage() {
        axios.post("http://localhost:8080/send",{
          data: this.messageData
        }).then((res) => {
          console.log("Response : ",res);
        });
        common.showToast("Message Sent");
      },
      getFontClass(name) {
        let iconFontclass = "fa ";
        switch(name) {
          case "facebook":
            iconFontclass+="fa-facebook-square";
            break;
          case "linkedin":
            iconFontclass+="fa-linkedin-square";
            break;
          default:
            iconFontclass+="fa-envelope-square";
        }
        return iconFontclass;
      }
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

  .footer {
    position: relative;
    padding-bottom: 10px;
  }

  .footer .contact-header {
    font-size: 20px;
    font-weight: bolder;
  }
  .footer .contact-message {
    padding: 10px;
  }
  .footer .contact-message textarea {
    width: 100%;
    height: 100px;
    font-size: 20px;
    max-width: 100%;
    max-height: 150px;
  }

  .footer .social-contacts {
    margin: 0;
    padding-left: 0;
  }
  .footer .social-contacts li {
    display: inline-block;
    padding-left: 10px;
    margin: 0;
    font-size: 50px;
  }

  .send-message {
    background: #000;
    color: #fff;
    size: 15px;
    font-size: 15px;
    font-weight: bolder;
    padding: 5px 30px 5px 30px;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
  }

  .about p {
    position: relative;
    margin: auto;
    width: 65%;
  }
</style>