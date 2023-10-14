import { useState } from 'react';
import AnimeItemList from '@/components/ItemList/AnimeItemList';
import AnimeFilter from '@/components/Filter/AnimeFilter';
import { FilterTaxonomies } from '@/utils/getFilterTaxonomies';
import { MinimumAnime } from '@/api/ratebird-api/anime';

export type FilteredPageListingProps = {
  initialItems: Array<MinimumAnime>;
  taxonomies: FilterTaxonomies;
  page: string;
};

function FilteredPageListing(props: FilteredPageListingProps) {
  const { initialItems, taxonomies, page } = props;

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
        initialFilter={page}
        setPagination={() => {}}
      />
      <AnimeItemList items={items} />
    </div>
  );
}

export default FilteredPageListing;
