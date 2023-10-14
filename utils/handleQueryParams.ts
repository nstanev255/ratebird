import { NextRouter } from 'next/router';

function handleQueryParams(
  router: NextRouter,
  queryKey: string,
  queryValue: string,
) {
  if (queryValue) {
    const query = { ...router.query };
    query[queryKey] = queryValue;
    router.push({ ...router, query });
  } else if (router.query[queryKey]) {
    // We need to delete the query param here.
    // eslint-disable-next-line no-param-reassign
    delete router.query[queryKey];
    router.push(router, undefined, { shallow: true });
  }
}

export default handleQueryParams;
