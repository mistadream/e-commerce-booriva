// hooks
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';
// ui
import { FooterSocial } from '../FooterSocial';
import { FooterFeedback } from '../FooterFeedback';
import { FooterInfo } from '../FooterInfo';
import { FooterLocation } from '../FooterLocation';
import { Logo } from '@/shared/ui/Logo';
// styles
import cls from './Footer.module.scss';

export const Footer = () => {
  const logoRender = useMediaQuery('(min-width: 991.98px)');

  return (
    <footer className={cls.footer}>
      <div className={cls.footerContainer}>
        {logoRender && <Logo variant="footer" />}
        <FooterInfo />
        <FooterLocation />
        <FooterSocial />
        <FooterFeedback />
      </div>
    </footer>
  );
};
