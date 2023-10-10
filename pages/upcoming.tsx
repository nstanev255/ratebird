import AnimeItemList from '@/components/ItemList/AnimeItemList';
import { Box, Container, Pagination } from '@mui/material';
import Head from 'next/head';
import getFilterTaxonomies, {
  FilterTaxonomies,
} from '@/utils/getFilterTaxonomies';
import getInitialAnimeListing from '@/utils/getInitialAnimeListing';
import FilteredPageListing from '@/components/PageListing/FilteredPageListing';
import { Property } from 'csstype';
import Filter = Property.Filter;
import { SearchAnimeResponse } from '@/api/ratebird-api/getSearchAnime';

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

type CommonProps = {
  taxonomies: FilterTaxonomies;
  initialAnimeSearch: SearchAnimeResponse;
  page: string;
};

function Upcoming({ taxonomies, initialAnimeSearch, page }: CommonProps) {
  return (
    <>
      <Head>
        <title>Ratebird | Upcoming</title>
      </Head>
      <Container>
        <FilteredPageListing
          initialItems={initialAnimeSearch.data}
          taxonomies={taxonomies}
        />
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const taxonomies = await getFilterTaxonomies();

  const page = 'upcoming';
  const initialAnimeSearch = await getInitialAnimeListing('upcoming');
  return {
    props: {
      taxonomies,
      initialAnimeSearch,
      page,
    },
  };
}

export default Upcoming;
