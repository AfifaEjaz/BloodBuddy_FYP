import React from 'react'
import { Box, Text, Flex, Heading, List, ListItem, ListIcon } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { ArrowRightIcon } from '@chakra-ui/icons'
import { Icon } from '@chakra-ui/react'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <hr />
            <Box as='footer' bg='#111111' color="white" justifyContent="center" >
                <Flex py="35px" gap="8" w="90%" wrap="wrap" borderBottom="1px solid white" m="auto">
                    <Box bg='' flex={2} minWidth='290px'>
                        <Heading fontSize='25px' pb='35px'>About Us</Heading>
                        <Text>Duis aute irure dolor in reprehenderit velit
                            esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat</Text>
                        <Text mt='10'>Phone: +1(456)657-887, 999</Text>
                        <Text>Email: admin@gmail.com</Text>

                    </Box>
                    <Box bg='' flex={1}>
                        <Heading fontSize='25px' pb='35px'>Quick Links</Heading>
                        <List spacing={3}>
                            <ListItem>
                                <NavLink to='#'><ListIcon as={ArrowRightIcon} color="red" boxSize='12px' /> Service</NavLink>
                            </ListItem>
                            <ListItem>
                                <NavLink to='#'><ListIcon as={ArrowRightIcon} color="red" boxSize='12px' /> About us</NavLink>
                            </ListItem>
                            <ListItem>
                                <NavLink to='#'><ListIcon as={ArrowRightIcon} color="red" boxSize='12px' />New Campaign</NavLink>
                            </ListItem>
                            <ListItem>
                                <NavLink to='#'><ListIcon as={ArrowRightIcon} color="red" boxSize='12px' />Latest News</NavLink>
                            </ListItem>
                            <ListItem>
                                <NavLink to='#'><ListIcon as={ArrowRightIcon} color="red" boxSize='12px' /> Contact</NavLink>
                            </ListItem>
                        </List>
                    </Box>
                    <Box bg='' flex={1}>
                        <Heading fontSize='25px' pb='35px'>Our Services</Heading>
                        <List spacing={3}>
                            <ListItem>
                                <NavLink to='#'><ListIcon as={ArrowRightIcon} color="red" boxSize='12px' />Blood Donation</NavLink>
                            </ListItem>
                            <ListItem>
                                <NavLink to='#'><ListIcon as={ArrowRightIcon} color="red" boxSize='12px' />Health Check</NavLink>
                            </ListItem>
                            <ListItem>
                                <NavLink to='#'><ListIcon as={ArrowRightIcon} color="red" boxSize='12px' />Blood Bank</NavLink>
                            </ListItem>
                            <ListItem>
                                <NavLink to='#'><ListIcon as={ArrowRightIcon} color="red" boxSize='12px' />Donate Process</NavLink>
                            </ListItem>
                            <ListItem>
                                <NavLink to='#'><ListIcon as={ArrowRightIcon} color="red" boxSize='12px' />Blood Info</NavLink>
                            </ListItem>
                        </List>
                    </Box>
                    <Box bg='' flex={2} minWidth='290px'>
                        <Heading fontSize='25px' pb='35px'>Latest News</Heading>
                        <Box display="flex" mb='3' gap={5}>
                            <img src="https://innovativeartisan.com/demo/html/blad-ai/assets/images/f1.jpg" alt="img" />
                            <Box>
                            <Text as='b' py={4} fontSize='18px' fontWeight={600} >A formula for help and happiness</Text>
                            <Text color='red'>18 February, 2022</Text>
                            </Box>
                        </Box>
                        <Box display="flex" mb='3' gap={5}>
                            <img src="http://innovativeartisan.com/demo/html/blad-ai/assets/images/f2.jpg" alt="" />
                            <Box>
                            <Text as='b' fontSize='18px' fontWeight={600}>Donation is hope for poor helpless children</Text>
                            <Text color='red'>18 February, 2022</Text>
                            </Box>
                        </Box>
                    </Box>
                </Flex>

                <Flex w="90%" m="auto" py='35px'>
                    <Box display='flex' justifyContent="space-between" w='100%'>
                        <Heading fontSize='25px'>Subscribe us for more update & news !!</Heading>
                        <Flex gap={2}>
                        <Icon as={FaInstagram} color="red" boxSize='23px'/>
                        <Icon as={FaTwitter} color="red" boxSize='23px'/>
                        <Icon as={FaFacebook} color="red" boxSize='23px'/>
                        <Icon as={FaLinkedin} color="red" boxSize='23px'/>
                        </Flex>
                    </Box>
                    <Box></Box>
                </Flex>

                <Box bg="black" p='30px' textAlign='center'>Copyright © 2020 Blad Ai. All rights reserved</Box>

            </Box>
        </>
    )
}

export default Footer