import Head from 'next/head';
import Carousel from '@/components/Carousel/Carousel';
import { CarouselItemType } from '@/components/Carousel/CarouselItem';
import { Container } from '@mui/material';
import AnimeItemList from '@/components/ItemList/AnimeItemList';
import { AnimeCardProps } from '@/components/Card/AnimeCard';
import getUpcomingTrending from '@/api/ratebird-api/getUpcomingTrending';
import getSeasonalTrending from '@/api/ratebird-api/getSeasonalTrending';

type HomeProps = {
  seasonTrending: Array<AnimeCardProps>;
  upcomingTrending: Array<AnimeCardProps>;
};
export default function Home({ seasonTrending, upcomingTrending }: HomeProps) {
  const topItems: CarouselItemType[] = [
    {
      name: 'Tate no Yuusha no Nariagari Season 3',
      description: 'Third season of Tate no Yuusha no Nariagari.',
      imageUrl:
        'https://r4.wallpaperflare.com/wallpaper/506/714/527/anime-the-rising-of-the-shield-hero-naofumi-iwatani-raphtalia-the-rising-of-the-shield-hero-tate-no-yuusha-no-nariagari-hd-wallpaper-093038cd716a9d8bc62748af70c1069d.jpg',
    },
    {
      name: 'Random Name #2',
      description: 'Hello World!',
      imageUrl: 'https://images2.alphacoders.com/133/1331312.png',
    },
  ];

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
  ];

  return (
    <>
      <Head>
        <title>Ratebird | Home</title>
        <meta name="description" content="Homepage of ratebird" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <main>
        <Container className="mt-5">
          <Carousel items={topItems} />

          <AnimeItemList title="Trending this season" items={seasonTrending} />
          <AnimeItemList title="Newest updates" items={hotItems} />
          <AnimeItemList title="Upcoming anime" items={upcomingTrending} />
        </Container>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const seasonTrending = await getSeasonalTrending(8);
  const upcomingTrending = await getUpcomingTrending(8);

  return {
    props: { seasonTrending, upcomingTrending },
  };
}
