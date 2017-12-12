import React from 'react';

export default function storePastGuesses(props) {
	const text= props.oldGuesses.map((guess,index) => 
		 <li key={index}> {guess} </li>
		)
	return (
			<div> 
				{text}
			</div>
		)
}