const API_KEY = 'f38907efd393452bb97153500230706';

export const fetchWether = async city => {
  const weather = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
  ).then(res => res.json());

  return weather;
};
