(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{43:function(e,t,a){},44:function(e,t,a){var n={"./ai-image-generator.png":84,"./blog.png":85,"./pirate-panic.png":86,"./skillImage.svg":87};function i(e){var t=l(e);return a(t)}function l(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=l,e.exports=i,i.id=44},54:function(e,t,a){e.exports=a(92)},59:function(e,t,a){},63:function(e,t,a){},73:function(e,t,a){},84:function(e,t,a){e.exports=a.p+"static/media/ai-image-generator.5c0a4ff9.png"},85:function(e,t,a){e.exports=a.p+"static/media/blog.541559a5.png"},86:function(e,t,a){e.exports=a.p+"static/media/pirate-panic.77b31897.png"},87:function(e,t,a){e.exports=a.p+"static/media/skillImage.59389695.svg"},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(4),r=a.n(l),o=(a(59),a(60),a(61),a(50)),s=a(15),c=a(45),m=a.n(c),u=(a(63),"Daniel"),d="Otis",p=" Programmer | Web Developer | Game Developer | Teacher ",f=[{id:0,image:"fa-linkedin",url:"https://www.linkedin.com/in/daniel-otis-542043113/",style:"socialicons"},{id:1,image:"fa-google",url:"mailto:dotis90@gmail.com",style:"socialicons"},{id:2,image:"fa-github",url:"https://github.com/dotis90",style:"socialicons"},{id:3,image:"fa-twitter",url:"https://www.twitter.com/Dotis90/",style:"socialicons"},{id:4,image:"fa-facebook",url:"https://www.facebook.com/dan.otis.10420",style:"socialicons"}],g=[{title:"Full Stack Development",image:"skillImage.svg",descriptions:["\u2714\ufe0f Build modern and attractive user interfaces for mobile and web applications","\u2714\ufe0f Design fast and powerful back-end applications, web servers, and databases","\u2714\ufe0f Consistently up to date with the newest and best tools for development","\u2714\ufe0f Experience with cloud platforms-- Microsoft Azure Fundamentals Certified"],softwareSkills:[{skillName:"HTML5",fontAwesomeClassname:"simple-icons:html5",style:{color:"#E34F26"}},{skillName:"CSS3",fontAwesomeClassname:"fa-css3",style:{color:"#1572B6"}},{skillName:"Sass",fontAwesomeClassname:"simple-icons:sass",style:{color:"#CC6699"}},{skillName:"JavaScript",fontAwesomeClassname:"simple-icons:javascript",style:{backgroundColor:"#000000",color:"#F7DF1E"}},{skillName:"ReactJS",fontAwesomeClassname:"simple-icons:react",style:{color:"#61DAFB"}},{skillName:"NodeJS",fontAwesomeClassname:"simple-icons:node-dot-js",style:{color:"#339933"}},{skillName:"NPM",fontAwesomeClassname:"simple-icons:npm",style:{color:"#CB3837"}},{skillName:"MongoDB",fontAwesomeClassname:"simple-icons:mongodb",style:{color:"#47A248"}},{skillName:"Gatsby",fontAwesomeClassname:"simple-icons:gatsby",style:{color:"#663399"}}]}],b=[{title:"AI Image Generator",info:"Features a React front-end and a Node.js/Express back-end, and integration with Open AI and Cloudinary APIs. Create a prompt, generate an image, share it with other users, and download your favorites.",url:"https://chimerical-rolypoly-3d8659.netlify.app/",repo:"https://github.com/dotis90/ai-image-generator",img:"ai-image-generator.png"},{title:"Pirate Panic",info:"A 2D Platformer made entirely in python. Avoid hazards, jump on enemies, collect coins, and make it through all six levels.",url:"https://dotis.itch.io/pirate-panic",repo:"https://github.com/dotis90/pirate-panic",img:"pirate-panic.png"},{title:"Personal Blog",info:"Made with Gatsby.js and styled with Sass. Create new articles with ease using Markdown. Features incredibly fast client-side dynamic page rendering.",url:"https://nifty-panini-992868.netlify.app/",repo:"https://github.com/dotis90/blog",img:"blog.png"}],h={heading:"Get In Touch.",message:["Need a website? Have a question? Want to work together?"," Let\u2019s connect. ","I am actively seeking new opportunities and partnerships."],icons:[{id:0,image:"fa-github",url:"https://github.com/dotis90",style:"socialicons"},{id:1,image:"fa-facebook",url:"https://www.facebook.com/dan.otis.10420",style:"socialicons"},{id:2,image:"fa-google",url:"mailto:dotis90@gmail.com",style:"socialicons"},{id:3,image:"fa-linkedin",url:"https://www.linkedin.com/in/daniel-otis-542043113/",style:"socialicons"},{id:4,image:"fa-twitter",url:"https://www.twitter.com/Dotis90/",style:"socialicons"}]},E=a(46),v=u,w=d,k=p,y=f,N=function(){var e=Object(n.useState)(new Array(y.length).fill("socialicons")),t=Object(s.a)(e,2),a=t[0],l=t[1],r=function(e){var t=Object(o.a)(a);return"enter"===e.event?(t[e.icon.id]="socialiconshover",l(t)):"leave"===e.event?(t[e.icon.id]="socialicons",l(t)):void 0};return i.a.createElement("div",null,i.a.createElement("div",{id:"home",className:"title jumbotron jumbotron-fluid bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"},i.a.createElement("div",{id:"stars"}),i.a.createElement("div",{className:"container container-fluid text-center "},i.a.createElement("h1",{className:"display-1"},v+" "+w),i.a.createElement(m.a,{className:"lead"}," ",k),i.a.createElement("div",{className:"p-5"},y.map((function(e){return i.a.createElement("a",{key:e.id,target:"_blank",rel:"noopener noreferrer",href:e.url,"aria-label":"My ".concat(e.image.split("-")[1])},i.a.createElement("i",{className:"fab ".concat(e.image,"  fa-3x ").concat(a[e.id]),onMouseOver:function(){return r({icon:e,event:"enter"})},onMouseOut:function(){return r({icon:e,event:"leave"})}}))}))),i.a.createElement(E.Link,{className:"btn btn-outline-light btn-lg",to:"skills",role:"button","aria-label":"Learn more about me",smooth:!0,duration:1e3},"More about me"))))},j=(a(43),a(19)),x=a(20),C=a(27),O=a(26),A=(a(73),a(101)),S=a(97),D=function(e){Object(C.a)(a,e);var t=Object(O.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(x.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"software-skills-main-div"},i.a.createElement("ul",{className:"dev-icons"},this.props.logos.map((function(e){return i.a.createElement(A.a,{key:e.skillName,placement:"top",overlay:i.a.createElement(S.a,{id:"tooltip-top"},i.a.createElement("strong",null,e.skillName))},i.a.createElement("li",{className:"software-skill-inline",name:e.skillName},i.a.createElement("span",{className:"iconify","data-icon":e.fontAwesomeClassname,style:e.style,"data-inline":"false"})))})))))}}]),a}(i.a.Component),F=a(11),M=function(e){Object(C.a)(n,e);var t=Object(O.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(x.a)(n,[{key:"render",value:function(){return i.a.createElement("div",null,g.map((function(e){return i.a.createElement("div",{className:"skills-main-div"},i.a.createElement(F.Flip,{left:!0,duration:2e3},i.a.createElement("div",{className:"skills-image-div"},i.a.createElement("img",{alt:"Dan is hard at work",src:a(44)("./".concat(e.image))}))),i.a.createElement("div",{className:"skills-text-div"},i.a.createElement(F.Fade,{right:!0,duration:1e3},i.a.createElement("h1",{className:"skills-heading"},e.title)),i.a.createElement(F.Fade,{right:!0,duration:1500},i.a.createElement(D,{logos:e.softwareSkills})),i.a.createElement(F.Fade,{right:!0,duration:2e3},i.a.createElement("div",null,e.descriptions.map((function(e){return i.a.createElement("p",{className:"subTitle skills-text"},e)}))))))})))}}]),n}(n.Component);function _(){return i.a.createElement("div",{className:"main",id:"skills"},i.a.createElement("br",null),i.a.createElement("div",{className:"skills-header-div"},i.a.createElement(F.Fade,{bottom:!0,duration:2e3,distance:"20px"},i.a.createElement("h1",{className:"skills-header"},"What I Do"))),i.a.createElement(M,null))}var I=a(98),P=a(99),B=a(100),L=a(48),W=a.n(L),G=a(13),T=a.n(G),q=(a(88),function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),l=t[0],r=t[1],o=Object(n.useState)(!1),c=Object(s.a)(o,2),m=c[0],u=c[1];return Object(n.useEffect)((function(){window.innerWidth>769?(r(!0),u(!1)):(u(!0),r(!1))}),[]),i.a.createElement("section",{id:"projects"},i.a.createElement(I.a,null,i.a.createElement("div",{className:"project-wrapper"},i.a.createElement(T.a,{bottom:!0,duration:1e3,delay:300,distance:"0px"},i.a.createElement("h2",{className:"section-title"},"Featured Projects")),b.map((function(e,t){var n=e.title,r=e.info,o=e.info2,s=e.url,c=e.repo,u=e.img;return i.a.createElement(P.a,{key:t},i.a.createElement(B.a,{lg:4,sm:12},i.a.createElement(T.a,{left:l,bottom:m,duration:1e3,delay:500,distance:"30px"},i.a.createElement("div",{className:"project-wrapper_text"},i.a.createElement("h3",{className:"project-wrapper_text-title"},n||"Project Title"),i.a.createElement("div",null,i.a.createElement("p",null,r||"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae."),i.a.createElement("p",{className:"mb-4"},o||"")),i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"cta-btn text-color-main",href:s||"#!"},"View"),c&&i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"cta-btn",href:c},"Source Code")))),i.a.createElement(B.a,{lg:8,sm:12},i.a.createElement(T.a,{right:l,bottom:m,duration:1e3,delay:1e3,distance:"30px"},i.a.createElement("div",{className:"project-wrapper__image"},i.a.createElement("a",{href:s||"#!",target:"_blank","aria-label":"Project Link",rel:"noopener noreferrer"},i.a.createElement(W.a,{options:{reverse:!1,max:8,perspective:1e3,scale:1,speed:300,transition:!0,axis:null,reset:!0,easing:"cubic-bezier(.03,.98,.52,.99)"}},i.a.createElement("div",{"data-tilt":!0,className:"thumbnail rounded"},i.a.createElement("img",{alt:"Movie Website",src:a(44)("./".concat(u))}))))))))})))))}),J=(a(89),function(){return i.a.createElement("div",{className:"contact"},i.a.createElement("h2",{className:"contact-title",style:{textAlign:"center"}},h.heading),i.a.createElement("p",{className:"contact-message"},h.message),i.a.createElement("div",{className:"p-5"},h.icons.map((function(e){return i.a.createElement("a",{key:e.id,target:"_blank",rel:"noopener noreferrer",href:e.url,"aria-label":"My ".concat(e.image.split("-")[1])},i.a.createElement("i",{className:"contact-img fab ".concat(e.image,"  fa-3x ").concat(e.id)}))}))))}),z=(a(90),function(){return i.a.createElement("footer",null,i.a.createElement("i",{className:"fas fa-code"})," by"," ",i.a.createElement("a",{className:"badge badge-dark",rel:"noopener",href:"https://github.com/dotis90","aria-label":"My GitHub"},"Daniel Otis")," ","using ",i.a.createElement("i",{className:"fab fa-react"}),i.a.createElement("div",null,i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"cta-btn text-color-main footerbtn",href:"https://github.com/dotis90/portfolio"},"See Source Code")))});a(91);var H=function(){return i.a.createElement(n.Fragment,null,i.a.createElement("div",null,i.a.createElement(N,null),i.a.createElement(_,null),i.a.createElement(q,null),i.a.createElement(J,null)),i.a.createElement(z,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[54,1,2]]]);
//# sourceMappingURL=main.6246f911.chunk.js.map