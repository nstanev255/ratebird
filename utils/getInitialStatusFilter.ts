/**
 * This function returns the intial status filter based off of a route.
 * @param route
 *   The route.
 */
function getInitialStatusFilter(route: string) {
  if (route === '/upcoming') {
    return 'upcoming';
  }

  return '';
}

export default getInitialStatusFilter;
