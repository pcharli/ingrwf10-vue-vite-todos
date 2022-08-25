<template>
<!-- paragraphe conditionné par la valeur de la props "afficheTxt passé au composant par son parent. Le contenu contient la valeur de msg passé également dans les props"-->
    <p>Alerte <span v-if="afficheTxt">{{ msg }}</span></p>
    <button @click.prevent="clicked">Click-me</button>
</template>

<script setup>
//import du module rendant les propriéts du State réactives
    import {ref} from 'vue'
    //définition de propriétés réactives
    const texte = ref('Hello')
    /*const props = defineProps({
        msg: {
            type: String
        },
        afficheTxt: {
            type: Boolean
        }
    })*/
    // récupération des propriétés passées au composant par son parent
    const props = defineProps(['msg', 'afficheTxt'])
    // définition des events que le composant va réaliser
    const emit = defineEmits('clicked')
    //définition de la méthode "clicked"
    const clicked = () => {
        emit('clicked', texte.value) //envoi d'un custom event appelé "clicked" associé à la valeur de la propriété "texte" (hello)
    }
</script>

<style>

</style>