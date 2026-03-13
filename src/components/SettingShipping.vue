<script setup>

</script>
<template>

    <v-card id="vCard" class="pa-5">
        <v-card-title>
            Shipping Zone
        </v-card-title>
        <v-card-item>
            <div class="d-flex justify-space-between text-secondary">
                <div>
                    Choose where you ship and how much you charge for Shipping at checkout
                </div>
                <div>
                    <v-btn class="btn text-none " variant="outlined">
                        Create Zone
                    </v-btn>
                </div>
            </div>
            <div class="d-flex justify-space-between">
                <div class="d-flex">
                    <div>
                        <img src="https://demos.pixinvent.com/vuexy-vuejs-admin-template/demo-1/assets/avatar-1-DMk2FF1-.png"
                            alt="dddd" width="40px" class="rounded-circle">
                    </div>
                    <div class="ms-2 pt-1">
                        <p id="hightLine">
                            Domestic
                        </p>
                        <p id="hightLine" style="font-size: small;">
                            United State Of America
                        </p>
                    </div>
                </div>
                <div class="d-flex">
                    <div> <v-btn color="" variant="text" class="px-0">
                            <v-icon>mdi-pencil-outline</v-icon></v-btn></div>
                    <div class="me-4"><v-btn variant="text"><v-icon>mdi-trash-can-outline</v-icon></v-btn>
                    </div>
                    <!-- <div><v-icon>mdi-</v-icon></div> -->
                </div>
            </div>
            <div>
                <v-table theme="" striped="odd" class="rounded bg-secondary ">
                    <thead>
                        <tr>
                            <th>
                                RATE NAME
                            </th>
                            <th>
                                CONDITION
                            </th>
                            <th>
                                PRICE
                            </th>
                            <th>
                                ACTION
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> Weight </td>
                            <td>5kg-100kg</td>
                            <td>$9</td>
                            <td> <v-icon>mdi-dots-vertical</v-icon></td>
                        </tr>
                        <tr>
                            <td>Vat</td>
                            <td> 12%</td>
                            <td>$25 </td>
                            <td><v-icon>mdi-dots-vertical</v-icon></td>
                        </tr>
                        <tr>
                            <td> Duty </td>
                            <td>-</td>
                            <td>-</td>
                            <td><v-icon>mdi-dots-vertical</v-icon></td>
                        </tr>
                    </tbody>
                </v-table>
            </div>
            <div>
                <v-btn class="btn mt-4" color="secondary" variant="outlined">
                    Add Rate
                </v-btn>
            </div>
            <div class="mt-4 d-flex justify-space-between">
                <div class="d-flex">
                    <div>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAjCAYAAADxG9hnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAU1SURBVHgBxVhfTFtVGP/ObTtgjKxABCrFHMCxaALt8EGCupUReIEYpjNZFHU8LIoxAZJp4gMC+qLyAGjMEo1hZnHhQZ2JLIubpDDnpg8yQGM2GHATLv80oYUWgULv8Xyn3Esp0BYC45e09/a73z3nd37fn3tuCewAdkc7BUOMXWUqBWDmgJW4JSLJ4GdyX/crfbBNkGgd7Y5LjhUiVUgEXuc/zRHc5YaJi935nr/bMsfHoyIlRXJAArlFl52qJDk5iRokkZ+XusHPknoIEuIPaD9pnOo7a5TI3bEMq3M0Pd0eaR6yNYF2829dZxs6fxqpbbnQC555n7C/f74AjhdaoZXbOm+MCNuR7CRobnwOPN5l+KD5DgyNuODT0/FgS/bp48U882xrXLqliRDi3mw+4xYkaMLhBOfE1Dz1zi/rJBCDI27It6XCHwPTum1oeAYGH8yIdSEJhOnpAoi1rVOudlGFigXGiuIIkSGSItyRlp76zqmqjHq8awTKS7Og8/oID0E8TE7P8zCYOMFlOMHV6bmtCDsCryE+q7LAsczY0OGBLS7K/1W+XGSZmpJhK0VQiVn3kvPzj0/S6vNdur2sJAvqeUhwsi8v/bm6BAIXmovhyONJ4Gm4Cb1BCiHmP2yC2YVh2ASUmAzOybS0dWTWEfGTmPZf7oxTlCk4HLjK3v5/9NUiUK3egYBtaNgF2wEDQldMxnZ+WqTZ9NCUV/5Y45pbbA0NR8+virgVw6Dh3Ku5a8qsQqskTZmWghmwJ/kgHCSbvS6xpLgVz4UimBdzbl/ta29dA40Ixr5eVIgC7zbe1G+uq34Kzpw6ChNciavXA1WDIfuk6Th4PT6ofudnoVLsiy/BQVtqWCJchQbG2EWsJEGk49v7FcDJBEs/OOwWq/Z6A0pgj8BwDT1wQceV+zA5teY7uUoKF6GN4VcUUJPDK8Jh9jJWy4+NIjR5J78Z5QeKTam8NFMMhiHR8gRl18KhSY/E8m0popR5r9HLVsNHyheQu3myhsKdMaYkStg5kUTAxqCM50VZSea6ZM3JNq9OmqLb8Do2NvT1zkdceTiYx6jVYVQJVMDqClGJju/v6YmphQPDFJwnmh0rCStGC4dmRxiffAJMxkeio5KcXGFMNMfZTj+fs9oj/hLxR2A4zrxwVEzWceVeYKJDB4Ri5VwF9L16Q0vWQ8IXm5z2OIivb4TDEZJVA2NAJdesj+bnpYiJJ6e9+kU8x8qxpB7UbZiMj3LCmBfBZY6+OVlmQcizgzARCWy8ahjVVAi5DJXV14KfqALdvJ3jJxShY8y9cQ5mTP9ClKCifHs2GVioM73xjq26aOgYbG4O1AUFooVRe1jtNiSwgrSwFLU/WfCzUV61FPYTBGSJqdAP+w0GsnHu7TdlmJmB/YS6tNRPxqxWB5fGCfsJAxSJZ83YYxku3lUi7cz3BASYbB0bzxTla+651SYR0gD7AOZfboPs7MDGyMXViPHDKIn8vrK74NXC61xspoUiiXxjMtvV1bRyt68FHiKkY/a2xOJiOcApCPgyxA8OeBhg0J2hKPqedd2b3ophpYrx5IE9Biao0bhStd4WglGaRpO+uuwkMbEU9gBsib/XDPxeZKl7T4ZwRBC4mQaV95bdbv1Bybnx0hbASjIpk43Lt2/VwC7AVFjYFm9Nb9zq3Tfi3xIKTbczP8FqcsBOwJOSfzfxxOwO5xb1/yMKpXbVv4xb/xMECI3g7lYZfM0r4YdIBLZNZCMpP5WISv0qEU3QIDE+uSSbDIY+iyzLsE38D8ATWFj8AJtqAAAAAElFTkSuQmCC"
                            alt="dddd" width="38px" class="rounded-circle">
                    </div>
                    <div class="ms-2 pt-1">
                        <p id="hightLine">
                            International
                        </p>
                        <p id="hightLine" style="font-size: small;">
                            United State Of America
                        </p>
                    </div>
                </div>
                <div class="d-flex">
                    <div> <v-btn color="" variant="text" class="px-0">
                            <v-icon>mdi-pencil-outline</v-icon></v-btn></div>
                    <div class="me-4"><v-btn variant="text"><v-icon>mdi-trash-can-outline</v-icon></v-btn>
                    </div>
                    <!-- <div><v-icon>mdi-</v-icon></div> -->
                </div>
            </div>
            <div>
                <v-table theme="" striped="odd" class="mt-4 rounded bg-secondary ">
                    <thead>
                        <tr>
                            <th>
                                RATE NAME
                            </th>
                            <th>
                                CONDITION
                            </th>
                            <th>
                                PRICE
                            </th>
                            <th>
                                ACTION
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> Weight </td>
                            <td>5kg-100kg</td>
                            <td>$9</td>
                            <td> <v-icon>mdi-dots-vertical</v-icon></td>
                        </tr>
                        <tr>
                            <td>Vat</td>
                            <td> 12%</td>
                            <td>$25 </td>
                            <td><v-icon>mdi-dots-vertical</v-icon></td>
                        </tr>
                        <tr>
                            <td> Duty </td>
                            <td>Japan</td>
                            <td>$49</td>
                            <td><v-icon>mdi-dots-vertical</v-icon></td>
                        </tr>
                    </tbody>
                </v-table>
            </div>
            <div>
                <v-btn class="btn mt-4" color="secondary" variant="outlined">
                    Add Rate
                </v-btn>
            </div>
        </v-card-item>

    </v-card>
</template>