import React from 'react';

export default class userguesses extends React.Component {
	constructor(props) {
		super(props);
		this.state= {
			value: ''
		}
	}
    render() {
     return (
          <form className='Hot_Cold_form' onSubmit= {e=> this.props.onSubmit(e)}>
            <input type='number' placeholder='Enter Your Guess' value={this.state.value} onChange={(event) => {
                this.setState({value: event.target.value});
            }}/>
            <button type='submit' onClick={() => {
                this.props.onClick(this.state.value);
            }}>Guess</button>
        </form> 
        );
    }
}