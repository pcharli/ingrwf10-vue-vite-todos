<template>
  <form action="" @submit.prevent="addTask">
        <input type="text" v-model="newTask.label">
        <button>Ajouter</button>
    </form>
</template>

<script setup>
import {ref} from 'vue'

const newTask = ref({
    label: "",
    done: false
})
const emit = defineEmits(['plus-task'])

const addTask = () => {
    emit('plus-task', newTask.value)
}
</script>

<style>

</style>