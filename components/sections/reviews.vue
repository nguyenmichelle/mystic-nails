<template>
  <div>
    <Section :isOdd="true" title="WHAT OUR CUSTOMERS ARE SAYING" id="reviews">
      <div class="max-w-7xl mx-auto px-3 sm:px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="review in reviews" :key="review.id" class="bg-white shadow-lg rounded-lg overflow-hidden">
            <div class="mx-3 p-6">
              <div class="flex items-center space-x-4">
                <div>
                  <h3 class="text-xl font-medium text-gray-900">{{ review.author_name }}</h3>
                  <p class="text-sm text-gray-500">{{ review.rating }} stars</p>
                  <p class="text-sm text-gray-500">{{ review.relative_time_description }}</p>
                </div>
              </div>
              <p class="mt-4 text-gray-700">{{ review.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const reviews = ref([]);

const fetchReviews = async () => {
  try {
    const response = await fetch('/.netlify/functions/googleReviews');
    const data = await response.json();
    console.log(data);
    reviews.value = data.reviews || []
  } catch (error) {
    console.error('Error fetching reviews:', error);
  }
};

onMounted(() => {
  fetchReviews();
});
</script>
