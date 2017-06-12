import React from 'react';
import ReactDOM from 'react-dom';

import data from './testData';

import App from './components/app';

App.defaultProps = {
	headerMessage: 'Hello-Default'
};

ReactDOM.render(
	<App />,
	document.getElementById('root')
);