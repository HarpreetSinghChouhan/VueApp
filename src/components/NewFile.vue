<script setup>
import { computed, reactive, ref, watch } from "vue";
import { useProductStore } from "@/stores/counter";
import { useRouter } from "vue-router";
import HelloWorld from "./HelloWorld.vue";
const productStore = useProductStore();
const newProduct = reactive({
  Name: "",
  ItemId:null,
  Status:"Draft",
 

});
const row = ref([{
  id:Date.now(),
  ProductType:'',
  Currency:"NOK",
  ExcVat:null,
  Vat:"Export(0%)",
  IncVat:null

}])

const isvalid = computed(()=>{
    const p = newProduct;
    return (
        p.Name.trim()!== "",
        p.ProductType !=="",
        p.ItemId !== null,
        p.ExcVat !== null

    )
})
//  const validationp = (p) =>{
//     if(!newProduct.name)return "Name is Valid"
//  }
// const produced = ref({});// const products = ref([])
const router = useRouter();
 const handleAddProduct = () => {
      
    console.log(newProduct);

    productStore.AddProductt({ ...newProduct});
     newProduct.Name="", newProduct.ItemId=null, newProduct.Status="Draft",
    //  newProduct.ProductType="", newProduct.Currency="NOK", newProduct.ExcVat=null,newProduct.IncVat=null;
    //  newProduct.Vat="Export(0%)";
    row.value = [{
      id:Date.now(),
      ProductType:'',
      Currency:"NOK",
      ExcVat:null,
      

    }]
     router.push('/')

}
const requiredRule = (value) => !!value || "Field Are Required";
const minLengthRule = (len) => (value) =>
  (value && value.length >= len) || `Must be at least ${len} characters.`;



let lock = false;
function vatRate() {
  if (newProduct.Vat === "25%") return 0.25;
  if (newProduct.Vat === "15%") return 0.15;
  return 0;
}

watch(
  () => newProduct.ExcVat,
  (newValue) => {
    if (lock) return;
    lock = true;
       console.log( newValue +' new value')
    const rate = vatRate();
    newProduct.IncVat = Number(newValue || 0) * (1 + rate);
    lock = false;
  }
);
watch(
  () => newProduct.IncVat,
  (newValue) => {
    if (lock) return;
    lock = true;
    const rate = vatRate();
    newProduct.ExcVat = rate === 0 ? newValue : Number(newValue || 0) / (1 + rate);
    lock = false;
  }
);
watch(
  () => newProduct.Vat,
  () => {
    const rate = vatRate();
    newProduct.IncVat = Number(newProduct.ExcVat || 0) * (1 + rate);
  }
);

const resaleRows = ref([{ id: Date.now() }]);
// console.log(Date.now());
function minRow(index) {
  console.log();
  resaleRows.value.splice(index, 1);
}
function addRow(index) {
  console.log(resaleRows.value);
  resaleRows.value.splice(index + 1, 0, {
    id: Date.now() + Math.random(),
  });
}
// console.log(formdata.name)
// watch(
//   () => newProduct.ProductType,
//   (newvalue, oldvalue) => {
//     console.log(oldvalue + "=> hjsgdfjhgds sadfghgdsjfh dsf   =>" + newvalue);
//   },
//   { deep: true }
// );
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
              <div style="width: 1300px">
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
                          v-model="newProduct.ProductType"
                          class="mt-3"
                          color="secondary"
                          placeholder="Select Product Type "
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
                          v-model="newProduct.Currency"
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
                          v-model="newProduct.ExcVat"
                          class="mt-3"
                          control-variant="stacked"
                          min='0'
                        >
                        </v-number-input>
                      </td>
                      <td>
                        <v-select
                          v-if="
                            newProduct.Currency == 'NOK' &&
                            newProduct.ProductType !== 'Survice'
                          "
                          variant="outlined"
                          density="compact"
                          :rules="[requiredRule]"
                          color="secondary"
                          v-model="newProduct.Vat"
                          class="mt-3"
                          :items="['25%', 'Export(0%)']"
                        >
                        </v-select>
                        <v-select
                          v-if="newProduct.Currency === 'SEK'"
                          variant="outlined"
                          density="compact"
                          :rules="[requiredRule]"
                          class="mt-3"
                          color="secondary"
                          v-model="newProduct.Vat"
                          :items="['15%', 'Export(0%)']"
                        >
                        </v-select>
                        <v-select
                          v-if="newProduct.Currency == 'Select Currency'"
                          variant="outlined"
                          density="compact"
                          color="secondary"
                          :rules="[requiredRule]"
                          v-model="newProduct.Vat"
                          class="mt-3"
                          :items="['15%', '25%', 'Export(0%)']"
                        >
                        </v-select>
                        <v-select
                          v-if="
                            newProduct.Currency == 'NOK' &&
                            newProduct.ProductType == 'Survice'
                          "
                          variant="outlined"
                          density="compact"
                          :rules="[requiredRule]"
                          color="secondary"
                          v-model="newProduct.Vat"
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
                          v-model="newProduct.IncVat"
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
                        <div>
                          <v-btn
                            class="rounded-circle text-secondary ms-3"
                            v-if="resaleRows.length == resaleRows.length"
                            variant="outlined"
                            v-on:click="addRow(index)"
                            width="10px"
                          >
                            <v-icon class="text-h5">mdi-plus</v-icon>
                          </v-btn>
                          <v-btn
                            v-if="resaleRows.length >= 0"
                            :disabled="resaleRows.length == 1"
                            class="rounded-circle text-red ms-3"
                            variant="outlined"
                            v-on:click="minRow(index)"
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
          <v-btn color="blue" :disabled="!isvalid"  @click="handleAddProduct"> Add Product </v-btn>
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