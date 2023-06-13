import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import css from './SliderBox.module.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function SliderBox() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
  };

  return (
    <Slider {...settings}>
      <div className={css.container}>
        <Link className={css.contentLink} to={'/menu/weather'}>
          Weather Page
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </Link>
      </div>
      <div className={css.container}>
        <Link className={css.contentLink} to={'/menu/todo'}>
          To Do Page
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </Link>
      </div>
      <div className={css.container}>
        <h3 className={css.contentLink}>
          We work for content{' '}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h3>
      </div>
      <div className={css.container}>
        <h3 className={css.contentLink}>
          We work for content{' '}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h3>
      </div>
      <div className={css.container}>
        <h3 className={css.contentLink}>
          We work for content{' '}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h3>
      </div>
      <div className={css.container}>
        <h3 className={css.contentLink}>
          We work for content{' '}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h3>
      </div>
    </Slider>
  );
}
