(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"66e3":function(t,e,s){"use strict";s("6f04")},"6f04":function(t,e,s){},bb51:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"ma-1"},[e("center",[e("v-card",{staticClass:"mx-auto",attrs:{elevation:"1","max-width":"400"}},[e("v-img",{staticStyle:{margin:"3px"},attrs:{width:"40%",src:t.logoJcrim}}),e("v-card-text",{staticClass:"py-2 font-weight-black",staticStyle:{cursor:"default"}},[e("h2",{staticClass:"pa-3"},[t._v("UNIDAD DE CRIMINALÍSTICA")]),e("h3",{staticClass:"pa-3"},[t._v("TURNOS PARA PERICIAS")]),e("h4",[t._v("AUDIO, VIDEO Y AFINES")])]),e("br"),e("v-card-text",[e("v-text-field",{staticClass:"centered-input",staticStyle:{"font-size":"large"},attrs:{variant:"outlined",label:"Identificacion",outlined:""},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.goTo("Agenda")}},model:{value:t.user,callback:function(e){t.user=e},expression:"user"}}),e("v-btn",{staticClass:"mb-4 pa-8",attrs:{disabled:t.user.length<4,block:"",color:"green",size:"x-large"},on:{click:function(e){return t.goTo("Agenda")}}},[e("h2",[t._v("INGRESAR")])])],1)],1)],1)],1)},a=[],n={components:{},name:"home",data(){return{logoJcrim:s("739d"),user:""}},mounted(){},created(){this.$func.openDialog=this.openDialog,this.openDialog("news",{name:"dfdf"})},computed:{},methods:{goTo(t){this.user.length<4||(this.$user.id=this.user,this.$router.push({name:t}))},contact(){window.open(this.url,"_blank")},close(){this.dialog.news=!1},openDialog(t,e){switch(this.dialog.data=e,this.close(),t){case"news":this.dialog.title="Noticias",this.dialog.news=!0;break;case"business":this.dialog.title="Negocios",this.dialog.business=!0;break;case"login":this.dialog.title="Ingresar / Iniciar Sesión",this.dialog.login=!0;break;default:break}this.dialog.active=!0}}},o=n,l=(s("66e3"),s("2877")),c=Object(l["a"])(o,i,a,!1,null,"d30492aa",null);e["default"]=c.exports}}]);
//# sourceMappingURL=home.e5435bc3.js.map