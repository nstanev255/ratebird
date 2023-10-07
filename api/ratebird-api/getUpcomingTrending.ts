import axios from 'axios';

async function getUpcomingTrending(limit?: number) {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime/upcoming/trending`,
    { params: { limit } },
  );

  return response.data;
}

export default getUpcomingTrending;
