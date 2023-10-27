// ui
import { ShippingInfo } from '@/widgets/ShippingInfo';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { PageCategoryText } from '@/shared/ui/PageCategoryText';
import { RadioButton } from '@/shared/ui/RadioButton';
import { TextArea } from '@/shared/ui/TextArea';
import { ReturnInfo } from '@/widgets/ReturnInfo';
import { Map } from '@/widgets/Map';

// styles
import cls from './Main.module.scss';

export const Main = () => {
  return (
    <main className={cls.main}>
      <div className={cls.mainContainer}>
        <ShippingInfo />
        <Button>asf</Button>
        <Input type="text" placeholder="sad" />
        <PageCategoryText title="asd" subtitle="1243" />
        <RadioButton
          id="21"
          name="123"
          value="qweweq"
          deliveryDescription="asdsad"
          deliveryCost="231"
        />
        <TextArea placeholder="adssad" />
        <ReturnInfo />
        <Map />
      </div>
    </main>
  );
};
