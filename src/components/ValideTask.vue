<template>
<!-- ajout d'un bouton déclenchant la méthode "ValideTask" -->
  <button @click.prevent="valideTask">V</button>
</template>

<script setup>
    import {ref} from 'vue'
    // recup des props passées au composant
    const props = defineProps(['idtask'])
    // définition des events que le composant pourra envoyer
    const emit = defineEmits(['valid-task'])
    // définition de la méthode valideTask
    const valideTask = () => {
        //envoi de l'event "valid-task" associé à la value de la props idtask
        emit('valid-task', props.idtask)
    }
</script>

<style>

</style>