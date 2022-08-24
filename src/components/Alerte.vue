<template>
    <p>Alerte <span v-if="afficheTxt">{{ msg }}</span></p>
    <button @click.prevent="clicked">Click-me</button>
</template>

<script setup>
    import {ref} from 'vue'
    const texte = ref('Hello')
    /*const props = defineProps({
        msg: {
            type: String
        },
        afficheTxt: {
            type: Boolean
        }
    })*/
    const props = defineProps(['msg', 'afficheTxt'])
    const emit = defineEmits('clicked')
    const clicked = () => {
        emit('clicked', texte.value)
    }
</script>

<style>

</style>