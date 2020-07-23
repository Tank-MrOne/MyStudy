(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ba1b8"],{3698:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-form",{attrs:{inline:""}},[a("el-form-item",{attrs:{label:"订单号"}},[a("el-input",{attrs:{type:"text",width:"100",placeholder:"订单号",clearable:""},model:{value:e.tempSearchObj.outTradeNo,callback:function(t){e.$set(e.tempSearchObj,"outTradeNo",t)},expression:"tempSearchObj.outTradeNo"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"订单状态"}},[a("el-select",{attrs:{clearable:"",placeholder:"订单状态"},model:{value:e.tempSearchObj.orderStatus,callback:function(t){e.$set(e.tempSearchObj,"orderStatus",t)},expression:"tempSearchObj.orderStatus"}},[a("el-option",{attrs:{value:"UNPAID",label:"未支付"}}),e._v(" "),a("el-option",{attrs:{value:"PAID",label:"已支付"}}),e._v(" "),a("el-option",{attrs:{value:"WAITING_DELEVER",label:"待发货"}}),e._v(" "),a("el-option",{attrs:{value:"DELEVERED",label:"已发货"}}),e._v(" "),a("el-option",{attrs:{value:"CLOSED",label:"已关闭"}}),e._v(" "),a("el-option",{attrs:{value:"FINISHED",label:"已完结"}}),e._v(" "),a("el-option",{attrs:{value:"SPLIT",label:"已拆分"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"下单时间"}},[a("el-date-picker",{attrs:{type:"datetimerange","range-separator":"至","start-placeholder":"开始时间","end-placeholder":"结束时间","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:e.times,callback:function(t){e.times=t},expression:"times"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"收货人"}},[a("el-input",{attrs:{type:"text",width:"100",placeholder:"收货人",clearable:""},model:{value:e.tempSearchObj.consignee,callback:function(t){e.$set(e.tempSearchObj,"consignee",t)},expression:"tempSearchObj.consignee"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"收件电话"}},[a("el-input",{attrs:{type:"text",width:"100",placeholder:"收件人电话",clearable:""},model:{value:e.tempSearchObj.consigneeTel,callback:function(t){e.$set(e.tempSearchObj,"consigneeTel",t)},expression:"tempSearchObj.consigneeTel"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"送货地址"}},[a("el-input",{attrs:{type:"text",width:"150",placeholder:"送货地址",clearable:""},model:{value:e.tempSearchObj.deliveryAddress,callback:function(t){e.$set(e.tempSearchObj,"deliveryAddress",t)},expression:"tempSearchObj.deliveryAddress"}})],1),e._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.search}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{type:"default"},on:{click:e.resetSearch}},[e._v("清空")])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{border:"",stripe:"","highlight-current-row":"",data:e.orderList}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"50",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"outTradeNo",label:"订单号",width:"220"}}),e._v(" "),a("el-table-column",{attrs:{prop:"totalAmount",label:"支付金额(￥)",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"consignee",label:"收货人"}}),e._v(" "),a("el-table-column",{attrs:{prop:"createTime",label:"创建时间",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"expireTime",label:"失效时间",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"orderStatusName",label:"订单状态",width:"80"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){t.row,t.$index;return[a("hint-button",{attrs:{title:"查看",size:"mini",type:"primary",icon:"el-icon-thumb",circle:""}}),e._v(" "),a("hint-button",{attrs:{title:"修改",size:"mini",type:"primary",icon:"el-icon-edit",circle:""}}),e._v(" "),a("hint-button",{attrs:{title:"删除",size:"mini",type:"danger",icon:"el-icon-delete",circle:""}})]}}])})],1),e._v(" "),a("el-pagination",{staticStyle:{padding:"20px 0"},attrs:{"current-page":e.page,total:e.total,"page-size":e.limit,"page-sizes":[5,10,20,30,40,50,100],layout:"prev, pager, next, jumper, ->, sizes, total"},on:{"current-change":e.getOrders,"size-change":e.handleSizeChange}})],1)},r=[],i=a("db72"),n={name:"OrderList",data:function(){return{loading:!1,orderList:[],total:0,page:1,limit:10,searchObj:{},tempSearchObj:{},times:[]}},created:function(){this.getOrders()},watch:{times:function(e){2===e.length&&(this.searchObj.createTimeBegin=e[0],this.searchObj.createTimeEnd=e[1])}},methods:{search:function(){this.searchObj=Object(i["a"])({},this.tempSearchObj),this.getOrders()},handleSizeChange:function(e){this.limit=e,this.getOrders()},getOrders:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.page=t,this.loading=!0,this.$API.order.getPageList(this.page,this.limit,this.searchObj).then((function(t){e.loading=!1,e.orderList=t.data.records,e.total=t.data.total}))},resetSearch:function(){this.tempSearchObj={},this.searchObj={},this.getOrders()}}},s=n,o=a("2877"),c=Object(o["a"])(s,l,r,!1,null,null,null);t["default"]=c.exports}}]);