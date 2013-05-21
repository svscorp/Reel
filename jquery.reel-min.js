/*
 Copyright (c) 2009-2013 Petr Vostrel (http://petr.vostrel.cz/)
 Dual licensed under the MIT (MIT-LICENSE.txt)
 and GPL (GPL-LICENSE.txt) licenses.

 jQuery Reel
 http://jquery.vostrel.cz/reel
 Version: 1.2-devel
 Updated: 2013-05-21

 Requires jQuery 1.5 or higher
*/
jQuery.reel||function(k,zb,ea,s){function Yb(e){return q.instances.push(e[0])&&e}function Zb(e){return(q.instances=q.instances.not(Ia(e.attr(W))))&&e}function X(e){return q.instances.first().data(e)}function $b(e){return"data:image/gif;base64,R0lGODlh"+e}function Y(e){return"<"+e+"/>"}function w(e){return"."+(e||"")}function Ja(e){return e.replace(ta,q.cdn)}function ua(e){return"url('"+db(e)+"')"}function Ab(e,j){return typeof j==eb?j[e]:j}function va(e,j,o){return fb(e,Ka(j,o))}function La(e,j){return K(e)*
(j?-1:1)}function Ma(e){return la?e.touch||e.originalEvent.touches[0]:e}function A(e){return e===s?0:typeof e==gb?e:e+"px"}function Ia(e){return"#"+e}function ac(e,j,o){for(;e.length<j;)e=o+e;return e}function db(e){return encodeURI(decodeURI(e))}function hb(e){return q.re.array.exec(e)?e.split(q.re.array):e}function Bb(e){return typeof e==gb?e:k.each(e,function(j,o){e[j]=o?+o:s})}function Cb(e){try{console.warn("Deprecation - Please consult https://github.com/pisi/Reel/wiki/Deprecations")}catch(j){}return e}
if(!(!k||+k().jquery.replace(".",U).substr(0,2)<15)){var q=k.reel={version:"1.2-devel",def:{frame:1,frames:36,loops:true,clickfree:false,draggable:true,scrollable:true,steppable:true,throwable:true,wheelable:true,cw:false,revolution:s,stitched:0,directional:false,row:1,rows:0,orbital:0,vertical:false,inversed:false,footage:6,spacing:0,horizontal:true,suffix:"-reel",image:s,images:"",path:"",preload:"fidelity",speed:0,delay:0,timeout:2,duration:s,rebound:0.5,entry:s,opening:0,brake:0.23,velocity:0,
tempo:36,laziness:6,cursor:s,hint:"",indicator:0,klass:"",preloader:2,area:s,attr:{},annotations:s,graph:s,monitor:s,step:s,steps:s},scan:function(){return k(w(B)+":not("+w(ib)+" >)").each(function(e,j){e=k(j);j=e.data();j.images=hb(j.images);var o={};k(w(Db)+"[data-for="+e.attr(W)+"]").each(function(t,r){t=k(r);r=t.data();r.x=Bb(hb(r.x));r.y=Bb(hb(r.y));var b=t.attr(W);r.node=t.removeData();o[b]=r});j.annotations=o;e.removeData().reel(j)})},fn:{reel:function(){var e=arguments,j=k(this),o=j.data(),
t=e[0]||{},r=e[1];if(typeof t=="object"){var b=k.extend({},q.def,t);e=j.filter(jb).unreel().filter(function(){var i=k(this),g=b.attr,d=g.src||i.attr("src"),D=g.width||i.width();i=g.height||i.height();if(d&&D&&i)return true});var Z=[];b.step&&(b.frame=b.step);b.steps&&(b.frames=b.steps);e.each(function(){var i=k(this),g=function(a,c){return i.reel(a,c)&&c},d=function(a){return i.reel(a)},D={setup:function(){if(!(i.hasClass(B)&&i.parent().hasClass(ib))){g(wa,b);var a=i.attr(b.attr).attr("src"),c=g(W,
i.attr(W)||i.attr(W,B+"-"+ +new Date).attr(W)),f=i.attr(ma),h=k.extend({},i.data()),l=g(fa,b.images||[]),p=b.stitched,m=b.loops,n=b.orbital,x=b.revolution,C=b.rows,u=b.footage,H={x:i.width(),y:i.height()},v=g(L,n&&u||C<=1&&l.length||b.frames),ga=C>1||n;g(Na,Ab("x",x)||p/2||H.x*2);g(Eb,!ga?0:Ab("y",x)||(C>3?H.y:H.y/(5-C)));C=p?1:na(v/u);c=Ia(c+b.suffix);x=i[0].className||U;u=k(Y(xa),{id:c.substr(1),"class":x+E+ib+E+Fb+"0"});u=i.wrap(u.addClass(b.klass)).attr({"class":B});Z.push(Yb(u)[0]);u=u.parent().bind(D.instance);
g(kb,l.length?U:b.image||a.replace(q.re.image,"$1"+b.suffix+".$2"));g(Gb,[]);g(Hb,b.spacing);g(V,null);g(z,null);g(ya,null);g(oa,null);g(lb,C);g(J,H);g(Oa,1/(v-(m&&!p?0:1)));g(Ib,p-(m?0:H.x));g(mb,0);g(Jb,c);g(M,g(za,b.speed)<0);g(ha,0);g(pa,b.vertical);g(O,0);g(qa,La(1,!b.cw&&!p));g(Pa,{});g(Aa,false);g(Qa,g(nb,0));g(Ra,g(Sa,0));g(Ba,false);g(ob,false);g($,false);g(Kb,b.brake);g(pb,!!n);g(aa,b.tempo/(q.lazy?b.laziness:1));g(ra,-1);g(Ta,-1);g(Ua,b.annotations||u.unbind(w(Ua))&&{});g(Lb,{src:a,classes:x,
style:f||U,data:h});b.steppable||u.unbind("up.steppable");b.indicator||u.unbind(".indicator");F(U,{width:H.x,height:H.y,overflow:qb,position:"relative"});F(ia+E+w(B),{display:Mb});P.bind(D.pool);i.trigger("setup")}},instance:{teardown:function(){var a=i.data(Lb);i.parent().unbind(D.instance);d(ma).remove();d(Va).unbind(Q);Zb(i.unbind(Q).removeData().siblings().unbind(Q).remove().end().attr({"class":a.classes,src:a.src,style:a.style}).data(a.data).unwrap());Wa();P.unbind(D.pool);ba.unbind(ca)},setup:function(){function a(n){return i.trigger("down",
[Ma(n).clientX,Ma(n).clientY,n])&&n.give}function c(n,x){return!x||i.trigger("wheel",[x,n])&&n.give}var f=d(J);d(L);i.attr(W);var h=b.rows,l=b.stitched,p=i.parent(),m=g(Va,k(b.area||p));h=b.rows||1;F(E+w(B),{MozUserSelect:Ca,WebkitUserSelect:Ca});if(la){F(E+w(B),{WebkitBackgroundSize:d(fa).length?!l?s:A(l)+E+A(f.y):l&&A(l)+E+A((f.y+b.spacing)*h-b.spacing)||A((f.x+b.spacing)*b.footage-b.spacing)+E+A((f.y+b.spacing)*d(lb)*h*(b.directional?2:1)-b.spacing)});m.bind(bc,a)}else{l=b.cursor;f=l==Nb?cc:l||
dc;l=l==Nb?ec+E+"!important":s;F(U,{cursor:Ja(f)});F(w(rb),{cursor:"wait"});F(w(Xa)+ia+w(Xa)+" *",{cursor:Ja(l||f)},true);m.bind(b.wheelable?fc:null,c).bind(b.clickfree?gc:hc,a).bind(ic,function(){return false})}b.hint&&m.attr("title",b.hint);b.indicator&&p.append(Da("x"));h>1&&b.indicator&&p.append(Da("y"));b.monitor&&p.append(Ob=k(Y(xa),{"class":Pb}))&&F(E+w(Pb),{position:Ya,left:0,top:0});F(E+w(sb),{display:Ca})},preload:function(){function a(v,ga){setTimeout(function(){ga.parent().length&&ga.attr({src:db(v)})},
(C-x.length)*2)}var c=d(J),f=i.parent(),h=d(fa),l=!h.length,p=d(L),m=b.footage,n=q.preload[b.preload]||q.preload[q.def.preload],x=l?[d(kb)]:n(h.slice(0),b,d),C=x.length;g(O,l?0.5:0);h=[];f.addClass(rb).append(ja());g(ma,d(ma)||k("<"+ma+' type="text/css">'+F.rules.join("\n")+"</"+ma+">").prependTo(tb));for(i.trigger("stop");x.length;){n=b.path+x.shift();var u=c.x*(!l?1:m),H=c.y*(!l?1:p/m)*(!b.directional?1:2);u=k(Y(jb)).attr({"class":sb,width:u,height:H}).appendTo(f);u.bind("load error abort",function(v){v.type!=
"load"&&i.trigger(v.type);return!!k(this).parent().length&&i.trigger("preloaded")&&false});a(n,u);h.push(n)}g(Gb,h)},preloaded:function(){var a=d(fa).length||1,c=g(O,Ka(d(O)+1,a));if(c===a){i.parent().removeClass(rb).unbind(O,D.instance.preloaded);i.trigger("loaded")}c===1&&i.trigger("frameChange",[s,d(V)])},loaded:function(){d(fa).length>1||i.css({backgroundImage:ua(b.path+d(kb))}).attr({src:Ja(Qb)});b.stitched&&i.attr({src:Ja(Qb)});d(ob)||g(ha,b.velocity||0)},opening:function(){if(!b.opening)return i.trigger("openingDone");
g($,true);g(ub,!d(za));var a=b.entry||b.speed,c=d(z),f=b.opening;g(z,c-a*f);g(ra,na(f*X(aa)))},openingDone:function(){g(Ea,false);g($,false);var a=da+w($);P.unbind(a,D.pool[a]);if(b.delay>0)R=setTimeout(function(){i.trigger("play")},b.delay*1E3);else i.trigger("play")},play:function(a,c){c=c?g(za,c):d(za)*La(1,d(M));(a=b.duration)&&g(Ta,na(a*X(aa)));g(M,c<0);c=g(Ea,!!c);g(ub,!c);vb()},pause:function(){I()},stop:function(){var a=g(ub,true);g(Ea,!a)},down:function(a,c,f,h){function l(m){return i.trigger("pan",
[Ma(m).clientX,Ma(m).clientY,m])&&m.give}function p(m){return i.trigger("up",[m])&&m.give}if(!(h&&h.button!=jc&&!b.clickfree))if(b.draggable){g(Aa,d(V));a=b.clickfree;g(ha,0);Za=$a(d(Na),c,f);la||h&&h.preventDefault();I();Wa();S=0;k(Rb,ba).addClass(Xa);la?ba.bind(kc,l).bind(lc+E+mc,p):(a?d(Va):ba).bind(nc,l).bind(a?oc:pc,p)}},up:function(){g(Aa,false);g(Ba,false);var a=b.throwable,c=K(Fa[0]+Fa[1])/60;T=g(ha,!a?0:a===true?c:Ka(a,c))?1:0;I();Wa();k(Rb,ba).removeClass(Xa);(b.clickfree?d(Va):ba).unbind(ca)},
pan:function(a,c,f,h){if(b.draggable&&wb){wb=false;I();var l=b.rows,p=b.orbital;a=la&&!d(Ba)&&l<=1&&!p&&b.scrollable;var m={x:c-Za.x,y:f-Za.y};if(h&&a&&K(m.x)<K(m.y))return h.give=true;if(K(m.x)>0||K(m.y)>0){h&&(h.give=false);S=fb(m.x,m.y);Za={x:c,y:f};h=d(Na);a=d(Pa);var n=d(pa),x=g(z,Sb(n?f-a.y:c-a.x,d(Qa),h,d(Ra),d(Sa),d(qa),n?f-a.y:c-a.x));g(Ba,d(Ba)||d(V)!=d(Aa));(m=Tb(n?m.y:m.x||0))&&g(M,m<0);if(p&&d(pb)){g(pa,K(f-a.y)>K(c-a.x));a=$a(h,c,f)}if(l>1){d(J);l=d(Eb);p=d(nb);m=-p*l;g(oa,q.math.envelope(f-
a.y,p,l,m,m+l,-1))}!(x%1)&&!b.loops&&$a(h,c,f)}}},wheel:function(a,c,f){if(c){y=true;a=na(ka.sqrt(K(c))/2);a=La(a,c>0);c=0.0833*d(Na);$a(c);a&&g(M,a<0);g(ha,0);g(z,Sb(a,d(Qa),c,d(Ra),d(Sa),d(qa)));f&&f.preventDefault();f&&(f.give=false);I();i.trigger("up",[f])}},fractionChange:function(a,c,f){if(c!==s)return Cb(g(z,c));a=1+ab(f/d(Oa));c=b.rows>1;f=b.orbital;g(pb,!!f&&(a<=f||a>=b.footage-f+2));if(c)a+=(d(ya)-1)*d(L);g(V,a)},tierChange:function(a,c,f){if(c===s){a=g(ya,N(Ga(f,1,b.rows)));c=d(L);f=d(V)%
c||c;g(V,f+a*c-c)}},rowChange:function(a,c,f){if(c!==s)return g(ya,c);g(oa,1/(b.rows-1)*(f-1))},frameChange:function(a,c,f){if(c!==s)return Cb(g(V,c));this.className=this.className.replace(q.re.frame_klass,Fb+f);var h=d(L);c=b.rows;a=b.path;var l=f%h||h,p=!!d(O),m=((f-l)/h+1-1)/(c-1),n=N(Ga(m,1,c)),x=d(ya);p&&n===x?d(oa):g(oa,m);l=Ka((l-1)/(h-1),0.9999);m=x*h-h;h=N(Ga(l,m+1,m+h));m=K((d(z)||0)-l)<1/(d(L)-1);p&&h===f&&m?d(z):g(z,l);var C=b.footage;if(b.orbital&&d(pa)){f=b.inversed?C+1-f:f;f+=C}m=b.horizontal;
var u=b.stitched;h=d(fa);var H=!h.length||b.stitched;n=d(Hb);var v=d(J);if(H){if(u){f=g(mb,N(Ga(l,0,d(Ib)))%u);c=c<=1?0:(v.y+n)*(c-x);f=[A(-f),A(-c)];(c=h.length>1&&h[x-1])&&i.css("backgroundImage").search(a+c)<0&&i.css({backgroundImage:ua(a+c)})}else{a=f%C-1;a=a<0?C-1:a;f=ab((f-0.1)/C);f+=c>1?0:d(M)?0:!b.directional?0:d(lb);f=f*((m?v.y:v.x)+n);a=a*((m?v.x:v.y)+n);f=h.length?[0,0]:m?[A(-a),A(-f)]:[A(-f),A(-a)]}i.css({backgroundPosition:f.join(E)})}else{f=h[f-1];p&&i.attr({src:db(a+f)})}},"imageChange imagesChange":function(){ja.$.remove();
i.siblings(w(sb)).remove();i.parent().bind(O,D.instance.preloaded);P.bind(da+w(bb),D.pool[da+w(bb)]);i.trigger("preload")},"fractionChange.indicator":function(a,c,f){if(c===s&&b.indicator){c=d(J);a=b.indicator;var h=b.orbital;c=h&&d(pa)?c.y:c.x;h=h?b.footage:b.images.length||d(L);h=na(c/h);c-=h;f=N(Ga(f,0,c));f=!b.cw||b.stitched?f:c-f;Da.$x.css(d(pa)?{left:0,top:A(f),bottom:Ub,width:a,height:h}:{bottom:0,left:A(f),top:Ub,width:h,height:a})}},"tierChange.indicator":function(a,c,f){if(c===s&&b.rows>
1&&b.indicator){var h=d(J).y;a=b.indicator;c=na(h/b.rows);h-=c;f=N(f*h);Da.$y.css({left:0,top:f,width:a,height:c})}},"setup.annotations":function(){d(J);var a=i.parent();k.each(d(Ua),function(c,f){var h=typeof f.node==gb?k(f.node):f.node||{};h=h.jquery?h:k(Y(xa),h);h=h.attr({id:c}).addClass(Db);var l=f.image?k(Y(jb),f.image):k(),p=f.link?k(Y("a"),f.link).click(function(){return false}):k();F(Ia(c),{display:Ca,position:Ya},true);f.image||f.link&&h.append(p);f.link||f.image&&h.append(l);f.link&&f.image&&
h.append(p.append(l));h.appendTo(a)})},"frameChange.annotations":function(a,c,f){var h=d(J),l=b.stitched,p=d(mb);d(O)&&c===s&&k.each(d(Ua),function(m,n){m=k(Ia(m));var x=n.start||1,C=n.end,u=f-1,H=n.at?n.at[u]=="+":false;u=n.at?u:u-x+1;var v=typeof n.x!=eb?n.x:n.x[u],ga=typeof n.y!=eb?n.y:n.y[u];n=v!==s&&ga!==s&&(n.at?H:u>=0&&(!C||u<=C-x));if(l){x=v>l-h.x&&p>=0&&p<h.x;v=!(v<h.x&&p>l-h.x)?v:v+l;v=!x?v:v-l;v-=p}v={display:n?Mb:Ca,left:A(v),top:A(ga)};m.css(v)})},"up.annotations":function(a,c){if(!(S>
10||y)){a=k(c.target);c=a.is("a")?a:a.parents("a");a=c.attr("href");c=c.attr("target")||"self";if(a)S=c=="_blank"?!!zb.open(a):!!(zb[c].location.href=a)}},"up.steppable":function(){S||y||i.trigger(d(Pa).x-i.offset().left>0.5*d(J).x?"stepRight":"stepLeft")},"stepLeft stepRight":function(){I()},stepLeft:function(){g(M,false);g(z,d(z)-d(Oa)*d(qa))},stepRight:function(){g(M,true);g(z,d(z)+d(Oa)*d(qa))},"setup.fu":function(){g(V,b.frame+(b.row-1)*d(L));i.trigger("preload")},"wheel.fu":function(){y=false},
"clean.fu":function(){i.trigger("teardown")},"loaded.fu":function(){i.trigger("opening")}},pool:{"tick.reel.preload":function(){var a=d(J),c=qc(ja.$.css(rc)),f=d(fa).length||1,h=N(1/f*d(O)*a.x);ja.$.css({width:c+(h-c)/3+1});if(d(O)===f&&c>a.x-1){ja.$.fadeOut(300,function(){ja.$.remove()});P.unbind(da+w(bb),D.pool[da+w(bb)])}},"tick.reel":function(a){var c=d(ha),f=X(aa),h=b.monitor;if(T){c=c-d(Kb)/f*T;c=g(ha,c>0.1?c:(T=G=0))}h&&Ob.text(d(h));c&&T++;G&&G++;Tb(0);wb=true;if(G&&!c)return sa(a);if(d(Aa))return sa(a,
I());if(!(d(ra)>0)){if(!b.loops&&b.rebound){!G&&!(d(z)%1)?xb++:(xb=0);xb>=b.rebound*1E3/f&&g(M,!d(M))}a=d(qa)*La(1,d(M));f=d(Ta);c=(!d(Ea)||!f?c:K(d(za))+c)/X(aa);g(z,d(z)-c*a);f=!b.duration?f:f>0&&g(Ta,f-1);!f&&d(Ea)&&i.trigger("stop")}},"tick.reel.opening":function(){if(d($)){var a=(b.entry||b.speed)/X(aa)*(b.cw?-1:1),c=g(ra,d(ra)-1);g(z,d(z)+a);c||i.trigger("openingDone")}}}},sa=function(a,c){return a.stopImmediatePropagation()||c},G,T=0,vb=function(){return G=0},I=function(){clearTimeout(R);P.unbind(da+
w($),D.pool[da+w($)]);g(ra,0);g(ob,true);return G=-b.timeout*X(aa)},S=0,y=false,R,Ob=k(),ja=function(){var a=b.preloader;F(E+w(Vb),{position:Ya,left:0,top:d(J).y-a,height:a,overflow:qb,backgroundColor:"#000"});return ja.$=k(Y(xa),{"class":Vb})},Da=function(a){F(E+w(Wb)+w(a),{position:Ya,width:0,height:0,overflow:qb,backgroundColor:"#000"});return Da["$"+a]=k(Y(xa),{"class":Wb+E+a})},F=function(a,c,f){function h(l){var p=[];k.each(l,function(m,n){p.push(m.replace(/([A-Z])/g,"-$1").toLowerCase()+":"+
A(n)+";")});return"{"+p.join(U)+"}"}f=f?U:d(Jb);a=a.replace(/^/,f).replace(ia,ia+f);return F.rules.push(a+h(c))&&c},xb=0,Za={x:0,y:0},Tb=function(a){return Fa.push(a)&&Fa.shift()&&a},Wa=function(){return Fa=[0,0]},Fa=Wa(),Sb=b.graph||q.math[b.loops?"hatch":"envelope"],$a=function(a,c,f){var h=g(Qa,d(z));g(nb,d(oa));var l=b.loops;g(Ra,l?0:-h*a);g(Sa,l?a:a-h*a);return c&&g(Pa,{x:c,y:f})||s},wb=true,ba=P;try{if(P[0]!=top.document)ba=P.add(top.document)}catch(uc){}top===self?k():function(a){k("iframe",
ba.last()).each(function(){try{if(k(this).contents().find(tb).html()==k(tb).html())return(a=k(this))&&false}catch(c){}});return a}();F.rules=[];D.setup()});cb=cb||function i(){var g=+new Date,d=X(aa);if(!d)return cb=null;P.trigger(da);q.cost=(+new Date+q.cost-g)/2;return cb=setTimeout(i,fb(4,1E3/d-q.cost))}();return k(Z)}else if(typeof t=="string")if(e.length==1){r=o[t];j.trigger("recall",[t,r]);return r}else{if(r!==s){q.normal[t]&&(r=q.normal[t](r,o));if(o[t]===s)o[t]=r;else if(o[t]!==r)j.trigger(t+
"Change",[s,o[t]=r])}return j.trigger("store",[t,r])}},unreel:function(){return this.trigger("teardown")}},re:{image:/^(.*)\.(jpg|jpeg|png|gif)\??.*$/i,ua:[/(msie|opera|firefox|chrome|safari)[ \/:]([\d.]+)/i,/(webkit)\/([\d.]+)/i,/(mozilla)\/([\d.]+)/i],array:/ *, */,touchy_agent:/iphone|ipod|ipad|android|fennec|rim tablet/i,lazy_agent:/\(iphone|ipod|android|fennec|blackberry/i,frame_klass:/frame-\d+/,sequence:/(^[^#|]*([#]+)[^#|]*)($|[|]([0-9]+)\.\.([0-9]+))($|[|]([0-9]+)$)/},cdn:"http://code.vostrel.cz/",
math:{envelope:function(e,j,o,t,r,b){return j+va(t,r,-e*b)/o},hatch:function(e,j,o,t,r,b){e=(e<t?r:0)+e%r;e=j+-e*b/o;return e-ab(e)},interpolate:function(e,j,o){return j+e*(o-j)}},preload:{fidelity:function(e,j,o){function t(g,d,D){function sa(R){for(;!(R>=1&&R<=I);)R+=R<1?+I:-I;return i[D+R]||(i[D+R]=!!G.push(R))}if(!g.length)return[];var G=[],T=4*d,vb=j.frame,I=g.length;d=true;for(var S=I/T,y=0;y<T;y++)sa(vb+N(y*S));for(;S>1;){y=0;T=G.length;S/=2;for(d=!d;y<T;y++)sa(G[y]+(d?1:-1)*N(S))}for(y=0;y<=
I;y++)sa(y);for(y=0;y<G.length;y++)G[y]=g[G[y]-1];return G}var r=j.orbital,b=r?2:j.rows||1,Z=r?j.footage:o(L);o=(j.row-1)*Z;r=[].concat(e);var i=new Array(e.length+1);e=b<2?[]:r.slice(o,o+Z);return t(e,1,o).concat(t(r,b,0))},linear:function(e){return e}},normal:{fraction:function(e,j){if(e===null)return e;return j[wa].loops?e-ab(e):va(0,1,e)},tier:function(e){if(e===null)return e;return va(0,1,e)},row:function(e,j){if(e===null)return e;return N(va(1,j[wa].rows,e))},frame:function(e,j){if(e===null)return e;
var o=j[wa];j=j[L]*(o.orbital?2:o.rows||1);e=N(o.loops?e%j||j:va(1,j,e));return e<0?e+j:e},images:function(e,j){var o=q.re.sequence.exec(e);return!o?e:q.sequence(o,j[wa])}},sequence:function(e,j){if(e.length<=1)return j.images;var o=[],t=j.orbital,r=e[1],b=e[2],Z=+e[4]||1,i=t?2:j.rows||1;j=t?j.footage:j.stitched?1:j.frames;i=+(e[5]||i*j)-Z;e=+e[7]||1;for(j=0;j<=i;){o.push(r.replace(b,ac(Z+j+U,b.length,"0")));j+=e}return o},instances:k(),leader:X,cost:0},P=k(ea);ea=navigator.userAgent;var Ha=q.re.ua[0].exec(ea)||
q.re.ua[1].exec(ea)||q.re.ua[2].exec(ea),Xb=+Ha[2].split(".").slice(0,2).join(".");Ha=Ha[1]=="MSIE";var sc=!(Ha&&Xb<8),cb,B="reel",ib=B+"-overlay",Wb=B+"-indicator",Vb=B+"-preloader",sb=B+"-cached",Pb=B+"-monitor",Db=B+"-annotation",Xa=B+"-panning",rb=B+"-loading",Fb="frame-",ka=Math,N=ka.round,ab=ka.floor,na=ka.ceil,Ka=ka.min,fb=ka.max,K=ka.abs,qc=parseInt,Ga=q.math.interpolate,Ua="annotations",Va="area",Ub="auto",Lb="backup",M="backwards",Oa="bit",Kb="brake",Gb="cached",pb="center",Aa="clicked",
Pa="clicked_location",Qa="clicked_on",nb="clicked_tier",qa="cwish",J="dimensions",z="fraction",V="frame",L="frames",Sa="hi",qb="hidden",kb="image",fa="images",$="opening",ra=$+"_ticks",Ra="lo",wa="options",Ea="playing",O="preloaded",Ba="reeling",ob="reeled",Na="revolution",Eb="revolution_y",ya="row",lb="rows",Hb="spacing",za="speed",Jb="stage",mb="stitched_shift",Ib="stitched_travel",ub="stopped",ma="style",aa="tempo",Ta="ticks",oa="tier",ha="velocity",pa="vertical",Q=w(B),ca=w("pan")+Q,ic="dragstart"+
Q,hc="mousedown"+Q,gc="mouseenter"+Q,oc="mouseleave"+ca,nc="mousemove"+ca,pc="mouseup"+ca,fc="mousewheel"+Q,da="tick"+Q,mc="touchcancel"+ca,lc="touchend"+ca,bc="touchstart"+Q,kc="touchmove"+ca,U="",E=" ",ia=",",Ya="absolute",Mb="block",ta="@CDN@",xa="div",Nb="hand",tb="head",Rb="html",W="id",jb="img",yb="jquery."+B,Ca="none",eb="object",bb="preload",gb="string",rc="width",Qb=sc?$b("CAAIAIAAAAAAAAAAACH5BAEAAAAALAAAAAAIAAgAAAIHhI+py+1dAAA7"):ta+"blank.gif",dc=ua(ta+yb+".cur")+ia+"move",cc=ua(ta+yb+
"-drag.cur")+ia+"move",ec=ua(ta+yb+"-drag-down.cur")+ia+"move",la=q.touchy=q.re.touchy_agent.test(ea);q.lazy=q.re.lazy_agent.test(ea);var jc=la?s:Ha&&Xb<9?1:0,tc=k.cleanData;k.cleanData=function(e){tc(k(e).each(function(){k(this).triggerHandler("clean")}))};k.extend(k.fn,q.fn);k(q.scan)}}(jQuery,window,document);
