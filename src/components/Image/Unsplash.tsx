import React, {useEffect, useState} from "react";
import Masonry from 'react-masonry-css';
import {Box, Image, FormControl, FormLabel, Input} from "@chakra-ui/core/dist";
import ImageFetcher from "./ImageFetcher";

const composedImages = (images: Array<string>) => images.map((image:string, index:number) =>
	<Box shadow="sm" key={index}>
		<Image src={image} alt="Segun Adebayo" />
	</Box>
);

export const Unsplash:React.FC = () => {
	const [isLoading, setLoading] = useState(false);
	const [searchQuery, setSearchQuery] = useState<string>('');
	const [images, setImages] = useState<Array<string>>([]);
	let imageFetcher = new ImageFetcher(window.fetch.bind(window));

	useEffect(() => {
		(async function() {
			setImages(await imageFetcher.getImages(searchQuery));
		})();
	});

	const handleSearch = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(e);
	};

	return <>
		<Box shadow="sm" padding={5}>
			<form onSubmit={handleSearch}>
				<FormControl marginBottom={5} borderRadius={0}>
					<Input id="fname" name="searchQuery" placeholder="Search for an image"/>
				</FormControl>
			</form>
			<Masonry
				breakpointCols={2}
				className="my-masonry-grid"
				columnClassName="my-masonry-grid_column"
			>
				{composedImages(images)}
			</Masonry>
		</Box>
		</>
}
