import AnimeItemList from '@/components/Anime/AnimeItemList';
import { Box, Container, Pagination } from '@mui/material';
import Head from 'next/head';
import getFilterTaxonomies from '@/utils/getFilterTaxonomies';

function Recent() {
  return (
    <>
      <Head>
        <title>Ratebird | Recent</title>
      </Head>
      <Container>
        <AnimeItemList
          title="Recent"
          description="Recently updated anime"
          items={[]}
        />
        <Box marginTop={1} display="flex" justifyContent="center">
          <Pagination sx={{ textAlign: 'center' }} count={10} />
        </Box>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const { genres, ratings, types, statuses, sorts } =
    await getFilterTaxonomies();

  const page = 'upcoming';

  return {
    props: {
      genres,
      ratings,
      types,
      statuses,
      sorts,
      page,
    },
  };
}

export default Recent;
