<script setup>
import { useCounterStore } from '@/stores/counter';
const store = useCounterStore();

</script>
<template>
<h1>
    Component D
</h1>
<h2>
   count - {{ store.count }}
 </h2>
 <h3>
    doubleCount- {{ store.doubleCouter }}
 </h3>

</template>