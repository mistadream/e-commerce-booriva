// react
import { Outlet } from 'react-router-dom';
// widgets
import { Header } from '@/widgets/Header';
import { Footer } from '@/widgets/Footer';
import { MobileNavbar } from '@/widgets/MobileNavbar';

// styles
import cls from './GlobalLayout.module.scss';

export const GlobalLayout = () => {
  return (
    <div className={cls.globalLayout}>
      <Header />
      <div className={cls.globalContent}>
        <Outlet />
      </div>
      <Footer />
      <MobileNavbar />
    </div>
  );
};
