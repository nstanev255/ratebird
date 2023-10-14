import { Taxonomy } from '@/api/ratebird-api/taxonomy/taxonomy';
import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useState } from 'react';

export type AnimeFilterProps = {
  ratingsTaxonomy: Array<Taxonomy>;
  sortsTaxonomy: Array<Taxonomy>;
  statusesTaxonomy: Array<Taxonomy>;
  typesTaxonomy: Array<Taxonomy>;
  genresTaxonomy: Array<Taxonomy>;
};

function AnimeFilter({
  ratingsTaxonomy,
  sortsTaxonomy,
  typesTaxonomy,
  statusesTaxonomy,
  genresTaxonomy,
}: AnimeFilterProps) {
  const [genresValue, setGenresValue] = useState<string[]>([]);
  const [ratingValue, setRatingValue] = useState<string>('');
  const [sortValue, setSortValue] = useState<string>('');
  const [typesValue, setTypesValue] = useState<string>('');
  const [statusValue, setStatusValue] = useState<string>('');

  const handleGenreChange = (event: SelectChangeEvent<typeof genresValue>) => {
    const {
      target: { value },
    } = event;

    setGenresValue(typeof value === 'string' ? value.split(',') : value);
  };

  const handleRatingChange = (event: SelectChangeEvent<typeof ratingValue>) => {
    const {
      target: { value },
    } = event;

    setRatingValue(value);
  };

  const handleSortChange = (event: SelectChangeEvent<typeof sortValue>) => {
    const {
      target: { value },
    } = event;

    setSortValue(value);
  };

  const handleTypesChange = (event: SelectChangeEvent<typeof typesValue>) => {
    const {
      target: { value },
    } = event;

    setTypesValue(value);
  };

  const handleStatusChange = (event: SelectChangeEvent<typeof statusValue>) => {
    const {
      target: { value },
    } = event;

    setStatusValue(value);
  };

  return (
    <div>
      <Container>
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
            defaultValue="-1"
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
            defaultValue="-1"
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
            defaultValue="-1"
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
