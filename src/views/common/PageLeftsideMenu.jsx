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
            <></>

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