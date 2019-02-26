<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-3">My ads</h1>

                <v-card
                        v-for="ad in ads"
                        :key="ad.id"
                        class="elevation-8 mb-3">
                    <v-layout row>
                        <v-flex xs4>
                            <v-img
                                    :src="ad.imageSrc"
                                    height="165px">
                            </v-img>
                        </v-flex>
                        <v-flex xs8>
                            <v-card-text>
                                <h2>{{ad.title}} </h2>
                                <p>{{ad.description}}</p>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn class="info"
                                       :to="'/ad/'+ad.id">Open
                                </v-btn>
                            </v-card-actions>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
    export default {
        data() {
            return {
                ads: [
                    {
                        title: 'Ad 1',
                        description: 'descr 1',
                        promo: false,
                        imageSrc: 'https://im0-tub-ru.yandex.net/i?id=b227d3aa3b6c39938938c4bcb3ce18d6-l&n=13',
                        id: '1'
                    },
                    {
                        title: 'Ad 2',
                        description: 'descr 2',
                        promo: true,
                        imageSrc: 'https://im0-tub-ru.yandex.net/i?id=5aa66a41c7d9cf451714e2274372472c-l&n=13',
                        id: '2'
                    },
                    {
                        title: 'Ad 3',
                        description: 'descr 3',
                        promo: true,
                        imageSrc: 'https://img1.liveinternet.ru/images/attach/c/4/81/245/81245733_large_3658d428d1de.jpg',
                        id: '3'
                    },
                ]
            }
        }
    }
</script>