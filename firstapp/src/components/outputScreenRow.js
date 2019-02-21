import React from 'react';
// import output screen row
// function component used to show question/answer

const OutputScreenRow = (props) => {
  return ( 
  	<div className="screen-row">
    	<input type="text" readOnly value={props.value}/>
    </div>
  )
}

export default OutputScreenRow;