<script setup lang="ts">
defineProps<{
  msg: string,
  senderName: string,
  isUser: boolean
}>()
</script>

<template>
  <div :class="isUser ? 'user' : ''">
    <p class="sender">{{ senderName }}</p>
    <p>{{ msg }}</p>
  </div>
</template>

<style scoped>
main div {
  text-align: left;
  background-color: #222222 !important;
  margin-bottom: 10px;
  width: fit-content;
  max-width: 30vw;
  display: block;
  margin-left: auto;
  padding: 8px 18px;
  border-radius: 15px;
}

main div.user {
  text-align: right !important;
}

.sender {
  font-weight: 900;
  font-size: 15px;
}
</style>