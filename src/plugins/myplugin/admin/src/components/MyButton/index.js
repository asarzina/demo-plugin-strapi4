import React from 'react';
import { Button } from '@strapi/design-system/Button';

const MyButton = () => {
  const onClick = () => alert('Hi Palmabit!');

  return <Button onClick={onClick}>Clicca qui</Button>;
};

export default MyButton;
