import axios from 'axios';

async function getSeasonalTrending(limit?: number) {
  const response = await axios.get(
    'http://127.0.0.1:8001/api/anime/seasonal/trending',
    { params: { limit } },
  );

  return response.data;
}

export default getSeasonalTrending;
