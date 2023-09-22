import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

export type CarouselItemProps = {
  item: CarouselItemType;
};

export type CarouselItemType = {
  name: string;
  description: string;
  imageUrl: string;
};

function CarouselItem(props: CarouselItemProps) {
  const { item } = props;

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          style={{ objectFit: 'cover', height: '650px' }}
          component="img"
          image={item.imageUrl}
          alt={item.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CarouselItem;
