<script setup>
import {ref} from 'vue'
//importation des composants
import ListTasks from '../components/ListTasks.vue';
import AddTask from '../components/AddTask.vue';
// définition d'une propriété réactives contenant un array d'objets
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
//définition d'une méthode pour ajouter une tâche à notre array, méthode appelée suite à la réception d'un event du composant "AddTask"
  const addTask = (newTask) => {
  //console.log(newTask)
      //attention à la déconstruction de newTask
    tasks.value.push({... newTask})
    updateFireBase()
}
//définition d'une méthode pour valider une tâche à notre array, méthode appelée suite à la réception d'un event "valid-task" du composant "ListTasks" auquel est annexée la value 'idtask'
  const validTask = (idtask) => {
  //alert(idtask)
        tasks.value[idtask].done = !tasks.value[idtask].done
        updateFireBase()
    }
    //définition d'une méthode pour supprimer une tâche à notre array, méthode appelée suite à la réception d'un event "del-task" du composant "ListTasks" auquel est annexée la value 'idtask'
  const delTask = (idtask) => {
  //alert(idtask)
        tasks.value.splice(idtask,1)
        updateFireBase()
    }
    //definition d'une méthode pour mettre à jour les data chez Firebase
   const updateFireBase = () => {
      
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
  //défintion d'une méthode "init" qui sera lancée à l'ouverture du composant "HomeView"
  const init = () => {
    // récupération des données chez FireBase
    fetch("https://p-ingrwf10-default-rtdb.europe-west1.firebasedatabase.app/tasks.json")
        .then((response) => response.json())
        .then((data) => tasks.value = data)
  }
  // lancement de la méthode "init"
  init()
</script>


<template>
  <main>
    <!-- appel du composant "AddTask", On écoute l'event 'plus-task' envoyé par le composant qui déclenchera la méthode "addTask" en passant les values de la nouvelle tâche -->
    <AddTask @plus-task="addTask"></AddTask>
      <!-- appel du composant "AddTask" en lui passant les tasks. On écoute les events 'valid-task et 'del-task' envoyés par le composant qui déclenchera la méthode adéquate en passant l'id de la tâche ciblée -->
    <ListTasks :tasks="tasks" @valid-task="validTask" @del-task="delTask"></ListTasks>
  </main>
</template>
