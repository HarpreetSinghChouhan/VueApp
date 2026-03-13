<script setup>

</script>
<template>
    <v-card id="vCard" class="pa-5">
        <v-card-item>
            <div class="text-h4 font-italic">
                Location Name
            </div>
            <div class="mt-5">
                Location name
            </div>
            <v-text-field color="secondary" placeholder="Empire Hub " variant="outlined">

            </v-text-field>
            <v-checkbox label="Fulfit online orders from this location">

            </v-checkbox>
            <div class="d-flex flex-row">
                <div class="d-inline  pt-4 bg-secondary rounded px-3">
                    <v-icon>mdi-information-outline</v-icon>
                </div>
                <div class="text-h6 px-6">
                    This is your default location. To change whether you fulfill online orders from this
                    location, select another default location first.
                </div>
            </div>
        </v-card-item>
    </v-card>
    <v-card id="vCard" class="pa-5">
        <v-card-item>
            <div class="text-h4 font-italic ">
                Address
            </div>
            <div>
                <div class="mt-4">
                    Country/religion
                </div>
                <v-select color="secondary" class="" :items="['United States', 'Canada', 'Uk']" variant="outlined">

                </v-select>
            </div>
            <div>
                <v-row>
                    <v-col cols="4">
                        <div>
                            Address
                        </div>
                        <v-text-field color="secondary" placeholder="123,New Street" variant="outlined">

                        </v-text-field>

                    </v-col>
                    <v-col cols="4">
                        <div>
                            Apartment,suite,etc.
                        </div>
                        <v-text-field color="secondary" placeholder="Empire Heights" variant="outlined">

                        </v-text-field>

                    </v-col>
                    <v-col cols="4">
                        Phone
                        <v-number-input color="secondary" variant="outlined" placeholder="+1 (123) 655677283"
                            control-variant="hidden">

                        </v-number-input>


                    </v-col>
                    <v-col cols="4">
                        <div>
                            City
                        </div>
                        <v-text-field color="secondary" placeholder="New York " variant="outlined">

                        </v-text-field>

                    </v-col>
                    <v-col cols="4">
                        <div>
                            State
                        </div>
                        <v-text-field color="secondary" placeholder="NY" variant="outlined">

                        </v-text-field>

                    </v-col>
                    <v-col cols="4">
                        PIN Code
                        <v-number-input color="secondary" placeholder="123897" variant="outlined"
                            control-variant="hidden">

                        </v-number-input>


                    </v-col>
                </v-row>
            </div>
        </v-card-item>
    </v-card>


</template>