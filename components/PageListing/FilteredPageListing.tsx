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
        ratings={taxonomies.ratings}
        sorts={taxonomies.sorts}
        statuses={taxonomies.statuses}
        types={taxonomies.types}
        genres={taxonomies.genres}
      />
      <AnimeItemList items={items} />
    </div>
  );
}

export default FilteredPageListing;
