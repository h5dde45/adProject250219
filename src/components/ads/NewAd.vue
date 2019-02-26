<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-3">Create new ad</h1>
                <v-form ref="form" class="mb-3"
                        v-model="valid"
                        validation>
                    <v-text-field name="title" v-model="title" requared
                                  :rules="[v => !!v || 'Title is required']"
                                  label="Ad title" type="text"></v-text-field>
                    <v-textarea name="description" v-model="description"
                                label="Ad description" type="text"
                                :rules="[v => !!v || 'Description is required']"
                    ></v-textarea>
                </v-form>
                <v-layout row class="mb-3">
                    <v-flex xs12>
                        <v-btn color="blue-grey"
                               class="white--text"
                        >
                            Upload
                            <v-icon right dark>cloud_upload</v-icon>
                        </v-btn>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                        <img src=""
                             width="400">
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                        <v-switch
                                v-model="promo"
                                label="Ad to promo?"
                                color="red darken-3"
                        ></v-switch>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                        <v-spacer></v-spacer>
                        <v-btn class="success"
                               :disabled="!valid"
                               @click="createAd">Create ad
                        </v-btn>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
    export default {
        data() {
            return {
                title: '',
                description: '',
                promo: false,
                valid: false
            }
        },
        methods: {
            createAd() {
                if (this.$refs.form.validate()) {
                    const ad = {
                        title: this.title,
                        description: this.description,
                        promo: this.promo,

                    }
                    console.log(ad)
                }
            }
        }
    }
</script>