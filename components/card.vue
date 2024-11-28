<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white border-solid border-2 border-gray-200 min-w-[175px] text-center">
    <!-- Card Header -->
    <div class="border-solid border-2 border-black px-6 py-4">
      <h2 class="font-semibold text-l">{{ title }}</h2>
    </div>

    <!-- Card Content -->
    <div class="border-solid border-2 border-black px-6 py-4">
      <p class="text-gray-700 text-base">
        {{ content }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  footerText: {
    type: String,
    default: 'Learn more'
  }
})
</script>

<style scoped>
/* Add any custom styles here */
</style>
