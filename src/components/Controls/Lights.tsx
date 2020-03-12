import React, {} from 'react';
import {Box, Flex, FormLabel, Heading, Switch} from "@chakra-ui/core/dist";
import {Light} from "./Light";

const lights = [
	{
		name: "Living Toom",
		isOn: true
	},
	{
		name: "Kitchen",
		isOn: false
	},
	{
		name: "Master Bedroom",
		isOn: false
	},
	{
		name: "Second Bedroom",
		isOn: true
	},
	{
		name: "Bathroom",
		isOn: false
	},
	{
		name: "Home Office",
		isOn: true
	},
];

const slugify = (string: string) => string.replace(/\s/g, '');

const initialState = { lights: lights, is: true};
type LightState = Readonly<typeof initialState>


class Lights extends React.PureComponent<{}, LightState> {

	readonly state: LightState = initialState;

	switchLight = (index: number) => {
		const newLightState = [...this.state.lights];
		newLightState[index].isOn = !newLightState[index].isOn;
		this.setState({
			lights: newLightState
		});
	}

	render() {
		const LightsComponent = this.state.lights.map((light, index) =>
			<Light light={light} index={index} callBack={this.switchLight}/>
		);

		return (
			<Box shadow="md" p={5}>
				<Heading as="h3" size="md" color="gray.800" mb={5}>Lights</Heading>
				{LightsComponent}
			</Box>
		);
	}
}

export default Lights;
