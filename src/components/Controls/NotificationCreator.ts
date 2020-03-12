import {ILight} from "./ILight";

export const NotificationCreator = () => {
	const  titleMaker = (light: ILight): string => {
		return `${light.name}`
	}

	const  descriptionMaker = (light: ILight): string => {
		return `${light.name} light was switched ${light.isOn ? 'on' : 'off'}`
	}

	const hello = (light: ILight): object => {
		return {
			title: titleMaker(light),
			description: descriptionMaker(light),
			status: light.isOn ? "success" : "error",
			duration: 9000,
			isClosable: true,
		}
	}

	return {
		hello
	}
}
