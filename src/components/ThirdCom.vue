<script setup>
defineProps({
  element: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <v-card class="bg-secondary mb-3 ">
    <v-card-title>
      <div class="d-flex mt-6">
        <div>
          <v-icon> mdi-notebook-outline </v-icon>
        </div>
        <div>Customer Notes</div>
      </div>
    </v-card-title>
    <v-card-item class="py-8">
      <div class="d-flex">
        <p id="dot" class="rounded-circle">p</p>
        <div class="d-flex justify-space-between w-100 mx-5 text-h6 my-n1">
          <div>Other</div>
          <div>12 min ago by admin</div>
        </div>
      </div>
      <div class="my-4 bg-secondary">
        <div class="border-s ms-2 px-5">
          Status updated to Unapproved return trial (NOT Paid post) | Order ID:
          128523
        </div>
      </div>
      <div class="d-flex">
        <p id="dot2" class="rounded-circle">p</p>
        <div class="d-flex justify-space-between w-100 mx-5 text-h6 my-n1">
          <div>Phone</div>
          <div>1 hour ago by CS</div>
        </div>
      </div>
      <div class="my-4 bg-secondary">
        <div class="border-s ms-2 px-5">
          Status updated to Unapproved return trial (NOT Paid post) | Order ID:
          129745
        </div>
      </div>
      <div class="d-flex">
        <p id="dot" class="rounded-circle">p</p>
        <div class="d-flex justify-space-between w-100 mx-5 text-h6 my-n1">
          <div>Other</div>
          <div>12 min ago by admin</div>
        </div>
      </div>
      <div class="my-4 bg-secondary">
        <div class="border-s ms-2 px-5">
          Status updated to Unapproved return trial (NOT Paid post) | Order ID:
          128523
        </div>
      </div>
      <div class="d-flex">
        <p id="dot2" class="rounded-circle">p</p>
        <div class="d-flex justify-space-between w-100 mx-5 text-h6 my-n1">
          <div>Phone</div>
          <div>1 hour ago by CS</div>
        </div>
      </div>
      <div class="my-4 bg-secondary">
        <div id="border2" class="border-s ms-2 px-5">
          Status updated to Unapproved return trial (NOT Paid post) | Order ID:
          129745
        </div>
      </div>
    </v-card-item>
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

/* #border2 {
 border-inline-start-width: 10px;
} */
</style>
