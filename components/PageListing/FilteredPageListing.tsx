import { AnimeCardProps } from '@/components/Card/AnimeCard';
import { Taxonomy } from '@/api/ratebird-api/taxonomy/taxonomy';
import { useState } from 'react';
import AnimeItemList from '@/components/ItemList/AnimeItemList';
import AnimeFilter from '@/components/Filter/AnimeFilter';

export type FilteredPageListingProps = {
  initialItems: Array<AnimeCardProps>;
  statusTaxonomy: Array<Taxonomy>;
  ratingsTaxonomy: Array<Taxonomy>;
  sortsTaxonomy: Array<Taxonomy>;
  typesTaxonomy: Array<Taxonomy>;
  genresTaxonomy: Array<Taxonomy>;
};

function FilteredPageListing(props: FilteredPageListingProps) {
  const {
    initialItems,
    statusTaxonomy,
    ratingsTaxonomy,
    genresTaxonomy,
    typesTaxonomy,
    sortsTaxonomy,
  } = props;

  const [items, setItems] = useState<Array<AnimeCardProps>>(initialItems);

  return (
    <div>
      <AnimeFilter
        ratings={ratingsTaxonomy}
        sorts={sortsTaxonomy}
        statuses={statusTaxonomy}
        types={typesTaxonomy}
        genres={genresTaxonomy}
      />
      <AnimeItemList items={items} />
    </div>
  );
}

export default FilteredPageListing;
