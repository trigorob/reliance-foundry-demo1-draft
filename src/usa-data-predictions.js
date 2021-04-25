import {USAGDPPredictedYears, USAGDPPredictedLevel} from './usa-data-json-handler.js'


export const USAPredictedData = {
  type: "bar",
  data: {
    labels: USAGDPPredictedYears,
    datasets: [
      {
        label: "USA GDP, in Billions USD",
        type: "line",        
        data: USAGDPPredictedLevel,
        backgroundColor: "rgba(171, 83,32,.5)",
        borderColor: "#b74784",
        borderWidth: 3
      }
    ]
  },
  options: {
    responsive: true,
    lineTension: 1,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            padding: 25
          }
        }
      ]
    },
    title: {
        display: true,
        text: 'USA Predicted GDP',
    }
  }
};

export default USAPredictedData;
