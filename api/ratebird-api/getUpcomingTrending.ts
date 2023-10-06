import axios from 'axios';

async function getUpcomingTrending(limit?: number) {
  const response = await axios.get(
    'http://127.0.0.1:8001/api/anime/upcoming/trending',
    { params: { limit } },
  );

  return response.data;
}

export default getUpcomingTrending;
