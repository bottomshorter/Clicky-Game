import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

import NavBar from './components/navbar';
import Cover from './components/cover';
import Container from './components/container';
import Footer from './components/footer';

const icons = ['image1', 'image2', 'image3', 'image4', 'image5', 'image6', 'image7', 'image8', 'image9', 'image10', 'image11', 'image12',];

const colors = ['red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue', 'cyan', 'teal', 'green', 'light-green', 'lime',];

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			info: 'Click an icon to begin!',
			score: 0,
			topScore: 0,
			icons: icons,
			selectedIcons: []
		};
	};

	shuffleIcons() {
		this.setState({ icons: _.shuffle(icons) });
	};

	topScoreUpdater(currentScore, currentTopScore, name) {
		currentScore++;
		_.delay(() => {
			this.setState({ info: 'Choose your next icon!' });
		}, 500);
		if (currentScore >= currentTopScore) {
			return this.setState({ score: currentScore, topScore: currentScore, info: `${name} (Correct!)` });
		};
		return this.setState({ score: currentScore, info: `${name} (Correct!)` });
	};

	checkForDuplicate(name) {
		if (this.state.selectedIcons.indexOf(name) === -1) {
			this.state.selectedIcons.push(name);
			this.topScoreUpdater(this.state.score, this.state.topScore, name);
			if (this.state.selectedIcons.length === icons.length) {
				this.setState({ selectedIcons: [] });
			};
		} else {
			_.delay(() => {
				this.setState({ info: 'Try Again!' });
			}, 500);
			this.setState({ score: 0, selectedIcons: [], info: `${name} (Duplicate)!` });
		}
		this.shuffleIcons();
	};

	handleSelectIcons(name) {
		this.checkForDuplicate(name);
	};

	render() {
		return (
			<div>
				<NavBar
					score={this.state.score}
					topScore={this.state.topScore}
					message={this.state.info}
				/>
				<Cover />
				<div className="row"></div>
				<Container
					colors={colors}
					icons={this.state.icons}
					onImageClick={name => { this.handleSelectIcons(name) }}
				/>
				<Footer />
			</div>
		);
	};
};

ReactDOM.render(<App />, document.getElementById('root'));
