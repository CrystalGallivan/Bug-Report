(function(t){function e(e){for(var a,n,i=e[0],c=e[1],l=e[2],d=0,p=[];d<i.length;d++)n=i[d],r[n]&&p.push(r[n][0]),r[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],a=!0,i=1;i<s.length;i++){var c=s[i];0!==r[c]&&(a=!1)}a&&(o.splice(e--,1),t=n(n.s=s[0]))}return t}var a={},r={app:0},o=[];function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=a,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("64a9"),r=s.n(a);r.a},"1e96":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid",attrs:{id:"app"}},[s("div",{staticClass:"row",attrs:{id:"nav"}},[t._m(0),t._m(1),s("div",{staticClass:"col-2"},[s("router-link",{attrs:{to:"/"}},[t._v("Home")])],1)]),s("router-view")],1)},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-2"},[s("img",{attrs:{src:"https://cdn.iconscout.com/icon/premium/png-256-thumb/code-bug-1-983310.png",alt:"",srcset:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-8"},[s("h1",[s("b",[t._v("BUGGIE")])])])}],n=(s("034f"),s("2877")),i={},c=Object(n["a"])(i,r,o,!1,null,null,null),l=c.exports,u=s("8c4f"),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[t._m(0),s("div",{staticClass:"row"},[s("div",{staticClass:"col-10 offset-1",attrs:{id:"log"}},[s("bug-log")],1)]),s("div",{staticClass:"row",attrs:{id:"Form"}},[s("div",{staticClass:"col-8 offset-2"},[s("bug-form")],1)])])},p=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{attrs:{"aria-label":"Page navigation example",id:"pg"}},[s("ul",{staticClass:"pagination justify-content-end"},[s("li",{staticClass:"page-item disabled"},[s("a",{staticClass:"page-link",attrs:{href:"#",tabindex:"-1"}},[t._v("Previous")])]),s("li",{staticClass:"page-item"},[s("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("1")])]),s("li",{staticClass:"page-item"},[s("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("2")])]),s("li",{staticClass:"page-item"},[s("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("3")])]),s("li",{staticClass:"page-item"},[s("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("Next")])])])])}],m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bug-form"},[s("div",{staticClass:"bug-report card"},[s("form",{staticClass:"bug-entered",on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[s("div",{staticClass:"form-group"},[t._m(0),s("input",{directives:[{name:"model",rawName:"v-model",value:t.creator,expression:"creator"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Name..."},domProps:{value:t.creator},on:{input:function(e){e.target.composing||(t.creator=e.target.value)}}})]),s("div",{staticClass:"form-group"},[t._m(1),s("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Title..."},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),s("div",{staticClass:"form-group"},[t._m(2),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"form-control",attrs:{id:"exampleFormControlTextarea1",rows:"3"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}})]),s("button",{staticClass:"btn btn-danger",attrs:{type:"submit"}},[t._v("Report!")])])])])},g=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{attrs:{for:""}},[s("b",[t._v("Reported By")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{attrs:{for:""}},[s("b",[t._v("Title")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{attrs:{for:"exampleFormControlTextarea1"}},[s("b",[t._v("Description")])])}],v={name:"BugForm",data(){return{title:"",creator:"",description:"",closed:Boolean,date:""}},mounted(){this.$store.dispatch("getAllBugs")},computed:{bugs(){return this.$store.state.bugs}},methods:{handleSubmit(){let t={title:this.title,description:this.description,creator:this.creator};this.$store.dispatch("createBug",t),this.title="",this.description="",this.creator=""}}},b=v,f=Object(n["a"])(b,m,g,!1,null,null,null),h=f.exports,_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bug-log"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-10 offset-1"},[s("table",{staticClass:"table table-sm table-dark"},[s("caption",[t._v("List of Bugs")]),t._m(0),s("tbody",t._l(t.bugs,function(e){return s("tr",{key:e._id,on:{click:function(s){return t.selectBug(e)}}},[s("th",{attrs:{scope:"row"}},[s("a",{staticClass:"page-link",attrs:{id:"bug-title",href:"#"}},[t._v(t._s(e.title))])]),s("td",[t._v(t._s(e.creator))]),0==e.closed?s("td",{staticClass:"bg-info"},[t._v("Open")]):1==e.closed?s("td",{staticClass:"bg-danger"},[t._v("Closed")]):t._e(),s("td",[t._v("\n              "+t._s(new Date(e.createdAt).toLocaleDateString())+"\n            ")])])}),0)])])])])},C=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[t._v("Title")]),s("th",{attrs:{scope:"col"}},[t._v("Reported By")]),s("th",{attrs:{scope:"col"}},[t._v("Status")]),s("th",{attrs:{scope:"col"}},[t._v("Date")])])])}],y={name:"BugLog",data(){return{}},mounted(){this.$store.dispatch("getAllBugs")},computed:{bugs(){return this.$store.state.bugs}},methods:{selectBug(t){this.$store.dispatch("setBug",t)}}},x=y,w=(s("ca80"),Object(n["a"])(x,_,C,!1,null,"7e176edb",null)),B=w.exports,$={name:"home",components:{BugForm:h,BugLog:B}},N=$,k=(s("cccb"),Object(n["a"])(N,d,p,!1,null,null,null)),O=k.exports,E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bug-report container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col",attrs:{id:"bug-detail"}},[s("div",{staticClass:"card text-center"},[s("div",{staticClass:"card-header"},[0==t.bug.closed?s("h6",[t._v("Open")]):1==t.bug.closed?s("h6",[t._v("Closed")]):t._e()]),s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v(t._s(t.bug.title))]),s("p",{staticClass:"card-text"},[t._v(t._s(t.bug.description))]),s("p",{staticClass:"card-text"},[s("small",{staticClass:"text-muted"},[t._v(t._s(t.bug.creator))])]),0==t.bug.closed?s("button",{staticClass:"btn btn-info btn-sm",attrs:{type:"button"},on:{click:function(e){return t.deleteBug(t.id)}}},[t._v("Close")]):1==t.bug.closed?s("button",{staticClass:"btn btn-info btn-sm",attrs:{type:"button"},on:{click:function(e){return t.deleteBug(t.id)}}},[t._v("Close")]):t._e()]),s("div",{staticClass:"card-footer text-muted"},[t._v("\n          "+t._s(new Date(t.bug.createdAt).toLocaleDateString())+"\n        ")])])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[0==t.bug.closed?s("note-form",{attrs:{bugId:this.id}}):t._e()],1)]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("bug-note")],1)])])},j=[],P=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bug-note"},t._l(t.notes,function(e){return s("div",{key:e._id,staticClass:"card"},[s("div",{staticClass:"card-header"},[t._v("\n      "+t._s(e.flagged)+"\n    ")]),s("div",{staticClass:"card-body"},[s("blockquote",{staticClass:"blockquote mb-0"},[s("p",[t._v(t._s(e.content))]),s("footer",{staticClass:"blockquote-footer"},[t._v(t._s(e.creator))])])])])}),0)},S=[],A={name:"BugNote",data(){return{}},mounted(){this.$store.dispatch("getAllNotes",this.$route.params.id)},computed:{notes(){return this.$store.state.notes}},methods:{}},T=A,F=Object(n["a"])(T,P,S,!1,null,null,null),D=F.exports,L=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"note-form"},[s("div",{staticClass:"note-report card"},[s("form",{staticClass:"note-entered",on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[s("div",{staticClass:"form-group"},[t._m(0),s("input",{directives:[{name:"model",rawName:"v-model",value:t.creator,expression:"creator"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Name..."},domProps:{value:t.creator},on:{input:function(e){e.target.composing||(t.creator=e.target.value)}}})]),s("div",{staticClass:"form-group"},[t._m(1),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"form-control",attrs:{id:"exampleFormControlTextarea1",rows:"3"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}})]),s("button",{directives:[{name:"show",rawName:"v-show",value:1==t.bug.closed,expression:"bug.closed == true"}],staticClass:"btn btn-danger",attrs:{type:"submit",disabled:""}},[t._v("Note!")]),s("button",{staticClass:"btn btn-danger",attrs:{type:"submit"}},[t._v("Note!")])])])])},I=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{attrs:{for:""}},[s("b",[t._v("Noted By")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{attrs:{for:"exampleFormControlTextarea1"}},[s("b",[t._v("Content")])])}],R={name:"NoteForm",props:["id"],data(){return{creator:"",content:"",flagged:"",bug:{}}},computed:{notes(){return this.$store.state.notes},bugs(){return this.$store.state.bugs}},methods:{getAllNotes(t){this.$store.dispatch("getAllNotes",this.$route.params.id)},handleSubmit(t){let e={content:this.content,creator:this.creator,bug:this.$route.params.id};this.$store.dispatch("createNote",e),this.content="",this.creator="",this.bug=""}}},M=R,q=Object(n["a"])(M,L,I,!1,null,null,null),G=q.exports,J={name:"BugReport",props:["id"],data(){return{}},mounted(){this.bug._id||this.$store.dispatch("getBugById",this.$route.params.id)},computed:{bugs(){return this.$store.state.bugs},bug(){return this.$store.state.bug}},methods:{deleteBug(t){this.$store.dispatch("deleteBug",this.$route.params.id)}},components:{BugNote:D,NoteForm:G}},U=J,H=(s("700a"),Object(n["a"])(U,E,j,!1,null,null,null)),z=H.exports;a["a"].use(u["a"]);var K=new u["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:O},{path:"/bug/:id",name:"bug",component:z}]}),Q=s("2f62"),V=s("bc3a"),W=s.n(V);let X=W.a.create({baseURL:"https://bcw-sandbox.herokuapp.com/api/TestCrystal"});a["a"].use(Q["a"]);var Y=new Q["a"].Store({state:{bug:{},bugs:[],note:{},notes:[]},mutations:{setBugs(t,e=[]){t.bugs=e},setBug(t,e){t.bug=e,K.push({name:"bug",params:{id:e._id}})},setNotes(t,e=[]){t.notes=e},setNote(t,e){t.note=e}},actions:{async getAllBugs({commit:t,dispatch:e}){try{let e=await X.get("/bugs");t("setBugs",e.data.results)}catch(s){console.log(s)}},async getBugById({commit:t,dispatch:e},s){try{let e=await X.get("/bugs/"+s);t("setBug",e.data.results)}catch(a){console.log(a)}},setBug({commit:t,dispatch:e},s){t("setBug",s)},async createBug({commit:t,dispatch:e},s){try{let t=await X.post("/bugs",s);e("getAllBugs",t.data)}catch(a){console.log(a)}},async deleteBug({commit:t,dispatch:e},s){try{await X.delete("/bugs/"+s);e("getBugById",s)}catch(a){console.log(a)}},async getAllNotes({commit:t,dispatch:e},s){try{let e=await X.get("/bugs/"+s+"/notes");t("setNotes",e.data.results)}catch(a){console.log(a)}},async createNote({commit:t,dispatch:e},s){try{let t=await X.post("/bugs/"+s.bug+"/notes",s);e("getAllNotes",t.data.results)}catch(a){console.log(a)}}}});a["a"].config.productionTip=!1,new a["a"]({router:K,store:Y,render:function(t){return t(l)}}).$mount("#app")},"64a9":function(t,e,s){},"700a":function(t,e,s){"use strict";var a=s("1e96"),r=s.n(a);r.a},ca80:function(t,e,s){"use strict";var a=s("d2e3"),r=s.n(a);r.a},cccb:function(t,e,s){"use strict";var a=s("d563"),r=s.n(a);r.a},d2e3:function(t,e,s){},d563:function(t,e,s){}});
//# sourceMappingURL=app.128a9372.js.map