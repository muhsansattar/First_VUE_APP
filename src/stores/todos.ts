import { ref } from 'vue'
import { defineStore } from 'pinia'

export type Todo = {
  label: string;
  isDone: boolean;
}

export const useTodosStore = defineStore('todos', () => {
  const allTodos = ref<Todo[]>([])

  const addTodo = (val: string) => {
    allTodos.value.push({
      label: val,
      isDone: false,
    });
  }

  const toggleTodo = (index: number) => {
    allTodos.value[index] = {
      ...allTodos.value[index],
      isDone: !allTodos.value[index].isDone,
    }
  }

  const deleteTodo = (index: number) => {
    allTodos.value = allTodos.value.slice(0, index).concat(allTodos.value.slice(index + 1))
  }
  
  return { allTodos, addTodo, toggleTodo, deleteTodo }
});
