import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import BrandNameLogo from "views/common/fragments/BrandNameLogo";

class Error500 extends Component {
  
  render() {
    return (
      <div className="auth_left">
        <div className="card">
          <BrandNameLogo />
          <div className="card-body">
                <div className="display-3 text-muted mb-5"><i className="si si-exclamation"></i> 500</div>
                <h1 className="h3 mb-3">Oops.. You just found an error page..</h1>
                <p className="h6 text-muted font-weight-normal mb-3">We are sorry but your request contains bad syntax and cannot be fulfilled…</p>
                <NavLink to={"/user/login"} className="btn btn-primary" style={{ color: "#007bff" }}><i className="fe fe-arrow-left mr-2"></i>Go back</NavLink> 
            </div>
        </div>
      </div>
    );
  }
}

export default Error500;

