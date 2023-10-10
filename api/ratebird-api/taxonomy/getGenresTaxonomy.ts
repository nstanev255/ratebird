import axios from 'axios';
import { Taxonomy } from '@/api/ratebird-api/taxonomy/taxonomy';

async function getGenresTaxonomy(): Promise<Array<Taxonomy>> {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/taxonomy/anime/genres`,
    );

    return response.data;
  } catch (e) {
    return [];
  }
}

export default getGenresTaxonomy;
