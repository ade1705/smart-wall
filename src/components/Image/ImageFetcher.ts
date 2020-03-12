export default class ImageFetcher {
	fetch:any;
	private apiURL = "https://api.unsplash.com/search/photos/?client_id=wRCf7t-E5yWSLTXc7u52z_WbEpIek355JmKJxJHL40o";

	constructor(fetch: any) {
		this.fetch = fetch;
	}

	async getImages(searchQuery:string = 'sing') {
		try{
			let response = await this.get(this.prepareURL(searchQuery));
			return this.mapResponse(response.results);
		}catch(err){
			throw new Error(err)
		}
	}

	async get(url: string) {
		let response = await this.fetch(url);
		return await response.json();
	}

	prepareURL(searchQuery: string): string {
		return `${this.apiURL}&query=${searchQuery}`;
	}

	mapResponse(rawArray: any): Array<string> {
		return rawArray.map((rawImage: any) => rawImage.urls.thumb)
	}
}
