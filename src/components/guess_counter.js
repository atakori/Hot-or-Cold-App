import React from 'react';

export default function GuessCounter(props) {
	return( 
			<div className= "counter">
				<h1>Guess#{props.count}</h1>
			</div>
		)
}