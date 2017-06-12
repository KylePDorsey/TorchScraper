import React, { Component } from 'react';


class TorchPreview extends Component {
	handleClick = () => {
		console.log(this.props.torchName);
	}
	render() {
		return (
			<div className="btn-default ContestPreview" onClick={this.handleClick}>
				<div className="category-name">
					{this.props.categoryName}
				</div>
				<div className="torch-name">
					{this.props.torchName}
				</div>
			</div>
		)
	}
}

TorchPreview.propTypes = {
	categoryName: React.PropTypes.string.isRequired,
	torchName: React.PropTypes.string.isRequired,
}
export default TorchPreview;