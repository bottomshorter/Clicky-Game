import React from 'react';
import ImageCards from './image';

const Container = ({ colors, icons, onImageClick }) => {
	const Colors = colors.map((color, index) => {
		return (
			<ImageCards
				key={color}
				backgroundColor={color}
				selectedIcon={icons[index]}
				onImageClick={onImageClick}
			/>
		)
	})
	return (
		<div className='container'>
			<div className='row flow-text'>
				{Colors}
			</div>
		</div>
	);
};

export default Container;