import { Taxonomy } from '@/api/ratebird-api/taxonomy/taxonomy';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useState } from 'react';

export type AnimeFilterProps = {
  ratings: Array<Taxonomy>;
  sorts: Array<Taxonomy>;
  statuses: Array<Taxonomy>;
  types: Array<Taxonomy>;
  genres: Array<Taxonomy>;
};

function AnimeFilter({
  ratings,
  sorts,
  types,
  statuses,
  genres,
}: AnimeFilterProps) {
  const [genresValue, setGenresValue] = useState<string[]>();

  const handleGenreChange = (event: SelectChangeEvent<typeof genresValue>) => {
    const {
      target: { value },
    } = event;

    setGenresValue(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <div>
      <FormControl>
        <InputLabel id="genres-filter-label">Genres</InputLabel>
        <Select
          labelId="genres-filter-label"
          multiple
          value={genresValue as ''}
          onChange={handleGenreChange}
          renderValue={(selected) => selected.join(',')}
        >
          {genres.map((genre) => (
            <MenuItem key={genre.id} value={genre.name}>
              {genre.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default AnimeFilter;
