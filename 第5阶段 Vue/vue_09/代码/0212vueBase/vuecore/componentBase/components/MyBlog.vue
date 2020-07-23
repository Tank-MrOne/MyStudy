<template>
    <h2>
        这个标题是{{title}}
        <MyButton :title="title"></MyButton>
    </h2>
</template>

<script type="text/ecmascript-6">
import MyButton from './MyButton.vue'//导入的只是一个配置对象
import Vue from 'vue'
Vue.component('MyButton',MyButton) //全局组件


export default {
    props:['title'],
    components:{
        MyButton:MyButton  //局部组件
    }
}
</script>

<style scoped>


</style>
