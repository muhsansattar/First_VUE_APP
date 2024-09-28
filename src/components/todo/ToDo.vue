<script setup lang="ts">
import { useTodosStore } from '@/stores/todos';

defineProps<{
  label: string,
  isDone: boolean,
  index: number,
}>();

const todoStore = useTodosStore();
</script>

<template>
  <div :class="isDone ? 'done' : ''">
    <input
      type="checkbox"
      v-bind:checked="todoStore.allTodos[index].isDone"
      @click="() => todoStore.toggleTodo(index)"
    />
    <div class="label-div">
      <p>{{ label }}</p>
    </div>
    <button
      @click="() => todoStore.deleteTodo(index)"
    >
      Delete
    </button>
  </div>
</template>

<style scoped>
div {
  background-color: #222222 !important;
  margin-bottom: 10px;
  display: block;
  padding: 8px 18px;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.label-div {
  max-width: 30vw;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  padding-top: 15px;
}

input {
  transform: scale(2);
}
</style>