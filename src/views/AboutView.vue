

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- inclusion du composant "Alerte" en lui passant msg (string) et afficheText (boolean). On attend un event "clicked" envoyé par le composant qui déclenchera la méthode "updateState" -->
    <Alerte :msg="msg" :afficheTxt="affiche" @clicked="updateState"></Alerte>
  </div>
</template>

<script setup>
// import du router pour l'utiliser en ligne 29 pour rediriger l'user vers "contact"
import  router from '@/router/index.js'
// import router from '@/router/'
//import du composant "Alerte"
import Alerte from "@/components/Alerte.vue"
//import du module rendant les propriéts du State réactives
import {ref} from 'vue'
//définition de propriétés réactives
const affiche = ref(true)
const msg = ref('texte de base')
// définition de la méthode "updateState()"
const updateState = (value) => {
  //inversion de la valeur booléenne de la proriété "affiche"
  affiche.value = !affiche.value
  // changement de la valeur de la propriété "msg" en utilisant la valeur "value" annexée à l'event envoyé par le compasant "Alerte"
  msg.value = value
  // redirection de l'user vers "contact"
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
