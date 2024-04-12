<template>
  <div>
    <Navbar />
    <router-view />

    <div v-if="loading" class="loading-overlay">
      Loading...
    </div>
  </div>
</template>

<script>
import Navbar from "./components/module/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
  data() {
    return {
      loading: true,
    };
  },
  created() {
    this.$store.dispatch("fetchData").then(() => {
      this.loading = false;
    }).catch(error => {
      console.error(error);
      this.loading = false;
    });
  },
};
</script>

<style scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

