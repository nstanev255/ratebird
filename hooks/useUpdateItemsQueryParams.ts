import { SetStateAction, useEffect, useState } from 'react';
import { MinimumAnime } from '@/api/ratebird-api/anime';
import { PaginationMetadata } from '@/components/Anime/Pagination';
import { useSelector } from 'react-redux';
import getSearchAnime, {
  SearchAnimeRequest,
} from '@/api/ratebird-api/getSearchAnime';
import { selectQueryParams } from '@/redux/store';

function useUpdateItemsQueryParams(
  setItems: (state: SetStateAction<Array<MinimumAnime>>) => void,
  setPagination: (state: SetStateAction<PaginationMetadata>) => void,
) {
  const queryParams = useSelector(selectQueryParams);
  const [loading, setLoading] = useState(false);
  const [initialLoad, setInitialLoad] = useState(false);

  useEffect(() => {
    // Only do the useEffect when we have someone write something.
    if (!initialLoad && Object.keys(queryParams).length > 0) {
      setInitialLoad(true);
    }

    if (!initialLoad) {
      return;
    }
    const doRequest = async () => {
      setLoading(true);
      const request = queryParams as SearchAnimeRequest;
      const response = await getSearchAnime(request);

      setItems(response.data);
      setPagination(response.pagination);

      setLoading(false);
    };

    doRequest();
  }, [queryParams, setItems, setPagination]);

  return loading;
}

export default useUpdateItemsQueryParams;
