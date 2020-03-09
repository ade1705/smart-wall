import React, {Component} from 'react';
import Temperature from "./Temperature";
import Lights from "./Lights";
import {Box, Heading} from "@chakra-ui/core/dist";

class Controls extends React.PureComponent<{}, {}> {
	render() {
		return (
			<Box w="100%">
				<Temperature/>
				<Lights/>
			</Box>
		);
	}
}

export default Controls;
