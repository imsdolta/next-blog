import React from 'react';
import { useRouter } from 'next/router';
import { Box, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/PanoramaPhotosphere';

const Header = (props) => {
  const router = useRouter();
  const { title } = props;

  return (
    <Box
      sx={{
        height: 80,
        width: 'auto',
        display: 'flex',
        gap: '10px',
        alignItems: 'center',
        backgroundColor: 'primary',
        paddingLeft: '55px',
      }}
    >
      <HomeIcon fontSize='large' />
      <Typography
        onClick={() => {
          router.push('/');
        }}
        sx={{
          paddingRight: '10px',
          cursor: 'pointer',
          '&:hover': {
            color: '#424961de',
          },
        }}
        variant='h4'
      >
        {title}
      </Typography>
    </Box>
  );
};

export default Header;
