import { BsWind, BsFillCloudsFill } from 'react-icons/bs';
import css from './WeatherCard.module.css';

import MediaQuery from 'react-responsive';

export const WeatherCard = ({ data, curr }) => {
  return (
    <div>
      <div className={css.location}>
        <p className={css.city}>
          City : <span className={css.city_span}>{data.name}</span>
        </p>

        <p className={css.date}>
          Date : <span className={css.date_span}>{data.localtime}</span>
        </p>
      </div>
      <div className={css.current}>
        <div className={css.container_current}>
          <p className={css.temp}> {curr.temp_c} &#8451;</p>
          <p className={css.wind}>
            {<BsWind className={css.wind_icon} />} Wind: {curr.wind_kph} kph
          </p>
        </div>
        <div className={css.container_current}>
          <img
            className={css.img}
            src={curr.condition.icon}
            alt={curr.condition.text}
            width={50}
          />
          <p className={css.wind}>{curr.condition.text}</p>
        </div>

        <div className={css.container_current}>
          <p className={css.temp}>Humidity: {curr.humidity} %</p>
          <p className={css.wind}>
            {<BsFillCloudsFill className={css.cloud_icon} />} Cloud:
            {curr.cloud} %
          </p>
        </div>
      </div>
    </div>
  );
};
