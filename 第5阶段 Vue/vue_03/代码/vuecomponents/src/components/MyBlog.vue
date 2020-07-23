<template>
<h2>
    这个文章标题是{{title}}
    <MyButton :title="title"></MyButton>
</h2>
</template>

<script type="text/ecmascript-6">
import MyButton from './MyButton'
export default {
    props:['title'],//声明接收属性
    components:{
        MyButton
    }
}
</script>

<style scoped>


</style>
