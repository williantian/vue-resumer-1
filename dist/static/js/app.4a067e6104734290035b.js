webpackJsonp([1],{GDOt:function(e,t){},KATq:function(e,t){},MPzD:function(e,t){},NHnr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("7+uW"),s={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"topbar"}},[r("div",{staticClass:"logo"},[e._v("\n   VueResumer\n ")]),e._v(" "),r("div",{staticClass:"actions"},[r("el-button",{attrs:{type:"primary"}},[e._v("注册")]),e._v(" "),r("el-button",[e._v("登陆")]),e._v(" "),r("el-button",{on:{click:e.preview}},[e._v("预览")])],1)])},staticRenderFns:[]};var i=r("VU/8")({methods:{preview:function(){this.$emit("preview")}}},s,!1,function(e){r("eI7d")},null,null).exports,o={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("个人信息")]),e._v(" "),r("el-form",[r("el-form-item",{attrs:{label:"姓名"}},[r("el-input",{model:{value:e.profile.name,callback:function(t){e.$set(e.profile,"name",t)},expression:"profile.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"城市"}},[r("el-input",{model:{value:e.profile.city,callback:function(t){e.$set(e.profile,"city",t)},expression:"profile.city"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"出生年月"}},[r("el-input",{model:{value:e.profile.birth,callback:function(t){e.$set(e.profile,"birth",t)},expression:"profile.birth"}})],1)],1)],1)},staticRenderFns:[]},l=r("VU/8")({props:["profile"]},o,!1,null,null,null).exports,a=r("fZjL"),c=r.n(a),u={props:["items","labels","title"],computed:{keys:function(){return c()(this.items[0])}},methods:{addWorkHistory:function(){var e={};this.keys.map(function(t){e[t]=""}),this.items.push(e)},removeWorkHistory:function(e){this.items.splice(e,1)}}},v={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v(e._s(e.title))]),e._v(" "),r("el-form",[e._l(e.items,function(t,n){return r("div",{staticClass:"container"},[e._l(e.keys,function(n){return r("el-form-item",{key:n,attrs:{label:e.labels[n]||n}},[r("el-input",{model:{value:t[n],callback:function(r){e.$set(t,n,r)},expression:"work[key]"}})],1)}),e._v(" "),r("i",{staticClass:"el-icon-error",on:{click:function(t){e.removeWorkHistory(n)}}}),e._v(" "),r("hr")],2)}),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.addWorkHistory}},[e._v("添加一项")])],2)],1)},staticRenderFns:[]};var m={props:["resume"],components:{ProfileEditor:l,ArrayEditor:r("VU/8")(u,v,!1,function(e){r("KATq")},"data-v-a431642e",null).exports},data:function(){return{currentTab:0,icons:["sfz","gongzuo1","dushu","xiangmu1","jiangbei","phone"]}},methods:{}},p={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"editor"}},[r("nav",[r("ol",e._l([0,1,2,3,4,5],function(t){return r("li",{class:{active:e.currentTab===t},on:{click:function(r){e.currentTab=t}}},[r("svg",{staticClass:"icon"},[r("use",{attrs:{"xlink:href":"#icon-"+e.icons[t]}})])])}))]),e._v(" "),r("ol",{staticClass:"panes"},[r("li",{class:{active:0===e.currentTab}},[r("ProfileEditor",{attrs:{profile:e.resume.profile}})],1),e._v(" "),r("li",{class:{active:1===e.currentTab}},[r("ArrayEditor",{attrs:{items:e.resume.workHistory,labels:{company:"公司",content:"工作内容"},title:"工作经历"}})],1),e._v(" "),r("li",{class:{active:2===e.currentTab}},[r("ArrayEditor",{attrs:{items:e.resume.studyHistory,labels:{school:"学校",duration:"时间",degree:"学历"},title:"学习经历"}})],1),e._v(" "),r("li",{class:{active:3===e.currentTab}},[r("ArrayEditor",{attrs:{items:e.resume.projects,labels:{name:"名称",content:"内容"},title:"项目经历"}})],1),e._v(" "),r("li",{class:{active:4===e.currentTab}},[r("ArrayEditor",{attrs:{items:e.resume.awards,labels:{name:"获奖详情"},title:"获奖情况"}})],1),e._v(" "),r("li",{class:{active:5===e.currentTab}},[r("h1",[e._v("联系方式")]),e._v(" "),r("el-form",[r("el-form-item",{attrs:{label:"QQ"}},[r("el-input",{model:{value:e.resume.contacts.QQ,callback:function(t){e.$set(e.resume.contacts,"QQ",t)},expression:"resume.contacts.QQ"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"微信"}},[r("el-input",{model:{value:e.resume.contacts.wechat,callback:function(t){e.$set(e.resume.contacts,"wechat",t)},expression:"resume.contacts.wechat"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"邮箱"}},[r("el-input",{model:{value:e.resume.contacts.email,callback:function(t){e.$set(e.resume.contacts,"email",t)},expression:"resume.contacts.email"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"电话"}},[r("el-input",{model:{value:e.resume.contacts.phone,callback:function(t){e.$set(e.resume.contacts,"phone",t)},expression:"resume.contacts.phone"}})],1)],1)],1)])])},staticRenderFns:[]};var _={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("个人信息")]),e._v(" "),r("p",[e._v(e._s(e.resume.profile.name||"请填写名字"))]),e._v(" "),r("p",[e._v(e._s(e.resume.profile.birth||"请填写出生年月")+" | "+e._s(e.resume.profile.city||"请填写城市"))]),e._v(" "),r("hr"),e._v(" "),e.filter(e.resume.workHistory).length>0?r("section",[r("h2",[e._v("工作经历")]),e._v(" "),r("ol",e._l(e.filter(e.resume.workHistory),function(t){return r("li",[e._v("\n        "+e._s(t.company)+"\n        "+e._s(t.content)+"\n      ")])}))]):e._e(),e._v(" "),e.filter(e.resume.studyHistory).length>0?r("section",[r("h2",[e._v("学习经历")]),e._v(" "),r("ol",e._l(e.filter(e.resume.studyHistory),function(t){return r("li",[e._v("\n      "+e._s(t.school)+"\n      "+e._s(t.duration)+"\n      "+e._s(t.degree)+"\n    ")])}))]):e._e(),e._v(" "),e.filter(e.resume.projects).length>0?r("section",[r("h2",[e._v("项目经历")]),e._v(" "),r("ol",e._l(e.filter(e.resume.projects),function(t){return r("li",[e._v("\n        "+e._s(t.name)+"\n        "+e._s(t.content)+"\n      ")])}))]):e._e(),e._v(" "),e.filter(e.resume.awards).length>0?r("section",[r("h2",[e._v("获奖情况")]),e._v(" "),r("ol",e._l(e.filter(e.resume.awards),function(t){return r("li",[e._v("\n        "+e._s(t.name)+"\n      ")])}))]):e._e(),e._v(" "),r("hr"),e._v(" "),r("h1",[e._v("联系方式")]),e._v(" "),r("p",[e._v(e._s(e.resume.contacts.QQ||"请填写QQ"))]),e._v(" "),r("p",[e._v(e._s(e.resume.contacts.wechat||"请填写微信"))]),e._v(" "),r("p",[e._v(e._s(e.resume.contacts.email||"请填写邮箱"))]),e._v(" "),r("p",[e._v(e._s(e.resume.contacts.phone||"请填写电话"))])])},staticRenderFns:[]};var f={data:function(){return{previewMode:!1,resume:{profile:{name:"",city:"",birth:""},workHistory:[{company:"",content:""}],studyHistory:[{school:"",duration:"",degree:""}],projects:[{name:"",content:""}],awards:[{name:""}],contacts:{QQ:"",wechat:"",email:"",phone:""}}}},methods:{preview:function(){this.previewMode=!0},exitPreview:function(){this.previewMode=!1}},components:{Topbar:i,Editor:r("VU/8")(m,p,!1,function(e){r("GDOt")},null,null).exports,Preview:r("VU/8")({props:["resume"],methods:{filter:function(e){var t=this;return e.filter(function(e){return!t.isEmpty(e)})},isEmpty:function(e){var t=!0;for(var r in e)if(e[r]){t=!1;break}return t}}},_,!1,function(e){r("bTmo")},null,null).exports}},d={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:{previewMode:e.previewMode},attrs:{id:"app"}},[r("Topbar",{staticClass:"topbar",on:{preview:e.preview}}),e._v(" "),r("main",[r("Editor",{staticClass:"editor",attrs:{resume:e.resume}}),e._v(" "),r("Preview",{staticClass:"preview",attrs:{resume:e.resume}})],1),e._v(" "),r("el-button",{staticClass:"exitPreview",on:{click:e.exitPreview}},[e._v("关闭预览")])],1)},staticRenderFns:[]};var h=r("VU/8")(f,d,!1,function(e){r("dQct")},null,null).exports,b=(r("uMhA"),r("MPzD"),r("zL8q")),y=r.n(b);r("tvR6");n.default.use(y.a),n.default.config.productionTip=!1,new n.default({el:"#app",components:{App:h},template:"<App/>"})},bTmo:function(e,t){},dQct:function(e,t){},eI7d:function(e,t){},tvR6:function(e,t){},uMhA:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.4a067e6104734290035b.js.map