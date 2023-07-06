import React, { Component } from "react";

class DashboardPage extends Component {

	componentDidMount() {
		this.props.pageHeaderNameChangeHandler(this.props.routeProp.name)
	}
	render() {
		return (
			<div className="pcoded-content">

			<div className="page-header card">
				<div className="row align-items-end">
					<div className="col-lg-8">
						<div className="page-header-title">
							<i className="feather icon-home bg-c-blue"></i>
							<div className="d-inline">
								<h5>Dashboard</h5>
								<span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="page-header-breadcrumb">
							<ul className=" breadcrumb breadcrumb-title">
								<li className="breadcrumb-item">
									<a href="index.html"><i className="feather icon-home"></i></a>
								</li>
								<li className="breadcrumb-item"><a href="#!">Dashboard</a> </li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div className="pcoded-inner-content">
				<div className="main-body">
					<div className="page-wrapper">
						<div className="page-body">

							<div className="row">

								<div className="col-md-12 col-xl-8">
									<div className="card sale-card">
										<div className="card-header">
											<h5>Deals Analytics</h5>
										</div>
										<div className="card-block">
											<div id="sales-analytics" className="chart-shadow"
												></div>
										</div>
									</div>
								</div>
								<div className="col-md-12 col-xl-4">
									<div className="card comp-card">
										<div className="card-body">
											<div className="row align-items-center">
												<div className="col">
													<h6 className="m-b-25">Impressions</h6>
													<h3 className="f-w-700 text-c-blue">1,563</h3>
													<p className="m-b-0">May 23 - June 01 (2017)</p>
												</div>
												<div className="col-auto">
													<i className="fas fa-eye bg-c-blue"></i>
												</div>
											</div>
										</div>
									</div>
									<div className="card comp-card">
										<div className="card-body">
											<div className="row align-items-center">
												<div className="col">
													<h6 className="m-b-25">Goal</h6>
													<h3 className="f-w-700 text-c-green">30,564</h3>
													<p className="m-b-0">May 23 - June 01 (2017)</p>
												</div>
												<div className="col-auto">
													<i className="fas fa-bullseye bg-c-green"></i>
												</div>
											</div>
										</div>
									</div>
									<div className="card comp-card">
										<div className="card-body">
											<div className="row align-items-center">
												<div className="col">
													<h6 className="m-b-25">Impact</h6>
													<h3 className="f-w-700 text-c-yellow">42.6%</h3>
													<p className="m-b-0">May 23 - June 01 (2017)</p>
												</div>
												<div className="col-auto">
													<i className="fas fa-hand-paper bg-c-yellow"></i>
												</div>
											</div>
										</div>
									</div>
								</div>


								<div className="col-xl-12">
									<div className="card proj-progress-card">
										<div className="card-block">
											<div className="row">
												<div className="col-xl-3 col-md-6">
													<h6>Published Project</h6>
													<h5 className="m-b-30 f-w-700">532<span
															className="text-c-green m-l-10">+1.69%</span></h5>
													<div className="progress">
														<div className="progress-bar bg-c-red"
															></div>
													</div>
												</div>
												<div className="col-xl-3 col-md-6">
													<h6>Completed Task</h6>
													<h5 className="m-b-30 f-w-700">4,569<span
															className="text-c-red m-l-10">-0.5%</span></h5>
													<div className="progress">
														<div className="progress-bar bg-c-blue"
															></div>
													</div>
												</div>
												<div className="col-xl-3 col-md-6">
													<h6>Successfull Task</h6>
													<h5 className="m-b-30 f-w-700">89%<span
															className="text-c-green m-l-10">+0.99%</span></h5>
													<div className="progress">
														<div className="progress-bar bg-c-green"
															></div>
													</div>
												</div>
												<div className="col-xl-3 col-md-6">
													<h6>Ongoing Project</h6>
													<h5 className="m-b-30 f-w-700">365<span
															className="text-c-green m-l-10">+0.35%</span></h5>
													<div className="progress">
														<div className="progress-bar bg-c-yellow"
															></div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>


								<div className="col-md-12 col-xl-4">
									<div className="card card-blue text-white">
										<div className="card-block p-b-0">
											<div className="row m-b-50">
												<div className="col">
													<h6 className="m-b-5">Sales In July</h6>
													<h5 className="m-b-0 f-w-700">$2665.00</h5>
												</div>
												<div className="col-auto text-center">
													<p className="m-b-5">Direct Sale</p>
													<h6 className="m-b-0">$1768</h6>
												</div>
												<div className="col-auto text-center">
													<p className="m-b-5">Referal</p>
													<h6 className="m-b-0">$897</h6>
												</div>
											</div>
											<div id="sec-ecommerce-chart-line" className="" >
											</div>
											<div id="sec-ecommerce-chart-bar" ></div>
										</div>
									</div>
								</div>
								<div className="col-xl-4 col-md-12">
									<div className="card latest-update-card">
										<div className="card-header">
											<h5>What’s New</h5>
											<div className="card-header-right">
												<ul className="list-unstyled card-option">
													<li className="first-opt"><i
															className="feather icon-chevron-left open-card-option"></i>
													</li>
													<li><i className="feather icon-maximize full-card"></i></li>
													<li><i className="feather icon-minus minimize-card"></i>
													</li>
													<li><i className="feather icon-refresh-cw reload-card"></i>
													</li>
													<li><i className="feather icon-trash close-card"></i></li>
													<li><i
															className="feather icon-chevron-left open-card-option"></i>
													</li>
												</ul>
											</div>
										</div>
										<div className="card-block">
											<div className="scroll-widget">
												<div className="latest-update-box">
													<div className="row p-t-20 p-b-30">
														<div className="col-auto text-right update-meta p-r-0">
															<img src="/assets/jpg/avatar-4.jpg" alt="user image"
																className="img-radius img-40 align-top m-r-15 update-icon"/>
														</div>
														<div className="col p-l-5">
															<a href="#!">
																<h6>Your Manager Posted.</h6>
															</a>
															<p className="text-muted m-b-0">Jonny michel</p>
														</div>
													</div>
													<div className="row p-b-30">
														<div className="col-auto text-right update-meta p-r-0">
															<i
																className="feather icon-briefcase bg-c-red update-icon"></i>
														</div>
														<div className="col p-l-5">
															<a href="#!">
																<h6>You have 3 pending Task.</h6>
															</a>
															<p className="text-muted m-b-0">Hemilton</p>
														</div>
													</div>
													<div className="row p-b-30">
														<div className="col-auto text-right update-meta p-r-0">
															<i
																className="feather icon-check f-w-600 bg-c-green update-icon"></i>
														</div>
														<div className="col p-l-5">
															<a href="#!">
																<h6>New Order Received.</h6>
															</a>
															<p className="text-muted m-b-0">Hemilton</p>
														</div>
													</div>
													<div className="row p-b-30">
														<div className="col-auto text-right update-meta p-r-0">
															<img src="/assets/jpg/avatar-4.jpg" alt="user image"
																className="img-radius img-40 align-top m-r-15 update-icon"/>
														</div>
														<div className="col p-l-5">
															<a href="#!">
																<h6>Your Manager Posted.</h6>
															</a>
															<p className="text-muted m-b-0">Jonny michel</p>
														</div>
													</div>
													<div className="row p-b-30">
														<div className="col-auto text-right update-meta p-r-0">
															<i
																className="feather icon-briefcase bg-c-red update-icon"></i>
														</div>
														<div className="col p-l-5">
															<a href="#!">
																<h6>You have 3 pending Task.</h6>
															</a>
															<p className="text-muted m-b-0">Hemilton</p>
														</div>
													</div>
													<div className="row">
														<div className="col-auto text-right update-meta p-r-0">
															<i
																className="feather icon-check f-w-600 bg-c-green update-icon"></i>
														</div>
														<div className="col p-l-5">
															<a href="#!">
																<h6>New Order Received.</h6>
															</a>
															<p className="text-muted m-b-0">Hemilton</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-4 col-md-6">
									<div className="card latest-update-card">
										<div className="card-header">
											<h5>Latest Activity</h5>
											<div className="card-header-right">
												<ul className="list-unstyled card-option">
													<li className="first-opt"><i
															className="feather icon-chevron-left open-card-option"></i>
													</li>
													<li><i className="feather icon-maximize full-card"></i></li>
													<li><i className="feather icon-minus minimize-card"></i>
													</li>
													<li><i className="feather icon-refresh-cw reload-card"></i>
													</li>
													<li><i className="feather icon-trash close-card"></i></li>
													<li><i
															className="feather icon-chevron-left open-card-option"></i>
													</li>
												</ul>
											</div>
										</div>
										<div className="card-block">
											<div className="scroll-widget">
												<div className="latest-update-box">
													<div className="row p-t-20 p-b-30">
														<div className="col-auto text-right update-meta p-r-0">
															<i className="b-primary update-icon ring"></i>
														</div>
														<div className="col p-l-5">
															<a href="#!">
																<h6>Devlopment & Update</h6>
															</a>
															<p className="text-muted m-b-0">Lorem ipsum dolor
																sit amet, <a href="#!" className="text-c-blue">
																	More</a></p>
														</div>
													</div>
													<div className="row p-b-30">
														<div className="col-auto text-right update-meta p-r-0">
															<i className="b-primary update-icon ring"></i>
														</div>
														<div className="col p-l-5">
															<a href="#!">
																<h6>Showcases</h6>
															</a>
															<p className="text-muted m-b-0">Lorem dolor sit
																amet, <a href="#!" className="text-c-blue">
																	More</a></p>
														</div>
													</div>
													<div className="row p-b-30">
														<div className="col-auto text-right update-meta p-r-0">
															<i className="b-success update-icon ring"></i>
														</div>
														<div className="col p-l-5">
															<a href="#!">
																<h6>Miscellaneous</h6>
															</a>
															<p className="text-muted m-b-0">Lorem ipsum dolor
																sit ipsum amet, <a href="#!"
																	className="text-c-green"> More</a></p>
														</div>
													</div>
													<div className="row p-b-30">
														<div className="col-auto text-right update-meta p-r-0">
															<i className="b-danger update-icon ring"></i>
														</div>
														<div className="col p-l-5">
															<a href="#!">
																<h6>Your Manager Posted.</h6>
															</a>
															<p className="text-muted m-b-0">Lorem ipsum dolor
																sit amet, <a href="#!" className="text-c-red">
																	More</a></p>
														</div>
													</div>
													<div className="row p-b-30">
														<div className="col-auto text-right update-meta p-r-0">
															<i className="b-primary update-icon ring"></i>
														</div>
														<div className="col p-l-5">
															<a href="#!">
																<h6>Showcases</h6>
															</a>
															<p className="text-muted m-b-0">Lorem dolor sit
																amet, <a href="#!" className="text-c-blue">
																	More</a></p>
														</div>
													</div>
													<div className="row">
														<div className="col-auto text-right update-meta p-r-0">
															<i className="b-success update-icon ring"></i>
														</div>
														<div className="col p-l-5">
															<a href="#!">
																<h6>Miscellaneous</h6>
															</a>
															<p className="text-muted m-b-0">Lorem ipsum dolor
																sit ipsum amet, <a href="#!"
																	className="text-c-green"> More</a></p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>


								<div className="col-md-12">
									<div className="card table-card">
										<div className="card-header">
											<h5>New Products</h5>
											<div className="card-header-right">
												<ul className="list-unstyled card-option">
													<li className="first-opt"><i
															className="feather icon-chevron-left open-card-option"></i>
													</li>
													<li><i className="feather icon-maximize full-card"></i></li>
													<li><i className="feather icon-minus minimize-card"></i>
													</li>
													<li><i className="feather icon-refresh-cw reload-card"></i>
													</li>
													<li><i className="feather icon-trash close-card"></i></li>
													<li><i
															className="feather icon-chevron-left open-card-option"></i>
													</li>
												</ul>
											</div>
										</div>
										<div className="card-block p-b-0">
											<div className="table-responsive">
												<table className="table table-hover m-b-0">
													<thead>
														<tr>
															<th>Name</th>
															<th>Product Code</th>
															<th>Customer</th>
															<th>Status</th>
															<th>Rating</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>Sofa</td>
															<td>#PHD001</td>
															<td><a href="https://colorlib.com/cdn-cgi/l/email-protection"
																	className="__cf_email__"
																	data-cfemail="29484b4a694e44484045074a4644">[email&#160;protected]</a>
															</td>
															<td><label className="label label-danger">Out
																	Stock</label></td>
															<td>
																<a href="#!"><i
																		className="fa fa-star f-12 text-c-yellow"></i></a>
																<a href="#!"><i
																		className="fa fa-star f-12 text-c-yellow"></i></a>
																<a href="#!"><i
																		className="fa fa-star f-12 text-c-yellow"></i></a>
																<a href="#!"><i
																		className="fa fa-star f-12 text-default"></i></a>
																<a href="#!"><i
																		className="fa fa-star f-12 text-default"></i></a>
															</td>
														</tr>
														<tr>
															<td>Computer</td>
															<td>#PHD002</td>
															<td><a href="https://colorlib.com/cdn-cgi/l/email-protection"
																	className="__cf_email__"
																	data-cfemail="e6858285a6818b878f8ac885898b">[email&#160;protected]</a>
															</td>
															<td><label className="label label-success">In
																	Stock</label></td>
															<td>
																<a href="#!"><i
																		className="fa fa-star f-12 text-c-yellow"></i></a>
																<a href="#!"><i
																		className="fa fa-star f-12 text-c-yellow"></i></a>
																<a href="#!"><i
																		className="fa fa-star f-12 text-default"></i></a>
																<a href="#!"><i
																		className="fa fa-star f-12 text-default"></i></a>
																<a href="#!"><i
																		className="fa fa-star f-12 text-default"></i></a>
															</td>
														</tr>
														<tr>
															<td>Mobile</td>
															<td>#PHD003</td>
															<td><a href="https://colorlib.com/cdn-cgi/l/email-protection"
																	className="__cf_email__"
																	data-cfemail="afdfdeddefc8c2cec6c381ccc0c2">[email&#160;protected]</a>
															</td>
															<td><label className="label label-danger">Out
																	Stock</label></td>
															<td>
																<a href="#!"><i
																		className="fa fa-star f-12 text-c-yellow"></i></a>
																<a href="#!"><i
																		className="fa fa-star f-12 text-c-yellow"></i></a>
																<a href="#!"><i
																		className="fa fa-star f-12 text-c-yellow"></i></a>
																<a href="#!"><i
																		className="fa fa-star f-12 text-c-yellow"></i></a>
																<a href="#!"><i
																		className="fa fa-star f-12 text-default"></i></a>
															</td>
														</tr>
														<tr>
															<td>Coat</td>
															<td>#PHD004</td>
															<td><a href="https://colorlib.com/cdn-cgi/l/email-protection"
																	className="__cf_email__"
																	data-cfemail="a7c5c4d4e7c0cac6cecb89c4c8ca">[email&#160;protected]</a>
															</td>
															<td><label className="label label-success">In
																	Stock</label></td>
															<td>
																<a href="#!"><i
																		className="fa fa-star f-12 text-c-yellow"></i></a>
																<a href="#!"><i
																		className="fa fa-star f-12 text-c-yellow"></i></a>
																<a href="#!"><i
																		className="fa fa-star f-12 text-c-yellow"></i></a>
																<a href="#!"><i
																		className="fa fa-star f-12 text-default"></i></a>
																<a href="#!"><i
																		className="fa fa-star f-12 text-default"></i></a>
															</td>
														</tr>
														<tr>
															<td>Watch</td>
															<td>#PHD005</td>
															<td><a href="https://colorlib.com/cdn-cgi/l/email-protection"
																	className="__cf_email__"
																	data-cfemail="5e3d3a3d1e39333f3732703d3133">[email&#160;protected]</a>
															</td>
															<td><label className="label label-success">In
																	Stock</label></td>
															<td>
																<a href="#!"><i
																		className="fa fa-star f-12 text-c-yellow"></i></a>
																<a href="#!"><i
																		className="fa fa-star f-12 text-c-yellow"></i></a>
																<a href="#!"><i
																		className="fa fa-star f-12 text-default"></i></a>
																<a href="#!"><i
																		className="fa fa-star f-12 text-default"></i></a>
																<a href="#!"><i
																		className="fa fa-star f-12 text-default"></i></a>
															</td>
														</tr>
														<tr>
															<td>Shoes</td>
															<td>#PHD006</td>
															<td><a href="https://colorlib.com/cdn-cgi/l/email-protection"
																	className="__cf_email__"
																	data-cfemail="c5b5b4b785a2a8a4aca9eba6aaa8">[email&#160;protected]</a>
															</td>
															<td><label className="label label-danger">Out
																	Stock</label></td>
															<td>
																<a href="#!"><i
																		className="fa fa-star f-12 text-c-yellow"></i></a>
																<a href="#!"><i
																		className="fa fa-star f-12 text-c-yellow"></i></a>
																<a href="#!"><i
																		className="fa fa-star f-12 text-c-yellow"></i></a>
																<a href="#!"><i
																		className="fa fa-star f-12 text-c-yellow"></i></a>
																<a href="#!"><i
																		className="fa fa-star f-12 text-default"></i></a>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</div>
								</div>



							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
		);
	}
}

export default DashboardPage;
