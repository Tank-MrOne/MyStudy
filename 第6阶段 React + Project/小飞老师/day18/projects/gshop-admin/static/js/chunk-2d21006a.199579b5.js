(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21006a"],{b5ab:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("el-input",{attrs:{disabled:"",value:e.$route.query.roleName}}),e._v(" "),s("el-tree",{ref:"tree",staticStyle:{margin:"20px 0"},attrs:{data:e.allPermissions,"node-key":"id","show-checkbox":"","default-expand-all":"",props:e.defaultProps}}),e._v(" "),s("el-button",{attrs:{loading:e.loading,type:"primary"},on:{click:e.save}},[e._v("保存")]),e._v(" "),s("el-button",{on:{click:function(t){return e.$router.replace("/acl/role/list")}}},[e._v("取消")])],1)},n=[],r=(s("a481"),{name:"roleAuth",data:function(){return{loading:!1,allPermissions:[],defaultProps:{children:"children",label:"name"}}},created:function(){this.init()},methods:{init:function(){var e=this.$route.params.id;this.getPermissions(e)},getPermissions:function(e){var t=this;this.$API.permission.toAssign(e).then((function(e){var s=e.data.children;t.allPermissions=s;var i=t.getCheckedIds(s);t.$refs.tree.setCheckedKeys(i)}))},getCheckedIds:function(e){var t=this,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.reduce((function(e,i){return i.select&&4===i.level?e.push(i.id):i.children&&t.getCheckedIds(i.children,s),e}),s)},save:function(){var e=this,t=this.$refs.tree.getCheckedKeys().join(",");this.loading=!0,this.$API.permission.doAssign(this.$route.params.id,t).then((function(t){e.loading=!1,e.$message.success(t.$message||"分配权限成功"),e.$router.replace("/acl/role/list")}))}}}),a=r,l=s("2877"),o=Object(l["a"])(a,i,n,!1,null,null,null);t["default"]=o.exports}}]);