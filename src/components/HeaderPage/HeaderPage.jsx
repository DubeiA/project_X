import { NavLink } from 'react-router-dom';
import css from './HeaderPage.module.css';
import { Gi3DStairs, GiCharacter, GiCheckboxTree } from 'react-icons/gi';

const headerItems = [
  { to: '/', title: 'Home', icon: <Gi3DStairs className={css.icon} /> },
  {
    to: '/message',
    title: 'message',
    icon: <GiCheckboxTree className={css.icon} />,
  },
  {
    to: '/profile',
    title: 'profile',
    icon: <GiCharacter className={css.icon} />,
  },
];

export const HeaderPage = () => {
  return (
    <nav className={css.nav}>
      <ul>
        {headerItems.map(headerItem => (
          <li key={headerItem.title}>
            <NavLink
              //   className={({ isActive }) => (isActive ? css.nav_active : null)}
              to={headerItem.to}
            >
              {headerItem.icon}
              {headerItem.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
