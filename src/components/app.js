import React from 'react';
import Header from './Header';
import TorchList from './TorchList';

import data from '../testData';

class App extends React.Component {
	state = {
		pageHeader: 'The Right Torch',
		torches: []
	};
	componentDidMount() {
		this.setState({
			torches: data.torches
		});
	}
	componentWillUnmount() {

	}
	render() {
		return (
		<div className="App">
			<Header message={this.state.pageHeader} />
			<TorchList torches={this.state.torches} />
		</div>
		);
	}
};

export default App;