import {Badge, Box, Flex, Heading, Image, Text} from "@chakra-ui/core/dist";
import React from "react";
import {INews} from "./INews";
let title = 'https://cdn.cnn.com/cnnnext/dam/assets/200306040557-woman-home-sick-stock-super-tease.jpg';
const SingleNewsComponent = (props:{ news: INews}) => {
	return <>
		<Flex justifyContent="space-between" paddingY={5} bg="white" paddingX={5} marginTop={2}>
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
					alt="Segun Adebayo"
				/>
			</Flex>
		</Flex>
	</>;
};

export const NewsComponent:React.FC<{newsArray: INews[]}> = ({newsArray}) => {
	return <>
		{
			newsArray.map((news, index:number) => <SingleNewsComponent key={index} news={news}></SingleNewsComponent>)
		}
		</>;
}
