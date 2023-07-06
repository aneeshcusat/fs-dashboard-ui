import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import 'react-notifications/lib/notifications.css'
import routes from "routes.js";
import PageHeader from "views/common/PageHeader";
import Notification from "views/common/fragments/Notification";
import PageLeftsideMenu from "views/common/PageLeftsideMenu";
import PageSidebar from "views/common/PageSidebar";

class MainLayout extends Component {
	constructor() {
		super()
		this.state = {
			pageHeader: '',
		};
	}

	setPageHeader = pageHeaderName => this.setState({
		pageHeader: pageHeaderName,
	});

	getRoutes = routes => {
		return routes.map((prop, key) => {
			return (
				<Route
					exact path={prop.layout + prop.path}
					render={props => (
						<prop.component
							{...props} routeProp={prop} pageHeaderNameChangeHandler={this.setPageHeader} />
					)}
					key={key} />
			);

		});
	};

	render() {

		return <div id="pcoded" class="pcoded">
			{this.props.notification.message &&
				<Notification />
			}
			{this.props.notification.pageMessage &&
				<div className="alert alert-danger alert-dismissible custom-alert-bar">
					<button type="button" className="close" data-dismiss="alert"></button>
					<strong><i className="fa fa-exclamation-triangle colorred"></i></strong> {this.props.notification.pageMessage}
				</div>
			}
			
			<div class="pcoded-container navbar-wrapper">
				<PageHeader pageName={this.state.pageHeader} />
				<PageSidebar />
				<PageLeftsideMenu />
				<div class="pcoded-main-container">
					<div class="pcoded-wrapper">
						<Switch>
							{this.getRoutes(routes)}
							<Redirect from="/main" to={"/dashboard"} />
						</Switch>
					</div>
				</div>
			</div>
		</div>
	}
}

const mapStateToProps = state => ({
	notification: state.notification,
});

export default connect(
	mapStateToProps
)(MainLayout);