'use client';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { SessionProvider } from 'next-auth/react';
import React from 'react';
import theme from './theme';

const Layout = ({
    children,
    session,
}: {
    children: React.ReactNode;
    session: any;
}) => {
    return (
        <SessionProvider session={session}>
            <ColorModeScript />
            <ChakraProvider theme={theme}>{children}</ChakraProvider>;
        </SessionProvider>
    );
};

export default Layout;
