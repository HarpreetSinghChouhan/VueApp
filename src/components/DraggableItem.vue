<script setup>
import FirstComp from "./FirstComp.vue";
import SecondComp from "./SecondCom.vue";
import ThirdComp from "./ThirdCom.vue";

defineProps({
  element: {
    type: Object,
    required: true
  }
});

const componentMap = {
  first: FirstComp,
  second: SecondComp,
  third: ThirdComp
};
</script>

<template>
             
  <div class="draggable-item" :data-id="element.id">
    <component
      :is="componentMap[element.type]"
      :element="element"
    />
  </div>
</template>
