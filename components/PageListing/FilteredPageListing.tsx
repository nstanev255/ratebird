import { useState } from 'react';
import AnimeItemList from '@/components/ItemList/AnimeItemList';
import AnimeFilter from '@/components/Filter/AnimeFilter';
import { FilterTaxonomies } from '@/utils/getFilterTaxonomies';
import { MinimumAnime } from '@/api/ratebird-api/anime';
import { useRouter } from 'next/router';
import getInitialStatusFilter from '@/utils/getInitialStatusFilter';

export type FilteredPageListingProps = {
  initialItems: Array<MinimumAnime>;
  taxonomies: FilterTaxonomies;
};

function FilteredPageListing(props: FilteredPageListingProps) {
  const { initialItems, taxonomies } = props;
  const router = useRouter();
  const [items, setItems] = useState<Array<MinimumAnime>>(initialItems);

  return (
    <div>
      <AnimeFilter
        ratingsTaxonomy={taxonomies.ratings}
        sortsTaxonomy={taxonomies.sorts}
        statusesTaxonomy={taxonomies.statuses}
        typesTaxonomy={taxonomies.types}
        genresTaxonomy={taxonomies.genres}
        setItems={setItems}
        initialStatus={getInitialStatusFilter(router.asPath)}
        setPagination={() => {}}
      />
      <AnimeItemList items={items} />
    </div>
  );
}

export default FilteredPageListing;
