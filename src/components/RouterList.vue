<script setup>
import { ref } from 'vue';
const ClickOne = ref('Dashboard');
//  console.log(ClickOne);
</script>
<template>
  <v-list v-model="ClickOne" nav color="secondary" class=" v-btn-toggle">
    <v-list-item value="Dashboard" class="v-btn text-none" link><router-link class=" text-decoration-none d-flex "
        to="/"><v-icon class="ms-2 me-3 mb-1 ">mdi-home-outline</v-icon>
        <div>Dashboard</div>
      </router-link></v-list-item>
    <v-list-item value="Setting" class="v-btn text-none" link><router-link to="/about"
        class=" text-decoration-none d-flex"><v-icon class="ms-2 me-3">mdi-cog-outline</v-icon>
        <div>Setting</div>
      </router-link></v-list-item>
    <v-list-item value="Product" class="v-btn text-none" link><router-link to="/ProductSetting"
        class="text-decoration-none d-flex"><v-icon class="ms-2 me-3">mdi-cart-outline</v-icon>
        <div>Product</div>
      </router-link></v-list-item>
    <v-list-item value="Hello World" class="v-btn text-none" link><router-link to="/ProductMan"
        class="text-decoration-none d-flex"><v-icon class="ms-2 me-3">mdi-account-group-outline</v-icon>
        <div>
          Hello World
        </div>
      </router-link></v-list-item>
      <v-list-item  value="Dependency" class="v-btn text-none" >
        <router-link class=" text-decoration-none d-flex" to="/Dependency"><v-icon class="me-3 ms-2" >mdi-drag</v-icon> <div>
          Drag Drop
        </div></router-link>
      </v-list-item>
  </v-list>
</template>
<style scoped>
.v-list-item__content {
  display: ruby;
}
</style>