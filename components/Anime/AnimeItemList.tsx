import { Grid, Typography } from '@mui/material';
import AnimeCard from '@/components/Anime/AnimeCard';
import { MinimumAnime } from '@/api/ratebird-api/anime';

interface AnimeItemListProps {
  title?: string;
  description?: string;
  items: Array<MinimumAnime>;
}

function AnimeItemList({ items, title, description }: AnimeItemListProps) {
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
              key={item.id}
              id={item.id as never as string}
              title={item.title}
              description={item.description}
              image={item.image}
              genres={item.genres}
              rating={5}
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
