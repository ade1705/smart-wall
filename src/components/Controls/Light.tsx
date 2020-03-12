import React from "react";
import {Flex, FormLabel, Switch, useToast} from "@chakra-ui/core/dist";
import {NotificationCreator} from "./NotificationCreator";
import {ILight} from "./ILight";

const slugify = (string: string) => string.replace(/\s/g, '');

export const Light:React.FC<{light: ILight, index: number, callBack: any}> = ({light, index, callBack}) => {
	const toast = useToast();
	const handleChange = () => {
		callBack(index);
		toast(NotificationCreator().hello(light));
	};

	return <>
          <Flex justify="space-between" align="center" my={2} key={index}>
              <FormLabel htmlFor={slugify(light.name)}>{light.name}</FormLabel>
              <Switch id={slugify(light.name)} isChecked={light.isOn} onChange={() => handleChange()} />
          </Flex>
		</>

}
