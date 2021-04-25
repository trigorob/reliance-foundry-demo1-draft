<template>
  <div id="app">
    <Tabs />
    <!--<USAChartGDP />  
    <USAPredictedGDP />-->
  </div>
</template>

<script>
//import USAChartGDP from './components/USAChartGDP.vue'
//import USAPredictedGDP from './components/USAPredictedGDP.vue'
//import Departments from './components/Departments.vue'
import Tabs from './components/Tabs.vue'

export default {
  name: 'App',
  components: {
    //USAChartGDP,
    //USAPredictedGDP,
    Tabs
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
