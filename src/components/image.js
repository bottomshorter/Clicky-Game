import React from 'react';

const ImageCard = ({ backgroundColor, selectedIcon, onImageClick }) => {
	return (
		<div className='col s3'>
			<div className={`card hoverable ${backgroundColor} lighten-3`} onClick={() => { onImageClick(selectedIcon) }}>
				<div className='card-image'>
					<img src={`assets/img/${selectedIcon}.png`} alt='Icons' />
				</div>
			</div>
		</div>
	);
};

export default ImageCard;