'use client';
import { Box, Divider, Heading, HStack, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import Logo from '../../../public/images/DL_logo.png';
import Image from 'next/image';

const Topbar = (props: any) => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Box mb={'2rem'}>
            <Box borderRadius={'lg'}>
                <HStack justifyContent="space-between">
                    <Image
                        style={{ borderRadius: '0.1rem' }}
                        height={115}
                        src={Logo}
                        alt="logo"
                    />
                    <Heading textAlign="center">Discover Local</Heading>

                    <Box pr="5rem" sx={{ cursor: 'pointer' }}>
                        {colorMode === 'light' ? (
                            <MoonIcon onClick={toggleColorMode} />
                        ) : (
                            <SunIcon onClick={toggleColorMode} />
                        )}
                    </Box>
                </HStack>
            </Box>
            {colorMode === 'light' && <Divider />}
        </Box>
    );
};

export default Topbar;
