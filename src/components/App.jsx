// import { UserList } from './components/UserList';
import { Layout } from './MainPage/Layout/Layout';
import { Home } from './MainPage/Home/Home';

import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="/tweets" element={<UserList />} /> */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};
