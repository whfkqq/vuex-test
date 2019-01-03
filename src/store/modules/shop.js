export default {
  state: {
    goods: [
      {
        id: '0',
        name: 'iphoneX',
        detaile: '苹果高端产品',
        price: 44444.00,
        num: 0,
        img: require('../../assets/iphone.jpg')
      },
      {
        id: '1',
        name: '华为mate20',
        detaile: '真正的国产高端机',
        price: 6666.00,
        num: 0,
        img: require('../../assets/huawei.png')
      },
      {
        id: '2',
        name: '三星W2019',
        detaile: '韩国三星集团产品',
        price: 4999.00,
        num: 0,
        img: require('../../assets/sanxing.png')
      }
    ],
    totalPrice: 0.00,
    totalNum: 0
  },
  mutations: {
    ADD_CART (state, id) {
      state.goods[id].num++
      state.totalNum++
      state.totalPrice += state.goods[id].price
    },
    REDUCE_CART (state, id) {
      if (state.goods[id].num > 0) {
        state.goods[id].num--
        state.totalNum--
        state.totalPrice -= state.goods[id].price
      }
    }
  },
  actions: {
    add_cart({commit},id) {
      commit('ADD_CART',id)
    },
    reduce_cart({commit},id){
      commit('REDUCE_CART',id)
    }
  }
}

