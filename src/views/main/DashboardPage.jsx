import React, { Component } from "react";
import ColumnChartMin from "views/common/plugins/columnchartmin";
import PieChart from "views/common/plugins/piechart";
import LiveFeed from "views/common/fragments/LiveFeed";
import MyOpenItems from "views/common/fragments/MyOpenItems";
import { dashboardActions } from '../../_actions';
import { store } from '_helpers';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import EngineerDashboard from "./EngineerDashboard";
import LeadDashboard from "./LeadDashboard";
class DashboardPage extends Component {

	constructor(props) {
		super(props);
		
	  }
	componentDidMount() {
		this.props.pageHeaderNameChangeHandler(this.props.routeProp.name)
		store.dispatch(this.props.load('2023-07-01T00:00:00.000+00:00', '2023-07-07T23:44:00.000+00:00'));
	}
	render() {
		if (!this.props.userDashboard) {
			return null
		}
		 
		if (this.props.userDashboard.type == 'LEAD') {
			console.log('Lead Dashboard')
			return (
				<>
					<LeadDashboard data={this.props.userDashboard}/>
				</>
			);
		}

		if (this.props.userDashboard.type == 'ENGINEER') {
			console.log('Engineer Dashboard')
			return (
				<>
					<EngineerDashboard data={this.props.userDashboard}/>
				</>
			);
		}
		
		return (
			<>
				<div>Empty Data</div>
			</>
		);
	}
}

DashboardPage.propTypes = {
	load: PropTypes.func.isRequired,
	userDashboard: PropTypes.object.isRequired
  };

const mapStateToProps = state => ({
	userDashboard: state.dashboard.dashboardData
  });

const mapDispatchToProps = dispatch => ({
	load: dashboardActions.load
  });

export default connect(
	mapStateToProps,
  	mapDispatchToProps
  )(DashboardPage);

  