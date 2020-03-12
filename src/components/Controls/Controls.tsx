import React, {Component} from 'react';
import Lights from "./Lights";
import {Box, Heading} from "@chakra-ui/core/dist";
import {Temperature} from "./Temperature";

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
