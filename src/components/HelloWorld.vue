<script setup>
import { ref, onMounted, computed, reactive } from "vue";
import { useCounte } from "@/composables/useCounter";
const { count, devide2, multiply2 } = useCounte();
import { useRouter } from "vue-router";
const products = ref([]);
const router = useRouter();
const changeRoute = () => {
  router.push("/ProductSetting");
};
// const index = reactive(1)
const tableData = computed(() => {
  const flattened = [];
  products.value.forEach((product, id) => {
    product.rows.forEach((row, index) => {
      if (index === 0) {
        flattened.push({
          Name: product.Name,
          ItemId: product.ItemId,
          Status: product.Status,
          ProductType: row.ProductType,
          Currency: row.Currency,
          ExcVat: row.ExcVat.toFixed(2),
          Vat: row.Vat,
          IncVat: row.IncVat.toFixed(2),
          rowIndex: id,
          totalRows: product.rows.length,
        });
      }
    });
  });
  return flattened;
});
const delete1 = (index) => {
  if (confirm("Are you Sour This row Are delete")) {
    const storedData = localStorage.getItem("products");
    const storedData2 = JSON.parse(storedData);
    storedData2.splice(index, 1);
    const store2 = JSON.stringify(storedData2);
    localStorage.setItem("products", store2);
    products.value.splice(index, 1);
  }
};
const edit = (index) => {
  router.push({ path: "\EditProduct", query: { index: index } });
};
const headers = [
  { title: "Name", key: "Name" },
  { title: "Item ID", key: "ItemId" },
  { title: "Status", key: "Status" },
  { title: "Product Type", key: "ProductType" },
  { title: "Currency", key: "Currency" },
  { title: "Exc VAT", key: "ExcVat" },
  { title: "VAT", key: "Vat" },
  { title: "Inc VAT", key: "IncVat" },
  { title: "Actions", key: "actions" },
];
onMounted(() => {
  const storedData = localStorage.getItem("products");
  if (storedData) {
    try {
      products.value = JSON.parse(storedData);
    } catch (e) {
      console.error("Error parsing data from local storage:", e);
      products.value = [];
    }
  }
});
</script>
<template>
  <v-container>
    <v-row class="d-flex flex-wrap">
      <v-col md="3" sm="6" cols="12" color="secondary" class="">
        <v-card class="bg-secondary pa-2">
          <v-card-title color="secondary" class="text-h5 d-flex">
            <v-icon> mdi-clock-outline </v-icon>
            <div class="ms-5 mt-n1 mb-1">2439</div>
          </v-card-title>
          <v-card-item>
            <div>Total Subsriptions</div>
            <div>+18% <span> than last week </span></div>
          </v-card-item>
        </v-card></v-col
      >
      <v-col md="3" sm="6" cols="12" class="">
        <v-card class="bg-secondary pa-2">
          <v-card-title color="secondary" class="text-h5 d-flex">
            <v-icon> mdi-clock-outline </v-icon>
            <div class="ms-5 mt-n1 mb-1">2439</div>
          </v-card-title>
          <v-card-item>
            <div>Total revenue</div>
            <div><span>18%</span><span> than last week </span></div>
          </v-card-item>
        </v-card></v-col
      >
      <v-col md="3" sm="6" cols="12" class="">
        <v-card class="bg-secondary pa-2">
          <v-card-title color="secondary" class="text-h5 d-flex">
            <v-icon> mdi-clock-outline </v-icon>
            <div class="ms-5 mt-n1 mb-1">2439</div>
          </v-card-title>
          <v-card-item>
            <div>Increase/descrease last Month</div>
            <div><span>18%</span><span> than last week </span></div>
          </v-card-item>
        </v-card>
      </v-col>
      <v-col md="3" sm="6" cols="12" class="">
        <v-card class="pa-2 bg-secondary">
          <v-card-title color="secondary" class="text-h5 d-flex">
            <v-icon> mdi-clock-outline </v-icon>
            <div class="ms-5 mt-n1 mb-1">2439</div>
          </v-card-title>
          <v-card-item>
            <div>Churn rate</div>
            <div><span>18%</span><span> than last week </span></div>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <v-container>
    <div class="text-end">
      <v-btn
        @click="changeRoute"
        text="Add Product"
        prepend-icon="mdi-plus"
        color="info"
        class=""
      >
      </v-btn>
    </div>
  </v-container>
  <v-container class="bg-secondary rounded">
    <div class="overflow-x-scroll" id="scroll2">
      <v-data-table
        :headers="headers"
        :items="tableData"
        :items-per-page="5"
        density="compact"
        color="blue"
        id="width-12"
        class="border rounded-t-lg"
        theme="dark"
        striped="odd"
      >
        <!-- <template #item.Actions="{ item }">
        
        </template> -->
        <template v-slot:item.actions="{ item }">
          <v-icon small @click="edit(item.rowIndex)" class="mr-2 text-secondary"
            >mdi-pencil</v-icon
          >
          <v-icon small class="text-red" @click="delete1(item.rowIndex)"
            >mdi-delete</v-icon
          >
        </template>
      </v-data-table>
    </div>
  </v-container>
  <!-- <v-container>
    <v-btn @click="multiply2" class="bg-info"> Multiply * 2 </v-btn>
   
    <v-number-input
      class="mt-3 mb-3"
      v-model="count"
      control-variant="hidden"
      variant="outlined"
    >
    </v-number-input>
    <v-btn @click="devide2" class="bg-info"> Devide / 2 </v-btn>
  </v-container> -->
</template>
<style scoped>
#width-12 {
  min-width: 1400px;
}
#scroll2 {
  scrollbar-width: thin;
  scrollbar-color: #333 #000;
  scroll-behavior: unset;
  border-start-end-radius: 8px;
  border-top-left-radius: 8px;
  /* scrollbar-gutter: stable; */
  white-space: preserve-breaks;
}
/* 
#scroll2::-webkit-scrollbar-button {
   display: none !important; 
}
#scroll2::-webkit-scrollbar-track {
  background: transparent;
} */
</style>
