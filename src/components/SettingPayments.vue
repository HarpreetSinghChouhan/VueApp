<script setup>
</script>
<template>
    <v-card id="vCard" class="pa-4">
        <v-card-item>
            <p class="text-h6 font-italic">
                Payment providers
            </p>
            <p class="mt-4">
                Providers that enable you to accept payment methods at a rate set by the third-party. An
                additional fee will apply to new orders once you select a plan.
            </p>
            <v-btn class="btn mt-4" color="yellow" variant="outlined">
                Choose a Providers
            </v-btn>
        </v-card-item>
    </v-card>
    <v-card id="vCard" class="pa-4 ">
        <v-container>
            <div>
                <p class="text-h5 font-italic">
                    Supported payment methods
                </p>
                <p class="text-h6 font-italic">
                    Payment methods that are available with one of Vuexy's approved payment providers.
                </p>
            </div>
            <div class="text-h5 mt-4">
                Default
            </div>
            <div>
                <v-table class="bg-secondary rounded">
                    <thead>
                        <tr>
                            <th>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAZCAYAAAA14t7uAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI2SURBVHgBpVXLbtNAFD3jRxoJVLmB0k2FEqFEtCxq2CAKQtmzIB/AopEoW8oX1PmCskVs4A/gC5pK7MkKWHqDFIQQ4dGCY89cZia4ieMJccqRrubOzPXxyZ0zDsMEGtudfWIUYD4GMkIZPZvh5Yc3QXe6wJqcSNIWisGT4cvY4YTD+u3g4J/Ef4vPgr3GnSCYXGBpUt8OfDl7i7NjELuohd1AtWmsWNio4v/gnRuOOZw0sQk+mcr5EJREZirGwCxJwaQ+u4TI0r1HRrHEVu5BEuDHnyGi7+b4/Q385Iuu4T/7OL5/z88RE43fdgqRoCjEhQqEd/5g7dm7vQwxDI4g4ihMvHpplFjWvhq0K6rNwHNjfM0RRz/0Ty6CXzsPIZaXdc4c1LTicmL2L4khiiDxb5ySKtix7Wli2V/zxRDzWyHW1xHdbWbWXNcNtd0Ek/4zeI14PJOQlpa00uHNW9kNhjBs1wYjH5PBaiLWD0NFCplzeUji4iqSjWujfUzzWl01phck1wpeqeCk9QALwxYdNVjKEUDew0n1MhaFtFin394IVe4oR5iOSFQ8LAZ60t/dfJrOnJjBs0wHVyphvkTWY0SvZUNf9Nub4eSWM+vjwysreR7CUdktt9SpYw6Uj7fyal0duXVGr4qQamJ5OarTi7P6Kz+SPRSEUmyw2oqx2Ca7kFoFx+aoJU5WdVy/8lgOuT/Wj48ahRUz0+La8/eHcmhOlfY+7V69joKwZrwv32QmjrAA/gBb5sTeaY2ouwAAAABJRU5ErkJggg=="
                                    class="bg-white  px-6 py-3 rounded mt-1 ms-1" alt="fghmrftd" width="80px"></img>
                            </th>
                            <th>

                            </th>
                            <th>
                                <v-btn color="purple" class="text-end text-none" text="Active Paypal"
                                    variant="outlined">

                                </v-btn>
                            </th>
                        </tr>

                    </thead>
                    <tbody>
                        <tr class="px-5">
                            <td>
                                <div>Provide </div>
                                <div> PayPal</div>
                            </td>
                            <td>
                                <div> Status</div>
                                <div class=""> <span
                                        class="text-yellow-darken-3 py-1 rounded px-4 bg-yellow-lighten-3 ">
                                        Inactive</span> </div>
                            </td>
                            <td>
                                <div>Transaction Fee</div>
                                <div>2.99%</div>
                            </td>
                        </tr>
                    </tbody>
                </v-table>
            </div>
            <div>
                <v-btn class="mt-4 bg-secondary-lighten-3 text-none" color="secondary" text="Add Payment Methods"
                    variant="outlined">

                </v-btn>
            </div>
        </v-container>
    </v-card>
    <v-card class=" pa-6" id="vCard">
        <v-card-item>
            <div>
                <div class="text-h5">
                    Manual payment methods
                </div>
                <div class="text-subtitle-1 mt-4">
                    Payments that are made outside your online store. When a customer selects a manual
                    payment method such as cash on delivery, you'll need to approve their order before it
                    can be fulfilled.
                </div>
            </div>
            <div>
                <v-row>
                    <v-col cols="4">
                        <v-select color="secondary" class="mt-4" v-model="text1"
                            :items="['Create Customer Payment Method', 'Bank Deposit', 'Money Order', 'Cash On Delivery(COD)']"
                            variant="outlined">

                        </v-select>
                    </v-col>
                </v-row>
            </div>
        </v-card-item>
    </v-card>
</template>
<style></style>