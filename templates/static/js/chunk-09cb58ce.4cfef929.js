(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-09cb58ce"],{1157:function(e,t,s){},"22eb":function(e,t,s){"use strict";var n=s("1157"),a=s.n(n);a.a},"934e":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex"},[n("div",{staticClass:"w-1/3"},[e._v(" "+e._s(e.usersIndex)+" ")]),n("div",{staticClass:"w-1/3 flex flex-col items-center"},[n("img",{staticClass:"w-12 h-12 mt-12",attrs:{src:s("ba61")}}),e.ui.login?n("p",{staticClass:"text-xl font-semibold text-blue-500 text-center mt-10 mb-4"},[e._v("THE WORKSMAN")]):n("p",{staticClass:"text-xl font-semibold text-blue-500 text-center mt-10 mb-5"},[e._v("THE WORKSMAN USER REGISTRATION")]),e.ui.success?n("p",{staticClass:"text-green-400 font-light text-lg p-5 mb-5"},[e.user.username?e._e():n("span",[e._v(e._s(e.ui.success))])]):e._e(),e.ui.message?n("p",{staticClass:"bg-white text-red-600 font-semibold text-xs p-1"},[e._v(e._s(e.ui.message))]):e._e(),e.ui.login?n("section",{staticClass:"flex flex-col mt-4 rounded-lg"},[n("div",[n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.user.username,expression:"user.username",modifiers:{lazy:!0}}],staticClass:"input w-full mb-5",attrs:{type:"text",placeholder:"Username",focusout:e.setCookieId()},domProps:{value:e.user.username},on:{focusin:function(t){e.ui.warn=!1},change:function(t){return e.$set(e.user,"username",t.target.value)}}})]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.user.password,expression:"user.password",modifiers:{lazy:!0}}],staticClass:"input w-full",attrs:{type:"password",placeholder:"Password"},domProps:{value:e.user.password},on:{focusin:function(t){e.ui.warn=!1},change:function(t){return e.$set(e.user,"password",t.target.value)}}})]),n("button",{staticClass:"btn-primary py-2 px-3 mt-10",attrs:{type:"submit"},on:{click:e.logIn}},[e._v("LOGIN")]),n("div",[n("p",{staticClass:"bg-white text-blue-600 font-semibold text-sm p-1 cursor-pointer",on:{click:function(t){e.ui.login=!e.ui.login}}},[e._v("or register")]),e._v(" "+e._s(e.cookieid)+" "),e.user.username?n("ul",[e.usernames.has(e.user.username)?n("li",[n("span",{staticClass:"text-xl text-green-400 font-bold"},[n("fadeOut",{attrs:{info:"Ok",directive:"success",delay:e.ui.fade.fast}})],1)]):n("li",[n("span",{staticClass:"text-xl text-red-400 font-bold"},[n("fadeOut",{attrs:{info:"Invalid Username!",directive:"danger",delay:e.ui.fade.faster}})],1)])]):e._e()])]):e._e(),e.ui.login?e._e():n("section",{staticClass:"flex flex-col mt-10 rounded-lg"},[n("ul",[e._l(e.account_request.user,(function(t,s){return n("li",{key:s},[n("div","password"!=s?[n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.account_request.user[s],expression:"account_request.user[key]",modifiers:{lazy:!0}}],staticClass:"input mb-3 w-full",attrs:{type:"text",placeholder:s},domProps:{value:e.account_request.user[s]},on:{focus:function(t){e.ui.message=null},change:function(t){return e.$set(e.account_request.user,s,t.target.value)}}})]:[n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.account_request.user[s],expression:"account_request.user[key]",modifiers:{lazy:!0}}],staticClass:"input mb-3 w-full",attrs:{type:s,placeholder:s},domProps:{value:e.account_request.user[s]},on:{change:function(t){return e.$set(e.account_request.user,s,t.target.value)}}})])])})),e._l(e.account_request.contact,(function(t,s){return n("li",{key:s},[n("div",[n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.account_request.contact[s],expression:"account_request.contact[key]",modifiers:{lazy:!0}}],staticClass:"input mb-3 w-full",attrs:{type:"text",placeholder:s},domProps:{value:e.account_request.contact[s]},on:{change:function(t){return e.$set(e.account_request.contact,s,t.target.value)}}})])])}))],2),n("button",{staticClass:"btn-primary py-2 px-3 mt-5",attrs:{type:"submit"},on:{click:e.register}},[e._v("REGISTER")]),n("div",[n("p",{staticClass:"bg-white text-blue-600 font-semibold text-sm p-1 mt-3 cursor-pointer",on:{click:function(t){e.ui.login=!e.ui.login}}},[e._v("cancell")])])])]),n("div",{staticClass:"w-1/3"},[e.usernames?n("p",{staticClass:"bg-teal-300 text-teal-800"},[e._v(e._s(e.usernames))]):e._e()])])},a=[],u=(s("96cf"),s("1da1")),i=s("5530"),r=s("2f62"),o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"z-10",attrs:{id:"demo"}},[s("transition",{attrs:{name:"fade"},on:{enter:e.enter}},[e.show?s("p",["success"==e.directive?s("span",{class:e.state.success},[e._v(e._s(e.info))]):"info"==e.directive?s("span",{class:e.state.info},[e._v(e._s(e.info))]):"warning"==e.directive?s("span",{class:e.state.warning},[e._v(e._s(e.info))]):s("span",{class:e.state.danger},[e._v(e._s(e.info))])]):e._e()])],1)},l=[],c=(s("a9e3"),{props:{info:String,directive:String,delay:Number},data:function(){return{show:!1,state:{success:"bg-green-400 text-white text-m font-semibold py-2 px-3 ml-5 mt-2 rounded-lg",warning:"bg-yellow-300 text-yellow-700 text-m font-semibold py-2 px-3 ml-5 mt-2 rounded-lg",danger:"bg-red-400 text-white text-m font-light py-2 px-3 ml-5 mt-2 rounded-lg",info:"bg-blue-200 text-blue-700 text-sm font-light py-2 px-3 ml-5 mt-2 rounded-lg"}}},mounted:function(){this.fadeMe()},methods:{fadeMe:function(){this.show=!this.show},enter:function(e){var t=this;setTimeout((function(){t.show=!1}),this.delay)}}}),d=c,m=(s("22eb"),s("2877")),h=Object(m["a"])(d,o,l,!1,null,"0acd7967",null),f=h.exports,p={name:"index",components:{fadeOut:f},data:function(){return{auid:null,count:0,delay:2e4,cookieid:null,user:{authed_user:localStorage.getItem("username"),username:null,password:null},account_request:{user:{username:null,password:null,firstname:null,lastname:null},contact:{email:null,tel:null,mobile:null},meta:{created:Date.parse(Date())}},ui:{login:!0,message:null,success:null,warn:!0,fade:{slow:2e4,fast:1e4,faster:5e3,fastest:2500}}}},mounted:function(){this.$store.dispatch("loadUsersIndex"),this.autoloadUser()},computed:Object(i["a"])({},Object(r["d"])({authed_user:function(e){return e.user.user},session:function(e){return e.sessions.session}}),{},Object(r["c"])({usersIndex:"usersIndex",usernames:"usernames",currentUser:"user"})),watch:{count:function(){this.count>2&&(this.registerUser(),this.count=0)},cookieid:function(){this.user.username}},methods:{autoloadUser:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log("logged in user",e.user.authed_user),e.user.authed_user&&(e.cookieid=e.user.authed_user,e.$store.dispatch("loadSession",e.user.authed_user).then((function(t){e.ui.message="You are already Logged in !",e.$router.push("/userhome/"+t)})).catch((function(e){console.log("USER IS NOT LOGGED IN",e)})));case 2:case"end":return t.stop()}}),t)})))()},setCookieId:function(){var e=this;this.user.username&&(this.cookieid=this.user.username,console.log("REGISTERING USER",this.user.username),this.$store.dispatch("loadSession",this.user.username).then((function(t){console.log("CLIENT GOT FROM SESSION STORE",t),e.ui.message="You are already Logged in !",e.$router.push("/userhome/"+t)})).catch((function(e){console.log("USER IS NOT LOGGED IN",e)})))},logIn:function(){var e=this;if(this.usernames.has(this.user.username)&&this.user.password){console.log("LOGIN GOT",this.user.username);try{this.$store.dispatch("authUser",this.user).then((function(t){console.log("LOGIN PHASE 2",t),e.ui.message="AUTHENTICATED USER ".concat(t),e.$store.dispatch("setSession",t),setTimeout((function(){e.$store.dispatch("loadSession",t).then((function(t){console.log("COOKIE PROMISED TO LOGIN FROM STORE SESSION",t),e.$router.push("/userhome/"+t)})).catch((function(t){e.ui.message="YOU ARE NOT AUTORISED TO USE THIS PLATFORM ".concat(t)}))}),1e4)})).catch((function(t){e.ui.message="AUTHED FAILED ".concat(t.message),console.log("AUTH FAILED",t)}))}catch(t){this.ui.message=this.authed_user.message}}else this.usernames.has(this.user.username)&&!this.user.password?(this.ui.message="You Need to provide a valid Password!",this.count+=1):this.user.username?(this.ui.message="Invalid Credentials!",this.count+=1):(this.ui.message="You Need to provide Your Username!",this.count+=1)},registerUser:function(){alert("Hey Hold Up! You Failed ".concat(this.count," Login Attempts. Would you like to Register?")),this.ui.login=!this.ui.login,this.ui.message=null,this.account_request.user.username=this.user.username},register:function(){if(this.usernames.has(this.account_request.user.username))this.ui.message="Sorry That Username is already taken.",this.account_request.user.username=null;else{var e=this.account_request.user;e.contact=this.account_request.contact,e.meta=this.account_request.meta,this.$store.dispatch("registerUser",e),this.ui.login=!0,this.ui.success="Congratulations You are registered to Use The WorksMan. Please login!",this.account_request={user:{username:null,password:null,firstname:null,lastname:null},contact:{email:null,tel:null,mobile:null}}}}}},g=p,v=Object(m["a"])(g,n,a,!1,null,null,null);t["default"]=v.exports}}]);
//# sourceMappingURL=chunk-09cb58ce.4cfef929.js.map