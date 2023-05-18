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
            <div id="page_top" className="section-body sticky-top">
                <div className="container-fluid">
                    <div className="page-header">
                        <div className="left">
                         </div>
                        <div className="right">
                        <button onClick={this.handleLogout} className="link dropdown-item"><i className="dropdown-icon fe fe-log-out" /> Sign out</button>
                        </div>
                    </div>
                </div>
            </div>
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