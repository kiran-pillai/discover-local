'use client';
import {
    Box,
    Button,
    Divider,
    Heading,
    HStack,
    Text,
    theme,
    useColorMode,
    VStack,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import Logo from '../../../public/images/DL_logo.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { signIn, signOut, useSession } from 'next-auth/react';

const Topbar = (props: any) => {
    const { colorMode, toggleColorMode } = useColorMode();
    const router = useRouter();
    const session = useSession();
    const handleLogin = () =>
        session.status === 'authenticated' ? signOut() : signIn();
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
                    <VStack>
                        <Heading textAlign="center">Discover Local</Heading>
                        {session?.status === 'authenticated' &&
                            session?.data?.user && (
                                <Text fontStyle={'italic'}>
                                    Welcome{' '}
                                    {session?.data?.user?.name ??
                                        session?.data?.user?.email}
                                </Text>
                            )}
                    </VStack>

                    <HStack mr="10" alignItems="center" spacing="2.2rem">
                        <Button onClick={handleLogin} variant={'outline'}>
                            {session.status === 'authenticated'
                                ? 'Logout'
                                : 'Login'}
                        </Button>
                        <Box
                            sx={{
                                cursor: 'pointer',
                            }}
                        >
                            {colorMode === 'light' ? (
                                <MoonIcon onClick={toggleColorMode} />
                            ) : (
                                <SunIcon onClick={toggleColorMode} />
                            )}
                        </Box>
                    </HStack>
                </HStack>
            </Box>
            <Divider
                color={colorMode === 'light' ? 'inherit' : theme.colors.white}
            />
        </Box>
    );
};

export default Topbar;
