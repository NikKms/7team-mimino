var W=(e,p)=>()=>(p||e((p={exports:{}}).exports,p),p.exports);var O=W((V,D)=>{new Swiper(".swiper",{direction:"horizontal",loop:!0,speed:1e3,parallax:!0,spaceBetween:30,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});(function(e,p,I){typeof define=="function"&&define.amd?define(["jquery"],e):typeof V=="object"&&typeof Meteor>"u"?D.exports=e(require("jquery")):e(p||I)})(function(e){var p=function(t,s,o){var a={invalid:[],getCaret:function(){try{var r,i=0,n=t.get(0),c=document.selection,u=n.selectionStart;return c&&navigator.appVersion.indexOf("MSIE 10")===-1?(r=c.createRange(),r.moveStart("character",-a.val().length),i=r.text.length):(u||u==="0")&&(i=u),i}catch{}},setCaret:function(r){try{if(t.is(":focus")){var i,n=t.get(0);n.setSelectionRange?n.setSelectionRange(r,r):(i=n.createTextRange(),i.collapse(!0),i.moveEnd("character",r),i.moveStart("character",r),i.select())}}catch{}},events:function(){t.on("keydown.mask",function(r){t.data("mask-keycode",r.keyCode||r.which),t.data("mask-previus-value",t.val()),t.data("mask-previus-caret-pos",a.getCaret()),a.maskDigitPosMapOld=a.maskDigitPosMap}).on(e.jMaskGlobals.useInput?"input.mask":"keyup.mask",a.behaviour).on("paste.mask drop.mask",function(){setTimeout(function(){t.keydown().keyup()},100)}).on("change.mask",function(){t.data("changed",!0)}).on("blur.mask",function(){m!==a.val()&&!t.data("changed")&&t.trigger("change"),t.data("changed",!1)}).on("blur.mask",function(){m=a.val()}).on("focus.mask",function(r){o.selectOnFocus===!0&&e(r.target).select()}).on("focusout.mask",function(){o.clearIfNotMatch&&!b.test(a.val())&&a.val("")})},getRegexMask:function(){for(var r=[],i,n,c,u,d,h,v=0;v<s.length;v++)i=f.translation[s.charAt(v)],i?(n=i.pattern.toString().replace(/.{1}$|^.{1}/g,""),c=i.optional,u=i.recursive,u?(r.push(s.charAt(v)),d={digit:s.charAt(v),pattern:n}):r.push(!c&&!u?n:n+"?")):r.push(s.charAt(v).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"));return h=r.join(""),d&&(h=h.replace(new RegExp("("+d.digit+"(.*"+d.digit+")?)"),"($1)?").replace(new RegExp(d.digit,"g"),d.pattern)),new RegExp(h)},destroyEvents:function(){t.off(["input","keydown","keyup","paste","drop","blur","focusout",""].join(".mask "))},val:function(r){var i=t.is("input"),n=i?"val":"text",c;return arguments.length>0?(t[n]()!==r&&t[n](r),c=t):c=t[n](),c},calculateCaretPosition:function(r){var i=a.getMasked(),n=a.getCaret();if(r!==i){var c=t.data("mask-previus-caret-pos")||0,u=i.length,d=r.length,h=0,v=0,k=0,g=0,l=0;for(l=n;l<u&&a.maskDigitPosMap[l];l++)v++;for(l=n-1;l>=0&&a.maskDigitPosMap[l];l--)h++;for(l=n-1;l>=0;l--)a.maskDigitPosMap[l]&&k++;for(l=c-1;l>=0;l--)a.maskDigitPosMapOld[l]&&g++;if(n>d)n=u*10;else if(c>=n&&c!==d){if(!a.maskDigitPosMapOld[n]){var y=n;n-=g-k,n-=h,a.maskDigitPosMap[n]&&(n=y)}}else n>c&&(n+=k-g,n+=v)}return n},behaviour:function(r){r=r||window.event,a.invalid=[];var i=t.data("mask-keycode");if(e.inArray(i,f.byPassKeys)===-1){var n=a.getMasked(),c=a.getCaret(),u=t.data("mask-previus-value")||"";return setTimeout(function(){a.setCaret(a.calculateCaretPosition(u))},e.jMaskGlobals.keyStrokeCompensation),a.val(n),a.setCaret(c),a.callbacks(r)}},getMasked:function(r,i){var n=[],c=i===void 0?a.val():i+"",u=0,d=s.length,h=0,v=c.length,k=1,g="push",l=-1,y=0,P=[],w,A;o.reverse?(g="unshift",k=-1,w=0,u=d-1,h=v-1,A=function(){return u>-1&&h>-1}):(w=d-1,A=function(){return u<d&&h<v});for(var E;A();){var C=s.charAt(u),j=c.charAt(h),M=f.translation[C];M?(j.match(M.pattern)?(n[g](j),M.recursive&&(l===-1?l=u:u===w&&u!==l&&(u=l-k),w===l&&(u-=k)),u+=k):j===E?(y--,E=void 0):M.optional?(u+=k,h-=k):M.fallback?(n[g](M.fallback),u+=k,h-=k):a.invalid.push({p:h,v:j,e:M.pattern}),h+=k):(r||n[g](C),j===C?(P.push(h),h+=k):(E=C,P.push(h+y),y++),u+=k)}var S=s.charAt(w);d===v+1&&!f.translation[S]&&n.push(S);var R=n.join("");return a.mapMaskdigitPositions(R,P,v),R},mapMaskdigitPositions:function(r,i,n){var c=o.reverse?r.length-n:0;a.maskDigitPosMap={};for(var u=0;u<i.length;u++)a.maskDigitPosMap[i[u]+c]=1},callbacks:function(r){var i=a.val(),n=i!==m,c=[i,r,t,o],u=function(d,h,v){typeof o[d]=="function"&&h&&o[d].apply(this,v)};u("onChange",n===!0,c),u("onKeyPress",n===!0,c),u("onComplete",i.length===s.length,c),u("onInvalid",a.invalid.length>0,[i,r,t,a.invalid,o])}};t=e(t);var f=this,m=a.val(),b;s=typeof s=="function"?s(a.val(),void 0,t,o):s,f.mask=s,f.options=o,f.remove=function(){var r=a.getCaret();return f.options.placeholder&&t.removeAttr("placeholder"),t.data("mask-maxlength")&&t.removeAttr("maxlength"),a.destroyEvents(),a.val(f.getCleanVal()),a.setCaret(r),t},f.getCleanVal=function(){return a.getMasked(!0)},f.getMaskedVal=function(r){return a.getMasked(!1,r)},f.init=function(r){if(r=r||!1,o=o||{},f.clearIfNotMatch=e.jMaskGlobals.clearIfNotMatch,f.byPassKeys=e.jMaskGlobals.byPassKeys,f.translation=e.extend({},e.jMaskGlobals.translation,o.translation),f=e.extend(!0,{},f,o),b=a.getRegexMask(),r)a.events(),a.val(a.getMasked());else{o.placeholder&&t.attr("placeholder",o.placeholder),t.data("mask")&&t.attr("autocomplete","off");for(var i=0,n=!0;i<s.length;i++){var c=f.translation[s.charAt(i)];if(c&&c.recursive){n=!1;break}}n&&t.attr("maxlength",s.length).data("mask-maxlength",!0),a.destroyEvents(),a.events();var u=a.getCaret();a.val(a.getMasked()),a.setCaret(u)}},f.init(!t.is("input"))};e.maskWatchers={};var I=function(){var t=e(this),s={},o="data-mask-",a=t.attr("data-mask");if(t.attr(o+"reverse")&&(s.reverse=!0),t.attr(o+"clearifnotmatch")&&(s.clearIfNotMatch=!0),t.attr(o+"selectonfocus")==="true"&&(s.selectOnFocus=!0),G(t,a,s))return t.data("mask",new p(this,a,s))},G=function(t,s,o){o=o||{};var a=e(t).data("mask"),f=JSON.stringify,m=e(t).val()||e(t).text();try{return typeof s=="function"&&(s=s(m)),typeof a!="object"||f(a.options)!==f(o)||a.mask!==s}catch{}},K=function(t){var s=document.createElement("div"),o;return t="on"+t,o=t in s,o||(s.setAttribute(t,"return;"),o=typeof s[t]=="function"),s=null,o};e.fn.mask=function(t,s){s=s||{};var o=this.selector,a=e.jMaskGlobals,f=a.watchInterval,m=s.watchInputs||a.watchInputs,b=function(){if(G(this,t,s))return e(this).data("mask",new p(this,t,s))};return e(this).each(b),o&&o!==""&&m&&(clearInterval(e.maskWatchers[o]),e.maskWatchers[o]=setInterval(function(){e(document).find(o).each(b)},f)),this},e.fn.masked=function(t){return this.data("mask").getMaskedVal(t)},e.fn.unmask=function(){return clearInterval(e.maskWatchers[this.selector]),delete e.maskWatchers[this.selector],this.each(function(){var t=e(this).data("mask");t&&t.remove().removeData("mask")})},e.fn.cleanVal=function(){return this.data("mask").getCleanVal()},e.applyDataMask=function(t){t=t||e.jMaskGlobals.maskElements;var s=t instanceof e?t:e(t);s.filter(e.jMaskGlobals.dataMaskAttr).each(I)};var x={maskElements:"input,td,span,div",dataMaskAttr:"[data-mask]",dataMask:!0,watchInterval:300,watchInputs:!0,keyStrokeCompensation:10,useInput:!/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent)&&K("input"),watchDataMask:!1,byPassKeys:[9,16,17,18,36,37,38,39,40,91],translation:{0:{pattern:/\d/},9:{pattern:/\d/,optional:!0},"#":{pattern:/\d/,recursive:!0},A:{pattern:/[a-zA-Z0-9]/},S:{pattern:/[a-zA-Z]/}}};e.jMaskGlobals=e.jMaskGlobals||{},x=e.jMaskGlobals=e.extend(!0,{},x,e.jMaskGlobals),x.dataMask&&e.applyDataMask(),setInterval(function(){e.jMaskGlobals.watchDataMask&&e.applyDataMask()},x.watchInterval)},window.jQuery,window.Zepto)});export default O();
