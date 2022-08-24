<script setup>
import {ref} from 'vue'
import ListTasks from '../components/ListTasks.vue';
import AddTask from '../components/AddTask.vue';

const tasks = ref([
  {
    label: "tache 1",
    done: false
  },
  {
    label: "tache 2",
    done: true
  }
])
const addTask = (newTask) => {
  //console.log(newTask)
    tasks.value.push({... newTask})
    updateLocalStorage()
}

const validTask = (idtask) => {
  //alert(idtask)
        tasks.value[idtask].done = !tasks.value[idtask].done
        updateLocalStorage()
    }
    const delTask = (idtask) => {
  //alert(idtask)
        tasks.value.splice(idtask,1)
        updateLocalStorage()
    }
   const updateLocalStorage = () => {
      //localStorage.tasks = JSON.stringify(tasks.value)
      
      const api = fetch("https://p-ingrwf10-default-rtdb.europe-west1.firebasedatabase.app/tasks.json",{
        method: "put",
        body: JSON.stringify(tasks.value),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
  }

  const init = () => {
    fetch("https://p-ingrwf10-default-rtdb.europe-west1.firebasedatabase.app/tasks.json")
        .then((response) => response.json())
        .then((data) => tasks.value = data)
  }
  
  init()
</script>


<template>
  <main>
    <AddTask @plus-task="addTask"></AddTask>
    <ListTasks :tasks="tasks" @valid-task="validTask" @del-task="delTask"></ListTasks>
  </main>
</template>
