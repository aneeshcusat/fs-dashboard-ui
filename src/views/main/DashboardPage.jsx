import React, { Component } from "react";
import ColumnChartMin from "views/common/plugins/columnchartmin";
import PieChart from "views/common/plugins/piechart";
import LiveFeed from "views/common/fragments/LiveFeed";
import MyOpenItems from "views/common/fragments/MyOpenItems";
import { dashboardActions } from '../../_actions';
import { store } from '_helpers';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
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
		const effortColumnChartDataObject = userEffortChartData(this.props.userDashboard.effortTrend);
		const effortPieChartDataObject = userActivityTypeChartData(this.props.userDashboard.taskTypeTrend);  
		return (
			<>
				{/*<!-- CONTAINER -->*/}
				<div className="main-container container-fluid">

					<div className="row">
						<div className="card">
						</div>
					</div>
					{/*<!-- PAGE-HEADER END -->*/}
					{/*<!-- ROW-1 -->*/}
					<div className="row">
						<div className="col-lg-12 col-md-12 col-sm-12 col-xl-12">
							<div className="row">
								<div className="col-lg-6 col-md-6 col-sm-12 col-xl-3">
									<div className="card overflow-hidden">
										<div className="card-body">
											<div className="row">
												<div className="col">
													<h6 className="">My Effort Spent</h6>
													<h3 className="mb-2 number-font">{this.props.userDashboard.tilesSummaryResponse.myEffortSpent}</h3>
												</div>
												<div className="col col-auto">
													<div className="counter-icon bg-primary-gradient box-shadow-primary brround ms-auto">
														<i className="fe fe-trending-up text-white mb-5 "></i>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-6 col-md-6 col-sm-12 col-xl-3">
									<div className="card overflow-hidden">
										<div className="card-body">
											<div className="row">
												<div className="col">
													<h6 className="">Team Efforts Spent</h6>
													<h3 className="mb-2 number-font">{this.props.userDashboard.tilesSummaryResponse.teamEffortSpent}</h3>
													
												</div>
												<div className="col col-auto">
													<div className="counter-icon bg-secondary-gradient box-shadow-primary brround ms-auto">
														<i className="fe fe-trending-up text-white mb-5 "></i>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-6 col-md-6 col-sm-12 col-xl-3">
									<div className="card overflow-hidden">
										<div className="card-body">
											<div className="row">
												<div className="col">
													<h6 className="">My Open Items</h6>
													<h3 className="mb-2 number-font">{this.props.userDashboard.tilesSummaryResponse.myOpenItemCount}</h3>
												</div>
												<div className="col col-auto">
													<div className="counter-icon bg-primary-gradient box-shadow-primary brround ms-auto">
														<i className="fe fe-user text-white mb-5 "></i>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-6 col-md-6 col-sm-12 col-xl-3">
									<div className="card overflow-hidden">
										<div className="card-body">
											<div className="row">
												<div className="col">
													<h6 className="">Team Open Items</h6>
													<h3 className="mb-2 number-font">{this.props.userDashboard.tilesSummaryResponse.teamOpenItemCount}</h3>
												</div>
												<div className="col col-auto">
													<div className="counter-icon bg-secondary-gradient box-shadow-primary brround ms-auto">
														<i className="fe fe-users text-white mb-5 "></i>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-8 col-md-8 col-lg-8 col-xl-8">
							<div className="card">
								<div className="card-header">
									<h3 className="card-title">My Effort Trend</h3>
								</div>
								<div className="card-body pt-0 ps-0 pe-0 pb-0">
									<ColumnChartMin xAxisData={effortColumnChartDataObject.xAxisDataArray} yAxisData={effortColumnChartDataObject.yAxisDataArray} nameLabel="Effort"/>
								</div>
							</div>
						</div>
						{/*<!-- COL END -->*/}
						<div className="col-sm-4 col-md-4 col-lg-4 col-xl-4">
							<div className="card ">
								<div className="card-header">
									<h3 className="card-title">Activity Type</h3>
								</div>
								<div className="card-body pt-0 ps-0 pe-0 pb-0">
									<PieChart activityTypeValues={effortPieChartDataObject.series} activityTypeLabels={effortPieChartDataObject.label} />
								</div>
							</div>
						</div>
						{/*<!-- COL END -->*/}
					</div>
					{/*<!-- ROW-1 END -->*/}
	
	
	
					{/*<!-- ROW-3 -->*/}
					<div className="row">
						<div className="col-xl-6 col-md-6">
						<div class="card custom-card h-400">
							<div className="card-header">
								<h3 className="card-title">My Open Items</h3>
							</div>
							<div class="pb-0 pt-12 overflow-scroll">
								<MyOpenItems openItems={this.props.userDashboard.myOpenItems}/>
							</div>
							</div>
						</div>
						<div className="col-xl-6 col-md-6">
							<div className="card h-400">
								<div className="card-header">
									<div>
										<h3 className="card-title">Team Updates</h3>
									</div>
								</div>
								<div className="card-body pb-0 pt-12 overflow-scroll">
									<LiveFeed/>
								</div>
							</div>
						</div>
						
					</div>
					{/*<!-- COL END -->*/}
					{/*<!-- ROW-3 END -->*/}

					
				</div>
				{/*<!-- CONTAINER END -->*/}

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

  function userEffortChartData(effortTrend) {

	const returnObject = {
		xAxisDataArray: [],
		yAxisDataArray: []
	  }
	for (const obj of effortTrend) {
		returnObject.xAxisDataArray.push(obj.date);
		returnObject.yAxisDataArray.push(obj.effort);
	  }
	return returnObject;
  }

  function userActivityTypeChartData(taskTypeTrend) {

	const returnObject = {
		label: [],
		series: []
	  }
	for (const obj of taskTypeTrend) {
		returnObject.label.push(obj.taskType);
		returnObject.series.push(obj.effort);
	  }
	return returnObject;
  }