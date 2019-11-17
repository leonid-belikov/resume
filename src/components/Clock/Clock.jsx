import React from 'react';

class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date()
		}
	}

	componentDidMount() {
		if (!this.timerId) {
			this.timerId = setInterval(
				() => this.setState({
					date: new Date()
				}), 1000
			)
		}
	}

	render() {
		return (
			<div>
				{this.state.date.toLocaleTimeString()}
			</div>
		)
	}
}

export default Clock;
