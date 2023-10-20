//react
import React from 'react';
import ReactDOM from 'react-dom/client';
//modules
import App from '@/app/App';
//styles
import './index.scss';

import { Button } from './shared/ui/Button';
import { PageCategoryText } from './shared/ui/PageCategoryText';
import { TextArea } from './shared/ui/TextArea';
import { Input } from './shared/ui/Input';
import { RadioButton } from './shared/ui/RadioButton';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Button>Cмотреть все</Button>
    <PageCategoryText subtitle="asdasd">saffs</PageCategoryText>
    <TextArea placeholder="Fasfsa saffasfasasf" />
    <Input type="text" placeholder="Fasfsa safasf" />
    <RadioButton
      checked={true}
      id="radio1"
      name="delivery"
      value="Standart-N-P"
      deliveryDescription="asfasfsaf"
      deliveryCost="sad"
    />
    <RadioButton
      checked={false}
      id="radio2"
      name="delivery"
      value="Standart-N-P"
      deliveryDescription="asfasfsaf"
      deliveryCost="sad"
    />
  </React.StrictMode>
);
