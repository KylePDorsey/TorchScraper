import React from 'react';
import Header from './Header';
import TorchPreview from './TorchPreview';
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
			<div>
				{this.state.torches.map(torch => 
					<TorchPreview key={torch.id} {...torch} />
				)}
			</div>
		</div>
		);
	}
};

export default App;