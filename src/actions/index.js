import axios from 'axios';

const API_KEY = '30b5696a95c842e52bfc491cd185b300';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=?${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(cityName) {
  const url = `${ROOT_URL}&q=${cityName},us`;

  // this returns a promise since axios is a promise-based HTTP client
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
