import React, {useEffect, useState} from "react";
import Masonry from 'react-masonry-css';
import {
	Box,
	Image,
	FormControl,
	Input,
	Menu,
	Button,
	MenuButton,
	MenuList,
	MenuItem,
	Icon,
	Heading
} from "@chakra-ui/core/dist";
import ImageFetcher from "./ImageFetcher";

const composedImages = (images: Array<string>) => images.map((image:string, index:number) =>
	<Box shadow="sm" key={index}>
		<Image src={image} />
		<Box className="image-actions">
			<Menu>
				<MenuButton>
					<Icon name="sun" color="white"/>
				</MenuButton>
				<MenuList>
					<MenuItem>Set as Wallpaper</MenuItem>
					<MenuItem>Download</MenuItem>
				</MenuList>
			</Menu>
		</Box>
	</Box>
);

export const Unsplash:React.FC = () => {
	const [isLoading, setLoading] = useState(false);
	const [searchQuery, setSearchQuery] = useState<string>('cape town');
	const [images, setImages] = useState<Array<string>>([]);
	let imageFetcher = new ImageFetcher(window.fetch.bind(window));

	useEffect(() => {
		try {
			(async function() {
				console.log(await imageFetcher.getImages(searchQuery));
				setImages(await imageFetcher.getImages(searchQuery));
			})();
		} catch (error) {
			console.log(error);
		}
	}, [searchQuery]);

	const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
		const element = event.currentTarget as HTMLFormElement;
		setSearchQuery(element.searchQuery.value);
		event.preventDefault();
	};

	return <>
		<Box shadow="sm" padding={5}>
			<form onSubmit={handleSearch}>
				<FormControl marginBottom={5} borderRadius={0}>
					<Input name="searchQuery" placeholder="Search for an image"/>
				</FormControl>
			</form>
			<Box height={310} overflow="auto">
				<Masonry
					breakpointCols={2}
					className="my-masonry-grid"
					columnClassName="my-masonry-grid_column"
				>
					{composedImages(images)}
				</Masonry>
			</Box>
		</Box>
		</>
}
