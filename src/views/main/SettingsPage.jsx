import React, { Component } from "react";

class SettingsPage extends Component {

	componentDidMount() {
		this.props.pageHeaderNameChangeHandler(this.props.routeProp.name)
	}
	render() {
		return (
			<div className="pcoded-content">

			Settings page
		</div>
		);
	}
}

export default SettingsPage;
