<template>
  <div class="w-full min-h-screen pt-10 bg-[#212121]">
    <CartList />
  </div>
</template>

<script>
import CartList from "../components/template/CartList.vue";

export default {
  name: "CartPage",
  components: {
    CartList,
  },
};
</script>
