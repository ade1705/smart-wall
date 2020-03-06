import React, {Component} from 'react';
import {Flex, Heading, Image, Badge, Text, Box} from "@chakra-ui/core/dist";
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
        let string = 'df';
        const waldo: INews = {
            title: string,
            urlToImage: string,
            url: string,
            source: string,
            publishedAt: string,
            content: string,
        }
        const as: INews[] = [waldo, waldo]
        return (
            <>
                <Flex flexDirection="column" w="25%">
                    <Heading as="h3" size="lg" fontWeight="light">Just for you, Ade.</Heading>
                    <Box>
                        <NewsComponent newsArray={this.state.AllNews}/>
                        <Text>sdff</Text>
                    </Box>
                </Flex>
            </>
        );
    }
}

export default News;
