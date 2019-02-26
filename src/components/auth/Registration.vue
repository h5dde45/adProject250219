<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md6>
                <v-card class="elevation-12">
                    <v-toolbar dark color="primary">
                        <v-toolbar-title>Registration form</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form ref="form"
                                v-model="valid"
                                lazy-validation>
                            <v-text-field prepend-icon="person" name="email" v-model="email"
                                          :rules="emailRules"
                                          label="Email" type="email"></v-text-field>
                            <v-text-field prepend-icon="lock" name="password" v-model="password"
                                          label="Password" type="password" :rules="passwordRules"
                            ></v-text-field>
                            <v-text-field prepend-icon="lock" name="confirm-password" v-model="confirmPassword"
                                          label="Confirm password" type="password" :rules="confirmPasswordRules"
                            ></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary"
                               v-on:click="onSubmit"
                               :disabled="!valid"
                        >Create account
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
    export default {
        data() {
            return {
                email: '',
                password: '',
                confirmPassword: '',
                valid: false,
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
                ],
                passwordRules: [
                    v => !!v || 'Password is required',
                    v => (v && v.length >= 6) || 'The password must be at least 6 characters long'
                ],
                confirmPasswordRules: [
                    v => !!v || 'Password is required',
                    v => (v === this.password ) || 'Passwords are different'
                ],
            }
        },
        methods: {
            onSubmit() {
                if (this.$refs.form.validate()) {
                    const user = {
                        email: this.email,
                        password: this.password
                    }
                    console.log(user)
                }
            }
        }
    }
</script>