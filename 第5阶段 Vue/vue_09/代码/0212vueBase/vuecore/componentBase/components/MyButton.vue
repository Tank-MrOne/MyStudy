<template>
  <!-- div如果内部只有一个标签，那么这个div是可以省略
    如果这个div当中有多个标签，那么必须存在，因为组件要求
    所有的标签必须有同一个父标签
  -->
  <button @click="count++">你点击了{{title}}{{count}}次</button>
</template>

<script type="text/ecmascript-6">
export default {
  props: ["title"],
  data() {
    return {
      count: 0
    };
  },
};
</script>

<style scoped>
</style>
