import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Spacer,
  Heading,
  useBreakpointValue,
  useColorMode,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { FiMenu , } from "react-icons/fi";
import { Link } from "react-router-dom";
import  {useState} from 'react'
import Footer from "./Footer";


//

function Nav() {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  


  

  return (
    <div>
      <Box as="section">
        <Box as="nav" h={20}  border={2}>
       

          <Flex
            bg="#d4d0d0"
            boxShadow="lg"
            minWidth="max-content"
            alignItems="center"
            gap="2"
            h={59}
          >
           
            <Box p="4" bg="#d4d0d0">
              <Heading bg="#d4d0d0" color={"black"} size="md">To Do </Heading>
            </Box>
            <Spacer bg="#d4d0d0" />
        

   
          </Flex>
        </Box>
      </Box>
      
    </div>
  );
}

export default Nav;
