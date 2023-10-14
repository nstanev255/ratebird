import { useState } from 'react';
import AnimeItemList from '@/components/Anime/AnimeItemList';
import AnimeFilter from '@/components/Anime/AnimeFilter';
import { FilterTaxonomies } from '@/utils/getFilterTaxonomies';
import { MinimumAnime } from '@/api/ratebird-api/anime';
import { useRouter } from 'next/router';
import getInitialStatusFilter from '@/utils/getInitialStatusFilter';
import Pagination, { PaginationMetadata } from '@/components/Anime/Pagination';
import { Grid } from '@mui/material';

export type FilteredPageListingProps = {
  initialItems: Array<MinimumAnime>;
  initialPagination: PaginationMetadata;
  taxonomies: FilterTaxonomies;
};

function FilteredPageListing(props: FilteredPageListingProps) {
  const { initialItems, taxonomies, initialPagination } = props;
  const router = useRouter();
  const [items, setItems] = useState<Array<MinimumAnime>>(initialItems);
  const [paginationMetadata, setPaginationMetadata] =
    useState<PaginationMetadata>(initialPagination);

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
        setPagination={setPaginationMetadata}
      />
      <AnimeItemList items={items} />
      <Grid container justifyContent="center">
        <Pagination
          metadata={paginationMetadata}
          setPaginationMetadata={setPaginationMetadata}
          setItems={setItems}
        />
      </Grid>
    </div>
  );
}

export default FilteredPageListing;
