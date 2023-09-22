import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Checkbox,
  Collapse,
  Grid,
  IconButton,
  IconButtonProps,
  Rating,
  styled,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { useState } from 'react';
import NextLink from 'next/link';
import { Favorite, FavoriteBorder } from '@mui/icons-material';

export type AnimeCardProps = {
  id: string;
  title: string;
  description: string;
  image: string;
  genres: Array<string>;
  rating: number;
};

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function AnimeCard(props: AnimeCardProps) {
  const [expanded, setExpanded] = useState(false);
  const { id, image, title, description, genres, rating } = props;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card style={{ maxWidth: '250px' }}>
      <NextLink href={`/anime/${id}`} passHref>
        <CardActionArea>
          <CardMedia
            style={{ objectFit: 'cover' }}
            component="img"
            image={image}
            alt={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Rating name="half-rating" defaultValue={rating} precision={0.5} />
      </NextLink>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
        </IconButton>
        <NextLink href={`/anime/${id}`} passHref>
          <IconButton aria-label="share">
            <ReadMoreIcon />
          </IconButton>
        </NextLink>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Grid container spacing={0.5}>
            {genres.map((name) => (
              <Grid item>
                <Button key={name} size="small" variant="outlined">
                  {name}
                </Button>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default AnimeCard;
