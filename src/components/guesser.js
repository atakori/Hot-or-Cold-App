import React from 'react';

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
			feedback: "Make Your Guess"
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
		if(this.state.currentGuess === this.state.randomNumber) {
			this.setState({
				currentGuess,
				feedback: "You Got It!",
				numberOfGuesses: this.state.numberOfGuesses +1
			})
			this.addLatestGuess(currentGuess);
		}
		else if(this.state.currentGuess > this.state.randomNumber && this.state.currentGuess < this.state.randomNumber +5
			| this.state.currentGuess < this.state.randomNumber && this.state.currentGuess > this.state.randomNumber -5) {
			this.setState({
				currentGuess,
				feedback: "You're Hot!",
				numberOfGuesses: this.state.numberOfGuesses +1
			})
			this.addLatestGuess(currentGuess);
		} else if (this.state.currentGuess > this.state.randomNumber && this.state.currentGuess < this.state.randomNumber +15
			| this.state.currentGuess < this.state.randomNumber && this.state.currentGuess > this.state.randomNumber -15) {
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

	render() {

	return (
		<div className= 'app_container'> 
			<h2> {this.state.feedback} </h2>
			<div className= 'middle_section'> 
				<UserGuess value= {this.state.currentGuess} 
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