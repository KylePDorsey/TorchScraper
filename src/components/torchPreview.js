import React from 'react';

const TorchPreview = (torch) => (
	<div className="ContestPreview">
		<div>
			{torch.categoryName}
		</div>
		<div>
			{torch.torchName}
		</div>
	</div>
);

export default TorchPreview;