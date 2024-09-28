import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useNotesStore = defineStore('notes', () => {
  const allNotes = ref<string[]>([])

  const addNote = (val: string) => {
    allNotes.value.push(val);
  }
  
  return { allNotes, addNote }
})
