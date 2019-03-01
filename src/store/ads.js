import * as fb from 'firebase'

class Ad {
    constructor(title, description, ownerId, imageSrc = '', promo = false, id = null) {
        this.title = title
        this.description = description
        this.ownerId = ownerId
        this.imageSrc = imageSrc
        this.promo = promo
        this.id = id
    }
}

export default {
    state: {
        ads: [
            // {
            //     title: 'Ad 1',
            //     description: 'descr 1',
            //     promo: false,
            //     imageSrc: 'https://im0-tub-ru.yandex.net/i?id=b227d3aa3b6c39938938c4bcb3ce18d6-l&n=13',
            //     id: '1'
            // },
            // {
            //     title: 'Ad 2',
            //     description: 'descr 2',
            //     promo: true,
            //     imageSrc: 'https://im0-tub-ru.yandex.net/i?id=5aa66a41c7d9cf451714e2274372472c-l&n=13',
            //     imageSrc: 'https://im0-tub-ru.yandex.net/i?id=5587a2f0aec4e813db3fe1d45ad1fce2-l&n=13'
            //     id: '2'
            // },
            // {
            //     title: 'Ad 3',
            //     description: 'descr 3',
            //     promo: true,
            //     imageSrc: 'https://img1.liveinternet.ru/images/attach/c/4/81/245/81245733_large_3658d428d1de.jpg',
            //     id: '3'
            // }
        ]
    },
    mutations: {
        createAd(state, payload) {
            state.ads.push(payload)
        },
        loadAds(state, payload) {
            state.ads = payload
        }
    },
    actions: {
        async createAd({commit, getters}, payload) {
            commit('clearError')
            commit('setLoading', true)
            let image = payload.image

            try {
                const newAd = new Ad(
                    payload.title,
                    payload.description,
                    getters.user.id,
                    '',
                    payload.promo)

                const ad = await fb.database().ref('ads').push(newAd)
                const imageExt = image.name.slice(image.name.lastIndexOf('.'))

                const fileData = await fb.storage().ref(`ads/${ad.key}.${imageExt}`).put(image)
                const imageSrc = await fileData.ref.getDownloadURL();

                fb.database().ref('ads').child(ad.key).update({
                    imageSrc
                })
                    .then(() => {
                        commit('setLoading', false);
                        commit('createAd', {
                            ...newAd,
                            id: ad.key,
                            imageSrc
                        })
                    })

            } catch (error) {
                commit('setError', error.message)
                commit('setLoading', false)
                throw error
            }

        },
        async fetchAds({commit}) {
            commit('clearError')
            commit('setLoading', true)

            const resultAds = []

            try {
                let fbVal = await fb.database().ref('ads').once('value');
                let ads = fbVal.val();
                Object.keys(ads).forEach(key => {
                    const ad = ads[key]
                    resultAds.push(new Ad(ad.title, ad.description, ad.ownerId, ad.imageSrc,
                        ad.promo, key))
                })

                commit('loadAds', resultAds)
                commit('setLoading', false)
            } catch (error) {
                commit('setError', error.message)
                commit('setLoading', false)
                throw error
            }
        }
    },
    getters: {
        ads(state) {
            return state.ads
        },
        promoAds(state) {
            return state.ads.filter(ad => {
                return ad.promo
            })
        },
        myAds(state) {
            return state.ads
        },
        adById(state) {
            return adId => {
                return state.ads.find(ad => ad.id === adId)
            }
        }
    }
}