<template>
  <div id="container" class="center paddingUp paddingDown">
    <canvas class="chart-standard" id="usa-predictions-gdp"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import USAPredictedData from '../usa-data-predictions.js'

export default {
  name: 'USAPredictedGDP',
  data() {
    return {
      USAPredictedData: USAPredictedData
    }
  },  
  mounted() {
    const ctx = document.getElementById('usa-predictions-gdp');
    new Chart(ctx, this.USAPredictedData);
  }  
}
</script>
<style scoped>
#container {
    width: 50%;
    height: 50%;

}
</style>
