<template>
  <div id="baseDiv">
    <LineChart id="chartDiv" />
  </div>
</template>

<script>
import LineChart from './components/Line.vue'

export default {
  name: 'App',
  components: {
    LineChart
  }
}
</script>
<style scoped>
#baseDiv{
  display: flex;
  justify-content: center;
}

#chartDiv{
  margin-top: 10%;
  width: 50%;
  height: 50%;
}
</style>