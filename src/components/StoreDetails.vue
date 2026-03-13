<script setup>

</script>
<template>
    <v-row>
        <v-col md="12"> <v-card class="pb-5" id="vCard">
                <p class=" ms-5 mt-3">
                    Profile
                </p>
                <v-container>
                    <v-row>
                        <v-col sm="6" cols="12">
                            <div>
                                Store Name
                            </div>
                            <v-text-field placeholder="John Wick" variant="outlined">
                            </v-text-field>
                        </v-col>
                        <v-col sm="6" cols="12">
                            <div>
                                Phone
                            </div>
                            <v-number-input variant="outlined" control-variant="hidden" type="Number"
                                placeholder="+91 9999999999">
                            </v-number-input>
                        </v-col  >
                        <v-col sm="6" cols="12">
                            <div>
                                Store contant email
                            </div>
                            <v-text-field variant="outlined" type="email" placeholder="johnwick@gmail.com">
                            </v-text-field>
                        </v-col>
                        <v-col sm="6" cols="12">
                            <div>
                                Sender email
                            </div>
                            <v-text-field variant="outlined" type="email" placeholder="johndae@gmail.com">
                            </v-text-field>
                        </v-col>
                        <c-col  cols="12">
                            <div class="d-flex bg-secondary px-5 rounded py-1">
                                <div class="bg-purple align-content-center ps-3 rounded">
                                    <v-icon class=" mt-1 me-3" color="yellow">mdi-bell</v-icon>
                                </div>
                                <div>
                                    <p class="text-h5 ms-3 font-italic ">
                                        Confirm that you have access to johndoe@gmail.com in sender email
                                        settings.
                                    </p>
                                </div>
                            </div>

                        </c-col>

                    </v-row>
                </v-container>
            </v-card>
            <v-card id="vCard" class="d-block ">
                <p class=" ms-5 mt-3">
                    Billing Information
                </p>
                <v-container>
                    <v-row>
                        <v-col cols="6">
                            <div>
                                Legal Bussiness name
                            </div>
                            <v-text-field placeholder="Pixinvent" variant="outlined">
                            </v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <div>
                                Country/Region
                            </div>
                            <v-number-input variant="outlined" control-variant="hidden" type="Number"
                                placeholder="+91 9999999999">
                            </v-number-input>
                        </v-col>
                        <v-col cols="6">
                            <div>
                                Address
                            </div>
                            <v-text-field variant="outlined" type="email" placeholder="126, New Street">
                            </v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <div>
                                Apartment,suit,etc.
                            </div>
                            <v-text-field variant="outlined" type="email" placeholder="Empire Heights">
                            </v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <div>
                                City
                            </div>
                            <v-text-field variant="outlined" type="Address" placeholder="City">
                            </v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <div>
                                State
                            </div>
                            <v-text-field variant="outlined" type="text" placeholder="NY">
                            </v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <div>
                                PIN Code
                            </div>
                            <v-number-input variant="outlined" control-variant="hidden" type="email"
                                placeholder="111011">
                            </v-number-input>
                        </v-col>

                    </v-row>
                </v-container>
            </v-card>
            <v-card class="" id="vCard">
                <v-container>
                    <v-row>

                        <v-col cols="12">
                            <div>
                                <p class="text-h5 ">
                                    Time zone and units of measurement
                                </p>
                            </div>
                            <div>
                                <p class="text-h7">
                                    Used to calculate product prices,
                                    Used to calculate product prices, Shipping weight, and order time
                                </p>
                            </div>
                        </v-col>
                        <v-col cols="12">
                            <div>
                                Time Zone
                            </div>
                            <v-select color="secondary" class="mt-4" label="Time Zone"
                                :items="['(UTC-12:00) International date Line West', '(UTC-11:00) Coordinated Universal Time-11', '(UTC-09:00) Alaska', '(UTC-08:00) Baja California']"
                                variant="outlined">

                            </v-select>
                        </v-col>
                        <v-col cols="6">
                            <div>
                                Unit System
                            </div>
                            <v-select color="secondary" class="mt-4" label="Unit System"
                                :items="['Metric system', 'Imperial', 'International System']" variant="outlined">

                            </v-select>
                        </v-col>
                        <v-col cols="6">
                            <div>
                                Default weight unit
                            </div>
                            <v-select color="secondary" class="mt-4" label=" Default weight unit"
                                :items="['Kilogram', 'Pounds', 'Gram']" variant="outlined">
                                Kilogram
                            </v-select>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
            <v-card id="vCard" class="">
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <div>
                                <p class="text-h5 ">
                                    Store currency
                                </p>
                            </div>
                            <div>
                                <p class="text-h7">
                                    The currency your products are sold in.
                                </p>
                            </div>
                        </v-col>
                        <v-col cols="12">
                            <div>
                                Store currency
                            </div>
                            <v-select class="" label="Store currency" :items="['USD', 'INR', 'Euro', 'Pound']"
                                variant="outlined" color="secondary">
                            </v-select>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
            <v-card id="vCard" class="">
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <div>
                                <p class="text-h5 ">
                                    Order id format
                                </p>
                            </div>
                            <div>
                                <p class="text-h7">
                                    Shown on the Orders page, customer pages, and customer order notifications
                                    to identify orders.
                                </p>
                            </div>
                        </v-col>
                        <v-col>
                            <div class="ps-5 text-h6 ms-4 pb-2">
                                <p>
                                    prefix
                                </p>
                            </div>
                            <v-text-field variant="outlined" prepend-inner-icon="mdi-pound">

                                <!-- <v-icon class="" color="blue lighter-3" >mdi-pound</v-icon> -->
                            </v-text-field>

                        </v-col>
                        <v-col>
                            <div class="pb-2 text-h6">
                                <p>
                                    suffix
                                </p>
                            </div>
                            <v-text-field variant="outlined" append-inner-icon="mdi-currency-usd">

                                <!-- <v-icon class="" color="blue lighter-3" >mdi-pound</v-icon> -->
                            </v-text-field>

                        </v-col>
                        <v-col cols="12">
                            <div>
                                <p>
                                    Your order Id will appear as #1001,#1002,1003...
                                </p>
                            </div>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>


        </v-col>
    </v-row>
</template>
<style>
</style>