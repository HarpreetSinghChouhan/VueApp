
<script setup>
  import { ref } from "vue"; 
  import draggable from "vuedraggable";
  import FirstComp from "./FirstComp.vue";
import SecondComp from "./SecondCom.vue";
import ThirdComp from "./ThirdCom.vue";
import FourthComp from "./FourthCom.vue";
const componentMap = {
  first: FirstComp,
  second: SecondComp,
  third: ThirdComp,
  fourth: FourthComp 
};
const rows = ref([
  {
    id: 1,
    columns: [
      {
        id: "c1",
        span: 4,
        items: [{ id: 1,title: "User Info", type: "first",component:FirstComp }],
      },
      {
        id: "c2",
        span: 4,
        items: [{ id: 2, title:"Tabs Details", type: "second",component:SecondComp }],
      },
      {
        id: "c3",
        span: 4,
        items: [{ id: 3, title:"Customer Note", type: "third",component:ThirdComp }],
      }
    ]
  },
  {
    id: 2,
    columns: [
      {
        id: "c4",
        span: 12,
        items: [{ id: 4, title:"All Info", type: "fourth",component:FourthComp }] ,
      }
    ]
  }
]);
 const onChange = (evt) => {
   console.log(evt.added)
  //  console.log();
  //  evt.added.element = {
  //   // id:evt.added.element.id,
  //   // id:evt.added.element.id;
  //   // id:evt.added.element.id;
  //   component: evt.added.element.component

  //  }


   console.log(rows.value)
 }
 
</script>
<template>
 <v-container>
   <draggable v-model="rows" item-key="id" :animation="2000" handle=".row-handle">
  <template #item="{ element: row }">
    <v-row class="border my-4  bg-secondary"  >
      <v-col cols="12" class="row-handle text-center ">
       <v-icon>mdi-drag</v-icon> Drag Row
      </v-col>
      <v-col
        v-for="col in row.columns"
        :key="col.id"
        :md="col.span"
        cols="12"
        class="border pa-3 bg-white">
        <draggable
          v-model="col.items"
          item-key="id" 
          group="shared"
          :animation="3000"
          @change="onChange"
          class="h-100">
          <template #item="{ element }" class="h-100 " > 
            <component
              :is="element.component" 
                
            /> 
          </template>
        </draggable>
        
      </v-col>

    </v-row>
  </template>
</draggable>
 </v-container>

</template>
<style scoped>
 
</style>