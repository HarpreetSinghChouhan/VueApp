<script setup>
// import {  defineProps,  } from "vue";
// defineProps({
//   element: {
//     type:Object,
//     required:true
//   }
// });
</script>
<template>
      <v-card class="bg-secondary mb-4">
        <v-card-title>
          <v-row class="py-3">
            <v-col md="6" cols="12" class="d-flex rounded mt-4">
              <div class="">
                <v-icon
                  color="info-lighten-5"
                  class="bg-blue-lighten-3 text-white rounded pa-5"
                >
                  mdi-currency-usd
                </v-icon>
              </div>
              <div class="text-subtitle-2 d-inline ms-1 d-inline fit-content">
                <span style="line-height: normal"> Account </span>
                <span> Balance </span>
                <p style="line-height: 0.64rem" class="">9800 NOK</p>
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
                <span style="line-height: 0.64rem"> Total </span>
                <span> Orders</span>
                <p style="line-height: 0.64rem" class="">112 NOK</p>
              </div>
            </v-col>
            <v-col md="6" cols="12" class="d-flex rounded mt-2">
              <div class="">
                <v-icon
                  color="info-lighten-5"
                  class="bg-blue-lighten-3 text-white rounded pa-5"
                >
                  mdi-currency-usd
                </v-icon>
              </div>
              <div class="text-subtitle-2 d-inline ms-1 d-inline fit-content">
                <span style="line-height: normal"> Total </span>
                <span> Revenue</span>
                <p style="line-height: 0.64rem" class="">7800 NOK</p>
              </div>
            </v-col>
            <v-col md="6" cols="12" class="d-flex rounded mt-2">
              <div class="">
                <v-icon
                  color="info-lighten-5"
                  class="bg-blue-lighten-3 text-white rounded pa-5"
                >
                  mdi-wallet-bifold-outline
                </v-icon>
              </div>
              <div class="text-subtitle-2 d-inline ms-1 d-inline fit-content">
                <span style="line-height: 0.64rem"> Total </span>
                <span> Due </span>
                <p style="line-height: 0.64rem" class="">800 NOK</p>
              </div>
            </v-col>
          </v-row>
        </v-card-title>

        <v-card-item>
          <v-table class="bg-secondary">
            <thead>
              <tr>
                <th colspan="2" class="text-h4 text-center">
                  Daniel P-johansen
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Phone</td>
                <td>83838382</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>Danielpjohansen92@gmail.com</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>Bekkeveien 161, Bergen</td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>Male</td>
              </tr>
              <tr>
                <td>DOB</td>
                <td>14.08.1992</td>
              </tr>
              <tr>
                <td>Market Value</td>
                <td>89</td>
              </tr>
            </tbody>
          </v-table>
        </v-card-item>
      </v-card>
</template>