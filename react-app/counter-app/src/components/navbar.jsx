import React, { Component } from "react";
// stateless functional component
// object destructuring 

const NavBar = ({totalCounters}) => {
	return (
		<nav className="navbar navbar-light bg-light">
			<a className="navbar-brand" href="#">
				<span className="badge badge-pill badge-secondary">
					{totalCounters}
				</span>
			</a>
		</nav>
	);
};

export default NavBar;
