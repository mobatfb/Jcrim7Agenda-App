(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{6031:function(t,s,i){"use strict";i("68d0")},"68d0":function(t,s,i){},bb51:function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t._self._c;return s("div",{staticClass:"ma-1"},[s("center",[s("v-card",{staticClass:"mx-auto",attrs:{elevation:"1","max-width":"500"}},[s("v-img",{staticStyle:{margin:"3px"},attrs:{width:"50%",src:t.logoJcrim}}),s("v-card-text",{staticClass:"py-2 font-weight-black",staticStyle:{cursor:"default"}},[s("h1",{staticClass:"pa-3"},[t._v("UNIDAD DE CRIMINALÍSTICA")]),s("h2",[t._v("UTILITARIOS")])]),s("br"),s("v-card-text",[s("v-btn",{staticClass:"mb-4 pa-8",attrs:{block:"",color:"green",size:"x-large"},on:{click:function(s){return t.goTo("Oficios")}}},[s("h2",[t._v("NRO. OFICIO")])]),s("v-btn",{staticClass:"mb-4 pa-8",attrs:{disabled:"",block:"",color:"green",size:"x-large"},on:{click:function(s){return t.goTo("Datos")}}},[s("h2",[t._v("DATOS")])]),s("v-btn",{staticClass:"mb-4 pa-8",attrs:{disabled:"",block:"",color:"green",size:"x-large"},on:{click:function(s){return t.goTo("Gestion")}}},[s("h2",[t._v("GESTIÓN")])])],1)],1)],1)],1)},e=[],o={components:{},name:"home",data(){return{logoJcrim:i("739d")}},mounted(){},created(){this.$func.openDialog=this.openDialog,this.openDialog("news",{name:"dfdf"})},computed:{},methods:{goTo(t){this.$router.push({name:t})},contact(){window.open(this.url,"_blank")},close(){this.dialog.news=!1},openDialog(t,s){switch(this.dialog.data=s,this.close(),t){case"news":this.dialog.title="Noticias",this.dialog.news=!0;break;case"business":this.dialog.title="Negocios",this.dialog.business=!0;break;case"login":this.dialog.title="Ingresar / Iniciar Sesión",this.dialog.login=!0;break;default:break}this.dialog.active=!0}}},n=o,c=(i("6031"),i("2877")),l=Object(c["a"])(n,a,e,!1,null,"07fca1a8",null);s["default"]=l.exports}}]);
//# sourceMappingURL=home.27b2f970.js.map