export default class ImageFetcher {
	fetch:any;
	private apiURL = "https://api.unsplash.com/photos/?client_id=wRCf7t-E5yWSLTXc7u52z_WbEpIek355JmKJxJHL40o";

	constructor(fetch: any) {
		this.fetch = fetch;
	}

	async get() {
		let response = await this.fetch(this.apiURL);
		return await response.json();
	}

	async getImages(searchQuery:string = '') {
		try{
			let response = await this.get();
			return this.mapResponse(response);
		}catch(err){
			throw new Error(err)
		}
	}

	mapResponse(rawArray: any): Array<string> {
		return rawArray.map((rawImage: any) => rawImage.urls.thumb)
	}
}
