import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Додано властивість autoplay
    autoplaySpeed: 10000, // Вказано швидкість автоматичної прокрутки (2000 мс = 2 секунди)
  };

  return (
    <Slider {...settings}>
      <div>
        <h3>
          We work for content{' '}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h3>
      </div>
      <div>
        <h3>
          We work for content{' '}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h3>
      </div>
      <div>
        <h3>
          We work for content{' '}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h3>
      </div>
      <div>
        <h3>
          We work for content{' '}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h3>
      </div>
      <div>
        <h3>
          We work for content{' '}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h3>
      </div>
      <div>
        <h3>
          We work for content{' '}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h3>
      </div>
    </Slider>
  );
}
