import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Box, Flex, Text} from "@chakra-ui/core/dist";
import { Heading } from "@chakra-ui/core";

function App() {
  return (
    <div className="container">
	    <Box bg="black" w="100%" h="100%" p={4} color="white">
        <Flex justify="space-between">
          <Flex>
            <Box>h</Box>
            <Box ml="5">
	            <Heading as="h3" size="lg">21:47</Heading>
	            <p>Monday, 12 October</p>
            </Box>
          </Flex>
          <Flex className="text-right">
            <Box ml="5">
              <Heading as="h3" size="lg">18 C</Heading>
              <p>Little bit cloudy</p>
            </Box>
	          <Box ml="5">
              <Heading as="h3" size="lg">21:47</Heading>
		          <p>Monday, 12 October</p>
	          </Box>
	          <Box ml="5">sd</Box>
          </Flex>
        </Flex>
	    </Box>
    </div>
  );
}

export default App;
