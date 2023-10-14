import MUIPagination from '@mui/material/Pagination';
import { SetStateAction } from 'react';
import { Anime } from '@/api/ratebird-api/anime';

export type PaginationMetadata = {
  last_visible_page: number;
  has_next_page: boolean;
  items: {
    count: number;
    total: number;
    per_page: number;
  };
};

type PaginationProps = {
  metadata: PaginationMetadata;

  setPaginationMetadata: SetStateAction<PaginationMetadata>;
  setItems: SetStateAction<Array<Anime>>;
};

function Pagination({
  metadata,
  setPaginationMetadata,
  setItems,
}: PaginationProps) {
  return <MUIPagination count={metadata.last_visible_page} />;
}

export default Pagination;
