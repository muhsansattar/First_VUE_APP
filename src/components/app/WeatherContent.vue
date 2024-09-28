<script setup lang="ts">
import { ref } from 'vue';

const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
const urlBase = 'https://api.openweathermap.org/data/2.5/';
const query = ref('');
const weather = ref({});

const fetchWeather = async (e) => {
  if (e.key === "Enter") {
    try {
      const response = await fetch(`${urlBase}weather?q=${query.value}&units=metric&APPID=${apiKey}`);
      const results = await response.json();
      console.log(results);
      weather.value = results;
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }
};

const dateBuilder = () => {
  const d = new Date();
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const day = days[d.getDay()];
  const date = d.getDate();
  const month = months[d.getMonth()];
  const year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
};
</script>

<template>
  <div id="weather" :class="typeof weather.main != 'undefined' && weather.main.temp > 16 ? 'warm' : ''">
    <main>
      <div class="search-box">
        <p>Write the city name and press enter.</p>
        <input 
          type="text" 
          class="search-bar" 
          placeholder="Search city..."
          v-model="query"
          @keypress="fetchWeather"
        />
      </div>

      <div class="weather-wrap" v-if="typeof weather.main != 'undefined'">
        <div class="location-box">
          <div class="location">{{ weather.name }}, {{ weather.sys.country }}</div>
          <div class="date">{{ dateBuilder() }}</div>
        </div>

        <div class="weather-box">
          <div class="temp">
            {{ Math.round(weather.main.temp) }}°c
            <div>
              Feels like {{ Math.round(weather.main.feels_like) }}°c
            </div>
          </div>
          <div class="weather">{{ weather.weather[0].main }}</div>
        </div>
      </div>
      <div v-else-if="query.length>0">
        <div class="weather-box">
          <div class="temp">
            City not found.
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
#weather {
  background-image: url('../../assets/cold.png');
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;
  border-radius: 15px;
}

#weather.warm {
  background-image: url('../../assets/warm.jpg');
}

main {
  height: 80vh;
  padding: 1vw;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75));
  border-radius: 15px;
}

.search-box {
  width: 47vw;
  margin-bottom: 30px;
}

.location-box .location {
  color: #FFF;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
}

.location-box .date {
  color: #FFF;
  font-size: 20px;
  font-weight: 300;
  text-align: center;
}

.weather-box {
  text-align: center;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
}

.weather-box .temp {
  display: block;
  padding: 10px 25px;
  color: #FFF;
  font-size: 102px;
  font-weight: 900;
  padding: 30px 60px;

  background-color:rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  margin: 30px 0px;
}

.weather-box div {
  display: block;
  padding: 10px 25px;
  color: #FFF;
  font-size: 20px;
  font-weight: 400;

  background-color:rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  margin: 30px 0px;
}

.weather-box .weather {
  color: #FFF;
  font-size: 48px;
  font-weight: 700;
  background-color: transparent;
}
</style>