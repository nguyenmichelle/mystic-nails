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
                  <div class="inline-block" v-for="starIndex in review.rating">
                    <StarIcon class="w-3 h-3 text-yellow-500" />
                  </div>
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

<script>
import { StarIcon } from '@heroicons/vue/24/solid'

export default {
  data () {
    return {
      reviews: []
    }
  },
  mounted() {
    this.fetchReviews();
  },
  methods: {
    async fetchReviews() {
      try {
        const response = await fetch('/.netlify/functions/googleReviews');
        const data = await response.json();
        console.log(data)
        this.reviews = data.reviews || []
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    }
  },
  components: {
    StarIcon
  }
}
</script>
