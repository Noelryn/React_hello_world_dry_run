import React, { Component } from 'react'
import Message from './Message'

class  App  extends  Component {
	state = {
	message:  'Hello Juniors'
	}
	
	inputHandler = (event) => { 
		this.setState({
		message: event.target.value 
		})
	}
	
	render() {
		return (
		<>
			<Message
        message={this.state.message}
      /> 
			<input
				onChange={this.inputHandler}
			/>
		</>
		)
	}
}

export default App

