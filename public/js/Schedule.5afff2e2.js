(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Schedule"],{"344b":function(t,e,a){"use strict";a("c9dc")},"6b7b":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("div",{staticStyle:{border:"1px solid black"}},[e("center",[e("table",{staticStyle:{"margin-bottom":"3px",border:"solid .5pt"}},[e("table",{staticStyle:{"margin-bottom":"5px","border-collapse":"collapse"},attrs:{name:"YEAR",cellspacing:"0",cellpadding:"0"}},[e("tr",[e("td",[e("v-btn",{attrs:{disabled:this.state.year==this.stateLimitBack.year,small:"",rounded:"",color:t.$color.primary},on:{click:function(e){t.state.year--,t.state.month=1,t.get()}}},[e("v-icon",[t._v(" mdi-arrow-left ")])],1)],1),e("td",{attrs:{width:"200"}},[e("p",{staticStyle:{margin:"0cm","text-align":"center"},attrs:{align:"center"}},[t._v(t._s(t.state.year))])]),e("td",[e("v-btn",{attrs:{disabled:this.state.year==this.stateLimitNext.year,rounded:"",small:"",color:t.$color.primary},on:{click:function(e){t.state.year++,t.get(),t.state.month=1}}},[e("v-icon",[t._v(" mdi-arrow-right ")])],1)],1)])]),e("table",{attrs:{name:"MONTH",cellspacing:"0",cellpadding:"0"}},[e("tr",[e("td",[e("v-btn",{staticStyle:{float:"right"},attrs:{disabled:this.state.year==this.stateLimitBack.year&&this.state.month==this.stateLimitBack.month,rounded:"",small:"",color:t.$color.primary},on:{click:function(e){return t.btnMonthBack()}}},[e("v-icon",[t._v(" mdi-arrow-left ")])],1)],1),e("td",{attrs:{width:"200"}},[e("p",{staticStyle:{margin:"0cm","text-align":"center"},attrs:{align:"center"},on:{change:function(e){return t.get()}}},[t._v(" "+t._s(t.calendar[t.state.year][t.state.month-1].month))])]),e("td",[e("v-btn",{staticStyle:{float:"left"},attrs:{disabled:this.state.year==this.stateLimitNext.year&&this.state.month==this.stateLimitNext.month,rounded:"",small:"",color:t.$color.primary},on:{click:function(e){return t.btnMonthNext()}}},[e("v-icon",[t._v(" mdi-arrow-right ")])],1)],1)])])]),e("div",{staticStyle:{border:"1px solid black","overflow-x":"scroll","overflow-y":"scroll",width:"100%",height:"1000px"}},[t.waitForData?t._e():e("table",{staticClass:"tableMy",staticStyle:{cursor:"default"},attrs:{name:"SCHEDULE",border:"1",cellspacing:"0",cellpadding:"0",width:"1200px"}},[e("tr",{attrs:{name:"headerDaysWeek"}},t._l(t.daysWeek,(function(a){return e("td",{directives:[{name:"show",rawName:"v-show",value:"SABADO"!=a&&"DOMINGO"!=a,expression:"day != 'SABADO' && day != 'DOMINGO'"}],key:"Day:"+a,staticClass:"tdMy",staticStyle:{"background-color":"yellow"},attrs:{width:"1000"}},[e("p",{staticStyle:{margin:"0cm","font-size":"small"},attrs:{align:"center"}},[e("b",[t._v(t._s(a))])])])})),0),t._l(6,(function(a){return e("tr",{key:"colsS:"+a,attrs:{name:"colsS:"+a}},t._l(7,(function(s){return e("td",{directives:[{name:"show",rawName:"v-show",value:s<=5,expression:"campoS <= 5"}],key:"campoS:"+s},[7*(a-1)+s>=t.calendar[t.state.year][t.state.month-1].start?e("table",{directives:[{name:"show",rawName:"v-show",value:7*(a-1)+(s+1)-t.calendar[t.state.year][t.state.month-1].start<=t.calendar[t.state.year][t.state.month-1].days,expression:"(((colS - 1) * 7) + (campoS + 1) - calendar[state.year][state.month - 1].start) <= calendar[state.year][state.month - 1].days"}],staticStyle:{"border-collapse":"collapse",margin:"2px",width:"98%"},attrs:{name:"miniTabla",border:"1",cellspacing:"0",cellpadding:"0"}},t._l(t.hours,(function(i,r){return e("tr",{key:"hour:"+i,attrs:{name:"hour:"+i}},["09:00 - 10:00"==i?e("td",{attrs:{rowspan:"4"}},[e("p",{staticStyle:{"margin-bottom":"0cm","text-align":"center"},attrs:{align:"center"}},[t._v(" "+t._s(t.returnformatDay(7*(a-1)+(s+1)-t.calendar[t.state.year][t.state.month-1].start))+" ")])]):t._e(),e("td",[e("p",{staticStyle:{margin:"0cm","font-size":"small"},attrs:{align:"center"}},[e("b",[t._v(t._s(i))])])]),t.fieldsState[7*(a-1)+(s+1)-t.calendar[t.state.year][t.state.month-1].start][r].status&&t.fieldsState[7*(a-1)+(s+1)-t.calendar[t.state.year][t.state.month-1].start][r].userId==t.$user.id?e("td",{staticStyle:{background:"yellow",border:"solid 1.0pt"}},[e("p",{staticStyle:{cursor:"pointer",margin:"0cm","font-size":"small"},attrs:{align:"center"},on:{click:function(e){t.selected.dayWeek=t.daysWeek[s-1],t.selected.day=7*(a-1)+(s+1)-t.calendar[t.state.year][t.state.month-1].start,t.selected.hour=i,t.addCite("RESERVED")}}},[e("b",[t._v("RESERVADO")])])]):t.fieldsState[7*(a-1)+(s+1)-t.calendar[t.state.year][t.state.month-1].start][r].status?e("td",{staticStyle:{background:"#C00000",border:"solid 1.0pt black",color:"white","font-size":"small"}},[e("p",{staticStyle:{cursor:"pointer",margin:"0cm"},attrs:{align:"center"},on:{click:function(e){t.selected.dayWeek=t.daysWeek[s-1],t.selected.day=7*(a-1)+(s+1)-t.calendar[t.state.year][t.state.month-1].start,t.selected.hour=i,t.addCite("OCCUPIED")}}},[e("b",{staticStyle:{"padding-left":"7px","padding-right":"7px"}},[t._v(t._s("OCUPADO"))])])]):e("td",{staticStyle:{background:"#00B050",border:"solid 1.0pt"}},[e("p",{staticStyle:{cursor:"pointer",margin:"0cm","font-size":"small"},attrs:{align:"center"},on:{click:function(e){t.selected.dayWeek=t.daysWeek[s-1],t.selected.day=7*(a-1)+(s+1)-t.calendar[t.state.year][t.state.month-1].start,t.selected.hour=i,t.addCite("AVAILABLE")}}},[e("b",[t._v("DISPONIBLE")])])])])})),0):t._e()])})),0)}))],2)])]),e("v-dialog",{attrs:{persistent:"",width:"600px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e("v-card",[e("v-toolbar",{attrs:{color:"primary",dense:""}},[e("v-toolbar-title",[t._v("RESERVAR CITA")]),e("v-spacer"),e("v-toolbar-items",[e("v-btn",{attrs:{color:"",outlined:"",icon:""},on:{click:function(e){t.dialog=!1}}},[e("v-icon",[t._v("mdi-close")])],1)],1)],1),e("center",[e("v-card-text",{staticClass:"py-2 font-weight-black",staticStyle:{cursor:"default"}},[e("h3",{staticClass:"pa-3"},[t._v(t._s(t.selected.dayWeek)+" "+t._s(t.selected.day)+" DE "+t._s(t.calendar[t.state.year][t.state.month-1].month)+" DE "+t._s(t.state.year)+" HORA: "+t._s(t.selected.hour))])]),e("v-card",{staticClass:"mx-auto",attrs:{flat:"","max-width":"90%"}},[e("table",{staticStyle:{"border-collapse":"collapse"},attrs:{cellspacing:"0",cellpadding:"0"}},[e("tr",[e("td",{staticStyle:{"padding-right":"5px"},attrs:{width:"141"}},[e("p",{staticStyle:{"margin-bottom":"0cm","text-align":"right"},attrs:{align:"right"}},[e("b",[t._v("FISCALÍA:")])])]),e("td",{staticStyle:{padding:"0cm"}},[e("v-select",{staticStyle:{"margin-bottom":"-20px"},attrs:{dense:"",label:"SELECCIONAR...",items:t.fiscalies,"return-object":!1,outlined:""},model:{value:t.formReserver.fiscalie,callback:function(e){t.$set(t.formReserver,"fiscalie",e)},expression:"formReserver.fiscalie"}})],1)]),e("tr",[e("td",{staticStyle:{"padding-right":"5px"},attrs:{width:"141"}},[e("p",{staticStyle:{"margin-bottom":"0cm","text-align":"right"},attrs:{align:"right"}},[e("b",[t._v("FISCAL:")])])]),e("td",{staticStyle:{padding:"0cm"}},[e("v-select",{staticStyle:{"margin-bottom":"-20px"},attrs:{dense:"",label:"SELECCIONAR...",items:t.fiscals,"return-object":!1,outlined:""},model:{value:t.formReserver.fiscal,callback:function(e){t.$set(t.formReserver,"fiscal",e)},expression:"formReserver.fiscal"}})],1)]),e("tr",[e("td",{staticStyle:{"padding-right":"5px"},attrs:{width:"141"}},[e("p",{staticStyle:{"margin-bottom":"0cm","text-align":"right"},attrs:{align:"right"}},[e("b",[t._v("ETAPA:")])])]),e("td",{staticStyle:{padding:"0cm"}},[e("v-select",{staticStyle:{"margin-bottom":"-20px"},attrs:{dense:"",label:"SELECCIONAR...",items:t.etaps,"return-object":!1,outlined:""},model:{value:t.formReserver.etap,callback:function(e){t.$set(t.formReserver,"etap",e)},expression:"formReserver.etap"}})],1)]),e("tr",[e("td",{staticStyle:{"padding-right":"5px"},attrs:{width:"141"}},[e("p",{staticStyle:{"margin-bottom":"0cm","text-align":"right"},attrs:{align:"right"}},[e("b",[t._v("NÚMERO I.P/I.F:")])])]),e("td",{staticStyle:{padding:"0cm"}},[e("v-text-field",{staticStyle:{"margin-bottom":"-20px"},attrs:{label:"ESCRIBIR...",dense:"",outlined:""},model:{value:t.formReserver.num,callback:function(e){t.$set(t.formReserver,"num",e)},expression:"formReserver.num"}})],1)]),e("tr",[e("td",{staticStyle:{"padding-right":"5px"},attrs:{width:"141"}},[e("p",{staticStyle:{"margin-bottom":"0cm","text-align":"right"},attrs:{align:"right"}},[e("b",[t._v("NÚMERO OFICIO:")])])]),e("td",{staticStyle:{padding:"0cm"}},[e("v-text-field",{staticStyle:{"margin-bottom":"-20px"},attrs:{label:"ESCRIBIR...",dense:"",outlined:""},model:{value:t.formReserver.nroOfice,callback:function(e){t.$set(t.formReserver,"nroOfice",e)},expression:"formReserver.nroOfice"}})],1)]),e("tr",[e("td",{staticStyle:{"padding-right":"5px"},attrs:{width:"141"}},[e("p",{staticStyle:{"margin-bottom":"0cm","text-align":"right"},attrs:{align:"right"}},[e("b",[t._v("PRESUNTO DELITO:")])])]),e("td",{staticStyle:{padding:"0cm"}},[e("v-text-field",{staticStyle:{"margin-bottom":"-20px"},attrs:{label:"ESCRIBIR...",dense:"",outlined:""},model:{value:t.formReserver.delit,callback:function(e){t.$set(t.formReserver,"delit",e)},expression:"formReserver.delit"}})],1)]),e("tr",[e("td",{staticStyle:{"padding-right":"5px"},attrs:{width:"141"}},[e("p",{staticStyle:{"margin-bottom":"0cm","text-align":"right"},attrs:{align:"right"}},[e("b",[t._v("EVIDENCIA/INDICIO:")])])]),e("td",{staticStyle:{padding:"0cm"}},[e("v-text-field",{staticStyle:{"margin-bottom":"-20px"},attrs:{label:"ESCRIBIR...",dense:"",outlined:""},model:{value:t.formReserver.evidence,callback:function(e){t.$set(t.formReserver,"evidence",e)},expression:"formReserver.evidence"}})],1)]),e("tr",[e("td",{staticStyle:{"padding-right":"5px"},attrs:{width:"141"}},[e("p",{staticStyle:{"margin-bottom":"0cm","text-align":"right"},attrs:{align:"right"}},[e("b",[t._v("INFORMACIÓN ADICIONAL:")])])]),e("td",{staticStyle:{padding:"0cm"}},[e("v-textarea",{staticStyle:{"margin-bottom":"-20px","re font-size":"12px"},attrs:{rows:"3",label:"ESCRIBIR...","no-resize":"",dense:"",outlined:""},model:{value:t.formReserver.info,callback:function(e){t.$set(t.formReserver,"info",e)},expression:"formReserver.info"}})],1)])]),e("v-card-text",[e("h1",{staticClass:"pb-3",staticStyle:{color:"red"}},[t._v(t._s(t.sms))]),e("v-checkbox",{attrs:{label:"ESTOY DE ACUERDO CON LA INFORMACIÓN INGRESADA."},model:{value:t.sure,callback:function(e){t.sure=e},expression:"sure"}}),e("v-btn",{staticClass:"mb-4 pa-8",attrs:{disabled:!t.sure,loading:t.waiting,block:"",color:"green",size:"x-large"},on:{click:function(e){return t.save()}}},[e("h2",[t._v("GUARDAR")])])],1)],1)],1)],1)],1),e("v-dialog",{attrs:{persistent:"",width:"600px"},model:{value:t.dialogShow,callback:function(e){t.dialogShow=e},expression:"dialogShow"}},[e("v-card",[e("v-toolbar",{attrs:{color:"primary",dense:""}},[e("v-toolbar-title",[t._v("CITA RESERVADA POR: "+t._s(t.formShow.userId))]),e("v-spacer"),e("v-toolbar-items",[e("v-btn",{attrs:{color:"",outlined:"",icon:""},on:{click:function(e){t.dialogShow=!1}}},[e("v-icon",[t._v("mdi-close")])],1)],1)],1),e("center",[e("v-card-text",{staticClass:"py-2 font-weight-black",staticStyle:{cursor:"default"}},[e("h3",{staticClass:"pa-3"},[t._v(t._s(t.selected.dayWeek)+" "+t._s(t.selected.day)+" DE "+t._s(t.calendar[t.state.year][t.state.month-1].month)+" DE "+t._s(t.state.year)+" HORA: "+t._s(t.selected.hour))])]),e("v-card",{staticClass:"mx-auto",attrs:{flat:"","max-width":"90%"}},[e("table",{staticStyle:{"border-collapse":"collapse"},attrs:{cellspacing:"0",cellpadding:"0"}},[e("tr",[e("td",{staticStyle:{"padding-right":"5px"},attrs:{width:"141"}},[e("p",{staticStyle:{"margin-bottom":"0cm","text-align":"right"},attrs:{align:"right"}},[e("b",[t._v("FISCALÍA:")])])]),e("td",{staticStyle:{padding:"0cm"}},[e("p",{staticStyle:{"margin-bottom":"0cm","text-align":"left"}},[t._v(" "+t._s(t.formShow.fiscalie)+" ")])])]),e("tr",[e("td",{staticStyle:{"padding-right":"5px"},attrs:{width:"141"}},[e("p",{staticStyle:{"margin-bottom":"0cm","text-align":"right"},attrs:{align:"right"}},[e("b",[t._v("FISCAL:")])])]),e("td",{staticStyle:{padding:"0cm"}},[e("p",{staticStyle:{"margin-bottom":"0cm","text-align":"left"}},[t._v(" "+t._s(t.formShow.fiscal.toUpperCase())+" ")])])]),e("tr",[e("td",{staticStyle:{"padding-right":"5px"},attrs:{width:"141"}},[e("p",{staticStyle:{"margin-bottom":"0cm","text-align":"right"},attrs:{align:"right"}},[e("b",[t._v("ETAPA:")])])]),e("td",{staticStyle:{padding:"0cm"}},[e("p",{staticStyle:{"margin-bottom":"0cm","text-align":"left"}},[t._v(" "+t._s(t.formShow.etap)+" ")])])]),e("tr",[e("td",{staticStyle:{"padding-right":"5px"},attrs:{width:"141"}},[e("p",{staticStyle:{"margin-bottom":"0cm","text-align":"right"},attrs:{align:"right"}},[e("b",[t._v("NÚMERO I.P/I.F:")])])]),e("td",{staticStyle:{padding:"0cm"}},[e("p",{staticStyle:{"margin-bottom":"0cm","text-align":"left"}},[t._v(" "+t._s(t.formShow.num)+" ")])])]),e("tr",[e("td",{staticStyle:{"padding-right":"5px"},attrs:{width:"141"}},[e("p",{staticStyle:{"margin-bottom":"0cm","text-align":"right"},attrs:{align:"right"}},[e("b",[t._v("NÚMERO OFICIO:")])])]),e("td",{staticStyle:{padding:"0cm"}},[e("p",{staticStyle:{"margin-bottom":"0cm","text-align":"left"}},[t._v(" "+t._s(t.formShow.nroOfice)+" ")])])]),e("tr",[e("td",{staticStyle:{"padding-right":"5px"},attrs:{width:"141"}},[e("p",{staticStyle:{"margin-bottom":"0cm","text-align":"right"},attrs:{align:"right"}},[e("b",[t._v("PRESUNTO DELITO:")])])]),e("td",{staticStyle:{padding:"0cm"}},[e("p",{staticStyle:{"margin-bottom":"0cm","text-align":"left"}},[t._v(" "+t._s(t.formShow.delit.toUpperCase())+" ")])])]),e("tr",[e("td",{staticStyle:{"padding-right":"5px"},attrs:{width:"141"}},[e("p",{staticStyle:{"margin-bottom":"0cm","text-align":"right"},attrs:{align:"right"}},[e("b",[t._v("EVIDENCIA/INDICIO:")])])]),e("td",{staticStyle:{padding:"0cm"}},[e("p",{staticStyle:{"margin-bottom":"0cm","text-align":"left"}},[t._v(" "+t._s(t.formShow.evidence)+" ")])])]),e("tr",[e("td",{staticStyle:{"padding-right":"5px"},attrs:{width:"141"}},[e("p",{staticStyle:{"margin-bottom":"0cm","text-align":"right"},attrs:{align:"right"}},[e("b",[t._v("INFORMACIÓN:")])])]),e("td",{staticStyle:{padding:"0cm"}},[e("p",{staticStyle:{"margin-bottom":"0cm","text-align":"left"}},[t._v(" "+t._s(t.formShow.info)+" ")])])])]),e("v-card-text",[e("h1",{staticClass:"pb-3",staticStyle:{color:"red"}},[t._v(t._s(t.sms))]),t.$user.id.toUpperCase()==t.SUPERADMIN?e("v-btn",{staticClass:"mb-4 pa-8",attrs:{loading:t.waiting,block:"",color:"green",size:"x-large"},on:{click:function(e){return t.deleter(t.formShow.id)}}},[e("h2",[t._v("ELIMINAR")])]):t._e()],1)],1)],1)],1)],1)],1)},i=[],r={name:"home",data(){return{SUPERADMIN:"JCRIM",waitForData:!0,logoJcrim:a("739d"),waitingGetData:!1,cased:"",dialog:!1,dialogShow:!1,sure:!1,waiting:!1,sms:"",dayConter:0,getdataSchedule:[{usedDay:"",status:""}],selected:{dayWeek:"",day:"",hour:""},fieldsState:[],fiscalies:["SOLUCIONES RÁPIDAS","PERSONAS Y GARANTÍAS","PATRIMONIO CIUDADANO","VIOLENCIA DE GÉNERO","ADMINISTRACIÓN PÚBLICA","ADOLESCENTES INFRACTORES","DELINCUENCIA ORGANIZADA, TRANSNACIONAL E INTERNACIONAL","FLAGRANCIA","MULTICOMPETENTE","DELITOS ACUÁTICOS","ACCIDENTES DE TRÁNSITO","OTRO"],fiscals:["Alexander Hernan Apolo Vivanco","Andrea Lucia Mendez Quintanilla","Bolivar Enrique Figueroa Arevalo","Carlos Augusto Franco León","Carlos Julio Vera Chavez","Christian Kerlin Ayala Piedra","Dalton Freddy Macas Lozano","Dannys Kleber Campoverde Requelme","Diana Sofia Sanchez Gutierrez","Edgar Benigno Morocho Rosales","Eduardo Fabian Marchant Guaman","Gabriel Santiago Pereira Gomez","Galo Francisco Torres Torres","George Vicente Espinoza Loayza","Guido Estuardo Coronel Nuñez","Heidy León Santin","Jaime Rodrigo Morocho Morocho","Jamil Rodrigo Castro Solorzano","Javier Ulises Tocto Palacios","John Hernan Gonzalez Torres","Johnny Patricio Gonzalez Galarza","Jorge Luis Cuenca Rios","Jorge Byron Mora Zumba","Jose Sachez Gutierrez","Juan Diego Garcia Amoroso","Junot Francisco Minuche Cuesta","Karla Katherine Zurita Chango","Lady Esther Cuenca Hernandez","Lenin Stalin Salinas Betancourt","Lizardo Antonio Espinoza Bustamante","Lucrecia Alexandra Espinoza Jaramillo","Luis Alberto Caivinagua Uyaguari","Manuel Lenin Espinoza Aviles","Marcos Flores Calle","Maria Elvira Carpio Erraez","Maria de Lourdes Bustamante Acaro","Maria Dolores Rodriguez Solorzano","Maria Isabel Tenesaca Blacio","Nancy Elizabeth Pesantez Marquez","Orlando Efrain Palomeque Beltran","Rene Vicente Ormaza Torres","Paola Francisca Vivanco Murillo","Paul Armando Iñiguez Apolo","Ramiro Angel Carrion Bravo","Romulo Tito Espinoza Torres","Segundo Luis Cañafe Villa","Sixto Cervilio Minga Sarango","Vilma Elcira Gonzalez Cedillo","Wilson Emiliano Cuenca Armijos","OTROS"],etaps:["INVESTIGACIÓN PREVIA","INSTRUCCIÓN FISCAL","OTROS"],formReserver:{dateUsed:"",yearUsed:"",monthUsed:"",dayUsed:"",hourUsed:"",fiscalie:"",fiscal:"",nroOfice:"",etap:"",section:"pendiente",num:"",delit:"",evidence:"",info:""},formShow:{dateUsed:"",yearUsed:"",monthUsed:"",dayUsed:"",hourUsed:"",fiscalie:"",fiscal:"",nroOfice:"",etap:"",section:"pendiente",num:"",delit:"",evidence:"",info:""},appAccess:{name:"sz7crimUser",password:"qwAS123"},testx:[{name:"aa"},{name:"bb"}],testAlternate:!0,testState:[{dayUsed:2,yearUsed:2022},{dayUsed:10,yearUsed:2022},{dayUsed:5,yearUsed:2022},{dayUsed:7,yearUsed:2022}],daysWeek:["LUNES","MARTES","MIERCOLES","JUEVES","VIERNES","SABADO","DOMINGO"],state:{year:2023,month:11,day:1,dayWeek:5},stateLimitBack:{year:2023,month:1},stateLimitNext:{year:2024,month:12},hours:["09:00 - 10:00","11:00 - 12:00","14:30 - 15:30","16:00 - 17:00"],calendar:{2023:[{month:"ENERO",start:7,days:31},{month:"FEBRERO",start:3,days:28},{month:"MARZO",start:3,days:31},{month:"ABRIL",start:6,days:30},{month:"MAYO",start:1,days:31},{month:"JUNIO",start:4,days:30},{month:"JULIO",start:6,days:31},{month:"AGOSTO",start:2,days:31},{month:"SEPTIEMBRE",start:5,days:30},{month:"OCTUBRE",start:7,days:31},{month:"NOVIEMBRE",start:3,days:30},{month:"DICIEMBRE",start:5,days:31}],2024:[{month:"ENERO",start:1,days:31},{month:"FEBRERO",start:4,days:29},{month:"MARZO",start:5,days:31},{month:"ABRIL",start:1,days:30},{month:"MAYO",start:3,days:31},{month:"JUNIO",start:6,days:30},{month:"JULIO",start:1,days:31},{month:"AGOSTO",start:4,days:31},{month:"SEPTIEMBRE",start:7,days:30},{month:"OCTUBRE",start:2,days:31},{month:"NOVIEMBRE",start:5,days:30},{month:"DICIEMBRE",start:7,days:31}]}}},mounted(){this.validUser(),this.initValFieldStatus();const t=new Date;this.state.year=t.getFullYear(),this.state.month=t.getMonth()+1,this.state.day=t.getDate(),this.state.dayWeek=t.getDay(),this.get()},created(){this.$func.openDialog=this.openDialog,this.openDialog("news",{name:"dfdf"})},computed:{},methods:{validUser(){null==this.$user.id&&this.$router.push({name:"Inicio"})},initValFieldStatus(){for(let t=0;t<50;t++)this.fieldsState.push([{status:!1,userId:null,data:{}},{status:!1,user:null,data:{}},{status:!1,user:null,data:{}},{status:!1,user:null,data:{}}])},Actioncomponents(t,e){switch(t){case"alert":this.$function["alertIni"](e.status,e.sms);break;default:break}},returnformatDay(t){return t<=9&&(t="0"+t),t},addCite(t){switch(this.sure=!1,this.waiting=!1,t){case"AVAILABLE":this.formReserver.fiscalie="",this.formReserver.fiscal="",this.formReserver.nroOfice="",this.formReserver.etap="",this.formReserver.section="",this.formReserver.num="",this.formReserver.delit="",this.formReserver.evidence="",this.formReserver.info="",this.dialog=!0;break;case"RESERVED":var e=this.formatHourIndex(this.selected.hour);this.$user.id.toUpperCase()!=this.SUPERADMIN&&this.$user.id!=this.fieldsState[this.selected.day][e].userId||(this.formShow=this.fieldsState[this.selected.day][e].data,this.dialogShow=!0);break;case"OCCUPIED":this.$user.id.toUpperCase()==this.SUPERADMIN&&(this.formShow=this.fieldsState[this.selected.day][this.formatHourIndex(this.selected.hour)].data,this.dialogShow=!0);break;default:break}},save(){this.validUser(),this.waiting=!0,this.formReserver.userId=this.$user.id,this.formReserver.dateUsed=this.selected.dayWeek+" "+this.selected.day+" DE "+this.calendar[this.state.year][this.state.month-1].month+" DE "+this.state.year+" HORA: "+this.selected.hour,this.formReserver.yearUsed=this.state.year,this.formReserver.monthUsed=this.state.month,this.formReserver.dayUsed=this.selected.day,this.formReserver.hourUsed=this.selected.hour,this.sms="",this.$http({method:"POST",url:"/save",data:{req:this.formReserver,appAccess:this.appAccess}}).then(t=>{t.data?this.showNotification(t.data.status):this.$function.alertIni("error","Error, Vuelva a intentar")}).catch(()=>{}).finally(()=>{this.waiting=!1})},async get(){this.waitForData=!0,this.resetStatus(),this.waiting=!0,this.sms="",this.$http.get("/read/"+this.state.month+"/"+this.state.year).then(t=>{t.data?t.data.schedule&&(this.setStatus(t.data.schedule),this.waiting=!1,this.dialog=!1):this.showNotification("error")}).catch(()=>{this.$function.alertIni("error","Error. vuelva a intentar"),this.waiting=!1}).finally(()=>{this.waitingGetData=!1})},deleter(t){this.sms="",this.waiting=!0,this.$http({method:"PUT",url:"/delete/"+t,data:{appAccess:this.appAccess}}).then(t=>{"deleted"==t.data.status?(this.dialogShow=!1,this.get(),this.showNotification(t.data.status)):this.$function.alertIni("error","Error, Vuelva a intentar")}).catch(()=>{}).finally(()=>{this.waiting=!1})},setStatus(t){for(let e=0;e<t.length;e++)for(let a=0;a<this.hours.length;a++){const s=this.hours[a];t[e].hourUsed==s&&(this.fieldsState[t[e].dayUsed][a].userId=t[e].userId,this.fieldsState[t[e].dayUsed][a].status=!0,this.fieldsState[t[e].dayUsed][a].data=t[e])}this.waitForData=!1},resetStatus(){for(let t=0;t<this.fieldsState.length;t++)for(let e=0;e<this.hours.length;e++)this.fieldsState[t][e].user=null,this.fieldsState[t][e].status=!1,this.fieldsState[t][e].data={}},btnMonthBack(){1==this.state.month?(this.state.year--,this.state.month=12):this.state.month--,this.get()},btnMonthNext(){12==this.state.month?(this.state.year++,this.state.month=1):this.state.month++,this.get()},goTo(t){this.$router.push({name:t})},test(t){alert(t.type)},contact(){window.open(this.url,"_blank")},close(){this.dialog.news=!1},openDialog(t,e){switch(this.dialog.data=e,this.close(),t){case"news":this.dialog.title="Noticias",this.dialog.news=!0;break;case"business":this.dialog.title="Negocios",this.dialog.business=!0;break;case"login":this.dialog.title="Ingresar / Iniciar Sesión",this.dialog.login=!0;break;default:break}this.dialog.active=!0},async createSetting(){this.$http({method:"POST",url:"/createsetting",data:{req:this.setting,appAccess:{name:"sz7crimSuperAdm",password:"aassleodffiIAs9"}}}).then(t=>{t.data?this.showNotification(t.data.status):this.$function.alertIni("error","Error, Vuelva a intentar")}).catch(()=>{}).finally(()=>{})},async getSetting(){this.sure=!1,this.waiting=!0,this.sms="",this.appAccess.password="",this.$http.get("/readsetting/"+this.appAccess.name).then(t=>{t.data?t.data.setting.gen?this.createSetting():(this.setting.numDescargo=t.data.setting.numDescargo,this.setting.numPericia=t.data.setting.numPericia,this.setting.numAdmin=t.data.setting.numAdmin,this.setting.numMemo=t.data.setting.numMemo,this.setting.numTelegram=t.data.setting.numTelegram,this.setting.numInform=t.data.setting.numInform,this.setting.numOrdService=t.data.setting.numOrdService,this.setting.numEvaluation=t.data.setting.numEvaluation,this.setting.numResolution=t.data.setting.numResolution,this.dialog=!0,this.waiting=!1):this.showNotification("error")}).catch(()=>{this.$function.alertIni("error","Error. vuelva a intentar"),this.waiting=!1}).finally(()=>{})},async updateSetting(){this.sure=!1,this.waiting=!0,this.$http({method:"PUT",url:"/updatesetting/sz7crimSuperAdm",data:{req:this.setting,appAccess:this.appAccess}}).then(t=>{t.data?this.showNotification(t.data.status):this.$function.alertIni("error","Error, Vuelva a intentar")}).catch(()=>{this.$function.alertIni("error","Error, contácte con administrador")}).finally(()=>{})},showNotification(t){switch(t){case"created":this.$function.alertIni("success","CITA RESERVADA"),this.get();break;case"updated":this.sms="INFORMACION GUARDADA CORRECTAMENTE",this.waiting=!1;break;case"password":this.sms="CLAVE INCORRECTA",this.waiting=!1;break;case"empty":this.sms="FALTAN CAMPOS POR LLENAR",this.waiting=!1;break;case"number":this.sms="INGRESE SOLO NUMEROS",this.waiting=!1;break;case"fail":this.$function.alertIni("Error","Error. vuelva a intentar"),this.waiting=!1;break;case"error":this.$function.alertIni("error","Error, contácte con administrador"),this.waiting=!1,this.sure=!1;break;case"deleted":this.$function.alertIni("success","CITA ELIMINADA"),this.waiting=!1,this.sure=!1;break;default:break}},formatHourIndex(t){for(let e=0;e<this.hours.length;e++)if(this.hours[e]==t)return e}}},n=r,o=(a("344b"),a("2877")),l=Object(o["a"])(n,s,i,!1,null,"60eae212",null);e["default"]=l.exports},c9dc:function(t,e,a){}}]);
//# sourceMappingURL=Schedule.5afff2e2.js.map