<template>
  <v-form ref="form" @submit.prevent="submitForm">
    <v-text-field
      v-model="name"
      :rules="[requiredRule, minLengthRule(3)]"
      label="Name"
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="[requiredRule, emailRule]"
      label="Email"
    ></v-text-field>

    <v-btn type="submit" >Submit</v-btn>
  </v-form>
</template>

<script setup>
import { ref } from 'vue';
const form = ref(null);
const name = ref('');
const email = ref('');

const requiredRule = value => !!value || 'Field is required.';
const minLengthRule = len => value => (value && value.length >= len) || `Must be at least ${len} characters.`;
const emailRule = value => /.+@.+\..+/.test(value) || 'Must be a valid email.';

async function submitForm() {
  const { valid } = await form.value.validate();
  if (valid) {
    // Form is valid, proceed with submission
    console.log('Form submitted:', { name: name.value, email: email.value });
  } else {
    console.log('Form is invalid.');    
  }
}
</script>