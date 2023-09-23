async function getUpcomingTrending() {
  const response = await fetch(
    'http://127.0.0.1:8000/api/anime/upcoming/trending',
  );

  return response.json();
}

export default getUpcomingTrending;
