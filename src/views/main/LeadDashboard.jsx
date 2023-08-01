import React, { Component } from "react";
import ColumnChartMin from "views/common/plugins/columnchartmin";
import PieChart from "views/common/plugins/piechart";
import LiveFeed from "views/common/fragments/LiveFeed";
import MyOpenItems from "views/common/fragments/MyOpenItems";
import { dashboardActions } from '../../_actions';
import { store } from '_helpers';
import { connect } from 'react-redux';
import PropTypes from "prop-types";


const LeadDashboard = ({ data }) => {

	const dashboardData = data;
	console.log('Inside lead dashboard');
	console.log(dashboardData);
	//const effortColumnChartDataObject = userEffortChartData(dashboardData.effortTrend);
	//const effortPieChartDataObject = userActivityTypeChartData(dashboardData.taskTypeTrend); 
	const teamDetails = dashboardData.teamData;
	return (
		<>

			<div className="row">
				<div className="col-xl-6 col-md-6">
					<div className="card custom-card h-400">
						<div className="card-header">
							<h3 className="card-title">Team Open Items</h3>
						</div>
						<div className="pb-0 pt-12 overflow-scroll">
							<MyOpenItems openItems={dashboardData.openItems} />
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
							<LiveFeed />
						</div>
					</div>
				</div>
			</div>
			{teamDetails.map((item, index) => (
				
		<div className="main-container container-fluid">
			<div className="row">
				<div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
					<div className="card team_header">
						<div className="card-header align-self-center">
							<span className="card-title">{item.teamName}</span>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-sm-8 col-md-8 col-lg-8 col-xl-8 no_padding">
					<div className="card">
						<div className="card-header">
							<h3 className="card-title">Effort Trend</h3>
						</div>
						<div className="card-body pt-0 ps-0 pe-0 pb-0">

							<ColumnChartMin xAxisData={userEffortChartData(item.teamDailyEfforts).xAxisDataArray} yAxisData={userEffortChartData(item.teamDailyEfforts).yAxisDataArray} nameLabel="Effort" />
														
						</div>
					</div>
				</div>
				
				<div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 no_padding">
					<div className="card ">
						<div className="card-header">
							<h3 className="card-title">Activity Type</h3>
						</div>
						<div className="card-body pt-0 ps-0 pe-0 pb-0">
							<PieChart activityTypeValues={userActivityTypeChartData(item.taskTypeCounts).series} activityTypeLabels={userActivityTypeChartData(item.taskTypeCounts).label} />
						</div>
					</div>
				</div>
				
			</div>
		</div>
			))}		
				


		</>

	);
};

function userEffortChartData(effortTrend) {

	console.log('userEffortChartData');
	console.log(effortTrend);
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

export default LeadDashboard;



