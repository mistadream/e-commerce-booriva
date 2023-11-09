//widgets
import { ShippingInfo } from '@/widgets/ShippingInfo';
import { ReturnInfo } from '@/widgets/ReturnInfo';
import { InstagramInfo } from '@/widgets/InstagramInfo';
// styles
import cls from './Main.module.scss';
import { Button } from '@/shared/ui/Button';

export const Main = () => {
  return (
    <main className={cls.main}>
      <ShippingInfo />
      <ReturnInfo />
      <InstagramInfo />
      <Button>Sad</Button>
    </main>
  );
};
