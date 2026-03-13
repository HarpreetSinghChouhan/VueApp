
<script setup>
import { computed, reactive, ref, watch } from "vue";
import { useProductStore } from "@/stores/counter";
import { useRouter } from "vue-router";

const productStore = useProductStore();
const newProduct = reactive({
  Name: "",
  ItemId: null,
  Status: "Draft",
});
const resaleRows = ref([
  {
    id: Date.now(),
    ProductType: "",
    Currency: "NOK",
    ExcVat: null,
    Vat: "Export(0%)",
    IncVat: null,
  },
]);

const isvalid = computed(() => {
  const p = newProduct;
  const hasValidRows = resaleRows.value.every(
    (row) =>
      row.ProductType !== "" && row.ExcVat !== null && row.Currency !== ""
  );
  return (
    p.Name.trim() !== "" &&
    p.ItemId !== null &&
    hasValidRows
  );
});

const router = useRouter();

const handleAddProduct = () => {
  const productData = {
    ...newProduct,
    rows: resaleRows.value,
  };
  productStore.AddProductt(productData);
  newProduct.Name = "";
  newProduct.ItemId = null;
  newProduct.Status = "Draft";
  resaleRows.value = [
    {
      id: Date.now(),
      ProductType: "",
      Currency: "NOK",
      ExcVat: null,
      Vat: "Export(0%)",
      IncVat: null,
      
    },
  ];
  
  router.push("/");
};

number();
const requiredRule = (value) => !!value || "Field Are Required";
const minLengthRule = (len) => (value) =>
  (value && value.length >= len) || `Must be at least ${len} characters.`;

function vatRate(vat) {
  if (vat === "25%") return 0.25;
  if (vat === "15%") return 0.15;
  return 0;
}

function number(){
  resaleRows.value.forEach((row, index) => {
  // console.log(row);
  watch(
    () => resaleRows.value[index]?.ExcVat,
    (newValue) => { 
      // console.log(resaleRows.value[index]?.ExcVat)
      if (!resaleRows.value[index]) return;
      const rate = vatRate(resaleRows.value[index]?.Vat);
      resaleRows.value[index].IncVat = Number(newValue || 0) * (1 + rate);
    }
  );

  watch(
    () => resaleRows.value[index]?.IncVat,
    (newValue) => {
      if (!resaleRows.value[index]) return;
      const rate = vatRate(resaleRows.value[index]?.Vat);
      resaleRows.value[index].ExcVat = rate === 0 ? newValue : Number(newValue || 0) / (1 + rate);
    }
  );

  watch(
    () => resaleRows.value[index]?.Vat,
    () => { 
      //  console.log(resaleRows.value[index].Vat);
      if (!resaleRows.value[index]) return;
      const rate = vatRate(resaleRows.value[index]?.Vat);
      resaleRows.value[index].IncVat =
        Number(resaleRows.value[index].ExcVat || 0) * (1 + rate);
    }
  );
});

}
function minRow(index) {
  // console.log(resaleRows.value.splice(index, 1));
  resaleRows.value.splice(index, 1);
  // number();
  
}
function addRow(index) {
  console.log(resaleRows.value[index].Vat);
  resaleRows.value.splice(index + 1, 0, {
    id: Date.now() + Math.random(),
    ProductType: "",
    Currency: "NOK",
    ExcVat: null,
    Vat: "Export(0%)",
    IncVat: null,
    index:index+1,
  });
  number();
}
</script>

<template>
  <div id="div">
    <v-container class="font-cursive">
      <div>
        <div class="text-h5">Add product</div>
        <div class="text-h6">Order placed across your store</div>
      </div>
      <v-form id="form" class="pa-md-10 mt-6 pa-sm-5 pa-2">
        <v-row>
          <v-col cols="12" sm="4">
            <div>Name</div>
            <v-text-field
              v-model="newProduct.Name"
              :rules="[requiredRule, minLengthRule(4)]"
              variant="outlined"
              color="secondary"
              density="compact"
              placeholder="Name"
            >
            </v-text-field>
          </v-col>

          <v-col cols="12" sm="4">
            <div>Item number</div>
            <v-number-input
              v-model="newProduct.ItemId"
              min="0"
              :rules="[requiredRule]"
              variant="outlined"
              color="secondary"
              control-variant="stacked"
              density="compact"
              placeholder="1001,1002,1003..."
            >
            </v-number-input>
          </v-col>
          <v-col cols="12" sm="4">
            <div>Status</div>
            <v-select
              v-model="newProduct.Status"
              :rules="[requiredRule]"
              color="secondary"
              :items="['Draft', 'Publish']"
              density="compact"
              variant="outlined"
            >
            </v-select>
          </v-col>
        </v-row>
        <hr />
        <v-row>
          <v-col cols="12">
            <div class="table-wrapped" style="overflow-x: scroll">
              <div style="min-width: 1300px">
                <v-table class="mt-4">
                  <thead>
                    <tr>
                      <th>PRODUCT TYPE</th>
                      <th>CURRENCY</th>
                      <th>EXC.VAT</th>
                      <th>VAT</th>
                      <th>INC. VAT</th>
                      <th>ACCOUNT</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(row, index) in resaleRows" :key="row.id">
                      <td>
                        <v-select
                          v-model="row.ProductType"
                          class="mt-3"
                          color="secondary"
                          placeholder="Select Product Type"
                          :rules="[requiredRule]"
                          :items="[
                            'item(for resale)',
                            'item(self produced)',
                            'Survice',
                          ]"
                          density="compact"
                          variant="outlined"
                        >
                        </v-select>
                      </td>
                      <td>
                        <v-select
                          density="compact"
                          placeholder=""
                          :rules="[requiredRule]"
                          color="secondary"
                          v-model="row.Currency"
                          class="mt-3"
                          variant="outlined"
                          :items="['NOK', 'SEK']"
                        >
                        </v-select>
                      </td>
                      <td>
                        <v-number-input
                          color="secondary"
                          variant="outlined"
                          :rules="[requiredRule]"
                          placeholder="00"
                          density="compact"
                          v-model="row.ExcVat"
                          class="mt-3"
                          control-variant="stacked"
                          min="0"
                        >
                        </v-number-input>
                      </td>
                      <td>
                        <v-select
                          v-if="
                            row.Currency == 'NOK' &&
                            row.ProductType !== 'Survice'
                          "
                          variant="outlined"
                          density="compact"
                          :rules="[requiredRule]"
                          color="secondary"
                          v-model="row.Vat"
                          class="mt-3"
                          :items="['25%', 'Export(0%)']"
                        >
                        </v-select>
                        <v-select
                          v-if="row.Currency === 'SEK'"
                          variant="outlined"
                          density="compact"
                          :rules="[requiredRule]"
                          class="mt-3"
                          color="secondary"
                          v-model="row.Vat"
                          :items="['15%', 'Export(0%)']"
                        >
                        </v-select>
                        <v-select
                          v-if="row.Currency == 'NOK' && row.ProductType == 'Survice'"
                          variant="outlined"
                          density="compact"
                          :rules="[requiredRule]"
                          color="secondary"
                          v-model="row.Vat"
                          class="mt-3"
                          :items="['15%', '25%', 'Export(0%)']"
                        >
                        </v-select>
                      </td>
                      <td>
                        <v-number-input
                          variant="outlined"
                          density="compact"
                          :rules="[requiredRule]"
                          class="mt-3"
                          v-model="row.IncVat"
                          control-variant="stacked"
                          placeholder="00"
                          min="0"
                        >
                        </v-number-input>
                      </td>

                      <td>
                        <div class="">
                          3030, Salgsinntekt varer, middels mva-sats
                        </div>
                      </td>
                      <td>
                        <div class="d-flex" >
                          <v-btn
                            class="rounded-circle text-secondary ms-3"
                            variant="outlined"
                            @click="addRow(index)"
                            width="10px"
                          >
                            <v-icon class="text-h5">mdi-plus</v-icon>
                          </v-btn>
                          <v-btn
                            :disabled="resaleRows.length == 1"
                            class="rounded-circle text-red ms-3"
                            variant="outlined"
                            @click="minRow(index)"
                            width="10px"
                          >
                            <v-icon class="text-h5">mdi-minus</v-icon>
                          </v-btn>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </v-table>
              </div>
            </div>
          </v-col>
        </v-row>
        <div class="text-end mt-2">
          <v-btn color="blue" :disabled="!isvalid" @click="handleAddProduct">
            Add Product
          </v-btn>
        </div>
      </v-form>
    </v-container>
  </div>
</template>

<style scoped>
#form {
  box-shadow: 0px 0px 10px -1px #b1b1b1;
  border-radius: 10px;
}
</style>