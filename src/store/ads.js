export default {
    state: {
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
            }
        ]
    },
    mutations: {
        createAd(state, payload){
            state.ads.push(payload)
        }
    },
    actions: {
        createAd({commit}, payload) {
            payload.id = '4'
            commit('createAd', payload)
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