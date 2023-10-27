// ui
import { IconButton } from '@/shared/ui/IconButton';
import { FooterInfoBlockTitle } from '../FooterInfoBlockTitle';

// styles
import cls from './FooterSocial.module.scss';

// img
import facebookLogo from '../../assets/svg/facebook-logo.svg';
import instagramLogo from '../../assets/svg/instagram-logo.svg';

export const FooterSocial = () => {
  return (
    <div className={cls.footerSocial}>
      <FooterInfoBlockTitle>СОЦ.СЕТИ</FooterInfoBlockTitle>
      <div className={cls.iconContainer}>
        <IconButton
          variant="footer"
          altValue="facebook logo"
          img={facebookLogo}
        ></IconButton>
        <IconButton
          variant="footer"
          altValue="instagram logo"
          img={instagramLogo}
        ></IconButton>
      </div>
    </div>
  );
};
