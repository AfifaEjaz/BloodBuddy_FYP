import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Collapse,
  IconButton,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import ColorModeSwitch from "./ColorModeSwitch";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = ["Home", "ContactUs", "Find-Blood", "Login/Signup"];

  return (
    <Box width="100%" position="relative" zIndex="1000">
      {/* Top red bar */}
      <Box bg="red.600" h="50px" />

      {/* Flex container for the navigation bar */}
      <Box bg="white" width="100%" boxShadow="md">
        <Flex
          as="nav"
          justify="space-between"
          align="center"
          px={14}
          py={isOpen ? 2 : 5}
          width="100%"
        >
          {/* Logo and hamburger/close icon */}
          <Flex alignItems="center" justify="space-between" width="100%">
            <Text color="red.600" fontWeight="bold" fontSize="2xl">
              Blood Bank
            </Text>

            {/* Hamburger/close icon for mobile view */}

            <IconButton
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              onClick={toggleMenu}
              aria-label="Toggle Navigation"
              display={{ base: "flex", lg: "none" }}
              // colorScheme="red"
              color="red.600"
              // bg="white"
              // variant="outline"
              // boxSize={4}
              ml={2}
            />
          </Flex>

          {/* Desktop navigation links */}
          <Flex display={{ base: "none", lg: "flex" }} alignItems="center">
            {navItems.map((item) => (
              <Flex key={item} alignItems="center">
                {item === "Find-Blood" ? (
                  <Menu>
                    <MenuButton
                      as={Button}
                      color="red.600"
                      lineHeight="1.5"
                      variant="link"
                      _hover={{
                        color: "white",
                        bg: "red.600",
                        borderRadius: "md",
                        px: "3",
                        py: "1.5",
                      }}
                      mx={2}
                    >
                      Find Blood
                    </MenuButton>
                    <MenuList>
                      <MenuItem
                        as={RouterLink}
                        to="/testimonials"
                        _hover={{
                          color: "white",
                          bg: "red.600",
                          borderRadius: "md",
                        }}
                      >
                        Blood Centers
                      </MenuItem>
                      <MenuItem
                        as={RouterLink}
                        to="/faq"
                        _hover={{
                          color: "white",
                          bg: "red.600",
                          borderRadius: "md",
                        }}
                      >
                        Donors
                      </MenuItem>
                    </MenuList>
                  </Menu>
                ) : (
                  <Link
                    as={RouterLink}
                    to={item === "Home" ? "/" : `/${item}`}
                    mx={2}
                    px={2}
                    color="red.600"
                    lineHeight="1.5"
                    whiteSpace="nowrap"
                    _hover={{
                      color: "white",
                      bg: "red.600",
                      borderRadius: "md",
                      px: "3",
                      py: "1.5",
                    }}
                  >
                    {item}
                  </Link>
                )}
              </Flex>
            ))}
          </Flex>
        </Flex>

        {/* Mobile menu (collapsible) */}
        <Collapse in={isOpen} animateOpacity>
          <Box
            bg="white"
            boxShadow="md"
            borderRadius="md"
            px={4}
            py={2}
            display={{ lg: "none" }}
          >
            {navItems.map((item) => (
              <Flex key={item} alignItems="center" my={2}>
                {item === "Find-Blood" ? (
                  <Menu>
                    <MenuButton
                      as={Button}
                      color="red.600"
                      lineHeight="1.5"
                      variant="link"
                      _hover={{
                        color: "white",
                        bg: "red.600",
                        borderRadius: "md",
                      }}
                      mx={4}
                    >
                      Pages
                    </MenuButton>
                    <MenuList>
                      <MenuItem
                        as={RouterLink}
                        to="/testimonials"
                        _hover={{
                          color: "white",
                          bg: "red.600",
                          borderRadius: "md",
                        }}
                      >
                        Testimonials
                      </MenuItem>
                      <MenuItem
                        as={RouterLink}
                        to="/faq"
                        _hover={{
                          color: "white",
                          bg: "red.600",
                          borderRadius: "md",
                        }}
                      >
                        FAQ
                      </MenuItem>
                    </MenuList>
                  </Menu>
                ) : (
                  <Link
                    as={RouterLink}
                    to={item === "Home" ? "/" : `/${item}`}
                    mx={4}
                    color="red.600"
                    lineHeight="1.5"
                    _hover={{
                      color: "white",
                      bg: "red.600",
                      borderRadius: "md",
                    }}
                  >
                    {item}
                  </Link>
                )}
              </Flex>
            ))}
          </Box>
        </Collapse>
        {/* <ColorModeSwitch /> */}
      </Box>
    </Box>
  );
};

export default NavigationBar;
