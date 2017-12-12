import React from 'react';

export default function storePastGuesses(props) {
	const text= props.oldGuesses.map((guess,index) => 
		 <div key={index}> {guess} </div>
		)
	return (
			<div> 
				{text}
			</div>
		)
}