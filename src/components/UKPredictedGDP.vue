<template>
  <div id="container" class="center paddingUp paddingDown">
    <canvas class="chart-standard" id="uk-predictions-gdp"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import UKPredictedData from '../uk-data-predictions.js'

export default {
  name: 'UKPredictedGDP',
  data() {
    return {
      UKPredictedData: UKPredictedData
    }
  },  
  mounted() {
    const ctx = document.getElementById('uk-predictions-gdp');
    new Chart(ctx, this.UKPredictedData);
  }  
}
</script>
<style scoped>
#container {
    width: 50%;
    height: 50%;

}
</style>

