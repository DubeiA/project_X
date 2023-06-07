import { Link } from 'react-router-dom';

export const ToDo = () => {
  //   console.log('useParams', useParams());
  //   console.log('useLocation', useLocation());
  return (
    <div>
      <h3>ToDo</h3>
      <Link to={'/'}>To Home</Link>
    </div>
  );
};
