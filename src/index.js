import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HeroProvider } from './HeroContext';

ReactDOM.render(
	<React.StrictMode>
		<HeroProvider>
			<App />
		</HeroProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
