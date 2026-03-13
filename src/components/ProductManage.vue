<script setup>
 import { useCounte , useMouse, useDate } from '@/composables/useCounter';
const {date, Date2} =  useDate();
 const {x,y} = useMouse()
 const {count , multiply2 , devide2} = useCounte()
</script>
<template>
 <v-container>
    <v-card>
        <v-card-item>
            <v-btn @click="multiply2" >
                Multiply * 2
            </v-btn>
            <h1>
                {{ count }}
            </h1>
            <v-btn @click="devide2"  class="mb-4">
                devide / 2
            </v-btn>
            <v-divider />
             
             <v-text-field class="mt-4" v-model="x" variant="outlined" density="compact" >

             </v-text-field>
             <v-text-field v-model="y" variant="outlined" density="compact" >

             </v-text-field>
               <v-text-field v-model="date" variant="outlined" density="compact" >

             </v-text-field>
              <v-btn @click="Date2" color="red" variant="outlined
              " >
                Date 
              </v-btn>
        </v-card-item>
    </v-card>
 </v-container>
 <!-- <HomeView/> -->
<!--  
<Pinia2 />
<hr>
<NewSec/> -->
<!-- <Products /> -->
  
</template>
<style scoped>

</style>