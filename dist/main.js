(function(e){function t(t){for(var a,i,r=t[0],l=t[1],c=t[2],u=0,p=[];u<r.length;u++)i=r[u],n[i]&&p.push(n[i][0]),n[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),s()}function s(){for(var e,t=0;t<o.length;t++){for(var s=o[t],a=!0,r=1;r<s.length;r++){var l=s[r];0!==n[l]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=s[0]))}return e}var a={},n={main:0},o=[];function i(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=a,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(s,a,function(t){return e[t]}.bind(null,a));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var d=l;o.push(["56d7","chunk-vendors"]),s()})({"034f":function(e,t,s){"use strict";var a=s("64a9"),n=s.n(a);n.a},"15fa":function(e,t,s){"use strict";var a=s("74a5"),n=s.n(a);n.a},1708:function(e,t,s){e.exports=s.p+"img/Profile.ac958f1b.jpg"},"41e8":function(e,t,s){"use strict";var a=s("6ec9"),n=s.n(a);n.a},"549d":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);var a=s("2b0e"),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},o=[],i={methods:{animateClick(e){e.call(this)}}},r=i,l=(s("034f"),s("2877")),c=Object(l["a"])(r,n,o,!1,null,null,null),d=c.exports,u=s("8c4f"),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"landing-page"},[a("div",{staticClass:"header-description",attrs:{id:"Description"}},[a("div",{staticClass:"header-img-container"},[a("div",{staticClass:"header-intro-container"},[e._v("\n        Hello, I'm Swaroop\n        "),a("div",{ref:"headerDownBtn",staticClass:"header-down-btn",on:{click:function(t){e.animateBtn(e.scrollToSection.bind(this,"about"),"headerDownBtn")}}},[e._v("\n          Dive Deep\n        ")])])])]),a("div",{staticClass:"about",attrs:{id:"about_section"}},[a("div",{staticClass:"title"},[e._v("\n      About Me\n    ")]),a("img",{staticClass:"profile-pic",attrs:{src:s("1708")}}),a("p",[e._v("\n      "+e._s(e.mockData.aboutMeDesc)+"\n    ")])]),a("projects",{staticClass:"projects"}),a("skills",{staticClass:"skills",attrs:{skills:e.skills}}),a("div",{staticClass:"footer"},[a("span",{staticClass:"contact-header"},[e._v("Get in touch!!")]),a("div",{staticClass:"contact-message"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.messageData,expression:"messageData"}],attrs:{placeholder:"Want to share something"},domProps:{value:e.messageData},on:{input:function(t){t.target.composing||(e.messageData=t.target.value)}}})]),a("button",{staticClass:"send-message",on:{click:function(t){e.sendMessage()}}},[e._v("\n      Send Message\n    ")]),a("div",[a("ul",{staticClass:"social-contacts"},e._l(e.socialContacts,function(t){return e.socialContacts&&e.socialContacts.length>0?a("li",[a("a",{class:e.getFontClass(t.name),staticStyle:{width:"100%",height:"100%"},attrs:{href:t.src}})]):e._e()}),0)])])],1)},f=[],m=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("nav",{attrs:{role:"navigation"}},[s("div",{attrs:{id:"menuToggle"}},[s("input",{attrs:{type:"checkbox"}}),s("span"),s("span"),s("span"),s("ul",{attrs:{id:"menu"}},[s("a",{attrs:{href:"#"}},e._l(e.data,function(t){return s("li",[e._v("\n          "+e._s(t)+"\n        ")])}),0)])])])},h=[],v={name:"hamburger-menu",data(){return{data:[1,2,3,4]}}},g=v,b=Object(l["a"])(g,m,h,!1,null,"6e857690",null),k=b.exports,w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"carousel-container"},e._l(e.projects,function(t,n){return a("div",{style:{display:t.style},model:{value:e.selectedProject,callback:function(t){e.selectedProject=t},expression:"selectedProject"}},[a("div",{staticClass:"text"},[e._v(e._s(e.selectedProject.projectTitle))]),a("div",{staticClass:"slide-show img-container"},[a("img",{attrs:{src:e.selectedProject.src,alt:""}}),a("a",{staticClass:"prev",on:{click:function(t){e.addSlide(-1)}}},[a("img",{attrs:{src:s("d51f")}})]),a("a",{staticClass:"next",on:{click:function(t){e.addSlide(1)}}},[a("img",{attrs:{src:s("de66")}})])]),a("div",{staticClass:"proj-desc"},[e._v("\n        "+e._s(e.selectedProject.description)+"\n      ")])])}),0)])},_=[],j={name:"projects",data(){return{projects:[{id:1,projectTitle:"Foodpanda PWA",projectUrl:"http://wv.foodpanda.in/",description:"Foodpanda PWA on Ola consumer app",src:"https://raw.githubusercontent.com/SwaroopS94/portfolio/carousel_info/client/src/assets/foodpanda_pwa.png",style:"none"},{id:2,projectTitle:"Foodpanda Vendor APP",projectUrl:"http://wv.foodpanda.in/",description:"Foodpanda Vendor Dashboard to receive orders",src:"https://homepages.cae.wisc.edu/~ece533/images/arctichare.png",style:"none"}],selectedProject:{},carouselSlideIndex:0}},methods:{addSlide(e){this.carouselSlideIndex+=e,this.carouselSlideShow(this.carouselSlideIndex)},carouselSlideShow(){this.carouselSlideIndex>=this.projects.length?this.carouselSlideIndex=0:this.carouselSlideIndex<0&&(this.carouselSlideIndex=this.projects.length-1),this.projects.forEach(e=>{e.style="none"}),this.selectedProject=this.projects[this.carouselSlideIndex],this.selectedProject.style="block"}},mounted(){this.selectedProject=this.projects[0],this.selectedProject.style="block"}},C=j,S=(s("41e8"),Object(l["a"])(C,w,_,!1,null,"4a0380da",null)),y=S.exports,x=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"skills-container"},[s("div",{staticClass:"skill-label"},[e._v("\n    Skills\n    ")]),e.skills&&e.skills.length>0?s("div",{staticClass:"skills"},e._l(e.skills,function(t,a){return t&&t.progress?s("div",[s("div",{staticClass:"skills-block"},[s("div",{staticClass:"skill-name"},[e._v(" "+e._s(t.name))]),s("div",{staticClass:"linear-progress-bar"},[s("div",{staticClass:"linear-progress",attrs:{id:"lin_"+a}})])])]):e._e()}),0):e._e()])])},P=[],D={name:"skills",props:{skills:{type:Array,default:[]}},methods:{getSkillClass(e){return 0!==e?"first-skill":""}},watch:{skills(e){e.length>0&&setTimeout(()=>{let e=document.getElementsByClassName("linear-progress");for(let t=0;t<e.length;t++)e[t].style.width="80%"},2e3)}}},O=D,M=(s("6335"),Object(l["a"])(O,x,P,!1,null,"bd62afa8",null)),I=M.exports,T=s("9564"),E=s("bc3a"),A=s.n(E),B=s("69d9"),$=s.n(B),F={mounted(){console.log("Mounting Mixin")},methods:{animateBtn(e,t){console.log("Calling animate");let s=this.$refs[t];s.classList.add("animate-btn-click"),setTimeout(()=>{s.classList.remove("animate-btn-click"),e.call(this)},700)}}},J={mixins:[F],components:{Skills:I,Projects:y,HamburgerMenu:k},name:"landing-page",data(){return{menuData:["Home","About","Projects","Contact"],skills:[],messageData:"",socialContacts:[],mockData:T,deferredPrompt:{}}},mounted(){this.skills=JSON.parse(JSON.stringify(T.skills)),this.socialContacts=T.socialContacts,window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),this.deferredPrompt=e}),console.log("Getting the mode of env : ",Object({NODE_ENV:"production",BASE_URL:"/"}))},methods:{sendMessage(){A.a.post("http://localhost:8080/send",{data:this.messageData}).then(e=>{console.log("Response : ",e)}),$.a.showToast("Message Sent")},getFontClass(e){let t="fa ";switch(e){case"facebook":t+="fa-facebook-square";break;case"linkedin":t+="fa-linkedin-square";break;default:t+="fa-envelope-square"}return t},scrollToSection(e){let t=document.getElementById("about_section");switch(e){case"about":t.scrollIntoView({behavior:"smooth"});break}this.deferredPrompt.prompt("Test"),this.deferredPrompt.userChoice.then(e=>{console.log("Selected Val : ",e),this.deferredPrompt=null})}}},N=J,L=(s("15fa"),Object(l["a"])(N,p,f,!1,null,"5795f8c2",null)),V=L.exports;a["a"].use(u["a"]);var q=new u["a"]({mode:"history",base:"/",routes:[{path:"/",name:"LandingPage",component:V},{path:"*",component:V}]});a["a"].config.productionTip=!1,new a["a"]({router:q,render:function(e){return e(d)}}).$mount("#app")},6335:function(e,t,s){"use strict";var a=s("549d"),n=s.n(a);n.a},"64a9":function(e,t,s){},"69d9":function(e,t){},"6ec9":function(e,t,s){},"74a5":function(e,t,s){},9564:function(e){e.exports={skills:[{name:"Javascript",progress:50},{name:"Android",progress:70},{name:"test",progress:30},{name:"rest",progress:25},{name:"java",progress:70}],socialContacts:[{name:"facebook",src:"https://www.facebook.com/swaroop.srinivasan"},{name:"linkedin",src:"https://www.linkedin.com/in/swaroopsrinivasan/"},{name:"Mail",src:"mailto:swaroop.srini@gmail.com"}],aboutMeDesc:"I am Swaroop Srinivasan with a development experience of 3 years in the industry. I can bring your dreams to reality on platforms like android and Javascript."}},d51f:function(e,t,s){e.exports=s.p+"img/left_arrow.c953d922.svg"},de66:function(e,t,s){e.exports=s.p+"img/right_arrow.37fad274.svg"}});
//# sourceMappingURL=main.js.map