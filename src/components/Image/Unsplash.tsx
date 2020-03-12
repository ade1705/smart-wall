import React, {useEffect, useState} from "react";
import Masonry from 'react-masonry-css';
import {
	Box,
	Image,
	FormControl,
	Input,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Icon
} from "@chakra-ui/core/dist";
import ImageFetcher from "./ImageFetcher";

const composedImages = (images: Array<string>, wallpaperCallback: any) => images.map((image:string, index:number) =>
	<Box shadow="sm" key={index}>
		<Image src={image} />
		<Box className="image-actions">
			<Menu>
				<MenuButton>
					<Icon name="sun" color="white"/>
				</MenuButton>
				<MenuList>
					<MenuItem onClick={() => wallpaperCallback(image)}>Set as Wallpaper</MenuItem>
					<MenuItem>Download</MenuItem>
				</MenuList>
			</Menu>
		</Box>
	</Box>
);

export const Unsplash:React.FC<{changeWallpaperCallback: any}> = ({changeWallpaperCallback}) => {
	const [isLoading, setLoading] = useState(false);
	const [searchQuery, setSearchQuery] = useState<string>('cape town');
	const [images, setImages] = useState<Array<string>>([]);
	let imageFetcher = new ImageFetcher(window.fetch.bind(window));

	useEffect(() => {
		try {
			(async function() {
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

	const wallpaperCallback = (wallpaper: string) => {
		changeWallpaperCallback(increaseWallpaperSize(wallpaper));
	}

	const increaseWallpaperSize = (wallpaper: string): string => {
		let imageArray = wallpaper.split('&');
		imageArray[5] = '1200';
		return imageArray.join('&');
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
					{composedImages(images, wallpaperCallback)}
				</Masonry>
			</Box>
		</Box>
		</>
}
