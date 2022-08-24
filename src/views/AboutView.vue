

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Alerte :msg="msg" :afficheTxt="affiche" @clicked="updateState"></Alerte>
  </div>
</template>

<script setup>
import  router from '@/router/index.js'
// import router from '@/router/'
import Alerte from "@/components/Alerte.vue"
import {ref} from 'vue'
const affiche = ref(true)
const msg = ref('texte de base')
const updateState = (value) => {
  affiche.value = !affiche.value
  msg.value = value
  router.push({name:'contact'})
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
