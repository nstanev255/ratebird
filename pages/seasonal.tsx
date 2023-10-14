import AnimeItemList from '@/components/ItemList/AnimeItemList';
import { Box, Container, Pagination } from '@mui/material';
import Head from 'next/head';

function Seasonal() {
  return (
    <>
      <Head>
        <title>Ratebird | Seasonal</title>
      </Head>
      <Container>
        <AnimeItemList
          title="Seasonal"
          description="Seasonal anime"
          items={[]}
        />
        <Box marginTop={1} display="flex" justifyContent="center">
          <Pagination sx={{ textAlign: 'center' }} count={10} />
        </Box>
      </Container>
    </>
  );
}

export default Seasonal;
