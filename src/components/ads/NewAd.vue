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
                               @click="triggerUpload"
                        >
                            Upload
                            <v-icon right dark>cloud_upload</v-icon>
                        </v-btn>
                        <input type="file" style="display: none"
                               @change="onFileChange"
                               accept="image/*" ref="fileInput">
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                        <img :src="imageSrc"
                             width="400" v-if="imageSrc">
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
                               :loading="loading"
                               :disabled="!valid || !image || loading"
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
                valid: false,
                image: null,
                imageSrc: ''
            }
        },
        computed: {
            loading() {
                return this.$store.getters.loading
            }
        },
        methods: {
            createAd() {
                if (this.$refs.form.validate() && this.image) {
                    const ad = {
                        title: this.title,
                        description: this.description,
                        promo: this.promo,
                        image: this.image
                    }
                    this.$store.dispatch("createAd", ad)
                        .then(() => {
                            this.$router.push('/list')
                        })
                        .catch(() => {
                        })
                }
            },
            triggerUpload() {
                this.$refs.fileInput.click()
            },
            onFileChange(event) {
                const file = event.target.files[0]
                const reader = new FileReader()
                reader.onload = e => {
                    this.imageSrc = reader.result
                }
                reader.readAsDataURL(file)
                this.image = file
            }
        }
    }
</script>