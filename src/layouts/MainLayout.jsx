import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { NotificationContainer } from 'react-notifications';
import { connect } from "react-redux";
import 'react-notifications/lib/notifications.css'
import routes from "routes.js";
import PageHeader from "views/common/PageHeader";
import PageFooter from "views/common/PageFooter";
import Notification from "views/common/fragments/Notification";

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
		return <div id="main_content">
			{this.props.notification.message &&
				<Notification />
			}
			{this.props.notification.pageMessage &&
				<div className="alert alert-danger alert-dismissible custom-alert-bar">
					<button type="button" className="close" data-dismiss="alert"></button>
					<strong><i className="fa fa-exclamation-triangle colorred"></i></strong> {this.props.notification.pageMessage}
				</div>
			}
			<div className="page  justify-content-between flex-column d-flex h-100vh">
				<div className="vleft">
					<PageHeader pageName={this.state.pageHeader}/>
					<Switch>
						{this.getRoutes(routes)}
						<Redirect from="/main" to={"/dashboard"} />
					</Switch>
				</div>
				<div className="vright">
					<PageFooter />
				</div>
			</div>
			<NotificationContainer />
		</div>
	}
}

const mapStateToProps = state => ({
	notification: state.notification,
});

export default connect(
	mapStateToProps
)(MainLayout);