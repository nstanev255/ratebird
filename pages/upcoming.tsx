import { Container } from '@mui/material';
import Head from 'next/head';
import getFilterTaxonomies, {
  FilterTaxonomies,
} from '@/utils/getFilterTaxonomies';
import getInitialAnimeListing from '@/utils/getInitialAnimeListing';
import FilteredPageListing from '@/components/Anime/FilteredPageListing';
import { SearchAnimeResponse } from '@/api/ratebird-api/getSearchAnime';

type CommonProps = {
  taxonomies: FilterTaxonomies;
  initialAnimeSearch: SearchAnimeResponse;
};

function Upcoming({ taxonomies, initialAnimeSearch }: CommonProps) {
  return (
    <>
      <Head>
        <title>Ratebird | Upcoming</title>
      </Head>
      <Container>
        <FilteredPageListing
          initialItems={initialAnimeSearch.data}
          initialPagination={initialAnimeSearch.pagination}
          taxonomies={taxonomies}
        />
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const taxonomies = await getFilterTaxonomies();
  const initialAnimeSearch = await getInitialAnimeListing('upcoming');
  return {
    props: {
      taxonomies,
      initialAnimeSearch,
    },
  };
}

export default Upcoming;
