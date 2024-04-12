<template>
  <div class="w-full min-h-screen flex flex-row justify-center items-start flex-wrap gap-2 py-10 font-Dosis">
    <template v-if="cartIsEmpty">
      <p class="w-full h-screen flex flex-row justify-center items-start pt-52 text-white text-2xl">
        The shopping cart is empty
      </p>
    </template>
    <template v-else>
      <CartCard :data="cart"/>
    </template>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CartCard from "../module/CartCard.vue";

export default {
  name: "CartList",
  components: {
    CartCard,
  },
  computed: {
    ...mapState(["cart"]),
    cartIsEmpty() {
      return this.cart.length === 0;
    },
  },
};
</script>
