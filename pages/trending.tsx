import AnimeItemList from '@/components/Anime/AnimeItemList';
import { Box, Container, Pagination } from '@mui/material';
import Head from 'next/head';

function Trending() {
  return (
    <>
      <Head>
        <title>Ratebird | Trending</title>
      </Head>
      <Container>
        <AnimeItemList
          title="Trending"
          description="Trending anime"
          items={[]}
        />
        <Box marginTop={1} display="flex" justifyContent="center">
          <Pagination sx={{ textAlign: 'center' }} count={10} />
        </Box>
      </Container>
    </>
  );
}

export default Trending;
