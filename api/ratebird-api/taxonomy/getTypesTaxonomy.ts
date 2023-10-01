import axios from 'axios';

async function getTypesTaxonomy() {
  const response = await axios.get(
    'http://127.0.0.1:8000/api/taxonomy/anime/types',
  );

  return response.data;
}

export default getTypesTaxonomy;
