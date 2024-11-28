<template>
  <div>
    <Section :isOdd="true" title="WHAT OUR CUSTOMERS ARE SAYING" id="reviews">
      <div class="max-w-7xl mx-auto px-3 sm:px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="review in reviews" :key="review.id" class="bg-white shadow-lg rounded-lg overflow-hidden">
            <div class="mx-3 p-6">
              <div class="flex items-center space-x-4">
                <div>
                  <h3 class="text-xl font-medium text-gray-900">{{ review.name }}</h3>
                  <p class="text-sm text-gray-500">{{ review.rating }} stars</p>
                </div>
              </div>
              <p class="mt-4 text-gray-700">{{ review.comment }}</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reviews: [
        {
          id: 1,
          name: "John Doe",
          photoUrl: "https://via.placeholder.com/150",
          rating: 5,
          comment: "Great service! I love the atmosphere at Mystic Nails & Day Spa. The staff is friendly and professional. Highly recommend!"
        },
        {
          id: 2,
          name: "Jane Smith",
          photoUrl: "https://via.placeholder.com/150",
          rating: 4,
          comment: "Nice spa! The manicure I got was lovely. The only downside was the wait time, but overall a positive experience."
        },
        {
          id: 3,
          name: "Mary Johnson",
          photoUrl: "https://via.placeholder.com/150",
          rating: 5,
          comment: "Had an amazing pedicure at Mystic Nails! The staff was attentive and really made me feel relaxed. Will definitely come back."
        }
      ]
    };
  }
};
</script>
