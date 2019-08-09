import React from 'react';

const Cover = () => {
	return (
		<div className='parallax-container center-align valign-wrapper'>
			<div className='section no-pad-bot'>
				<div className='container'>
					<div className='row'>
						<h2 className='header col s12 light white-text'><li>Scroll down and press on an icon</li><li>Memorize the buttons you click</li><li>Don't press an icon twice</li><li>Set the top score!</li></h2>
					</div>
				</div>
			</div>
			<div className='parallax'>
				<img src='assets/img/cover.jpg' alt='Cover' />
			</div>
		</div>
	);
};

export default Cover;