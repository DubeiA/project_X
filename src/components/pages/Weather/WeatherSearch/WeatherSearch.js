import { useState } from 'react';
import { useFormik } from 'formik';
import { fetchWether } from '../api/weatherApi';

import css from './WeatherSearch.module.css';

export const WeatherSearch = () => {
  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState('');
  const [checkCity, setCheckCiry] = useState(false);

  const { location, current } = weather;

  const getWeather = async () => {
    if (checkCity && city.length !== 0) {
      const isWeather = await fetchWether(city);
      setWeather(isWeather);
      setCheckCiry(false);
    }
    return;
  };

  getWeather();

  const formik = useFormik({
    initialValues: {
      city: '',
    },
    onSubmit: values => {
      setCity(values.city);
      setCheckCiry(true);

      formik.resetForm();
    },
  });

  console.log(weather);

  return (
    <form onSubmit={formik.handleSubmit} className={css.form}>
      <input
        className={css.input}
        id="city"
        name="city"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.city}
        placeholder="City"
      />

      <button type="click" className={css.button}>
        Submit
      </button>
    </form>
  );
};
