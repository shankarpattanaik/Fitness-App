export const exerciseOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
    "x-rapidapi-key": "b552356bb5msh086adc1f385960fp1e582ajsn84e22b557f9b",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "youtube-search-and-download.p.rapidapi.com",
    "x-rapidapi-key": "b552356bb5msh086adc1f385960fp1e582ajsn84e22b557f9b",
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
