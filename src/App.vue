<script setup>
import { ref, computed } from 'vue';
const text = ref();

const lineStylesData = computed(() => ({
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Измеритель 1',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      tension: .4,
      borderColor: '#EC4899'
    },
    {
      label: 'Измеритель 2',
      data: [28, 48, 40, 19, 86, 27, 90],
      fill: false,
      tension: .4,
      borderColor: '#3B82F6DE'
    }
  ]
}
))

const basicOptions = computed(() => ({
  plugins: {
    legend: {
      labels: {
        color: 'rgba(255, 255, 255, 0.87)'
      }
    }
  },
  scales: {
    x: {
      ticks: {
        color: '#495057'
      }
      // grid: {
      //   color: '#495057'
      // }
    },
    y: {
      ticks: {
        color: '#495057'
      },
      grid: {
        color: '#495057'
      }

    }
  }
}
))
</script>

<template>
  <div class="layout-wrapper">
    <div class="layout-content">
      <div class="grid">
        <div class="col-2">
          <div class="card_small">
              <h5>Температура воздуха</h5>
              <img src="./img/temp.svg" alt="temp">
              <div class="text">Термометр</div>
              <h1>28°С</h1>
            </div>
          </div>
        <!-- <div class="col-6">6</div> -->
        <div class="col-4">
          <div class="card">
            <h5>Влажность</h5>
            <div class="chart-wrapper">
            </div><Chart type="line" :data="lineStylesData" :options="basicOptions" />
            </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.card {
  background-color: #071426;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 285px;
}

.card_small {
  background-color: #071426;
  border-radius: 24px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 285px;
}

h5 {
  font-family: Inter, sans-serif;
  font-weight: 700;
}

Chart{
  font-weight: 400;
  /* height: 280px; */
  align-self: center;
}

.text {
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 21px;
  text-align: center;
  color: #fff;
  opacity: 60%;
}

h1{
  font-family: Inter, sans-serif;
}

img {
  height: 82px;
  width: 53px;
  align-self: center;
}

</style>
