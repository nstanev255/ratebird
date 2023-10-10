import getSearchAnime, {
  SearchAnimeResponse,
} from '@/api/ratebird-api/getSearchAnime';

async function getInitialAnimeListing(
  status: string,
): Promise<SearchAnimeResponse> {
  return getSearchAnime({ status });
}

export default getInitialAnimeListing;
