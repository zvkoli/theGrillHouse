<template>
  <div
    class="w-full h-4/6 flex flex-col justify-start items-start gap-5 px-10 cursor-default text-[#fafafa] font-Dosis"
  >
    <p class="text-8xl font-extralight">Enjoy Our Delicious Meal</p>
    <p class="text-3xl font-extralight">
      Hello and welcome to our restaurant, where you can enjoy the best food in
      town. Join us and have a pleasant experience of delicious food.
    </p>
    <router-link class="text-[#fff] text-2xl font-normal border-2 border-[#fff] rounded-md py-2 px-16 backdrop-blur-3xl" to="/menu"> Menu </router-link>
  </div>
</template>

<script>
export default {
  name: "HomeDetails",
};
</script>
