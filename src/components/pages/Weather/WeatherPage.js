import { Link } from 'react-router-dom';

export const Weather = () => {
  //   console.log('useParams', useParams());
  //   console.log('useLocation', useLocation());
  return (
    <div>
      <h3>Weather</h3>
      <Link to={'/'}>To Home</Link>
    </div>
  );
};
