<template>
  <div
    class="w-full h-screen flex flex-row justify-center items-center bg-[url('images/wallpaper.webp')] bg-cover filter bg-right-bottom"
  >
    <div
      class="w-full h-screen flex flex-col justify-end items-center backdrop-blur-sm"
    >
      <HomeDetails />
    </div>
  </div>
</template>

<script>
import HomeDetails from "../components/template/HomeDetails.vue";
export default {
  name: "HomePage",
  components: {
    HomeDetails,
  },
};
</script>
