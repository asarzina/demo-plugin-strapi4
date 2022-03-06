/*
 *
 * HomePage
 *
 */

import React, { memo } from 'react';
import { Alert } from '@strapi/design-system/Alert';
import { Box } from '@strapi/design-system/Box';
import { Button } from '@strapi/design-system/Button';
import { Typography } from '@strapi/design-system/Typography';

const HomePage = () => {
  return (
    <Box padding={[11, 6, 1]}>
      <Typography variant="alpha" lineHeight="2em">Custom Home Page</Typography>
      <Alert closeLabel="Close alert" title="Title" variant="success" style={{marginBottom: '20px'}}>This is the default variant.</Alert>
      <Button variant="default" fullWidth style={{marginBottom: '10px'}}>Default</Button>
      <Button variant="secondary" fullWidth>Secondary</Button>
    </Box>
  );
};

export default memo(HomePage);
