﻿window.scriptsLoaded = window.scriptsLoaded || {}; window.scriptProcessStart = window.scriptProcessStart || {}; window.scriptProcessStart['microsoft.owa.calendar.controls.core.js'] = (new Date()).getTime();
function CalendarControlsCoreComponent(){}CalendarControlsCoreComponent.$$cctor=function(){_a.t.a().a(CalendarControlsCoreComponent)};CalendarControlsCoreComponent.prototype={b:function(n,t,i){n.e(_ca.b).a();var r=this;n.b(_j.bF.$$(_ca.e),function(){return new(_j.bF.$$(_ca.e))(function(t){return new _ca.e(t,n.a(_ca.b),n.a(_y.a),n.a(_g.h),n.a(_j.j))},"div")})},a:function(){return null}};Type.registerNamespace("_ca");_ca.l=function(){};_ca.l.prototype={date:1,time:2,month:4};_ca.l.registerEnum("_ca.l",!1);_ca.b=function(){this.e=Function.createDelegate(this,this.j);this.c=_a.d.a();_ca.b.initializeBase(this)};_ca.b.prototype={a:null,b:0,i:function(n){this.eM("CalendarTimeChanged",n);++this.b==1&&this.g()},l:function(n){this.eO("CalendarTimeChanged",n);--this.b||this.f()},d:function(n){this.eM("CalendarDateChanged",n);++this.b==1&&this.g()},h:function(n){this.eO("CalendarDateChanged",n);--this.b||this.f()},g:function(){if(!this.a){this.c=_a.d.a();this.a=_j.m.a().e(_a.a.b,"CalendarDateTimeNotification",this.e,6e4)}},f:function(){this.a&&(this.a=_j.m.a().b(this.a))},j:function(){var n=_a.d.a();var t=!!this.c.k(n);this.c=n;this.eW("CalendarTimeChanged",this,n);t&&this.eW("CalendarDateChanged",this,n)}};_ca.c=function(n,t){_ca.c.initializeBase(this,[n,t]);this.y("DatePickerView")};_ca.c.prototype={c:null,k:null,e:function(n){if(!this.c||!this.c.B(n)){this.c=n;this.by("SelectedDate")}return n},g:function(n){if(this.k!==n){this.k=n;this.by("PickerAriaLabel")}return n}};_ca.g=function(n,t){_ca.g.initializeBase(this,[n]);this.bH=t;this.bc=22};_ca.g.prototype={m:null,bH:null,bf:null,bd:!0,j:!1,i:!1,t:null,bc:0,u:null,a:function(){return this.eK(_ca.g.b)},f:function(n){if(_a.d.c(this.a(),n)||!this.j&&!n)return n;this.eI(_ca.g.b,n);return n},d:function(){return this.bd},b:function(n){if(n!==this.bd){this.bd=n;this.by("IsEnabled")}return n},h:function(n){if(this.j!==n){this.j=n;this.by("CanSelectNone")}return n},bQ:function(n){if(n!==this.m){this.m=n;this.by("SuggestedDate")}return n},r:function(){return this.eK(_ca.g.a)},bN:function(n){this.eI(_ca.g.a,n);return n},bP:function(n){if(this.r()&&!_j.u.a(this.r()))return n;var t=n.toLowerCase();switch(t){case"date":this.bN(1);break;case"time":this.bN(2);break}this.bf=t;return n},s:function(){this.t||this.cm();return this.t},G:function(){_j.c.prototype.G.call(this);this.bf!=="date"&&this.bf!=="time"&&this.bP("date");if(this.u&&this.bc!==22){var n=this.u.z;_j.k.a(n,"height",this.bc+"px")}},H:function(){_j.c.prototype.H.call(this);var n=this.B;this.u=n?n.a("PickerCoreView"):null},cm:function(){this.t=_bc.w.isInstanceOfType(this.V())?this.V().bU():this.bH}};_ca.f=function(n,t){this.m=Function.createDelegate(this,this.u);this.n=Function.createDelegate(this,this.bt);this.j=Function.createDelegate(this,this.br);this.p=Function.createDelegate(this,this.bW);this.o=Function.createDelegate(this,this.bN);this.l=Function.createDelegate(this,this.t);this.q=Function.createDelegate(this,this.ca);this.k=Function.createDelegate(this,this.bY);this.a=-1;_ca.f.initializeBase(this,[n,t])};_ca.f.prototype={b:!1,c:!1,d:!1,f:null,iE:function(){var t=this.bS()===this.E();_fce.a.prototype.iE.call(this);if(this.d&&t){var n=this.bS();this.bg(null);this.cG(n)}},cc:function(n,t){var r=n.V()===this.E();n&&!n.bV&&_fce.a.prototype.cc.call(this,n,t);if(this.d&&r){var i=this.bS();this.bg(null);this.cG(i)}},eZ:function(n,t){_fce.a.prototype.eZ.call(this,n,t);n&&this.cG(n.V());n&&this.a<0&&(this.a=this.bS()?this.bP(this.bS()):-1);this.f&&this.f(n)},H:function(){_fce.a.prototype.H.call(this);this.apcl("SelectedItem",this.k);this.c&&this.s()},bI:function(){this.rpcl("SelectedItem",this.k);_fce.a.prototype.bI.call(this)},dV:function(n){var t=!!document.activeElement&&this.z.contains(document.activeElement);t||this.cG(this.E())},bY:function(n,t){if(this.x()&&!this.E()&&this.a>=0){if(!this.x().b()){this.a=-1;this.cG(null);return}var i=this.x().c(this.a);if(this.fE(i))this.cG(i);else{this.a===this.x().b()&&(this.a-=1);i=this.x().c(this.a);this.fE(i)&&this.cG(i)}}this.a=this.bS()?this.bP(this.bS()):-1},s:function(){for(var r=new Array(6),u=[this.q,this.l,this.o,this.p,this.j,this.j,this.n,this.m],t=0,f=u.length;t<f;t++){var n=new _fc.c;n.l=new _j.g(u[t],this.J());n.j(_ca.f.a[t]);n.n=!1;n.m=!1;r[t]=n}var i=new _fc.g;i.a(r);this.cP?this.C(this.cP.concat(i)):this.C([i])},g:function(n){this.a=this.bS()?this.bP(this.bS()):-1;if(!(this.a<0)){var i=Math.floor(this.a%this.bQ());var t=Math.floor(this.a/this.bQ());var r=Math.ceil(this.x().b()/this.bQ());switch(n){case 2:if(this.bQ()>1)if(i>0){i--;this.e(t,i)}else if(!i&&t>0){i=this.bQ()-1;t--;this.e(t,i)}break;case 3:if(this.bQ()>1)if(i<this.bQ()-1){i++;this.e(t,i)}else if(i===this.bQ()-1&&t<r){i=0;t++;this.e(t,i)}break;case 1:if(r>1&&t>0){t--;this.e(t,i)}break;case 0:if(r>1&&t<r-1){t++;this.e(t,i)}break}}},e:function(n,t){var r=n*this.bQ()+t;var i=this.x().c(r);this.fE(i)&&this.cG(i)},h:function(){if(this.cR>0){var n=Math.floor(this.iu()/this.cR);n!==this.bQ()&&this.gc(n)}},ca:function(){if(!(this.b&&this.E())){this.h();this.bQ()>0?this.g(1):this.dJ().a();this.a=this.bS()?this.bP(this.bS()):-1}},t:function(){if(!(this.b&&this.E())){this.h();this.bQ()>0?this.g(0):this.dI().a();this.a=this.bS()?this.bP(this.bS()):-1}},bN:function(){if(!(this.b&&this.E())){this.h();this.g(2);this.a=this.bS()?this.bP(this.bS()):-1}},bW:function(){if(!(this.b&&this.E())){this.h();this.g(3);this.a=this.bS()?this.bP(this.bS()):-1}},br:function(){this.b&&this.E()||!this.gZ().b||this.gZ().a()},bt:function(){this.b&&this.E()||!this.dH().b||this.dH().a();this.a=this.bS()?this.bP(this.bS()):-1},u:function(){this.b&&this.E()||!this.fy().b||this.fy().a();this.a=this.bS()?this.bP(this.bS()):-1}};_ca.e=function(n,t,i,r,u){this.cR=Function.createDelegate(this,this.ek);this.cN=Function.createDelegate(this,this.ea);this.cQ=Function.createDelegate(this,this.ei);this.cU=Function.createDelegate(this,this.eq);this.cV=Function.createDelegate(this,this.es);this.bS=Function.createDelegate(this,this.ep);this.dt=Function.createDelegate(this,this.eb);this.dy=Function.createDelegate(this,this.en);this.dx=Function.createDelegate(this,this.el);this.du=Function.createDelegate(this,this.ec);this.dE=Function.createDelegate(this,this.er);this.dD=Function.createDelegate(this,this.eo);this.dw=Function.createDelegate(this,this.ej);this.dv=Function.createDelegate(this,this.ed);this.cS=Function.createDelegate(this,this.em);this.ca=new _a.d(1900,0,1);this.bl=new _a.d(2099,11,31);_ca.e.initializeBase(this,[n]);this.y("MonthPickerView");this.cm=t;this.r=i;this.bi=i.u();this.cs=u;this.dP(new _j.l);if(this.r.a()==="TouchNarrow"){this.bW="";this.br="ms-bg-color-themeLight";this.w="ms-bg-color-themeLight";this.bQ="ms-bg-color-themeLight"}else{this.bW="ms-bg-color-neutralLight";this.br="ms-bg-color-themeLighter";this.w="ms-bg-color-themeLighter";this.bQ="ms-bg-color-themeLight"}this.cs.b(_a.bp,this.cS);this.u=r;this.a=_a.d.a();this.x=[this.a];this.E(this.a);this.dm(new _j.l);this.ch=!0;this.ci=!0;this.cj=!0;this.dl=new _j.g(this.dv,_a.a.b);this.cZ=new _j.g(this.dw,_a.a.b);this.da=new _j.g(this.dD,_a.a.b);this.db=new _j.g(this.dE,_a.a.b);this.cY=new _j.g(this.du,_a.a.b);this.cE=new _j.g(this.dx,_a.a.b);this.cF=new _j.g(this.dy,_a.a.b);var f=this;this.bH=new _j.w(this.dt,_a.a.b,this,"CanPickMonth",function(){return f.bc})};_ca.e.a=function(n,t){return n.f()===t.f()&&n.g()===t.g()};_ca.e.prototype={u:null,cs:null,r:null,dl:null,cZ:null,da:null,db:null,cY:null,cE:null,cF:null,cm:null,bW:null,bH:null,i:null,o:null,cM:null,e:null,l:null,bT:null,bR:null,g:null,d:null,v:null,dr:0,bi:!1,cb:0,p:0,h:0,cB:0,bP:0,a:null,c:null,cd:null,x:null,s:null,k:null,t:0,dk:0,bY:!1,bN:!1,cA:!1,bc:!1,b:!1,bg:!0,bd:"monthPickerCurrentDay ms-font-weight-semibold ms-font-color-white ms-bg-color-themePrimary",br:null,w:null,bQ:null,cr:"ms-font-s",f:0,ct:!1,de:!1,j:0,m:0,dd:!1,cf:!0,n:function(n){if(n&&!this.a.B(n)){this.a=n;this.dG()}return n},E:function(n){this.eD(n);return n},ev:function(n){n!==this.cd&&(this.cd=n);return n},cI:function(n){if(this.t!==n){this.t=n;this.x=_a.G.a(this.c,this.t,this.t===2,this.u.a().w().bH.WorkDays);this.q()}return n},cy:function(){return this.dk},dQ:function(n){this.dk=n;return n},dP:function(n){if(this.s!==n){this.s&&this.s.f(this.bS);this.s=n;this.s&&this.s.e(this.bS)}return n},dm:function(n){if(this.k!==n){this.k&&this.k.f(this.bS);this.k=n;this.k&&this.k.e(this.bS)}return n},ck:!1,cx:function(){return this.bN||!this.bZ(this.a.s(-1))},cw:function(){return this.cA||!this.bZ(this.a.s(1))},cH:function(n){if(n!==this.cA){this.cA=n;this.q()}return n},cj:!1,ch:!1,ci:!1,bD:!1,bs:function(n){if(this.bc!==n){this.bc=n;this.by("CanPickMonth")}return n},bt:function(n){if(this.b!==n)if(this.Z()){this.dF();this.f=-1;this.b=n;this.bX(_ca.e.b);this.q();this.dp(this.Z())}else{this.b=n;this.bX(_ca.e.b)}return n},eu:function(n){if(this.bg!==n){this.bg=n;this.z.style.cursor=this.bg?"pointer":"";this.by("IsEnabled")}return n},dI:function(){return this.b?String.format(_u.c.I,this.bf(),this.a.x(1).b(13)):String.format(_u.c.I,this.bf(),this.a.s(1).b(2))},dJ:function(){return this.b?String.format(_u.c.I,this.bf(),this.a.x(-1).b(13)):String.format(_u.c.I,this.bf(),this.a.s(-1).b(2))},bf:function(){if(this.b){var n=this.a?this.a.g().toString():"";return String.format(_u.c.D,n)}return this.e.bf},cW:!1,dO:function(n){if(n===this.dd)return n;this.dd=n;var t=this.u.a();if(n){t.apcl("WeekStartDay",this.cV);this.r.a()==="Mouse"&&t.apcl("ShowWeekNumbers",this.cU);t.apcl("FirstWeekOfYear",this.cQ)}else{t.rpcl("WeekStartDay",this.cV);this.r.a()==="Mouse"&&t.rpcl("ShowWeekNumbers",this.cU);t.rpcl("FirstWeekOfYear",this.cQ)}return n},dc:function(){return this.u.a().bH.ShowWeekNumbers&&this.r.a()==="Mouse"&&!this.cW},ew:function(n){var t=this.cz(n);this.bu(t,!0)},bz:function(){this.cs.c(_a.bp,this.cS);var n;_a.h.a(n={val:this.bH}),this.bH=n.val;this.dO(!1);_j.c.prototype.bz.call(this)},H:function(){_j.c.prototype.H.call(this);this.B?this.dY():this.et()},P:function(){var i=_j.n.b(_a.a.b,2,"MonthPickerView:OnFirstActivate");_j.c.prototype.P.call(this);if(this.bY)for(var n=0,t=this.l.length;n<t;n++)this.l[n].K(!0);if(this.ck){this.cM.K(!0);this.i.z.style.top="0"}this.i.bo(this.cr);!this.c&&this.cd&&this.n(this.cd);_j.n.a(i)},G:function(){var n=_j.n.b(_a.a.b,2,"MonthPickerView:OnActivate");_j.c.prototype.G.call(this);this.cm.d(this.cN);this.bi&&this.dp(this.ct);if(this.cf){this.b||this.dN();this.q();this.cf=!1}_j.n.a(n)},M:function(){_j.c.prototype.M.call(this);this.bt(!1);this.cm.h(this.cN)},bG:function(n){if(this.bg){var e=_j.k.j(this.z);var t=n.e()-e.b;var i=n.f()-e.a;if(this.b){var v=_a.b.b(this.J(),"MonthPickerView_SelectMonth",!1,null);i-=32;if(i>0){var a=Math.floor(i/this.cB);var u=0;u=this.u.c().bH.IsUserCultureRightToLeft?Math.floor((this.bP*4-t)/this.bP):Math.floor(t/this.bP);var c=a*4+u;if(c<12){var s=new _a.d(this.a.g(),c,this.a.j(),this.a.m(),this.a.q(),this.a.u(),this.a.y());if(this.bZ(s)){this.a=s;this.dG()}}}_a.b.a(v)}else if(this.bc&&i<=32&&t>this.cb&&t<this.dr-this.cb)this.bt(!0);else{i-=this.ck?this.p:32+this.p;if(this.g){this.u.c().bH.IsUserCultureRightToLeft||(t-=this.h);if(t<0||t>this.h*7)return}if(i>0){var h=Math.floor(i/this.p);var f=0;f=this.u.c().bH.IsUserCultureRightToLeft?Math.floor((this.h*7-t)/this.h):Math.floor(t/this.h);var o=_a.G.a(this.a,3);var r=o[0].c(h*7+f);if((_ca.e.a(r,this.a)||!this.cx()&&r.f()===this.a.s(-1).f()||!this.cw()&&r.f()===this.a.s(1).f()&&o[0].c(h*7).f()===this.a.f())&&!this.bD||this.bD&&this.cL(r)){var l=_a.b.b(this.J(),"MonthPickerView_SelectDate",!1,null);this.E(r);_a.b.a(l)}}}}},eD:function(n){if(this.cy()||n!==this.c&&(!this.c||!this.c.B(n))&&n){this.c=n;if(this.cy()===1&&this.cj)if(this.k.w(n)){this.k.p(n,!0);this.dn(n,null)}else{this.dn(null,n);this.k.a(n)}else if(n){this.dn(this.c,n);this.x=_a.G.a(n,this.t,this.t===2,this.u.a().w().bH.WorkDays)}this.q();this.by("SelectedDate");this.bi&&this.dp(!1)}},dK:function(n){if(this.b){this.a=this.a.x(n?1:-1);this.q()}else this.n(this.a.s(n?1:-1));this.bA("NextButtonAccessibleName","PreviousButtonAccessibleName");this.e.R();this.l[n?1:0].R()},es:function(n,t){this.dN();this.q()},ep:function(n,t){this.q()},dR:function(){this.g=this.B.a("weekNumbersContainer");this.g.K(!1);_b.w.a(this.i.z.style,this.h+"px")},eq:function(n,t){if(this.dc())this.dR();else{_b.w.a(this.i.z.style,"0");this.g.K(!0);this.g=null}this.dW();this.eB();this.ds()},ei:function(n,t){this.g&&!this.g.bp()&&this.ds()},dY:function(){_a.c.a(this.B,"TemplateInstance");this.e=this.B.a("DateButton");this.e.O(_j.D.a());this.cM=this.B.a("TopHeaderContainer");this.l=new Array(2);this.l[0]=this.B.a("PrevArrow");this.l[1]=this.B.a("NextArrow");this.i=this.B.a("dayGridContainer");this.o=this.B.a("monthGridContainer");this.o.fG(this.cR);this.cb=this.r.a()==="Mouse"?30:26;this.dr=this.j-2*this.cb;this.p=(this.m-32)/7;this.dW();this.cB=(this.m-32)/4;this.bP=Math.round(this.j/4);this.dL();this.bi&&this.dZ();if(this.r.a()==="Mouse"){this.i.D(27);this.o.D(27);this.i.bb(this.e.cl());this.o.bb(this.e.cl());this.i.S().s(!0);this.o.S().s(!0);this.dc()&&this.dR()}this.bm(1)},dW:function(){var n=this.dc()?8:7;this.h=Math.round(this.j/n)},ek:function(n){this.dL()},et:function(){this.e=null;this.bT=null;this.g=null;this.o.kQ(this.cR);this.o=null;this.cM=null;Array.clear(this.bR);Array.clear(this.d)},dN:function(){if(!this.Z()){this.cf=!0;return}for(var r=_a.G.a(this.a,3),u=r[0],f=this.bT.children,n,i,t=0;t<7;t++){i=u.c(t).r();n=f[t];n.innerText=_a.d.bZ(i);n.title=_a.d.o(i);n.setAttribute("aria-label",n.title)}},q:function(){if(!this.Z()){this.cf=!0;return}var i=_j.n.b(_a.a.b,2,"MonthPickerView:UpdateContent");var t,n;if(this.b){t=this.a.x(-1);n=this.a.x(1);this.e.D(41);this.eC()}else{t=this.a.s(-1);n=this.a.s(1);this.e.D(3);this.ey();this.ds()}this.e.bb(null);this.e.Q(this.bf());if(!this.bY){this.l[0].z.style.display=this.bZ(t)?"block":"none";this.l[1].z.style.display=this.bZ(n)?"block":"none"}_j.n.a(i)},eC:function(){this.g&&this.g.K(!0);this.e.j(this.a.b(13));for(var n,t=0;t<12;t++){n=this.v[t];if(this.c&&this.c.f()===t&&this.c.g()===this.a.g()){_j.k.f(n,this.bW);_j.k.d(n,this.bQ)}else if(this.a.g()<=this.ca.g()&&t<this.ca.f()||this.a.g()>=this.bl.g()&&t>this.bl.f())n.style.display="none";else{n.style.display="block";_j.k.f(n,this.bQ);_j.k.d(n,this.bW)}var i=new _a.d(this.a.g(),t,1);n.setAttribute("aria-label",i.b(2))}},ds:function(){if(this.g){this.g.K(!1);for(var f=this.g.z.children,e=_a.G.a(this.a,3),r=[e[0],e[0].c(6)],o=this.a.f(),n,u,i,t=0;t<6;t++){n=f[t];u=r[0];i=r[1];if(u.f()===o||i.f()===o){n.style.display="block";n.style.top=(t+1)*this.p+"px";this.cc(n,0,this.h-1,this.p,0);f[t].innerText=_a.d.bu(i).toString()}else n.style.display="none";r[0]=u.c(7);r[1]=i.c(7)}}},ey:function(){var n;var e;var i;var c=this.a.b(2,2);var v=_a.G.a(this.a,3);var l=_a.d.br();var h=_a.d.a().d();var a=v[0];var o=this.a.f();for(i=0;i<42;i++){n=a.c(i);e=n.a(this.a);if(n.r()===l&&n.f()!==o&&e>0)break;var t=this.d[i];if(i<7||i/7>4)if(n.f()!==o)if(this.cx()&&e<0||this.cw()&&e>0)t.style.display="none";else{t.style.display="block";_j.k.d(t,"ms-font-color-neutralTertiaryAlt")}else{t.style.display="block";_j.k.f(t,"ms-font-color-neutralTertiaryAlt")}t.innerText=n.b(19);t.setAttribute("aria-label",n.b(3));var f,r,s;s=this.s.w(n.d());_j.k.f(t,this.br);if(n.B(h)&&_ca.e.a(n,this.a))if(this.cL(n)&&this.cy()===1){f=!0;r=!0}else{f=!0;r=!1}else{f=!1;r=this.cL(n)&&(this.ci&&this.ch||n.f()===o)?!0:!1}this.ex(t,f,r,s)}this.e.j(c);for(var u=4;u<6;u++)this.bR[u].style.display=u>=i/7?"none":"block"},ex:function(n,t,i,r){_j.k.f(n,this.bd);_j.k.f(n,this.w);_j.k.f(n,this.br);t&&_j.k.d(n,this.bd);i?_j.k.d(n,this.w):r&&_j.k.d(n,this.br)},cL:function(n){if(!(_ca.e.a(n,this.a)||!this.cx()&&n.f()===this.a.s(-1).f()||!this.cw()&&n.f()===this.a.s(1).f()))return!1;switch(this.t){case 0:if(this.cy()){if(this.k.w(n))return!0}else return _a.d.h(n,this.c);return!1;case 3:case 6:return _ca.e.a(this.a,this.c)&&_ca.e.a(n,this.a);case 1:case 5:return this.x[0].a(n)<=0&&this.x[1].a(n)>0;case 2:for(var t=0,i=this.x.length-1;t<i;t++)if(this.x[t].B(n))return!0;return!1;default:throw Error.notImplemented("Unexpected SelectionType"+this.t);}},dG:function(){this.bc&&this.bt(!1);this.q();this.by("DisplayedDate")},bZ:function(n){return this.b?n.g()>=this.ca.g()&&n.g()<=this.bl.g():n.a(this.ca)>=0&&n.a(this.bl)<=0},dZ:function(){var u=new _fc.c;u.l=this.dl;u.j("ENTER");var r=new _fc.c;r.l=this.cZ;r.j("LEFTARROW");r.m=!1;var n=new _fc.c;n.l=this.da;n.j("RIGHTARROW");n.m=!1;var i=new _fc.c;i.l=this.db;i.j("UPARROW");i.m=!1;var t=new _fc.c;t.l=this.cY;t.j("DOWNARROW");t.m=!1;var e=new _fc.g;var f=new _fc.g;e.a([u,r,n,i,t]);f.a([u,r,n,i,t]);this.i.C([e]);this.o.C([f])},ed:function(){if(this.bD){var t=_a.G.a(this.a,3);var n=t[0].c(this.f);this.cL(n)&&this.df()}else this.df()},df:function(){if(this.b)this.n(new _a.d(this.a.g(),this.f,this.a.j(),this.a.m(),this.a.q(),this.a.u()));else{var i=_a.G.a(this.a,3);var n=i[0].c(this.f);var t=!this.c||n.f()!==this.c.f();this.E(n);t&&this.bu(this.f,!0)}},dH:function(n){var t=this.f;t+=n?-1:1;t=Math.max(t,0);t=Math.min(this.b?this.v.length-1:this.d.length-1,t);var i=_a.G.a(this.a,3);(this.b||this.co(i[0].c(t)))&&this.bu(t,!0)},ej:function(){this.dH(!0);this.cG()},eo:function(){this.dH(!1);this.cG()},er:function(){var t=_a.G.a(this.a,3);if(this.b||this.co(t[0].c(this.f-7))){var n=this.b?4:7;this.bu(this.f-n,!0)}this.cG()},ec:function(){var t=_a.G.a(this.a,3);if(this.b||this.co(t[0].c(this.f+7))){var n=this.b?4:7;this.bu(this.f+n,!0)}this.cG()},cG:function(){this.de&&!this.b&&this.df()},el:function(){this.dK(!_a.v.d())},en:function(){this.dK(_a.v.d())},eb:function(){this.bc&&this.bt(!this.b)},co:function(n){if(n.f()===this.a.f())return!0;var t=_a.G.a(n,1);return!this.cx()&&t[1].f()===this.a.f()||!this.cw()&&t[0].f()===this.a.f()},bu:function(n,t){this.dF();var i=this.b?this.v[n]:this.d[n];if(i){this.f=n;var r=this.bi?0:-1;i.setAttribute("tabindex",r.toString());t&&i.focus()}},dF:function(){var n=this.b?this.v[this.f]:this.d[this.f];n&&n.setAttribute("tabindex","-1")},dp:function(n){if(this.Z()){if(!this.c){n&&this.i.R();return}!this.b&&_ca.e.a(this.c,this.a)?this.bu(this.cz(this.c.d()),n):this.bu(this.dX(),n)}},dn:function(n,t){if(this.r.a()==="Mouse"&&!this.b&&this.d){if(n){var r=this.cz(n.d());r>=0&&r<this.d.length&&this.d[r].setAttribute("aria-selected",_j.br.toString(0))}if(t){var i=this.cz(t.d());i>=0&&i<this.d.length&&this.d[i].setAttribute("aria-selected",_j.br.toString(1))}}},cz:function(n){var t=_a.G.a(this.a,3);return n.k(t[0])>=0&&n.k(t[1])<=0?n.e(t[0])/864e5:-1},dX:function(){if(this.b)return 0;for(var t=_a.G.a(this.a,3)[0],n=0;n<42;n++)if(this.co(t.c(n)))return n;return-1},ea:function(n,t){this.q()},dL:function(){var n;var i;var h;var o;var r;var s;if(this.b&&!this.v){r=this.cB;s=this.bP;h=this.o.z.children;this.v=new Array(12);for(var e=0,c=0;e<3;e++){n=h[e];o=n.children;this.dS(n,e,r,10);for(var u=0;u<4;u++,c++){i=o[u];i.innerText=_a.d.P(c);this.cc(i,u,s,r,10);this.v[c]=i}}}else if(!this.b&&!this.bR){r=this.p;s=this.h;h=this.i.z.children;this.bR=new Array(6);this.d=new Array(42);for(var l=0,t=0,a=7;t<a;t++){n=h[t];o=n.children;this.dS(n,t,r,0);t?this.bR[t-1]=n:this.bT=n;for(var f=0;f<7;f++){i=o[f];this.cc(i,f,s,r,0);if(t>0){this.d[l]=i;l++}}}}},eB:function(){for(var i=this.bT.children,n=0,f=i.length;n<f;n++){var e=n%7;this.cc(i[n],e,this.h,this.p,0)}for(var t=0,u=this.d.length;t<u;t++){var r=t%7;this.cc(this.d[t],r,this.h,this.p,0)}},dS:function(n,t,i,r){n.style.position="absolute";n.style.top=t*i+"px";n.style.height=i-r+"px";n.style.width="100%"},cc:function(n,t,i,r,u){var f=u/2;_j.k.a(n,"width",i-u+"px");_j.k.a(n,"height",r-u+"px");_j.k.a(n,"line-height",r-u+"px");_b.w.a(n.style,t*i+f+"px")},em:function(n){this.dO(n.a)}};_ca.m=function(){};_ca.m.prototype={a:function(n,t){var i=n;return i===1604?_u.c.Da:i},b:function(n,t){throw Error.notImplemented();}};_ca.k=function(){};_ca.k.prototype={a:function(n,t){t===null&&(t=!0);var i=n;return i>=0&&i<=11?t?_a.d.bc(i):_a.ej.toString(i):""},b:function(n,t){throw Error.notImplemented();}};_ca.j=function(n){_ca.j.initializeBase(this,[n]);this.f=new _j.l;this.e=new _j.l;this.d=new _j.l;var t=_a.d.a();this.i=1900;this.h=t.g();this.c=1604;this.b=t.f();this.a=t.j()};_ca.j.prototype={c:0,b:0,a:0,l:null,f:null,p:function(n){if(this.c!==n){this.c=n;this.g();this.by("SelectedYear")}return n},i:0,h:0,e:null,o:function(n){if(this.b!==n){this.b=n;this.g();this.by("SelectedMonth")}return n},d:null,m:function(n){if(this.a!==n){this.a=n;this.k();this.by("SelectedDay")}return n},P:function(){_j.c.prototype.P.call(this);if(this.B){for(var e=50,f=129,s=60,n=0,o=_a.d.cl(),i=o,u=i.length,t=0;t<u;++t){var r=i[t];switch(r){case 7:n=this.j("DayPicker",e,n);break;case 6:n=this.j("MonthPicker",f,n);break;case 5:n=this.j("YearPicker",s,n);break}}this.n()}},Y:function(){_j.i.prototype.Y.call(this);if(this.V()){var n=this.V();var t=new _a.d(this.c,this.b,this.a);if(n.k(t)){this.c=n.g();this.b=n.f();this.a=n.j()}this.g();this.bA("SelectedYear","SelectedMonth")}else this.k()},j:function(n,t,i){var u=10;var r=this.B.a(n);_j.k.a(r.z,_fc.n.a(),i+"px");_j.k.a(r.z,"position","absolute");r.z.style.width=t.toString()+"px";return i+t+u},n:function(){var i=new _j.q;i.c(1604);for(var t=this.h;t>=this.i;t--)i.c(t);this.f.j(i.i());for(var r=new _j.q,n=0;n<12;n++)r.c(n);this.e.j(r.i());this.g()},k:function(){var t=this.V();var n=new _a.d(this.c,this.b,this.a);(!t||n.k(t))&&this.ba(n)},g:function(){for(var t=_a.d.s(this.b,this.c),i=this.a,r=new _j.q,n=1;n<=t;n++)r.c(n);this.d.g();this.d.j(r.i());this.m(i>t?t:i);this.k()}};_ca.d=function(n,t){_ca.d.initializeBase(this,[n,t]);this.y("TimePickerView")};_ca.d.prototype={c:null,p:null,n:null,l:0,q:!1,e:function(n){this.c=n;this.by("SelectedTime");return n},k:function(n){if(this.p!==n){this.p=n;this.by("TextBoxAriaLabel")}return n},g:function(n){if(this.n!==n){this.n=n;this.by("DropDownButtonTitle")}return n},o:function(n){if(this.l!==n){this.l=n;this.by("CustomTimeIntervalMinutes")}return n},v:function(n){if(this.q!==n){this.q=n;this.by("UseEndOfDayTimeOption")}return n}};_ca.h=function(n,t,i){this.r=Function.createDelegate(this,this.u);this.e=new _j.l;_ca.h.initializeBase(this,[n]);this.y("Pivot");this.o=t.i()&&i.a()!=="Mouse"};_ca.h.prototype={o:!1,c:null,b:0,d:null,a:null,f:null,g:!1,m:null,h:!1,l:!1,k:null,q:function(n){if(this.c!==n){if(n)for(var r=n,u=r.length,t=0;t<u;++t){var i=r[t];if(!i.a)throw Error.argumentNull("Data field in the pivot option cannot be empty.");if(!Object.getType(i.a).inheritsFrom(_a.bv))throw Error.argument("Data field in the pivot option must inherit from the view model base class.");}this.c=n;this.j();this.by("Options")}return n},cp:function(){return this.k},Q:function(n){if(this.k!==n){this.k=n;this.by("AriaLabel")}return n},n:function(n){if(this.b!==n){this.b=n;if(this.Z()){this.t();this.j()}this.by("SelectedOptionIndex")}return n},i:function(n){this.m!==n&&(this.m=n);return n},p:function(n){this.h!==n&&(this.h=n);return n},s:function(n){this.l!==n&&(this.l=n);return n},w:function(n){this.f!==n&&(this.f=n);return n},P:function(){_j.c.prototype.P.call(this);this.d=this.B.a("PivotMenu");this.a=this.B.a("ContentConductor");this.a.bw(this.r);this.f&&(this.a.B=this.f);if(!this.h&&this.d.bg()&&this.o){var n=this;_b.g.a(this.z,function(t){n.v(t)},null,!1,!1)}},G:function(){_j.c.prototype.G.call(this);this.t();this.j()},Y:function(){_j.i.prototype.Y.call(this);this.j()},t:function(){if(this.c&&this.b>this.c.length-1)throw Error.argumentOutOfRange("Cannot assign a selected option for the pivot that is outside the range of total options.");},j:function(){this.c&&this.c.length>0&&this.b>=0&&!this.g&&(this.e.x.length?this.e.q(0,this.c[this.b].a):this.e.a(this.c[this.b].a))},v:function(n){var u=this.b;var i=n.e();if(this.d.E(n)){var r=this;_b.g.e(this.z,function(n){r.d.df(n);var t=n.e()-i;_j.k.a(r.a.z,_b.n.a(),_b.n.c(t,0));_j.k.a(r.a.z,_b.n.d(),_b.n.a()+" 0s")},null);var t=this;_b.g.b(this.z,function(n){_b.g.c(t.z,null);t.g=!0;t.d.de(n);if(u===t.b){_j.k.a(t.a.z,_b.n.a(),_b.n.c(0,0));_j.k.a(t.a.z,_b.n.d(),_b.n.a()+" 250ms");t.g=!1}else{var e=n.e()-i;_j.k.a(t.a.z,_fc.n.a(),e.toString()+"px");_j.k.a(t.a.z,_b.n.a(),"");_j.k.a(t.a.z,_b.n.d(),"");var r=31;var f=28;if(n.e()>i){r=32;f=27}t.a.g=function(){return new _ff.h(f,r)};t.g=!1;t.j();t.a.g=null}},null)}},u:function(){_j.k.a(this.a.z,_fc.n.a(),"")}};_ca.i=function(){this.c=Function.createDelegate(this,this.d);_ca.i.initializeBase(this)};_ca.i.prototype={b:!1,a:null,bb:function(){_j.bV.prototype.bb.call(this);this.X.d(this.c)},bc:function(){this.X.e(this.c);_j.bV.prototype.bc.call(this)},be:function(n){_j.bV.prototype.be.call(this,n);if(!_fce.g.isInstanceOfType(n))throw Error.argumentType("AttachedControl");},d:function(){if(this.X.c()>0){if(!this.b){this.X.bo(this.a);this.b=!0}}else if(this.b){this.X.bv(this.a);this.b=!1}}};_ca.a=function(){};_ca.a.$$cctor=function(){_ca.a._I()};_ca.a.q=function(){var n=window.document.createElement("DIV");n.innerHTML="<div> <span></span> </div><div> <span class='_ca_2'></span> </div><div> <label> <span class='reminder-label label ms-font-s ms-font-weight-semilight'></span> <div></div> <div></div> <div></div> </label> </div><div> <div></div> <div class='_ca_3'></div> </div>";_j.i.a().appendChild(n);return n};_ca.a.k=function(n){return n.V()};_ca.a.G=function(n){return n.l};_ca.a.L=function(n){return n.f};_ca.a.K=function(n){return n.c};_ca.a.h=function(n){return n.b()};_ca.a.H=function(n){return n.e};_ca.a.J=function(n){return n.b};_ca.a.F=function(n){return n.d};_ca.a.I=function(n){return n.a};_ca.a.m=function(n){return n.l};_ca.a.B=function(n){return n.c};_ca.a.D=function(n){return n.b};_ca.a.r=function(n){return n.c};_ca.a.A=function(n){return n.h};_ca.a.C=function(n){return n.m};_ca.a.y=function(n){return n.cp()};_ca.a.z=function(n){return n.e};_ca.a.g=function(n,t){n.a(t)};_ca.a.i=function(n,t){n.c(t)};_ca.a.O=function(n,t){n.p(t)};_ca.a.j=function(n,t){n.d(t)};_ca.a.N=function(n,t){n.o(t)};_ca.a.M=function(n,t){n.m(t)};_ca.a.x=function(n,t){n.K(t)};_ca.a.s=function(n,t){n.j(t)};_ca.a.E=function(n,t){n.n(t)};_ca.a.t=function(n,t){n.f(t)};_ca.a.u=function(n,t){n.bZ=t};_ca.a.w=function(n,t){n.bE(t)};_ca.a.v=function(n,t){n.Q(t)};_ca.a.P=function(n,t){n.b(t)};_ca.a.o=function(){_ca.a.e||(_ca.a.e=new _ca.m);return _ca.a.e};_ca.a.n=function(){_ca.a.d||(_ca.a.d=new _ca.k);return _ca.a.d};_ca.a.p=function(){_ca.a.f||(_ca.a.f=new _b.ba);return _ca.a.f};_ca.a.l=function(){_ca.a.c||(_ca.a.c=new _fc.k);return _ca.a.c};_ca.a._I=function(){var r="SplitDatePicker.YearTemplate";new _j.d(r,function(){_ca.a.a[r]===undefined&&(_ca.a.a[r]=[[[-1,1,["DataContext"],[_ca.a.k],null,"Text",null,_ca.a.g,1,_ca.a.o(),null,null]]]);var n=_ca.a.b.childNodes[0].cloneNode(!0);var t=new _fc.a(n.children[0]);return new _j.a(n,[t])},"",Object,_j.i,null,!1,!1,!1,0,_ca.a.a);var u="SplitDatePicker.MonthTemplate";new _j.d(u,function(){_ca.a.a[u]===undefined&&(_ca.a.a[u]=[[[-1,1,["DataContext"],[_ca.a.k],null,"Text",null,_ca.a.g,1,_ca.a.n(),null,null]]]);var n=_ca.a.b.childNodes[0].cloneNode(!0);var t=new _fc.a(n.children[0]);return new _j.a(n,[t])},"",Object,_j.i,null,!1,!1,!1,0,_ca.a.a);var f="SplitDatePicker.DayTemplate";new _j.d(f,function(){_ca.a.a[f]===undefined&&(_ca.a.a[f]=[[[-1,1,["DataContext"],[_ca.a.k],null,"Text",null,_ca.a.g,1,_ca.a.p(),null,null]]]);var n=_ca.a.b.childNodes[1].cloneNode(!0);var t=new _fc.a(n.children[0]);return new _j.a(n,[t])},"",Object,_j.i,null,!1,!1,!1,0,_ca.a.a);var n="SplitDatePicker";new _j.d(n,function(){_ca.a.a[n]===undefined&&(_ca.a.a[n]=[[[-1,1,["Label"],[_ca.a.G],null,"Text",null,_ca.a.g,1,null,null,null]],[[-1,1,["YearOptions"],[_ca.a.L],null,"Options",null,_ca.a.i,1,null,null,null],[-1,1,["SelectedYear"],[_ca.a.K],_ca.a.O,"SelectedValue",_ca.a.h,_ca.a.j,2,null,null,null]],[[-1,1,["MonthOptions"],[_ca.a.H],null,"Options",null,_ca.a.i,1,null,null,null],[-1,1,["SelectedMonth"],[_ca.a.J],_ca.a.N,"SelectedValue",_ca.a.h,_ca.a.j,2,null,null,null]],[[-1,1,["DayOptions"],[_ca.a.F],null,"Options",null,_ca.a.i,1,null,null,null],[-1,1,["SelectedDay"],[_ca.a.I],_ca.a.M,"SelectedValue",_ca.a.h,_ca.a.j,2,null,null,null]]]);var r=_ca.a.b.childNodes[2].cloneNode(!0);var u=new _fce.k(_j.a.a(r,[0,3]));u.a("SplitDatePicker.DayTemplate");u.m=!0;u.bb("SplitDatePicker.Label");var t=new _fce.k(_j.a.a(r,[0,2]));t.a("SplitDatePicker.MonthTemplate");t.m=!0;t.bb("SplitDatePicker.Label");var i=new _fce.k(_j.a.a(r,[0,1]));i.a("SplitDatePicker.YearTemplate");i.m=!0;i.bb("SplitDatePicker.Label");var f=new _fc.a(_j.a.a(r,[0,0]));f.O("SplitDatePicker.Label");f.N(!0);return new _j.a(r,[f,i,t,u]).l({YearPicker:i,MonthPicker:t,DayPicker:u})},"",_a.d,_ca.j,function(n){return new _ca.j(n)},!0,!1,!1,0,_ca.a.a);var t="Pivot";new _j.d(t,function(){_ca.a.a[t]===undefined&&(_ca.a.a[t]=[[[-1,1,["HidePivotMenu"],[_ca.a.m],null,"IsHidden",null,_ca.a.x,1,null,null,!0],[-1,1,["Options"],[_ca.a.B],null,"Options",null,_ca.a.s,1,null,null,null],[-1,1,["SelectedOptionIndex"],[_ca.a.D],_ca.a.E,"SelectedOptionIndex",_ca.a.r,_ca.a.t,2,null,null,0],[-1,1,["DisableSurfaceSwipe"],[_ca.a.A],null,"TouchDisabled",null,_ca.a.u,1,_ca.a.l(),null,!1],[-1,1,["PivotMenuCss"],[_ca.a.C],null,"CssClass",null,_ca.a.w,1,null,null,null],[-1,1,["AriaLabel"],[_ca.a.y],null,"AriaLabel",null,_ca.a.v,1,null,null,null]],[[-1,1,["ConductorStack"],[_ca.a.z],null,"ActiveNavigationStack",null,_ca.a.P,1,null,null,null],[-1,5,["HidePivotMenu"],[_ca.a.m],null,"_ca_4",null,null,1,_ca.a.l(),null,null]]]);var i=_ca.a.b.childNodes[3].cloneNode(!0);var r=new _n.g(i.children[1],_j.b.Instance.a(_n.f),_j.b.Instance.a(_b.a));var n=new _fce.z(i.children[0],_j.b.Instance.a(_ff.a),_j.b.Instance.a(_j.p),_j.b.Instance.a(_ff.o),_j.b.Instance.a(_ff.b));n.D(30);return new _j.a(i,[n,r]).l({PivotMenu:n,ContentConductor:r})},"",Object,_ca.h,function(n){return new _ca.h(n,_j.b.Instance.a(_j.o),_j.b.Instance.a(_y.a))},!1,!1,!1,0,_ca.a.a);var i="TimezonePicker";new _j.d(i,function(){_ca.a.a[i]===undefined&&(_ca.a.a[i]=[null]);var t=_ca.a.b.childNodes[0].cloneNode(!0);var n=new _j.bc(t.children[0],"application.TimezonePicker",_j.b.Instance.a(_j.I));n.i(!0);return new _j.a(t,[n])},"",Object,_j.c,function(n){return new _j.c(n)},!0,!1,!1,0,_ca.a.a)};CalendarControlsCoreComponent.registerClass("CalendarControlsCoreComponent",null,_a.jY,_j.ce);_ca.b.registerClass("_ca.b",_a.bv);_ca.g.registerClass("_ca.g",_j.c);_ca.c.registerClass("_ca.c",_ca.g);_ca.f.registerClass("_ca.f",_fce.a);_ca.e.registerClass("_ca.e",_j.c);_ca.m.registerClass("_ca.m",null,_j.bP);_ca.k.registerClass("_ca.k",null,_j.bP);_ca.j.registerClass("_ca.j",_j.c);_ca.d.registerClass("_ca.d",_ca.g);_ca.h.registerClass("_ca.h",_j.c);_ca.i.registerClass("_ca.i",_j.bV);CalendarControlsCoreComponent.$$cctor();_ca.g.b=new _a.e("SelectedValue",_a.d,_ca.g);_ca.g.a=new _a.e("DateTimeType",_ca.l,_ca.g);_ca.f.a=["UPARROW","DOWNARROW","LEFTARROW","RIGHTARROW","ENTER","SPACE","HOME","END"];_ca.e.b=["IsPickingMonth","NextButtonAccessibleName","PreviousButtonAccessibleName","DateButtonAccessibleName"];_ca.a.b=_ca.a.q();_ca.a.e=null;_ca.a.d=null;_ca.a.f=null;_ca.a.c=null;_ca.a.a={};_ca.a.$$cctor();
window.scriptsLoaded['microsoft.owa.calendar.controls.core.js'] = 1; window.scriptProcessEnd = window.scriptProcessEnd || {}; window.scriptProcessEnd['microsoft.owa.calendar.controls.core.js'] = (new Date()).getTime();
