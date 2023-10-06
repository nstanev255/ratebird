import axios from 'axios';
import { Taxonomy } from '@/api/ratebird-api/taxonomy/taxonomy';

async function getGenresTaxonomy(): Promise<Array<Taxonomy>> {
  const response = await axios.get(
    'http://127.0.0.1:8001/api/taxonomy/anime/genres',
  );

  return response.data;
}

export default getGenresTaxonomy;
