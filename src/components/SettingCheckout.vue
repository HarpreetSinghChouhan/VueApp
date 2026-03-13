<script setup>
</script>
<template>
    <v-card id="vCard">
        <v-card-item>
            <h4>
                Customer Contant Method
            </h4>
            <p>
                Select what contact method customers use to check out.
            </p>
            <v-radio-group v-model="radio">
                <v-radio label="Phone Number" value="Number"></v-radio>
                <v-radio label="Email" value="email"></v-radio>
            </v-radio-group>
            <div class="d-flex py-3 px-4 rounded" id="info">
                <v-icon>mdi-information-outline</v-icon>
                <div class="ms-4">
                    To send SMS updates, you need to install an SMS App
                </div>
            </div>
        </v-card-item>
    </v-card>
    <v-card class=" pa-3" id="vCard">
        <v-card-item>
            <h4>
                Customer Information
            </h4>
            <p class="mt-5">
                Full Name
            </p>
            <v-radio-group v-model="radio">
                <v-radio label="Only Requrie last name" value="Number"></v-radio>
                <v-radio label="Require First And last name" value="name"></v-radio>
            </v-radio-group>
            <hr>
            <p class="mt-3">
                Company Name
            </p>
            <v-radio-group v-model="radio">
                <v-radio label="Don't include" value="Number"></v-radio>
                <v-radio label="Optional" value="optional"></v-radio>
                <v-radio label="Required" value="Required"></v-radio>
            </v-radio-group>
            <hr>
            <p class="mt-3">
                Address line 2 (apartment, unit, etc.)
            </p>
            <v-radio-group v-model="radio">
                <v-radio label="Don't include" value="include"></v-radio>
                <v-radio label="Optional" value="Number"></v-radio>
                <v-radio label="Required" value="Requireds"></v-radio>
            </v-radio-group>
            <hr>
            <p class="mt-3">
                Shipping address phone number
            </p>
            <v-radio-group v-model="radio">
                <v-radio label="Don't include" value="includes"></v-radio>
                <v-radio label="Optional" value="Number"></v-radio>
                <v-radio label="Required" value="Requiredes"></v-radio>
            </v-radio-group>

        </v-card-item>
    </v-card>

</template>