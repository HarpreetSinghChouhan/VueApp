<script setup>
import {defineProps,defineEmits, computed } from "vue";
import draggable from "vuedraggable";

// import FirstComp from "./FirstComp.vue";
// import SecondComp from "./SecondCom.vue";
// import ThirdComp from "./ThirdCom.vue";
import DraggableItem from "./DraggableItem.vue";
const props = defineProps({
  modelValue: {
    type: Array,
    default: () => [],
  },
  columnType: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const list = computed({
  get: () => props.modelValue,
  set: (val) => emit("update:modelValue", val),
});

</script>

<template>
  <draggable
    v-model="list"
    group="tasks"
    item-key="id"
    class="h-100 "
   :animation="2000"
  >
    <template #item="{ element }">
      
      <DraggableItem
        :key="element.id"
        :element="element"
      >
      </DraggableItem>
    </template>
  </draggable>
</template>