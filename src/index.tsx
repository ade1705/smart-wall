import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { useTheme, ThemeProvider } from "@chakra-ui/core";
import {CSSReset} from "@chakra-ui/core/dist";
import { theme } from "@chakra-ui/core";

const customTheme = {
	...theme,
	fonts: {
		heading: '"Source Sans Pro", sans-serif',
		body: '"Source Sans Pro", sans-serif',
		mono: "Menlo, monospace",
	},
	colors: {
		...theme.colors,
		brand: {
			900: "#1a365d",
			800: "#153e75",
			700: "#2a69ac",
		},
	},
};

const ThemedApp = () => <ThemeProvider theme={customTheme}> <CSSReset /> <App /> </ThemeProvider>;

ReactDOM.render(<ThemedApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
