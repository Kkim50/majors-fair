(this["webpackJsonpmajors-react-app"]=this["webpackJsonpmajors-react-app"]||[]).push([[0],{104:function(e,t,a){},119:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a(0),r=a.n(i),s=a(12),c=a.n(s),l=(a(104),a(37)),o=a(21),h=a(16),d=a(61),j=a(60),u=(a(70),a(184)),b=a(178),g=a(176),O=a(183),m=a(185),p=a(177),v=a(120),x=a(175),f=a(5),y=a(180),C=a(172),S=a(181),w=a(182),k=a(188),D=a(82),M=a(179),F=(a(118),Object(x.a)({root:{minWidth:275,maxWidth:500},title:{fontSize:14},pos:{marginBottom:12}}),Object(f.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}}))(g.a)),N=(Object(f.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(p.a),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={value:"N/A",post:null,gotmajors_flag:!1,open:!1,given_file:"aaaa"},n.handleSubmit=n.handleSubmit.bind(Object(h.a)(n)),n.handleChange=n.handleChange.bind(Object(h.a)(n)),n}return Object(o.a)(a,[{key:"handleChange",value:function(e){console.log("Change!"),this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),console.log("new submit"),this.setState({value:e.target.value}),console.log(e.target.value),fetch("https://kimkat.dev",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({value:e.target.value,file:this.state.post})}).then((function(e){return e.json()})).then((function(e){t.setState({post:e}),t.setState({gotmajors_flag:!0})}))}},{key:"render",value:function(){var e=this.state.post,t=this.state.value,a=null,i=[];if(this.state.gotmajors_flag)for(var r in a=e[t]){var s=a[r],c=r,l=s["Zoom Link"],o=s.Majors,h=s.Minors,d=s.Certificates,j=s["Double Dawgs / Double Majors"];i.push(Object(n.jsxs)(b.a,{children:[Object(n.jsx)(g.a,{align:"right",children:c}),Object(n.jsx)(g.a,{align:"right",children:o}),Object(n.jsx)(g.a,{align:"right",children:l}),Object(n.jsx)(g.a,{align:"right",children:h}),Object(n.jsx)(g.a,{align:"right",children:d}),Object(n.jsx)(g.a,{align:"right",children:j})]}))}return Object(n.jsx)(M.a,{maxWidth:"lg",justify:"center",children:Object(n.jsx)(y.a,{children:Object(n.jsxs)(S.a,{children:[Object(n.jsxs)("div",{align:"center",children:[Object(n.jsx)(C.a,{variant:"h3",children:"Majors Fair Excel Data Parser"}),Object(n.jsx)(C.a,{variant:"caption",children:"Note: The uploading is still a work in progress and isn't implemented. The table populates correctly but may need to be double-checked for accuracy."})]}),Object(n.jsx)("div",{align:"center",children:Object(n.jsxs)(k.a,{variant:"outlined",action:"",children:[Object(n.jsxs)(D.a,{multiple:!1,value:this.state.value,onChange:this.handleSubmit,children:[Object(n.jsx)("option",{selected:!0,value:"N/A",children:"Choose one..."}),Object(n.jsx)("option",{value:"Creative",children:"Creative"}),Object(n.jsx)("option",{value:"Culture",children:"Culture"}),Object(n.jsx)("option",{value:"Life",children:"Life"}),Object(n.jsx)("option",{value:"Nature",children:"Nature"}),Object(n.jsx)("option",{value:"Technology",children:"Technology"}),Object(n.jsx)("option",{value:"Leadership",children:"Leadership"}),Object(n.jsx)("option",{value:"DoubleDawgs",children:"DoubleDawgs, FinAid, Grad School"}),Object(n.jsx)("option",{value:"Service",children:"Service"})]}),Object(n.jsx)(w.a,{htmlFor:"age-native-helper",children:"Please select a category"})]})}),Object(n.jsx)(O.a,{component:v.a,children:Object(n.jsxs)(u.a,{stickyHeader:!0,className:"Majors Fair Excel Data Parser",size:"small","aria-label":"a dense table",children:[Object(n.jsx)(m.a,{children:Object(n.jsxs)(p.a,{children:[Object(n.jsx)(F,{align:"center",children:"Name"}),Object(n.jsx)(F,{align:"center",children:"Majors"}),Object(n.jsx)(F,{align:"center",children:"Meeting Room"}),Object(n.jsx)(F,{align:"center",children:"Minors"}),Object(n.jsx)(F,{align:"center",children:"Certificates"}),Object(n.jsx)(F,{align:"center",children:"Double Dawgs/ Double Majors"})]})}),i]})})]})})})}}]),a}(r.a.Component)),P=a(9),L=a(171),T=a(186),W=a(174),B=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={username:"",password:"",redirect:!1},n.handleChange=n.handleChange.bind(Object(h.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(h.a)(n)),n}return Object(o.a)(a,[{key:"handleChange",value:function(e){this.setState({username:e.state.username,password:e.state.password})}},{key:"handleSubmit",value:function(e){e.preventDefault(),console.log("submit"),console.log(this.state.username),console.log(this.state.password),"admin"==this.state.username&&"uga24"==this.state.password&&(this.state.redirect=!0,console.log("We made it!"),c.a.render(Object(n.jsx)(N,{}),document.getElementById("root")))}},{key:"render",value:function(){var e=this;return Object(n.jsx)(L.a,{container:!0,spacing:0,direction:"row",alignItems:"center",justify:"center",style:{minHeight:"100vh"},children:Object(n.jsx)(L.a,{item:!0,xs:3,children:Object(n.jsxs)("div",{"text-align":"center",children:[Object(n.jsx)(C.a,{variant:"h4",children:"Please enter a login for access:"}),Object(n.jsx)(T.a,{type:"username",id:"standard-basic",placeholder:"Username",fullWidth:!0,name:"username",variant:"outlined",value:this.state.username,onChange:function(t){return e.setState(Object(P.a)({},t.target.name,t.target.value))}}),Object(n.jsx)(T.a,{id:"standard-basic",type:"password",placeholder:"Password",fullWidth:!0,name:"password",variant:"outlined",value:this.state.password,onChange:function(t){return e.setState(Object(P.a)({},t.target.name,t.target.value))}}),Object(n.jsx)(W.a,{onClick:function(t){e.handleSubmit(t)},variant:"contained",color:"primary",type:"submit",children:"Submit"})]})})})}}]),a}(r.a.Component),E=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,189)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),i(e),r(e),s(e)}))};c.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(B,{})}),document.getElementById("root")),E()}},[[119,1,2]]]);
//# sourceMappingURL=main.6a7f274c.chunk.js.map