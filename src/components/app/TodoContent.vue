<script setup lang="ts">
import { ref } from "vue";
import { useTodosStore } from "@/stores/todos";
import ToDo from "../todo/ToDo.vue";

const todoInput = ref("");

const todoStore = useTodosStore();

const createTodo = async (e) => {
  if (e.key === "Enter" && todoInput.value.length > 0) {
    // send note
    todoStore.addTodo(todoInput.value);
    // clear input
    todoInput.value = "";
  }
};

</script>

<template>
  <header>
    <p>TODO List</p>
  </header>
  <main>
    <div v-if="todoStore.allTodos.length>0">
      <to-do
        v-for="(todo, index) in todoStore.allTodos"
        v-bind:key="index"
        v-bind:label="todo.label"
        v-bind:isDone="todo.isDone"
        v-bind:index="index"
      />
    </div>
    <div v-else>
      <p class="no">No TODOs created.</p>
    </div>
  </main>
  <footer>
    <input 
      type="text" 
      class="search-bar" 
      placeholder="Your TODO ..."
      v-model="todoInput"
      @keypress="createTodo"
    />
    <p>Write your TODO and click enter to create it.</p>
  </footer>
</template>

<style scoped>
header {
  padding: 10px 0px;
  font-size: 25px;
  font-weight: 900;
  text-align: center
}

main {
  height: 63vh;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: rgba(84, 84, 84, 0.65);
  border-radius: 15px;
  padding: 30px;
  margin: 0px 15px;
}

footer {
  padding: 10px 20px;
}

.no {
  text-align: center;
  font-weight: 600;
  font-size: 20px;
  margin-top: 10vh;
}
</style>