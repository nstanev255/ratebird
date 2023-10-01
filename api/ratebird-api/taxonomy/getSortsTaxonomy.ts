import axios from 'axios';
import { Taxonomy } from '@/api/ratebird-api/taxonomy/taxonomy';

async function getSortsTaxonomy(): Promise<Array<Taxonomy>> {
  const response = await axios.get(
    'http://127.0.0.1:8000/api/taxonomy/anime/sorts',
  );

  return response.data;
}

export default getSortsTaxonomy;
