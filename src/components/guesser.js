import React from 'react';

import Header from './header';
import UserGuess from './user_guess';
import PreviousGuesses from './past_guesses';
import GuessCounter from './guess_counter'

export default class Guesser extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			numberOfGuesses: 0,
			currentGuess: '',
			pastGuesses: [],
			randomNumber: this.randomizeNumber(),
			feedback: "Make Your Guess",
			correct: false
		}
	}

	preventDefault(e) {
		e.preventDefault();
	}

	randomizeNumber() {
		return Math.floor((Math.random() * 100) +1);
	}

	addLatestGuess(newGuess) {
		const allPastGuesses= this.state.pastGuesses;
		const allGuesses =  allPastGuesses.concat(newGuess);
		this.setState({
			pastGuesses: allGuesses
		})
	}

	setCurrentGuess(currentGuess) {
		currentGuess = parseInt(currentGuess, 10);
		const difference = Math.abs(currentGuess - this.state.randomNumber);

		if(difference === 0) {
			this.setState({
				currentGuess,
				correct: true,
				feedback: "You Won. Click new game to play again",
				numberOfGuesses: this.state.numberOfGuesses +1
			})
			this.addLatestGuess(currentGuess);
		}
		else if(difference <=5) {
			this.setState({
				currentGuess,
				feedback: "You're Hot!",
				numberOfGuesses: this.state.numberOfGuesses +1
			})
			this.addLatestGuess(currentGuess);
		} else if (difference <=15) {
			this.setState({
				currentGuess,
				feedback: "You're Warm",
				numberOfGuesses: this.state.numberOfGuesses +1
			})
			this.addLatestGuess(currentGuess);
		}  else {
			this.setState({
				currentGuess,
				feedback: "You're cold :(",
				numberOfGuesses: this.state.numberOfGuesses +1
			})
			this.addLatestGuess(currentGuess);
		}

	}

	setMostRecentGuess(mostRecentGuess) {
		this.setState({
			mostRecentGuess
		})
	}

	restartGame() {
		this.setState({
			numberOfGuesses: 0,
			currentGuess: '',
			pastGuesses: [],
			randomNumber: this.randomizeNumber(),
			feedback: "Make Your Guess",
			correct: false
		})
	}

	render() {

	return (
		<div className= 'app_container'> 
		<div className= 'header'>
			< Header restart={() => this.restartGame()}/>
		</div>
		<h1 className='title_header'> HOT or COLD</h1>
			<h2> {this.state.feedback} </h2>
			<div className= 'middle_section'> 
				<UserGuess correct= {this.state.correct} value= {this.state.currentGuess} 
				onSubmit= {(e) =>this.preventDefault(e)}
				onClick= {(currentGuess) => {this.setCurrentGuess(currentGuess)}} />
				<GuessCounter count= {this.state.numberOfGuesses} />
			</div>
			<div className= 'past_guesses_section'>
				< PreviousGuesses oldGuesses= {this.state.pastGuesses}/>
			</div>
		</div>
		)
}
}