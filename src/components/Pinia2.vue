<script setup>
import { useCounterStore } from '@/stores/counter';
const store = useCounterStore()
console.log(store);
</script>
<template>
    <!-- <hr /> -->
<h1>
    Component B 
</h1>
 <h2>
   count - {{ store.count }}
 </h2>
 <h3>
    doblecount- {{ store.doubleCouter }}
 </h3>
 <v-btn density="compact" variant="outlined" v-on:click="store.increment" >
    Increament
 </v-btn>
</template>