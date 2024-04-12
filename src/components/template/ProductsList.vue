<template>
  <div
    class="w-full min-h-screen flex flex-row justify-center items-start flex-wrap gap-2 py-10"
  >
    <ProductCard :data="data" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import ProductCard from "../module/ProductCard.vue";

export default {
  name: "ProductsList",
  components: {
    ProductCard,
  },
  computed: {
    ...mapState(["data"]),
  },
  // watch: {
  //   data(newValue) {
  //     console.log(JSON.parse(JSON.stringify(newValue)));
  //   },
  // },
};
</script>
