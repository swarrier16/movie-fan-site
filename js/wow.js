/*! WOW - v0.1.4 - 2014-02-12
* Copyright (c) 2014 Matthieu Aussaguel; Licensed MIT */(function(){var a,b=[].slice,c=function(a,b){return function(){return a.apply(b,arguments)}};a=function(){var c,d,e,f,g,h,i,j,k;for(e=arguments[0],c=2<=arguments.length?b.call(arguments,1):[],g=e||{},i=0,j=c.length;j>i;i++){f=c[i],k=f||{};for(d in k)h=k[d],"object"==typeof g[d]?g[d]=a(g[d],h):g[d]||(g[d]=h)}return g},this.WOW=function(){function b(b){null==b&&(b={}),this.scrollCallback=c(this.scrollCallback,this),this.scrollHandler=c(this.scrollHandler,this),this.start=c(this.start,this),this.config=a(b,this.defaults),this.scrolled=!0}return b.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0},b.prototype.init=function(){var a;return"interactive"===(a=document.readyState)||"complete"===a?this.start():document.addEventListener("DOMContentLoaded",this.start)},b.prototype.start=function(){var a,b,c,d;if(this.element=window.document.documentElement,this.boxes=this.element.getElementsByClassName(this.config.boxClass),this.boxes.length){for(d=this.boxes,b=0,c=d.length;c>b;b++)a=d[b],this.applyStyle(a,!0);return window.addEventListener("scroll",this.scrollHandler,!1),window.addEventListener("resize",this.scrollHandler,!1),this.interval=setInterval(this.scrollCallback,50)}},b.prototype.stop=function(){return window.removeEventListener("scroll",this.scrollHandler,!1),window.removeEventListener("resize",this.scrollHandler,!1),null!=this.interval?clearInterval(this.interval):void 0},b.prototype.show=function(a){return this.applyStyle(a),a.className=""+a.className+" "+this.config.animateClass},b.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),a.setAttribute("style",this.customStyle(b,d,c,e))},b.prototype.customStyle=function(a,b,c,d){var e;return e=a?"visibility: hidden; -webkit-animation-name: none; -moz-animation-name: none; animation-name: none;":"visibility: visible;",b&&(e+="-webkit-animation-duration: "+b+"; -moz-animation-duration: "+b+"; animation-duration: "+b+";"),c&&(e+="-webkit-animation-delay: "+c+"; -moz-animation-delay: "+c+"; animation-delay: "+c+";"),d&&(e+="-webkit-animation-iteration-count: "+d+"; -moz-animation-iteration-count: "+d+"; animation-iteration-count: "+d+";"),e},b.prototype.scrollHandler=function(){return this.scrolled=!0},b.prototype.scrollCallback=function(){var a;return this.scrolled&&(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),!this.boxes.length)?this.stop():void 0},b.prototype.offsetTop=function(a){var b;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},b.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=window.pageYOffset,e=f+this.element.clientHeight-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},b}()}).call(this);
// Disable WOW on small screens.
try {
  if(window.innerWidth > 768) {
    wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100
      }
    );
    wow.init();
  };
} catch(err) {  }
Status API Training Shop Blog About
© 2016 GitHub, Inc. Terms Privacy Security Contact Help