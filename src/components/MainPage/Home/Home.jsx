import { SliderBox } from '../Slider/SliderBox';
import { Link } from 'react-router-dom';

import css from './Home.module.css';
export function Home() {
  return (
    <div>
      <div>
        <SliderBox />
      </div>

      <div className={css.container}>
        <Link to="/menu/weather">
          <img
            className={css.imglink}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxZ3sKNvVZ0SZWa7N7YupHjiOPohkAGBsht0Fn9fbjAwuu262e2UlU-Z2AxH8mXeGxk9E&usqp=CAU"
            alt="Weather"
            width={170}
          />
        </Link>
        <Link to="/menu/todo">
          <img
            className={css.imglink}
            src="https://cdn.icon-icons.com/icons2/1526/PNG/512/checklist_106575.png"
            alt="Weather"
            width={170}
          />
        </Link>
      </div>
    </div>
  );
}
