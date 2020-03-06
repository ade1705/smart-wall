import React from 'react';
import './App.css';
import {Box, Flex, Heading, Text} from "@chakra-ui/core/dist";
import Header from "./components/header/header";
import News from "./components/body/News";

function App() {
  return (
    <div className="container">
	    <Flex flex={1} width="100%" p={10} flexDirection="column" justifyContent="space-between" className="white-bg-500">
		    <Header/>
		    <Flex justifyContent="space-between" paddingY={20} flex={1}>
			    <News></News>
			    <Text>dfjk</Text>
		    </Flex>
	    </Flex>
    </div>
  );
}

export default App;
