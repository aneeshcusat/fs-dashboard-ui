import React, { Component } from "react";
import { store } from "_helpers";
import { userActions } from "_actions";
import { connect } from "react-redux";


class PageHeader extends Component {
    constructor() {
        super();
        this.state = {
            searchText: ""
        }
    }
    handleLogout = (e) => {
        e.preventDefault();
        store.dispatch(this.props.logout());
    }

    render() {
        return (
            <>
                {/* <!--app-Header -->*/}
                <div className="app-header header sticky">
                    <div className="container-fluid main-container">
                        <div className="d-flex align-items-center">
                            <a aria-label="Hide Sidebar" className="app-sidebar__toggle" data-bs-toggle="sidebar" href="javascript:void(0);"></a>
                            <div className="responsive-logo">
                                <a href="index.html" className="header-logo">
                                    <img src="/assets/images/brand/logo-3.png" className="mobile-logo logo-1" alt="logo" />
                                    <img src="/assets/images/brand/logo.png" className="mobile-logo dark-logo-1" alt="logo" />
                                </a>
                            </div>
                            {/* <!--sidebar-toggle-->*/}
                            <a className="logo-horizontal " href="index.html">
                                <img src="/assets/images/brand/logo.png" className="header-brand-img desktop-logo" alt="logo" />
                                <img src="/assets/images/brand/logo-3.png" className="header-brand-img light-logo1"
                                    alt="logo" />
                            </a>
                            {/*LOGO -->*/}
                            <div className="main-header-center ms-3 d-none d-lg-block">
                                <input className="form-control" placeholder="Search for anything..." type="search" /> <button className="btn"><i className="fa fa-search" aria-hidden="true"></i></button>
                            </div>
                            <div className="d-flex order-lg-2 ms-auto header-right-icons">
                                {/* <!--SEARCH -->*/}
                                <button className="navbar-toggler navresponsive-toggler d-lg-none ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent-4" aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon fe fe-more-vertical text-dark"></span>
                                </button>
                                <div className="navbar navbar-collapse responsive-navbar p-0">
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
                                        <div className="d-flex order-lg-2">
                                            <div className="dropdown d-block d-lg-none">
                                                <a href="javascript:void(0);" className="nav-link icon" data-bs-toggle="dropdown">
                                                    <i className="fe fe-search"></i>
                                                </a>
                                                <div className="dropdown-menu header-search dropdown-menu-start">
                                                    <div className="input-group w-100 p-2">
                                                        <input type="text" className="form-control" placeholder="Search...." />
                                                        <div className="input-group-text btn btn-primary">
                                                            <i className="fa fa-search" aria-hidden="true"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="dropdown d-md-flex">
                                                <a className="nav-link icon theme-layout nav-link-bg layout-setting">
                                                    <span className="dark-layout"><i className="fe fe-moon"></i></span>
                                                    <span className="light-layout"><i className="fe fe-sun"></i></span>
                                                </a>
                                            </div>
                                            {/* <!--Theme-Layout -->*/}
                                            <div className="dropdown d-md-flex">
                                                <a className="nav-link icon full-screen-link nav-link-bg">
                                                    <i className="fe fe-minimize fullscreen-button" id="myvideo"></i>
                                                </a>
                                            </div>
                                            {/* <!--FULL-SCREEN -->*/}
                                            <div className="dropdown d-md-flex notifications">
                                                <a className="nav-link icon" data-bs-toggle="dropdown"><i className="fe fe-bell"></i><span className=" pulse"></span>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow ">
                                                    <div className="drop-heading border-bottom">
                                                        <div className="d-flex">
                                                            <h6 className="mt-1 mb-0 fs-16 fw-semibold">You have Notification</h6>
                                                            <div className="ms-auto">
                                                                <span className="badge bg-success rounded-pill">3</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="notifications-menu">
                                                        <a className="dropdown-item d-flex" href="chat.html">
                                                            <div className="me-3 notifyimg  bg-primary-gradient brround box-shadow-primary">
                                                                <i className="fe fe-message-square"></i>
                                                            </div>
                                                            <div className="mt-1 wd-80p">
                                                                <h5 className="notification-label mb-1">New review received</h5>
                                                                <span className="notification-subtext">2 hours ago</span>
                                                            </div>
                                                        </a>
                                                        <a className="dropdown-item d-flex" href="chat.html">
                                                            <div className="me-3 notifyimg  bg-secondary-gradient brround box-shadow-primary">
                                                                <i className="fe fe-mail"></i>
                                                            </div>
                                                            <div className="mt-1 wd-80p">
                                                                <h5 className="notification-label mb-1">New Mails Received</h5>
                                                                <span className="notification-subtext">1 week ago</span>
                                                            </div>
                                                        </a>
                                                        <a className="dropdown-item d-flex" href="cart.html">
                                                            <div className="me-3 notifyimg  bg-success-gradient brround box-shadow-primary">
                                                                <i className="fe fe-shopping-cart"></i>
                                                            </div>
                                                            <div className="mt-1 wd-80p">
                                                                <h5 className="notification-label mb-1">New Order Received</h5>
                                                                <span className="notification-subtext">1 day ago</span>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="dropdown-divider m-0"></div>
                                                    <a href="javascript:void(0);" className="dropdown-item text-center p-3 text-muted">View all Notification</a>
                                                </div>
                                            </div>
                                            {/* <!--NOTIFICATIONS -->*/}
                                            <div className="dropdown d-md-flex message">
                                                <a className="nav-link icon text-center" data-bs-toggle="dropdown">
                                                    <i className="fe fe-message-square"></i><span className=" pulse-danger"></span>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                    <div className="drop-heading border-bottom">
                                                        <div className="d-flex">
                                                            <h6 className="mt-1 mb-0 fs-16 fw-semibold">You have Messages</h6>
                                                            <div className="ms-auto">
                                                                <span className="badge bg-danger rounded-pill">4</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="message-menu">
                                                        <a className="dropdown-item d-flex" href="chat.html">
                                                            <span className="avatar avatar-md brround me-3 align-self-center cover-image" data-bs-image-src="/assets/images/users/1.jpg"></span>
                                                            <div className="wd-90p">
                                                                <div className="d-flex">
                                                                    <h5 className="mb-1">Madeleine</h5>
                                                                    <small className="text-muted ms-auto text-end">
                                                                        3 hours ago
                                                                    </small>
                                                                </div>
                                                                <span>Hey! there I' am available....</span>
                                                            </div>
                                                        </a>
                                                        <a className="dropdown-item d-flex" href="chat.html">
                                                            <span className="avatar avatar-md brround me-3 align-self-center cover-image" data-bs-image-src="/assets/images/users/12.jpg"></span>
                                                            <div className="wd-90p">
                                                                <div className="d-flex">
                                                                    <h5 className="mb-1">Anthony</h5>
                                                                    <small className="text-muted ms-auto text-end">
                                                                        5 hour ago
                                                                    </small>
                                                                </div>
                                                                <span>New product Launching...</span>
                                                            </div>
                                                        </a>
                                                        <a className="dropdown-item d-flex" href="chat.html">
                                                            <span className="avatar avatar-md brround me-3 align-self-center cover-image" data-bs-image-src="/assets/images/users/4.jpg"></span>
                                                            <div className="wd-90p">
                                                                <div className="d-flex">
                                                                    <h5 className="mb-1">Olivia</h5>
                                                                    <small className="text-muted ms-auto text-end">
                                                                        45 mintues ago
                                                                    </small>
                                                                </div>
                                                                <span>New Schedule Realease......</span>
                                                            </div>
                                                        </a>
                                                        <a className="dropdown-item d-flex" href="chat.html">
                                                            <span className="avatar avatar-md brround me-3 align-self-center cover-image" data-bs-image-src="/assets/images/users/15.jpg"></span>
                                                            <div className="wd-90p">
                                                                <div className="d-flex">
                                                                    <h5 className="mb-1">Sanderson</h5>
                                                                    <small className="text-muted ms-auto text-end">
                                                                        2 days ago
                                                                    </small>
                                                                </div>
                                                                <span>New Schedule Realease......</span>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="dropdown-divider m-0"></div>
                                                    <a href="javascript:void(0);" className="dropdown-item text-center p-3 text-muted">See all Messages</a>
                                                </div>
                                            </div>
                                            {/* <!--MESSAGE-BOX -->*/}
                                            <div className="dropdown d-md-flex profile-1">
                                                <a href="javascript:void(0);" data-bs-toggle="dropdown" className="nav-link leading-none d-flex px-1">
                                                    <span>
                                                        <img src="/assets/images/users/8.jpg" alt="profile-user" className="avatar  profile-user brround cover-image" />
                                                    </span>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                    <div className="drop-heading">
                                                        <div className="text-center">
                                                            <h5 className="text-dark mb-0">Elizabeth Dyer</h5>
                                                            <small className="text-muted">Administrator</small>
                                                        </div>
                                                    </div>
                                                    <div className="dropdown-divider m-0"></div>
                                                    <a className="dropdown-item" href="profile.html">
                                                        <i className="dropdown-icon fe fe-user"></i> Profile
                                                    </a>
                                                    <a className="dropdown-item" href="email.html">
                                                        <i className="dropdown-icon fe fe-mail"></i> Inbox
                                                        <span className="badge bg-secondary float-end">3</span>
                                                    </a>
                                                    <a className="dropdown-item" href="emailservices.html">
                                                        <i className="dropdown-icon fe fe-settings"></i> Settings
                                                    </a>
                                                    <a className="dropdown-item" href="faq.html">
                                                        <i className="dropdown-icon fe fe-alert-triangle"></i> Need help?
                                                    </a>
                                                    <a className="dropdown-item" href="login.html">
                                                        <i className="dropdown-icon fe fe-alert-circle"></i> Sign out
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="dropdown d-md-flex header-settings">
                                                <a href="javascript:void(0);" className="nav-link icon " data-bs-toggle="sidebar-right" data-target=".sidebar-right">
                                                    <i className="fe fe-menu"></i>
                                                </a>
                                            </div>
                                            {/* <!--SIDE-MENU -->*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--/app-Header -->*/}
            </>

        );
    }
}
const mapStateToProps = state => ({
    authentication: state.authentication
});

const mapDispatchToProps = dispatch => ({
    logout: userActions.logout
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PageHeader);