<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import { RouterLink } from "vue-router"
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <div class="wrapper">
      <HelloWorld msg="First Vue App" />
    </div>
  </header>
  <main>
    <TheWelcome />
  </main>
  <nav>
    <RouterLink to="/app">
      <button class="enter-app">Enter App</button>
    </RouterLink>
  </nav>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.enter-app {
  transform: scale(1.5);
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
