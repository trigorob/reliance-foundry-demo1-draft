<template>
  <div id="container" class="center paddingUp paddingDown">
    <canvas class="chart-standard" id="usa-chart-gdp"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import USAChartData from '../usa-data.js'

export default {
  name: 'USAChartGDP',
  data() {
    return {
      USAChartData: USAChartData
    }
  },  
  mounted() {
    const ctx = document.getElementById('usa-chart-gdp');
    new Chart(ctx, this.USAChartData);
  }  
}
</script>
<style scoped>
#container {
    width: 50%;
    height: 50%;

}
</style>