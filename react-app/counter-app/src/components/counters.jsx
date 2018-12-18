import React, { Component } from "react";
import Counter from "./counter.jsx";
// single source of truth
class Counters extends Component {
	render() {
		return (
			<div>
				<button
					onClick={this.props.onReset}
					className="btn btn-sm btn-primary m-2"
				>
					Reset
				</button>
				{this.props.counters.map(counter => (
					<Counter
						key={counter.key}
						onDelete={this.props.onDelete}
						counter={counter}
						onIncrement={this.props.onIncrement}
					/>
				))}
			</div>
		);
	}
}

export default Counters;
