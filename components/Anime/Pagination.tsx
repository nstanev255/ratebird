import MUIPagination from '@mui/material/Pagination';
import { SetStateAction } from 'react';
import { MinimumAnime } from '@/api/ratebird-api/anime';

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

  setPaginationMetadata(state: SetStateAction<PaginationMetadata>): void;
  setItems(state: SetStateAction<Array<MinimumAnime>>): void;
};

function Pagination({
  metadata,
  setPaginationMetadata,
  setItems,
}: PaginationProps) {
  return <MUIPagination count={metadata.last_visible_page} />;
}

export default Pagination;
