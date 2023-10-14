import axios from 'axios';
import { MinimumAnime } from '@/api/ratebird-api/anime';

async function getSeasonalTrending(
  limit?: number,
): Promise<Array<MinimumAnime>> {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime/seasonal/trending`,
    { params: { limit } },
  );

  return response.data;
}

export default getSeasonalTrending;
