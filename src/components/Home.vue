<template>
    <div>
        <v-container>
            <v-layout row>
                <v-flex xs12>
                    <v-carousel>
                        <v-carousel-item
                                v-for="ad in ads"
                                :key="ad.id"
                                :src="ad.imageSrc"
                        >
                            <div class="car-link">
                                <v-btn class="error" :to="'/ad/'+ad.id">{{ad.title}}</v-btn>
                            </div>
                        </v-carousel-item>
                    </v-carousel>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container grid-list-lg>
            <v-layout row wrap>
                <v-flex xs12 sm6 md4 v-for="ad of ads" :key="ad.id">
                    <v-card>
                        <v-img
                                :src="ad.imageSrc"
                                aspect-ratio="2.11"
                        ></v-img>

                        <v-card-title primary-title>
                            <div>
                                <h3 class="headline mb-0">{{ad.title}}</h3>
                                <div> {{ ad.description }}</div>
                            </div>
                        </v-card-title>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn flat :to="'/ad/'+ad.id">Open</v-btn>
                            <v-btn raised class="info">Buy</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
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
<style scoped>
    .car-link {
        position: absolute;
        bottom: 50px;
        left: 50%;
        background: rgba(0, 0, 0, .4);
        transform: translate(-50%, 0);
        padding: 5px 15px;
        border-top-left-radius: 5px ;
        border-top-right-radius: 5px ;
    }
</style>