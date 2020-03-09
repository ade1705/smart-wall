import React, {Component} from 'react';
import {Flex, Heading, Grid, Badge, Text, Box} from "@chakra-ui/core/dist";
import NewsService from "./News/NewsService";
import {INews} from "./News/INews";
import {NewsComponent} from "./News/NewsComponent";

const initialState = { AllNews: [{} as INews]}
type AllNewsState = Readonly<typeof initialState>

class News extends React.PureComponent<{}, AllNewsState> {

    readonly state: AllNewsState = initialState;

    async componentDidMount() {
        this.setState({
            AllNews: await NewsService.getNews()
        });
    }

    render() {
        return (
            <>
                <Flex flexDirection="column" w="25%" overflow="hidden">
                    <Heading as="h3" size="lg" fontWeight="thin" color="gray.400" mb={5}>Just for you, Ade.</Heading>
                    <Box overflow="hidden">
                        <NewsComponent newsArray={this.state.AllNews}/>
                    </Box>
                </Flex>
            </>
        );
    }
}

export default News;
