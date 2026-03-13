<script setup>
import { ref } from "vue";
// const slide =ref(true);
const listItem = ref(true);
const rail = ref(false);
// function slidesecond(){

// }

</script>
<template>
  <v-layout class="rounded rounded-md" tab>
    <v-navigation-drawer
      class="bg-gray-lighten-3"
      v-model="listItem"
      :rail="rail"
      permanent
    >
      <RouterList />
    </v-navigation-drawer>
    <v-app-bar class="text-h4">
      <div class="icon1">
        <v-btn
          v-on:click="rail = !rail"
          color="v-btn mt-0 secondary-lighten-3 rounded-circle bg-secondary">
          <v-icon>mdi-arrow-left-bold-outline</v-icon>
        </v-btn>
      </div>
      <div class="ps-2">
        <div>
            App Navigation
        </div>
      </div>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-layout>
</template>
<style scoped>
/* .icon1 {
    right: -30px;
    top: 10px;
} */
</style>
