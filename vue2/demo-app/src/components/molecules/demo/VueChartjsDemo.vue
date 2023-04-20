<template>
	<div class="demo-wrap">
		<h2>VueChartjs Demo</h2>
    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
    />
	</div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

	export default Vue.extend({
		name: 'VueChartjsDemo',
    components: { Bar },
		data() {
			return{
        chartData: {
          labels: [ 'January', 'February', 'March' ],
          datasets: [ { data: [40, 20, 12] } ]
        },
        chartOptions: {
          responsive: true
        }
			}
		},
		methods: {
		}
	})
</script>

<style>
.demo-wrap {
	margin-top: 10px;
	margin-bottom: 10px;
	padding-top: 10px;
	padding-bottom: 10px;
	border-top: 1px solid #000;
}
</style>