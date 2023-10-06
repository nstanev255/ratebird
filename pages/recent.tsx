import AnimeItemList from '@/components/ItemList/AnimeItemList';
import { Box, Container, Pagination } from '@mui/material';
import Head from 'next/head';
import getFilterTaxonomies from '@/utils/getFilterTaxonomies';

const hotItems = [
  {
    id: '1',
    title: 'Tate no Yuusha no Nariagari Season 3',
    description: 'Third season of Tate no Yuusha no Nariagari.',
    image:
      'https://r4.wallpaperflare.com/wallpaper/506/714/527/anime-the-rising-of-the-shield-hero-naofumi-iwatani-raphtalia-the-rising-of-the-shield-hero-tate-no-yuusha-no-nariagari-hd-wallpaper-093038cd716a9d8bc62748af70c1069d.jpg',
    genres: ['Adventure', 'Action', 'Isekai', 'Qkoto'],
    rating: 3,
  },
  {
    id: '1',
    title: 'Tate no Yuusha no Nariagari Season 3',
    description: 'Third season of Tate no Yuusha no Nariagari.',
    image:
      'https://r4.wallpaperflare.com/wallpaper/506/714/527/anime-the-rising-of-the-shield-hero-naofumi-iwatani-raphtalia-the-rising-of-the-shield-hero-tate-no-yuusha-no-nariagari-hd-wallpaper-093038cd716a9d8bc62748af70c1069d.jpg',
    genres: ['Adventure', 'Action', 'Isekai', 'Qkoto'],
    rating: 3.5,
  },
  {
    id: '1',
    title: 'Tate no Yuusha no Nariagari Season 3',
    description: 'Third season of Tate no Yuusha no Nariagari.',
    image:
      'https://r4.wallpaperflare.com/wallpaper/506/714/527/anime-the-rising-of-the-shield-hero-naofumi-iwatani-raphtalia-the-rising-of-the-shield-hero-tate-no-yuusha-no-nariagari-hd-wallpaper-093038cd716a9d8bc62748af70c1069d.jpg',
    genres: ['Adventure', 'Action', 'Isekai', 'Qkoto'],
    rating: 3,
  },
  {
    id: '1',
    title: 'Tate no Yuusha no Nariagari Season 3',
    description: 'Third season of Tate no Yuusha no Nariagari.',
    image:
      'https://r4.wallpaperflare.com/wallpaper/506/714/527/anime-the-rising-of-the-shield-hero-naofumi-iwatani-raphtalia-the-rising-of-the-shield-hero-tate-no-yuusha-no-nariagari-hd-wallpaper-093038cd716a9d8bc62748af70c1069d.jpg',
    genres: ['Adventure', 'Action', 'Isekai', 'Qkoto'],
    rating: 3,
  },
  {
    id: '1',
    title: 'Tate no Yuusha no Nariagari Season 3',
    description: 'Third season of Tate no Yuusha no Nariagari.',
    image:
      'https://r4.wallpaperflare.com/wallpaper/506/714/527/anime-the-rising-of-the-shield-hero-naofumi-iwatani-raphtalia-the-rising-of-the-shield-hero-tate-no-yuusha-no-nariagari-hd-wallpaper-093038cd716a9d8bc62748af70c1069d.jpg',
    genres: ['Adventure', 'Action', 'Isekai', 'Qkoto'],
    rating: 3,
  },
  {
    id: '1',
    title: 'Tate no Yuusha no Nariagari Season 3',
    description: 'Third season of Tate no Yuusha no Nariagari.',
    image:
      'https://r4.wallpaperflare.com/wallpaper/506/714/527/anime-the-rising-of-the-shield-hero-naofumi-iwatani-raphtalia-the-rising-of-the-shield-hero-tate-no-yuusha-no-nariagari-hd-wallpaper-093038cd716a9d8bc62748af70c1069d.jpg',
    genres: ['Adventure', 'Action', 'Isekai', 'Qkoto'],
    rating: 3,
  },
  {
    id: '1',
    title: 'Tate no Yuusha no Nariagari Season 3',
    description: 'Third season of Tate no Yuusha no Nariagari.',
    image:
      'https://r4.wallpaperflare.com/wallpaper/506/714/527/anime-the-rising-of-the-shield-hero-naofumi-iwatani-raphtalia-the-rising-of-the-shield-hero-tate-no-yuusha-no-nariagari-hd-wallpaper-093038cd716a9d8bc62748af70c1069d.jpg',
    genres: ['Adventure', 'Action', 'Isekai', 'Qkoto'],
    rating: 3,
  },
  {
    id: '1',
    title: 'Tate no Yuusha no Nariagari Season 3',
    description: 'Third season of Tate no Yuusha no Nariagari.',
    image:
      'https://r4.wallpaperflare.com/wallpaper/506/714/527/anime-the-rising-of-the-shield-hero-naofumi-iwatani-raphtalia-the-rising-of-the-shield-hero-tate-no-yuusha-no-nariagari-hd-wallpaper-093038cd716a9d8bc62748af70c1069d.jpg',
    genres: ['Adventure', 'Action', 'Isekai', 'Qkoto'],
    rating: 3,
  },
  {
    id: '1',
    title: 'Tate no Yuusha no Nariagari Season 3',
    description: 'Third season of Tate no Yuusha no Nariagari.',
    image:
      'https://r4.wallpaperflare.com/wallpaper/506/714/527/anime-the-rising-of-the-shield-hero-naofumi-iwatani-raphtalia-the-rising-of-the-shield-hero-tate-no-yuusha-no-nariagari-hd-wallpaper-093038cd716a9d8bc62748af70c1069d.jpg',
    genres: ['Adventure', 'Action', 'Isekai', 'Qkoto'],
    rating: 3,
  },
  {
    id: '1',
    title: 'Tate no Yuusha no Nariagari Season 3',
    description: 'Third season of Tate no Yuusha no Nariagari.',
    image:
      'https://r4.wallpaperflare.com/wallpaper/506/714/527/anime-the-rising-of-the-shield-hero-naofumi-iwatani-raphtalia-the-rising-of-the-shield-hero-tate-no-yuusha-no-nariagari-hd-wallpaper-093038cd716a9d8bc62748af70c1069d.jpg',
    genres: ['Adventure', 'Action', 'Isekai', 'Qkoto'],
    rating: 3,
  },
  {
    id: '1',
    title: 'Tate no Yuusha no Nariagari Season 3',
    description: 'Third season of Tate no Yuusha no Nariagari.',
    image:
      'https://r4.wallpaperflare.com/wallpaper/506/714/527/anime-the-rising-of-the-shield-hero-naofumi-iwatani-raphtalia-the-rising-of-the-shield-hero-tate-no-yuusha-no-nariagari-hd-wallpaper-093038cd716a9d8bc62748af70c1069d.jpg',
    genres: ['Adventure', 'Action', 'Isekai', 'Qkoto'],
    rating: 3,
  },
  {
    id: '1',
    title: 'Tate no Yuusha no Nariagari Season 3',
    description: 'Third season of Tate no Yuusha no Nariagari.',
    image:
      'https://r4.wallpaperflare.com/wallpaper/506/714/527/anime-the-rising-of-the-shield-hero-naofumi-iwatani-raphtalia-the-rising-of-the-shield-hero-tate-no-yuusha-no-nariagari-hd-wallpaper-093038cd716a9d8bc62748af70c1069d.jpg',
    genres: ['Adventure', 'Action', 'Isekai', 'Qkoto'],
    rating: 3,
  },
];

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
          items={hotItems}
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
