// react
import { Routes, Route } from 'react-router-dom';
// layouts
import { AppLayout } from './layouts/AppLayout/AppLayout';
// pages
import { Main } from './pages/Main';
// constants
import { getMainRoute } from '@/shared/constants/routes';

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route element={<AppLayout />}>
          <Route path={getMainRoute()} element={<Main />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
