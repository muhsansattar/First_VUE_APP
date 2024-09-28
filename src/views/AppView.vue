<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router"
</script>

<template>
  <div class="main-div">
    <header>
      <h1>My Vue App</h1>
      <nav>
        <RouterLink to="/">
          <button>Back</button>
        </RouterLink>
      </nav>
    </header>
    <main>
      <div class="menu">
        <div>
          <RouterLink to="/app/weather">
            <h6>Weather</h6>
            <p>Get weather data for any location</p>
          </RouterLink>
        </div>
        <div>
          <RouterLink to="/app/to-do">
            <h6>TO-DO</h6>
            <p>Create your TO-DO list</p>
          </RouterLink>
        </div>
        <div>
          <RouterLink to="/app/my-notes">
            <h6>My Notes</h6>
            <p>Write your notes</p>
          </RouterLink>
        </div>
      </div>
      <div class="content">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<style scoped>
.main-div {
  width: 60vw;
}

header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
}

main {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.menu {
  width: 12vw;
}

.menu div {
  background-color: #2c3e50;
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 20px;
  border-radius: 10px;
}

.menu div:hover {
  cursor: pointer;
}

.menu a h6 {
  font-size: large;
  font-weight: bolder;
  color: white !important;
  text-decoration: none !important;
}

.menu a p {
  color: white !important;
  text-decoration: none !important;
}

.content {
  background-color: rgba(60, 60, 60, 0.29);
  width: 47vw;
  border-radius: 10px !important;
  height: 80vh;
}
</style>