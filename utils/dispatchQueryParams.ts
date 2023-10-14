import { addQueryParam, removeQueryParam } from '@/redux/queryParams';
import { AnyAction, Dispatch } from 'redux';

const dispatchQueryParams = (
  dispatch: Dispatch<AnyAction>,
  key: string,
  value: string,
) => {
  if (value) {
    dispatch(addQueryParam({ key, value }));
  } else {
    dispatch(removeQueryParam(key));
  }
};

export default dispatchQueryParams;
