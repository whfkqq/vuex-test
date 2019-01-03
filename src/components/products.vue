<template>
    <div>
      <h2>productList</h2>
      <ul>
        <li v-for="item in goods" :key="item.id">
          <div class="shop_img">
            <img :src="item.img" alt="">
          </div>
          <div class="shop_detail">
            <p>{{item.name}}</p>
            <p>{{item.hint}}</p>
            <p>{{item.price}}</p>
          </div>
          <p>
            <span class="shop_reduce" @click="reduce_num(item.id)">-</span>
            <span class="shop_num">{{item.num}}</span>
            <span class="shop_add" @click="add_num(item.id)">+</span>
          </p>
        </li>
      </ul>
    </div>
</template>

<script>
    import {mapState, mapMutations, mapGetters } from 'vuex'
    export default {
        name: "products",
      computed: {
          ...mapState(['goods','totalPrice','totalNum'])
      },
      methods: {
        reduce_num(id) {

        },
        add_num(id) {

        }
      }
    }
</script>

<style scoped>

</style>
