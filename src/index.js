import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

App.defaultProps = {
	headerMessage: 'Hello-Default'
};

ReactDOM.render(
	<App />,
	document.getElementById('root')
);