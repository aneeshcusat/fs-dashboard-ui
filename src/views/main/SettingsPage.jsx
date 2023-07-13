import React, { Component } from "react";

class SettingsPage extends Component {

	componentDidMount() {
		this.props.pageHeaderNameChangeHandler(this.props.routeProp.name)
	}
	render() {
		return (
			<>
				{/*<!--app-content open-->*/}
				< div className="main-content app-content mt-0" >
					<div className="side-app">
					</div>
				</div >
				{/*<!--app-content end-->*/}
			</>
		);
	}
}

export default SettingsPage;
