import { Grid, Typography } from '@mui/material';
import AnimeCard, { AnimeCardProps } from '@/components/Card/AnimeCard';

interface AnimeItemListProps {
  title?: string;
  description?: string;
  items: Array<AnimeCardProps>;
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
              key={item.title}
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

AnimeItemList.defaultProps = {
  title: '',
  description: '',
};

export default AnimeItemList;
