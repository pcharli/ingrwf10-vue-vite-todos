<template>
<!-- ajout d'un bouton déclenchant la méthode "delTask" -->
  <button @click="delTask">X</button>
</template>

<script setup>
    import {ref} from 'vue'
     // recup des props passées au composant
    const props = defineProps(['idtask'])
    // définition des events que le composant pourra envoyer
    const emit = defineEmits(['valid-task'])
    // définition de la méthode delTask
    const delTask = () => {
      //demande de confirmation
        if(confirm(`Supprimer la tâche ?`))
          //envoi de l'event "del-task" associé à la value de la props idtask
            emit('del-task', props.idtask)
    }
</script>

<style>

</style>