<template>
  <h2>Liste des tâches</h2>
  <!-- si il y a au moins une task dans l'array "tasks" -->
    <ul v-if="tasks.length > 0">
    <!-- on boucle l'array récupérant la key de chaque tasks. On ajoute la classe "done" si la propriété "done" de la task est sur true-->
        <li v-for="(task, key) in tasks" :key="key" :data-id="key" :class="{done:task.done}">{{ task.label }} 
        <!-- appel du composant valideTask en lui passant la key. On écoute l'event "valid-task" envoyé par le composant et qui contiendra la key. L'event déclenchera la méthode "validTask"-->
        <valideTask :idtask="key" @valid-task="validTask"></valideTask>
        <!-- appel du composant deleteTask en lui passant la key. On écoute l'event "del-task" envoyé par le composant et qui contiendra la key. L'event déclenchera la méthode "delTask"-->
        <deleteTask :idtask="key" @del-task="delTask"></deleteTask></li>
    </ul>
    <!-- si array "tasks" est vide -->
    <p v-else>Pas encore de tâches</p>
</template>

<script setup>
// import des compsants
import valideTask from '@/components/ValideTask.vue'
import deleteTask from '@/components/DeleteTask.vue'
import {ref} from 'vue'
// définition des props passés au composant
const props = defineProps({
    tasks: {
        type: Array
    }
})
// définition des events que le composant pourra faire
const emit = defineEmits('del-task')
//definition de la méthode delTask
const delTask = (idtask) => {
        //envoi de l'event "del-task" associé à la valeur de la props "idtask"
        emit('del-task', idtask)
    }
    //definition de la méthode validTask
const validTask = (idtask) => {
    //envoi de l'event "del-task" associé à la valeur de la props "idtask"
        emit('valid-task', idtask)
    }
</script>

<style>
.done {
    color: red;
}
</style>