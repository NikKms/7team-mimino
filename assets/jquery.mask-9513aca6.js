var K=(a,m)=>()=>(m||a((m={exports:{}}).exports,m),m.exports);var L=K((V,D)=>{(function(){const m=document.createElement("link").relList;if(m&&m.supports&&m.supports("modulepreload"))return;for(const v of document.querySelectorAll('link[rel="modulepreload"]'))C(v);new MutationObserver(v=>{for(const p of v)if(p.type==="childList")for(const e of p.addedNodes)e.tagName==="LINK"&&e.rel==="modulepreload"&&C(e)}).observe(document,{childList:!0,subtree:!0});function j(v){const p={};return v.integrity&&(p.integrity=v.integrity),v.referrerpolicy&&(p.referrerPolicy=v.referrerpolicy),v.crossorigin==="use-credentials"?p.credentials="include":v.crossorigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function C(v){if(v.ep)return;v.ep=!0;const p=j(v);fetch(v.href,p)}})();(function(a,m,j){typeof define=="function"&&define.amd?define(["jquery"],a):typeof V=="object"&&typeof Meteor>"u"?D.exports=a(require("jquery")):a(m||j)})(function(a){var m=function(e,s,u){var t={invalid:[],getCaret:function(){try{var r,i=0,n=e.get(0),c=document.selection,o=n.selectionStart;return c&&navigator.appVersion.indexOf("MSIE 10")===-1?(r=c.createRange(),r.moveStart("character",-t.val().length),i=r.text.length):(o||o==="0")&&(i=o),i}catch{}},setCaret:function(r){try{if(e.is(":focus")){var i,n=e.get(0);n.setSelectionRange?n.setSelectionRange(r,r):(i=n.createTextRange(),i.collapse(!0),i.moveEnd("character",r),i.moveStart("character",r),i.select())}}catch{}},events:function(){e.on("keydown.mask",function(r){e.data("mask-keycode",r.keyCode||r.which),e.data("mask-previus-value",e.val()),e.data("mask-previus-caret-pos",t.getCaret()),t.maskDigitPosMapOld=t.maskDigitPosMap}).on(a.jMaskGlobals.useInput?"input.mask":"keyup.mask",t.behaviour).on("paste.mask drop.mask",function(){setTimeout(function(){e.keydown().keyup()},100)}).on("change.mask",function(){e.data("changed",!0)}).on("blur.mask",function(){y!==t.val()&&!e.data("changed")&&e.trigger("change"),e.data("changed",!1)}).on("blur.mask",function(){y=t.val()}).on("focus.mask",function(r){u.selectOnFocus===!0&&a(r.target).select()}).on("focusout.mask",function(){u.clearIfNotMatch&&!w.test(t.val())&&t.val("")})},getRegexMask:function(){for(var r=[],i,n,c,o,h,d,k=0;k<s.length;k++)i=f.translation[s.charAt(k)],i?(n=i.pattern.toString().replace(/.{1}$|^.{1}/g,""),c=i.optional,o=i.recursive,o?(r.push(s.charAt(k)),h={digit:s.charAt(k),pattern:n}):r.push(!c&&!o?n:n+"?")):r.push(s.charAt(k).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"));return d=r.join(""),h&&(d=d.replace(new RegExp("("+h.digit+"(.*"+h.digit+")?)"),"($1)?").replace(new RegExp(h.digit,"g"),h.pattern)),new RegExp(d)},destroyEvents:function(){e.off(["input","keydown","keyup","paste","drop","blur","focusout",""].join(".mask "))},val:function(r){var i=e.is("input"),n=i?"val":"text",c;return arguments.length>0?(e[n]()!==r&&e[n](r),c=e):c=e[n](),c},calculateCaretPosition:function(r){var i=t.getMasked(),n=t.getCaret();if(r!==i){var c=e.data("mask-previus-caret-pos")||0,o=i.length,h=r.length,d=0,k=0,g=0,M=0,l=0;for(l=n;l<o&&t.maskDigitPosMap[l];l++)k++;for(l=n-1;l>=0&&t.maskDigitPosMap[l];l--)d++;for(l=n-1;l>=0;l--)t.maskDigitPosMap[l]&&g++;for(l=c-1;l>=0;l--)t.maskDigitPosMapOld[l]&&M++;if(n>h)n=o*10;else if(c>=n&&c!==h){if(!t.maskDigitPosMapOld[n]){var I=n;n-=M-g,n-=d,t.maskDigitPosMap[n]&&(n=I)}}else n>c&&(n+=g-M,n+=k)}return n},behaviour:function(r){r=r||window.event,t.invalid=[];var i=e.data("mask-keycode");if(a.inArray(i,f.byPassKeys)===-1){var n=t.getMasked(),c=t.getCaret(),o=e.data("mask-previus-value")||"";return setTimeout(function(){t.setCaret(t.calculateCaretPosition(o))},a.jMaskGlobals.keyStrokeCompensation),t.val(n),t.setCaret(c),t.callbacks(r)}},getMasked:function(r,i){var n=[],c=i===void 0?t.val():i+"",o=0,h=s.length,d=0,k=c.length,g=1,M="push",l=-1,I=0,G=[],P,E;u.reverse?(M="unshift",g=-1,P=0,o=h-1,d=k-1,E=function(){return o>-1&&d>-1}):(P=h-1,E=function(){return o<h&&d<k});for(var S;E();){var A=s.charAt(o),x=c.charAt(d),b=f.translation[A];b?(x.match(b.pattern)?(n[M](x),b.recursive&&(l===-1?l=o:o===P&&o!==l&&(o=l-g),P===l&&(o-=g)),o+=g):x===S?(I--,S=void 0):b.optional?(o+=g,d-=g):b.fallback?(n[M](b.fallback),o+=g,d-=g):t.invalid.push({p:d,v:x,e:b.pattern}),d+=g):(r||n[M](A),x===A?(G.push(d),d+=g):(S=A,G.push(d+I),I++),o+=g)}var R=s.charAt(P);h===k+1&&!f.translation[R]&&n.push(R);var O=n.join("");return t.mapMaskdigitPositions(O,G,k),O},mapMaskdigitPositions:function(r,i,n){var c=u.reverse?r.length-n:0;t.maskDigitPosMap={};for(var o=0;o<i.length;o++)t.maskDigitPosMap[i[o]+c]=1},callbacks:function(r){var i=t.val(),n=i!==y,c=[i,r,e,u],o=function(h,d,k){typeof u[h]=="function"&&d&&u[h].apply(this,k)};o("onChange",n===!0,c),o("onKeyPress",n===!0,c),o("onComplete",i.length===s.length,c),o("onInvalid",t.invalid.length>0,[i,r,e,t.invalid,u])}};e=a(e);var f=this,y=t.val(),w;s=typeof s=="function"?s(t.val(),void 0,e,u):s,f.mask=s,f.options=u,f.remove=function(){var r=t.getCaret();return f.options.placeholder&&e.removeAttr("placeholder"),e.data("mask-maxlength")&&e.removeAttr("maxlength"),t.destroyEvents(),t.val(f.getCleanVal()),t.setCaret(r),e},f.getCleanVal=function(){return t.getMasked(!0)},f.getMaskedVal=function(r){return t.getMasked(!1,r)},f.init=function(r){if(r=r||!1,u=u||{},f.clearIfNotMatch=a.jMaskGlobals.clearIfNotMatch,f.byPassKeys=a.jMaskGlobals.byPassKeys,f.translation=a.extend({},a.jMaskGlobals.translation,u.translation),f=a.extend(!0,{},f,u),w=t.getRegexMask(),r)t.events(),t.val(t.getMasked());else{u.placeholder&&e.attr("placeholder",u.placeholder),e.data("mask")&&e.attr("autocomplete","off");for(var i=0,n=!0;i<s.length;i++){var c=f.translation[s.charAt(i)];if(c&&c.recursive){n=!1;break}}n&&e.attr("maxlength",s.length).data("mask-maxlength",!0),t.destroyEvents(),t.events();var o=t.getCaret();t.val(t.getMasked()),t.setCaret(o)}},f.init(!e.is("input"))};a.maskWatchers={};var j=function(){var e=a(this),s={},u="data-mask-",t=e.attr("data-mask");if(e.attr(u+"reverse")&&(s.reverse=!0),e.attr(u+"clearifnotmatch")&&(s.clearIfNotMatch=!0),e.attr(u+"selectonfocus")==="true"&&(s.selectOnFocus=!0),C(e,t,s))return e.data("mask",new m(this,t,s))},C=function(e,s,u){u=u||{};var t=a(e).data("mask"),f=JSON.stringify,y=a(e).val()||a(e).text();try{return typeof s=="function"&&(s=s(y)),typeof t!="object"||f(t.options)!==f(u)||t.mask!==s}catch{}},v=function(e){var s=document.createElement("div"),u;return e="on"+e,u=e in s,u||(s.setAttribute(e,"return;"),u=typeof s[e]=="function"),s=null,u};a.fn.mask=function(e,s){s=s||{};var u=this.selector,t=a.jMaskGlobals,f=t.watchInterval,y=s.watchInputs||t.watchInputs,w=function(){if(C(this,e,s))return a(this).data("mask",new m(this,e,s))};return a(this).each(w),u&&u!==""&&y&&(clearInterval(a.maskWatchers[u]),a.maskWatchers[u]=setInterval(function(){a(document).find(u).each(w)},f)),this},a.fn.masked=function(e){return this.data("mask").getMaskedVal(e)},a.fn.unmask=function(){return clearInterval(a.maskWatchers[this.selector]),delete a.maskWatchers[this.selector],this.each(function(){var e=a(this).data("mask");e&&e.remove().removeData("mask")})},a.fn.cleanVal=function(){return this.data("mask").getCleanVal()},a.applyDataMask=function(e){e=e||a.jMaskGlobals.maskElements;var s=e instanceof a?e:a(e);s.filter(a.jMaskGlobals.dataMaskAttr).each(j)};var p={maskElements:"input,td,span,div",dataMaskAttr:"[data-mask]",dataMask:!0,watchInterval:300,watchInputs:!0,keyStrokeCompensation:10,useInput:!/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent)&&v("input"),watchDataMask:!1,byPassKeys:[9,16,17,18,36,37,38,39,40,91],translation:{0:{pattern:/\d/},9:{pattern:/\d/,optional:!0},"#":{pattern:/\d/,recursive:!0},A:{pattern:/[a-zA-Z0-9]/},S:{pattern:/[a-zA-Z]/}}};a.jMaskGlobals=a.jMaskGlobals||{},p=a.jMaskGlobals=a.extend(!0,{},p,a.jMaskGlobals),p.dataMask&&a.applyDataMask(),setInterval(function(){a.jMaskGlobals.watchDataMask&&a.applyDataMask()},p.watchInterval)},window.jQuery,window.Zepto)});export default L();
