const axios = require('axios');

exports.handler = async function(event, context) {
  // Define the Place ID and your Google API key
  const placeId = 'ChIJn_hPea-HUocRZnvcUMQANlM'; // Replace with your actual Place ID
  const apiKey = process.env.GOOGLE_API_KEY; // Store your API key in Netlify environment variables

  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&fields=reviews&key=${apiKey}`
    );

    // Filter and sort reviews (5-star reviews only)
    let fiveStarReviews = response.data.result.reviews.filter(review => review.rating === 5);
    let allReviews = fiveStarReviews.sort((a, b) => b.time - a.time);

    // Check if there is a next page token for additional reviews
    let nextPageToken = response.data.next_page_token;

    // If there is a next page token, make another request to get more reviews
    while (nextPageToken) {
      const nextResponse = await axios.get(
        `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&fields=reviews&key=${apiKey}&page_token=${nextPageToken}`
      );

      // Filter and sort the additional reviews
      fiveStarReviews = nextResponse.data.result.reviews.filter(review => review.rating === 5);
      allReviews = [...allReviews, ...fiveStarReviews.sort((a, b) => b.time - a.time)];

      // Update nextPageToken to continue fetching if more pages are available
      nextPageToken = nextResponse.data.next_page_token;
    }

    // Limit to the most recent 5 reviews
    const recentFiveStarReviews = allReviews.slice(0, 5);

    return {
      statusCode: 200,
      body: JSON.stringify({ reviews: recentFiveStarReviews })
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch reviews' })
    };
  }
}
