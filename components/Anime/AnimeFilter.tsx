import { Taxonomy } from '@/api/ratebird-api/taxonomy/taxonomy';
import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import { useRouter } from 'next/router';
import handleQueryParams from '@/utils/handleQueryParams';
import { useDispatch } from 'react-redux';
import dispatchQueryParams from '@/utils/dispatchQueryParams';

export type AnimeFilterProps = {
  ratingsTaxonomy: Array<Taxonomy>;
  sortsTaxonomy: Array<Taxonomy>;
  statusesTaxonomy: Array<Taxonomy>;
  typesTaxonomy: Array<Taxonomy>;
  genresTaxonomy: Array<Taxonomy>;

  initialStatus: string | undefined;
};

function AnimeFilter({
  ratingsTaxonomy,
  sortsTaxonomy,
  typesTaxonomy,
  statusesTaxonomy,
  genresTaxonomy,
  initialStatus = '',
}: AnimeFilterProps) {
  const [genresValue, setGenresValue] = useState<string[]>([]);
  const [ratingValue, setRatingValue] = useState<string>('');
  const [sortValue, setSortValue] = useState<string>('');
  const [typesValue, setTypesValue] = useState<string>('');
  const [statusValue, setStatusValue] = useState<string>(() => {
    if (initialStatus) {
      return initialStatus;
    }

    return '';
  });
  const [title, setTitle] = useState<string>('');
  const dispatch = useDispatch();
  const router = useRouter();

  const handleGenreChange = (event: SelectChangeEvent<typeof genresValue>) => {
    const {
      target: { value },
    } = event;

    const split = typeof value === 'string' ? value.split(',') : value;

    setGenresValue(split);
    handleQueryParams(router, 'genres', split.join(',')).then(() => {});
  };

  const handleRatingChange = (event: SelectChangeEvent<typeof ratingValue>) => {
    const {
      target: { value },
    } = event;

    setRatingValue(value);
    handleQueryParams(router, 'rating', value).then(() => {
      dispatchQueryParams(dispatch, 'rating', value);
    });
  };

  const handleSortChange = (event: SelectChangeEvent<typeof sortValue>) => {
    const {
      target: { value },
    } = event;

    setSortValue(value);
    handleQueryParams(router, 'sort', value).then(() => {
      dispatchQueryParams(dispatch, 'sort', value);
    });
  };

  const handleTypesChange = (event: SelectChangeEvent<typeof typesValue>) => {
    const {
      target: { value },
    } = event;

    setTypesValue(value);
    handleQueryParams(router, 'type', value).then(() => {
      dispatchQueryParams(dispatch, 'type', value);
    });
  };

  const handleStatusChange = (event: SelectChangeEvent<typeof statusValue>) => {
    const {
      target: { value },
    } = event;

    setStatusValue(value);
    handleQueryParams(router, 'status', value).then(() => {
      dispatchQueryParams(dispatch, 'status', value);
    });
  };

  return (
    <div>
      <Container>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <TextField
            id="outlined-basic"
            value={title}
            label="Title"
            onChange={(event) => {
              setTitle(event.target.value);
              handleQueryParams(router, 'title', event.target.value).then(
                () => {
                  dispatchQueryParams(dispatch, 'title', event.target.value);
                },
              );
            }}
            variant="outlined"
          />
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="genres-filter-label">Genres</InputLabel>
          <Select
            labelId="genres-filter-label"
            multiple
            value={genresValue as unknown as ''}
            onChange={handleGenreChange}
            renderValue={(selected) => selected.join(',')}
          >
            {genresTaxonomy.map((genre) => (
              <MenuItem key={genre.id} value={genre.name}>
                {genre.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="ratings-filter-label">Ratings</InputLabel>
          <Select
            labelId="ratings-filter-label"
            value={ratingValue}
            onChange={handleRatingChange}
          >
            {ratingsTaxonomy.map((status) => (
              <MenuItem key={status.id} value={status.name}>
                {status.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="types-filter-label">Types</InputLabel>
          <Select
            labelId="types-filter-label"
            value={typesValue}
            onChange={handleTypesChange}
          >
            {typesTaxonomy.map((status) => (
              <MenuItem key={status.id} value={status.name}>
                {status.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="status-filter-label">Status</InputLabel>
          <Select
            labelId="status-filter-label"
            value={statusValue}
            onChange={handleStatusChange}
          >
            {statusesTaxonomy.map((status) => (
              <MenuItem key={status.id} value={status.name}>
                {status.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="sort-filter-label">Sort</InputLabel>
          <Select
            labelId="sort-filter-label"
            value={sortValue}
            defaultValue="-1"
            onChange={handleSortChange}
          >
            {sortsTaxonomy.map((status) => (
              <MenuItem key={status.id} value={status.name}>
                {status.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Container>
    </div>
  );
}

export default AnimeFilter;
