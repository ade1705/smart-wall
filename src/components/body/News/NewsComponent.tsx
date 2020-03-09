import {Badge, Box, Flex, Heading, Image, Text} from "@chakra-ui/core/dist";
import React from "react";
import {INews} from "./INews";
import { CarouselProvider, Slider, Slide, DotGroup, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
const SingleNewsComponent = (props:{ news: INews, key: number}) => {
	return <Slide index={props.key}  className="height-140">
		<Flex justifyContent="space-between" paddingY={5} bg="white" paddingX={5} marginTop={5} >
			<Flex flexDirection="column" flex="1" mr={10}>
				<Flex>
					<Badge fontSize="0.5em" variantColor="green">Category</Badge>
				</Flex>
				<Heading as="h3" size="sm" fontWeight="semibold">{props.news.title}</Heading>
				<Flex justifyContent="space-between">
					<Box>
						<Badge fontSize="0.5em" variantColor="red">{props.news.source}</Badge>
					</Box>
					<Text color="gray.400">2h ago</Text>
				</Flex>
			</Flex>
			<Flex>
				<Image
					size="70px"
					rounded="rounded"
					objectFit="cover"
					src={props.news.urlToImage}
					alt={props.news.title}
				/>
			</Flex>
		</Flex>
	</Slide>;
};

export const NewsComponent:React.FC<{newsArray: INews[]}> = ({newsArray}) => {
	return <>
		<CarouselProvider
			visibleSlides={3}
			totalSlides={newsArray.length}
			orientation="vertical"
			naturalSlideWidth={100}
			naturalSlideHeight={30}
			step={2}
			interval={2500}
			isPlaying={true}
			infinite={true}
		>
			<Slider>
				{
					newsArray.map((news, index:number) => <SingleNewsComponent key={index} news={news}></SingleNewsComponent>)
				}
			</Slider>
			<ButtonBack>Back</ButtonBack>

			<ButtonNext>Next</ButtonNext>
			<DotGroup dotNumbers />
		</CarouselProvider>
		</>;
}
