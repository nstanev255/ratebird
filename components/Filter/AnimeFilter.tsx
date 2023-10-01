import { useState } from 'react';
import { Taxonomy } from '@/api/ratebird-api/taxonomy/taxonomy';

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
  return <div />;
}

export default AnimeFilter;
