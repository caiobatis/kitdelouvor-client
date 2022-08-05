import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from '../Header';
import { Box, useColorModeValue } from '@chakra-ui/react';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'Kit de Louvor - IASD' }: Props) => (
  <Box bg={useColorModeValue('gray.50', 'transparent')}>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>

    <Header />

    {children}
  </Box>
);

export default Layout;
