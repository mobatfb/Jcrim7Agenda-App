(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["nroofices"],{"0384":function(t,e,a){"use strict";a("a568")},3828:function(t,e,a){"use strict";a("6aac")},"65cb":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"ma-1"},[e("h3",{staticClass:"ml-5"},[t._v("OFICIOS")]),e("center",[""==t.cased?e("v-card",{staticClass:"mx-auto",attrs:{name:"ASUNTO",elevation:"1","max-width":"500"}},[e("v-card-text",{staticClass:"py-2 font-weight-black",staticStyle:{cursor:"default"}},[e("h1",{staticClass:"pa-3"},[t._v("TIPO DE ASUNTO:")])]),e("br"),e("v-card-text",[e("v-btn",{staticClass:"mb-4 pa-8",attrs:{block:"",color:"green",size:"x-large"},on:{click:function(e){t.cased="fiscal"}}},[e("h2",[t._v("FISCAL")])]),e("v-btn",{staticClass:"mb-4 pa-8",attrs:{block:"",color:"green",size:"x-large"},on:{click:function(e){t.cased="administrativo"}}},[e("h2",[t._v("ADMINISTRATIVO")])]),e("v-btn",{staticClass:"mb-4 pa-8",attrs:{block:"",color:"green",size:"x-large"},on:{click:function(e){t.cased="consulta"}}},[e("h2",[t._v("CONSULTA")])]),e("v-btn",{staticClass:"mb-4 pa-8",attrs:{loading:t.waiting,block:"",color:"green",size:"x-large"},on:{click:function(e){return t.getSetting()}}},[e("h2",[t._v("AJUSTES")])])],1)],1):t._e(),e("v-card",{staticClass:"mx-auto",attrs:{name:"ASUNTO",elevation:"1","max-width":"500"}},["fiscal"==t.cased?e("fiscal",{on:{propMethod:t.Actioncomponents}}):t._e(),"administrativo"==t.cased?e("administrativo",{on:{propMethod:t.Actioncomponents}}):t._e(),"consulta"==t.cased?e("consulta",{on:{propMethod:t.Actioncomponents}}):t._e(),""==!t.cased?e("v-btn",{staticClass:"mb-4 pa-8",attrs:{text:"",size:"large"},on:{click:function(e){t.cased=""}}},[e("h2",[t._v("VOLVER")])]):t._e()],1)],1),e("v-dialog",{attrs:{persistent:"",width:"80%"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e("v-card",[e("center",[e("v-card-title",{staticClass:"text-h5"},[t._v(" AJUSTES ")]),e("v-card-text",{staticClass:"py-2 font-weight-black",staticStyle:{cursor:"default"}},[e("h1",{staticClass:"pa-3"},[t._v("SECUENCIA DE NUMERO DE OFICIO")])]),e("br"),e("v-card",{staticClass:"mx-auto",attrs:{flat:"","max-width":"50%"}},[e("v-row",[e("v-col",{attrs:{cols:"4"}},[e("h3",[t._v("FISCALES DESDE:")])]),e("v-col",{attrs:{cols:"8"}},[e("v-text-field",{attrs:{variant:"outlined",outlined:""},model:{value:t.setting.numFiscal,callback:function(e){t.$set(t.setting,"numFiscal",e)},expression:"setting.numFiscal"}})],1)],1),e("v-row",[e("v-col",{attrs:{cols:"4"}},[e("h3",[t._v("ADMINISTRATIVO DESDE:")])]),e("v-col",{attrs:{cols:"8"}},[e("v-text-field",{attrs:{variant:"outlined",outlined:""},model:{value:t.setting.numAdmin,callback:function(e){t.$set(t.setting,"numAdmin",e)},expression:"setting.numAdmin"}})],1)],1),e("v-row",[e("v-col",{attrs:{cols:"4"}},[e("h3",[t._v("MEMO DESDE:")])]),e("v-col",{attrs:{cols:"8"}},[e("v-text-field",{attrs:{variant:"outlined",outlined:""},model:{value:t.setting.numMemo,callback:function(e){t.$set(t.setting,"numMemo",e)},expression:"setting.numMemo"}})],1)],1),e("v-row",[e("v-col",{attrs:{cols:"4"}},[e("h3",[t._v("TELEGRAMA DESDE:")])]),e("v-col",{attrs:{cols:"8"}},[e("v-text-field",{attrs:{variant:"outlined",outlined:""},model:{value:t.setting.numTelegram,callback:function(e){t.$set(t.setting,"numTelegram",e)},expression:"setting.numTelegram"}})],1)],1),e("v-row",[e("v-col",{attrs:{cols:"4"}},[e("h3",[t._v("INFORME DESDE:")])]),e("v-col",{attrs:{cols:"8"}},[e("v-text-field",{attrs:{variant:"outlined",outlined:""},model:{value:t.setting.numInform,callback:function(e){t.$set(t.setting,"numInform",e)},expression:"setting.numInform"}})],1)],1),e("v-row",[e("v-col",{attrs:{cols:"4"}},[e("h3",[t._v("ORDEN DE SERVICIO DESDE:")])]),e("v-col",{attrs:{cols:"8"}},[e("v-text-field",{attrs:{variant:"outlined",outlined:""},model:{value:t.setting.numOrdService,callback:function(e){t.$set(t.setting,"numOrdService",e)},expression:"setting.numOrdService"}})],1)],1),e("v-row",[e("v-col",{attrs:{cols:"4"}},[e("h3",[t._v("EVALUACIÓN DESDE:")])]),e("v-col",{attrs:{cols:"8"}},[e("v-text-field",{attrs:{variant:"outlined",outlined:""},model:{value:t.setting.numEvaluation,callback:function(e){t.$set(t.setting,"numEvaluation",e)},expression:"setting.numEvaluation"}})],1)],1),e("v-row",[e("v-col",{attrs:{cols:"4"}},[e("h3",[t._v("RESOLUCIÓN DESDE:")])]),e("v-col",{attrs:{cols:"8"}},[e("v-text-field",{attrs:{variant:"outlined",outlined:""},model:{value:t.setting.numResolution,callback:function(e){t.$set(t.setting,"numResolution",e)},expression:"setting.numResolution"}})],1)],1),e("v-row",[e("v-col",{attrs:{cols:"4"}},[e("h3",[t._v("CLAVE ADMINISTRATIVA:")])]),e("v-col",{attrs:{cols:"8"}},[e("v-text-field",{attrs:{type:"password",variant:"outlined",outlined:""},model:{value:t.appAccess.password,callback:function(e){t.$set(t.appAccess,"password",e)},expression:"appAccess.password"}})],1)],1),e("br"),e("v-card-text",[e("h1",{staticClass:"pb-3",staticStyle:{color:"red"}},[t._v(t._s(t.sms))]),e("v-checkbox",{attrs:{label:"ESTOY DE ACUERDO CON LA INFORMACIÓN INGRESADA."},model:{value:t.sure,callback:function(e){t.sure=e},expression:"sure"}}),e("v-btn",{staticClass:"mb-4 pa-8",attrs:{disabled:!t.sure,block:"",color:"green",size:"x-large"},on:{click:function(e){return t.updateSetting()}}},[e("h2",[t._v("GUARDAR")])]),e("v-btn",{staticClass:"mb-4 pa-8",attrs:{disabled:t.waiting,text:"",size:"large"},on:{click:function(e){t.dialog=!1}}},[e("h2",[t._v("VOLVER")])])],1)],1)],1)],1)],1)],1)},s=[],o=function(){var t=this,e=t._self._c;return e("div",[e("v-card-text",{staticClass:"py-2 font-weight-black",staticStyle:{cursor:"default"}},[e("h1",{staticClass:"pa-3"},[t._v("OFICIOS FISCALES")])]),e("br"),e("v-container",{attrs:{fluid:""}},[e("v-row",[e("v-col",{attrs:{cols:"4"}},[e("h3",[t._v("TIPO")])]),e("v-col",{attrs:{cols:"8"}},[e("v-select",{attrs:{label:"SELECCIONAR..",items:t.itemType,"item-text":"title","return-object":!1,outlined:""},model:{value:t.formOffice.type,callback:function(e){t.$set(t.formOffice,"type",e)},expression:"formOffice.type"}})],1)],1),e("v-row",[e("v-col",{attrs:{cols:"4"}},[e("h3",[t._v("SECCION")])]),e("v-col",{attrs:{cols:"8"}},[e("v-select",{attrs:{label:"SELECCIONAR..",disabled:""==t.formOffice.type,items:t.itemSeccion,"item-text":"title","return-object":!1,outlined:""},model:{value:t.formOffice.seccion,callback:function(e){t.$set(t.formOffice,"seccion",e)},expression:"formOffice.seccion"}})],1)],1),e("v-row",[e("v-col",{attrs:{cols:"4"}},[e("h3",[t._v("PERITO")])]),e("v-col",{attrs:{cols:"8"}},[e("v-select",{attrs:{label:"SELECCIONAR..",disabled:""==t.formOffice.seccion,items:t.itemPerito,"item-text":"name","return-object":!1,outlined:""},model:{value:t.formOffice.perito,callback:function(e){t.$set(t.formOffice,"perito",e)},expression:"formOffice.perito"}})],1)],1),e("v-row",[e("v-col",{attrs:{cols:"4"}},[e("h3",[t._v("DETALLES")])]),e("v-col",{attrs:{cols:"8"}},[e("v-text-field",{attrs:{variant:"outlined",label:"Info:(opcional)",outlined:""},model:{value:t.formOffice.info,callback:function(e){t.$set(t.formOffice,"info",e)},expression:"formOffice.info"}})],1)],1)],1),e("v-card-text",[e("v-btn",{staticClass:"mb-4 pa-8",attrs:{disabled:""==t.formOffice.perito||t.formOffice.info.length<3,block:"",color:"green",size:"x-large"},on:{click:function(e){t.dialog=!0,t.sure=!1}}},[e("h2",[t._v("APLICAR")])])],1),e("v-dialog",{attrs:{persistent:"",width:"80%"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e("v-card",[e("center",[e("v-card-title",{staticClass:"text-h5"},[t._v(" ¡ CONFIRMAR ")]),e("v-card",{staticClass:"mx-auto",attrs:{flat:"","max-width":"50%"}},[e("v-card-text",{staticClass:"py-2 font-weight-black",staticStyle:{cursor:"default"}},[e("h2",{staticClass:"pa-3"},[t._v("Tipo de Oficio")]),e("h2",{staticClass:"pa-3"},[e("strong",[t._v(t._s(t.formOffice.type))])])]),e("v-card-text",{staticClass:"py-2 font-weight-black",staticStyle:{cursor:"default"}},[e("h2",{staticClass:"pa-3"},[t._v("Sección")]),e("h2",{staticClass:"pa-3"},[e("strong",[t._v(t._s(t.formOffice.seccion))])])]),e("v-card-text",{staticClass:"py-2 font-weight-black",staticStyle:{cursor:"default"}},[e("h2",{staticClass:"pa-3"},[t._v("Perito")]),e("h2",{staticClass:"pa-3"},[e("strong",[t._v(t._s(t.formOffice.perito))])])]),e("v-card-text",{staticClass:"py-2 font-weight-black",staticStyle:{cursor:"default"}},[e("h2",{staticClass:"pa-3"},[t._v("Detalles")]),e("h2",{staticClass:"pa-3"},[e("strong",[t._v('" '+t._s(t.formOffice.info)+' "')])])]),e("br"),e("v-card-text",[e("v-checkbox",{attrs:{label:"ESTOY DE ACUERDO CON LA INFORMACIÓN INGRESADA."},model:{value:t.sure,callback:function(e){t.sure=e},expression:"sure"}}),e("v-btn",{staticClass:"mb-4 pa-8",attrs:{loading:t.waiting,disabled:!t.sure,block:"",color:"green",size:"x-large"},on:{click:function(e){return t.validData(t.formOffice)}}},[e("h2",[t._v("GUARDAR")])]),e("v-btn",{staticClass:"mb-4 pa-8",attrs:{disabled:t.waiting,text:"",size:"large"},on:{click:function(e){t.dialog=!1}}},[e("h2",[t._v("VOLVER")])])],1)],1)],1)],1)],1)],1)},c=[],l={components:{},data(){return{dialog:!1,sure:!1,waiting:!1,formOffice:{type:"",seccion:"",perito:"",info:"",date:""},appAccess:{name:"sz7crimadm",password:"qwAS123"},itemType:[{id:1,title:"DESCARGO"},{id:2,title:"PERICIA"}],itemSeccion:[{id:1,tag:"IOT",title:"INSPEC. OCULAR. TECN."},{id:2,tag:"AVA",title:"AUDIO, VIDEO Y AFINES"},{id:3,tag:"BAL",title:"BALISTICO"},{id:4,tag:"DOC",title:"DOCUMENTOLOGIA"},{id:5,tag:"IGM",title:"IDENT. GRABADOS/MARCAS"},{id:6,tag:"IFH",title:"IDENT. HUMANA"},{id:7,tag:"RLH",title:"REC. LUG. HECHOS"},{id:8,tag:"INF",title:"INFORMATICA"}],itemPerito:[{id:1,name:"MYOR. MASACHE"},{id:2,name:"MYOR. SALINAS"},{id:3,name:"SBOS. MOROCHO"},{id:4,name:"SGOS. COLCHA"},{id:5,name:"SGOS. MIÑO"},{id:6,name:"SGOS. YANEZ"},{id:7,name:"SGOS. TOAQUIZA"},{id:8,name:"SGOS. PUGA"},{id:9,name:"CBOP. ASANZA"},{id:10,name:"CBOP. TORRES"},{id:11,name:"CBOP. DELGADO"},{id:12,name:"CBOS. CANGO"},{id:13,name:"CBOS. MACHAI"},{id:14,name:"CBOS. PILOCO"},{id:15,name:"CBOS. ARMIJOS"},{id:16,name:"POLI. ALVAREZ"},{id:17,name:"POLI. HERRERA"},{id:18,name:"POLI. VEINTIMILLA"},{id:19,name:"POLI. PAREDES"}]}},mounted(){this.$route&&(this.route=this.$route.query.redirect)},created(){this.formTeacher.email=localStorage.getItem("teacherEmailMatras")},computed:{},methods:{submit(){},async save(t){this.$http({method:"POST",url:"/createfiscal",data:{req:t,appAccess:this.appAccess}}).then(t=>{t.data&&t.data.result,this.$emit("propMethod","alert",{status:t.data.status,sms:t.data.message})}).catch(()=>{}).finally(()=>{})},validData(t){if(this.waiting=!0,this.dataCheck(t.type)||this.dataCheck(t.seccion)||this.dataCheck(t.perito)||this.dataCheck(t.info))return this.waiting=!1,this.dialog=!1,this.sure=!1,void this.$emit("propMethod","alert",{status:"warning",sms:"LOS DATOS NO SON VALIDOS"});var e=new Date,a=e.getDay()+"/"+e.getMonth()+"/"+e.getFullYear()+" "+e.getHours()+":"+e.getMinutes()+":"+e.getSeconds(),i={type:t.type,seccion:t.seccion,perito:t.perito,info:t.info,date:a};this.save(i)},dataCheck(t){if(t.length<3)return!0}}},r=l,n=(a("83a7"),a("2877")),d=Object(n["a"])(r,o,c,!1,null,"8afb5a3e",null),f=d.exports,m=function(){var t=this,e=t._self._c;return e("div",[e("v-card-text",{staticClass:"py-2 font-weight-black",staticStyle:{cursor:"default"}},[e("h1",{staticClass:"pa-3"},[t._v("OFICIOS ADMINISTRATIVOS")])]),e("br"),e("v-container",{attrs:{fluid:""}},[e("v-row",[e("v-col",{attrs:{cols:"4"}},[e("h3",[t._v("TIPO")])]),e("v-col",{attrs:{cols:"8"}},[e("v-select",{attrs:{label:"SELECCIONAR..",items:t.itemType,"item-text":"title","return-object":!1,outlined:""},model:{value:t.formOffice.type,callback:function(e){t.$set(t.formOffice,"type",e)},expression:"formOffice.type"}})],1)],1),e("v-row",[e("v-col",{attrs:{cols:"4"}},[e("h3",[t._v("ENCARGADO")])]),e("v-col",{attrs:{cols:"8"}},[e("v-select",{attrs:{label:"SELECCIONAR..",disabled:""==t.formOffice.type,items:t.itemPerito,"item-text":"name","return-object":!1,outlined:""},model:{value:t.formOffice.perito,callback:function(e){t.$set(t.formOffice,"perito",e)},expression:"formOffice.perito"}})],1)],1),e("v-row",[e("v-col",{attrs:{cols:"4"}},[e("h3",[t._v("DETALLES")])]),e("v-col",{attrs:{cols:"8"}},[e("v-text-field",{attrs:{variant:"outlined",label:"Info:(opcional)",outlined:""},model:{value:t.formOffice.info,callback:function(e){t.$set(t.formOffice,"info",e)},expression:"formOffice.info"}})],1)],1)],1),e("v-card-text",[e("v-btn",{staticClass:"mb-4 pa-8",attrs:{disabled:""==t.formOffice.perito,block:"",color:"green",size:"x-large"},on:{click:function(e){t.dialog=!0,t.sure=!1}}},[e("h2",[t._v("APLICAR")])])],1),e("v-dialog",{attrs:{persistent:"",width:"80%"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e("v-card",[e("center",[e("v-card-title",{staticClass:"text-h5"},[t._v(" ¡ CONFIRMAR ")]),e("v-card",{staticClass:"mx-auto",attrs:{flat:"","max-width":"50%"}},[e("v-card-text",{staticClass:"py-2 font-weight-black",staticStyle:{cursor:"default"}},[e("h2",{staticClass:"pa-3"},[t._v("Tipo de Oficio")]),e("h2",{staticClass:"pa-3"},[e("strong",[t._v(t._s(t.formOffice.type))])])]),e("v-card-text",{staticClass:"py-2 font-weight-black",staticStyle:{cursor:"default"}},[e("h2",{staticClass:"pa-3"},[t._v("Encargado")]),e("h2",{staticClass:"pa-3"},[e("strong",[t._v(t._s(t.formOffice.perito))])])]),e("v-card-text",{staticClass:"py-2 font-weight-black",staticStyle:{cursor:"default"}},[e("h2",{staticClass:"pa-3"},[t._v("Detalles")]),e("h2",{staticClass:"pa-3"},[e("strong",[t._v('" '+t._s(t.formOffice.info)+' "')])])]),e("br"),e("v-card-text",[e("v-checkbox",{attrs:{label:"ESTOY DE ACUERDO CON LA INFORMACIÓN INGRESADA."},model:{value:t.sure,callback:function(e){t.sure=e},expression:"sure"}}),e("v-btn",{staticClass:"mb-4 pa-8",attrs:{disabled:!t.sure,block:"",color:"green",size:"x-large"},on:{click:function(e){t.cased="fiscal"}}},[e("h2",[t._v("GUARDAR")])]),e("v-btn",{staticClass:"mb-4 pa-8",attrs:{text:"",size:"large"},on:{click:function(e){t.dialog=!1}}},[e("h2",[t._v("VOLVER")])])],1)],1)],1)],1)],1)],1)},u=[],v={components:{},data(){return{dialog:!1,sure:!1,formOffice:{type:"",seccion:"",perito:"",info:""},itemType:[{id:1,title:"ADMINISTRATIVO"},{id:2,title:"MEMO"},{id:3,title:"TELEGRAMA"},{id:4,title:"INFORME"},{id:5,title:"ORDEN SERVICIO"},{id:6,title:"EVALUACION"},{id:7,title:"RESOLUCION"}],itemPerito:[{id:1,name:"MYOR. MASACHE"},{id:2,name:"MYOR. SALINAS"},{id:3,name:"SECRETARÍA"}]}},mounted(){this.$route&&(this.route=this.$route.query.redirect)},created(){this.formTeacher.email=localStorage.getItem("teacherEmailMatras")},computed:{},methods:{submit(){}}},O=v,h=(a("0384"),Object(n["a"])(O,m,u,!1,null,"805ffdb0",null)),p=h.exports,A=function(){var t=this,e=t._self._c;return e("div",[e("v-card-text",{staticClass:"py-2 font-weight-black",staticStyle:{cursor:"default"}},[e("h1",{staticClass:"pa-3"},[t._v("CONSULTAR")])]),e("v-row",[e("v-col",{attrs:{cols:"4"}},[e("h3",[t._v("MODO")])]),e("v-col",{attrs:{cols:"8"}},[e("v-select",{attrs:{label:"SELECCIONAR..",items:[{id:1,title:"FILTROS"},{id:2,title:"FECHA"},{id:3,title:"AVANZADO"}],"item-text":"title","item-value":"id","return-object":!1,outlined:""},model:{value:t.formOffice.mode,callback:function(e){t.$set(t.formOffice,"mode",e)},expression:"formOffice.mode"}})],1)],1),2==t.formOffice.mode?e("v-container",[e("v-row",[e("v-col",{attrs:{cols:"4"}},[e("h3",[t._v("FECHA INICIAL:")])]),e("v-col",{attrs:{cols:"8"}},[e("v-text-field",{attrs:{type:"date",variant:"outlined",outlined:"",min:"2023-01-01",max:t.dateMax},model:{value:t.formOffice.dateStart,callback:function(e){t.$set(t.formOffice,"dateStart",e)},expression:"formOffice.dateStart"}})],1)],1),e("v-row",[e("v-col",{attrs:{cols:"4"}},[e("h3",[t._v("FECHA FINAL:")])]),e("v-col",{attrs:{cols:"8"}},[e("v-text-field",{attrs:{disabled:""==t.formOffice.dateStart,type:"date",min:t.formOffice.dateStart,max:t.dateMax,variant:"outlined",outlined:""},model:{value:t.formOffice.dateEnd,callback:function(e){t.$set(t.formOffice,"dateEnd",e)},expression:"formOffice.dateEnd"}})],1)],1)],1):t._e(),3==t.formOffice.mode?e("v-container",[e("v-row",[e("v-col",{attrs:{cols:"4"}},[e("h3",[t._v("ENTRADA")])]),e("v-col",{attrs:{cols:"8"}},[e("v-text-field",{attrs:{variant:"outlined",label:"ESCRIBIR..",outlined:""},model:{value:t.formOffice.info,callback:function(e){t.$set(t.formOffice,"info",e)},expression:"formOffice.info"}})],1)],1),3==t.formOffice.mode?e("span",[t._v("Ingrese UNA SOLA palabra o serie alfa numérica con MÁS de DOS caracteres, ejemplo: 00231, AP001, EXTORCIÓN, FIRMAS.")]):t._e()],1):t._e(),1==t.formOffice.mode?e("v-container",{attrs:{fluid:""}},[e("v-row",[e("v-col",{attrs:{cols:"4"}},[e("h3",[t._v("ASUNTO")])]),e("v-col",{attrs:{cols:"8"}},[e("v-select",{attrs:{label:"SELECCIONAR..",items:t.itemSubject,"item-text":"title","return-object":!1,outlined:""},on:{change:function(e){return t.subjectChange()}},model:{value:t.formOffice.subject,callback:function(e){t.$set(t.formOffice,"subject",e)},expression:"formOffice.subject"}})],1)],1),e("v-row",[e("v-col",{attrs:{cols:"4"}},[e("h3",[t._v("TIPO")])]),e("v-col",{attrs:{cols:"8"}},[e("v-select",{attrs:{label:"SELECCIONAR..",disabled:""==t.formOffice.subject,items:t.itemType[t.formOffice.subject],"item-text":"title","return-object":!1,outlined:""},model:{value:t.formOffice.type,callback:function(e){t.$set(t.formOffice,"type",e)},expression:"formOffice.type"}})],1)],1),"FISCAL"==t.formOffice.subject?e("v-row",[e("v-col",{attrs:{cols:"4"}},[e("h3",[t._v("SECCION")])]),e("v-col",{attrs:{cols:"8"}},[e("v-select",{attrs:{label:"SELECCIONAR..",disabled:""==t.formOffice.type,items:t.itemSeccion,"item-text":"title","return-object":!1,outlined:""},model:{value:t.formOffice.seccion,callback:function(e){t.$set(t.formOffice,"seccion",e)},expression:"formOffice.seccion"}})],1)],1):t._e(),e("v-row",[e("v-col",{attrs:{cols:"4"}},[e("h3",[t._v(t._s("FISCAL"==t.formOffice.subject?"PERITO":"ENCARGADO"))])]),e("v-col",{attrs:{cols:"8"}},[e("v-select",{attrs:{label:"SELECCIONAR..",disabled:"FISCAL"==t.formOffice.subject&&""==t.formOffice.seccion||"FISCAL"!=t.formOffice.subject&&""==t.formOffice.type,items:t.itemPerito,"item-text":"name","return-object":!1,outlined:""},model:{value:t.formOffice.perito,callback:function(e){t.$set(t.formOffice,"perito",e)},expression:"formOffice.perito"}})],1)],1)],1):t._e(),e("v-card-text",[e("v-btn",{staticClass:"mb-4 pa-8",attrs:{disabled:t.validBtnSearch(t.formOffice),block:"",color:"green",size:"x-large"},on:{click:function(e){t.dialog=!0,t.sure=!1}}},[e("h2",[t._v("BUSCAR")])])],1),e("v-dialog",{attrs:{persistent:"",width:"80%"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e("v-card",[e("center",[e("v-card-title",{staticClass:"text-h5"},[t._v(" ¡ CONFIRMAR ")]),e("v-card",{staticClass:"mx-auto",attrs:{flat:"","max-width":"50%"}},[e("v-card-text",{staticClass:"py-2 font-weight-black",staticStyle:{cursor:"default"}},[e("h2",{staticClass:"pa-3"},[t._v("Tipo de Oficio")]),e("h2",{staticClass:"pa-3"},[e("strong",[t._v(t._s(t.formOffice.type))])])]),e("v-card-text",{staticClass:"py-2 font-weight-black",staticStyle:{cursor:"default"}},[e("h2",{staticClass:"pa-3"},[t._v("Sección")]),e("h2",{staticClass:"pa-3"},[e("strong",[t._v(t._s(t.formOffice.seccion))])])]),e("v-card-text",{staticClass:"py-2 font-weight-black",staticStyle:{cursor:"default"}},[e("h2",{staticClass:"pa-3"},[t._v("Perito")]),e("h2",{staticClass:"pa-3"},[e("strong",[t._v(t._s(t.formOffice.perito))])])]),e("v-card-text",{staticClass:"py-2 font-weight-black",staticStyle:{cursor:"default"}},[e("h2",{staticClass:"pa-3"},[t._v("Detalles")]),e("h2",{staticClass:"pa-3"},[e("strong",[t._v('" '+t._s(t.formOffice.info)+' "')])])]),e("br"),e("v-card-text",[e("v-checkbox",{attrs:{label:"ESTOY DE ACUERDO CON LA INFORMACIÓN INGRESADA."},model:{value:t.sure,callback:function(e){t.sure=e},expression:"sure"}}),e("v-btn",{staticClass:"mb-4 pa-8",attrs:{disabled:!t.sure,block:"",color:"green",size:"x-large"},on:{click:function(e){t.cased="fiscal"}}},[e("h2",[t._v("GUARDAR")])]),e("v-btn",{staticClass:"mb-4 pa-8",attrs:{text:"",size:"large"},on:{click:function(e){t.dialog=!1}}},[e("h2",[t._v("VOLVER")])])],1)],1)],1)],1)],1)],1)},g=[],C={components:{},data(){return{dialog:!1,sure:!1,dateMax:"2023-01-01",formOffice:{mode:"",subject:"",type:"",seccion:"",perito:"",info:"",dateStart:"",dateEnd:""},itemSubject:[{id:1,title:"FISCAL"},{id:2,title:"ADMINISTRATIVO"}],itemType:{FISCAL:[{id:1,title:"DESCARGO"},{id:2,title:"PERICIA"}],ADMINISTRATIVO:[{id:0,title:"TODOS"},{id:1,title:"ADMINISTRATIVO"},{id:2,title:"MEMO"},{id:3,title:"TELEGRAMA"},{id:4,title:"INFORME"},{id:5,title:"ORDEN SERVICIO"},{id:6,title:"EVALUACION"},{id:7,title:"RESOLUCION"}]},itemSeccion:[{id:0,tag:"IOT",title:"TODOS"},{id:1,tag:"IOT",title:"INSPEC. OCULAR. TECN."},{id:2,tag:"AVA",title:"AUDIO, VIDEO Y AFINES"},{id:3,tag:"BAL",title:"BALISTICO"},{id:4,tag:"DOC",title:"DOCUMENTOLOGIA"},{id:5,tag:"IGM",title:"IDENT. GRABADOS/MARCAS"},{id:6,tag:"IFH",title:"IDENT. HUMANA"},{id:7,tag:"RLH",title:"REC. LUG. HECHOS"},{id:8,tag:"INF",title:"INFORMATICA"}],itemPerito:[{id:0,name:"TODOS"},{id:1,name:"MYOR. MASACHE"},{id:2,name:"MYOR. SALINAS"},{id:3,name:"SBOS. MOROCHO"},{id:4,name:"SGOS. COLCHA"},{id:5,name:"SGOS. MIÑO"},{id:6,name:"SGOS. YANEZ"},{id:7,name:"SGOS. TOAQUIZA"},{id:8,name:"SGOS. PUGA"},{id:9,name:"CBOP. ASANZA"},{id:10,name:"CBOP. TORRES"},{id:11,name:"CBOP. DELGADO"},{id:12,name:"CBOS. CANGO"},{id:13,name:"CBOS. MACHAI"},{id:14,name:"CBOS. PILOCO"},{id:15,name:"CBOS. ARMIJOS"},{id:16,name:"POLI. ALVAREZ"},{id:17,name:"POLI. HERRERA"},{id:18,name:"POLI. VEINTIMILLA"},{id:19,name:"POLI. PAREDES"}]}},mounted(){this.genDateMax(),this.$route&&(this.route=this.$route.query.redirect)},created(){this.formTeacher.email=localStorage.getItem("teacherEmailMatras")},computed:{},methods:{subjectChange(){this.formOffice.type="",this.formOffice.seccion="",this.formOffice.perito=""},genDateMax(){this.dateMax=(new Date).toISOString().split("T")[0],this.dateMax=this.dateMax.replaceAll("/","-"),this.formOffice.dateStart=this.dateMax,this.formOffice.dateEnd=this.dateMax},validBtnSearch(t){switch(t.mode){case 1:if(""==t.perito)return!0;break;case 2:if(""==t.dateEnd)return!0;break;case 3:if(t.info.length<=2)return!0;break;default:return!0}},submit(){}}},S=C,b=(a("3828"),Object(n["a"])(S,A,g,!1,null,"2a2fa0ec",null)),I=b.exports,E={components:{fiscal:f,administrativo:p,consulta:I},name:"home",data(){return{logoJcrim:a("739d"),cased:"",dialog:!1,sure:!1,waiting:!1,sms:"",appAccess:{name:"sz7crimadm",password:""},setting:{numFiscal:"0001",numAdmin:"0001",numMemo:"0001",numTelegram:"0001",numInform:"0001",numOrdService:"0001",numEvaluation:"0001",numResolution:"0001"}}},mounted(){},created(){this.$func.openDialog=this.openDialog,this.openDialog("news",{name:"dfdf"})},computed:{},methods:{Actioncomponents(t,e){switch(t){case"alert":this.$function["alertIni"](e.status,e.sms);break;default:break}},goTo(t){this.$router.push({name:t})},test(t){alert(t.type)},contact(){window.open(this.url,"_blank")},close(){this.dialog.news=!1},openDialog(t,e){switch(this.dialog.data=e,this.close(),t){case"news":this.dialog.title="Noticias",this.dialog.news=!0;break;case"business":this.dialog.title="Negocios",this.dialog.business=!0;break;case"login":this.dialog.title="Ingresar / Iniciar Sesión",this.dialog.login=!0;break;default:break}this.dialog.active=!0},async createSetting(){this.$http({method:"POST",url:"/createsetting",data:{req:this.setting,appAccess:{name:this.appAccess.name,password:"aassleodffiIAs9"}}}).then(t=>{t.data?this.showNotification(t.data.status):this.$function.alertIni("error","Error, Vuelva a intentar")}).catch(()=>{}).finally(()=>{})},async getSetting(){this.sure=!1,this.waiting=!0,this.sms="",this.appAccess.password="",this.$http.get("/readsetting/"+this.appAccess.name).then(t=>{t.data&&(t.data.setting?(this.setting.numFiscal=t.data.setting.numFiscal,this.setting.numAdmin=t.data.setting.numAdmin,this.setting.numMemo=t.data.setting.numMemo,this.setting.numTelegram=t.data.setting.numTelegram,this.setting.numInform=t.data.setting.numInform,this.setting.numOrdService=t.data.setting.numOrdService,this.setting.numEvaluation=t.data.setting.numEvaluation,this.setting.numResolution=t.data.setting.numResolution,this.dialog=!0,this.waiting=!1,t.data.setting.gen&&this.createSetting()):this.showNotification("error"))}).catch(()=>{this.$function.alertIni("error","Error. vuelva a intentar"),this.waiting=!1}).finally(()=>{})},async updateSetting(){this.sure=!1,this.waiting=!0,this.$http({method:"PUT",url:"/updatesetting/"+this.appAccess.name,data:{req:this.setting,appAccess:this.appAccess}}).then(t=>{t.data?this.showNotification(t.data.status):this.$function.alertIni("error","Error, Vuelva a intentar")}).catch(()=>{this.$function.alertIni("error","Error, contácte con administrador")}).finally(()=>{})},showNotification(t){switch(t){case"created":this.waiting=!1,this.dialog=!0;break;case"updated":this.sms="INFORMACION GUARDADA CORRECTAMENTE",this.waiting=!1;break;case"password":this.sms="CLAVE INCORRECTA",this.waiting=!1;break;case"empty":this.sms="FALTAN CAMPOS POR LLENAR",this.waiting=!1;break;case"number":this.sms="INGRESE SOLO NUMEROS",this.waiting=!1;break;case"fail":this.$function.alertIni("Error","Error. vuelva a intentar"),this.waiting=!1;break;case"error":this.$function.alertIni("error","Error, contácte con administrador"),this.waiting=!1,this.sure=!1;break;default:break}}}},R=E,x=(a("dfbf"),Object(n["a"])(R,i,s,!1,null,"9d6f95d2",null));e["default"]=x.exports},"6aac":function(t,e,a){},"83a7":function(t,e,a){"use strict";a("fed0")},"9a5f":function(t,e,a){},a568:function(t,e,a){},dfbf:function(t,e,a){"use strict";a("9a5f")},fed0:function(t,e,a){}}]);
//# sourceMappingURL=nroofices.1aa953ee.js.map