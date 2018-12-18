import React, { Component } from "react";
import Counter from "./counter.jsx";
// single source of truth
class Counters extends Component {
	render() {
		const {onReset, counters, onDelete, onIncrement} = this.props;
		return (
			<div>
				<button
					onClick={onReset}
					className="btn btn-sm btn-primary m-2"
				>
					Reset
				</button>
				{counters.map(counter => (
					<Counter
						key={counter.key}
						onDelete={onDelete}
						counter={counter}
						onIncrement={onIncrement}
					/>
				))}
			</div>
		);
	}
}

export default Counters;
