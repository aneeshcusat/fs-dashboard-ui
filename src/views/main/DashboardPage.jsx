import React, { Component } from "react";
import { Link } from "react-router-dom";

class DashboardPage extends Component {

	componentDidMount() {
		this.props.pageHeaderNameChangeHandler(this.props.routeProp.name)
	}
	render() {
		return (
			<div className="dashboard">
				
				Dashboard
			</div>
		);
	}
}

export default DashboardPage;
