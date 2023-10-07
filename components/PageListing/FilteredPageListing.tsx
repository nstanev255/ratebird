import { AnimeCardProps } from '@/components/Card/AnimeCard';
import { Taxonomy } from '@/api/ratebird-api/taxonomy/taxonomy';
import { useState } from 'react';
import AnimeItemList from '@/components/ItemList/AnimeItemList';

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
      <AnimeItemList items={items} />
    </div>
  );
}

export default FilteredPageListing;
