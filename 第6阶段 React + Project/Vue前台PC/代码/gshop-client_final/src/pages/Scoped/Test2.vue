<template>
  <div class="test2">
    <h2 class="t2">Test2</h2>
    <h2><span>Test2</span></h2>

    <Test3></Test3>

    <Test5></Test5>
  </div>
</template>

<script>
import Test3 from './Test3'
import Test5 from './Test5'
export default {
  name: 'Test2',
  components: {
    Test3,
    Test5
  }
}
</script>

<style lang="less" scoped>
  .test2 {
    /deep/ .t4 {
      color: blue;
    }
  }
</style>

<style scoped>
  h2 {
    color: red;
  }
  .test2 >>> .t2 {
    color: green
  } 
</style>