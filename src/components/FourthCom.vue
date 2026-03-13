<script setup>
// import AddressCom from './AddressCom.vue';
import draggable from "vuedraggable";
import { computed,defineProps, ref, watch } from "vue";
import OrdersCom from "./OrdersCom.vue";
import TimelineCom from "./TimelineCom.vue";
import AddressCom from "./AddressCom.vue";
import NotificationCom from "./NotificationCom.vue";
import EmailCom from "./EmailCom.vue";
// import { removed } from "vuetify/lib/util";
const Tablate = ref([
  { id: 6, title: "OrderDetail", type: "one", component: OrdersCom },
  { id: 7, title: "TimeLine", type: "two", component: TimelineCom },
  { id: 8, title: "Address", type: "three", component: AddressCom },
  { id: 9, title: "Notification", type: "four", component: NotificationCom },
  { id: 10, title: "Email", type: "five", component: EmailCom },
]);
const tab = ref("one");

watch(tab,(newValue)=>{
  console.log(newValue);
})
const props = defineProps({
  element:{
    type:Object,
    required:true
  }
})
const onChange = (evt) =>{
    console.log(evt);
}
// const emit = defineEmits(["update:modelValue",onChange]);
// const props = defineProps({
//   element:{
//     type:Object,
//     required:true
//   }
// })
// // const emit = defineEmits(["update:modelValue","item-removed"]);
// const onChange = (evt) =>{
//   //  console.log(evt.removed.element.component);
//   if(evt.removed){
//    const items =  ...Tablate
// console.log(evt.removed.element);


//     // const RemovedItem = evt.removed.element
//   }
// }
</script>
<template>
  <v-card>
    <!-- <v-tabs v-model="tab" > -->
    <draggable
      v-model="Tablate"
      v-model:selected="tab"
      class="d-flex"
      item-key="id"
      tag="div"
      @change="onChange"
      group="shared"
    >
      <template #item="{ element }">
        <div class="tab-wrapper">
          <v-tabs v-model="tab">
            <v-tab :value="element.type" class="v-btn">
              <v-icon>mdi-account-outline</v-icon>
              {{ element.title }}
            </v-tab>
          </v-tabs>
        </div>
      </template>
    </draggable>
    <!-- </v-tabs> -->
    <v-window v-model="tab">
      <v-window-item v-for="ta in Tablate" :key="ta.id" :value="ta.type">
        <component :is="ta.component"></component> </v-window-item
    ></v-window>
  </v-card>
</template>
<!-- <style scoped>
  draggable {
   display: flex;
  }
</style> -->
<!-- <v-card-text>
      <component :is="activeComponent"
      :key="tab" />
    </v-card-text> -->
<!-- <v-window-item >
    {{ Tablate.component }}
  </v-window-item> -->
<!-- v-card class="bg-secondary mb-4">
    <v-tabs class="btn-group bg-yellow" v-model="tab">
      <v-tab value="one" class="v-btn">
        <v-icon>mdi-account-outline</v-icon>Orders</v-tab
      >
      <v-tab value="two" class="v-btn">
        <v-icon>mdi-account-outline</v-icon>TimeLine</v-tab
      >
      <v-tab value="three" class="v-btn">
        <v-icon>mdi-account-outline</v-icon>Address && Billing</v-tab
      >
      <v-tab value="four" class="v-btn">
        <v-icon>mdi-account-outline</v-icon>Notification</v-tab
      >
      <v-tab value="five" class="v-btn">
        <v-icon> mdi-account-outline </v-icon>Email</v-tab
      >
    </v-tabs>
    <br />
    <v-tabs-window v-model="tab">
      <v-tabs-window-item value="one">
        <OrdersCom />
      </v-tabs-window-item>
      <v-tabs-window-item class="px-10" value="two">
        <TimelineCom />
      </v-tabs-window-item>
      <v-tabs-window-item value="three">
        <AddressCom />
      </v-tabs-window-item>
      <v-tabs-window-item value="four">
        <NotificationCom />
      </v-tabs-window-item>
      <v-tabs-window-item value="five">
        <EmailCom />
      </v-tabs-window-item>
    </v-tabs-window>
  </v-card>  -->
