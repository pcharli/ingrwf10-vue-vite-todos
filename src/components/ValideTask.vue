<template>
  <button @click.prevent="valideTask">V</button>
</template>

<script setup>
    import {ref} from 'vue'
    const props = defineProps(['idtask'])
    const emit = defineEmits(['valid-task'])
    const valideTask = () => {
        emit('valid-task', props.idtask)
    }
</script>

<style>

</style>