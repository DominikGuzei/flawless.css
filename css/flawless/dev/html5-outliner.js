/**
 * This code contains an implementation of HTML5 outlining algorithm, as described by WHATWG at [1]
 *
 * The copyright notice at [2] says:
 *		(c) Copyright 2004-2009 Apple Computer, Inc., Mozilla Foundation, and Opera Software ASA.
 *		You are granted a license to use, reproduce and create derivative works of this document.
 *
 * [1] http://www.whatwg.org/specs/web-apps/current-work/multipage/sections.html#outlines
 * [2] http://www.whatwg.org/specs/web-apps/current-work/multipage/index.html
 */
(function(){var i=function(a){this.sections=[];this.startingNode=a};i.prototype={heading:false,append:function(a){a.container=this;this.sections.push(a)},asHTML:function(a){var b=u(this.heading);if(a)b='<a href="#'+v(this.startingNode)+'">'+b+"</a>";return b+q(this.sections,a)}};var q=function(a,b){for(var f="",c=0;c<a.length;c++)f+="<li>"+a[c].asHTML(b)+"</li>";return f==""?f:"<ol>"+f+"</ol>"},r=function(a){a=a.heading;return h(a)?j(a):1},u=function(a){if(h(a)){if(k(a)=="HGROUP")a=a.getElementsByTagName("h"+
-j(a))[0];return a.textContent||a.innerText||"<i>No text content inside "+a.nodeName+"</i>"}return""+a},v=function(a){var b=a.getAttribute("id");if(b)return b;do b="h5o-"+ ++s;while(t.getElementById(b));a.setAttribute("id",b);return b},e,d,g,s,t,w=function(a,b,f){var c=a;a:for(;c;){b(c);if(c.firstChild){c=c.firstChild;continue a}for(;c;){f(c);if(c.nextSibling){c=c.nextSibling;continue a}c=c==a?null:c.parentNode}}},x=function(a){if(!h(o(g)))if(l(a)||m(a)){e!=null&&g.push(e);e=a;d=new i(a);e.outline=
{sections:[d],startingNode:a,asHTML:function(c){return q(this.sections,c)}}}else if(e!=null)if(h(a)){if(d.heading)if(j(a)>=r(n(e.outline))){var b=new i(a);e.outline.sections.push(b);d=b;d.heading=a}else{b=false;var f=d;do{if(j(a)<r(f)){b=new i(a);f.append(b);d=b;d.heading=a;b=true}f=f.container}while(!b)}else d.heading=a;g.push(a)}},y=function(a){var b=o(g);if(h(b))b==a&&g.pop();else{if((l(a)||m(a))&&!d.heading)d.heading="<i>Untitled "+k(a)+"</i>";if(l(a)&&g.length>0){e=g.pop();d=n(e.outline);for(b=
0;b<a.outline.sections.length;b++)d.append(a.outline.sections[b])}else if(m(a)&&g.length>0){e=g.pop();for(d=n(e.outline);d.sections.length>0;)d=n(d)}else if(l(a)||m(a))d=e.outline.sections[0]}},k=function(a){return a.tagName.toUpperCase()},p=function(a){return function(b){return z(b)&&(new RegExp(a,"i")).test(k(b))}},m=p("^BLOCKQUOTE|BODY|DETAILS|FIELDSET|FIGURE|TD$"),l=p("^ARTICLE|ASIDE|NAV|SECTION$"),h=p("^H[1-6]|HGROUP$"),z=function(a){return a&&a.tagName},j=function(a){var b=k(a);if(b=="HGROUP")for(b=
1;b<=6;b++){if(a.getElementsByTagName("H"+b).length>0)return-b}else return-parseInt(b.substr(1))},n=function(a){return o(a.sections)},o=function(a){return a[a.length-1]};HTML5Outline=function(a){s=0;t=a.ownerDocument||window.document;d=e=null;g=[];w(a,x,y);return e!=null?e.outline:null}})();
