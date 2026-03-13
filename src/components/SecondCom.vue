<script setup>
// import { ref } from 'vue';
import { defineEmits, defineProps, ref, computed } from "vue";
// import draggable from "vuedraggable";
defineProps({
  element:{
    type:Object,
    required:true
  }
});
const tab = ref("one");
const header = ref([
  { label: "PurchangeDate", value: "24.01.2024" },
  { label: "Type", value: "Standard" },
  { label: "interval", value: "4 months" },
  { label: "Start Date", value: "12.12.2024" },
  { label: "Last Shipment", value: "25.12.2024" },
]);
const title = ref([
  { label: "PurchangeDate", value: "13.05.2024" },
  { label: "Type", value: "Standard" },
  { label: "interval", value: "12 months" },
  { label: "Start Date", value: "13.06.2024" },
  { label: "Last Shipment", value: "25.02.2024" },
]);


</script>
<template>
  
      <v-card  class="bg-secondary px-3 mb-3">
        <v-tabs v-model="tab">
          <v-tab value="one" class="w-50">
         
              <div>Ashwagandha</div>
            
          </v-tab>
          <v-tab value="two" class="w-50">
           
             
              <div>Life Lab</div>
            
          </v-tab>
        </v-tabs>
        <v-row class="pa-5">
          <v-col md="6" cols="12" class="d-flex rounded mt-4">
            <div class="">
              <v-icon class="bg-blue-lighten-3 text-white rounded pa-5">
                mdi-currency-usd
              </v-icon>
            </div>
            <div class="text-subtitle-2 d-inline ms-1 d-inline fit-content">
              <span style="line-height: normal"> Active </span>

              <p style="line-height: 0.64rem" class="">Subsciption</p>
            </div>
          </v-col>
          <v-col md="6" cols="12" class="d-flex rounded mt-4">
            <div class="">
              <v-icon
                color="info-lighten-5"
                class="bg-blue-lighten-3 text-white rounded pa-5"
              >
                mdi-cart-outline
              </v-icon>
            </div>
            <div class="text-subtitle-2 d-inline ms-1 d-inline fit-content">
              <span style="line-height: 0.64rem"> 0 </span>
              <span> </span>
              <p style="line-height: 0.64rem" class="">Reactivations</p>
            </div>
          </v-col>
          <v-col md="6" cols="12" class="d-flex rounded mt-2">
            <div class="">
              <v-icon class="bg-blue-lighten-3 text-white rounded pa-5">
                mdi-currency-usd
              </v-icon>
            </div>
            <div class="text-subtitle-2 d-inline ms-1 d-inline fit-content">
              <span style="line-height: normal"> N/A </span>
              <span> </span>
              <p style="line-height: 0.64rem" class="">Campaign</p>
            </div>
          </v-col>
          <v-col md="6" cols="12" class="d-flex rounded mt-2">
            <div class="">
              <v-icon class="bg-blue-lighten-3 text-white rounded pa-5">
                mdi-cart-outline
              </v-icon>
            </div>
            <div class="text-subtitle-2 d-inline ms-1 d-inline fit-content">
              <span style="line-height: 0.64rem">08.01.2024 </span>
              <span></span>
              <p style="line-height: 0.64rem" class="">Next shipment</p>
            </div>
          </v-col>
        </v-row>
        <v-tabs-window v-model="tab">
          <v-tabs-window-item value="one" class="">
            <v-table class="bg-secondary border-t">
              <thead class="text-left">
                <tr>
                  <th class="ps-4 text-h6">Source</th>
                  <th class="ps-4 text-h6">Ashwagandha.no</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in header" :key="index">
                  <th>
                    {{ item.label }}
                  </th>
                  <td>
                    {{ item.value }}
                  </td>
                </tr>
              </tbody>
            </v-table>
          </v-tabs-window-item>
          <v-tabs-window-item value="two">
            <v-table class="bg-secondary border-t">
              <thead class="text-left">
                <tr>
                  <th class="ps-4 text-h6">Source</th>
                  <th class="ps-4 text-h6">Life Lab.no</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in title" :key="index">
                  <th>
                    {{ item.label }}
                  </th>
                  <td>
                    {{ item.value }}
                  </td>
                </tr>
              </tbody>
            </v-table>
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card>
    
</template>
