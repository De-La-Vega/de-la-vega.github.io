!function(e){function t(t){for(var n,o,c=t[0],l=t[1],s=t[2],u=0,p=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(m&&m(t);p.length;)p.shift()();return i.push.apply(i,s||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,c=1;c<a.length;c++){var l=a[c];0!==r[l]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={0:0},i=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var m=l;i.push([38,1]),a()}({100:function(e,t,a){},101:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(33),o=a(1),c=a(84);function l(e){c("."+e,{duration:300,ease:"linear",offset:-50})}var s=a(34),m=(a(93),function(){var e=document.body,t=function(){(window.pageYOffset||document.documentElement.scrollTop)>document.querySelector(".section-header").offsetHeight-document.querySelector(".section-nav").offsetHeight?e.classList.add("body-fixed"):e.classList.remove("body-fixed")};Object(n.useEffect)((function(){return window.addEventListener("scroll",t),function(){window.removeEventListener("scroll",t)}}),[]);var a=function(e,t){e.preventDefault(),document.querySelector(".nav-list").classList.remove("active"),l(t)};return r.a.createElement("nav",{className:"g-outer section-nav"},r.a.createElement(o.Container,{className:"g-inner"},r.a.createElement("div",{className:"section-nav__wrapper"},r.a.createElement("a",{href:"#",className:"section-nav__logo",onClick:function(e){return a(e,"section-header")}},"Vitaliy ",r.a.createElement("span",{className:"section-nav__logo-secondary"},"Kirenkov")),r.a.createElement("div",{className:"section-nav__navigation"},r.a.createElement("button",{role:"button","aria-label":"Toggle nav",className:"nav-toggle",onClick:function(){e.classList.contains("body-fixed")||l("section-about"),document.querySelector(".nav-list").classList.toggle("active")}},r.a.createElement("i",{className:"nav-toggle-stripe"}),r.a.createElement("i",{className:"nav-toggle-stripe"}),r.a.createElement("i",{className:"nav-toggle-stripe"})),r.a.createElement("ul",{className:"nav-list"},s.map((function(e,t){return e.isVisible?r.a.createElement("li",{key:t},r.a.createElement("a",{href:"#",onClick:function(t){return a(t,e.link)}},e.label)):null})))))))}),u=a(35),p=a.n(u),d=(a(94),function(){var e=Object(n.useState)(!1),t=e[0],a=e[1],i=Object(n.useRef)(null),o=function(){return window.pageYOffset||document.documentElement.scrollTop},c=function(){var e,t,n,r;e=i.current,t=document.documentElement.scrollHeight-window.innerHeight,n=e.getTotalLength(),r=n-o()*n/t,e.style.strokeDasharray=n+" "+n,e.style.transition="stroke-dashoffset 20ms",e.style.strokeDashoffset=r,a(o()>window.innerHeight)};return Object(n.useEffect)((function(){return window.addEventListener("scroll",c),window.addEventListener("resize",c),function(){window.removeEventListener("scroll",c),window.removeEventListener("resize",c)}}),[]),r.a.createElement("div",{className:p()("scroll-up",{"scroll-up--active":t}),onClick:function(){window.scrollTo({behavior:"smooth",top:0})}},r.a.createElement("svg",{className:"scroll-up__svg",viewBox:"-2 -2 52 52",width:"50",height:"50"},r.a.createElement("path",{ref:i,className:"scroll-up__svg-path",d:"\n                        M24,0\n                        a24,24 0 0,1 0,48\n                        a24,24 0 0,1 0,-48\n                    "})))}),g=(a(95),function(){return r.a.createElement("section",{className:"g-outer section-about section-indent"},r.a.createElement(o.Container,{className:"g-inner"},r.a.createElement("h2",{className:"text-center"},"About ",r.a.createElement("span",null,"me")),r.a.createElement(o.Row,null,r.a.createElement(o.Col,{xs:12,md:4,lg:4,offset:{lg:1},className:"section-about__img"},r.a.createElement("img",{src:"assets/images/photo-about.png",className:"img-responsive",alt:""})),r.a.createElement(o.Col,{xs:12,md:8,lg:6},r.a.createElement("div",{className:"base-text"},r.a.createElement("p",null,"I’ve been working in IT for ",r.a.createElement("strong",null,(new Date).getFullYear()-2007)," years."),r.a.createElement("p",null,"As ",r.a.createElement("strong",null,"Project Manager"),", I ran a full-cycle IT-strategy project for a fashion house and several part-cycle projects."),r.a.createElement("p",null,"As ",r.a.createElement("strong",null,"Front-end Developer")," I have created more than ",r.a.createElement("strong",null,"200")," websites (personal, landing pages, online-stores, sites for plants and automotive companies)."),r.a.createElement("p",null,"Some of the technologies and frameworks used: ",r.a.createElement("strong",null,"React"),", ",r.a.createElement("strong",null,"Redux"),", ",r.a.createElement("strong",null,"JavaScript"),", ",r.a.createElement("strong",null,"TypeScript"),", ",r.a.createElement("strong",null,"Webpack"),", ",r.a.createElement("strong",null,"SASS"),", ",r.a.createElement("strong",null,"Bootstrap")," and etc."),r.a.createElement("p",null,"High efficiency in design programs: ",r.a.createElement("strong",null,"Sketch"),", ",r.a.createElement("strong",null,"Photoshop"),", ",r.a.createElement("strong",null,"Figma"),", ",r.a.createElement("strong",null,"Zeplin"),"."),r.a.createElement("p",null,"Also created ",r.a.createElement("strong",null,"plugin for Sketch")," (in 2017) - ",r.a.createElement("a",{className:"base-link",target:"_blank",href:"https://github.com/De-La-Vega/BootstrapGrid",rel:"noopener"},"Bootstrap grid"),".")),r.a.createElement("div",null,r.a.createElement("a",{href:"https://drive.google.com/open?id=0BzEzLZK8t86HSHRqT2VrMEdJT3M",className:"btn-base",target:"_blank",rel:"noopener"},"Resume (en)"),r.a.createElement("a",{href:"https://drive.google.com/open?id=0BzEzLZK8t86Hb3hIRmlKUjZEVG8",className:"btn-base",target:"_blank",rel:"noopener"},"Resume (ru)"))))))}),f=(a(96),function(){return r.a.createElement("section",{className:"g-outer section-certificates section-indent"},r.a.createElement(o.Container,{className:"g-inner"},r.a.createElement("h2",{className:"text-center"},"My ",r.a.createElement("span",null,"Certificates")),r.a.createElement(o.Row,null,r.a.createElement(o.Col,{xs:12,lg:10,offset:{lg:1}},r.a.createElement(o.Row,null,r.a.createElement(o.Col,{xs:6,lg:3},r.a.createElement("div",{className:"item-certificate item-certificate__bordered"},r.a.createElement("img",{src:"assets/images/certificates/csm.png",className:"img-responsive",alt:""}))),r.a.createElement(o.Col,{xs:6,lg:3},r.a.createElement("div",{className:"item-certificate item-certificate__bordered"},r.a.createElement("img",{src:"assets/images/certificates/acsm.png",className:"img-responsive",alt:""}))),r.a.createElement(o.Col,{xs:6,lg:3},r.a.createElement("div",{className:"item-certificate item-certificate__bordered"},r.a.createElement("img",{src:"assets/images/certificates/operator.png",className:"img-responsive",alt:""}))),r.a.createElement(o.Col,{xs:6,lg:3},r.a.createElement("div",{className:"item-certificate item-certificate__bordered"},r.a.createElement("img",{src:"assets/images/certificates/post-production.png",className:"img-responsive",alt:""})))),r.a.createElement(o.Row,null,r.a.createElement(o.Col,{xs:4},r.a.createElement("div",{className:"item-certificate item-certificate__udemy"},r.a.createElement("img",{src:"assets/images/certificates/udemy-4.png",className:"img-responsive",alt:""}))),r.a.createElement(o.Col,{xs:4},r.a.createElement("div",{className:"item-certificate item-certificate__udemy"},r.a.createElement("img",{src:"assets/images/certificates/udemy-2.png",className:"img-responsive",alt:""}))),r.a.createElement(o.Col,{xs:4},r.a.createElement("div",{className:"item-certificate item-certificate__udemy"},r.a.createElement("img",{src:"assets/images/certificates/udemy-7.png",className:"img-responsive",alt:""})))),r.a.createElement(o.Row,null,r.a.createElement(o.Col,{xs:6,lg:3},r.a.createElement("div",{className:"item-certificate item-certificate__udemy"},r.a.createElement("img",{src:"assets/images/certificates/udemy-1.png",className:"img-responsive",alt:""}))),r.a.createElement(o.Col,{xs:6,lg:3},r.a.createElement("div",{className:"item-certificate item-certificate__udemy"},r.a.createElement("img",{src:"assets/images/certificates/udemy-5.png",className:"img-responsive",alt:""}))),r.a.createElement(o.Col,{xs:6,lg:3},r.a.createElement("div",{className:"item-certificate item-certificate__udemy"},r.a.createElement("img",{src:"assets/images/certificates/udemy-6.png",className:"img-responsive",alt:""}))),r.a.createElement(o.Col,{xs:6,lg:3},r.a.createElement("div",{className:"item-certificate item-certificate__udemy"},r.a.createElement("img",{src:"assets/images/certificates/udemy-3.png",className:"img-responsive",alt:""}))))))))}),E=(a(97),function(){return r.a.createElement("section",{className:"g-outer section-contacts section-indent"},r.a.createElement("div",{className:"g-inner text-center"},r.a.createElement("h2",null,"Contact ",r.a.createElement("span",null,"me")),r.a.createElement("div",{className:"section-contacts__links"},r.a.createElement("div",{className:"section-contacts__links-item section-contacts__links-item--email"},r.a.createElement("a",{href:"mailto:kirenkov.vitaliy@gmail.com",className:"section-contacts__link",rel:"noopener","aria-label":"E-mail"},r.a.createElement("svg",{className:"section-contacts__link-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"35px",height:"35px"},r.a.createElement("path",{fill:"currentColor",d:"M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM178.117 262.104C87.429 196.287 88.353 196.121 64 177.167V152c0-13.255 10.745-24 24-24h272c13.255 0 24 10.745 24 24v25.167c-24.371 18.969-23.434 19.124-114.117 84.938-10.5 7.655-31.392 26.12-45.883 25.894-14.503.218-35.367-18.227-45.883-25.895zM384 217.775V360c0 13.255-10.745 24-24 24H88c-13.255 0-24-10.745-24-24V217.775c13.958 10.794 33.329 25.236 95.303 70.214 14.162 10.341 37.975 32.145 64.694 32.01 26.887.134 51.037-22.041 64.72-32.025 61.958-44.965 81.325-59.406 95.283-70.199z"})))),r.a.createElement("div",{className:"section-contacts__links-item"},r.a.createElement("a",{href:"https://www.facebook.com/vitaliy.kirenkov",target:"_blank",className:"section-contacts__link",rel:"noopener","aria-label":"Facebook"},r.a.createElement("svg",{className:"section-contacts__link-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"35px",height:"35px"},r.a.createElement("path",{fill:"currentColor",d:"M448 80v352c0 26.5-21.5 48-48 48h-85.3V302.8h60.6l8.7-67.6h-69.3V192c0-19.6 5.4-32.9 33.5-32.9H384V98.7c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9H184v67.6h60.9V480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z"})))),r.a.createElement("div",{className:"section-contacts__links-item"},r.a.createElement("a",{href:"https://ru.linkedin.com/in/kirenkov",target:"_blank",className:"section-contacts__link",rel:"noopener","aria-label":"LinkedIn"},r.a.createElement("svg",{className:"section-contacts__link-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"35px",height:"35px"},r.a.createElement("path",{fill:"currentColor",d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"})))),r.a.createElement("div",{className:"section-contacts__links-item"},r.a.createElement("a",{href:"https://github.com/De-La-Vega/",target:"_blank",className:"section-contacts__link",rel:"noopener","aria-label":"GitHub"},r.a.createElement("svg",{className:"section-contacts__link-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"35px",height:"35px"},r.a.createElement("path",{fill:"currentColor",d:"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"})))),r.a.createElement("div",{className:"section-contacts__links-item"},r.a.createElement("a",{href:"https://twitter.com/VitaliyKirenkov",target:"_blank",className:"section-contacts__link",rel:"noopener","aria-label":"Twitter"},r.a.createElement("svg",{className:"section-contacts__link-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"35px",height:"35px"},r.a.createElement("path",{fill:"currentColor",d:"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"})))))))}),h=(a(98),function(e){var t=e.item,a=t.companyName,n=t.location,i=t.responsibilities,c=t.period;return r.a.createElement("div",{className:"chronology-item"},r.a.createElement(o.Row,null,r.a.createElement(o.Col,{xs:12,lg:10,offset:{lg:1}},r.a.createElement(o.Row,null,r.a.createElement(o.Col,{xs:12,md:4},r.a.createElement("div",{className:"date text-uppercase"},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",{className:"months"},r.a.createElement("td",null,c.start.month),r.a.createElement("td",null),r.a.createElement("td",{className:"color-green"},c.end?c.end.month:null)),r.a.createElement("tr",{className:"years"},r.a.createElement("td",null,c.start.year),r.a.createElement("td",{className:"divider"},"-"),r.a.createElement("td",{className:"color-green"},c.end?c.end.year:"NOW")))))),r.a.createElement(o.Col,{xs:12,md:8},r.a.createElement("div",{className:"data"},r.a.createElement("div",{className:"title text-uppercase"},a," ",r.a.createElement("span",{className:"color-green"},"("+n.city+", "+n.country+")")),r.a.createElement("div",{className:"text base-text"},r.a.createElement("ul",null,i.map((function(e,t){return"string"==typeof e?r.a.createElement("li",{key:e,className:"responsibility--string"},e):r.a.createElement("li",{key:e.program||t,className:"responsibility--object"},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("strong",null,e.company)),e.program&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,e.program),r.a.createElement("div",null,"Position - ",r.a.createElement("u",null,e.position))),r.a.createElement("ul",null,e.data.map((function(e){return r.a.createElement("li",{key:e},e)})))))}))))))))))}),v=a(36),y=function(){return r.a.createElement("section",{className:"g-outer section-education section-indent"},r.a.createElement(o.Container,{className:"g-inner"},r.a.createElement("h2",{className:"text-center"},"My ",r.a.createElement("span",null,"education")),r.a.createElement("div",null,v.map((function(e,t){return e.isActive&&r.a.createElement(h,{item:e,key:"education-"+t})})))))},b=(a(99),function(){return r.a.createElement("section",{className:"g-outer section-header"},r.a.createElement("div",{className:"data"},r.a.createElement("h1",{className:"name"},"Vitaliy ",r.a.createElement("span",null,"Kirenkov")),!1))}),w=a(37),k=function(){return r.a.createElement("section",{className:"g-outer section-work section-indent"},r.a.createElement(o.Container,{className:"g-inner"},r.a.createElement("h2",{className:"text-center"},"Work ",r.a.createElement("span",null,"experience")),r.a.createElement("div",null,w.map((function(e,t){return e.isActive&&r.a.createElement(h,{item:e,key:"work-"+t})})))))};a(100);i.render(r.a.createElement((function(){return r.a.createElement("main",null,r.a.createElement(d,null),r.a.createElement(b,null),r.a.createElement(m,null),r.a.createElement(g,null),r.a.createElement(f,null),r.a.createElement(k,null),r.a.createElement(y,null),r.a.createElement(E,null))}),null),document.getElementById("app"))},34:function(e){e.exports=JSON.parse('[{"label":"About","link":"section-about","isVisible":true},{"label":"Certificates","link":"section-certificates","isVisible":true},{"label":"Work","link":"section-work","isVisible":true},{"label":"Education","link":"section-education","isVisible":true},{"label":"Contact","link":"section-contacts","isVisible":true}]')},36:function(e){e.exports=JSON.parse('[{"isActive":true,"companyName":"RANEPA","location":{"country":"Russia","city":"Moscow"},"responsibilities":["Program of professional retraining \\"IT-Manager: Project Manager, Business Analyst\\""],"period":{"start":{"month":"April","year":"2017"},"end":{"month":"April","year":"2018"}}},{"isActive":true,"companyName":"Azerbaijan State University of Economics","location":{"country":"Azerbaijan","city":"Baku"},"responsibilities":["Bachelor degree"],"period":{"start":{"month":"September","year":"2005"},"end":{"month":"May","year":"2010"}}},{"isActive":true,"companyName":"School №214","location":{"country":"Azerbaijan","city":"Baku"},"responsibilities":["Average (full) general education"],"period":{"start":{"month":"September","year":"1994"},"end":{"month":"May","year":"2005"}}}]')},37:function(e){e.exports=JSON.parse('[{"isActive":true,"companyName":"IBM East Europe/Asia Ltd.","location":{"country":"Russia","city":"Moscow"},"responsibilities":[{"company":"Fashion house in Russia","program":"IT-strategy development project","position":"Project Manager","data":["participation in all phases of the project (initiation, planning, execution, monitoring and control, closing)","requirements management and prioritization","demonstration of milestones to the customer","regular communication and feedback","lead time control and timely notification","quality control","risk analysis","building trust, managing customer expectations","team building","onboarding new team members","workflow","conflict resolution, elimination of operational barriers","task and subtask breakdown","subcontractor assignment","maintaining documentation and reporting"]},{"company":"Leading oil company in Russia","program":"Project for the development of a search system for optimal cost indicators","position":"Lead Front-end Developer","data":["app development","components library development","formation of IT application architecture","formation of UX-architecture","tasks decomposition, allocation, prioritization","interviewing","staff training","holding Agile ceremonies"]},{"company":"Leading commercial bank in Azerbaijan","program":"Project for the development of a workplace for a bank employee","position":"Lead Front-end Developer","data":["formation of IT application architecture","formation of UX-architecture","interviewing","tasks decomposition, allocation, prioritization","technical onboarding","staff training","holding Agile ceremonies"]},{"company":"Leading corporate bank in Azerbaijan","program":"The program of bank digitalization. The project for the development of digital laboratory and IT-architecture","position":"Tech-lead","data":["formation of IT application architecture","formation of UX-architecture","interviewing, managing and forming teams","tasks decomposition, allocation, prioritization","project management","resource planning","presentation of business results to the board and CEO of the Bank","customize JIRA, Confluence, Kanban Boards","onboarding matrix formation","technical onboarding","staff training","development of banking products, component library, administrative part of the internet bank","holding Agile ceremonies"]},{"company":"TOP-3 Russian Bank","program":"UFS Component Library Project","position":"Senior Front-End Developer / Project Manager","data":["project management","resource planning","tasks decomposition, allocation, prioritization","follow-up schedule and project budget control","frontend and backend team management","control and description of component architecture corresponding to business architecture"]},{"company":"Leading corporate bank in Azerbaijan","program":"The program of bank digitalization. The project for the development of digital and IT-architecture","position":"Senior Front-End Developer","data":["development of a full clickable prototype","presentation of business results to CEO","tasks decomposition, allocation, prioritization","backlog management"]},{"company":"TOP-3 Russian Bank","program":"Consulting center for foreign trade activities (corporate unit)","position":"Senior Front-End Developer / Project Manager","data":["control of development of the section through which bank users can create multiple documents (currency control, ruble payment) using one form","refinement of solution architecture","resource planning","tasks decomposition, allocation, prioritization","follow-up schedule and project budget control","backlog management, pilot operation"]},{"company":"IBM iX internal components library development","data":["component architecture description corresponding to business architecture","tasks decomposition, allocation, prioritization","development of a framework for prototyping new products"]},{"company":"TOP-3 Russian Bank","program":"Program of Digital Corporate Platform","position":"Senior Front-End Developer","data":["products prototyping and changing their parameters in accordance with business requirements","joint development together with the team of front-end and back-end developers, testers, analysts","developing architecture of components and services","tasks decomposition, allocation, prioritization","control of work schedule","work on Agile methodology","work with kanban board, task planning","participate in the development of the UX-concept"]}],"period":{"start":{"month":"June","year":"2015"}}},{"isActive":true,"companyName":"Media-Storm","location":{"country":"Russia","city":"Moscow"},"responsibilities":["development of real estate websites (residential complexes, shopping centers)","UX architecture, frontend development","participation in the full cycle of project implementation (from the moment of prototyping to delivery)","interviewing"],"period":{"start":{"month":"February","year":"2014"},"end":{"month":"February","year":"2015"}}},{"isActive":false,"companyName":"Biznes Molodost","location":{"country":"Russia","city":"Moscow"},"responsibilities":[""],"period":{"start":{"month":"July","year":"2013"},"end":{"month":"September","year":"2013"}}},{"isActive":true,"companyName":"Roscontrol","location":{"country":"Russia","city":"Moscow"},"responsibilities":["company portal development from scratch","project layout for integration into terminals","writing a number of plugins for the internal system","adjusting layouts in the course of integration","participate in the development of the UX-concept"],"period":{"start":{"month":"February","year":"2013"},"end":{"month":"July","year":"2013"}}},{"isActive":true,"companyName":"Dialoggy","location":{"country":"Russia","city":"Moscow"},"responsibilities":["making updates (adjustments) on the company\'s existing website","internal project development"],"period":{"start":{"month":"December","year":"2012"},"end":{"month":"February","year":"2013"}}},{"isActive":true,"companyName":"DEFA Interaktiv","location":{"country":"Russia","city":"Moscow"},"responsibilities":["projects HTML markup","development and maintenance of KIA-Russia ","participation in the filming of various fan clips"],"period":{"start":{"month":"December","year":"2010"},"end":{"month":"December","year":"2012"}}},{"isActive":false,"companyName":"qb-interactive","location":{"country":"Russia","city":"Moscow"},"responsibilities":["разработка веб-сайтов в сфере недвижимости (жилые комплексы, торговые центры)"],"period":{"start":{"month":"September","year":"2010"},"end":{"month":"November","year":"2010"}}},{"isActive":true,"companyName":"DreamArt","location":{"country":"Azerbaijan","city":"Baku"},"responsibilities":["web-sites development","content management"],"period":{"start":{"month":"September","year":"2007"},"end":{"month":"September","year":"2010"}}}]')},38:function(e,t,a){a(39),e.exports=a(101)},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}});