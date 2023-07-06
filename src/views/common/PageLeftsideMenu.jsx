import React, { Component } from "react";
import { store } from "_helpers";
import { userActions } from "_actions";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";


class PageLeftsideMenu extends Component {
    constructor() {
        super();

    }

    render() {
        return (
            <nav className="pcoded-navbar">
                <div className="nav-list">
                    <div className="pcoded-inner-navbar main-menu">
                        <div className="pcoded-navigation-label">Navigation</div>
                        <ul className="pcoded-item pcoded-left-item">
                            <li className="pcoded-hasmenu active pcoded-trigger">
                                <a href="javascript:void(0)" className="waves-effect waves-dark">
                                    <span className="pcoded-micon"><i className="feather icon-home"></i></span>
                                    <span className="pcoded-mtext">Dashboard</span>
                                </a>
                                <ul className="pcoded-submen">
                                    <li className="active">
                                    <NavLink
                                            to={"/main/dashboard"}
                                            className="nav-link list-b"
                                            activeClassName="active"
                                        >
                                            <span className="pcoded-mtext">Default</span>
                                        </NavLink>
                                    </li>
                                    <li className="">

                                        <NavLink
                                            to={"/main/settings"}
                                            className="nav-link list-b"
                                            activeClassName="active"
                                        >
                                            <span className="pcoded-mtext">Settings</span>
                                        </NavLink>
                                    </li>
                                    <li className="">
                                        <a href="dashboard-analytics.html" className="waves-effect waves-dark">
                                            <span className="pcoded-mtext">New Page</span>
                                            <span className="pcoded-badge label label-info ">NEW</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div >
            </nav >

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
)(PageLeftsideMenu);