import { Grid, Typography } from '@mui/material';
import AnimeCard from '@/components/Card/AnimeCard';
import { Anime, Relation, Title } from '@/api/ratebird-api/anime';

interface AnimeItemListProps {
  title?: string;
  description?: string;
  items: Array<Anime>;
}

function AnimeItemList({ items, title, description }: AnimeItemListProps) {
  function renderTitle(titles: Array<Title> | undefined): string {
    if (!titles || titles.length === 0) {
      return '';
    }

    let readyTitle = '';
    titles.forEach((value) => {
      if (value.type === 'Default') {
        readyTitle = value.title;
      }
    });

    return readyTitle;
  }

  function genresToArray(genres: Array<Relation>): Array<string> {
    const readyGenres = [];
    genres.forEach((value) => {
      readyGenres.push(value.name);
    });

    return readyGenres;
  }

  return (
    <div className="mt-4">
      {title && (
        <>
          <Typography color="text.primary" textAlign="center" variant="h4">
            {title}
          </Typography>
          <hr />
        </>
      )}

      {description && (
        <Typography color="text.secondary" textAlign="center" variant="body2">
          {description}
        </Typography>
      )}
      <Grid container marginTop={1} gap={1} justifyContent="center">
        {items.map((item) => (
          <Grid item>
            <AnimeCard
              key={item.mal_id}
              id={item.mal_id as string}
              title={renderTitle(item.titles)}
              description={item.synopsis as string}
              image={item.images?.jpg?.image_url as string}
              genres={genresToArray([...item.genres])}
              rating={item.rank as number}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

AnimeItemList.defaultProps = {
  title: '',
  description: '',
};

export default AnimeItemList;
