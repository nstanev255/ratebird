import axios from 'axios';
import { MinimumAnime } from '@/api/ratebird-api/anime';
import { PaginationMetadata } from '@/components/Anime/Pagination';

export type SearchAnimeRequest = {
  page?: number;
  limit?: number;
  title?: string;
  score?: string;
  min_score?: string;
  max_score?: string;
  status?: string;
  rating?: string;
  type?: string;
  sfw?: boolean;
  genres?: string;
  order_by?: string;
  sort?: string;
  start_date?: string;
  end_date?: string;
};

export type SearchAnimeResponse = {
  data: Array<MinimumAnime>;
  pagination: PaginationMetadata;
};

async function getSearchAnime(
  request: SearchAnimeRequest,
): Promise<SearchAnimeResponse> {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime/search`,
    { params: request },
  );

  return response.data;
}

export default getSearchAnime;
