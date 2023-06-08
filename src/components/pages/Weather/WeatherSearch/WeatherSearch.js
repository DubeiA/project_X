import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { fetchWeatherData } from '../../../../redux/weather/weatherOperation';

import { SearchByName } from 'redux/weather/weatherReducer';

import css from './WeatherSearch.module.css';

export const WeatherSearch = () => {
  // const [weather, setWeather] = useState([]);
  const [city, setCity] = useState([]);
  const [checkCity, setCheckCiry] = useState(false);

  // const { location, current } = weather;

  const dispatch = useDispatch();

  useEffect(() => {
    if (checkCity && city.length !== 0) {
      dispatch(fetchWeatherData(city));
      dispatch(SearchByName(city));
      setCheckCiry(false);
    }
  }, [checkCity, city, dispatch]);

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

  // console.log(weather);

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
