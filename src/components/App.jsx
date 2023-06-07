// import { UserList } from './components/UserList';
import { Layout } from './MainPage/Layout/Layout';
import { Home } from './MainPage/Home/Home';
import { MenuPage } from './MenuPage/MenuPage';
import { Weather } from './pages/Weather/WeatherPage';
import { ToDo } from './pages/ToDo/ToDo';

import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/menu/weather" element={<Weather />} />
          <Route path="/menu/todo" element={<ToDo />} />

          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};
