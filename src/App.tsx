import React from 'react';
import './App.css';
import {Box, Flex, FormLabel, Grid, Heading, Switch} from "@chakra-ui/core/dist";
import Header from "./components/header/header";
import News from "./components/body/News";
import {NewsComponent} from "./components/body/News/NewsComponent";
import Lights from "./components/Controls/Lights";
import Controls from "./components/Controls/Controls";

function App() {
  return (
    <div className="container">
	    <Flex flex={1} width="100%" p={10} flexDirection="column" justifyContent="space-between" className="white-bg-500">
		    <Header/>
		    <Flex justifyContent="space-between" paddingY={20} flex={1}>
			    <News></News>
			    <Box>
				    <Heading as="h3" size="lg" fontWeight="thin" color="gray.400" mb={5}>Recent</Heading>
				    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
					    <Box w="100%">
						    {/*<Heading as="h3" size="md" fontWeight="thin" color="gray.800" mb={2}>Favourite</Heading>*/}
						    <iframe src="https://open.spotify.com/embed/album/5nhLODdncnkg3rVlzva3YY"
						            width="300"
						            height="380" frameBorder="0" allowTransparency={true}
						            allow="encrypted-media"></iframe>
					    </Box>
					    <Controls/>
					    <Box w="100%" h="10" bg="blue.500" />
				    </Grid>
			    </Box>
		    </Flex>
	    </Flex>
    </div>
  );
}

export default App;
