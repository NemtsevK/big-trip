(()=>{var t={484:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",i="second",s="minute",r="hour",o="day",a="week",c="month",l="quarter",u="year",d="date",f="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},v=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},$={s:v,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+v(i,2,"0")+":"+v(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(i,c),r=n-s<0,o=e.clone().add(i+(r?-1:1),c);return+(-(i+(n-s)/(r?s-o:o-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:u,w:a,d:o,D:d,h:r,m:s,s:i,ms:n,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},_="en",y={};y[_]=m;var g="$isDayjsObject",b=function(t){return t instanceof S||!(!t||!t[g])},M=function t(e,n,i){var s;if(!e)return _;if("string"==typeof e){var r=e.toLowerCase();y[r]&&(s=r),n&&(y[r]=n,s=r);var o=e.split("-");if(!s&&o.length>1)return t(o[0])}else{var a=e.name;y[a]=e,s=a}return!i&&s&&(_=s),s||!i&&_},w=function(t,e){if(b(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},D=$;D.l=M,D.i=b,D.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function m(t){this.$L=M(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[g]=!0}var v=m.prototype;return v.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(D.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(h);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(e)}(t),this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return D},v.isValid=function(){return!(this.$d.toString()===f)},v.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},v.isAfter=function(t,e){return w(t)<this.startOf(e)},v.isBefore=function(t,e){return this.endOf(e)<w(t)},v.$g=function(t,e,n){return D.u(t)?this[e]:this.set(n,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,e){var n=this,l=!!D.u(e)||e,f=D.p(t),h=function(t,e){var i=D.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return l?i:i.endOf(o)},p=function(t,e){return D.w(n.toDate()[t].apply(n.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,v=this.$M,$=this.$D,_="set"+(this.$u?"UTC":"");switch(f){case u:return l?h(1,0):h(31,11);case c:return l?h(1,v):h(0,v+1);case a:var y=this.$locale().weekStart||0,g=(m<y?m+7:m)-y;return h(l?$-g:$+(6-g),v);case o:case d:return p(_+"Hours",0);case r:return p(_+"Minutes",1);case s:return p(_+"Seconds",2);case i:return p(_+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,e){var a,l=D.p(t),f="set"+(this.$u?"UTC":""),h=(a={},a[o]=f+"Date",a[d]=f+"Date",a[c]=f+"Month",a[u]=f+"FullYear",a[r]=f+"Hours",a[s]=f+"Minutes",a[i]=f+"Seconds",a[n]=f+"Milliseconds",a)[l],p=l===o?this.$D+(e-this.$W):e;if(l===c||l===u){var m=this.clone().set(d,1);m.$d[h](p),m.init(),this.$d=m.set(d,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},v.set=function(t,e){return this.clone().$set(t,e)},v.get=function(t){return this[D.p(t)]()},v.add=function(n,l){var d,f=this;n=Number(n);var h=D.p(l),p=function(t){var e=w(f);return D.w(e.date(e.date()+Math.round(t*n)),f)};if(h===c)return this.set(c,this.$M+n);if(h===u)return this.set(u,this.$y+n);if(h===o)return p(1);if(h===a)return p(7);var m=(d={},d[s]=t,d[r]=e,d[i]=1e3,d)[h]||1,v=this.$d.getTime()+n*m;return D.w(v,this)},v.subtract=function(t,e){return this.add(-1*t,e)},v.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var i=t||"YYYY-MM-DDTHH:mm:ssZ",s=D.z(this),r=this.$H,o=this.$m,a=this.$M,c=n.weekdays,l=n.months,u=n.meridiem,d=function(t,n,s,r){return t&&(t[n]||t(e,i))||s[n].slice(0,r)},h=function(t){return D.s(r%12||12,t,"0")},m=u||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i};return i.replace(p,(function(t,i){return i||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return D.s(e.$y,4,"0");case"M":return a+1;case"MM":return D.s(a+1,2,"0");case"MMM":return d(n.monthsShort,a,l,3);case"MMMM":return d(l,a);case"D":return e.$D;case"DD":return D.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return d(n.weekdaysMin,e.$W,c,2);case"ddd":return d(n.weekdaysShort,e.$W,c,3);case"dddd":return c[e.$W];case"H":return String(r);case"HH":return D.s(r,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return m(r,o,!0);case"A":return m(r,o,!1);case"m":return String(o);case"mm":return D.s(o,2,"0");case"s":return String(e.$s);case"ss":return D.s(e.$s,2,"0");case"SSS":return D.s(e.$ms,3,"0");case"Z":return s}return null}(t)||s.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(n,d,f){var h,p=this,m=D.p(d),v=w(n),$=(v.utcOffset()-this.utcOffset())*t,_=this-v,y=function(){return D.m(p,v)};switch(m){case u:h=y()/12;break;case c:h=y();break;case l:h=y()/3;break;case a:h=(_-$)/6048e5;break;case o:h=(_-$)/864e5;break;case r:h=_/e;break;case s:h=_/t;break;case i:h=_/1e3;break;default:h=_}return f?h:D.a(h)},v.daysInMonth=function(){return this.endOf(c).$D},v.$locale=function(){return y[this.$L]},v.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=M(t,e,!0);return i&&(n.$L=i),n},v.clone=function(){return D.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},m}(),T=S.prototype;return w.prototype=T,[["$ms",n],["$s",i],["$m",s],["$H",r],["$W",o],["$M",c],["$y",u],["$D",d]].forEach((function(t){T[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,S,w),t.$i=!0),w},w.locale=M,w.isDayjs=b,w.unix=function(t){return w(1e3*t)},w.en=y[_],w.Ls=y,w.p={},w}()},646:function(t){t.exports=function(){"use strict";var t,e,n=1e3,i=6e4,s=36e5,r=864e5,o=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,a=31536e6,c=2628e6,l=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,u={years:a,months:c,days:r,hours:s,minutes:i,seconds:n,milliseconds:1,weeks:6048e5},d=function(t){return t instanceof _},f=function(t,e,n){return new _(t,n,e.$l)},h=function(t){return e.p(t)+"s"},p=function(t){return t<0},m=function(t){return p(t)?Math.ceil(t):Math.floor(t)},v=function(t){return Math.abs(t)},$=function(t,e){return t?p(t)?{negative:!0,format:""+v(t)+e}:{negative:!1,format:""+t+e}:{negative:!1,format:""}},_=function(){function p(t,e,n){var i=this;if(this.$d={},this.$l=n,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),e)return f(t*u[h(e)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach((function(e){i.$d[h(e)]=t[e]})),this.calMilliseconds(),this;if("string"==typeof t){var s=t.match(l);if(s){var r=s.slice(2).map((function(t){return null!=t?Number(t):0}));return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var v=p.prototype;return v.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce((function(e,n){return e+(t.$d[n]||0)*u[n]}),0)},v.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=m(t/a),t%=a,this.$d.months=m(t/c),t%=c,this.$d.days=m(t/r),t%=r,this.$d.hours=m(t/s),t%=s,this.$d.minutes=m(t/i),t%=i,this.$d.seconds=m(t/n),t%=n,this.$d.milliseconds=t},v.toISOString=function(){var t=$(this.$d.years,"Y"),e=$(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var i=$(n,"D"),s=$(this.$d.hours,"H"),r=$(this.$d.minutes,"M"),o=this.$d.seconds||0;this.$d.milliseconds&&(o+=this.$d.milliseconds/1e3,o=Math.round(1e3*o)/1e3);var a=$(o,"S"),c=t.negative||e.negative||i.negative||s.negative||r.negative||a.negative,l=s.format||r.format||a.format?"T":"",u=(c?"-":"")+"P"+t.format+e.format+i.format+l+s.format+r.format+a.format;return"P"===u||"-P"===u?"P0D":u},v.toJSON=function(){return this.toISOString()},v.format=function(t){var n=t||"YYYY-MM-DDTHH:mm:ss",i={Y:this.$d.years,YY:e.s(this.$d.years,2,"0"),YYYY:e.s(this.$d.years,4,"0"),M:this.$d.months,MM:e.s(this.$d.months,2,"0"),D:this.$d.days,DD:e.s(this.$d.days,2,"0"),H:this.$d.hours,HH:e.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:e.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:e.s(this.$d.seconds,2,"0"),SSS:e.s(this.$d.milliseconds,3,"0")};return n.replace(o,(function(t,e){return e||String(i[t])}))},v.as=function(t){return this.$ms/u[h(t)]},v.get=function(t){var e=this.$ms,n=h(t);return"milliseconds"===n?e%=1e3:e="weeks"===n?m(e/u[n]):this.$d[n],e||0},v.add=function(t,e,n){var i;return i=e?t*u[h(e)]:d(t)?t.$ms:f(t,this).$ms,f(this.$ms+i*(n?-1:1),this)},v.subtract=function(t,e){return this.add(t,e,!0)},v.locale=function(t){var e=this.clone();return e.$l=t,e},v.clone=function(){return f(this.$ms,this)},v.humanize=function(e){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!e)},v.valueOf=function(){return this.asMilliseconds()},v.milliseconds=function(){return this.get("milliseconds")},v.asMilliseconds=function(){return this.as("milliseconds")},v.seconds=function(){return this.get("seconds")},v.asSeconds=function(){return this.as("seconds")},v.minutes=function(){return this.get("minutes")},v.asMinutes=function(){return this.as("minutes")},v.hours=function(){return this.get("hours")},v.asHours=function(){return this.as("hours")},v.days=function(){return this.get("days")},v.asDays=function(){return this.as("days")},v.weeks=function(){return this.get("weeks")},v.asWeeks=function(){return this.as("weeks")},v.months=function(){return this.get("months")},v.asMonths=function(){return this.as("months")},v.years=function(){return this.get("years")},v.asYears=function(){return this.as("years")},p}(),y=function(t,e,n){return t.add(e.years()*n,"y").add(e.months()*n,"M").add(e.days()*n,"d").add(e.hours()*n,"h").add(e.minutes()*n,"m").add(e.seconds()*n,"s").add(e.milliseconds()*n,"ms")};return function(n,i,s){t=s,e=s().$utils(),s.duration=function(t,e){var n=s.locale();return f(t,{$l:n},e)},s.isDuration=d;var r=i.prototype.add,o=i.prototype.subtract;i.prototype.add=function(t,e){return d(t)?y(this,t,1):r.bind(this)(t,e)},i.prototype.subtract=function(t,e){return d(t)?y(this,t,-1):o.bind(this)(t,e)}}}()},181:function(t){t.exports=function(){"use strict";return function(t,e,n){var i=function(t,e){if(!e||!e.length||1===e.length&&!e[0]||1===e.length&&Array.isArray(e[0])&&!e[0].length)return null;var n;1===e.length&&e[0].length>0&&(e=e[0]),n=(e=e.filter((function(t){return t})))[0];for(var i=1;i<e.length;i+=1)e[i].isValid()&&!e[i][t](n)||(n=e[i]);return n};n.max=function(){var t=[].slice.call(arguments,0);return i("isAfter",t)},n.min=function(){var t=[].slice.call(arguments,0);return i("isBefore",t)}}}()}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var r=e[i]={exports:{}};return t[i].call(r.exports,r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t){const e=document.createElement("div");return e.innerHTML=t,e.firstElementChild}function e(t,e,n="beforeend"){e.insertAdjacentElement(n,t.getElement())}var i=n(484),s=n.n(i),r=n(181),o=n.n(r),a=n(646),c=n.n(a);const l=36e5,u="D MMM",d="MMM DD",f="HH:mm",h="DD/MM/YY[&nbsp;]HH:mm",p="HH[H] mm[M]",m="DD[D] HH[H] mm[M]",v=["everything","future","present","past"],$=v[0],_=["day","event","time","price","offers"],y=_[0],g=["taxi","bus","train","ship","drive","flight","check-in","sightseeing","restaurant"];function b(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function M(t,e){return t?s()(t).format(e):""}s().extend(o()),s().extend(c());const w=(t,e)=>t.find((t=>t.type===e));function D(t,e){return Array.isArray(e)?t.filter((t=>e.find((e=>t.id===e)))):t.find((t=>t.id===e))}function S(t,e,n){return`<section class="trip-main__trip-info  trip-info">\n        <div class="trip-info__main">\n          <h1 class="trip-info__title">${function(t,e){const n=((t,e)=>e&&e.length>0?[...new Set(e.map((e=>t.find((t=>e.destination===t.id)))).map((t=>t.name)))]:[...new Set(t.map((t=>t.name)))])(e,t);return n.length>3?`${n.at(0)} &mdash;...&mdash; ${n.at(-1)}`:n.join(" &mdash; ")}(t,n)}</h1>\n\n          <p class="trip-info__dates">${i=t,M(s().min(i.map((t=>s()(t.dateFrom)))),u)}&nbsp;&mdash;&nbsp;${(t=>M(s().max(t.map((t=>s()(t.dateTo)))),u))(t)}</p>\n        </div>\n\n        <p class="trip-info__cost">\n          Total: &euro;&nbsp;<span class="trip-info__cost-value">${((t,e)=>{const n=t.map((t=>t.basePrice)).reduce(((t,e)=>t+e),0),i=t.map((t=>t.offers)).flat(1/0);return n+e.map((t=>t.offers)).flat().filter((t=>i.find((e=>e===t.id)))).map((t=>t.price)).reduce(((t,e)=>t+e),0)})(t,e)}</span>\n        </p>\n      </section>`;var i}class T{constructor({points:t,offers:e,destinations:n}){this.points=t,this.offers=e,this.destinations=n}getTemplate(){return S(this.points,this.offers,this.destinations)}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}class k{getTemplate(){return`<form class="trip-filters" action="#" method="get">\n      ${v.map((t=>function(t){return`<div class="trip-filters__filter">\n      <input id="filter-${t}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${t}" ${$===t?"checked":""}>\n      <label class="trip-filters__filter-label" for="filter-${t}">${t}</label>\n    </div>`}(t))).join("")}\n      <button class="visually-hidden" type="submit">Accept filter</button>\n    </form>`}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}class O{getTemplate(){return`<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n      ${_.map((t=>{return`<div class="trip-sort__item  trip-sort__item--${e=t}">\n      <input id="sort-${e}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${e}" ${y===e?"checked":""}>\n      <label class="trip-sort__btn" for="sort-${e}">${e}</label>\n    </div>`;var e})).join("")}\n    </form>`}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}class C{getTemplate(){return'<ul class="trip-events__list"></ul>'}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}class x{constructor({points:t,offers:e,destinations:n}){this.points=t,this.offers=e,this.destinations=n}getTemplate(){return function(t,e,n){const{type:i,dateFrom:r,dateTo:o,isFavorite:a,basePrice:c,offers:u,destination:h}=t,v=D(n,h),{name:$}=v,_=D(w(e,i).offers,u);return`<li class="trip-events__item">\n      <div class="event">\n        <time class="event__date" datetime=${r}>${M(r,d)}</time>\n        <div class="event__type">\n          <img class="event__type-icon" width="42" height="42" src="img/icons/${i}.png" alt="Event type icon">\n        </div>\n        <h3 class="event__title">${i} ${$}</h3>\n        <div class="event__schedule">\n          <p class="event__time">\n            <time class="event__start-time" datetime=${r}>${M(r,f)}</time>\n            &mdash;\n            <time class="event__end-time" datetime=${o}>${M(o,f)}</time>\n          </p>\n          <p class="event__duration">${function(t,e){const n=s()(e).diff(t);let i;return i=n<l?s().duration(n).format("mm[M]"):n<864e5?s().duration(n).format(p):s().duration(n).format(m),i}(r,o)}</p>\n        </div>\n        <p class="event__price">\n          &euro;&nbsp;<span class="event__price-value">${c}</span>\n        </p>\n        <h4 class="visually-hidden">Offers:</h4>\n        <ul class="event__selected-offers">\n          ${_.map((t=>function({title:t,price:e}){return`<li class="event__offer">\n        <span class="event__offer-title">${t}</span>\n        &plus;&euro;&nbsp;\n        <span class="event__offer-price">${e}</span>\n    </li>`}(t))).join("")}\n        </ul>\n        <button class="event__favorite-btn ${a&&"event__favorite-btn--active"}" onclick="this.classList.toggle('event__favorite-btn--active')" type="button">\n          <span class="visually-hidden">Add to favorite</span>\n          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n          </svg>\n        </button>\n        <button class="event__rollup-btn" type="button">\n          <span class="visually-hidden">Open event</span>\n        </button>\n      </div>\n    </li>`}(this.points,this.offers,this.destinations)}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}class H{constructor({points:t,offers:e,destinations:n}){this.points=t,this.offers=e,this.destinations=n}getTemplate(){return function(t,e,n){const{id:i,type:s,dateFrom:r,dateTo:o,basePrice:a,offers:c,destination:l}=t,u=w(e,s),d=D(n,l),{name:f}=d;return`<li class="trip-events__item">\n      <form class="event event--edit" action="#" method="post">\n        <header class="event__header">\n          <div class="event__type-wrapper">\n            <label class="event__type  event__type-btn" for="event-type-toggle-${i}">\n              <span class="visually-hidden">Choose event type</span>\n              <img class="event__type-icon" width="17" height="17" src="img/icons/${s}.png" alt="Event type icon">\n            </label>\n            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-${i}" type="checkbox">\n\n            <div class="event__type-list">\n              <fieldset class="event__type-group">\n                <legend class="visually-hidden">Event type</legend>\n\n                ${g.map((t=>function(t,e,n){return`<div class="event__type-item">\n      <input id="event-type-${t}-${n}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${t}" ${e===t&&"checked"}>\n      <label class="event__type-label  event__type-label--${t}" for="event-type-${t}-${n}">${(t=>t.charAt(0).toUpperCase()+t.substring(1))(t)}</label>\n    </div>`}(t,s,i))).join("")}\n              </fieldset>\n            </div>\n          </div>\n\n          <div class="event__field-group  event__field-group--destination">\n            <label class="event__label  event__type-output" for="event-destination-${i}">\n              ${s}\n            </label>\n            <input class="event__input  event__input--destination" id="event-destination-${i}" type="text" name="event-destination" value='${f}' list="destination-list-${i}">\n            <datalist id="destination-list-${i}">\n              ${n.map((t=>`<option value=${t.name}></option>`))}\n            </datalist>\n          </div>\n\n          <div class="event__field-group  event__field-group--time">\n            <label class="visually-hidden" for="event-start-time-${i}">From</label>\n            <input class="event__input  event__input--time" id="event-start-time-${i}" type="text" name="event-start-time" value=${M(r,h)}>\n            &mdash;\n            <label class="visually-hidden" for="event-end-time-${i}">To</label>\n            <input class="event__input  event__input--time" id="event-end-time-${i}" type="text" name="event-end-time" value=${M(o,h)}>\n          </div>\n\n          <div class="event__field-group  event__field-group--price">\n            <label class="event__label" for="event-price-${i}">\n              <span class="visually-hidden">Price</span>\n              &euro;\n            </label>\n            <input class="event__input  event__input--price" id="event-price-${i}" type="text" name="event-price" value=${a}>\n          </div>\n\n          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n          <button class="event__reset-btn" type="reset">Delete</button>\n          <button class="event__rollup-btn" type="button">\n            <span class="visually-hidden">Open event</span>\n          </button>\n        </header>\n        <section class="event__details">\n          ${function({offers:t},e){return 0!==t.length?`<section class="event__section  event__section--offers">\n        <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n        <div class="event__available-offers">\n          ${t.map((t=>function(t,e){const{id:n,title:i,price:s}=t;return`<div class="event__offer-selector">\n      <input class="event__offer-checkbox  visually-hidden" id=${n} type="checkbox" name=${n} ${!!e.includes(n)&&"checked"}>\n      <label class="event__offer-label" for=${n}>\n        <span class="event__offer-title">${i}</span>\n        &plus;&euro;&nbsp;\n        <span class="event__offer-price">${s}</span>\n      </label>\n    </div>`}(t,e))).join("")}\n        </div>\n      </section>`:""}(u,c)}\n          ${function(t){const{description:e,pictures:n}=t||{};return e.length>0||n.length>0?`<section class="event__section  event__section--destination">\n        <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n        <p class="event__destination-description">${e}</p>\n\n        ${function(t){return t.length?`<div class="event__photos-container">\n        <div class="event__photos-tape">\n          ${t.map((t=>function(t){const{src:e,description:n}=t;return`<img class="event__photo" src=${e} alt=${n}>`}(t))).join("")}\n        </div>\n      </div>`:""}(n)}\n      </section>`:""}(d)}\n        </section>\n      </form>\n    </li>`}(this.points,this.offers,this.destinations)}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}const F=[{id:"d-1",description:"Geneva is a city in Switzerland that lies at the southern tip of expansive Lac Léman (Lake Geneva). Surrounded by the Alps and Jura mountains, the city has views of dramatic Mont Blanc.",name:"Amsterdam",pictures:[{src:"https://loremflickr.com/248/152?=1",description:"Amsterdam beautiful place"},{src:"https://loremflickr.com/248/152?=2",description:"Amsterdam old city"}]},{id:"d-2",description:"Chamonix, is a beautiful city, a true asian pearl, with crowded streets.",name:"Chamonix",pictures:[{src:"https://loremflickr.com/248/152?=3",description:"Chamonix parliament building"},{src:"https://loremflickr.com/248/152?=4",description:"Chamonix old city"},{src:"https://loremflickr.com/248/152?=5",description:"Chamonix beautiful place"}]},{id:"d-3",description:"Geneva is a city in Switzerland that lies at the southern tip of expansive Lac Léman (Lake Geneva). Surrounded by the Alps and Jura mountains, the city has views of dramatic Mont Blanc.",name:"Geneva",pictures:[]}],Y=[{type:"taxi",offers:[{id:"of-01",title:"Upgrade to a business class",price:175},{id:"of-02",title:"Choose the radio station",price:40},{id:"of-03",title:"Choose temperature",price:40}]},{type:"bus",offers:[{id:"of-04",title:"Infotainment system",price:182},{id:"of-05",title:"Order meal",price:126},{id:"of-06",title:"Choose seats",price:45}]},{type:"train",offers:[{id:"of-07",title:"Book a taxi at the arrival point",price:178},{id:"of-08",title:"Order a breakfast",price:33},{id:"of-09",title:"Wake up at a certain time",price:53}]},{type:"flight",offers:[{id:"of-10",title:"Choose meal",price:199},{id:"of-11",title:"Choose seats",price:117},{id:"of-12",title:"Upgrade to comfort class",price:91},{id:"of-13",title:"Upgrade to business class",price:173},{id:"of-14",title:"Add luggage",price:184},{id:"of-15",title:"Business lounge",price:200}]},{type:"check-in",offers:[{id:"of-16",title:"Choose the time of check-in",price:198},{id:"of-17",title:"Choose the time of check-out",price:189},{id:"of-18",title:"Add breakfast",price:56},{id:"of-19",title:"Laundry",price:168},{id:"of-20",title:"Order a meal from the restaurant",price:36}]},{type:"sightseeing",offers:[]},{type:"ship",offers:[{id:"of-21",title:"Choose meal",price:186},{id:"of-22",title:"Choose seats",price:183},{id:"of-23",title:"Upgrade to comfort class",price:123},{id:"of-24",title:"Upgrade to business class",price:156}]},{type:"drive",offers:[{id:"of-25",title:"With automatic transmission",price:163},{id:"of-26",title:"With air conditioning",price:103}]},{type:"restaurant",offers:[{id:"of-27",title:"Choose live music",price:55},{id:"of-28",title:"Choose VIP area",price:43}]}],L=[{id:"p-01",basePrice:b(10,1e3),dateFrom:"2023-03-18T10:30:00.000Z",dateTo:"2023-03-18T11:00:00.000Z",destination:"d-1",isFavorite:!!b(0,1),offers:["of-1","of-2"],type:"taxi"},{id:"p-02",basePrice:b(10,1e3),dateFrom:"2023-03-18T12:25:00.000Z",dateTo:"2023-03-18T13:35:00.000Z",destination:"d-2",isFavorite:!!b(0,1),offers:["of-10","of-13"],type:"flight"},{id:"p-03",basePrice:b(10,1e3),dateFrom:"2023-03-18T14:30:00.000Z",dateTo:"2023-03-18T16:05:00.000Z",destination:"d-2",isFavorite:!!b(0,1),offers:["of-25"],type:"drive"},{id:"p-04",basePrice:b(10,1e3),dateFrom:"2023-03-18T16:20:00.000Z",dateTo:"2023-03-18T17:00:00.000Z",destination:"d-2",isFavorite:!!b(0,1),offers:["of-17","of-18","of-20"],type:"check-in"},{id:"p-05",basePrice:b(10,1e3),dateFrom:"2023-03-19T13:00:00.000Z",dateTo:"2023-03-19T14:20:00.000Z",destination:"d-2",isFavorite:!!b(0,1),offers:[],type:"sightseeing"},{id:"p-07",basePrice:b(10,1e3),dateFrom:"2023-03-19T16:00:00.000Z",dateTo:"2023-03-19T17:00:00.000Z",destination:"d-2",isFavorite:!!b(0,1),offers:["of-26"],type:"drive"},{id:"p-08",basePrice:b(10,1e3),dateFrom:"2023-03-19T18:00:00.000Z",dateTo:"2023-03-19T19:00:00.000Z",destination:"d-3",isFavorite:!!b(0,1),offers:["of-10","of-12","of-14","of-15"],type:"flight"},{id:"p-09",basePrice:b(10,1e3),dateFrom:"2023-03-20T08:25:00.000Z",dateTo:"2023-03-20T09:25:00.000Z",destination:"d-3",isFavorite:!!b(0,1),offers:["of-25","of-26"],type:"drive"},{id:"p-10",basePrice:b(10,1e3),dateFrom:"2023-03-20T08:25:00.000Z",dateTo:"2023-03-20T09:25:00.000Z",destination:"d-3",isFavorite:!!b(0,1),offers:[],type:"sightseeing"}],P=document.querySelector(".page-header"),A=P.querySelector(".trip-main"),E=P.querySelector(".trip-controls__filters"),Z=document.querySelector(".page-main").querySelector(".trip-events"),j=new class{#t=[];#e=[];#n=[];init(){this.#t=function(){const t=Array.from({length:0});for(;t.length<8;){const n=(e=L)[Math.floor(Math.random()*e.length)];t.includes(n)||t.push(n)}var e;return t}(),this.#e=Y,this.#n=F}getPoints(){return this.#t}getOffers(){return this.#e}getDestinations(){return this.#n}};j.init();const W=new class{pointListView=new C;sortListView=new O;filterListView=new k;constructor({infoContainer:t,filterContainer:e,tripContainer:n,pointModel:i}){this.infoContainer=t,this.filterContainer=e,this.tripContainer=n,this.pointModel=i}init(){const t=this.pointModel.getPoints(),n=this.pointModel.getOffers(),i=this.pointModel.getDestinations();this.tripPoint=[...t],e(new T({points:t,offers:n,destinations:i}),this.infoContainer,"afterbegin"),e(this.filterListView,this.filterContainer),e(this.sortListView,this.tripContainer),e(this.pointListView,this.tripContainer),e(new H({points:this.tripPoint[0],offers:n,destinations:i}),this.pointListView.getElement());for(let t=1;t<this.tripPoint.length;t++)e(new x({points:this.tripPoint[t],offers:n,destinations:i}),this.pointListView.getElement())}}({infoContainer:A,filterContainer:E,tripContainer:Z,pointModel:j});W.init()})()})();
//# sourceMappingURL=bundle.2950cc4ef70e865383c1.js.map