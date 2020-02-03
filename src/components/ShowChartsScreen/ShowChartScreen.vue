<template>
  <div>
    <p class="screenTitle">Graph View</p>
    <bar-chart
      v-if="goldChartLoaded"
      :chartdata="goldChartData"
      :options="barChartOptions"
    />
    <br />
    <br />
    <bar-chart
      v-if="silverChartLoaded"
      :chartdata="silverChartData"
      :options="barChartOptions"
    />
    <br />
    <br />
    <bar-chart
      v-if="compareBarChartLoaded"
      :chartdata="compareBarChartData"
      :options="barChartOptions"
    />
    <br />
    <br />
    <line-chart
      v-if="compareLineChartLoaded"
      :chartdata="compareLineChartData"
      :options="lineChartOptions"
    />
  </div>
</template>

<script>
import BarChart from "./Charts/BarChart";
import LineChart from "./Charts/LineChart";
export default {
  name: "ShowChartScreen",
  components: {
    BarChart,
    LineChart
  },
  data() {
    return {
      goldChartLoaded: false,
      silverChartLoaded: false,
      compareBarChartLoaded: false,
      compareLineChartLoaded: false,
      goldChartData: "",
      silverChartData: "",
      compareBarChartData: "",
      compareLineChartData: "",
      barChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: false
              }
            }
          ],
          xAxes: [
            {
              gridLines: {
                display: true
              }
            }
          ]
        }
      }
    };
  },
  mounted() {
    var csvData = this.$route.params.csvData;
    var getDataFromCSV = [csvData];

    // Start Gold Bar Chart

    var generatingGoldChartData = {
      labels: [
        getDataFromCSV[0][1][0],
        getDataFromCSV[0][2][0],
        getDataFromCSV[0][3][0],
        getDataFromCSV[0][4][0],
        getDataFromCSV[0][5][0]
      ],
      datasets: [
        {
          label: "Price of " + getDataFromCSV[0][0][1],
          backgroundColor: "#D4AF37",
          data: [
            getDataFromCSV[0][1][1],
            getDataFromCSV[0][2][1],
            getDataFromCSV[0][3][1],
            getDataFromCSV[0][4][1],
            getDataFromCSV[0][5][1]
          ]
        }
      ]
    };
    this.goldChartData = generatingGoldChartData;
    this.goldChartLoaded = true;

    // Start Silver Bar Chart

    var generatingSilverChartData = {
      labels: [
        getDataFromCSV[0][1][0],
        getDataFromCSV[0][2][0],
        getDataFromCSV[0][3][0],
        getDataFromCSV[0][4][0],
        getDataFromCSV[0][5][0]
      ],
      datasets: [
        {
          label: "Price of " + getDataFromCSV[0][0][2],
          backgroundColor: "#C0C0C0",
          data: [
            getDataFromCSV[0][1][2],
            getDataFromCSV[0][2][2],
            getDataFromCSV[0][3][2],
            getDataFromCSV[0][4][2],
            getDataFromCSV[0][5][2]
          ]
        }
      ]
    };
    this.silverChartData = generatingSilverChartData;
    this.silverChartLoaded = true;

    // Start Compare Gold and Silver Bar Chart

    var generatingCompareBarChartData = {
      labels: [
        getDataFromCSV[0][1][0],
        getDataFromCSV[0][2][0],
        getDataFromCSV[0][3][0],
        getDataFromCSV[0][4][0],
        getDataFromCSV[0][5][0]
      ],
      datasets: [
        {
          label: "Price of " + getDataFromCSV[0][0][1],
          backgroundColor: "#D4AF37",
          data: [
            getDataFromCSV[0][1][1],
            getDataFromCSV[0][2][1],
            getDataFromCSV[0][3][1],
            getDataFromCSV[0][4][1],
            getDataFromCSV[0][5][1]
          ]
        },
        {
          label: "Price of " + getDataFromCSV[0][0][2],
          backgroundColor: "#C0C0C0",
          data: [
            getDataFromCSV[0][1][2],
            getDataFromCSV[0][2][2],
            getDataFromCSV[0][3][2],
            getDataFromCSV[0][4][2],
            getDataFromCSV[0][5][2]
          ]
        }
      ]
    };
    this.compareBarChartData = generatingCompareBarChartData;
    this.compareBarChartLoaded = true;

    // Start Compare Gold and Silver Line Chart
    var generatingCompareLineChartData = {
      labels: [
        getDataFromCSV[0][1][0],
        getDataFromCSV[0][2][0],
        getDataFromCSV[0][3][0],
        getDataFromCSV[0][4][0],
        getDataFromCSV[0][5][0]
      ],
      datasets: [
        {
          label: "Price of " + getDataFromCSV[0][0][1],
          borderColor: "#D4AF37",
          borderDash: [5, 5],
          backgroundColor: "transparent",
          pointBackgroundColor: "#55bae7",
          pointBorderColor: "#55bae7",
          pointHoverBackgroundColor: "#55bae7",
          pointHoverBorderColor: "#55bae7",
          data: [
            getDataFromCSV[0][1][1],
            getDataFromCSV[0][2][1],
            getDataFromCSV[0][3][1],
            getDataFromCSV[0][4][1],
            getDataFromCSV[0][5][1]
          ]
        },
        {
          label: "Price of " + getDataFromCSV[0][0][2],
          borderColor: "#C0C0C0",
          borderDash: [5, 5],
          backgroundColor: "transparent",
          pointBackgroundColor: "#55bae7",
          pointBorderColor: "#55bae7",
          pointHoverBackgroundColor: "#55bae7",
          pointHoverBorderColor: "#55bae7",
          data: [
            getDataFromCSV[0][1][2],
            getDataFromCSV[0][2][2],
            getDataFromCSV[0][3][2],
            getDataFromCSV[0][4][2],
            getDataFromCSV[0][5][2]
          ]
        }
      ]
    };
    this.compareLineChartData = generatingCompareLineChartData;
    this.compareLineChartLoaded = true;
  }
};
</script>

<style scoped>
.screenTitle {
  margin-bottom: 30px;
  color: black;
}
</style>
