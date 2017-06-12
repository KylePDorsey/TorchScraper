import React from 'react';
import TorchPreview from './TorchPreview';


const TorchList = ({ torches }) => (
	<div className="TorchList">
		{torches.map(torch => 
			<TorchPreview key={torch.id} {...torch} />
		)}
	</div>
);

TorchList.propTypes = {
	torches: React.PropTypes.array
};

export default TorchList;