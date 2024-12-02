<template>
  <footer class="bg-white dark:bg-white-900 m-4">
    <div>
      <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© {{ currentYear }} <a class="hover:underline">Mystic Nails & Day Spa</a>. All Rights Reserved.</span>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>
