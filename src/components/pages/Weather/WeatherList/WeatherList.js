import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

import { WeatherCard } from '../WeatherCard/WeatherCard';
import {
  getWeatherCurrent,
  getWeatherLocation,
} from '../../../../redux/weather/selectors';

import css from './WeatherList.module.css';

export const WeatherList = () => {
  const location = useSelector(getWeatherLocation);
  const current = useSelector(getWeatherCurrent);

  return (
    <div className={css.container}>
      <ul className={css.list}>
        {location.map((locat, index) => {
          const curr = current[index];
          return (
            <li className={css.item} key={nanoid()}>
              <WeatherCard data={locat} curr={curr} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
