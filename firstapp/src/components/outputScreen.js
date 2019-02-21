import React from 'react';

import OutputScreenRow from './outputScreenRow.js';

const OutputScreen = (props) => {
	console.log(props);
	return (
		<div className="screen">
		    <OutputScreenRow value={props.question}></OutputScreenRow>
		    <OutputScreenRow value={props.answer}></OutputScreenRow>
		</div>
	)
}

export default OutputScreen;