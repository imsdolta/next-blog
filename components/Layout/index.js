import { React } from 'react';
import { Container } from '@mui/material';
import Header from '../Header';
import Head from 'next/head';

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />

        <meta charSet='utf-8' />
        <meta
          name='viewport'
          content='initial-scale=1.0, width=device-width'
          key='viewport'
        />
      </Head>

      <Container
        maxWidth='xl'
        style={{
          borderRadius: '5px',
          backgroundColor: '#f1f1f1',
          paddingBottom: '10px',
        }}
      >
        <Header title={title} />
        {children}
      </Container>
    </>
  );
};

export default Layout;
