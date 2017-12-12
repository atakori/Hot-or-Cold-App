import React from 'react';

import Guesser from './guesser'

export default function App() {
	return (
		<div className= 'app'>
			<h1 className='title_header'> HOT or COLD</h1>
			<div className='guesser'>
				<Guesser/>
			</div>
		</div>
		)
}
