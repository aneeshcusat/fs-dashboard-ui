import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import 'react-notifications/lib/notifications.css'
import routes from "routes.js";
import PageHeader from "views/common/PageHeader";
import Notification from "views/common/fragments/Notification";
import PageLeftsideMenu from "views/common/PageLeftsideMenu";
import PageSidebar from "views/common/PageSidebar";
import PageSidebarRight from "views/common/PageSidebarRight";
import PageFooter from "views/common/PageFooter";

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

		return (
			<>
				{/*<!-- PAGE -->*/}
				<div className="page">
					<div className="page-main">
						{this.props.notification.message &&
							<Notification />
						}
						{this.props.notification.pageMessage &&
							<div className="alert alert-danger alert-dismissible custom-alert-bar">
								<button type="button" className="close" data-dismiss="alert"></button>
								<strong><i className="fa fa-exclamation-triangle colorred"></i></strong> {this.props.notification.pageMessage}
							</div>
						}
						<PageHeader pageName={this.state.pageHeader} />
						<PageSidebar />
						{/*<!--app-content open-->*/}
						<div className="main-content app-content mt-0">
							<div className="side-app">

								<Switch>
									{this.getRoutes(routes)}
									<Redirect from="/main" to={"/dashboard"} />
								</Switch>
							</div>
						</div>
						{/*<!--app-content end-->*/}
					</div>

					<PageSidebarRight />
					<PageFooter />


				</div>

				{/*<!-- BACK-TO-TOP -->*/}
				<a href="#top" id="back-to-top"><i className="fa fa-angle-up"></i></a>
			</>
		)

	}
}

const mapStateToProps = state => ({
	notification: state.notification,
});

export default connect(
	mapStateToProps
)(MainLayout);