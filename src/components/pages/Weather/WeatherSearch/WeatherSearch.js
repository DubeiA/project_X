import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherData } from '../../../../redux/weather/weatherOperation';

import { SearchByName } from 'redux/weather/weatherReducer';
import { getCities } from 'redux/weather/selectors';

import css from './WeatherSearch.module.css';

export const WeatherSearch = () => {
  const [city, setCity] = useState([]);
  const [checkCity, setCheckCiry] = useState(false);

  const listAllCity = useSelector(getCities);

  const dispatch = useDispatch();

  const checkOnDouble = listAllCity.filter(cities => cities !== city);

  useEffect(() => {
    if (
      checkCity &&
      city.length !== 0 &&
      checkOnDouble.length === listAllCity.length
    ) {
      dispatch(fetchWeatherData(city));
      dispatch(SearchByName(city));

      setCheckCiry(false);
    }
  }, [checkCity, checkOnDouble.length, city, dispatch, listAllCity.length]);

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
