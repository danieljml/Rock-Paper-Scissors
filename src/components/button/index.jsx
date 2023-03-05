import React, { memo } from 'react';
import { Box } from '@mui/material';
import { container } from './styles';

const CustomeButton = ({ align, children }) => {
  return (
    <Box width={'100%'} sx={{ ...container, justifyContent: { xs: 'center', md: align } }}>
      {children}
    </Box>
  );
};

export default memo(CustomeButton);
