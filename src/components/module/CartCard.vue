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
      Number : <span class="text-[#FCA112]">{{ item.number }}</span>
      </p>
    </div>
    <button
      class="p-2 rounded-md bg-[#212121] text-[#FCA112]"
      @click="removeFromCart(item)"
    >
      Delete
    </button>
  </div>
</template>

<script>
export default {
  name: "CartCardComponent",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    removeFromCart(item) {
      this.$store.commit("removeFromCart", item);
      console.log(JSON.parse(JSON.stringify(this.$store.state.cart)));
    },
  },
};
</script>
