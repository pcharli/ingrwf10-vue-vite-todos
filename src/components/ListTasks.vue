<template>
  <h2>Liste des tâches</h2>
    <ul v-if="tasks.length > 0">
        <li v-for="(task, key) in tasks" :key="key" :data-id="key" :class="{done:task.done}">{{ task.label }} <valideTask :idtask="key" @valid-task="validTask"></valideTask> <deleteTask :idtask="key" @del-task="delTask"></deleteTask></li>
    </ul>
    <p v-else>Pas encore de tâches</p>
</template>

<script setup>
import valideTask from '@/components/ValideTask.vue'
import deleteTask from '@/components/DeleteTask.vue'
import {ref} from 'vue'

const props = defineProps({
    tasks: {
        type: Array
    }
})
const emit = defineEmits('del-task')
const delTask = (idtask) => {
        emit('del-task', idtask)
    }
const validTask = (idtask) => {
        emit('valid-task', idtask)
    }
</script>

<style>
.done {
    color: red;
}
</style>