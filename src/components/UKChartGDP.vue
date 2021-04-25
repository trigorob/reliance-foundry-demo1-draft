<template>
  <div id="container" class="center">
    <canvas class="chart-standard" id="uk-chart-gdp"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import UKChartData from '../uk-data.js'

export default {
  name: 'UKChartGDP',
  data() {
    return {
      UKChartData: UKChartData
    }
  },  
  mounted() {
    const ctx = document.getElementById('uk-chart-gdp');
    new Chart(ctx, this.UKChartData);
  }  
}
</script>
<style scoped>
#container {
    width: 50%;
    height: 50%;

}
</style>
