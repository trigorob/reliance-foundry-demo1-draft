<template>
  <div id="app">

    <!--<PlanetChart/>  -->
    <USAChartGDP />  
    <USAPredictedGDP />
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import TailwindCSSDemo from './components/TailwindCSSDemo.vue'
//import PlanetChart from './components/PlanetChart.vue'
import USAChartGDP from './components/USAChartGDP.vue'
import USAPredictedGDP from './components/USAPredictedGDP.vue'


export default {
  name: 'App',
  components: {
    //HelloWorld,
    //TailwindCSSDemo,
    //PlanetChart,
    USAChartGDP,
    USAPredictedGDP
    
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
