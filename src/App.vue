<script setup>
  import { RouterLink,RouterView } from 'vue-router';
// import AddProduct from './components/AddProduct.vue';
// import HelloWorld from './components/HelloWorld.vue'
// import AboutView from './view/AboutView.vue';
</script>

<template>
  <!-- <header>
    <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/ProductSetting">ProductSetting</RouterLink> -->
  <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

  <!-- <div class="wrapper"> -->
  <!-- <HelloWorld msg="You did it!" /> -->
  <!-- <component1 />  -->
  <!-- <AddProduct /> -->
  <!-- <nav>
        

      </nav> -->
  <!-- </div> -->
  <!-- </header>
<v-layout class="rounded  rounded-md " tab>
    <v-navigation-drawer class=" position-relative bg-gray-lighten-3"> 
       <div class="text-end position-absolute icon1" >
         <v-icon>mdi-arrow-left-bold-outline</v-icon>
       </div>
      <RouterList />
    </v-navigation-drawer>
    <v-app-bar class="text-h4"> Setting</v-app-bar>
    <v-main>
      <!-- <v-container> -->
      <!-- <router-view></router-view>
      <!-- </v-container> -->
   <!-- </v-main>

  </v-layout>
   <router-view ></router-view> -->

  <LayoutCom />
  <!-- <v-layout class="rounded  rounded-md " tab>
    <v-navigation-drawer class=" position-relative bg-gray-lighten-3"> 
       <div class="text-end position-absolute icon1" >
         <v-icon>mdi-arrow-left-bold-outline</v-icon>
       </div>
      <RouterList />
    </v-navigation-drawer>
    <v-app-bar class="text-h4"> Setting</v-app-bar>
    <v-main>
     
      <router-view></router-view>
     
    </v-main>

  </v-layout> -->


</template>

<style scoped></style>
