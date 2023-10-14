import { NextRouter } from 'next/router';

/**
 * This function will add/remove query params based on if the value is there.
 * @param router
 *   The router object.
 * @param queryKey
 *   The query key that needs to be added.
 * @param queryValue
 *   The query value that we need to add.
 *
 *   ?{queryKey}={queryValue}
 */
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
