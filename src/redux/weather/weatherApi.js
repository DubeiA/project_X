import axios from 'axios';

const API_KEY = 'f38907efd393452bb97153500230706';

export const fetchWeather = async city => {
  try {
    console.log(city);
    const { data } = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
    );

    return data;
  } catch (error) {
    console.error('Помилка отримання погоди:', error);
  }
};
