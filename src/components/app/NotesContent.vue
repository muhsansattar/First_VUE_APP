<script setup lang="ts">
import { ref } from "vue";
import { useNotesStore } from "@/stores/notes";
import MessageBox from "../chat/MessageBox.vue";

const noteInput = ref("");
const notesStore = useNotesStore();

const sendNote = async (e) => {
  if (e.key === "Enter" && noteInput.value.length > 0) {
    // send note
    notesStore.addNote(noteInput.value);
    // clear input
    noteInput.value = "";
  }
};
</script>

<template>
  <header>
    <p>My Notes</p>
  </header>
  <main>
    <div v-if="notesStore.allNotes.length>0">
      <message-box
        v-for="(note, index) in notesStore.allNotes"
        v-bind:key="index"
        v-bind:msg="note"
        v-bind:isUser="true"
        senderName="You"
      />
    </div>
    <div v-else>
      <p class="no">No Notes created.</p>
    </div>
  </main>
  <footer>
    <input 
      type="text" 
      class="search-bar" 
      placeholder="Your note ..."
      v-model="noteInput"
      @keypress="sendNote"
    />
    <p>Write your note and click enter to send.</p>
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