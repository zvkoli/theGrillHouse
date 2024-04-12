<template>
  <div
    v-for="(item, index) in data"
    :key="index"
    class="w-3/12 h-40 flex flex-col justify-between items-start cursor-default bg-[#272727] rounded-md p-4 font-Dosis"
  >
    <div
      class="w-full h-auto flex flex-col justify-center items-start gap-1 text-white"
    >
      <p>{{ item.title }}</p>
      <p>
        Product id : <span class="text-[#FCA112]">{{ item.id }}</span>
      </p>
    </div>
    <div>
      <button
        v-if="!isInCart(item.id)"
        class="p-2 rounded-md bg-[#212121] text-[#FCA112]"
        @click="addToCart(item)"
      >
        Add to Cart
      </button>
      <div v-else class="w-full flex flex-row justify-start items-center gap-1">
        <button
          class="p-2 rounded-md bg-[#212121] text-[#FCA112]"
          @click="addToCart(item)"
        >
          <AkPlus />
        </button>
        <button
          class="p-2 rounded-md bg-[#212121] text-[#FCA112]"
          @click="removeFromCart(item)"
        >
          <AkMinus />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { AkPlus, AkMinus } from "@kalimahapps/vue-icons";

export default {
  name: "ProductCardComponent",
  components: {
    AkPlus,
    AkMinus,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    addToCart(item) {
      this.$store.commit("addToCart", item);
      // console.log(JSON.parse(JSON.stringify(this.$store.state.cart)));
    },
    removeFromCart(item) {
      this.$store.commit("removeFromCart", item);
      // console.log(JSON.parse(JSON.stringify(this.$store.state.cart)));
    },
    isInCart(itemId) {
      return this.$store.state.cart.some((item) => item.id === itemId);
    },
  },
};
</script>
