const axios = require('axios');

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

exports.handler = async function (event, context) {
  const placeId = 'ChIJn_hPea-HUocRZnvcUMQANlM'; // Replace with your actual Place ID
  const apiKey = process.env.GOOGLE_API_KEY; // Store your API key in Netlify environment variables

  try {
    let allReviews = [];
    let nextPageToken = null;
    let hasNextPage = true;

    while (hasNextPage) {
      const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&fields=reviews&key=${apiKey}${
        nextPageToken ? `&pagetoken=${nextPageToken}` : ''
      }`;

      const response = await axios.get(url);
      console.log(response.data.result)

      if (response.data.result?.reviews) {
        // Filter and collect 5-star reviews
        const fiveStarReviews = response.data.result.reviews.filter(
          (review) => review.rating === 5
        );

        allReviews = [...allReviews, ...fiveStarReviews];
      }

      nextPageToken = response.data.next_page_token;

      if (nextPageToken) {
        // Wait for the token to become valid
        await delay(2000);
      } else {
        hasNextPage = false;
      }
    }

    // Sort reviews by timestamp and limit to the most recent 5
    const recentFiveStarReviews = allReviews
      .sort((a, b) => b.time - a.time)
      .slice(0, 5);

    return {
      statusCode: 200,
      body: JSON.stringify({ reviews: recentFiveStarReviews }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch reviews' }),
    };
  }
};
