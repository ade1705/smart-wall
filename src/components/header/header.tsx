import React, {Component} from 'react';
import {Box, Flex, Heading, Icon, Stack, Text, Image} from "@chakra-ui/core/dist";

class Header extends Component {
	render() {
		return (
		<Flex justify="space-between">
			<Stack isInline>
				<Image
					size="50px"
					rounded="full"
					objectFit="cover"
					src="https://bit.ly/sage-adebayo"
					alt="Segun Adebayo"
				/>
				<Box ml="5">
					<Heading as="h3" size="lg" fontWeight="light">Ade</Heading>
					<Text fontSize="sm" color="gray.400">Logout</Text>
				</Box>
			</Stack>
			<Flex>
				<Box ml="20" textAlign="right">
					<Flex justifyContent="space-between">
						<Heading as="h3" size="lg"><Icon name="sun"/> </Heading>
						<Heading as="h3" size="lg" fontWeight="light">18<sup><small>o</small></sup>C</Heading>
					</Flex>
					<Text fontSize="sm" color="gray.400">Little bit cloudy</Text>
				</Box>
				<Box ml="20" textAlign="right">
					<Heading as="h3" size="lg" fontWeight="light">21:47</Heading>
					<Text fontSize="sm" color="gray.400">Monday, 12 October</Text>
				</Box>
				<Flex ml="20" align="center">
					<Icon name="bell" size="32px" color="gray.400"/>
				</Flex>
			</Flex>
		</Flex>
		);
	}
}

export default Header;
