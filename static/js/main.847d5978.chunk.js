(window["webpackJsonptf-react-chester"]=window["webpackJsonptf-react-chester"]||[]).push([[0],{105:function(e,t,a){},106:function(e,t,a){},280:function(e,t,a){var i={"./boost-your-post-for-increasing-sales.md":281,"./difference-between-gatsbyjs-and-nextjs.md":282,"./future-of-javascript.md":283,"./how-to-choose-javascript-framework-for-project.md":284,"./how-to-get-10k-instagram-followers.md":285,"./installing-nodejs-on-your-device.md":286,"./markdown-html-supported-blog.md":287,"./popular-javascript-library-in-2020.md":288,"./programmers-must-read-books.md":289,"./think-out-of-the-box.md":290,"./time-to-use-latest-technology-for-creating-a-website.md":291,"./trending-designs-in-2020.md":292,"./uiux-design-starter-with-adobe-xd.md":293,"./web-automation-with-python-language.md":294,"./what-nodejs-can-do.md":295};function n(e){var t=r(e);return a(t)}function r(e){if(!a.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}n.keys=function(){return Object.keys(i)},n.resolve=r,e.exports=n,n.id=280},281:function(e,t,a){e.exports=a.p+"static/media/boost-your-post-for-increasing-sales.7c33af2f.md"},282:function(e,t,a){e.exports=a.p+"static/media/difference-between-gatsbyjs-and-nextjs.9f553f26.md"},283:function(e,t,a){e.exports=a.p+"static/media/future-of-javascript.8cc16894.md"},284:function(e,t,a){e.exports=a.p+"static/media/how-to-choose-javascript-framework-for-project.94fbd384.md"},285:function(e,t,a){e.exports=a.p+"static/media/how-to-get-10k-instagram-followers.6566a292.md"},286:function(e,t,a){e.exports=a.p+"static/media/installing-nodejs-on-your-device.368cc11c.md"},287:function(e,t,a){e.exports=a.p+"static/media/markdown-html-supported-blog.c7fe48e6.md"},288:function(e,t,a){e.exports=a.p+"static/media/popular-javascript-library-in-2020.d4881e73.md"},289:function(e,t,a){e.exports=a.p+"static/media/programmers-must-read-books.d490be27.md"},290:function(e,t,a){e.exports=a.p+"static/media/think-out-of-the-box.c0c0a9c9.md"},291:function(e,t,a){e.exports=a.p+"static/media/time-to-use-latest-technology-for-creating-a-website.ea70d882.md"},292:function(e,t,a){e.exports=a.p+"static/media/trending-designs-in-2020.8e1efcf2.md"},293:function(e,t,a){e.exports=a.p+"static/media/uiux-design-starter-with-adobe-xd.c7973cd5.md"},294:function(e,t,a){e.exports=a.p+"static/media/web-automation-with-python-language.a1c7c37f.md"},295:function(e,t,a){e.exports=a.p+"static/media/what-nodejs-can-do.40686a4e.md"},309:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(26),l=a.n(r),o=(a(102),a(103),a(104),a(105),a(6)),c=a(15),m=(a(106),a(2)),s=a(3),u=a.n(s),g=a(91),d=a.n(g),p=a(5),f=a.n(p);var b=function(e){var t=Object(i.useState)({}),a=Object(m.a)(t,2),r=a[0],l=a[1];return Object(i.useEffect)((function(){u.a.get("/api/information").then((function(e){l(e.data.socialLinks)}))}),[]),n.a.createElement("ul",{className:e.bordered?"mi-socialicons mi-socialicons-bordered":"mi-socialicons"},r.facebook?n.a.createElement("li",null,n.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:r.facebook},n.a.createElement(f.a,{name:"facebook"}))):null,r.twitter?n.a.createElement("li",null,n.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:r.twitter},n.a.createElement(f.a,{name:"twitter"}))):null,r.pinterest?n.a.createElement("li",null,n.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:r.pinterest},n.a.createElement(f.a,{name:"pinterest"}))):null,r.behance?n.a.createElement("li",null,n.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:r.behance},n.a.createElement(f.a,{name:"behance"}))):null,r.linkedin?n.a.createElement("li",null,n.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:r.linkedin},n.a.createElement(f.a,{name:"linkedin"}))):null,r.dribbble?n.a.createElement("li",null,n.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:r.dribbble},n.a.createElement(f.a,{name:"dribbble"}))):null,r.github?n.a.createElement("li",null,n.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:r.github},n.a.createElement(f.a,{name:"github"}))):null)};var E=function(){var e=Object(i.useState)(""),t=Object(m.a)(e,2),a=t[0],r=t[1],l=Object(i.useState)(!1),c=Object(m.a)(l,2),s=c[0],g=c[1];return Object(i.useEffect)((function(){u.a.get("/api/information").then((function(e){r(e.data)}))}),[]),n.a.createElement("nav",{className:s?"mi-header is-visible":"mi-header"},n.a.createElement("button",{onClick:function(){g(!s)},className:"mi-header-toggler"},s?n.a.createElement(f.a,{name:"close"}):n.a.createElement(f.a,{name:"menu"})),n.a.createElement("div",{className:"mi-header-inner"},n.a.createElement("div",{className:"mi-header-image"},n.a.createElement(o.b,{to:"/"},n.a.createElement("img",{src:a.brandImage,alt:"brandimage"}))),n.a.createElement("ul",{className:"mi-header-menu"},n.a.createElement("li",null,n.a.createElement(o.c,{exact:!0,to:"/"},n.a.createElement("span",null,"Home"))),n.a.createElement("li",null,n.a.createElement(o.c,{to:"/about"},n.a.createElement("span",null,"About"))),n.a.createElement("li",null,n.a.createElement(o.c,{to:"/resume"},n.a.createElement("span",null,"Resume"))),n.a.createElement("li",null,n.a.createElement(o.c,{to:"/portfolios"},n.a.createElement("span",null,"Portfolios"))),n.a.createElement("li",null,n.a.createElement(o.c,{to:"/blogs"},n.a.createElement("span",null,"Blogs"))),n.a.createElement("li",null,n.a.createElement(o.c,{to:"/contact"},n.a.createElement("span",null,"Contact")))),n.a.createElement("p",{className:"mi-header-copyright"},"\xa9 ",(new Date).getFullYear()," ",n.a.createElement("b",null,n.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://nuclearthemes.com"},"NuclearThemes")))))};var v=function(e){return n.a.createElement("div",{className:"mi-bglines"},n.a.createElement("span",null),n.a.createElement("span",null),n.a.createElement("span",null),n.a.createElement("span",null),n.a.createElement("span",null))};var h=function(e){return n.a.createElement("div",{className:"mi-wrapper"},n.a.createElement(v,null),n.a.createElement(E,null),e.children)};var j=function(){var e=Object(i.useState)(""),t=Object(m.a)(e,2),a=t[0],r=t[1];return Object(i.useEffect)((function(){u.a.get("/api/information").then((function(e){r(e.data)}))}),[]),n.a.createElement(h,null,n.a.createElement("div",{className:"mi-home-area mi-padding-section"},n.a.createElement(d.a,{className:"mi-home-particle",params:{particles:{number:{value:160,density:{enable:!1}},color:{value:"#ffffff"},opacity:{value:.1},size:{value:5,random:!0,anim:{speed:4,size_min:.3}},line_linked:{enable:!1},move:{random:!0,speed:1,direction:"top",out_mode:"out"}}}}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row justify-content-center"},n.a.createElement("div",{className:"col-lg-10 col-12"},n.a.createElement("div",{className:"mi-home-content"},n.a.createElement("h1",null,"Hi, I am ",n.a.createElement("span",{className:"color-theme"},a.name)),n.a.createElement("p",null,a.aboutContent),n.a.createElement(b,{bordered:!0})))))))},y=a(94),N=a.n(y),w=a(27),k=a.n(w),O=a(310);var x=function(e){return n.a.createElement("div",{className:"mi-sectiontitle"},n.a.createElement("h2",null,e.title),n.a.createElement("span",null,e.title))};var I=function(e){return n.a.createElement("div",{className:"mi-service"},n.a.createElement("span",{className:"mi-service-icon"},n.a.createElement(f.a,{name:e.content.icon})),n.a.createElement("h5",null,e.content.title),n.a.createElement("p",null,e.content.details))};var S=function(e){return n.a.createElement("div",{className:"mi-testimonial-slideritem"},n.a.createElement("div",{className:"mi-testimonial"},n.a.createElement("div",{className:"mi-testimonial-content"},n.a.createElement("p",null,e.content.content)),n.a.createElement("div",{className:"mi-testimonial-author"},n.a.createElement("h5",null,e.content.author.name),n.a.createElement("h6",null,e.content.author.designation))))};var U=function(){var e=Object(i.useState)(!1),t=Object(m.a)(e,2),a=t[0],r=t[1],l=Object(i.useState)(""),o=Object(m.a)(l,2),c=o[0],s=o[1],g=Object(i.useState)([]),d=Object(m.a)(g,2),p=d[0],f=d[1],b=Object(i.useState)([]),E=Object(m.a)(b,2),v=E[0],j=E[1];return Object(i.useEffect)((function(){u.a.get("/api/information").then((function(e){s(e.data)})),u.a.get("/api/services").then((function(e){f(e.data)})),u.a.get("/api/reviews").then((function(e){j(e.data)}))}),[]),n.a.createElement(h,null,n.a.createElement("div",{className:"mi-about-area mi-section mi-padding-top"},n.a.createElement("div",{className:"container"},n.a.createElement(x,{title:"About Me"}),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("div",{className:"mi-about-image"},n.a.createElement("img",{src:c.aboutImage,alt:"about",onClick:function(){r({toggler:!a})}}),n.a.createElement("span",{className:"mi-about-image-icon"},n.a.createElement(O.a,null)),n.a.createElement(k.a,{toggler:a,sources:[c.aboutImageLg]}))),n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("div",{className:"mi-about-content"},n.a.createElement("h3",null,"I am ",n.a.createElement("span",{className:"color-theme"},c.name)),n.a.createElement("p",null,"I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations."),n.a.createElement("ul",null,c.name?n.a.createElement("li",null,n.a.createElement("b",null,"Full Name")," ",c.name):null,c.age?n.a.createElement("li",null,n.a.createElement("b",null,"Age")," ",c.age," Years"):null,c.phone?n.a.createElement("li",null,n.a.createElement("b",null,"Phone")," ",c.phone):null,c.nationality?n.a.createElement("li",null,n.a.createElement("b",null,"Nationality")," ",c.nationality):null,c.language?n.a.createElement("li",null,n.a.createElement("b",null,"Languages")," ",c.language):null,c.email?n.a.createElement("li",null,n.a.createElement("b",null,"Email")," ",c.email):null,c.address?n.a.createElement("li",null,n.a.createElement("b",null,"Address")," ",c.address):null,c.freelanceStatus?n.a.createElement("li",null,n.a.createElement("b",null,"Freelance")," ",c.freelanceStatus):null),n.a.createElement("a",{href:c.cvfile,className:"mi-button"},"Download CV")))))),n.a.createElement("div",{className:"mi-service-area mi-section mi-padding-top"},n.a.createElement("div",{className:"container"},n.a.createElement(x,{title:"Services"}),n.a.createElement("div",{className:"mi-service-wrapper"},n.a.createElement("div",{className:"row mt-30-reverse"},p.map((function(e){return n.a.createElement("div",{className:"col-lg-4 col-md-6 col-12 mt-30",key:e.title},n.a.createElement(I,{content:e}))})))))),n.a.createElement("div",{className:"mi-review-area mi-section mi-padding-top mi-padding-bottom"},n.a.createElement("div",{className:"container"},n.a.createElement(x,{title:"Reviews"}),n.a.createElement("div",{className:"row justify-content-center"},n.a.createElement("div",{className:"col-12"},n.a.createElement(N.a,Object.assign({className:"mi-testimonial-slider"},{dots:!1,infinite:!0,arrows:!1,speed:500,slidesToShow:2,slidesToScroll:2,autoplay:!0,autoplaySpeed:6e3,pauseOnHover:!0,adaptiveHeight:!0,responsive:[{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}]}),v.map((function(e){return n.a.createElement(S,{key:e.id,content:e})}))))))))},M=a(28),D=a.n(M);var P=function(e){return n.a.createElement("div",{className:"mi-smalltitle"},n.a.createElement("span",{className:"mi-smalltitle-icon"},n.a.createElement(f.a,{name:e.icon})),n.a.createElement("h4",null,e.title))};var C=function(e){var t=window.innerWidth;return n.a.createElement("div",{className:"mi-progress"},n.a.createElement("h6",{className:"mi-progress-title"},e.title),n.a.createElement("div",{className:"mi-progress-inner"},n.a.createElement("div",{className:"mi-progress-percentage"},"".concat(e.percentage,"%")),n.a.createElement("div",{className:"mi-progress-container"},t&&t>767?n.a.createElement("span",{className:"mi-progress-active",style:e.isVisible?{width:"".concat(e.percentage,"%")}:{width:0}}):n.a.createElement("span",{className:"mi-progress-active",style:{width:"".concat(e.percentage,"%")}}))))};var A=function(e){var t=e.resumeData,a=t.year,i=t.position,r=t.graduation,l=t.university,o=t.company,c=t.details;return n.a.createElement("div",{className:"mi-resume mt-30"},n.a.createElement("div",{className:"mi-resume-summary"},n.a.createElement("h6",{className:"mi-resume-year"},a)),n.a.createElement("div",{className:"mi-resume-details"},n.a.createElement("h5",null,i||r),n.a.createElement("h6",{className:"mi-resume-company"},o||l),n.a.createElement("p",null,c)))};var F=function(){var e=Object(i.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],l=Object(i.useState)([]),o=Object(m.a)(l,2),c=o[0],s=o[1],g=Object(i.useState)([]),d=Object(m.a)(g,2),p=d[0],f=d[1];return Object(i.useEffect)((function(){u.a.get("/api/skills").then((function(e){r(e.data)})),u.a.get("/api/experience").then((function(e){s(e.data.workingExperience),f(e.data.educationExperience)}))}),[]),n.a.createElement(h,null,n.a.createElement("div",{className:"mi-skills-area mi-section mi-padding-top"},n.a.createElement("div",{className:"container"},n.a.createElement(x,{title:"My Skills"}),n.a.createElement("div",{className:"mi-skills"},n.a.createElement("div",{className:"row mt-30-reverse"},a.map((function(e){return n.a.createElement(D.a,{once:!0,className:"col-lg-6 mt-30",key:e.title},n.a.createElement(C,{title:e.title,percentage:e.value}))})))))),n.a.createElement("div",{className:"mi-resume-area mi-section mi-padding-top mi-padding-bottom"},n.a.createElement("div",{className:"container"},n.a.createElement(x,{title:"Resume"}),n.a.createElement(P,{title:"Working Experience",icon:"briefcase"}),n.a.createElement("div",{className:"mi-resume-wrapper"},c.map((function(e){return n.a.createElement(A,{key:e.id,resumeData:e})}))),n.a.createElement("div",{className:"mt-30"}),n.a.createElement(P,{title:"Educational Qualifications",icon:"book"}),n.a.createElement("div",{className:"mi-resume-wrapper"},p.map((function(e){return n.a.createElement(A,{key:e.id,resumeData:e})}))))))};var q=function(e){for(var t=e.itemsPerPage,a=e.totalItems,i=e.paginate,r=e.currentPage,l=e.className,o=[],c=1;c<=Math.ceil(a/t);c++)o.push(c);return n.a.createElement("div",{className:l?"mi-pagination "+l:"mi-pagination"},n.a.createElement("ul",null,1===r?null:n.a.createElement("li",null,n.a.createElement("a",{onClick:function(e){return i(e,r-1)},href:"!#"},n.a.createElement(f.a,{name:"chevron-left"}))),o.map((function(e){return n.a.createElement("li",{key:e,className:r===e?"is-active":null},n.a.createElement("a",{onClick:function(t){return i(t,e)},href:"!#"},e))})),r===o[o.length-1]?null:n.a.createElement("li",null,n.a.createElement("a",{onClick:function(e){return i(e,r+1)},href:"!#"},n.a.createElement(f.a,{name:"chevron-right"})))))},T=a(311);var L=function(e){var t=Object(i.useState)(!1),a=Object(m.a)(t,2),r=a[0],l=a[1],o=e.content,c=o.title,s=o.subtitle,u=o.imageUrl,g=o.largeImageUrl,d=o.url;return n.a.createElement("div",{className:e.isVisible?"mi-portfolio mi-portfolio-visible":"mi-portfolio"},n.a.createElement("div",{className:"mi-portfolio-image"},n.a.createElement("img",{src:u,alt:c}),n.a.createElement("ul",null,g?n.a.createElement("li",null,n.a.createElement("button",{onClick:function(){l(!r)}},n.a.createElement(O.a,null))):null,d?n.a.createElement("li",null,n.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:d},n.a.createElement(T.a,null))):null)),d?n.a.createElement("h5",null,n.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:d},c)):n.a.createElement("h5",null,c),s?n.a.createElement("h6",null,s):null,g?n.a.createElement(k.a,{toggler:r,sources:g}):null)};var Y=function(e){var t=e.portfolios;return n.a.createElement("div",{className:"row mt-30-reverse"},t.map((function(e){return n.a.createElement(D.a,{once:!0,offset:200,className:"col-lg-4 col-md-6 col-12 mt-30",key:e.id},n.a.createElement(L,{content:e}))})))};var B=function(){var e=Object(i.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],l=Object(i.useState)(1),o=Object(m.a)(l,2),c=o[0],s=o[1],g=Object(i.useState)(9),d=Object(m.a)(g,1)[0];Object(i.useEffect)((function(){var e=!0;return u.a.get("/api/portfolios").then((function(t){e&&r(t.data)})),function(){return e=!1}}),[a]);var p=c*d,f=p-d,b=a.slice(f,p);return n.a.createElement(h,null,n.a.createElement("div",{className:"mi-about mi-section mi-padding-top mi-padding-bottom"},n.a.createElement("div",{className:"container"},n.a.createElement(x,{title:"Portfolios"}),n.a.createElement(Y,{portfolios:b}),a.length>d?n.a.createElement(q,{className:"mt-50",itemsPerPage:d,totalItems:a.length,paginate:function(e,t){e.preventDefault(),s(t)},currentPage:c}):null)))};var _=function(e){var t=e.data,a=t.id,i=t.featuredImage,r=t.title,l=t.createDay,c=t.createMonth,m=t.filesource,s=function(e){var t=e.split("/");return t[t.length-1].slice(0,-3)};return n.a.createElement("div",{className:"mi-blog"},n.a.createElement("div",{className:"mi-blog-image"},n.a.createElement(o.b,{to:"blogs/blog-details/".concat(a,"/").concat(s(m))},n.a.createElement("img",{src:i,alt:r})),n.a.createElement("div",{className:"mi-blog-date"},n.a.createElement("span",{className:"date"},l),n.a.createElement("span",{className:"month"},c.slice(0,3)))),n.a.createElement("div",{className:"mi-blog-content"},n.a.createElement("h5",null,n.a.createElement(o.b,{to:"blogs/blog-details/".concat(a,"/").concat(s(m))},r))))};var H=function(e){var t=e.blogs;return n.a.createElement("div",{className:"row mt-30-reverse"},t.map((function(e){return n.a.createElement("div",{className:"col-lg-6 col-md-6 col-12 mt-30",key:e.id},n.a.createElement(_,{data:e}))})))};var W=function(){var e=Object(i.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],l=Object(i.useState)(1),o=Object(m.a)(l,2),c=o[0],s=o[1],g=Object(i.useState)(6),d=Object(m.a)(g,1)[0];Object(i.useEffect)((function(){var e=!0;return u.a.get("/api/blog").then((function(t){e&&r(t.data)})),function(){return e=!1}}),[a]);var p=c*d,f=p-d,b=a.slice(f,p);return n.a.createElement(h,null,n.a.createElement("div",{className:"mi-about mi-section mi-padding-top mi-padding-bottom"},n.a.createElement("div",{className:"container"},n.a.createElement(x,{title:"Recent Blogs"}),n.a.createElement(H,{blogs:b}),a.length>d?n.a.createElement(q,{className:"mt-50",itemsPerPage:d,totalItems:a.length,paginate:function(e,t){e.preventDefault(),s(t)},currentPage:c}):null)))},G=a(50),J=a(312),Q=a(313),R=a(314);function V(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}var X=function(){var e=Object(i.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],l=Object(i.useState)([]),o=Object(m.a)(l,2),c=o[0],s=o[1],g=Object(i.useState)([]),d=Object(m.a)(g,2),p=d[0],f=d[1],b=Object(i.useState)({name:"",email:"",subject:"",message:""}),E=Object(m.a)(b,2),v=E[0],j=E[1],y=Object(i.useState)(!1),N=Object(m.a)(y,2),w=N[0],k=N[1],O=Object(i.useState)(""),I=Object(m.a)(O,2),S=I[0],U=I[1],M=function(e){j(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?V(a,!0).forEach((function(t){Object(G.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):V(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},v,Object(G.a)({},e.currentTarget.name,e.currentTarget.value)))};return Object(i.useEffect)((function(){u.a.get("/api/contactinfo").then((function(e){r(e.data.phoneNumbers),s(e.data.emailAddress),f(e.data.address)}))}),[]),n.a.createElement(h,null,n.a.createElement("div",{className:"mi-contact-area mi-section mi-padding-top mi-padding-bottom"},n.a.createElement("div",{className:"container"},n.a.createElement(x,{title:"Contact Me"}),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("div",{className:"mi-contact-formwrapper"},n.a.createElement("h4",null,"Get In Touch"),n.a.createElement("form",{action:"#",className:"mi-form mi-contact-form",onSubmit:function(e){e.preventDefault(),v.name?v.email?v.subject?v.message?(k(!1),U("You message has been sent!!!")):(k(!0),U("Message is required")):(k(!0),U("Subject is required")):(k(!0),U("Email is required")):(k(!0),U("Name is required"))}},n.a.createElement("div",{className:"mi-form-field"},n.a.createElement("label",{htmlFor:"contact-form-name"},"Enter your name*"),n.a.createElement("input",{onChange:M,type:"text",name:"name",id:"contact-form-name",value:v.name})),n.a.createElement("div",{className:"mi-form-field"},n.a.createElement("label",{htmlFor:"contact-form-email"},"Enter your email*"),n.a.createElement("input",{onChange:M,type:"text",name:"email",id:"contact-form-email",value:v.email})),n.a.createElement("div",{className:"mi-form-field"},n.a.createElement("label",{htmlFor:"contact-form-subject"},"Enter your subject*"),n.a.createElement("input",{onChange:M,type:"text",name:"subject",id:"contact-form-subject",value:v.subject})),n.a.createElement("div",{className:"mi-form-field"},n.a.createElement("label",{htmlFor:"contact-form-message"},"Enter your Message*"),n.a.createElement("textarea",{onChange:M,name:"message",id:"contact-form-message",cols:"30",rows:"6",value:v.message})),n.a.createElement("div",{className:"mi-form-field"},n.a.createElement("button",{className:"mi-button",type:"submit"},"Send Mail"))),w&&S?n.a.createElement("div",{className:"alert alert-danger mt-4"},S):!w&&S?n.a.createElement("div",{className:"alert alert-success mt-4"},S):null)),n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("div",{className:"mi-contact-info"},a?n.a.createElement("div",{className:"mi-contact-infoblock"},n.a.createElement("span",{className:"mi-contact-infoblock-icon"},n.a.createElement(J.a,null)),n.a.createElement("div",{className:"mi-contact-infoblock-content"},n.a.createElement("h6",null,"Phone"),a.map((function(e){return n.a.createElement("p",{key:e},n.a.createElement("a",{href:(t=e,t)},e));var t})))):null,c?n.a.createElement("div",{className:"mi-contact-infoblock"},n.a.createElement("span",{className:"mi-contact-infoblock-icon"},n.a.createElement(Q.a,null)),n.a.createElement("div",{className:"mi-contact-infoblock-content"},n.a.createElement("h6",null,"Email"),c.map((function(e){return n.a.createElement("p",{key:e},n.a.createElement("a",{href:"mailto:".concat(e)},e))})))):null,a?n.a.createElement("div",{className:"mi-contact-infoblock"},n.a.createElement("span",{className:"mi-contact-infoblock-icon"},n.a.createElement(R.a,null)),n.a.createElement("div",{className:"mi-contact-infoblock-content"},n.a.createElement("h6",null,"Address"),n.a.createElement("p",null,p))):null))))))},z=a(95),K=a.n(z),$=a(96),Z=a.n($);var ee=function(e){var t=Object(i.useState)(""),r=Object(m.a)(t,2),l=r[0],o=r[1],c=e.match.params.id,s=e.match.params.title;Object(i.useEffect)((function(){u.a.get(a(280)("./".concat(s,".md"))).then((function(e){o(e.data)}))}),[l,s]);var g={url:"https://tf-react-chester.now.sh/",identifier:c,title:s};return n.a.createElement(h,null,n.a.createElement("div",{className:"mi-blog-details mi-section mi-padding-top mi-padding-bottom"},n.a.createElement("div",{className:"container"},n.a.createElement(K.a,{source:l,escapeHtml:!1}),n.a.createElement("div",{className:"mi-blog-details-comments mt-30"},n.a.createElement(Z.a.DiscussionEmbed,{shortname:"chester-react",config:g})))))};var te=function(){return n.a.createElement(h,null,n.a.createElement("div",{className:"mi-about-area mi-section"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row justify-content-center"},n.a.createElement("div",{className:"col-lg-8"},n.a.createElement("div",{className:"notfound"},n.a.createElement("div",{className:"notfound-inner text-center"},n.a.createElement("h1",null,"404"),n.a.createElement("h3",null,"Whoops!!! Page not found!"),n.a.createElement(o.b,{to:"/",className:"mi-button"},"Back to Home"))))))))};var ae=function(){return n.a.createElement(o.a,null,n.a.createElement(c.c,null,n.a.createElement(c.a,{path:"/",exact:!0,component:j}),n.a.createElement(c.a,{path:"/about",component:U}),n.a.createElement(c.a,{path:"/resume",component:F}),n.a.createElement(c.a,{path:"/portfolios",component:B}),n.a.createElement(c.a,{path:"/blogs",exact:!0,component:W}),n.a.createElement(c.a,{path:"/blogs/blog-details/:id/:title",component:ee}),n.a.createElement(c.a,{path:"/contact",component:X}),n.a.createElement(c.a,{path:"*",component:te})))},ie=new(a(296))(a(3)),ne={name:"Devid Chester",aboutContent:"I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.",age:24,phone:"",nationality:"American",language:"English, French",email:"",address:"121 King Street, Melbourne, Australia",freelanceStatus:"Available",socialLinks:{facebook:"https://facebook.com",twitter:"https://twitter.com",pinterest:"",behance:"",linkedin:"",dribbble:"",github:"https://github.com"},brandImage:"/images/brand-image.jpg",aboutImage:"/images/about-image.jpg",aboutImageLg:"/images/about-image-lg.jpg",cvfile:"/files/empty.pdf"},re=[{title:"Web Design",icon:"color-pallet",details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."},{title:"Web Development",icon:"code",details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."},{title:"Mobile Application",icon:"mobile",details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."}],le=[{id:1,content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.",author:{name:"Burdette Turner",designation:"Web Developer, Abc Company"}},{id:2,content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam.",author:{name:"Susan Yost",designation:"Client"}},{id:3,content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",author:{name:"Irving Feeney",designation:"Fiverr Client"}}],oe=[{title:"HTML5",value:95},{title:"CSS3",value:90},{title:"Javascript",value:70},{title:"jQuery",value:85},{title:"ReactJS",value:80},{title:"Photoshop",value:65}],ce=[{id:1,title:"T-shirt Mockup",subtitle:"A beautiful t-shirt mockup.",imageUrl:"/images/portfolio-image-1.jpg",largeImageUrl:["/images/portfolio-image-1-lg.jpg"],url:"https://dribbble.com"},{id:2,title:"Coffee Mug",subtitle:"Awesome coffee mug design.",imageUrl:"/images/portfolio-image-4.jpg",largeImageUrl:["/images/portfolio-image-4-lg.jpg","/images/portfolio-image-4-lg2.jpg"],url:"https://facebook.com"},{id:3,title:"Tea & Coffee Mug",subtitle:"Beautiful mug with logo.",imageUrl:"/images/portfolio-image-2.jpg",url:"https://pinterest.com"},{id:4,title:"Pen Holder",subtitle:"A pen holder with beautiful design.",imageUrl:"/images/portfolio-image-3.jpg",largeImageUrl:["/images/portfolio-image-3-lg.jpg"],url:"#"},{id:5,title:"Mug",subtitle:"Mug with awesome style",imageUrl:"/images/portfolio-image-5.jpg",largeImageUrl:["/images/portfolio-image-5-lg.jpg"]},{id:6,title:"Pendrive",subtitle:"Free pendrive mockup design.",imageUrl:"/images/portfolio-image-6.jpg",largeImageUrl:["/images/portfolio-image-6-lg.jpg"]},{id:7,title:"Beautiful Pendrive",subtitle:"Pendrive with great design & flexible.",imageUrl:"/images/portfolio-image-7.jpg",largeImageUrl:["/images/portfolio-image-7-lg.jpg"],url:"https://twitter.com"},{id:8,title:"Sticker",subtitle:"Clip sticker mockup design.",imageUrl:"/images/portfolio-image-8.jpg",largeImageUrl:["/images/portfolio-image-8-lg.jpg"]},{id:9,title:"Packet",subtitle:"Beautiful packet & product design.",imageUrl:"/images/portfolio-image-9.jpg",largeImageUrl:["/images/portfolio-image-9-lg.jpg"]},{id:10,title:"Pen Holder",subtitle:"A pen holder with beautiful design.",imageUrl:"/images/portfolio-image-3.jpg",largeImageUrl:["/images/portfolio-image-3-lg.jpg"],url:"#"},{id:11,title:"Coffee Mug",subtitle:"Awesome coffee mug design.",imageUrl:"/images/portfolio-image-4.jpg",largeImageUrl:["/images/portfolio-image-4-lg.jpg","/images/portfolio-image-4-lg2.jpg"],url:"https://facebook.com"},{id:12,title:"Tea & Coffee Mug",subtitle:"Beautiful mug with logo.",imageUrl:"/images/portfolio-image-2.jpg",url:"https://pinterest.com"},{id:13,title:"T-shirt Mockup",subtitle:"A beautiful t-shirt mockup.",imageUrl:"/images/portfolio-image-1.jpg",largeImageUrl:["/images/portfolio-image-1-lg.jpg"],url:"https://dribbble.com"},{id:14,title:"Mug",subtitle:"Mug with awesome style",imageUrl:"/images/portfolio-image-5.jpg",largeImageUrl:["/images/portfolio-image-5-lg.jpg"]},{id:15,title:"Pendrive",subtitle:"Free pendrive mockup design.",imageUrl:"/images/portfolio-image-6.jpg",largeImageUrl:["/images/portfolio-image-6-lg.jpg"]},{id:16,title:"Beautiful Pendrive",subtitle:"Pendrive with great design & flexible.",imageUrl:"/images/portfolio-image-7.jpg",largeImageUrl:["/images/portfolio-image-7-lg.jpg"],url:"https://twitter.com"},{id:17,title:"Sticker",subtitle:"Clip sticker mockup design.",imageUrl:"/images/portfolio-image-8.jpg",largeImageUrl:["/images/portfolio-image-8-lg.jpg"]},{id:18,title:"Packet",subtitle:"Beautiful packet & product design.",imageUrl:"/images/portfolio-image-9.jpg",largeImageUrl:["/images/portfolio-image-9-lg.jpg"]},{id:19,title:"T-shirt Mockup",subtitle:"A beautiful t-shirt mockup.",imageUrl:"/images/portfolio-image-1.jpg",largeImageUrl:["/images/portfolio-image-1-lg.jpg"],url:"https://dribbble.com"},{id:20,title:"Coffee Mug",subtitle:"Awesome coffee mug design.",imageUrl:"/images/portfolio-image-4.jpg",largeImageUrl:["/images/portfolio-image-4-lg.jpg","/images/portfolio-image-4-lg2.jpg"],url:"https://facebook.com"},{id:21,title:"Tea & Coffee Mug",subtitle:"Beautiful mug with logo.",imageUrl:"/images/portfolio-image-2.jpg",url:"https://pinterest.com"},{id:22,title:"Pen Holder",subtitle:"A pen holder with beautiful design.",imageUrl:"/images/portfolio-image-3.jpg",largeImageUrl:["/images/portfolio-image-3-lg.jpg"],url:"#"},{id:23,title:"Mug",subtitle:"Mug with awesome style",imageUrl:"/images/portfolio-image-5.jpg",largeImageUrl:["/images/portfolio-image-5-lg.jpg"]}],me={workingExperience:[{id:1,year:"2018 - Present",position:"Frontend Web Developer",company:"Abc Company",details:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."},{id:2,year:"2016 - 2018",position:"Frontend Web Developer",company:"CBA Company",details:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."},{id:3,year:"2014 - 1016",position:"UI/UX Designer",company:"Example Company",details:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."}],educationExperience:[{id:1,year:"2018 - 2019",graduation:"Master of Science",university:"Abc University",details:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."},{id:2,year:"2016 - 2018",graduation:"Bachelor of Science",university:"Abc University",details:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."},{id:3,year:"2015 - 2016",graduation:"Higher Schoold Graduation",university:"Abc College",details:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."}]},se=[{id:1,title:"Markdown & Html supported blog.",featuredImage:"/images/blog-image-1.jpg",filesource:"../../blog/markdown-html-supported-blog.md",createDay:"20",createMonth:"February",createYear:"2020"},{id:2,title:"Installing NodeJS on your device.",featuredImage:"/images/blog-image-2.jpg",filesource:"../../blog/installing-nodejs-on-your-device.md",createDay:"20",createMonth:"February",createYear:"2020"},{id:3,title:"UI/UX design starter with Adobe XD.",featuredImage:"/images/blog-image-3.jpg",filesource:"../../blog/uiux-design-starter-with-adobe-xd.md",createDay:"20",createMonth:"February",createYear:"2020"},{id:4,title:"Boost your post for increasing sales.",featuredImage:"/images/blog-image-4.jpg",filesource:"../../blog/boost-your-post-for-increasing-sales.md",createDay:"20",createMonth:"February",createYear:"2020"},{id:5,title:"Difference between GatsbyJS & NextJS.",featuredImage:"/images/blog-image-5.jpg",filesource:"../../blog/difference-between-gatsbyjs-and-nextjs.md",createDay:"20",createMonth:"February",createYear:"2020"},{id:6,title:"How to choose javascript framework for project.",featuredImage:"/images/blog-image-6.jpg",filesource:"../../blog/how-to-choose-javascript-framework-for-project.md",createDay:"20",createMonth:"February",createYear:"2020"},{id:7,title:"Web automation with python language.",featuredImage:"/images/blog-image-7.jpg",filesource:"../../blog/web-automation-with-python-language.md",createDay:"20",createMonth:"February",createYear:"2020"},{id:8,title:"Time to use latest technology for creating a website.",featuredImage:"/images/blog-image-8.jpg",filesource:"../../blog/time-to-use-latest-technology-for-creating-a-website.md",createDay:"20",createMonth:"February",createYear:"2020"},{id:9,title:"Think out of the box.",featuredImage:"/images/blog-image-9.jpg",filesource:"../../blog/think-out-of-the-box.md",createDay:"20",createMonth:"February",createYear:"2020"},{id:10,title:"Trending designs in 2020.",featuredImage:"/images/blog-image-1.jpg",filesource:"../../blog/trending-designs-in-2020.md",createDay:"20",createMonth:"February",createYear:"2020"},{id:11,title:"How to get 10k instagram followers?",featuredImage:"/images/blog-image-2.jpg",filesource:"../../blog/how-to-get-10k-instagram-followers.md",createDay:"20",createMonth:"February",createYear:"2020"},{id:12,title:"What NodeJS can do?",featuredImage:"/images/blog-image-3.jpg",filesource:"../../blog/what-nodejs-can-do.md",createDay:"20",createMonth:"February",createYear:"2020"},{id:13,title:"Futures of javascript.",featuredImage:"/images/blog-image-4.jpg",filesource:"../../blog/future-of-javascript.md",createDay:"20",createMonth:"February",createYear:"2020"},{id:14,title:"Popular javascript library in 2020.",featuredImage:"/images/blog-image-5.jpg",filesource:"../../blog/popular-javascript-library-in-2020.md",createDay:"20",createMonth:"February",createYear:"2020"},{id:15,title:"Promrammers must read books.",featuredImage:"/images/blog-image-6.jpg",filesource:"../../blog/programmers-must-read-books.md",createDay:"20",createMonth:"February",createYear:"2020"}],ue={phoneNumbers:["+012-3456-7891","+012-3456-7892"],emailAddress:["admin.sitename@example.com","info.sitename@example.com"],address:"121 King Street, Melbourne, Victoria 3000, Australia"};ie.onGet("/api/information").reply((function(e){return[200,ne]})),ie.onGet("/api/services").reply((function(e){return[200,re]})),ie.onGet("/api/reviews").reply((function(e){return[200,le]})),ie.onGet("/api/skills").reply((function(e){return[200,oe]})),ie.onGet("/api/portfolios").reply((function(e){return[200,ce]})),ie.onGet("/api/experience").reply((function(e){return[200,me]})),ie.onGet("/api/blog").reply((function(e){return[200,se]})),ie.onGet("/api/contactinfo").reply((function(e){return[200,ue]})),ie.onAny().passThrough();Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},97:function(e,t,a){e.exports=a(309)}},[[97,1,2]]]);
//# sourceMappingURL=main.847d5978.chunk.js.map