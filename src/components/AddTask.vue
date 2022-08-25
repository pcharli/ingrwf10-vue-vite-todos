<template>
<!-- affichage formulaire. Event "submit" déclenche la méthode "addTask"-->
  <form action="" @submit.prevent="addTask">
    <!-- liaison de l'input à la propriété label de la propriété réactive "newTask"-->
        <input type="text" v-model="newTask.label">
        <button>Ajouter</button>
    </form>
</template>

<script setup>
import {ref} from 'vue'
// définition de la propriété réactive "newTask"
const newTask = ref({
    label: "",
    done: false
})
//définition des customs events que le composant pourra réaliser
const emit = defineEmits(['plus-task'])
// définition de la méthode "addTask"
const addTask = () => {
    // Envoi de l'event "plus-task" associé à la valeur de newTask
    emit('plus-task', newTask.value)
}
</script>

<style>

</style>