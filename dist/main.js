(function(e){function t(t){for(var a,o,i=t[0],l=t[1],c=t[2],u=0,p=[];u<i.length;u++)o=i[u],r[o]&&p.push(r[o][0]),r[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(p.length)p.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],a=!0,i=1;i<s.length;i++){var l=s[i];0!==r[l]&&(a=!1)}a&&(n.splice(t--,1),e=o(o.s=s[0]))}return e}var a={},r={main:0},n=[];function o(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=a,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(s,a,function(t){return e[t]}.bind(null,a));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var d=l;n.push(["56d7","chunk-vendors"]),s()})({"034f":function(e,t,s){"use strict";var a=s("64a9"),r=s.n(a);r.a},"0982":function(e,t,s){"use strict";var a=s("12c7"),r=s.n(a);r.a},"12c7":function(e,t,s){},1601:function(e,t,s){"use strict";var a=s("de20"),r=s.n(a);r.a},1708:function(e,t,s){e.exports=s.p+"img/Profile.ac958f1b.jpg"},1924:function(e,t,s){},"485d":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);var a=s("2b0e"),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},n=[],o=(s("034f"),s("2877")),i={},l=Object(o["a"])(i,r,n,!1,null,null,null),c=l.exports,d=s("8c4f"),u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"landing-page"},[e._m(0),a("div",{staticClass:"about",attrs:{id:"about"}},[a("div",[e._v("\n      About Me\n    ")]),a("img",{staticClass:"profile-pic",attrs:{src:s("1708")}}),a("p",[e._v("\n      "+e._s(e.mockData.aboutMeDesc)+"\n    ")])]),a("projects",{staticClass:"projects"}),a("skills",{staticClass:"skills",attrs:{skills:e.skills}}),a("div",{staticClass:"footer"},[a("span",{staticClass:"contact-header"},[e._v("Get in touch!!")]),a("div",{staticClass:"contact-message"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.messageData,expression:"messageData"}],attrs:{placeholder:"Want to share something"},domProps:{value:e.messageData},on:{input:function(t){t.target.composing||(e.messageData=t.target.value)}}})]),a("button",{staticClass:"send-message",on:{click:function(t){e.sendMessage()}}},[e._v("\n      Send Message\n    ")]),a("div",[a("ul",{staticClass:"social-contacts"},e._l(e.socialContacts,function(t){return e.socialContacts&&e.socialContacts.length>0?a("li",[a("a",{class:e.getFontClass(t.name),staticStyle:{width:"100%",height:"100%"},attrs:{href:t.src}})]):e._e()}),0)])])],1)},p=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"header-container",attrs:{id:"Description"}},[a("img",{staticClass:"container-img",attrs:{src:s("b03e")}}),a("span",{staticClass:"header-desc-text"},[e._v("\n      Anything in Javascript and Android\n    ")]),a("div",{staticClass:"header-intro-text"},[e._v("\n      I'm Swaroop\n    ")])])}],f=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("nav",{attrs:{role:"navigation"}},[s("div",{attrs:{id:"menuToggle"}},[s("input",{attrs:{type:"checkbox"}}),s("span"),s("span"),s("span"),s("ul",{attrs:{id:"menu"}},[s("a",{attrs:{href:"#"}},e._l(e.data,function(t){return s("li",[e._v("\n          "+e._s(t)+"\n        ")])}),0)])])])},m=[],g={name:"hamburger-menu",data(){return{data:[1,2,3,4]}}},h=g,v=Object(o["a"])(h,f,m,!1,null,"6e857690",null),b=v.exports,_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"carousel-container"},e._l(e.projects,function(t,r){return a("div",{style:{display:t.style},model:{value:e.selectedProject,callback:function(t){e.selectedProject=t},expression:"selectedProject"}},[a("div",{staticClass:"text"},[e._v(e._s(e.selectedProject.projectTitle))]),a("div",{staticClass:"img-container"},[a("img",{attrs:{src:e.selectedProject.src}}),a("a",{staticClass:"prev",on:{click:function(t){e.addSlide(-1)}}},[a("img",{attrs:{src:s("d51f")}})]),a("a",{staticClass:"next",on:{click:function(t){e.addSlide(1)}}},[a("img",{attrs:{src:s("de66")}})])]),a("div",{staticClass:"proj-desc"},[e._v("\n        "+e._s(e.selectedProject.description)+"\n      ")])])}),0)])},k=[],j={name:"projects",data(){return{projects:[{id:1,projectTitle:"Foodpanda PWA",projectUrl:"http://wv.foodpanda.in/",description:"Foodpanda PWA on Ola consumer app",src:"https://raw.githubusercontent.com/SwaroopS94/portfolio/carousel_info/client/src/assets/foodpanda_pwa.png",style:"none"},{id:2,projectTitle:"Foodpanda Vendor APP",projectUrl:"http://wv.foodpanda.in/",description:"Foodpanda Vendor Dashboard to receive orders",src:"https://homepages.cae.wisc.edu/~ece533/images/arctichare.png",style:"none"}],selectedProject:{},carouselSlideIndex:0}},methods:{addSlide(e){this.carouselSlideIndex+=e,this.carouselSlideShow(this.carouselSlideIndex)},carouselSlideShow(){this.carouselSlideIndex>=this.projects.length?this.carouselSlideIndex=0:this.carouselSlideIndex<0&&(this.carouselSlideIndex=this.projects.length-1),this.projects.forEach(e=>{e.style="none"}),this.selectedProject=this.projects[this.carouselSlideIndex],this.selectedProject.style="block"}},mounted(){this.selectedProject=this.projects[0],this.selectedProject.style="block"}},w=j,y=(s("64b1"),Object(o["a"])(w,_,k,!1,null,"41c86e97",null)),C=y.exports,x=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"skills-container"},[s("div",{staticClass:"skill-label"},[e._v("\n    Skills\n    ")]),e.skills&&e.skills.length>0?s("div",{staticClass:"skills"},e._l(e.skills,function(t,a){return t&&t.progress?s("div",[s("span",[e._v(" "+e._s(t.name))]),s("circular-progress-bar",{attrs:{skillName:t.name,progress:t.progress}})],1):e._e()}),0):e._e()])])},S=[],P=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.skillName?s("div",{attrs:{id:"circular_progress"+e.skillName}},[s("span",{staticClass:"label"},[e._v(e._s(e.progress)),s("span",{staticClass:"smaller"},[e._v("%")])])]):e._e()},O=[],M={name:"circular-progress-bar",props:{progress:{type:Number,default:0},skillName:{type:String,default:""}},mounted(){let e=90*this.progress/25;console.log("Progress : ",e);let t=document.createElement("style");t.type="text/css",t.innerHTML=`.pie-wrapper--solid.progress-50.${"circular_progress"+this.skillName} {`+"background: linear-gradient(to right, #e67e22 50%, #34495e 50%);}",t.innerHTML=`.pie-wrapper--solid.progress-50.${"circular_progress"+this.skillName}:before {`+"background: #e67e22;-webkit-transform: rotate(0deg);"+`transform: rotate(${e}deg);`+"}";let s=document.querySelector("script");s.parentNode.insertBefore(t,s);let a=document.getElementById("circular_progress"+this.skillName);a.className=`pie-wrapper pie-wrapper--solid progress-50 ${"circular_progress"+this.skillName}`}},N=M,D=(s("1601"),Object(o["a"])(N,P,O,!1,null,"0d41cab8",null)),I=D.exports,T={components:{CircularProgressBar:I},name:"skills",props:{skills:{type:Array,default:[]}},methods:{getSkillClass(e){return 0!==e?"first-skill":""}}},$=T,E=(s("0982"),Object(o["a"])($,x,S,!1,null,"501ecf2e",null)),A=E.exports,J=s("9564"),F=s("bc3a"),q=s.n(F),H=s("69d9"),B=s.n(H),L={components:{Skills:A,Projects:C,HamburgerMenu:b},name:"landing-page",data(){return{menuData:["Home","About","Projects","Contact"],skills:[],messageData:"",socialContacts:[],mockData:J}},mounted(){this.skills=JSON.parse(JSON.stringify(J.skills)),this.socialContacts=J.socialContacts},methods:{sendMessage(){q.a.post("http://localhost:8080/send",{data:this.messageData}).then(e=>{console.log("Response : ",e)}),B.a.showToast("Message Sent")},getFontClass(e){let t="fa ";switch(e){case"facebook":t+="fa-facebook-square";break;case"linkedin":t+="fa-linkedin-square";break;default:t+="fa-envelope-square"}return t}}},W=L,U=(s("eb62"),Object(o["a"])(W,u,p,!1,null,"0e315a6b",null)),V=U.exports;a["a"].use(d["a"]);var G=new d["a"]({mode:"history",base:"/",routes:[{path:"/",name:"LandingPage",component:V}]});a["a"].config.productionTip=!1;let R={methods:{showToast(e){console.log("Toast caught : ",e)}}};new a["a"]({router:G,render:function(e){return e(c)},mixins:[R]}).$mount("#app")},"64a9":function(e,t,s){},"64b1":function(e,t,s){"use strict";var a=s("485d"),r=s.n(a);r.a},"69d9":function(e,t){},9564:function(e){e.exports={skills:[{name:"Javascript",progress:50},{name:"Android",progress:70},{name:"test",progress:30},{name:"rest",progress:25},{name:"java",progress:70}],socialContacts:[{name:"facebook",src:"https://www.facebook.com/swaroop.srinivasan"},{name:"linkedin",src:"https://www.linkedin.com/in/swaroopsrinivasan/"},{name:"Mail",src:"mailto:swaroop.srini@gmail.com"}],aboutMeDesc:"I am Swaroop Srinivasan with a development experience of 3 years in the industry. I can bring your dreams to reality on platforms like android and Javascript."}},b03e:function(e,t,s){e.exports=s.p+"img/lemon_tea.57084cc3.png"},d51f:function(e,t,s){e.exports=s.p+"img/left_arrow.c953d922.svg"},de20:function(e,t,s){},de66:function(e,t,s){e.exports=s.p+"img/right_arrow.37fad274.svg"},eb62:function(e,t,s){"use strict";var a=s("1924"),r=s.n(a);r.a}});
//# sourceMappingURL=main.js.map