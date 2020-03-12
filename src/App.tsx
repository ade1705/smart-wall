import React, {useState} from 'react';
import './App.css';
import {Box, Button, Flex, FormLabel, Grid, Heading, Switch} from "@chakra-ui/core/dist";
import Header from "./components/header/header";
import News from "./components/body/News";
import Controls from "./components/Controls/Controls";
import {Unsplash} from "./components/Image/Unsplash";



function App() {
	const [wallPaperUrl, setWallPaperUrl] = useState<string>('https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80');

  return (
    <div className="container" style={{ backgroundImage: `url(${wallPaperUrl})`}}>
	    <Flex flex={1} width="100%" p={10} flexDirection="column" justifyContent="space-between" className="white-bg-500">
		    <Header/>
		    <Flex justifyContent="space-between" paddingY={20} flex={1}>
			    <News></News>
			    <Box w="65%">
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
					    <Unsplash changeWallpaperCallback={setWallPaperUrl}></Unsplash>
				    </Grid>
			    </Box>
		    </Flex>
	    </Flex>
    </div>
  );
}

export default App;
