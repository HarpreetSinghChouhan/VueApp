<script setup>
//   import { watch } from 'vue';
//   watch(
//   () => props.activeTab,
//   () => {
//     fetchData();
//   }
// );

</script>
<template>
  <v-card class="bg-secondary  px-5 my-3 py-7" >
    <div class="d-flex">
      <p id="dot" class="rounded-circle">p</p>
      <div class="d-flex justify-space-between w-100 mx-5 text-h6 my-n1">
        <div>Other</div>
        <div>12 min ago by admin</div>
      </div>
    </div>
    <div class="my-4 bg-secondary">
      <div class="border-s ms-2 px-5">
        <div>
          Active to Cancelled(E-post | Annet | Med dette sier jeg opp min avtale
          av leveranse av Svartsurbær+) | 26.07.2023
        </div>

        <div>Invoices have been paid to the company</div>
      </div>
    </div>
    <div class="d-flex">
      <p id="dot2" class="rounded-circle">p</p>
      <div class="d-flex justify-space-between w-100 mx-5 text-h6 my-n1">
        <div>Other</div>
        <div>12 min ago by admin</div>
      </div>
    </div>
    <div class="my-4 bg-secondary">
      <div class="border-s ms-2 px-5">
        <div>Failed | (Abo Exist with status Active)</div>
        <div>Sale | Svart-surbaer.no</div>
      </div>
    </div>
  </v-card>
</template>
<style scoped>
#dot {
  width: 20px;
  height: 20px;
  overflow: hidden;
  background-color: rgb(241, 57, 57);
  color: rgb(241, 57, 57);
}
#dot2 {
  width: 20px;
  height: 20px;
  overflow: hidden;
  background-color: greenyellow;
  color: greenyellow;
}
</style>
