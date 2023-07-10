'use client';
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    HStack,
    Input,
    VStack,
    Center,
    Card,
    CardBody,
    CardHeader,
    Heading,
} from '@chakra-ui/react';
import { useState } from 'react';

const Register = (props: any) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submitForm = (e: any) => {
        e.preventDefault();
        console.log(username, password);
        fetch('http://localhost:3000/api/register', {
            // Add the protocol (http:// or https://) to the URL
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle the response data if needed
                console.log(data);
            })
            .catch((error) => {
                // Handle any errors
                console.error(error);
            });

        setUsername('');
        setPassword('');
    };

    return (
        <Center h="50vh">
            <Card borderRadius={'0.5rem'} padding="2.5rem">
                <CardHeader mx="auto">
                    <Heading size="md">Register</Heading>
                </CardHeader>
                <CardBody>
                    <form onSubmit={submitForm}>
                        <FormControl isRequired>
                            <VStack align="start" spacing="2rem">
                                <Box>
                                    <FormLabel>Username</FormLabel>
                                    <Input
                                        placeholder="Please enter a username"
                                        onChange={(e: any) =>
                                            setUsername(e.target.value)
                                        }
                                        value={username}
                                    />
                                </Box>

                                <Box>
                                    <FormLabel>Password</FormLabel>
                                    <Input
                                        placeholder="Please enter a password"
                                        onChange={(e: any) =>
                                            setPassword(e.target.value)
                                        }
                                        type="password"
                                        value={password}
                                    />
                                </Box>
                            </VStack>
                        </FormControl>
                        <Button
                            colorScheme={'blue'}
                            size="lg"
                            mt={'2rem'}
                            type="submit"
                            width="full"
                        >
                            Register
                        </Button>
                    </form>
                </CardBody>
            </Card>
        </Center>
    );
};

export default Register;
