<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  // props: ["chartData"],
  props: {
    chartdata: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },
  mounted() {
    // pass chartdata in via params
    // var chartData = this.$route.params;
    // eslint-disable-next-line no-console
    console.log("renderThis", this.$props.chartdata);
    this.renderChart(this.chartdata, this.options);
  }
};
</script>
