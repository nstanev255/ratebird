import axios from 'axios';
import { Taxonomy } from '@/api/ratebird-api/taxonomy/taxonomy';

async function getTypesTaxonomy(): Promise<Array<Taxonomy>> {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/taxonomy/anime/types`,
  );

  return response.data;
}

export default getTypesTaxonomy;
