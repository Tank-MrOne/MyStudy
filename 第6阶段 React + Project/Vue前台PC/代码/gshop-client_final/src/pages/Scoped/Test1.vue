<template>
  <div class="test1">
    <h2>Test1</h2>
    <Test2></Test2>
  </div>
</template>

<script>
import Test2 from './Test2'
export default {
  name: 'Test1',

  data () {
    return {
      test: true
    }
  },
  components: {
    Test2
  }
}
</script>

<style scoped>
  
</style>
