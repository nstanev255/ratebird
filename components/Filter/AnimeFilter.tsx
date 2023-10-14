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
import { useState, useEffect, SetStateAction } from 'react';
import { MinimumAnime } from '@/api/ratebird-api/anime';
import getSearchAnime, {
  SearchAnimeRequest,
} from '@/api/ratebird-api/getSearchAnime';
import { Pagination } from '@/api/ratebird-api/pagination';
import { useRouter } from 'next/router';
import handleQueryParams from '@/utils/handleQueryParams';

export type AnimeFilterProps = {
  ratingsTaxonomy: Array<Taxonomy>;
  sortsTaxonomy: Array<Taxonomy>;
  statusesTaxonomy: Array<Taxonomy>;
  typesTaxonomy: Array<Taxonomy>;
  genresTaxonomy: Array<Taxonomy>;

  setItems(state: SetStateAction<Array<MinimumAnime>>): void;
  setPagination(state: SetStateAction<Pagination>): void;

  initialStatus: string | undefined;
};

function AnimeFilter({
  ratingsTaxonomy,
  sortsTaxonomy,
  typesTaxonomy,
  statusesTaxonomy,
  genresTaxonomy,

  setItems,
  setPagination,
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
  const router = useRouter();

  const handleGenreChange = (event: SelectChangeEvent<typeof genresValue>) => {
    const {
      target: { value },
    } = event;

    const split = typeof value === 'string' ? value.split(',') : value;

    setGenresValue(split);
    handleQueryParams(router, 'genres', split.join(','));
  };

  const handleRatingChange = (event: SelectChangeEvent<typeof ratingValue>) => {
    const {
      target: { value },
    } = event;

    setRatingValue(value);
    handleQueryParams(router, 'rating', value);
  };

  const handleSortChange = (event: SelectChangeEvent<typeof sortValue>) => {
    const {
      target: { value },
    } = event;

    setSortValue(value);
    handleQueryParams(router, 'sort', value);
  };

  const handleTypesChange = (event: SelectChangeEvent<typeof typesValue>) => {
    const {
      target: { value },
    } = event;

    setTypesValue(value);
    handleQueryParams(router, 'type', value);
  };

  const handleStatusChange = (event: SelectChangeEvent<typeof statusValue>) => {
    const {
      target: { value },
    } = event;

    setStatusValue(value);
    handleQueryParams(router, 'status', value);
  };

  useEffect(() => {
    const request: SearchAnimeRequest = {};

    if (title) {
      request.title = title;
    }

    if (ratingValue) {
      request.rating = ratingValue;
    }

    if (sortValue) {
      request.sort = sortValue;
    }

    if (typesValue) {
      request.type = typesValue;
    }

    if (statusValue) {
      request.status = statusValue;
    }

    // TODO: Implement throttling.
    getSearchAnime(request).then((response) => {
      setItems(response.data);
      setPagination(response.pagination);
    });
  }, [title, statusValue, ratingValue, sortValue, typesValue]);

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
              handleQueryParams(router, 'q', event.target.value);
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
