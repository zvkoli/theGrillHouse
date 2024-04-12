<template>
  <div
    class="w-full h-auto flex flex-row justify-between items-center text-[#fafafa] absolute py-5 px-10 font-Dosis z-10"
  >
    <div class="flex flex-row justify-start items-center gap-2">
      <router-link class="text-2xl font-normal" to="/"
        >The Grill House</router-link
      >
      <router-link class="text-2xl font-normal" to="/cart">
        <FeShoppingCart />
      </router-link>
    </div>
    <nav
      class="flex flex-row justify-center items-center gap-10 text-2xl font-normal"
    >
      <router-link to="/" exact active-class="active">Home</router-link>
      <p
        class="cursor-pointer"
        @click="notify('This section will be created soon')"
      >
        About
      </p>
      <p
        class="cursor-pointer"
        @click="notify('This section will be created soon')"
      >
        Service
      </p>
      <router-link to="/menu" exact active-class="active">Menu</router-link>
      <p
        class="cursor-pointer"
        @click="notify('This section will be created soon')"
      >
        Contact
      </p>
    </nav>
  </div>
</template>

<script>
import { notify } from "../../utils/notify";
import { FeShoppingCart } from "@kalimahapps/vue-icons";

export default {
  name: "NavbarComponent",
  components: {
    FeShoppingCart,
  },
  methods: {
    notify,
  },
};
</script>

<style>
.active {
  border: 2px solid #fca112;
  border-top: none;
  border-left: none;
  border-right: none;
}
</style>
