(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{"+cwC":function(t,e,n){"use strict";n.r(e);var s=n("CcnG"),i=function(){return function(){}}(),r=n("pMnS"),l=n("KM9H"),u=n("vuB0"),o=n("4vXS"),a=n("7uv5"),c=n("MGne"),b=n("NfCQ"),h=n("kztb"),g=n("V+dw"),f=n("8bEz"),d=n("k6ER"),p=n("4Ssn"),v=n("S+eJ"),y=n("Ip0R"),m=(n("NGJs"),n("jvbL")),D=function(){function t(t){var e=this;this.authService=t,this.alive=!0,this.authService.onTokenChange().pipe(Object(m.a)(function(){return e.alive})).subscribe(function(t){e.token=null,t&&t.isValid()&&(e.token=t)})}return t.prototype.login=function(){var t=this;this.authService.authenticate("google").pipe(Object(m.a)(function(){return t.alive})).subscribe(function(t){})},t.prototype.logout=function(){var t=this;this.authService.logout("google").pipe(Object(m.a)(function(){return t.alive})).subscribe(function(t){})},t.prototype.ngOnDestroy=function(){this.alive=!1},t}(),w=n("BDhN"),B=s.rb({encapsulation:2,styles:[],data:{}});function k(t){return s.Nb(0,[(t()(),s.tb(0,0,null,null,1,"button",[["nbButton",""],["status","success"]],null,[[null,"click"]],function(t,e,n){var s=!0;return"click"===e&&(s=!1!==t.component.login()&&s),s},null,null)),(t()(),s.Lb(-1,null,["Sign In with Google"]))],null,null)}function V(t){return s.Nb(0,[(t()(),s.tb(0,0,null,null,1,"button",[["nbButton",""],["status","warning"]],null,[[null,"click"]],function(t,e,n){var s=!0;return"click"===e&&(s=!1!==t.component.logout()&&s),s},null,null)),(t()(),s.Lb(-1,null,["Sign Out"]))],null,null)}function C(t){return s.Nb(0,[(t()(),s.tb(0,0,null,null,16,"nb-layout",[],[[2,"window-mode",null],[2,"with-scroll",null],[2,"with-subheader",null],[2,"overlay-scroll-block",null]],[["window","scroll"],["window","resize"]],function(t,e,n){var i=!0;return"window:scroll"===e&&(i=!1!==s.Db(t,1).onScroll(n)&&i),"window:resize"===e&&(i=!1!==s.Db(t,1).onResize(n)&&i),i},l.f,l.b)),s.sb(1,4374528,null,0,u.b,[o.a,a.a,s.k,s.E,c.f,c.b,s.B,b.c,h.a,g.a,f.a,d.a],null,null),(t()(),s.tb(2,0,null,3,14,"nb-layout-column",[],[[2,"left",null],[2,"start",null]],null,null,l.e,l.a)),s.sb(3,49152,null,0,u.a,[],null,null),(t()(),s.tb(4,0,null,0,12,"nb-card",[],[[2,"xxsmall-card",null],[2,"xsmall-card",null],[2,"small-card",null],[2,"medium-card",null],[2,"large-card",null],[2,"xlarge-card",null],[2,"xxlarge-card",null],[2,"active-card",null],[2,"disabled-card",null],[2,"primary-card",null],[2,"info-card",null],[2,"success-card",null],[2,"warning-card",null],[2,"danger-card",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null],[2,"accent-active",null],[2,"accent-disabled",null]],null,null,p.f,p.b)),s.sb(5,49152,null,0,v.b,[],null,null),(t()(),s.tb(6,0,null,1,10,"nb-card-body",[],null,null,null,p.e,p.a)),s.sb(7,49152,null,0,v.a,[],null,null),(t()(),s.tb(8,0,null,0,1,"p",[],null,null,null,null,null)),(t()(),s.Lb(9,null,["Current User Authenticated: ",""])),(t()(),s.tb(10,0,null,0,2,"p",[],null,null,null,null,null)),(t()(),s.Lb(11,null,["Current User Token: ",""])),s.Fb(0,y.h,[]),(t()(),s.kb(16777216,null,0,1,null,k)),s.sb(14,16384,null,0,y.n,[s.R,s.N],{ngIf:[0,"ngIf"]},null),(t()(),s.kb(16777216,null,0,1,null,V)),s.sb(16,16384,null,0,y.n,[s.R,s.N],{ngIf:[0,"ngIf"]},null)],function(t,e){var n=e.component;t(e,14,0,!n.token),t(e,16,0,n.token)},function(t,e){var n=e.component;t(e,0,0,s.Db(e,1).windowModeValue,s.Db(e,1).withScrollValue,s.Db(e,1).withSubheader,s.Db(e,1).overlayScrollBlock),t(e,2,0,s.Db(e,3).leftValue,s.Db(e,3).startValue),t(e,4,1,[s.Db(e,5).xxsmall,s.Db(e,5).xsmall,s.Db(e,5).small,s.Db(e,5).medium,s.Db(e,5).large,s.Db(e,5).xlarge,s.Db(e,5).xxlarge,s.Db(e,5).active,s.Db(e,5).disabled,s.Db(e,5).primary,s.Db(e,5).info,s.Db(e,5).success,s.Db(e,5).warning,s.Db(e,5).danger,s.Db(e,5).hasAccent,s.Db(e,5).primaryAccent,s.Db(e,5).infoAccent,s.Db(e,5).successAccent,s.Db(e,5).warningAccent,s.Db(e,5).dangerAccent,s.Db(e,5).activeAccent,s.Db(e,5).disabledAccent]),t(e,9,0,!!n.token),t(e,11,0,s.Mb(e,11,0,s.Db(e,12).transform(n.token)))})}function S(t){return s.Nb(0,[(t()(),s.tb(0,0,null,null,1,"nb-playground-auth",[],null,null,null,C,B)),s.sb(1,180224,null,0,D,[w.a],null,null)],null,null)}var M=s.pb("nb-playground-auth",D,S,{},{},[]),N=function(){function t(t,e){var n=this;this.authService=t,this.router=e,this.alive=!0,this.authService.authenticate("google").pipe(Object(m.a)(function(){return n.alive})).subscribe(function(t){t.isSuccess()&&t.getRedirect()&&n.router.navigateByUrl(t.getRedirect())})}return t.prototype.ngOnDestroy=function(){this.alive=!1},t}(),A=n("ZYCi"),j=s.rb({encapsulation:2,styles:[],data:{}});function O(t){return s.Nb(0,[(t()(),s.tb(0,0,null,null,4,"nb-layout",[],[[2,"window-mode",null],[2,"with-scroll",null],[2,"with-subheader",null],[2,"overlay-scroll-block",null]],[["window","scroll"],["window","resize"]],function(t,e,n){var i=!0;return"window:scroll"===e&&(i=!1!==s.Db(t,1).onScroll(n)&&i),"window:resize"===e&&(i=!1!==s.Db(t,1).onResize(n)&&i),i},l.f,l.b)),s.sb(1,4374528,null,0,u.b,[o.a,a.a,s.k,s.E,c.f,c.b,s.B,b.c,h.a,g.a,f.a,d.a],null,null),(t()(),s.tb(2,0,null,3,2,"nb-layout-column",[],[[2,"left",null],[2,"start",null]],null,null,l.e,l.a)),s.sb(3,49152,null,0,u.a,[],null,null),(t()(),s.Lb(-1,0,["Authenticating..."]))],null,function(t,e){t(e,0,0,s.Db(e,1).windowModeValue,s.Db(e,1).withScrollValue,s.Db(e,1).withSubheader,s.Db(e,1).overlayScrollBlock),t(e,2,0,s.Db(e,3).leftValue,s.Db(e,3).startValue)})}function x(t){return s.Nb(0,[(t()(),s.tb(0,0,null,null,1,"nb-playground-oauth2-callback",[],null,null,null,O,j)),s.sb(1,180224,null,0,N,[w.a,A.l],null,null)],null,null)}var R=s.pb("nb-playground-oauth2-callback",N,x,{},{},[]),E=n("gIcY"),L=n("t/Na"),T=n("0ICW"),q=n("Abgx"),I=n("znn7"),z=n("Y4k2"),P=n("Bc6B"),U=n("6y2k"),X=n("++eV"),J=n("X/Iy"),F=n("i6JN"),K=n("F4EV"),Y=n("0AKQ"),G=n("DJEY"),Q=n("+q8+"),W=n("+Zd3"),Z=n("4aFR"),H=function(){return function(){}}(),$=n("QEfX");n.d(e,"OAuth2PlaygroundModuleNgFactory",function(){return _});var _=s.qb(i,[],function(t){return s.Ab([s.Bb(512,s.j,s.eb,[[8,[r.a,M,R]],[3,s.j],s.x]),s.Bb(4608,y.p,y.o,[s.u,[2,y.E]]),s.Bb(4608,E.A,E.A,[]),s.Bb(4608,L.k,L.q,[y.d,s.B,L.o]),s.Bb(4608,L.r,L.r,[L.k,L.p]),s.Bb(5120,L.a,function(t){return[t]},[L.r]),s.Bb(4608,L.n,L.n,[]),s.Bb(6144,L.l,null,[L.n]),s.Bb(4608,L.j,L.j,[L.l]),s.Bb(6144,L.b,null,[L.j]),s.Bb(4608,L.g,L.m,[L.b,s.q]),s.Bb(4608,L.c,L.c,[L.g]),s.Bb(4608,f.a,f.a,[A.l]),s.Bb(5120,T.b,q.c,[T.f]),s.Bb(5120,T.c,q.d,[T.b,s.q]),s.Bb(5120,T.d,q.e,[T.c]),s.Bb(4608,I.b,I.b,[I.a,T.d]),s.Bb(4608,z.b,z.a,[I.b]),s.Bb(4608,P.a,P.a,[z.b]),s.Bb(4608,w.a,w.a,[P.a,T.c]),s.Bb(4608,U.a,U.a,[]),s.Bb(4608,X.a,X.a,[L.c,A.a]),s.Bb(4608,J.a,J.a,[L.c,A.a,c.f]),s.Bb(1073742336,y.c,y.c,[]),s.Bb(1073742336,E.y,E.y,[]),s.Bb(1073742336,E.i,E.i,[]),s.Bb(1073742336,L.e,L.e,[]),s.Bb(1073742336,L.d,L.d,[]),s.Bb(1073742336,A.p,A.p,[[2,A.v],[2,A.l]]),s.Bb(1073742336,F.a,F.a,[]),s.Bb(1073742336,K.a,K.a,[]),s.Bb(1073742336,Y.a,Y.a,[]),s.Bb(1073742336,G.a,G.a,[]),s.Bb(1073742336,Q.a,Q.a,[]),s.Bb(1073742336,W.a,W.a,[]),s.Bb(1073742336,Z.a,Z.a,[]),s.Bb(1073742336,q.a,q.a,[]),s.Bb(1073742336,H,H,[]),s.Bb(1073742336,i,i,[]),s.Bb(256,L.o,"XSRF-TOKEN",[]),s.Bb(256,L.p,"X-XSRF-TOKEN",[]),s.Bb(1024,A.j,function(){return[[{path:"",component:D},{path:"callback",component:N}]]},[]),s.Bb(256,T.f,{strategies:[[J.a,{name:"google",clientId:"806751403568-03376bvlin9n3rhid0cahus6ei3lc69q.apps.googleusercontent.com",clientSecret:"",authorize:{endpoint:"https://accounts.google.com/o/oauth2/v2/auth",responseType:"token",scope:"https://www.googleapis.com/auth/userinfo.profile",redirectUri:"https://akveo.github.io/nebular/example/oauth2/callback"},redirect:{success:"/example/oauth2"}}]]},[]),s.Bb(256,I.a,$.h,[]),s.Bb(256,T.a,"Authorization",[]),s.Bb(256,T.e,q.b,[])])})},"2Az5":function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n("BDhN");var s=n("jvbL"),i=function(){function t(t,e){var n=this;this.auth=t,this.location=e,this.alive=!0,this.authenticated=!1,this.token="",this.subscription=t.onAuthenticationChange().pipe(Object(s.a)(function(){return n.alive})).subscribe(function(t){n.authenticated=t})}return t.prototype.back=function(){return this.location.back(),!1},t.prototype.ngOnDestroy=function(){this.alive=!1},t}()},"8qs0":function(t,e,n){"use strict";n.d(e,"a",function(){return i});var s=n("iVvT"),i=(n("BDhN"),function(){function t(t,e,n,s){void 0===e&&(e={}),this.service=t,this.options=e,this.cd=n,this.router=s,this.redirectDelay=0,this.showMessages={},this.strategy="",this.submitted=!1,this.errors=[],this.messages=[],this.user={},this.redirectDelay=this.getConfigValue("forms.resetPassword.redirectDelay"),this.showMessages=this.getConfigValue("forms.resetPassword.showMessages"),this.strategy=this.getConfigValue("forms.resetPassword.strategy")}return t.prototype.resetPass=function(){var t=this;this.errors=this.messages=[],this.submitted=!0,this.service.resetPassword(this.strategy,this.user).subscribe(function(e){t.submitted=!1,e.isSuccess()?t.messages=e.getMessages():t.errors=e.getErrors();var n=e.getRedirect();n&&setTimeout(function(){return t.router.navigateByUrl(n)},t.redirectDelay),t.cd.detectChanges()})},t.prototype.getConfigValue=function(t){return Object(s.b)(this.options,t,null)},t}())},"9S34":function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n("0ICW");var s=n("iVvT"),i=(n("BDhN"),function(){function t(t,e,n,s){void 0===e&&(e={}),this.service=t,this.options=e,this.cd=n,this.router=s,this.redirectDelay=0,this.showMessages={},this.strategy="",this.submitted=!1,this.errors=[],this.messages=[],this.user={},this.socialLinks=[],this.redirectDelay=this.getConfigValue("forms.register.redirectDelay"),this.showMessages=this.getConfigValue("forms.register.showMessages"),this.strategy=this.getConfigValue("forms.register.strategy"),this.socialLinks=this.getConfigValue("forms.login.socialLinks")}return t.prototype.register=function(){var t=this;this.errors=this.messages=[],this.submitted=!0,this.service.register(this.strategy,this.user).subscribe(function(e){t.submitted=!1,e.isSuccess()?t.messages=e.getMessages():t.errors=e.getErrors();var n=e.getRedirect();n&&setTimeout(function(){return t.router.navigateByUrl(n)},t.redirectDelay),t.cd.detectChanges()})},t.prototype.getConfigValue=function(t){return Object(s.b)(this.options,t,null)},t}())},"9XlZ":function(t,e,n){"use strict";n.d(e,"a",function(){return i});var s=n("iVvT"),i=(n("BDhN"),function(){function t(t,e,n){void 0===e&&(e={}),this.service=t,this.options=e,this.router=n,this.redirectDelay=0,this.strategy="",this.redirectDelay=this.getConfigValue("forms.logout.redirectDelay"),this.strategy=this.getConfigValue("forms.logout.strategy")}return t.prototype.ngOnInit=function(){this.logout(this.strategy)},t.prototype.logout=function(t){var e=this;this.service.logout(t).subscribe(function(t){var n=t.getRedirect();n&&setTimeout(function(){return e.router.navigateByUrl(n)},e.redirectDelay)})},t.prototype.getConfigValue=function(t){return Object(s.b)(this.options,t,null)},t}())},DYSn:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n("0ICW");var s=n("iVvT"),i=(n("BDhN"),function(){function t(t,e,n,s){void 0===e&&(e={}),this.service=t,this.options=e,this.cd=n,this.router=s,this.redirectDelay=0,this.showMessages={},this.strategy="",this.errors=[],this.messages=[],this.user={},this.submitted=!1,this.socialLinks=[],this.rememberMe=!1,this.redirectDelay=this.getConfigValue("forms.login.redirectDelay"),this.showMessages=this.getConfigValue("forms.login.showMessages"),this.strategy=this.getConfigValue("forms.login.strategy"),this.socialLinks=this.getConfigValue("forms.login.socialLinks"),this.rememberMe=this.getConfigValue("forms.login.rememberMe")}return t.prototype.login=function(){var t=this;this.errors=[],this.messages=[],this.submitted=!0,this.service.authenticate(this.strategy,this.user).subscribe(function(e){t.submitted=!1,e.isSuccess()?t.messages=e.getMessages():t.errors=e.getErrors();var n=e.getRedirect();n&&setTimeout(function(){return t.router.navigateByUrl(n)},t.redirectDelay),t.cd.detectChanges()})},t.prototype.getConfigValue=function(t){return Object(s.b)(this.options,t,null)},t}())},K8rk:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var s=function(){return function(){}}()},"Lu/0":function(t,e,n){"use strict";n.d(e,"a",function(){return i});var s=n("iVvT"),i=(n("BDhN"),function(){function t(t,e,n,s){void 0===e&&(e={}),this.service=t,this.options=e,this.cd=n,this.router=s,this.redirectDelay=0,this.showMessages={},this.strategy="",this.submitted=!1,this.errors=[],this.messages=[],this.user={},this.redirectDelay=this.getConfigValue("forms.requestPassword.redirectDelay"),this.showMessages=this.getConfigValue("forms.requestPassword.showMessages"),this.strategy=this.getConfigValue("forms.requestPassword.strategy")}return t.prototype.requestPass=function(){var t=this;this.errors=this.messages=[],this.submitted=!0,this.service.requestPassword(this.strategy,this.user).subscribe(function(e){t.submitted=!1,e.isSuccess()?t.messages=e.getMessages():t.errors=e.getErrors();var n=e.getRedirect();n&&setTimeout(function(){return t.router.navigateByUrl(n)},t.redirectDelay),t.cd.detectChanges()})},t.prototype.getConfigValue=function(t){return Object(s.b)(this.options,t,null)},t}())},NGJs:function(t,e,n){"use strict";n("0ICW"),n("Abgx");var s=n("2Az5"),i=n("DYSn"),r=n("9S34"),l=n("9XlZ"),u=n("Lu/0"),o=n("8qs0"),a=(n("K8rk"),n("QEfX")),c=n("Sbqb");n.d(e,"a",function(){return s.a}),n.d(e,"f",function(){return i.a}),n.d(e,"g",function(){return l.a}),n.d(e,"j",function(){return r.a}),n.d(e,"k",function(){return u.a}),n.d(e,"l",function(){return o.a}),n.d(e,"e",function(){return a.f}),n.d(e,"b",function(){return a.b}),n.d(e,"m",function(){return a.m}),n.d(e,"c",function(){return a.c}),n.d(e,"d",function(){return a.d}),n.d(e,"h",function(){return c.b}),n.d(e,"i",function(){return c.c})}}]);