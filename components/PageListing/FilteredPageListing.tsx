import { AnimeCardProps } from '@/components/Card/AnimeCard';
import { useState } from 'react';
import AnimeItemList from '@/components/ItemList/AnimeItemList';
import AnimeFilter from '@/components/Filter/AnimeFilter';
import { FilterTaxonomies } from '@/utils/getFilterTaxonomies';
import { Anime } from '@/api/ratebird-api/anime';

export type FilteredPageListingProps = {
  initialItems: Array<Anime>;
  taxonomies: FilterTaxonomies;
};

function FilteredPageListing(props: FilteredPageListingProps) {
  const { initialItems, taxonomies } = props;

  const [items, setItems] = useState<Array<Anime>>(initialItems);

  return (
    <div>
      <AnimeFilter
        ratingsTaxonomy={taxonomies.ratings}
        sortsTaxonomy={taxonomies.sorts}
        statusesTaxonomy={taxonomies.statuses}
        typesTaxonomy={taxonomies.types}
        genresTaxonomy={taxonomies.genres}
      />
      <AnimeItemList items={items} />
    </div>
  );
}

export default FilteredPageListing;
