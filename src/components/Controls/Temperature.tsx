import React, {Component} from 'react';
import { Slider } from '@chakra-ui/core';
import {SliderFilledTrack, SliderTrack, SliderThumb, Box, Heading} from "@chakra-ui/core/dist";
import { MdGraphicEq } from "react-icons/md"

export const  Temperature:React.FC<{}> = () => {
		return (
			<Box shadow="md" p={5}>
				<Heading as="h3" size="sm" color="gray.800" mb={5}>Temperature</Heading>
				<Slider defaultValue={30}>
					<SliderTrack bg="red.100" />
					<SliderFilledTrack bg="tomato" />
					<SliderThumb size={6}>
						<Box color="tomato" as={MdGraphicEq} />
					</SliderThumb>
				</Slider>
			</Box>
		);
}
