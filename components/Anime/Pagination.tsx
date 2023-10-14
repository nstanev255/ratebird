import MUIPagination from '@mui/material/Pagination';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import dispatchQueryParams from '@/utils/dispatchQueryParams';

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
};

function Pagination({ metadata }: PaginationProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const dispatch = useDispatch();
  const handleChange = (event: unknown, page: number) => {
    if (page !== currentPage) {
      setCurrentPage(page);
      dispatchQueryParams(dispatch, 'page', `${page}`);
    }
  };

  return (
    <MUIPagination
      page={currentPage}
      onChange={handleChange}
      count={metadata.last_visible_page}
    />
  );
}

export default Pagination;
