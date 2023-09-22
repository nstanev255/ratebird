import { Grid, Typography } from '@mui/material';
import AnimeCard, { AnimeCardProps } from '@/components/Card/AnimeCard';

type AnimeItemListProps = {
  title: string;
  items: Array<AnimeCardProps>;
};

function AnimeItemList({ items, title }: AnimeItemListProps) {
  return (
    <div>
      <Typography variant="h4">{title}</Typography>
      <hr />
      <Grid container marginTop={1} gap={1} justifyContent="center">
        {items.map((item) => (
          <Grid item>
            <AnimeCard
              id={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
              genres={item.genres}
              rating={item.rating}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default AnimeItemList;
