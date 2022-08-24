<template>
  <h1>Hello produit id: {{ $route.params.idproduits}}</h1>
  <a href="#" @click="$router.go(-1)">Retour</a>
</template>

<script setup>
//import router from '@/router'

import {useRoute, useRouter} from 'vue-router'
  const route = useRoute()
  const router = useRouter()
  console.log(route.params.idproduits)
</script>

<style>

</style>