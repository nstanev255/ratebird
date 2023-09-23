async function getSeasonalTrending() {
  const response = await fetch(
    'http://127.0.0.1:8000/api/anime/seasonal/trending',
  );

  return response.json();
}

export default getSeasonalTrending;
