import { BsWind, BsFillCloudsFill } from 'react-icons/bs';
import css from './WeatherCard.module.css';

import MediaQuery from 'react-responsive';

export const WeatherCard = ({ data, curr }) => {
  //  const isDesktopOrLaptop = useMediaQuery({
  //    query: '(min-width: 1224px)',
  //  });
  //  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });
  //  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  //  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  //  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

  return (
    <div>
      <MediaQuery minWidth={769}>
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
              {' '}
              {<BsFillCloudsFill className={css.cloud_icon} />} Cloud:{' '}
              {curr.cloud} %{' '}
            </p>
          </div>
        </div>
      </MediaQuery>

      <MediaQuery maxWidth={768}>
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
              {<BsWind className={css.wind_icon_tel} />} Wind: {curr.wind_kph}{' '}
              kph
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
              {curr.cloud} %{' '}
            </p>
          </div>
        </div>
      </MediaQuery>
    </div>
  );
};
