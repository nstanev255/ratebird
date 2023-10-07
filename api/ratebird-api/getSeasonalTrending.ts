import axios from 'axios';

async function getSeasonalTrending(limit?: number) {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime/seasonal/trending`,
    { params: { limit } },
  );

  return response.data;
}

export default getSeasonalTrending;
