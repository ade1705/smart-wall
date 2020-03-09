import {INews} from "./INews";

class NewsRepository
{
	newsURL = 'http://newsapi.org/v2/top-headlines?' +
	'country=us&' +
	'apiKey=d74c6fe39a4e43c6bcc3c8d0569a2e6a';

	async get() {
			let response = await fetch(this.newsURL);
			return await response.json();
	}

	mapResponse = (articles: any): INews[] => articles.map((article:any) => ({
		content: article.content,
		title: article.title,
		urlToImage: article.urlToImage,
		url: article.url,
		source: article.source.name,
		publishedAt: article.publishedAt
	}));

	async getNews() {
		try{
			let response = await this.get();
			return this.mapResponse(response.articles);
		}catch(err){
			throw new Error(err)
		}
	}

}

export default new NewsRepository();
