import { Link } from 'react-router-dom';

export const MenuPage = () => {
  // console.log(useLocation());
  return (
    <div>
      <h1>Menu</h1>
      <Link to={'/menu/weather'}>Weather</Link>
      <br />
      <br />
      <Link to={'/menu/todo'}>To Do</Link>
    </div>
  );
};
