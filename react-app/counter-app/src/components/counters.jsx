import React, { Component } from "react";
import Counter from "./counter.jsx";
// single source of truth
class Counters extends Component {
	state = {
		counters: [
			{ key: 0, value: 0 },
			{ key: 1, value: 1 },
			{ key: 2, value: 2 },
			{ key: 3, value: 3 },
			{ key: 4, value: 4 }
		]
	};

	handleDelete = counterId => {
		const counters = this.state.counters.filter(c => c.key !== counterId);
		this.setState({ counters });
	};

	handleReset = () => {
		const counters = this.state.counters.map(c => {
			c.value = 0;
			return c;
		});
		this.setState({ counters });
	};

	handleIncrement = counter => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index] = { ...counter };
		counters[index].value++;
		this.setState({ counters });
	};

	render() {
		return (
			<div>
				<button
					onClick={this.handleReset}
					className="btn btn-sm btn-primary m-2"
				>
					Reset
				</button>
				{this.state.counters.map(counter => (
					<Counter
						key={counter.key}
						onDelete={this.handleDelete}
						counter={counter}
						onIncrement={this.handleIncrement}
					/>
				))}
			</div>
		);
	}
}

export default Counters;
