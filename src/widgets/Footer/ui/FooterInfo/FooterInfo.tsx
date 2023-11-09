// hooks
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';
// libs
import classNames from 'classnames';
// ui
import { LinkButton } from '@/shared/ui/LinkButton';
import { IconButton } from '@/shared/ui/IconButton';
import { FooterInfoBlockTitle } from '../FooterInfoBlockTitle';
// model
import { linkList } from './model/linkList';
// styles
import cls from './FooterInfo.module.scss';
// img
import facebookLogo from '../../assets/svg/facebook-logo.svg';
import instagramLogo from '../../assets/svg/instagram-logo.svg';

export const FooterInfo = () => {
  const socialRender = useMediaQuery('(min-width: 991.98px)');

  return (
    <div className={cls.footerInfo}>
      <FooterInfoBlockTitle>ИНФО</FooterInfoBlockTitle>
      <ul className={cls.infoList}>
        {linkList.map((item) => {
          return (
            <li key={item.id} className={cls.listItem}>
              <LinkButton>{item.name}</LinkButton>
            </li>
          );
        })}
        {socialRender && (
          <li className={classNames(cls.listItem, cls.socialItem)}>
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
          </li>
        )}
      </ul>
    </div>
  );
};
