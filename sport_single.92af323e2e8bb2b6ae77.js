!function(){var e,o={2591:function(){document.addEventListener("DOMContentLoaded",(function(){var e=0,o=0,r=document.querySelector(".circle");document.onmousemove=function(r){e=r.pageX,o=r.pageY};var n=0,a=0;!function s(){requestAnimationFrame(s),n+=(e-n)/6,a+=(o-a)/6,r.style.top=a+"px",r.style.left=n+"px"}()}))},9084:function(e,o,r){var n=r(5638);$list=n(".nav__menu-item"),$list.each((function(e,o){$clone=n(o).clone(!0),$clone.removeClass("nav__menu-item").addClass("burger__menu-item"),$clone.children("a").addClass("burger__menu-link").removeClass("nav__menu-link"),n(".burger__menu").append($clone),n(".burger__menu-item .nav__submenu").each((function(e,o){n(o).removeClass("nav__submenu").addClass("burger__menu-dropdown")}))})),$contacts=n(".top-line__contacts"),$contacts=$contacts.clone(!0),$contacts=$contacts.removeClass().addClass("burger__contacts"),n(".burger__content").append($contacts),$eye=n(".top-line__eye"),$eye=$eye.clone(!0),$eye=$eye.removeClass().addClass("burger__eye"),n(".burger__features").append($eye),$search=n(".top-line__search"),$search=$search.clone(!0),$search=$search.removeClass().addClass("burger__search"),n(".burger__features").append($search),n(".top-line__burger").on("click",(function(e){e.stopPropagation(),n(".modal").removeClass("modal_opened"),n(".burger__menu-wrapper").toggleClass("burger__menu-wrapper_opened")})),n(".burger__closeBtn").on("click",(function(e){e.stopPropagation(),n(".burger__menu-wrapper").toggleClass("burger__menu-wrapper_opened")})),n(".footer__contactBtn, .contact__btn, .banner__contactBtn").on("click",(function(e){e.stopPropagation(),n(".modal").removeClass("modal_opened"),n("#form-modal").toggleClass("modal_opened")})),n(".form__closeBtn").on("click",(function(e){e.stopPropagation(),n(".modal").removeClass("modal_opened"),n("body").mCustomScrollbar("update")})),n(document).on("click",(function(e){var o=n(e.target);o.closest(".burger__menu-wrapper_opened").length||n(".burger__menu-wrapper").removeClass("burger__menu-wrapper_opened"),o.closest(".modal_opened").length||(n(".modal").removeClass("modal_opened"),n("body").mCustomScrollbar("update"))})),n(".modal").on("mouseenter",(function(){n("body").mCustomScrollbar("disable")})).on("mouseleave",(function(){n("body").mCustomScrollbar("update")})),n(".accordion-header").children().hide(),n(".accordion-header").on("click",(function(e){e.stopPropagation(),n(this).is("ul")?e.target==this&&(n(this).children().slideToggle(400),n(this).toggleClass("accordion-header_active")):(n(this).next().slideToggle(400),n(this).toggleClass("accordion-header_active"))}))},7418:function(e,o,r){var n=r(5638),a=r(6763);r(2298)(n),r(649)(n);var s=Array.from(document.querySelectorAll(".head__img"));(s=s.map((function(e){return e.id}))).forEach((function(e,o){s[o]=new a(e,{duration:200,file:"./images/content/".concat(e,".svg"),type:"oneByOne",start:"manual"})}));var l=0,t=0;n(window).on("load",(function(){n("body").mCustomScrollbar({mouseWheelPixels:500,scrollInertia:1e3,theme:"my-theme",callbacks:{whileScrolling:function(){n(".section:mcsInSight(exact)").addClass("slideTop"),l=this.mcs.top}}}),n(".burger__content").mCustomScrollbar({theme:"my-theme"})}));var c=setInterval((function(){t!=l&&(n(".card:mcsInSight(exact):not(.popup3d)").first().addClass("popup3d"),n(".about__collage-photo:mcsInSight(exact):not(.about__collage-photo_animate)").first().addClass("about__collage-photo_animate"),n(".about__collage-photo:not(.about__collage-photo_animate)").length||n(".card:not(.popup3d)").length||clearInterval(c))}),150);setInterval((function(){s.forEach((function(e){n("#".concat(e.parentEl.id,":mcsInSight(exact)")).length&&e.play(1.5)})),t<l&&l<-1200||l<-2e3?n(".arrow-top").addClass("arrow-top_active"):n(".arrow-top_active").removeClass("arrow-top_active"),t=l}),300);n(".arrow-top").on("click",(function(){n("body").mCustomScrollbar("scrollTo","top")}))},6145:function(e,o,r){var n=r(5638);n(".top-line__eye-img").on("click",(function(){n("body").addClass("special"),n("body").mCustomScrollbar("destroy"),n(".card").addClass("popup3d"),document.querySelector(".photos__slider").swiper.destroy(),n(".leaders__items").data("masonry").destroy(),n(".leaders__control").trigger("click"),n(".swiper-scrollbar, .photos__arrows").remove(),n(".reviews__slider").on("click",(function(e){e.stopImmediatePropagation(),n(".modal").removeClass("modal_opened"),n(".burger__menu-wrapper").removeClass("burger__menu-wrapper_opened"),n("#review-info").toggleClass("modal_opened")})),n("body").hasClass("special")||location.reload()})),n(".special__bw").on("click",(function(){n("body").addClass("bw"),n("body").removeClass("wb"),n("body").removeClass("green"),n("body").removeClass("darkblue")})),n(".special__wb").on("click",(function(){n("body").addClass("wb"),n("body").removeClass("bw"),n("body").removeClass("green"),n("body").removeClass("darkblue")})),n(".special__darkblue").on("click",(function(){n("body").addClass("darkblue"),n("body").removeClass("wb"),n("body").removeClass("green"),n("body").removeClass("bw")})),n(".special__green").on("click",(function(){n("body").addClass("green"),n("body").removeClass("wb"),n("body").removeClass("bw"),n("body").removeClass("darkblue")})),n(".special__100fz").on("click",(function(){n("body").removeClass("fz120"),n("body").removeClass("fz150")})),n(".special__120fz").on("click",(function(){n("body").addClass("fz120"),n("body").removeClass("fz150")})),n(".special__150fz").on("click",(function(){n("body").addClass("fz150"),n("body").removeClass("fz120")})),n(".special__normalls").on("click",(function(){n("body").removeClass("ls2"),n("body").removeClass("ls4")})),n(".special__2ls").on("click",(function(){n("body").addClass("ls2"),n("body").removeClass("ls4")})),n(".special__4ls").on("click",(function(){n("body").addClass("ls4"),n("body").removeClass("ls2")})),n(".special__images").on("click",(function(){n("body").removeClass("noimages")})),n(".special__noimages").on("click",(function(){n("body").addClass("noimages");var e=n(".slick-slider");(e=Array.from(e)).map((function(e){var o=n(e).attr("class");return o=(o=o.split(" "))[0]})).forEach((function(e){n("."+e).slick("unslick")})),n(".accordion-header").off(),n(".accordion-header").on("click",(function(e){e.stopPropagation(),n(this).is("ul")?e.target==this&&(n(this).children().slideToggle(400),n(this).toggleClass("accordion-header_active")):(n(this).next().slideToggle(400),n(this).toggleClass("accordion-header_active"))}))}))},7929:function(e,o,r){"use strict";r(9084),r(2591),r(7418),r(7504),r(6145);var n,a=r(6763),s=r.n(a),l=r(9886),t=r(1597),c=r(5638),i=r(5638);function d(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}c(".treners__slider").slick.prototype.cleanUpRows=function(){var e,o=this;o.options.rows>1&&((e=o.$slides.children().children().clone(!0)).removeAttr("style"),o.$slider.empty().append(e))};new l.ZP(".photos__slider",(d(n={modules:[l.W_,l.LW],autoHeight:!0,rewind:!0,navigation:{nextEl:".slick-next",prevEl:".slick-prev"},scrollbar:{el:".swiper-scrollbar",draggable:!0,dragClass:"scroll"},threshold:20,spaceBetween:20},"scrollbar",{el:".swiper-scrollbar",draggable:!0,dragClass:"scroll"}),d(n,"breakpoints",{1e3:{slidesPerGroup:3,slidesPerView:3},600:{slidesPerGroup:2,slidesPerView:2},320:{slidesPerGroup:1,slidesPerView:1}}),n));t.KR.bind("[data-fancybox]",{Image:{Panzoom:{zoomFriction:.7,maxScale:function(){return 5}}}}),i(c(".treners__slider").on("init",(function(e){i("<div>",{class:"arrow__circle"}).prependTo(".slick-arrow");var o=c(".arrow__circle");o.each((function(e,r){o[e]=new(s())(r,{duration:200,file:"./images/icons/circle.svg",type:"oneByOne",start:"manual"}),c(o[e].parentEl.parentElement).on("mouseover",(function(){o[e].play(3)})),c(o[e].parentEl.parentElement).on("mouseleave",(function(){o[e].play(-3)}))}))}))),c(".treners__slider").slick({focusOnSelect:!0,slidesToShow:3,slidesToScroll:3,arrows:!0,appendArrows:".treners__arrows",responsive:[{breakpoint:1050,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:800,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1}}]}),i(c(".treners__slider").on("breakpoint",(function(e){c(".arrow__circle").remove(),i("<div>",{class:"arrow__circle"}).prependTo(".slick-arrow, .arrow");var o=c(".arrow__circle");o.each((function(e,r){o[e]=new(s())(r,{duration:200,file:"./images/icons/circle.svg",type:"oneByOne",start:"manual"}),c(o[e].parentEl.parentElement).on("mouseover",(function(){o[e].play(3)})),c(o[e].parentEl.parentElement).on("mouseleave",(function(){o[e].play(-3)}))}))})))}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var s=r[e]={exports:{}};return o[e].call(s.exports,s,s.exports,n),s.exports}n.m=o,e=[],n.O=function(o,r,a,s){if(!r){var l=1/0;for(d=0;d<e.length;d++){r=e[d][0],a=e[d][1],s=e[d][2];for(var t=!0,c=0;c<r.length;c++)(!1&s||l>=s)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(t=!1,s<l&&(l=s));if(t){e.splice(d--,1);var i=a();void 0!==i&&(o=i)}}return o}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[r,a,s]},n.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(o,{a:o}),o},n.d=function(e,o){for(var r in o)n.o(o,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:o[r]})},n.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},function(){var e={728:0};n.O.j=function(o){return 0===e[o]};var o=function(o,r){var a,s,l=r[0],t=r[1],c=r[2],i=0;if(l.some((function(o){return 0!==e[o]}))){for(a in t)n.o(t,a)&&(n.m[a]=t[a]);if(c)var d=c(n)}for(o&&o(r);i<l.length;i++)s=l[i],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(d)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(o.bind(null,0)),r.push=o.bind(null,r.push.bind(r))}(),n.O(void 0,[552,504,987,886],(function(){return n(1202)}));var a=n.O(void 0,[552,504,987,886],(function(){return n(7929)}));a=n.O(a)}();