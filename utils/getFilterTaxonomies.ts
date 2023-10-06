import getGenresTaxonomy from '@/api/ratebird-api/taxonomy/getGenresTaxonomy';
import getRatingsTaxonomy from '@/api/ratebird-api/taxonomy/getRatingsTaxonomy';
import getSortsTaxonomy from '@/api/ratebird-api/taxonomy/getSortsTaxonomy';
import getStatusesTaxonomy from '@/api/ratebird-api/taxonomy/getStatusesTaxonomy';
import getTypesTaxonomy from '@/api/ratebird-api/taxonomy/getTypesTaxonomy';

async function getFilterTaxonomies() {
  const genres = await getGenresTaxonomy();
  const ratings = await getRatingsTaxonomy();
  const sorts = await getSortsTaxonomy();
  const statuses = await getStatusesTaxonomy();
  const types = await getTypesTaxonomy();

  return { genres, ratings, sorts, statuses, types };
}

export default getFilterTaxonomies;
