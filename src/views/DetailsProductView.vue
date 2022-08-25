<template>
<!-- affichage de l'idproduits, paramètre passé dans la route (url)-->
  <h1>Hello produit id: {{ $route.params.idproduits}}</h1>
  <!-- redirection de l'utilisateur vers la page précédente-->
  <a href="#" @click="$router.go(-1)">Retour</a>
</template>

<script setup>
//import router from '@/router'

import {useRoute, useRouter} from 'vue-router'
  const route = useRoute()
  const router = useRouter()
  //affichage de l'idproduits, paramètre passé dans la route (url)
  console.log(route.params.idproduits)
  //redirection de l'utilisateur vers la page précédente
  router.go(-1)
</script>

<style>

</style>