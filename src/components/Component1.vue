<script setup>
// import { RouterLink, RouterView } from 'vue-router';
import { ref } from 'vue'
// import StoreDetails from './StoreDetails.vue'
// import SettingCheckout from './SettingCheckout.vue'
// import SettingShipping from './SettingShipping.vue'
// import Settinglocation from './Settinglocation.vue'
// import SettingNotification from './SettingNotification.vue'
const tab = ref('tab-1')
const radio = ref('Number')
const text1 = ref('Add Manual Payment Methods')
</script>
<template>
   <!-- <v-card> -->
   <div id="bg">
      <v-toolbar color="secondary" class="" title="Setting"></v-toolbar>
      <div class="d-flex flex-row">
         <v-row>
            <v-col sm="3">
               <v-tabs v-model="tab" class="mt-4" color="secondary" direction="vertical">
                  <!-- <v-tab value="tab-1"> -->
                  <v-btn type="button" color="secondary" @click="tab = 'tab-1'"
                     class="text-none rounded v-tab v-tab-item ">
                     <v-icon>mdi-store</v-icon>
                     Store Detailes
                  </v-btn>
                  <!-- </v-tab> -->
                  <!-- <v-tab value="tab-2" class="mt-3"> -->
                      <v-btn type="button" @click="tab = 'tab-2'"
                        class="text-none mt-4 v-tab v-tab-item btn rounded"
                        color="secondary"><v-icon>mdi-credit-card-outline</v-icon> Payments </v-btn>
                      <!-- </v-tab> -->



                  <!-- </div> -->

                  <!-- <v-tab value="tab-3" class="mt-3"> -->
                     <v-btn type="button"  @click="tab = 'tab-3'" class="mt-4 v-tab text-none v-tab-item btn rounded"
                        color="secondary"><v-icon>mdi-cart-outline
                        </v-icon> Checkout</v-btn>
                     <!-- </v-tab> -->
                  <!-- </v-btn> -->

                  <!-- <v-tab value="tab-4"  class="mt-3"> -->
                     <v-btn type="button"   @click="tab = 'tab-4'" class=" mt-4 v-tab v-tab-item btn rounded text-none"
                        color="secondary"><v-icon>mdi-percent-circle-outline</v-icon> Shipping & Delivery</v-btn>
                  <!-- </v-tab> -->

                  <!-- <v-tab text="Location" value="tab-5" class="mt-3"> -->
                     <v-btn type="button"  @click="tab = 'tab-5'" class="mt-4 v-tab v-tab-item btn rounded text-none"
                        color="secondary"><v-icon>mdi-map-marker</v-icon> Location</v-btn>
                  <!-- </v-tab> -->

                  <!-- <v-tab text="Notification" value="tab-6" class="mt-3"> -->
                     <v-btn type="button"  @click="tab = 'tab-6'"  class=" mt-4 v-tab v-tab-item btn rounded text-none" color="secondary">
                        <v-icon>mdi-bell-ring</v-icon>Notifications</v-btn>
                     <!-- </v-tab> -->




               </v-tabs>
            </v-col>
            <v-col sm="9">
               <v-tabs-window v-model="tab">
                  <v-tabs-window-item value="tab-1" class="mt-4 me-2">
                     <!-- Hello Every One  -->
                     <StoreDetails />

                  </v-tabs-window-item>
                  <v-tabs-window-item value="tab-2" class="mt-4 me-2">
                     <SettingPayments />
                  </v-tabs-window-item>
                  <v-tabs-window-item value="tab-3" class="mt-4 me-2">
                     <SettingCheckout />
                  </v-tabs-window-item>
                  <v-tabs-window-item value="tab-4" class="mt-4 me-2">
                     <SettingShipping />
                  </v-tabs-window-item>
                  <v-tabs-window-item value="tab-5" class="mt-4 me-2">
                     <Settinglocation />
                  </v-tabs-window-item>
                  <v-tabs-window-item value="tab-6" class="me-2 mt-4">
                     <SettingNotification />
                  </v-tabs-window-item>
               </v-tabs-window>
            </v-col>
         </v-row>
      </div>
   </div>

</template>
<style>
.v-btn--size-default {
   min-width: 40px;
}

#hightLine {
   line-height: 1;
   color: rgb(83, 78, 78);
}

#vCard {
   background-color: rgb(255, 255, 255);

   font-family: italic;
   box-shadow: 2px 1px 10px 5px #d9d9d9;
   margin: 21px;
}

#bg {
   background-color: rgb(255, 255, 255);
}

#info {
   background-color: rgb(152, 182, 125);
   color: rgb(113, 223, 16);
}
</style>