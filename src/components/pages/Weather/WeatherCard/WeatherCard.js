// import { Clock } from '../../../Clock/Clock';
import css from './WeatherCard.module.css';

export const WeatherCard = ({ data, curr }) => {
  console.log('curr', curr);
  console.log('data', data);

  console.log(data.country === 'Украина' || data.country === 'Ukraine');
  return (
    <div>
      <div className={css.location}>
        <p> Country : {data.country}</p>
        <p> City : {data.name}</p>

        <p>Date : {data.localtime}</p>
      </div>
      <div className={css.current}>
        <img src={curr.condition.icon} alt={curr.condition.text} width={50} />
        <p>Temp: {curr.temp_c} C</p>
        <p>Wind: {curr.wind_kph} kph</p>
        <p>Cloud: {curr.cloud} % </p>
        <p>Humidity: {curr.humidity}</p>

        <p>{curr.condition.text}</p>
      </div>
    </div>
  );
};
