// react
import { Routes, Route } from 'react-router-dom';
// layouts
import { GlobalLayout } from './layouts/GlobalLayout/GlobalLayout';
// pages
import { Main } from './pages/Main';
// providers
import { GlobalProvider } from '@/app/providers/context/global/globalProvider';
// constants
import { getMainRoute } from '@/shared/constants/routes';

const App = () => {
  return (
    <GlobalProvider>
      <div className="app">
        <Routes>
          <Route element={<GlobalLayout />}>
            <Route path={getMainRoute()} element={<Main />}></Route>
          </Route>
        </Routes>
      </div>
    </GlobalProvider>
  );
};

export default App;
