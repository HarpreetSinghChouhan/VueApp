<script setup>
//   import { watch,props } from 'vue';
// watch(
//   () => props.activeTab,
//   () => {
//     fetchData();
//   }
// );

</script>
<template>
    <v-card class="border" >
          <v-card-item>
            <v-expansion-panels>
              <v-expansion-panel
                text="512 Fjord Road,

Trondheim,Trøndelag, 7010, Norway"
                title="Defaut Address"
                value="one"
                class="bg-secondary rounded-xl"
              >
              </v-expansion-panel>
              <v-expansion-panel
                text="no address saved"
                title="Updated by CS"
                value="two"
                class="bg-secondary rounded-xl"
              >
              </v-expansion-panel>
              <v-expansion-panel
                text="45 Bryggen,

Bergen,Vestland, 5003, Norway"
                title="DataFactory"
                value="three"
                class="bg-secondary rounded-xl"
              >
              </v-expansion-panel>
              <v-expansion-panel
                text="512 Fjord Road,

Trondheim,Trøndelag, 7010, Norway
789 Nordlys Street,

Tromsø,Troms, 9008, Norway"
                title="Customer Entries"
                value="four"
                class="bg-secondary rounded-xl"
              >
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card-item>
        </v-card>
</template>