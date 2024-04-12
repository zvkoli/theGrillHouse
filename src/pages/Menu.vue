<template>
  <div class="w-full min-h-screen pt-10 bg-[#212121]">
    <ProductsList />
  </div>
</template>

<script>
import ProductsList from "../components/template/ProductsList.vue";

export default {
  name: "MenuPage",
  components: {
    ProductsList,
  },
};
</script>
