<script setup>

    import { ref, onMounted, computed, reactive } from "vue";
const products = ref([]);
const select = ref([]);

                                                                                                           
// const tab = ref("one");
// const index = reactive(1)
const tableData = computed(() => {
  const flattened = [];
  products.value.forEach((product, id) => {
    product.rows.forEach((row, index) => {
      // if (index === 0) {
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
      // }
    });
  });
  return flattened;
});

const headers = [
  { title: "Name", key: "Name" },
  { title: "Item ID", key: "ItemId" },
  { title: "Status", key: "Status" },
  { title: "Product Type", key: "ProductType" },
  { title: "Currency", key: "Currency" },
  { title: "Exc VAT", key: "ExcVat" },
  { title: "VAT", key: "Vat" },
  { title: "Inc VAT", key: "IncVat" },
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
  <v-card class="bg-secondary mt-5">
    <v-card-title> Email Logs </v-card-title>
    <v-card-item>
      <v-data-table
        :headers="headers"
        :items="tableData"
        items-per-page="5"
        class="bg-secondary border rounded-xl"
      >
      </v-data-table>
    </v-card-item>
  </v-card>
</template>
