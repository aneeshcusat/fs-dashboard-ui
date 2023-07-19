import React, { Component } from "react";
import ColumnChartMin from "views/common/plugins/columnchartmin";
import PieChart from "views/common/plugins/piechart";
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

					{/*<!-- PAGE-HEADER -->*/}
					<div className="page-header">
						<div>
							<h1 className="page-title">Dashboard 01</h1>
							<ol className="breadcrumb">
								<li className="breadcrumb-item"><a href="javascript:void(0);">Home</a></li>
								<li className="breadcrumb-item active" aria-current="page">Dashboard 01</li>
							</ol>
						</div>
						<div className="ms-auto pageheader-btn">
							<a href="javascript:void(0);" className="btn btn-primary btn-icon text-white me-2">
								<span>
									<i className="fe fe-plus"></i>
								</span> Add Account
							</a>
							<a href="javascript:void(0);" className="btn btn-success btn-icon text-white">
								<span>
									<i className="fe fe-log-in"></i>
								</span> Export
							</a>
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
						<div className="col-sm-12 col-md-12 col-lg-12 col-xl-8">
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
						<div className="col-sm-12 col-md-12 col-lg-12 col-xl-4">
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
						<div className="col-xl-4 col-md-12">
							<div className="card overflow-hidden">
								<div className="card-header">
									<div>
										<h3 className="card-title">Timeline</h3>
									</div>
								</div>
								<div className="card-body pb-0 pt-4">
									<div className="activity1">
										<div className="activity-blog">
											<div className="activity-img brround bg-primary-transparent text-primary">
												<i className="fa fa-user-plus fs-20"></i>
											</div>
											<div className="activity-details d-flex">
												<div><b><span className="text-dark"> Mr John </span> </b> Started following you <span className="d-flex text-muted fs-11">01 June 2020</span></div>
												<div className="ms-auto fs-13 text-dark fw-semibold"><span className="badge bg-primary text-white">1m</span></div>
											</div>
										</div>
										<div className="activity-blog">
											<div className="activity-img brround bg-secondary-transparent text-secondary">
												<i className="fa fa-comment fs-20"></i>
											</div>
											<div className="activity-details d-flex">
												<div><b><span className="text-dark"> Lily </span> </b> 1 Commented applied <span className="d-flex text-muted fs-11">01 July 2020</span> </div>
												<div className="ms-auto fs-13 text-dark fw-semibold"><span className="badge bg-danger text-white">3m</span></div>
											</div>
										</div>
										<div className="activity-blog">
											<div className="activity-img brround bg-success-transparent text-success">
												<i className="fa fa-thumbs-up fs-20"></i>
											</div>
											<div className="activity-details d-flex">
												<div><b><span className="text-dark"> Kevin </span> </b> liked your site <span className="d-flex text-muted fs-11">05 July 2020</span></div>
												<div className="ms-auto fs-13 text-dark fw-semibold"><span className="badge bg-warning text-white">5m</span></div>
											</div>
										</div>
										<div className="activity-blog">
											<div className="activity-img brround bg-info-transparent text-info">
												<i className="fa fa-envelope fs-20"></i>
											</div>
											<div className="activity-details d-flex">
												<div><b><span className="text-dark"> Andrena </span> </b> posted a new article <span className="d-flex text-muted fs-11">09 October 2020</span></div>
												<div className="ms-auto fs-13 text-dark fw-semibold"><span className="badge bg-info text-white">5m</span></div>
											</div>
										</div>
										<div className="activity-blog">
											<div className="activity-img brround bg-danger-transparent text-danger">
												<i className="fa fa-shopping-bag fs-20"></i>
											</div>
											<div className="activity-details d-flex">
												<div><b><span className="text-dark"> Sonia </span> </b> Delivery in progress <span className="d-flex text-muted fs-11">12 October 2020</span></div>
												<div className="ms-auto fs-13 text-dark fw-semibold"><span className="badge bg-warning text-white">5m</span></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-md-12">
							<div className="card">
								<div className="card-header">
									<h4 className="card-title fw-semibold ">Browser Usage</h4>
								</div>
								<div className="card-body pt-2 pb-2">
									<div className="d-md-flex align-items-center browser-stats">
										<div className="d-flex me-1">
											<i className="fa fa-chrome bg-secondary-gradient text-white me-2"></i>
											<p className="fs-16 my-auto mb-0">Chrome</p>
										</div>
										<div className="ms-auto my-auto">
											<div className="d-flex">
												<span className="my-auto fs-16">35,502</span>
												<span className="text-success fs-15"><i className="fe fe-arrow-up"></i>12.75%</span>
											</div>
										</div>
									</div>
									<div className="d-md-flex align-items-center browser-stats">
										<div className="d-flex me-1">
											<i className="fa fa-opera text-white bg-danger-gradient me-2"></i>
											<p className="fs-16 my-auto mb-0">Opera</p>
										</div>
										<div className="ms-auto my-auto">
											<div className="d-flex">
												<span className="my-auto fs-16">12,563</span>
												<span className="text-danger fs-15"><i className="fe fe-arrow-down"></i>15.12%</span>
											</div>
										</div>
									</div>
									<div className="d-md-flex align-items-center browser-stats">
										<div className="d-flex me-1">
											<i className="fa fa-firefox text-white bg-purple-gradient me-2"></i>
											<p className="fs-16 my-auto mb-0">IE</p>
										</div>
										<div className="ms-auto my-auto">
											<div className="d-flex">
												<span className="my-auto fs-16">25,364</span>
												<span className="text-success fs-15"><i className="fe fe-arrow-up"></i>24.37%</span>
											</div>
										</div>
									</div>
									<div className="d-md-flex align-items-center browser-stats">
										<div className="d-flex me-1">
											<i className="fa fa-edge text-white bg-info-gradient me-2"></i>
											<p className="fs-16 my-auto mb-0">Firefox</p>
										</div>
										<div className="ms-auto my-auto">
											<div className="d-flex">
												<span className="my-auto fs-16">14,635</span>
												<span className="text-success fs-15"><i className="fe fe-arrow-up"></i>15,63%</span>
											</div>
										</div>
									</div>
									<div className="d-md-flex align-items-center browser-stats">
										<div className="d-flex me-1">
											<i className="fa fa-android text-white bg-success-gradient me-2"></i>
											<p className="fs-16 my-auto mb-0">Android</p>
										</div>
										<div className="ms-auto my-auto">
											<div className="d-flex">
												<span className="my-auto fs-16">15,453</span>
												<span className="text-danger fs-15"><i className="fe fe-arrow-down"></i>23.70%</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-md-12">
							<div className="card">
								<div className="card-header">
									<h4 className="card-title fw-semibold ">Daily Activity</h4>
								</div>
								<div className="card-body pb-0">
									<ul className="task-list">
										<li>
											<i className="task-icon bg-primary"></i>
											<h6>Task Finished<span className="text-muted fs-11 mx-2">29 Oct 2020</span></h6>
											<p className="text-muted fs-12">Adam Berry finished task on<a href="javascript:void(0);" className="fw-semibold"> Project Management</a></p>
										</li>
										<li>
											<i className="task-icon bg-secondary"></i>
											<h6>New Comment<span className="text-muted fs-11 mx-2">25 Oct 2020</span></h6>
											<p className="text-muted fs-12">Victoria commented on Project <a href="javascript:void(0);" className="fw-semibold"> AngularJS Template</a></p>
										</li>
										<li>
											<i className="task-icon bg-primary"></i>
											<h6>New Comment<span className="text-muted fs-11 mx-2">25 Oct 2020</span></h6>
											<p className="text-muted fs-12">Victoria commented on Project <a href="javascript:void(0);" className="fw-semibold"> AngularJS Template</a></p>
										</li>
										<li>
											<i className="task-icon bg-secondary"></i>
											<h6>Task Overdue<span className="text-muted fs-11 mx-2">14 Oct 2020</span></h6>
											<p className="text-muted mb-0 fs-12">Petey Cruiser finished task <a href="javascript:void(0);" className="fw-semibold"> Integrated management</a></p>
										</li>
										<li>
											<i className="task-icon bg-primary"></i>
											<h6>Task Overdue<span className="text-muted fs-11 mx-2">29 Oct 2020</span></h6>
											<p className="text-muted mb-0 fs-12">Petey Cruiser finished task <a href="javascript:void(0);" className="fw-semibold"> Integrated management</a></p>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					{/*<!-- COL END -->*/}
					{/*<!-- ROW-3 END -->*/}

					{/*<!-- ROW-5 -->*/}
					<div className="row">
						<div className="col-12 col-sm-12">
							<div className="card ">
								<div className="card-header">
									<h3 className="card-title mb-0">Product Sales</h3>
								</div>
								<div className="card-body">
									<div className="table-responsive">
										<table id="data-table" className="table table-bordered text-nowrap mb-0">
											<thead className="border-top">
												<tr>
													<th className="bg-transparent border-bottom-0 w-5">S.no</th>
													<th className="bg-transparent border-bottom-0">Name</th>
													<th className="bg-transparent border-bottom-0">Date</th>
													<th className="bg-transparent border-bottom-0">Amount</th>
													<th className="bg-transparent border-bottom-0">Status</th>
													<th className="bg-transparent border-bottom-0">Action</th>
												</tr>
											</thead>
											<tbody>
												<tr className="border-bottom">
													<td className="text-muted fs-15 fw-semibold text-center">01.</td>
													<td>
														<div className="d-flex">
															<span className="avatar avatar-md brround mt-1" style={{ backgroundImage: "url(/assets/images/users/5.jpg)" }}></span>
															<div className="ms-2 mt-0 mt-sm-2 d-block">
																<h6 className="mb-0 fs-14 fw-semibold">Jake poole</h6>
																<span className="fs-12 text-muted">jacke123@gmail.com</span>
															</div>
														</div>
													</td>
													<td className="text-muted fs-15 fw-semibold">20-11-2020 </td>
													<td className="text-muted fs-15 fw-semibold">$5.321.2</td>
													<td className="text-success fs-15 fw-semibold">Success</td>
													<td className="">
														<a className="btn btn-primary btn-sm rounded-11 me-2" data-bs-toggle="tooltip" data-bs-original-title="Edit"><i><svg className="table-edit" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="16"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z" /></svg></i></a>
														<a className="btn btn-danger btn-sm rounded-11" data-bs-toggle="tooltip" data-bs-original-title="Delete"><i><svg className="table-delete" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="16"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z" /></svg></i></a>
													</td>
												</tr>
												<tr className="border-bottom">
													<td className="text-muted fs-15 fw-semibold text-center">02.</td>
													<td>
														<div className="d-flex">
															<span className="avatar avatar-md brround mt-1" style={{ backgroundImage: "url(/assets/images/users/5.jpg)" }}></span>
															<div className="ms-2 mt-0 mt-sm-2 d-block">
																<h6 className="mb-0 fs-14 fw-semibold">Virginia Gray</h6>
																<span className="fs-12 text-muted">virginia456@gmail.com</span>
															</div>
														</div>
													</td>
													<td className="text-muted fs-15 fw-semibold">20-11-2020 </td>
													<td className="text-muted fs-15 fw-semibold">$53,3654</td>
													<td className="text-success fs-15 fw-semibold">Success</td>
													<td className="">
														<a className="btn btn-primary btn-sm rounded-11 me-2" data-bs-toggle="tooltip" data-bs-original-title="Edit"><i><svg className="table-edit" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="16"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z" /></svg></i></a>
														<a className="btn btn-danger btn-sm rounded-11" data-bs-toggle="tooltip" data-bs-original-title="Delete"><i><svg className="table-delete" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="16"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z" /></svg></i></a>
													</td>
												</tr>
												<tr className="border-bottom">
													<td className="text-muted fs-15 fw-semibold text-center">03.</td>
													<td>
														<div className="d-flex">
															<span className="avatar avatar-md brround mt-1" style={{ backgroundImage: "url(/assets/images/users/5.jpg)" }}></span>
															<div className="ms-2 mt-0 mt-sm-2 d-block">
																<h6 className="mb-0 fs-14 fw-semibold">Jacob Thomson</h6>
																<span className="fs-12 text-muted">jacobthomson@gmail.com</span>
															</div>
														</div>
													</td>
													<td className="text-muted fs-15 fw-semibold">20-11-2020 </td>
													<td className="text-muted fs-15 fw-semibold">$1,56,3654</td>
													<td className="text-primary fs-15 fw-semibold">Pending</td>
													<td className="">
														<a className="btn btn-primary btn-sm rounded-11 me-2" data-bs-toggle="tooltip" data-bs-original-title="Edit"><i><svg className="table-edit" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="16"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z" /></svg></i></a>
														<a className="btn btn-danger btn-sm rounded-11" data-bs-toggle="tooltip" data-bs-original-title="Delete"><i><svg className="table-delete" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="16"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z" /></svg></i></a>
													</td>
												</tr>
												<tr className="border-bottom">
													<td className="text-muted fs-15 fw-semibold text-center">04.</td>
													<td>
														<div className="d-flex">
															<span className="avatar avatar-md brround mt-1" style={{ backgroundImage: "url(/assets/images/users/5.jpg)" }}></span>
															<div className="ms-2 mt-0 mt-sm-2 d-block">
																<h6 className="mb-0 fs-14 fw-semibold">Trevor Thomson</h6>
																<span className="fs-12 text-muted">trevor@gmail.com</span>
															</div>
														</div>
													</td>
													<td className="text-muted fs-15 fw-semibold">19-11-2020 </td>
													<td className="text-muted fs-15 fw-semibold">$12.3</td>
													<td className="text-success fs-15 fw-semibold">Success</td>
													<td className="">
														<a className="btn btn-primary btn-sm rounded-11 me-2" data-bs-toggle="tooltip" data-bs-original-title="Edit"><i><svg className="table-edit" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="16"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z" /></svg></i></a>
														<a className="btn btn-danger btn-sm rounded-11" data-bs-toggle="tooltip" data-bs-original-title="Delete"><i><svg className="table-delete" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="16"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z" /></svg></i></a>
													</td>
												</tr>
												<tr className="border-bottom">
													<td className="text-muted fs-15 fw-semibold text-center">05.</td>
													<td>
														<div className="d-flex">
															<span className="avatar avatar-md brround mt-1" style={{ backgroundImage: "url(/assets/images/users/5.jpg)" }}></span>
															<div className="ms-2 mt-0 mt-sm-2 d-block">
																<h6 className="mb-0 fs-14 fw-semibold">Kylie north</h6>
																<span className="fs-12 text-muted">kylie@gmail.com</span>
															</div>
														</div>
													</td>
													<td className="text-muted fs-15 fw-semibold">19-11-2020 </td>
													<td className="text-muted fs-15 fw-semibold">$5.312.2</td>
													<td className="text-primary fs-15 fw-semibold">Pending</td>
													<td className="">
														<a className="btn btn-primary btn-sm rounded-11 me-2" data-bs-toggle="tooltip" data-bs-original-title="Edit"><i><svg className="table-edit" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="16"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z" /></svg></i></a>
														<a className="btn btn-danger btn-sm rounded-11" data-bs-toggle="tooltip" data-bs-original-title="Delete"><i><svg className="table-delete" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="16"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z" /></svg></i></a>
													</td>
												</tr>
												<tr className="border-bottom">
													<td className="text-muted fs-15 fw-semibold text-center">06.</td>
													<td>
														<div className="d-flex">
															<span className="avatar avatar-md brround mt-1" style={{ backgroundImage: "url(/assets/images/users/5.jpg)" }}></span>
															<div className="ms-2 mt-0 mt-sm-2 d-block">
																<h6 className="mb-0 fs-14 fw-semibold">Jan Hodges</h6>
																<span className="fs-12 text-muted">jan@gmail.com</span>
															</div>
														</div>
													</td>
													<td className="text-muted fs-15 fw-semibold">19-11-2020 </td>
													<td className="text-muted fs-15 fw-semibold">$5.312.2</td>
													<td className="text-danger fs-15 fw-semibold">Cancel</td>
													<td className="">
														<a className="btn btn-primary btn-sm rounded-11 me-2" data-bs-toggle="tooltip" data-bs-original-title="Edit"><i><svg className="table-edit" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="16"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z" /></svg></i></a>
														<a className="btn btn-danger btn-sm rounded-11" data-bs-toggle="tooltip" data-bs-original-title="Delete"><i><svg className="table-delete" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="16"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z" /></svg></i></a>
													</td>
												</tr>
												<tr className="border-bottom">
													<td className="text-muted fs-15 fw-semibold text-center">07.</td>
													<td>
														<div className="d-flex">
															<span className="avatar avatar-md brround mt-1" style={{ backgroundImage: "url(/assets/images/users/5.jpg)" }}></span>
															<div className="ms-2 mt-0 mt-sm-2 d-block">
																<h6 className="mb-0 fs-14 fw-semibold">Trevor Thomson</h6>
																<span className="fs-12 text-muted">trevor@gmail.com</span>
															</div>
														</div>
													</td>
													<td className="text-muted fs-15 fw-semibold">19-11-2020 </td>
													<td className="text-muted fs-15 fw-semibold">$2,24,1421</td>
													<td className="text-success fs-15 fw-semibold">Success</td>
													<td className="">
														<a className="btn btn-primary btn-sm rounded-11 me-2" data-bs-toggle="tooltip" data-bs-original-title="Edit"><i><svg className="table-edit" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="16"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z" /></svg></i></a>
														<a className="btn btn-danger btn-sm rounded-11" data-bs-toggle="tooltip" data-bs-original-title="Delete"><i><svg className="table-delete" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="16"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z" /></svg></i></a>
													</td>
												</tr>
												<tr>
													<td className="text-muted fs-15 fw-semibold text-center">08.</td>
													<td>
														<div className="d-flex">
															<span className="avatar avatar-md brround mt-1" style={{ backgroundImage: "url(/assets/images/users/5.jpg)" }}></span>
															<div className="ms-2 mt-0 mt-sm-2 d-block">
																<h6 className="mb-0 fs-14 fw-semibold">Emily Lewis</h6>
																<span className="fs-12 text-muted">emily@gmail.com</span>
															</div>
														</div>
													</td>
													<td className="text-muted fs-15 fw-semibold">19-11-2020 </td>
													<td className="text-muted fs-15 fw-semibold">$9.321.2</td>
													<td className="text-danger fs-15 fw-semibold">Cancel</td>
													<td className="">
														<a className="btn btn-primary btn-sm rounded-11 me-2" data-bs-toggle="tooltip" data-bs-original-title="Edit"><i><svg className="table-edit" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="16"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z" /></svg></i></a>
														<a className="btn btn-danger btn-sm rounded-11" data-bs-toggle="tooltip" data-bs-original-title="Delete"><i><svg className="table-delete" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="16"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z" /></svg></i></a>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
						{/*<!-- COL END -->*/}
					</div>
					{/*<!-- ROW-5 END -->*/}
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