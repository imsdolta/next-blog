import React from 'react';
import { useRouter } from 'next/router';
import { Box, Typography } from '@mui/material';

const Header = (props) => {
  const router = useRouter();
  const { sections, title } = props;

  return (
    <Box
      sx={{
        height: 80,
        width: 'auto',
        backgroundColor: 'primary',
      }}
    >
      <Typography
        onClick={() => {
          router.push('/');
        }}
        sx={{
          cursor: 'pointer',
          '&:hover': {
            color: '#424961de',
          },
        }}
        variant='h2'
        component='h2'
      >
        {title}
      </Typography>
    </Box>
  );
};

export default Header;
