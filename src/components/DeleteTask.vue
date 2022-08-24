<template>
  <button @click="delTask">X</button>
</template>

<script setup>
    import {ref} from 'vue'
    const props = defineProps(['idtask'])
    const emit = defineEmits(['valid-task'])
    const delTask = () => {
        if(confirm(`Supprimer la tâche ?`))
            emit('del-task', props.idtask)
    }
</script>

<style>

</style>