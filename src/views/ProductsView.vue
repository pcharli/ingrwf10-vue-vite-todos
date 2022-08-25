<template>
  <ul>
    <!-- bouclage de l'array "products", récupération de chaque produit et de leur key dans l'array-->
    <li v-for="(product, key) in products" :key="key">
        <!-- création d'un lien vers la route "details" en passant en paramètre "idproduits" (défini dans le routeur/index.js) et contenant la key -->
        <RouterLink :to="{name:'details', params:{ idproduits:key }}">{{ product.label }}</RouterLink>
    </li>
  </ul>
</template>

<script setup>
import {ref} from 'vue'
// intégration du composant routerlink
import {RouterLink} from 'vue-router'
    //définition d'une proriété réactive contenant un array d'objets
    const products = ref([{
        label: "produit 1",
        prix: 50.5,
        description: "description produit 1"
    },
    {
        label: "produit 2",
        prix: 35.5,
        description: "description produit 2"
    },
    {
        label: "produit 3",
        prix: 95.5,
        description: "description produit 3"
    }])
</script>

<style>

</style>