(this["webpackJsonplanguage-partner"]=this["webpackJsonplanguage-partner"]||[]).push([[0],{173:function(e,a,t){e.exports=t(208)},202:function(e,a,t){},208:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(11),o=t.n(l),i=t(13),s=t(14),c=t(16),u=t(15),p=t(66),m=t(20),d=t(44),h=t.n(d),f=t(69),g=t(45),b=t.n(g),E=t(51);var v={init:function(){},log:function(e){console.error(e)}};b.a.interceptors.response.use(null,(function(e){return e.response&&e.response.status>=400&&422!==e.response.status&&401!==e.response.status&&e.response.status<500&&(v.log(e),E.b.error("An unexpected error occurrred,Please try again")),e.response&&422===e.response.status&&E.b.error("E-mail is registered !",{position:E.b.POSITION.TOP_CENTER}),e.response&&401===e.response.status&&E.b.error("Invalid Email or Password",{position:E.b.POSITION.TOP_CENTER}),Promise.reject(e)}));var y={login:function(e,a,t){b.a.post("/api/users/login",{email:e,password:a}).then((function(e){t(e),window.location="/home"}))},register:function(){var e=Object(f.a)(h.a.mark((function e(a){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.post("/api/users",{firstName:a.firstName,lastName:a.lastName,location:a.location,nativeLanguage:a.nativeLanguage,languageToLearn:a.languageToLearn,phoneNumber:a.phoneNumber,Gender:a.Gender,skill:a.skill,email:a.email,password:a.password,birthdate:a.birthdate}).then((function(e){e&&(E.b.success("Student Created !",{position:E.b.POSITION.TOP_CENTER}),window.location="/login")}));case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),getUsers:function(e,a){b.a.get("/api/users?access_token=".concat(e)).then((function(e){a(e)}))},getSingleUser:function(e,a,t){b.a.get("/api/users/".concat(e,"?access_token=").concat(a)).then((function(e){t(e)}))},getPosts:function(e,a){b.a.get("/api/Posts?access_token=".concat(e)).then((function(e){a(e)}))},addPost:function(e,a,t){b.a.post("/api/Posts?access_token=".concat(a),e).then((function(e){t(e)}))},updatePost:function(e,a,t){b.a.patch("/api/Posts/".concat(e.id,"?access_token=").concat(a),e).then((function(e){t(e)}))},getSinglePost:function(e,a,t){b.a.post("/api/Posts/".concat(e,"/accessTokens?access_token=").concat(a)).then((function(e){t(e)}))},uploadImage:function(e,a,t,n,r){b.a.post("/api/PostImages/upload?post_id=".concat(t,"&access_token=").concat(a,"&user_id=").concat(n),e).then((function(e){r(e)}))}},O=function(e,a){return function(t){y.getSingleUser(e,a,(function(e){t({type:"GOT_SINGLE_USER",payload:e.data})}))}},j=t(21),N=function(){return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),window.localStorage.clear(),window.location="/"},style:{fontWeight:"bold",fontSize:"35px",position:"absolute",right:"75px",top:"5px",color:"lightBlue"}},r.a.createElement("button",{title:"Log Out",style:{background:"none",border:"none",color:"red"}},r.a.createElement("i",{className:"fa fa-sign-out","aria-hidden":"true"})))},S=function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"componentDidMount",value:function(){try{this.props.auth.token&&this.props.getSingleUser(this.props.auth.user.userId,this.props.auth.token)}catch(e){console.log("ex",e)}}},{key:"render",value:function(){var e=this.props.auth.token,a=this.props.admin.user;return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark "},r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarText"},r.a.createElement("div",{className:"navbar-nav mr-auto"},!e&&r.a.createElement(r.a.Fragment,null,r.a.createElement(j.c,{style:{fontWeight:"bold",fontSize:"35px",position:"absolute",right:"90px",color:"lightGreen",display:"flex"},className:"nav-link",to:"/login"},r.a.createElement("i",{className:"fa fa-sign-in","aria-hidden":"true",title:"Login"})),r.a.createElement(j.c,{style:{fontWeight:"bold",fontSize:"35px",position:"absolute",right:"40px",color:"lightGreen",display:"flex"},className:"nav-link",to:"/Signup"},r.a.createElement("i",{className:"fa fa-user-plus","aria-hidden":"true",title:"Signup"})),r.a.createElement(j.c,{style:{fontWeight:"bold",fontSize:"35px",position:"absolute",right:"0px",color:"purple",display:"flex"},className:"nav-link",to:"/home"},r.a.createElement("i",{className:"fa fa-home","aria-hidden":"true",title:"Home"}))),e&&r.a.createElement(r.a.Fragment,null,r.a.createElement(j.c,{to:"/home/".concat(a.id),className:"nav-link",style:{fontWeight:"bold",fontSize:"35px",position:"absolute",right:"0px",color:"purple",display:"flex"}},r.a.createElement("i",{className:"fa fa-home","aria-hidden":"true",title:"Home"})),r.a.createElement("div",{style:{position:"absolute",left:"20px"}},r.a.createElement("span",{style:{color:"red",fontSize:"20px",position:"absolute",left:"0px",top:"10px"}},"Welcome\xa0",r.a.createElement("span",{style:{color:"yellow"}},"!")),r.a.createElement("span",{style:{color:"gray",fontSize:"20px",position:"absolute",left:"100px",top:"10px"}},r.a.createElement("p",{key:e},this.props.admin.user.firstName))),r.a.createElement(j.c,{to:"/profile/".concat(a.id),className:"nav-link",style:{fontWeight:"bold",fontSize:"35px",position:"absolute",right:"40px",color:"lightBlue",display:"flex"}},r.a.createElement("i",{className:"fa fa-user","aria-hidden":"true",title:"Profile"})),r.a.createElement(N,null)))))}}]),t}(n.Component),k=Object(m.b)((function(e){return{auth:e.auth,admin:e.admin}}),(function(e){return{getSingleUser:function(a,t){e(O(a,t))}}}))(S),x=t(7),w=t(28),P=t(258),C=t(18),T=t(209),L=t(5),D=function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){var e=this,a=this.props.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:function(){var a=Object(f.a)(h.a.mark((function a(t){return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),a.next=3,y.register(e.props.values);case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),className:a.container},r.a.createElement(T.a,{className:a.leftSide},r.a.createElement("h3",{style:{color:"purple"}},"Sign up"),r.a.createElement(w.b,{name:"firstName",label:"First Name",margin:"normal",htmlFor:"firstName",id:"firstName",onChange:this.props.handleChange,value:this.props.values.firstName,fullWidth:!0}),r.a.createElement(w.b,{name:"lastName",label:"Last Name",margin:"normal",htmlFor:"lastName",id:"lastName",onChange:this.props.handleChange,value:this.props.values.lastName,fullWidth:!0}),r.a.createElement(w.b,{name:"phoneNumber",htmlFor:"phoneNumber",id:"phoneNumber",type:"number",label:"Phone Number",margin:"normal",onChange:this.props.handleChange,value:this.props.values.phoneNumber,fullWidth:!0}),r.a.createElement(w.b,{name:"email",htmlFor:"email",id:"email",label:"E-mail",margin:"normal",onChange:this.props.handleChange,value:this.props.values.email,fullWidth:!0}),r.a.createElement(w.b,{type:"password",name:"password",htmlFor:"password",id:"password",label:"Password",margin:"normal",onChange:this.props.handleChange,onBlur:this.props.handleBlur,fullWidth:!0}),r.a.createElement(w.b,{className:a.birth,type:"date",name:"birthdate",htmlFor:"birthdate",id:"birthdate",margin:"normal",onChange:this.props.handleChange,value:this.props.values.birthdate,fullWidth:!0})),r.a.createElement(T.a,{className:a.rightSide},r.a.createElement(w.a,{name:"Gender",htmlFor:"Gender",id:"Gender",label:"Gender",margin:"normal",onChange:this.props.handleChange,value:this.props.values.Gender,options:[{label:"male",value:"male"},{label:"female",value:"female"}],fullWidth:!0}),r.a.createElement(w.a,{name:"location",htmlFor:"location",id:"location",label:"Location",margin:"normal",onChange:this.props.handleChange,value:this.props.values.location,options:[{value:"Brussels",label:"Brussels"},{value:"Flamish-Brabant",label:"Flamish-Brabant"},{value:"Antwerp",label:"Antwerp"},{value:"Limburg",label:"Limburg"},{value:"Luik(Liege)",label:"Luik(Liege)"},{value:"West-Flanders",label:"West-Flanders"}],fullWidth:!0}),r.a.createElement(w.a,{name:"nativeLanguage",htmlFor:"nativeLanguage",id:"nativeLanguage",label:"Native Language",margin:"normal",onChange:this.props.handleChange,value:this.props.values.nativeLanguage,options:[{label:"Dutch",value:"Dutch"},{label:"French",value:"French"},{label:"German",value:"German"},{label:"English",value:"English"}],fullWidth:!0}),r.a.createElement(w.a,{name:"languageToLearn",htmlFor:"languageToLearn",id:"languageToLearn",label:"Language To Learn",margin:"normal",onChange:this.props.handleChange,value:this.props.values.languageToLearn,options:[{label:"Dutch",value:"Dutch"},{label:"French",value:"French"},{label:"German",value:"German"},{label:"English",value:"English"}],fullWidth:!0}),r.a.createElement(w.a,{name:"skill",htmlFor:"skill",id:"skill",label:"Skill",margin:"normal",onChange:this.props.handleChange,value:this.props.values.skill,options:[{label:"IT",value:"IT"},{label:"Health",value:"Health"},{label:"Law",value:"Law"},{label:"Sports",value:"Sports"},{label:"Journalism",value:"Journalism"},{label:"Education",value:"Education"},{label:"Literature",value:"Literature"}],fullWidth:!0}),r.a.createElement("div",{className:a.Save},r.a.createElement(P.a,{type:"submit",disabled:this.props.pristine||this.props.submitting,variant:"contained",color:"secondary",style:{marginLeft:"220px"}},"Sign up")))))}}]),t}(n.Component),I=Object(m.b)((function(e){return{auth:e.auth}}))(Object(x.d)({mapPropsToValues:function(e){return{firstName:"",lastName:"",location:"",nativeLanguage:"",languageToLearn:"",phoneNumber:"",Gender:"",skill:"",email:"",password:"",birthdate:""}},validationSchema:C.b().shape({firstName:C.c().required(),lastName:C.c().required(),location:C.c().required(),nativeLanguage:C.c().required(),languageToLearn:C.c().required(),phoneNumber:C.c().required(),Gender:C.c().required(),skill:C.c().required(),email:C.c().email("E-mail is invalid").required(),password:C.c().min(6,"Password at least 8 chars").required(),birthdate:C.a().required()}),handleSubmit:function(){var e=Object(f.a)(h.a.mark((function e(a,t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.setSubmitting,t.props;case 1:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}()})(Object(L.a)((function(e){return{container:{position:"fixed",top:"50px",display:"flex",flexDirection:"row wrap",width:"80%",opacity:"80%"},Save:{position:"fixed",bottom:"140px"},leftSide:{flex:2,margin:e.spacing(2),padding:e.spacing(2)},rightSide:{flex:1,margin:e.spacing(2),padding:e.spacing(2)}}}))(D))),_=function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(f.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.props.auth.token){e.next=3;break}return e.next=3,this.props.getSingleUser(this.props.auth.user.userId,this.props.auth.token);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{style:{color:"red",position:"absolute",top:"150px",left:"300px",margin:"auto"}},r.a.createElement("span",{style:{color:"red",position:"absolute",left:"200px",marginTop:"-50px"}},"Welcome Home"),"This Page are going to be ready Soon ...!"))}}]),t}(n.Component),G=Object(m.b)((function(e){return{auth:e.auth,admin:e.admin}}),(function(e){return{getSingleUser:function(a,t){e(O(a,t))}}}))(_),F=t(27),W=t(256),U=t(257),B=t(259),q=t(260),A=t(153),R=t.n(A),z=t(151),M=t.n(z),H=t(152),V=t.n(H);function J(e){return r.a.createElement(U.a,Object.assign({button:!0,component:j.b},e))}var Y=function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(W.a,null,r.a.createElement(J,{to:"/admin"},r.a.createElement(M.a,null),r.a.createElement(B.a,null,r.a.createElement(q.a,{primary:"Dashboard"}))),r.a.createElement(J,{to:"/admin/posts"},r.a.createElement(V.a,null),r.a.createElement(B.a,null,r.a.createElement(q.a,{primary:"Posts"}))),r.a.createElement(J,{to:"/admin/users"},r.a.createElement(R.a,null),r.a.createElement(B.a,null,r.a.createElement(q.a,{primary:"Users"}))))}}]),t}(n.Component),X=t(261),K=t(262),Q=t(94),Z=t(23),ee=t.n(Z),ae=t(273),te=t(255),ne=t(154),re=t.n(ne),le=t(155),oe=t.n(le),ie=t(263),se=function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={open:!0},e.handleDrawerOpen=function(a){e.setState({open:!0})},e.handleDrawerClose=function(a){e.setState({open:!1})},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{id:"admin-page",className:e.root},r.a.createElement(X.a,{className:ee()(e.appBar,this.state.open&&e.appBarShift)},r.a.createElement(K.a,{className:e.Toolbar},r.a.createElement(te.a,{onClick:this.handleDrawerOpen},r.a.createElement(re.a,null)),r.a.createElement(Q.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0},"Control Panel"))),r.a.createElement(ae.a,{classes:{paper:ee()(e.drawerPaper,!this.state.open&&e.drawerPaperClose)},variant:"permanent",open:!0},r.a.createElement("div",{className:e.toolbarIcon},r.a.createElement(te.a,{onClick:this.handleDrawerClose},r.a.createElement(oe.a,null))),r.a.createElement(ie.a,null),r.a.createElement(Y,null)),r.a.createElement("main",{className:e.content},r.a.createElement("div",{className:e.appBarSpace}),this.props.children))}}]),t}(n.Component),ce=Object(L.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRigh:24},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},appBarSpace:e.mixins.toolbar,drawerPaper:{position:"relative",whiteSpace:"noWrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:{overflowX:"hidden",width:e.spacing(0),transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},toolbarIcon:Object(F.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"8px 8px"},e.mixins.toolbar,{backgroundColor:"lightBlue"}),content:{flexGrow:1,padding:e.spacing(3),height:"650px",backgroundColor:"lightGray",overflow:"auto"}}}))(se),ue=function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("h1",null,"You are logged in with token ",this.props.auth.token)}}]),t}(n.Component),pe=Object(m.b)((function(e){return{auth:e.auth}}),(function(e){return{}}))(Object(p.g)(ue)),me=(t(202),function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"d-flex justify-content-center h-100"},r.a.createElement("div",{style:{marginTop:"100px"},className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h3",null,"Sign In")),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:function(a){a.preventDefault(),e.props.login(e.props.values.email,e.props.values.password)}},r.a.createElement("div",{className:"input-group form-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},r.a.createElement("i",{style:{marginLeft:"5px"},className:"fa fa-user-circle-o","aria-hidden":"true"}))),r.a.createElement("input",{className:"form-control",key:1,type:"email",name:"email",placeholder:"username",onChange:this.props.handleChange,onBlur:this.props.handleBlur,errors:this.props.errors.email})),r.a.createElement("div",{className:"input-group form-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},r.a.createElement("i",{style:{marginLeft:"5px"},className:"fa fa-key"}))),r.a.createElement("input",{key:2,className:"form-control",type:"password",name:"password",placeholder:"Password",onChange:this.props.handleChange,onBlur:this.props.handleBlur,errors:this.props.errors.password})),r.a.createElement("div",{className:"row align-items-center remember"},r.a.createElement("input",{type:"checkbox"}),r.a.createElement("h5",{style:{color:"gray",marginBottom:"21px"}},r.a.createElement("span",{style:{fontSize:"15px",position:"absolute",top:"195px"}},"Remember Me"))),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{style:{marginLeft:"270px",paddingLeft:"15px"},className:"btn btn-primary"},"login")))),r.a.createElement("div",{className:"card-footer"},r.a.createElement("div",{className:"d-flex justify-content-center links"},"Don't have an account?",r.a.createElement(j.b,{to:"/signup"},"Sign Up")),r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement(j.b,{to:"#"},"Forgot your password?")))))))}}]),t}(n.Component)),de=Object(x.d)({mapPropsToValues:function(){return{email:"",password:""}},validationSchema:C.b().shape({email:C.c().email("E-mail is Invalid").required("The E-mail is required!"),password:C.c().min(6,"Your Password should be more 6").max(12,"the maximum length of Password is 12").required("Password is required ")}),handleSubmit:function(e,a){a.setSubmitting}})(Object(m.b)((function(e){return{auth:e.auth}}),(function(e){return{login:function(a,t){e(function(e,a){return function(t){y.login(e,a,(function(a){t({type:"LOGIN",payload:{email:e,token:a.data.id,userId:a.data.userId}})}))}}(a,t))}}}))(me)),he=function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{style:{color:"red",position:"absolute",top:"150px",left:"400px"}},"Your Profile Will be here !",r.a.createElement("br",null),r.a.createElement("hr",null),"Loading..."))}}]),t}(n.Component),fe=function(){return r.a.createElement("h1",null,"Not Found")},ge=function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"login-page"},this.props.children)}}]),t}(n.Component),be=t(264),Ee=t(265),ve=t(269),ye=t(266),Oe=t(267),je=t(268),Ne=t(270),Se=function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){var e=this.props,a=e.rows,t=e.columns,n=e.classes;return r.a.createElement(be.a,{component:T.a},r.a.createElement(Ee.a,{className:n.table,"aria-label":"simple table"},r.a.createElement(ye.a,null,r.a.createElement(Oe.a,null,t?t.map((function(e){return r.a.createElement(je.a,{key:e.name},e.label)})):null)),r.a.createElement(ve.a,null,a?a.map((function(e,a){return r.a.createElement(Oe.a,{key:e.id},t.map((function(t,n){return r.a.createElement(je.a,{key:a},"id"===t.name?r.a.createElement(Ne.a,{to:"/admin/posts/edit/".concat(e[t.name]),component:j.b},e[t.name]):e[t.name])})))})):null)))}}]),t}(n.Component),ke=Object(L.a)((function(e){return{table:{minWidth:650}}}))(Se),xe=[{label:"ID",name:"id"},{label:"Email",name:"email"},{label:"Name",name:"firstName"}],we=function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.auth.token)}},{key:"render",value:function(){var e=this.props.admin.users;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Users"),r.a.createElement(ke,{columns:xe,rows:e}))}}]),t}(n.Component),Pe=Object(m.b)((function(e){return{auth:e.auth,admin:e.admin}}),(function(e){return{getUsers:function(a){e(function(e){return function(a){y.getUsers(e,(function(e){console.log("res",e),a({type:"GOT_USERS",payload:e.data})}))}}(a))}}}))(we),Ce=t(271),Te=t(156),Le=t.n(Te),De=[{label:"ID",name:"id"},{label:"Title",name:"title"}],Ie=function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.getPosts(this.props.auth.token)}},{key:"render",value:function(){var e=this.props.admin.posts,a=this.props.classes;return r.a.createElement("div",null,r.a.createElement("h1",null,"Posts"),r.a.createElement(ke,{columns:De,rows:e}),r.a.createElement(Ce.a,{component:j.b,to:"/admin/posts/add",color:"secondary","aria-label":"Add",className:a.fab},r.a.createElement(Le.a,null)))}}]),t}(n.Component),_e=Object(m.b)((function(e){return{auth:e.auth,admin:e.admin}}),(function(e){return{getPosts:function(a){e(function(e){return function(a){y.getPosts(e,(function(e){a({type:"GOT_POSTS",payload:e.data})}))}}(a))}}}))(Object(L.a)((function(e){return{fab:{position:"fixed",bottom:"50px",right:"50px"}}}))(Ie)),Ge=t(158),Fe=t.n(Ge),We=t(157),Ue=t.n(We),Be=function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).uploadImage=function(a){var t=new FormData;t.append("file",a.target.files[0],(new Date).getTime().toString()+a.target.files[0].name),e.props.uploadImage(t,e.props.auth.token,e.props.admin.post.id,e.props.auth.user.uesrId)},e}return Object(s.a)(t,[{key:"componentDidUpdate",value:function(e,a){var t=this;if("add"===this.props.match.params.view&&this.props.admin.posts.filter((function(e){return e.title===t.props.values.title})).length>0){var n=this.props.admin.posts.filter((function(e){return e.title===t.props.values.title}))[0];this.props.history.push("/admin/posts/edit/"+n.dispatch)}this.props.admin.post.id!==e.admin.post.id&&(console.log("post",this.props.admin.post),this.props.setValues(e.admin.posts.map((function(e){return e.id===t.props.match.params.id?e:null}))))}},{key:"componentDidMount",value:function(e,a){"edit"===this.props.match.params.view&&this.props.match.params.id&&this.props.getSinglePost(this.props.match.params.id,this.props.auth.token)}},{key:"render",value:function(){var e=this,a=this.props.classes;return r.a.createElement("div",null,r.a.createElement(x.b,{className:a.container},r.a.createElement(T.a,{className:a.leftSide},r.a.createElement(w.b,{name:"title",label:"Title",margin:"normal",onChange:function(a){return e.props.setFieldValue("slug",a.target.value.toLowerCase().replace(/ /g,"_"))},fullWidth:!0}),r.a.createElement(w.b,{name:"slug",label:"Slug",margin:"normal"}),r.a.createElement(w.b,{name:"content",label:"Content",margin:"normal",fullWidth:!0})),r.a.createElement(T.a,{className:a.rightSide},r.a.createElement(w.a,{name:"status",label:"Status",margin:"normal",options:[{label:"Published",value:!0},{label:"Unpublished",value:!1}],fullWidth:!0}),r.a.createElement("div",{className:a.Save},r.a.createElement(P.a,{variant:"contained",color:"secondary",onClick:function(a){e.props.handleSubmit()}},r.a.createElement(Ue.a,null)," Save")),r.a.createElement("div",null,r.a.createElement(P.a,{variant:"contained",color:"secondary",onClick:function(e){$(".MyFile").trigger("click")}},r.a.createElement(Fe.a,null)," Upload Post Image"),r.a.createElement("input",{type:"file",style:{display:"none"},className:"MyFile"})))))}}]),t}(n.Component),qe=Object(p.g)(Object(m.b)((function(e){return{auth:e.auth,admin:e.admin}}),(function(e){return{addPost:function(a,t){e(function(e,a){return function(t){y.addPost(e,a,(function(e){t({type:"POST_ADDED",payload:e.data})}))}}(a,t))},updatePost:function(a,t){e(function(e,a){return function(t){y.updatePost(e,a,(function(e){t({type:"UPDATED_POST",payload:e.data})}))}}(a,t))},getSinglePost:function(a,t){e(function(e,a){return function(t){y.getSinglePost(e,a,(function(e){t({type:"GOT_SINGLE_POST",payload:e.data})}))}}(a,t))},uploadImage:function(a,t,n,r){e(function(e,a,t,n){return function(r){y.uploadImage(e,a,t,n,(function(e){r({type:"UPLOADED_IMAGE",payload:e.data})}))}}(a,t,n,r))}}}))(Object(x.d)({mapPropsToValues:function(e){return{title:e.match.params.id?e.admin.post.title:console.log("title",e.admin.posts),slug:e.match.params.id?e.admin.post.slug:"",created_at:e.match.params.id?e.admin.post.created_at:(new Date).getTime(),status:!!e.match.params.id&&e.admin.post.status,content:e.match.params.id?e.admin.post.content:""}},validationSchema:C.b().shape({title:C.c().required("Title is required"),slug:C.c().required(),content:C.c().required()}),handleSubmit:function(e,a){a.setSubmitting;var t=a.props;if("edit"===t.match.params.view){var n=Object(F.a)({},e,{id:t.match.params.id});t.updatePost(n,t.auth.token)}else t.addPost(e,t.auth.token)}})(Object(L.a)((function(e){return{container:{margin:e.spacing(3),display:"flex",flexDirection:"row wrap",width:"768px"},Save:{marginBottom:e.spacing(2)},formControl:{margin:e.spacing(1)},leftSide:{flex:2,height:"100%",margin:e.spacing(1),padding:e.spacing(3)},rightSide:{flex:1,height:"100%",margin:e.spacing(1),padding:e.spacing(3)}}}))(Be)))),Ae=(t(203),t(142),function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,null),r.a.createElement(E.a,null),r.a.createElement("main",{className:"container"},r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/Signup",component:I}),r.a.createElement(p.b,{path:"/login",render:function(a){return r.a.createElement("div",null,e.props.auth.token?r.a.createElement(p.a,{to:"/"}):r.a.createElement(ge,null,r.a.createElement(de,null)))}}),r.a.createElement(p.b,{path:"/home/:id?",component:G}),r.a.createElement(p.b,{path:"/profile/:id?",render:function(a){return r.a.createElement("div",null,e.props.auth.token?r.a.createElement(he,null):r.a.createElement(p.a,{to:"/"}))}}),r.a.createElement(p.b,{path:"/admin",render:function(a){return r.a.createElement("div",null,e.props.auth.token?r.a.createElement(ce,null,r.a.createElement(pe,null)):r.a.createElement(ge,null,r.a.createElement(de,null)))}}),r.a.createElement(p.b,{exact:!0,path:"/admin/posts",render:function(a){return r.a.createElement("div",null,e.props.auth.token?r.a.createElement(ce,null,r.a.createElement(_e,null)):r.a.createElement(ge,null,r.a.createElement(de,null)))}}),r.a.createElement(p.b,{path:"/admin/users",render:function(a){return r.a.createElement("div",null,e.props.auth.token?r.a.createElement(ce,null,r.a.createElement(Pe,null)):r.a.createElement(ge,null,r.a.createElement(de,null)))}}),r.a.createElement(p.b,{path:"/admin/posts/:view/:id?",render:function(a){return r.a.createElement("div",null,e.props.auth.token?r.a.createElement(ce,null,r.a.createElement(qe,null)):r.a.createElement(ge,null,r.a.createElement(de,null)))}}),r.a.createElement(p.b,{path:"/not-found",component:fe}),r.a.createElement(p.a,{from:"/",exact:!0,to:"/home"}),r.a.createElement(p.a,{to:"/not-found"}))))}}]),t}(n.Component)),Re=Object(m.b)((function(e){return{auth:e.auth,admin:e.admin}}),(function(e){return{}}))(Ae),ze=t(159),Me=t(40),He=t(160),Ve=t(127),Je=t(161),Ye=t.n(Je),Xe={user:{},token:null,error:null},$e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xe,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"LOGIN":return Object(F.a)({},e,{user:a.payload,token:a.payload.token});case"SHOW_ERROR":return Object(F.a)({},e,{error:a.payload});default:return e}},Ke={users:[],posts:[],post:{},user:{}},Qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ke,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GOT_USERS":return Object(F.a)({},e,{users:a.payload});case"GOT_SINGLE_USER":return Object(F.a)({},e,{user:a.payload});case"GOT_POSTS":return Object(F.a)({},e,{posts:a.payload});case"POST_ADDED":return Object(F.a)({},e,{posts:e.posts.concat(a.payload),post:a.payload});case"UPDATED_POST":return Object(F.a)({},e,{post:a.payload,posts:e.posts.map((function(e){return e.id===a.payload.id?Object(F.a)({},e,{},a.payload):e}))});case"GOT_SINGLE_POST":return Object(F.a)({},e,{post:a.payload});case"UPLOADED_IMAGE":return Object(F.a)({},e,{post:Object(F.a)({},e.post,{PostImage:[a.payload]})});default:return e}},Ze=Object(Me.c)({auth:$e,admin:Qe}),ea={key:"root",storage:Ye.a},aa=Object(Ve.a)(ea,Ze),ta=(t(206),t(207),function(){var e=Object(Me.d)(aa,Object(Me.a)(He.a));return{store:e,persistor:Object(Ve.b)(e)}}()),na=ta.store,ra=ta.persistor;o.a.render(r.a.createElement(m.a,{store:na},r.a.createElement(ze.a,{loading:null,persistor:ra},r.a.createElement(j.a,null,r.a.createElement(Re,null)))),document.getElementById("root"))}},[[173,1,2]]]);