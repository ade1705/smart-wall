import {Badge, Box, Flex, Heading, Image, Text} from "@chakra-ui/core/dist";
import React from "react";
import {INews} from "./INews";
const SingleNewsComponent = (props:{ news: INews}) => {
	return <>
		<Flex justifyContent="space-between" paddingY={5} bg="white" paddingX={5} marginTop={2}>
			<Flex flexDirection="column" flex="1" mr={10}>
				<Flex>
					<Badge fontSize="0.5em" variantColor="green">Category</Badge>
				</Flex>
				<Heading as="h3" size="sm" fontWeight="lighter">{props.news.title}</Heading>
				<Flex justifyContent="space-between">
					<Box>
						<Badge fontSize="0.5em" variantColor="red">Source</Badge>
					</Box>
					<Text color="gray.400">2h ago</Text>
				</Flex>
			</Flex>
			<Flex>
				<Image
					size="50px"
					rounded="full"
					objectFit="cover"
					src="https://bit.ly/sage-adebayo"
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
