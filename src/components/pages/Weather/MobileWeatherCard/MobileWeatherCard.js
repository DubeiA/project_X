import css from './MobileWeatherCard.module.css';
import { BsWind, BsFillCloudsFill } from 'react-icons/bs';

export const MobileWeatherCard = ({ data, curr }) => {
  return (
    <div>
      <div className={css.location_tel}>
        <p className={css.city_tel}>
          City : <span className={css.city_span_tel}>{data.name}</span>
        </p>

        <p className={css.date_tel}>
          Date : <span className={css.date_span_tel}>{data.localtime}</span>
        </p>
      </div>
      <div className={css.current_tel}>
        <div className={css.container_current_tel}>
          <p className={css.temp_tel}> {curr.temp_c} &#8451;</p>
          <p className={css.wind_tel}>
            {<BsWind className={css.wind_icon_tel} />} Wind: {curr.wind_kph} kph
          </p>
        </div>
        <div className={css.container_current_tel_img}>
          <img
            className={css.img_tel}
            src={curr.condition.icon}
            alt={curr.condition.text}
            width={50}
          />
          <p className={css.wind_tel}>{curr.condition.text}</p>
        </div>

        <div className={css.container_current_tel}>
          <p className={css.temp_tel}>Humidity: {curr.humidity} %</p>
          <p className={css.wind_tel}>
            {' '}
            {<BsFillCloudsFill className={css.cloud_icon_tel} />} Cloud:{' '}
            {curr.cloud} %
          </p>
        </div>
      </div>
    </div>
  );
};
