(this["webpackJsonpnlpulido.github.io"]=this["webpackJsonpnlpulido.github.io"]||[]).push([[0],{33:function(e,t,s){},42:function(e,t,s){},70:function(e,t,s){},71:function(e,t,s){},72:function(e,t,s){},85:function(e,t,s){},86:function(e,t,s){},87:function(e,t,s){},91:function(e,t,s){},92:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s(20),i=s.n(c),n=s(25),o=(s(70),s(71),s(56)),r=s(7),l=s(35),h=s(116),d=s(108),j=s(109),b=s(12),u=Object(b.a)(),p=s(51),m=s.n(p),f=(s(72),s(1)),x=[{title:"home",route:"/"},{title:"about",route:"/about"},{title:"contact",route:"/contact"}];var O=Object(r.f)((function(){var e=Object(l.useMediaQuery)({query:"(max-width: 768px)"}),t=Object(a.useState)(!1),s=Object(o.a)(t,2),c=s[0],i=s[1];return Object(f.jsxs)("div",{className:"Toolbar",children:[Object(f.jsxs)(h.a,{component:"div",className:"header",children:[Object(f.jsx)(h.a,{component:"div",className:"title",children:Object(f.jsx)("button",{className:"desktopLink",title:"Home",onClick:function(){return u.push("/")},children:Object(f.jsx)(d.a,{variant:"h4",children:Object(f.jsxs)(h.a,{fontWeight:"bold",children:[">"," neil pulido",Object(f.jsx)("span",{class:"blink",children:"_"})]})})})}),e?Object(f.jsx)("div",{className:"mobileMenuIcon",children:Object(f.jsx)(j.a,{onClick:function(){return i(!c)},children:Object(f.jsx)(m.a,{fontSize:"medium",style:{color:"black"}})})}):Object(f.jsx)("div",{className:"desktopMenu",children:x.map((function(e,t){return Object(f.jsx)("button",{className:"desktopLink",onClick:function(){return u.push(e.route)},children:Object(f.jsx)(d.a,{variant:"h4",children:Object(f.jsx)(h.a,{fontWeight:"bold",children:e.title})})},t)}))})]}),c&&e?Object(f.jsx)("div",{className:"mobileMenu",children:x.map((function(e,t){return Object(f.jsx)("button",{className:"mobileLink",onClick:function(){return alert(e.alert)},children:e.title},t)}))}):Object(f.jsx)(f.Fragment,{})]})})),g=s.p+"static/media/headshot_bubble.a10f4fc6.png";s(42);var y=function(){return Object(f.jsxs)("div",{className:"portraitContainer",children:[Object(f.jsxs)("div",{className:"eyeCatcherPortrait",children:[Object(f.jsx)("h1",{children:"Hi there!"}),Object(f.jsx)("h1",{children:"My name is Neil."}),Object(f.jsx)("h2",{children:"I'm a software engineer based in the Bay Area."}),Object(f.jsx)("h2",{children:"Let's make something great."})]}),Object(f.jsx)("img",{src:g,alt:"headshot"})]})},v=(s(85),s(110)),w=s(118),N=s(111),k=s(112),S=s(113),P=Object(v.a)((function(e){return{root:{width:250,fontSize:15,backgroundColor:"#3f4f4c",color:"#f2f2f2",fontFamily:"Fira Sans"},language:{fontStyle:"italic"},cardHeader:{display:"flex",flexDirection:"column",justifyContent:"flex-start"},link:{color:"#a9c4c0"}}}));function I(e){var t=P();return Object(f.jsx)("div",{children:Object(f.jsxs)(w.a,{className:t.root,variant:"outlined",backgroundColor:"theme.palette.secondary",children:[Object(f.jsxs)(N.a,{children:[Object(f.jsx)("h1",{children:e.project.title}),Object(f.jsx)("p",{children:e.project.description}),Object(f.jsx)("h3",{className:t.language,children:e.project.language})]}),Object(f.jsx)(k.a,{children:Object(f.jsx)(S.a,{size:"small",color:"primary",onClick:function(){return u.push(e.project.route)},children:"Learn More"})})]})})}var C=[{title:"iPARQ Permit Validator",language:"Python + Selenium",description:"Automated validation of parking permit creation",route:"/projects/permit-validator",image:"star",github:"https://github.com/nlpulido/iparq-automation-testing"},{title:"Oasis Mobile",language:"React Native + Expo",description:"Wellness in the comfort of your pocket",route:"/projects/oasis",image:"https://i.imgur.com/K9uROaF.png"},{title:"DPS Lost & Found",language:"React.JS",description:"A Web App for USF's Public Safety",route:"/projects/lost-and-found",image:"../../components/icons/github-mark-white.png",github:"https://github.com/nlpulido/dps-lost-and-found"},{title:"Shadow Thief",language:"Python + Selenium",description:"An automated add to cart service",route:"/projects/shadow-thief",image:"add_circle"}];function F(){return Object(f.jsx)("ul",{className:"carousel",children:C.map((function(e,t){return Object(f.jsx)("li",{className:"li-"+t,children:Object(f.jsx)(I,{project:e})})}))})}var A=function(){return Object(f.jsxs)("div",{className:"landscapeContainer",children:[Object(f.jsxs)("div",{className:"eyeCatcherLandscape",children:[Object(f.jsxs)("div",{className:"eyeCatcherTextLandscape",children:[Object(f.jsxs)(d.a,{variant:"h1",children:[Object(f.jsx)(h.a,{children:"Hi there!"}),Object(f.jsx)(h.a,{children:"My name is Neil."})]}),Object(f.jsxs)(d.a,{variant:"h2",gutterBottom:!0,children:[Object(f.jsx)(h.a,{children:"I'm a software engineer based in the Bay Area."}),Object(f.jsx)(h.a,{children:"Let's make something great."})]})]}),Object(f.jsx)("img",{src:g,alt:"headshot"})]}),Object(f.jsxs)(h.a,{component:"div",className:"projects",bgcolor:"primary.light",children:[Object(f.jsx)("header",{children:Object(f.jsx)(d.a,{variant:"h3",color:"secondary",children:Object(f.jsx)(h.a,{fontWeight:"500",children:"Latest Projects"})})}),Object(f.jsx)(F,{})]})]})};var M=Object(r.f)((function(){var e=Object(l.useMediaQuery)({query:"(max-width: 768px)"});return Object(f.jsx)("div",{children:e?Object(f.jsx)(y,{}):Object(f.jsx)(A,{})})})),_=s.p+"static/media/graduation_headshot.d6c00609.jpg",L=s.p+"static/media/keyboard_image.c140e2fc.jpg",R=s.p+"static/media/photography_image.3a32694a.jpg";s(86);var T=function(){return Object(f.jsxs)("div",{className:"container",children:[Object(f.jsxs)("div",{className:"contents",children:[Object(f.jsx)("img",{src:_,alt:"Neil's Graduation Headshot",className:"header_image"}),Object(f.jsxs)("div",{className:"description",children:[Object(f.jsx)("h4",{children:"Read About Me"}),Object(f.jsx)("h1",{children:"About Me"}),Object(f.jsx)("p",{children:"Hi there! My name's Neil & I just recently graduated from the University of San Francisco with a major in Computer Science. Front-end / Web Development is my forte but I always love to learn more about other areas. When I'm not coding, I'm usually taking pictures with my film camera or tinkering with mechanical keyboards. Feel free to read through the sections below to get a better insight into my hobbies!"})]})]}),Object(f.jsxs)("div",{className:"contents",children:[Object(f.jsxs)("div",{className:"description",children:[Object(f.jsx)("h4",{children:"Read About My Hobbies"}),Object(f.jsx)("h1",{children:"Mechanical Keyboards"}),Object(f.jsxs)("p",{children:["Building & Collecting Mechanical Keyboards is my latest ",Object(f.jsx)("span",{className:"strikethrough",children:"money-sink"})," hobby! I picked it up at the start of our quarantine & I've been having tons of fun with it. There's so many different reasons to customize a keyboard: sound, feel, or aesthetics. Different keyboards have special mounting methods which can ultimately change the feeling of typing on the keyboard. You also can't forget the Cherry MX style switches. Different materials on switches can cause an endless amount of combinations for sound & feel. Here are a couple of my favorite keyboards. P.S. I also do keyboard sound tests on ",Object(f.jsx)("a",{href:"https://www.youtube.com/c/NeilP",children:"YouTube"}),"!"]})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("img",{src:L,alt:"Neil's Keyboards",className:"horizontal_image"}),Object(f.jsx)("h3",{children:"Kei SE (silver) & Keycult No. 2/65 (black)"})]})]}),Object(f.jsxs)("div",{className:"contents",children:[Object(f.jsx)("img",{src:R,alt:"Neil's 35mm Film Photography",className:"horizontal_image"}),Object(f.jsxs)("div",{className:"description",children:[Object(f.jsx)("h4",{children:"Read About My Hobbies"}),Object(f.jsx)("h1",{children:"Film Photography"}),Object(f.jsx)("p",{children:"I've loved photography ever since my dad taught me how to take pictures back in 2011. Throughout high school and my early college career, I did freelance photography work for clients around the Bay Area. Recently I've been experimenting with 35mm Film Photography. I love to take pictures of family, friends, Conan, my dog, & nature. Here's a couple of my favorite photos taken on film."})]})]})]})};s(87);var H=function(){return Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)("div",{className:"contact-container",children:[Object(f.jsx)("div",{className:"contact-title",children:Object(f.jsx)("h1",{children:"Contact"})}),Object(f.jsx)("div",{className:"contact-description",children:Object(f.jsx)("p",{children:"If you want to collaborate on a project, or just enjoy a cup of coffee together you can always reach me through my socials (preferably email) & I will try to get back to you as soon as possible! Have an amazing day!"})})]})})},W=s.p+"static/media/iphone_transparent.a0eca97b.png";s(33);var z=function(){return Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)("div",{className:"project-container",children:[Object(f.jsx)("img",{src:W,alt:"iPhone Filler",className:"header_image"}),Object(f.jsxs)("div",{className:"project-description",children:[Object(f.jsx)("h4",{children:"Projects"}),Object(f.jsx)("h1",{children:"Oasis Mobile"}),Object(f.jsx)("h3",{children:"Won \u201cBest Team\u201d / \u201cStudent Choice\u201d Award"}),Object(f.jsxs)("p",{children:["Oasis Mobile is a mobile application designed to engage users in wellness practice. It allows users to pursue their journey towards a healthier lifestyle through its menu of personalized mindfulness exercises and programs. For the project, I led a team of CS students & business students in designing a UI with ",Object(f.jsx)("span",{children:"Figma"}),", developing the front end using ",Object(f.jsx)("span",{children:"React Native & Expo"}),", and creating the backend services using",Object(f.jsx)("span",{children:" Express.JS, Node.JS, & Axiom."})]})]})]})})},D=s.p+"static/media/python_logo.f22d1fce.png";var B=function(){return Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)("div",{className:"project-container",children:[Object(f.jsx)("img",{src:D,alt:"Python Logo",className:"desktop_image"}),Object(f.jsxs)("div",{className:"project-description",children:[Object(f.jsx)("h4",{children:"Projects"}),Object(f.jsx)("h1",{children:"Shadow Thief"}),Object(f.jsxs)("p",{children:["Shadow Thief is a headless add to cart service for Shopify websites. I programmed the bot in ",Object(f.jsx)("span",{children:"Python"})," with the use of ",Object(f.jsx)("span",{children:"Selenium "}),"and ",Object(f.jsx)("span",{children:"BeautifulSoup4."}),' The project is designed to automate the process of checking out items for users by parsing & crawling websites for data & adding products to carts for users in order to check out. Motivation was to make the process as "human" as possible so that it could get past any anti-bot services set up on sites.']})]})]})})},J=s.p+"static/media/lost_and_found.0fc42c56.png";var E=function(){return Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)("div",{className:"project-container",children:[Object(f.jsx)("img",{src:J,alt:"Lost & Found Screenshot",className:"desktop_image"}),Object(f.jsxs)("div",{className:"project-description",children:[Object(f.jsx)("h4",{children:"Projects"}),Object(f.jsx)("h1",{children:"DPS Lost And Found"}),Object(f.jsx)("a",{href:"https://github.com/nlpulido/dps-lost-and-found",children:"Github Repo"}),Object(f.jsxs)("p",{children:["The DPS Lost & Found project serves to be a possible revamp of the University of San Francisco Public Safety Department's current lost and found system. As the front desk lead at the position, I oversaw different areas where student assistants struggled to maintain & the lost and found was one area. I built a progressive web app using ",Object(f.jsx)("span",{children:"React.JS"})," &",Object(f.jsx)("span",{children:" Google Firestore"})," in order to provide a place for students who don't work at Public Safety to submit tickets without having to visit the front desk. Given the current strict COVID-19 guidelines, another area of motivation was to decrease the amount of in person visits to the front desk."]})]})]})})};var G=function(){return Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)("div",{className:"project-container",children:[Object(f.jsx)("img",{src:D,alt:"Python Logo",className:"desktop_image"}),Object(f.jsxs)("div",{className:"project-description",children:[Object(f.jsx)("h4",{children:"Projects"}),Object(f.jsx)("h1",{children:"iPARQ Permit Validator"}),Object(f.jsx)("a",{href:"https://github.com/nlpulido/iparq-automation-testing",children:"Github Repo"}),Object(f.jsxs)("p",{children:["The iPARQ Permit Validator serves as an automated bot to validate permits recently created on the backend of the iPARQ Admin website. While working at Public Safety, one area I found took awhile was creating new permits for each school semester & making sure the data was recorded correctly for the payroll department. With this script, It will utilize ",Object(f.jsx)("span",{children:"Python"})," with ",Object(f.jsx)("span",{children:"Selenium "}),"in validating permits recorded in Google Sheets with the help of the ",Object(f.jsx)("span",{children:"EZSheets"})," library. I'm currently in the process of changing the script into a easy-install ",Object(f.jsx)("span",{children:"Chrome Extension"})," built with ",Object(f.jsx)("span",{children:"Node.JS & Javascript."})]})]})]})})};var K=function(){return Object(f.jsx)(r.b,{history:u,children:Object(f.jsxs)(r.c,{children:[Object(f.jsx)(r.a,{path:"/",exact:!0,component:M}),Object(f.jsx)(r.a,{path:"/about",exact:!0,component:T}),Object(f.jsx)(r.a,{path:"/contact",exact:!0,component:H}),Object(f.jsx)(r.a,{path:"/projects/oasis",exact:!0,component:z}),Object(f.jsx)(r.a,{path:"/projects/shadow-thief",exact:!0,component:B}),Object(f.jsx)(r.a,{path:"/projects/lost-and-found",exact:!0,component:E}),Object(f.jsx)(r.a,{path:"/projects/permit-validator",exact:!0,component:G})]})})},Q=s(52),q=s(53),U=s(58),V=s(57),Y=s(24),X=s(54),Z=s(31),$=(s(91),function(e){Object(U.a)(s,e);var t=Object(V.a)(s);function s(){return Object(Q.a)(this,s),t.apply(this,arguments)}return Object(q.a)(s,[{key:"render",value:function(){return Object(f.jsxs)("div",{class:"footer",children:[Object(f.jsx)(j.a,{href:"https://www.github.com/nlpulido/",children:Object(f.jsx)(Y.a,{icon:Z.a,style:{color:"black"}})}),Object(f.jsx)(j.a,{href:"https://www.linkedin.com/in/nlpulido/",children:Object(f.jsx)(Y.a,{icon:Z.c,style:{color:"#6272a4"}})}),Object(f.jsx)(j.a,{href:"https://www.youtube.com/c/NeilP",children:Object(f.jsx)(Y.a,{icon:Z.d,style:{color:"#ff5555"}})}),Object(f.jsx)(j.a,{href:"https://www.instagram.com/neilisnext/",children:Object(f.jsx)(Y.a,{icon:Z.b,style:{color:"#bd93f9"}})}),Object(f.jsx)(j.a,{href:"mailto:neilpphoto@gmail.com",children:Object(f.jsx)(Y.a,{icon:X.a,style:{color:"#50fa7b"}})})]})}}]),s}(a.Component)),ee=s(55),te=s(114),se=s(115),ae=Object(ee.a)({palette:{type:"light",background:{default:"#ffffff"},primary:{main:"#a9c4c0",contrastText:"#3f4f4c"},secondary:{main:"#3f4f4c",contrastText:"#ffffff"}},typography:{fontFamily:["Fira Sans","sans-serif"].join(",")}});var ce=function(){return Object(f.jsxs)(te.a,{theme:ae,children:[Object(f.jsx)(se.a,{}),Object(f.jsx)(O,{}),Object(f.jsx)(K,{}),Object(f.jsx)($,{})]})};i.a.render(Object(f.jsx)(n.a,{children:Object(f.jsx)(ce,{})}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.f92dd8d9.chunk.js.map