<template>
  <div>
    <NuxtLayout>
      <Hero></Hero>
      <Sections-Services></Sections-Services>
      <Sections-Reviews></Sections-Reviews>
      <Sections-Contact></Sections-Contact>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import Reviews from "./components/sections/reviews.vue";

useSeoMeta({
  title: 'Mystic Nails & Day Spa'
})
</script>
