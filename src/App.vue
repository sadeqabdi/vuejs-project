<template>
  <div id="app">
    <h1>My Todo App</h1>
   
  </div>
  <ul>
  <li v-for="task in tasks" :key="task.id">
    {{ task.text }} - {{ task.completed ? '✅' : '❌' }}
  </li>
  <ul>
  <li v-for="task in tasks" :key="task.id" @click="task.completed = !task.completed">
    {{ task.text }} - {{ task.completed ? '✅' : '❌' }}
  </li>
</ul>

</ul>
<input v-model="newTaskText" placeholder="تسک جدید را بنویس" />
<button @click="addTask">افزودن</button>


</template>

<script setup>

function addTask () {
  if (!newTaskText.value.trim()) return

  tasks.value.push({
    id: Date.now(),
    text: newTaskText.value,
    completed:false
  })
  newTaskText.value = ''
}

const newTaskText = ref('')
import { ref } from 'vue'

const tasks = ref([
  { id: 1, text: 'اولین تسک', completed: false }
])

</script>

<style>
#app {
  max-width: 500px;
  margin: auto;
  padding: 20px;
}
</style>
