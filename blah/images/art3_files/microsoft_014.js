﻿window.scriptsLoaded = window.scriptsLoaded || {}; window.scriptProcessStart = window.scriptProcessStart || {}; window.scriptProcessStart['microsoft.owa.focusedinboxrollup.js'] = (new Date()).getTime();
Type.registerNamespace("_fi");_fi.r=function(){};_fi.r.registerInterface("_fi.r");_fi.s=function(){};_fi.s.registerInterface("_fi.s");_fi.h=function(n,t){_fi.h.initializeBase(this);this.g=n;this.f=t.c};_fi.h.prototype={g:null,f:null,c:function(n){this.g.b||this.f&&this.f.bg||this.d(null)}};function FocusedInboxRollupComponent(){}FocusedInboxRollupComponent.$$cctor=function(){_a.t.a().a(FocusedInboxRollupComponent)};FocusedInboxRollupComponent.prototype={b:function(n,t,i){var r=this;n.b(_y.hQ,function(){return new _fi.i(n.a(_j.j),n.a(_g.a),n.a(_a.x),n.a(_a.q),n.a(IConversationItemPartsFactory),n.a(ILightningManager),i.b(),n.a(_h.m),n.a(_y.a),n.a(_a.y),n.c(_db.M))}).a()},a:function(){return null}};_fi.l=function(){_fi.l.initializeBase(this)};_fi.l.prototype={k:null,f:0,h:!1,e:null,l:null,j:0,K:function(n){var t=new _dg.cu;t.FolderId=this.k;t.IsConversationView=this.h;t.ViewType=this.f;t.Watermark=this.e;var i=new _dg.cw;i.Folders=[t];i.MaxSendersCount=10;var r=new _dg.di(this.L);n.fw(i,r,this.J,this.H)},bm:function(){if(!PageDataPayload.getFolderChangeDigest)return!1;this.n(PageDataPayload.getFolderChangeDigest);PageDataPayload.getFolderChangeDigest=null;return!0},cR:function(n,t,i){this.n(n);t()},n:function(n){if(n.Folders&&n.Folders.length){var t=n.Folders[0];this.l=t.RecentUniqueSenders;this.j=t.UnseenCount;this.e=t.Watermark}}};_fi.g=function(){_fi.g.initializeBase(this)};_fi.g.prototype={e:!1,f:!1,K:function(n){var t=new _gg.sp(this.L);n.fv(t,this.J,this.H)},cR:function(n,t,i){this.e=n.IsFocusedInboxCapable;this.f=n.IsFocusedInboxDefaultOn;t()}};_fi.o=function(){_fi.o.initializeBase(this)};_fi.o.prototype={e:!1,K:function(n){var t=new _gg.jR(this.M());t.IsFocusedInboxCapable=this.e;var i=new _gg.AC(this.L);n.id(t,i,this.J,this.H)},cR:function(n,t,i){t()}};_fi.m=function(){_fi.m.initializeBase(this)};_fi.m.prototype={a:function(n){},b:function(){return!0}};_fi.c=function(n,t,i,r,u,f,e,o,s){this.w=Function.createDelegate(this,this.G);this.v=Function.createDelegate(this,this.C);this.x=Function.createDelegate(this,this.H);this.n=Function.createDelegate(this,this.E);_fi.c.initializeBase(this);this.c=n;this.h=t;this.u=r;this.d=i;this.q=u;this.y=f;this.j=e;this.m=o;this.z=s;this.f=!0;this.r=e.a()==="Mouse"&&_y.d.b(s,n,f,e)&&n.a().bH.IsFocusedInboxEnabled;this.d.d(39,this.n,!0);this.p=new _j.g(this.x,_a.a.T);this.o=new _j.g(this.v,_a.a.T)};_fi.c.b=function(n,t,i,r,u,f,e,o,s){return _fi.c.a(n,r)?new _fi.m:new _fi.c(n,t,i,r,u,f,e,o,s)};_fi.c.a=function(n,t){return t&&t.c("focusedFeedback",!0)?!1:(524288&n.a().v())!=524288};_fi.c.prototype={c:null,h:null,q:null,y:null,z:null,r:!1,d:null,j:null,m:null,u:null,g:null,e:null,l:!1,i:!1,f:!1,t:!1,s:!1,p:null,o:null,b:function(){return this.f},B:function(n){if(this.f!==n){this.f=n;this.eH("IsHidden")}return n},K:function(n){if(this.l!==n){this.l=n;this.eH("ReadingPaneOff")}return n},J:function(n){if(this.i!==n){this.i=n;this.eH("IsInConversationView")}return n},a:function(n){this.K(n.bI());this.J(n.Q()===1);this.t=!!n.c();this.s=n.b()===1;this.L()},H:function(){this.D();_a.b.c(_a.a.T,"FO_ClickSurvey");this.A()},D:function(){if(this.e){this.j.d(this.e);this.e.a(!0)}else if(this.m){var n=this;this.m.b(function(t){n.e=t.a(n.w);n.j.d(n.e);n.e.a(!0)})}},G:function(n,t,i){this.q.e(2,n,t,i,!0,!!this.c.a().bH.ActiveSurvey,!1,!0,null);this.c.a().bc(!0);this.c.a().bb(_a.d.get_utcNow());_h.f.a(this.c.a().u,_a.g.a)},C:function(){_a.b.c(_a.a.T,"FO_DismissSurveyBar");this.A()},A:function(){this.B(!0);var n;(n=this.c.a()).x(n.v()&-524289);_h.f.a(this.c.a().u,this.h)},L:function(){var n;this.g=(n=new _lt.e,n.a=39,n.b=1,n);this.r&&!_fi.c.a(this.c,this.u)&&!this.t&&this.s&&this.d.c(this.g)},E:function(n){if((65536&this.c.a().v())==65536){var t;(t=this.c.a()).x(t.v()&-65537);_h.f.a(this.c.a().u,this.h);_a.b.c(_a.a.T,"FO_ShowSurveyDismissFRE")}this.B(!1);this.d.e(39,this.n);this.d.f(this.g,!1);this.d.a(this.d.b(this.g,2))}};_fi.n=function(){_fi.n.initializeBase(this)};_fi.n.prototype={a:function(n,t){},b:function(){return!0}};_fi.b=function(n,t,i,r,u,f,e){this.p=Function.createDelegate(this,this.S);this.E=Function.createDelegate(this,this.R);this.C=Function.createDelegate(this,this.L);this.D=Function.createDelegate(this,this.M);this.A=Function.createDelegate(this,this.J);this.B=Function.createDelegate(this,this.K);_fi.b.initializeBase(this);this.c=n;this.v=t;this.z=r;this.e=i;this.x=u;this.i=_a.v.g()==="en";this.w=f;this.y=e;this.f=!1;this.H();this.U();this.r=new _j.g(this.B,_a.a.T);this.q=new _j.g(this.A,_a.a.T);this.u=new _j.g(this.D,_a.a.T);this.t=new _j.g(this.C,_a.a.T);this.s=new _j.g(this.E,_a.a.T)};_fi.b.c=function(n,t,i,r,u,f,e){return _fi.b.b(n,r)?new _fi.n:new _fi.b(n,t,i,r,u,f,e)};_fi.b.b=function(n,t){return t&&t.c("focusedFirstRun",!0)?!1:n.j()||!n.j()&&!n.a().bH.IsFocusedInboxOnAdminOverride||(65536&n.a().v())!=65536};_fi.b.prototype={c:null,v:null,x:null,w:null,y:null,g:!1,o:!1,m:!1,z:null,e:null,j:null,i:!1,d:!1,f:!1,h:!1,r:null,q:null,u:null,t:null,s:null,l:!1,P:function(){return this.d||!this.h},Q:function(){return"https://www.youtube.com/embed/M40ha4fnKbU?autoplay=1&showinfo=0&iv_load_policy=3&controls=0&rel=0"},O:function(){return this.d?_u.n.EL:_u.n.RY},N:function(){var n;n=this.d?_u.n.RO:this.c.j()?_u.n.KJ:_u.n.FX;return n},b:function(){if(!this.o)return!0;this.T();return this.g},G:function(n){if(this.g!==n){this.g=n;this.eH("IsHidden")}return n},a:function(n,t){this.H();this.G(!_y.d.b(t,this.c,this.w,this.y)||_fi.b.b(this.c,this.z)||!!n.c()||n.a().a()!=="inbox")},K:function(){_a.b.c(_a.a.T,this.f?"FO_ExpandedGotIt":"FO_GotIt");this.n()},J:function(){_a.b.c(_a.a.T,"FO_Close");this.n()},M:function(){_a.b.c(_a.a.T,"FO_TryIt");this.x.k(!0,2,2);this.c.a().E(!0);this.n()},L:function(){_a.b.c(_a.a.T,"FO_No");this.n()},R:function(){if(this.i){this.l=!0;this.f=!1;this.eV("ShowFirstRunVideo","VideoUrl","ShowMoreText")}else{this.f=!0;this.eH("ShowMoreText")}if(!this.d||!this.i){this.h=!0;this.eL("HideLearnMoreButton","HideNoThanksButton")}_a.b.c(_a.a.T,"FO_LearnMore")},n:function(){this.G(!0);var n;(n=this.c.a()).x(n.v()&-65537);_h.f.a(this.c.a().u,this.v)},S:function(n){this.o=!0;this.eH("IsHidden")},U:function(){this.g=!0;this.o=this.m=!1;var n;this.j=(n=new _lt.e,n.a=18,n.b=1,n);this.e.d(18,this.p,!0);this.e.c(this.j)},T:function(){if(!this.m&&!this.g){this.e.e(18,this.p);this.e.f(this.j,!1);this.e.a(this.e.b(this.j,2));this.m=!0}},H:function(){this.d=this.c.a().bH.IsFocusedInboxEnabled;this.h=this.f||!this.d&&!this.i;this.eP(["IsFocusedInboxEnabled","FirstRunMainText","FirstRunDescriptionText","HideNoThanksButton","HideLearnMoreButton"])}};_fi.i=function(n,t,i,r,u,f,e,o,s,h,c){this.t=Function.createDelegate(this,this.B);this.v=Function.createDelegate(this,this.A);_fi.i.initializeBase(this);this.n=t;this.o=i;this.u=u;this.s=r;this.x=o;this.w=s;this.p=_fi.b.c(t,r,f,e,o,h,s);this.m=new _fi.j(n,t,i,r,e);this.q=_fi.c.b(t,r,f,e,o,h,s,c,i)};_fi.i.prototype={n:null,o:null,u:null,s:null,x:null,w:null,r:null,p:null,q:null,m:null,c:function(){return this.p},b:function(){return this.q},a:function(n,t){this.p.a(n,this.o);this.q.a(n);if(!n.c()){t===1&&this.m.g();this.m.r(n.a().bH.FolderId,t);this.m.x(n)}},h:function(n,t){_fi.k.a(this.s,n.b());this.m.r(n.a().bH.FolderId,t);this.m.g();this.q.a(n)},j:function(n){this.m.y(n);this.q.a(n)},l:function(n){this.q.a(n)},f:function(){this.m.E();_a.b.c(_a.a.T,"FO_DismissRollup")},g:function(n){if(this.n.a().bH.IsFocusedInboxEnabled){var t=new _fi.g;t.b(this.v);_a.g.a.a(t)}this.p.a(n,this.o);this.n.a().bH.IsFocusedInboxEnabled?this.m.y(n):this.m.g();_a.b.c(_a.a.T,"FO_SetIsFocusedEnabled",this.n.a().bH.IsFocusedInboxEnabled.toString(),0)},d:function(n,t){var u=new _a.l;u.c("IFE",!!this.n.a().bH.IsFocusedInboxEnabled);_h.f.a(this.n.a().u,this.s);_h.f.b(this.n.b().c(),this.s);if(this.n.a().bH.IsFocusedInboxEnabled){var i=new _fi.g;i.b(this.v);var r=this;i.a(function(){r.p.a(n,r.o)});_a.g.a.a(i);this.r=this.z();_h.g.a().i(this.r);this.i(this.r);this.i(t);this.o.a().dk().Enabled&&_h.g.a().i(this.y())}else this.p.a(n,this.o);this.m.x(n);_a.b.c(_a.a.T,"FO_Init",u.toString(),0)},e:function(n){_h.a.b&&n.t(this.t)},i:function(n){_h.a.b&&n.A(this.t)},eJ:function(){this.r.t(this.t);_h.g.a().b(this.r);this.r=null;var i;_a.h.a(i={val:this.p}),this.p=i.val;var t;_a.h.a(t={val:this.m}),this.m=t.val;var n;_a.h.a(n={val:this.q}),this.q=n.val;_a.gc.prototype.eJ.call(this)},B:function(n,t){this.m.C(n.B(),t)},A:function(n){var t=n;!t.e&&this.n.a().bH.IsFocusedInboxEnabled&&this.C();_j.e.b(_a.a.T,String.format("FO_GetFocusedInboxConfigurationAction: IsFocusedInboxCapable {0}; IsFocusedInboxDefaultOn: {1};",!!t.e,t.f))},C:function(){var n=new _fi.o;n.e=!0;_a.g.a.a(n);this.n.a().bA(!1);_a.b.c(_a.a.T,"FO_SetFocusedCapable")},z:function(){var t=null;var i=_g.b.a.nameToId("inbox");var r;if(_y.d.k(this.o,this.n,this.w)){r=_g.C.d(i,!1);r.k(5)}else r=this.n.b().g(i,!1,!1);var n;var u=!1;var s=200;switch(r.a()){case 2:n=new _lm.e(i,null,"All",null,null,this.o,null,1);var c,h;var l=this;t=(h=_h.c.j(n,function(n){return new _lm.c(n,null)},c={val:u}),u=c.val,h);break;case 1:n=new _lm.d(i,null,"All",null,null,this.o,1);var f,e;var a=this;t=(e=_h.c.m(n,this.u,function(n,t){return new _lm.b(n,t,null)},f={val:u}),u=f.val,e);break;case 5:n=new _bu.m(i,null,"All",new _h.q("ReceivedOrRenewTime","Descending"),null,this.o,1);var o=this;t=_h.c.b(n,_h.g.a(),function(n){return new _bu.d(n,o.o,o.n)});s=200;break;default:_j.e.b(_a.a.bv,"{0} view is not supported in GetOtherItemQueryTable",r.a());break}t.a().x.length||t.k(new _h.n(0,s),null,null);return t},y:function(){var i=null;var r=_g.b.a.nameToId("inbox");var o=this.n.b().g(r,!1,!1);var n;var t=!1;switch(o.a()){case 2:n=new _lm.e(r,null,"All",null,null,this.o,null,-1);var s,e;var c=this;i=(e=_h.c.j(n,function(n){return new _lm.c(n,null)},s={val:t}),t=s.val,e);break;case 1:n=new _lm.d(r,null,"All",null,null,this.o,-1);var u,f;var h=this;i=(f=_h.c.m(n,this.u,function(n,t){return new _lm.b(n,t,null)},u={val:t}),t=u.val,f);break;default:_j.e.b(_a.a.bv,"{0} view is not supported in GetAllPivotItemQueryTable",o.a());break}return i}};_fi.j=function(n,t,i,r,u){this.s=Function.createDelegate(this,this.A);this.t=Function.createDelegate(this,this.B);_fi.j.initializeBase(this);this.p=n;this.c=t;this.o=r;this.u=i;this.f=u;this.h=!0};_fi.j.prototype={c:null,p:null,o:null,u:null,f:null,d:0,h:!1,m:!1,j:null,l:null,q:function(){return!this.a.c()&&!!this.a.a()&&this.a.a().a()==="inbox"&&this.a.b()===1},e:function(){return!this.a.c()&&!!this.a.a()&&this.a.a().a()==="inbox"&&!this.a.b()},v:function(){return _h.a.b&&this.c.a().bH.IsFocusedInboxEnabled},a:null,z:function(){return this.d>99?_j.h.c("{0}+",99):this.d.toString()},n:null,b:function(){return this.d<=0||!this.e()&&!this.q()},r:function(n,t){if(this.v()&&_g.b.a.idToName(n)==="inbox"){var i=_a.d.get_utcNow().toString();t&&t!==-1||this.c.b().by(i);(t===1||t===-1)&&this.c.b().bw(i);_h.f.a(this.c.b().c(),this.o);_j.e.b(_a.a.T,String.format("FO_UpdateWaterMark: FocusedViewFilter {0}; Timestamp: {1}",t,i))}},x:function(n){this.a=n;this.e()&&this.h&&this.i();this.eH("IsHidden")},y:function(n){if(this.e()||this.q()){this.g();this.a=n;this.i()}},g:function(){this.w(0,"")},C:function(n,t){this.j=t;!n&&this.q()||n===1&&this.e()?this.i():n===1&&(this.h=!0)},E:function(){this.r(this.a.a().bH.FolderId,this.e()?1:0);this.g()},i:function(){if(!this.m&&this.v()){var n=new _fi.l;if(this.e()){n.f=2;n.e=this.c.b().bH.ClutterViewWatermark}else{n.f=1;n.e=this.c.b().bH.FocusedViewWatermark}var t=_g.b.a.nameToId("inbox");n.k=new _g.F(t);n.h=this.c.b().g(t,!1,!1).a()===1;n.b(this.t);n.a(this.s);_a.g.a.a(n);this.m=!0}},B:function(n){var t=n;var r;var i;if(this.f&&this.f.b("focusedRollupCount")){r=this.f.a.focusedRollupCount;i=this.f.a.focusedRollupText||this.c.c().bH.LogonEmailAddress}else{r=t.j;i=t.l.join("; ")}this.w(r,i);t.f===2&&(this.h=!1);_j.e.b(_a.a.T,String.format("FO_GetFolderChangeDigestAction: View {0}; IsConv: {1}; Watermark: {2}; UnseenCount {4}",t.f.toString(),t.h,t.e,t.j))},A:function(n){this.m=!1;var t=n.e;if(this.j&&t&&_a.d.b(this.j).o().a(_a.d.bH(Number.parseInvariant(t)))>0&&(!this.l||this.l!==t)){this.l=t;this.i()}},w:function(n,t){n>this.d&&this.p.a(_fi.f,new _fi.f);this.d=n;this.n=t;this.D();this.eV("UnseenCountText","UniqueSendersText","IsHidden")},D:function(){this.a.eD(this.d>0?this.z():"",this.n)}};_fi.k=function(){};_fi.k.a=function(n,t){if(t!==1){var u=t===-1?1:2;var i;(i=_g.a.a().b()).H(i.bH.FocusedInboxBitFlags&-4);var r;(r=_g.a.a().b()).H(r.bH.FocusedInboxBitFlags|u);_h.f.b(_g.a.a().b().c(),n)}};_fi.f=function(){};_fi.e=function(){};_fi.p=function(n,t,i,r,u,f){_fi.p.initializeBase(this,[n,t,i,r,u,f])};_fi.p.prototype={A:function(){_lt.k.prototype.A.call(this);this.D.a(_fi.e,new _fi.e)}};_fi.d=function(){};_fi.d.b=function(){return _fm.d.a("focusedconsumerfre.png")};_fi.d.c=function(){return _fm.d.a("focusedinboxfre.png")};_fi.d.d=function(){return _fm.d.a("otherinboxfre.png")};_fi.d.a=function(){return _fm.b.a(_fm.a.a,_fm.WebfontSizes.a.a,"ms-fcl-w-b")};_fi.q=function(n,t,i){this.n=Function.createDelegate(this,this.v);this.l=Function.createDelegate(this,this.t);this.m=Function.createDelegate(this,this.u);_fi.q.initializeBase(this);this.g=n;this.o=t;this.i=i.c};_fi.q.prototype={g:null,j:null,o:null,i:null,h:0,f:null,c:function(n){this.f=n.V();this.j=n;this.h=this.f.fv;this.f.apcl(_lv.b.b,this.m);this.p();this.w()},b:function(n){this.f.rpcl(_lv.b.b,this.m);this.f=null;this.j=null;this.r()},w:function(){this.g.b(_fi.e,this.l);this.g.b(_fi.f,this.n)},r:function(){this.g.c(_fi.e,this.l);this.g.c(_fi.f,this.n)},u:function(n,t){this.h=this.f.fv},t:function(n){this.p()},v:function(n){this.p()},p:function(){if(!this.h&&_j.k.j(this.j.z).a>0&&!this.o.b&&(!this.i||!this.i.bg)){this.d(null);this.r()}}};_fi.a=function(){};_fi.a.$$cctor=function(){_fi.a._I()};_fi.a.B=function(){var n=window.document.createElement("DIV");n.innerHTML="<div> <button type='button' class='_fi_5'></button> <span class='_fi_4'></span> <div class='_fi_2 ms-bgc-tp'> <span class='ms-font-m ms-fwt-r ms-fcl-w'></span> <div class='_fi_3'> <span class='ms-font-m ms-fwt-l ms-fcl-w'></span> </div> <div class='_fi_6'> <div class='_fi_8 ms-bgc-w'> <button type='button' class='_fi_7 ms-font-m ms-fcl-tp ms-fwt-sb'></button> </div> </div> </div> </div><div> <span class='_fi_i'></span> <span class='_fi_i _fi_j'></span> </div><div> <iframe class='_fi_k'></iframe> </div><div> <div class='_fi_9 ms-bgc-tp ms-fcl-w'> <div class='_fi_h'> <span class='_fi_c ms-fwt-sb'></span> <span class='_fi_d ms-fwt-sl'></span>  <div class='_fi_i _fi_g ms-fwt-sl'></div> <div class='_fi_e'> <button type='button' class='_fi_a ms-bgc-w'></button> <button type='button' class='_fi_a ms-bgc-w'></button> <button type='button' class='_fi_b'></button> <button type='button' class='_fi_b'></button> </div> </div> <button type='button' class='_fi_f'></button> </div> <div class='_fi_l'></div>   </div><div> <span class='_fi_m _fi_p ms-font-s ms-fwt-sb ms-fcl-tp ms-bgc-nlra'></span> <button type='button' class='_fi_r'></button> <span class='_fi_m _fi_o ms-font-s ms-fcl-ns ms-bgc-nlra'></span> </div><div> <button type='button' class='_fi_s _fi_t ms-bcl-nl ms-bgc-nlra ms-bgc-nl-h'></button> </div><div> <div class='_fi_u'>  </div> </div><div> <div class='_fi_w'>  </div> </div><div> <span class='_fi_x _fi_A ms-font-s ms-fwt-sb ms-fcl-tp ms-bgc-nlra'></span> <span class='_fi_C ms-font-s ms-fwt-sb ms-fcl-tp ms-bgc-tlr'>  </span> <button type='button' class='_fi_E'></button> <span class='_fi_x _fi_z ms-font-s ms-fcl-ns ms-bgc-nlra'></span> </div><div> <button type='button' class='_fi_F _fi_G ms-bcl-nl ms-bgc-nlra ms-bgc-nl-h'></button> </div><div> <button type='button' class='_fi_L'></button> <div class='_fi_H flex ms-bgc-tp'> <div class='_fi_K'> <span></span> </div> <div class='_fi_J'> <span class='ms-font-m ms-fwt-r ms-fcl-w'></span> <div class='_fi_I'> <span class='ms-font-m ms-fwt-l ms-fcl-w'></span> </div> <div class='_fi_M'> <div class='_fi_O ms-bgc-w'> <button type='button' class='_fi_N ms-font-m ms-fcl-tp ms-fwt-sb'></button> </div> </div> </div> </div> </div>";_j.i.a().appendChild(n);return n};_fi.a.j=function(n){return n.e};_fi.a.x=function(n){return n.d};_fi.a.w=function(n){return n.b};_fi.a.v=function(n){return n.f};_fi.a.U=function(n){return n.Q()};_fi.a.M=function(n){return n.O()};_fi.a.t=function(n){return n.f};_fi.a.L=function(n){return n.N()};_fi.a.s=function(n){return n.d};_fi.a.N=function(n){return n.r};_fi.a.T=function(n){return n.u};_fi.a.O=function(n){return n.h};_fi.a.Q=function(n){return n.s};_fi.a.P=function(n){return n.P()};_fi.a.R=function(n){return n.t};_fi.a.K=function(n){return n.q};_fi.a.S=function(n){return n.l};_fi.a.C=function(n){return n.b()};_fi.a.G=function(n){return n.o};_fi.a.I=function(n){return n.p};_fi.a.H=function(n){return n.i};_fi.a.J=function(n){return n.l};_fi.a.ba=function(n){return n.qv()};_fi.a.y=function(n){return n.jJ};_fi.a.Z=function(n){return n.lt};_fi.a.bb=function(n){return n.it};_fi.a.z=function(n){return n.bI()};_fi.a.be=function(n){return n.jr};_fi.a.bc=function(n){return n.fO===1};_fi.a.bd=function(n){return n.qx()};_fi.a.Y=function(n){return n.i};_fi.a.g=function(n,t){n.l(t)};_fi.a.b=function(n,t){n.T(t)};_fi.a.r=function(n,t){n.a(t)};_fi.a.c=function(n,t){n.a(t)};_fi.a.f=function(n,t){n.j(t)};_fi.a.F=function(n,t){n.bk(t)};_fi.a.E=function(n,t){n.a(t)};_fi.a.e=function(n,t){n.K(t)};_fi.a.V=function(n,t){n.l=t};_fi.a.D=function(n,t){n.a(t)};_fi.a.q=function(n,t){n.m(t)};_fi.a.k=function(n,t){n.b=t};_fi.a.n=function(n,t){n.M=t};_fi.a.m=function(n,t){n.f=t};_fi.a.l=function(n,t){n.d=t};_fi.a.o=function(n,t){n.b=t};_fi.a.u=function(n,t){n.E=t};_fi.a.W=function(n,t){n.i=t};_fi.a.X=function(n,t){n.l=t};_fi.a.p=function(){_fi.a.h||(_fi.a.h=new _fc.k);return _fi.a.h};_fi.a.A=function(){_fi.a.i||(_fi.a.i=new _fc.m);return _fi.a.i};_fi.a._I=function(){var o="FocusedConsumerFREPeekView";new _j.d(o,function(){_fi.a.a[o]===undefined&&(_fi.a.a[o]=[[[-1,4,null,null,null,"ImageId",null,_fi.a.g,0,null,null,null,_fi.d.a()],[-1,0,["CloseCommand"],[_fi.a.j],null,"ClickCommand",null,_fi.a.b,1,null,null,null]],[[-1,4,null,null,null,"Id",null,_fi.a.r,0,null,null,null,_fi.d.b()]],[[-1,0,["Title"],[_fi.a.x],null,"Text",null,_fi.a.c,1,null,null,null]],[[-1,0,["Description"],[_fi.a.w],null,"Text",null,_fi.a.c,1,null,null,null]],[[-1,0,["CloseButtonText"],[_fi.a.v],null,"Text",null,_fi.a.f,1,null,null,null],[-1,0,["CloseCommand"],[_fi.a.j],null,"ClickCommand",null,_fi.a.b,1,null,null,null]]]);var n=_fi.a.d.childNodes[0].cloneNode(!0);var t=new _fc.b(_j.a.a(n,[2,2,0,0]));t.d(0);t.c("ms-bgc-nl");var u=new _fc.a(_j.a.a(n,[2,1,0]));var f=new _fc.a(_j.a.a(n,[2,0]));var i=new _fc.d(n.children[1],_j.b.Instance.a(_ff.a),_j.b.Instance.a(_ff.b));var r=new _fc.b(n.children[0]);return new _j.a(n,[r,i,f,u,t])},"",_lt.f,_j.c,function(n){return new _j.c(n)},!1,!1,!1,0,_fi.a.a,1);var e="FocusedFirstRunView.Mouse._tid1";new _j.d(e,function(){_fi.a.a[e]===undefined&&(_fi.a.a[e]=[[[-1,4,null,null,null,"Text",null,_fi.a.c,0,null,null,null,_u.n.Gx]],[[-1,4,null,null,null,"Text",null,_fi.a.c,0,null,null,null,_u.n.MZ]]]);var n=_fi.a.d.childNodes[1].cloneNode(!0);var i=new _fc.a(n.children[1]);var t=new _fc.a(n.children[0]);return new _j.a(n,[t,i])},"",_fi.b,_j.c,function(n){return new _j.c(n)},!1,!0,!1,0,_fi.a.a);var s="FocusedFirstRunView.Mouse.FirstRunVideoPlayer";new _j.d(s,function(){_fi.a.a[s]===undefined&&(_fi.a.a[s]=[[[-1,4,null,null,null,"Title",null,_fi.a.F,0,null,null,null,_u.n.LV],[-1,0,["VideoUrl"],[_fi.a.U],null,"Source",null,_fi.a.E,1,null,null,null]]]);var n=_fi.a.d.childNodes[2].cloneNode(!0);var t=new _b.A(n.children[0]);return new _j.a(n,[t])},"",_fi.b,_j.c,function(n){return new _j.c(n)},!1,!1,!0,0,_fi.a.a);var c="FocusedFirstRunView.Mouse";new _j.d(c,function(){_fi.a.a[c]===undefined&&(_fi.a.a[c]=[[[-1,0,["FirstRunMainText"],[_fi.a.M],null,"Text",null,_fi.a.c,1,null,null,null]],[[-1,0,["ShowMoreText"],[_fi.a.t],null,"IsHidden",null,_fi.a.e,1,null,null,!0],[-1,0,["FirstRunDescriptionText"],[_fi.a.L],null,"Text",null,_fi.a.c,1,null,null,null]],[[-1,0,["ShowMoreText"],[_fi.a.t],null,"IsHidden",null,_fi.a.e,1,_fi.a.p(),null,!0]],[[-1,4,null,null,null,"Text",null,_fi.a.f,0,null,null,null,_u.n.CU],[-1,0,["IsFocusedInboxEnabled"],[_fi.a.s],null,"IsHidden",null,_fi.a.e,1,_fi.a.p(),null,!0],[-1,0,["GotItCommand"],[_fi.a.N],null,"ClickCommand",null,_fi.a.b,1,null,null,null]],[[-1,4,null,null,null,"Text",null,_fi.a.f,0,null,null,null,_u.n.Ta],[-1,0,["IsFocusedInboxEnabled"],[_fi.a.s],null,"IsHidden",null,_fi.a.e,1,null,null,!0],[-1,0,["TryItCommand"],[_fi.a.T],null,"ClickCommand",null,_fi.a.b,1,null,null,null]],[[-1,4,null,null,null,"Text",null,_fi.a.f,0,null,null,null,_u.n.Bw],[-1,0,["HideLearnMoreButton"],[_fi.a.O],null,"IsHidden",null,_fi.a.e,1,null,null,!0],[-1,0,["LearnMoreCommand"],[_fi.a.Q],null,"ClickCommand",null,_fi.a.b,1,null,null,null]],[[-1,4,null,null,null,"Text",null,_fi.a.f,0,null,null,null,_u.n.Bb],[-1,0,["HideNoThanksButton"],[_fi.a.P],null,"IsHidden",null,_fi.a.e,1,null,null,!0],[-1,0,["NoThanksCommand"],[_fi.a.R],null,"ClickCommand",null,_fi.a.b,1,null,null,null]],[[-1,4,null,null,null,"ImageId",null,_fi.a.g,0,null,null,null,_fi.b.a],[-1,0,["CloseXCommand"],[_fi.a.K],null,"ClickCommand",null,_fi.a.b,1,null,null,null]],[[-1,0,["ShowFirstRunVideo"],[_fi.a.S],_fi.a.V,"IsShown",_fi.a.C,_fi.a.D,2,null,null,!1]]]);var n=_fi.a.d.childNodes[3].cloneNode(!0);var t=new _fce.l(n.children[1],_j.b.Instance.a(_fc.f),_j.b.Instance.a(_j.j),_j.b.Instance.a(_ff.a),_j.b.Instance.a(_ff.b));t.y("FocusedFirstRunView.Mouse.FirstRunVideoPlayer");t.f(!0);t.g(!0);var l=new _fce.s(_j.b.Instance.a(_fc.f),_j.b.Instance.a(_ff.b));t.d(l);var h=new _fc.b(_j.a.a(n,[0,1]));var f=new _fc.b(_j.a.a(n,[0,0,3,3]));f.i("ms-font-s ms-fcl-w ms-fwt-sb");f.h=!0;var i=new _fc.b(_j.a.a(n,[0,0,3,2]));i.i("ms-font-s ms-fcl-w ms-fwt-sb");i.h=!0;var r=new _fc.b(_j.a.a(n,[0,0,3,1]));r.i("ms-font-s ms-fcl-tp ms-fwt-sb");r.h=!0;var u=new _fc.b(_j.a.a(n,[0,0,3,0]));u.i("ms-font-s ms-fcl-tp ms-fwt-sb");u.h=!0;var e=new _j.c(_j.a.a(n,[0,0,2]));e.y("FocusedFirstRunView.Mouse._tid1");var s=new _fc.a(_j.a.a(n,[0,0,1]));var o=new _fc.a(_j.a.a(n,[0,0,0]));return new _j.a(n,[o,s,e,u,r,i,f,h,t])},"",_fi.b,_j.c,function(n){return new _j.c(n)},!1,!1,!1,0,_fi.a.a);var h="FocusedInboxFeedbackView.Mouse._tid3";new _j.d(h,function(){_fi.a.a[h]===undefined&&(_fi.a.a[h]=[[[-1,4,null,null,null,"Text",null,_fi.a.c,0,null,null,null,_u.n.Ia]],[[-1,4,null,null,null,"ImageId",null,_fi.a.g,0,null,null,null,_n.b.bC()],[-1,4,null,null,null,"HoveredImageId",null,_fi.a.q,0,null,null,null,_n.b.bD()],[-1,0,["DismissCommand"],[_fi.a.G],null,"ClickCommand",null,_fi.a.b,1,null,null,null]],[[-1,4,null,null,null,"Text",null,_fi.a.c,0,null,null,null,_u.n.HS]]]);var n=_fi.a.d.childNodes[4].cloneNode(!0);var r=new _fc.a(n.children[2]);var t=new _fc.b(n.children[1]);t.h=!0;t.bT=!0;var i=new _fc.a(n.children[0]);return new _j.a(n,[i,t,r])},"",_fi.c,_fc.b,function(n){return new _fc.b(n)},!1,!0,!1,0,_fi.a.a);var f="FocusedInboxFeedbackView.Mouse";new _j.d(f,function(){_fi.a.a[f]===undefined&&(_fi.a.a[f]=[[[-1,0,["OpenFocusedInboxSurveyCommand"],[_fi.a.I],null,"ClickCommand",null,_fi.a.b,1,null,null,null],[-1,5,["IsInConversationView"],[_fi.a.H],null,"_fi_q",null,null,0,null,null,null],[-1,5,["ReadingPaneOff"],[_fi.a.J],null,"_fi_n",null,null,0,null,null,null]]]);var t=_fi.a.d.childNodes[5].cloneNode(!0);var n=new _fc.b(t.children[0]);n.y("FocusedInboxFeedbackView.Mouse._tid3");return new _j.a(t,[n])},"",_fi.c,_j.c,function(n){return new _j.c(n)},!1,!1,!1,0,_fi.a.a);var t="FocusedInboxConsumerFRE";new _j.d(t,function(){_fi.a.a[t]===undefined&&(_fi.a.a[t]=[null]);var f=_fi.a.d.childNodes[6].cloneNode(!0);var u=new _j.i(f.children[0]);var i=new _lt.b(_j.b.Instance.a(ILightningManager));i.U(_j.f.b(43,null,null,null,"Id",null,_fi.a.k,0,null,null,0));var n=new _fi.p(_j.b.Instance.a(ILightningManager),_j.b.Instance.a(_b.f),_j.b.Instance.a(_b.a),_j.b.Instance.a(_j.j),_j.b.Instance.a(_ff.b),_j.b.Instance.a(_y.a));n.U(_j.f.b(43,null,null,null,"LightningId",null,_fi.a.n,0,null,null,0)).U(_j.f.b(_lts.o.J,null,null,null,"Title",null,_fi.a.m,0)).U(_j.f.b(_lts.o.j,null,null,null,"Description",null,_fi.a.l,0));n.s="FocusedConsumerFREPeekView";n.p=346;n.H="_fi_v _fi_u";n.e=58;n.t=!0;n.z=!0;n.w=15;n.v=35;n.c=!0;i.a([n]);var r=new _lt.c(_j.b.Instance.a(ILightningManager),_j.b.Instance.a(_a.f));r.U(_j.f.b(43,null,null,null,"Id",null,_fi.a.o,0,null,null,0));var e=new _fi.h(_j.b.Instance.a(_y.q),_j.b.Instance.a(_y.j));r.a=[e];u.C([i,r]);return new _j.a(f,[u])},"",Object,_j.c,function(n){return new _j.c(n)},!1,!1,!1,0,_fi.a.a,7);var n="FocusedOtherMoveMenuFRE";new _j.d(n,function(){_fi.a.a[n]===undefined&&(_fi.a.a[n]=[null]);var f=_fi.a.d.childNodes[7].cloneNode(!0);var u=new _j.i(f.children[0]);var i=new _lt.b(_j.b.Instance.a(ILightningManager));i.U(_j.f.b(45,null,null,null,"Id",null,_fi.a.k,0,null,null,0));var t=new _lt.k(_j.b.Instance.a(ILightningManager),_j.b.Instance.a(_b.f),_j.b.Instance.a(_b.a),_j.b.Instance.a(_j.j),_j.b.Instance.a(_ff.b),_j.b.Instance.a(_y.a));t.U(_j.f.b(45,null,null,null,"LightningId",null,_fi.a.n,0,null,null,0)).U(_j.f.b(_lts.o.L,null,null,null,"Title",null,_fi.a.m,0)).U(_j.f.b(_lts.o.d,null,null,null,"Description",null,_fi.a.l,0)).U(_j.f.b(_fi.d.c(),null,null,null,"ImageId",null,_fi.a.u,0)).U(_j.f.b(3,null,null,null,"NotchVerticalAlign",null,_fi.a.W,0,null,null,0)).U(_j.f.b(1,null,null,null,"PeekVerticalAlign",null,_fi.a.X,0,null,null,0));t.s="LeftImageFREPeekView";t.p=406;t.e=30;t.t=!0;t.z=!0;t.w=15;t.v=35;t.c=!0;i.a([t]);var r=new _lt.c(_j.b.Instance.a(ILightningManager),_j.b.Instance.a(_a.f));r.U(_j.f.b(45,null,null,null,"Id",null,_fi.a.o,0,null,null,0));var e=new _lt.l;r.a=[e];u.C([i,r]);return new _j.a(f,[u])},"",Object,_j.c,function(n){return new _j.c(n)},!1,!1,!1,0,_fi.a.a,8);var i="FocusedRollupItemView.Mouse._tid4";new _j.d(i,function(){_fi.a.a[i]===undefined&&(_fi.a.a[i]=[[[-1,0,["FocusedRollupText"],[_fi.a.ba],null,"Text",null,_fi.a.c,1,null,null,null]],[[-1,0,["FocusedRollupUnseenCountText"],[_fi.a.y],null,"Text",null,_fi.a.c,1,null,null,null]],[[-1,4,null,null,null,"ImageId",null,_fi.a.g,0,null,null,null,_n.b.bC()],[-1,4,null,null,null,"HoveredImageId",null,_fi.a.q,0,null,null,null,_n.b.bD()],[-1,0,["DismissRollupCommand"],[_fi.a.Z],null,"ClickCommand",null,_fi.a.b,1,null,null,null]],[[-1,0,["FocusedRollupUniqueSendersText"],[_fi.a.bb],null,"Text",null,_fi.a.c,1,null,null,null],[-1,5,["ReadingPaneOff"],[_fi.a.z],null,"ms-fwt-sl",null,null,0,null,null,null]]]);var t=_fi.a.d.childNodes[8].cloneNode(!0);var h=new _fc.a(t.children[3]);var f=new _fc.b(t.children[2]);f.h=!0;f.bT=!0;var e=new _fc.a(t.children[1]);var r=new _lt.b(_j.b.Instance.a(ILightningManager));r.U(_j.f.b(44,null,null,null,"Id",null,_fi.a.k,0,null,null,0));var n=new _lt.k(_j.b.Instance.a(ILightningManager),_j.b.Instance.a(_b.f),_j.b.Instance.a(_b.a),_j.b.Instance.a(_j.j),_j.b.Instance.a(_ff.b),_j.b.Instance.a(_y.a));n.U(_j.f.b(44,null,null,null,"LightningId",null,_fi.a.n,0,null,null,0)).U(_j.f.b(_lts.o.A,null,null,null,"Title",null,_fi.a.m,0)).U(_j.f.b(_lts.o.S,null,null,null,"Description",null,_fi.a.l,0)).U(_j.f.b(_fi.d.d(),null,null,null,"ImageId",null,_fi.a.u,0));n.s="LeftImageFREPeekView";n.p=396;n.e=38;n.t=!0;n.z=!0;n.w=8;n.J=6;n.v=30;n.c=!0;r.a([n]);var u=new _lt.c(_j.b.Instance.a(ILightningManager),_j.b.Instance.a(_a.f));u.U(_j.f.b(44,null,null,null,"Id",null,_fi.a.o,0,null,null,0));var s=new _fi.q(_j.b.Instance.a(_j.j),_j.b.Instance.a(_y.q),_j.b.Instance.a(_y.j));u.a=[s];e.C([r,u]);var o=new _fc.a(t.children[0]);return new _j.a(t,[o,e,f,h])},"",_lv.b,_fc.b,function(n){return new _fc.b(n)},!1,!0,!1,0,_fi.a.a);var u="FocusedRollupItemView.Mouse";new _j.d(u,function(){_fi.a.a[u]===undefined&&(_fi.a.a[u]=[[[-1,0,["FocusedRollupUnseenCountText"],[_fi.a.y],null,"IsHidden",null,_fi.a.e,1,_fi.a.A(),null,!0],[-1,0,["ToggleFocusedPivotCommand"],[_fi.a.be],null,"ClickCommand",null,_fi.a.b,1,null,null,null],[-1,5,["IsInConversationView"],[_fi.a.bc],null,"_fi_B",null,null,0,null,null,null],[-1,5,["IsSafari"],[_fi.a.bd],null,"_fi_D",null,null,0,null,null,null],[-1,5,["ReadingPaneOff"],[_fi.a.z],null,"_fi_y",null,null,0,null,null,null]]]);var t=_fi.a.d.childNodes[9].cloneNode(!0);var n=new _fc.b(t.children[0]);n.y("FocusedRollupItemView.Mouse._tid4");return new _j.a(t,[n])},"",_lv.b,_j.c,function(n){return new _j.c(n)},!1,!1,!1,0,_fi.a.a);var r="LeftImageFREPeekView";new _j.d(r,function(){_fi.a.a[r]===undefined&&(_fi.a.a[r]=[[[-1,4,null,null,null,"ImageId",null,_fi.a.g,0,null,null,null,_fi.d.a()],[-1,0,["CloseCommand"],[_fi.a.j],null,"ClickCommand",null,_fi.a.b,1,null,null,null]],[[-1,0,["ImageId"],[_fi.a.Y],null,"Id",null,_fi.a.r,1,null,null,null]],[[-1,0,["Title"],[_fi.a.x],null,"Text",null,_fi.a.c,1,null,null,null]],[[-1,0,["Description"],[_fi.a.w],null,"Text",null,_fi.a.c,1,null,null,null]],[[-1,0,["CloseButtonText"],[_fi.a.v],null,"Text",null,_fi.a.f,1,null,null,null],[-1,0,["CloseCommand"],[_fi.a.j],null,"ClickCommand",null,_fi.a.b,1,null,null,null]]]);var n=_fi.a.d.childNodes[10].cloneNode(!0);var t=new _fc.b(_j.a.a(n,[1,1,2,0,0]));t.d(0);t.c("ms-bgc-nl");var f=new _fc.a(_j.a.a(n,[1,1,1,0]));var e=new _fc.a(_j.a.a(n,[1,1,0]));var i=new _fc.d(_j.a.a(n,[1,0,0]),_j.b.Instance.a(_ff.a),_j.b.Instance.a(_ff.b));var u=new _fc.b(n.children[0]);return new _j.a(n,[u,i,e,f,t])},"",_lt.f,_j.c,function(n){return new _j.c(n)},!1,!1,!1,0,_fi.a.a,11)};_fi.h.registerClass("_fi.h",_lt.bc);FocusedInboxRollupComponent.registerClass("FocusedInboxRollupComponent",null,_a.jY,_j.ce);_fi.l.registerClass("_fi.l",_h.fJ);_fi.g.registerClass("_fi.g",_h.fJ);_fi.o.registerClass("_fi.o",_h.fJ);_fi.m.registerClass("_fi.m",_a.bv,_fi.r,IIsHidden,_a.kK,_j.bs,Sys.IDisposable);_fi.c.registerClass("_fi.c",_a.bv,_fi.r,IIsHidden,_a.kK,_j.bs,Sys.IDisposable);_fi.n.registerClass("_fi.n",_a.bv,_fi.s,IIsHidden,_a.kK,_j.bs,Sys.IDisposable);_fi.b.registerClass("_fi.b",_a.bv,_fi.s,IIsHidden,_a.kK,_j.bs,Sys.IDisposable);_fi.i.registerClass("_fi.i",_a.bv,_y.hQ,_a.kK,_j.bs,Sys.IDisposable);_fi.j.registerClass("_fi.j",_a.bv,IIsHidden,_a.kK,_j.bs,Sys.IDisposable);_fi.f.registerClass("_fi.f");_fi.e.registerClass("_fi.e");_fi.p.registerClass("_fi.p",_lt.k);_fi.q.registerClass("_fi.q",_lt.bc);FocusedInboxRollupComponent.$$cctor();_fi.b.a=_fm.b.a(_fm.a.a,_fm.WebfontSizes.a.c,"ms-fcl-w-b");_fi.a.d=_fi.a.B();_fi.a.h=null;_fi.a.i=null;_fi.a.a={};_fi.a.$$cctor();
window.scriptsLoaded['microsoft.owa.focusedinboxrollup.js'] = 1; window.scriptProcessEnd = window.scriptProcessEnd || {}; window.scriptProcessEnd['microsoft.owa.focusedinboxrollup.js'] = (new Date()).getTime();