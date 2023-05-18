import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import BrandNameLogo from "views/common/fragments/BrandNameLogo";
import { userActions } from '_actions';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { store } from '_helpers';
import { validationUtils } from "_helpers";
import LoginPageFooter from "./LoginPageFooter";

class ForgotPassword extends Component {
  constructor() {
    super();
    this.state = {
      submitted: false,
      email: "",
      invalidEmail: false,
      errors: {
        email: ""
      }
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ invalidEmail: false });
    this.setState({ submitted: true });
    if (this.state.email && validationUtils.validateEmail(this.state.email)) {
      store.dispatch(this.props.initiateAccountActivation(this.state.email));
    } else {
      this.setState({ invalidEmail: true });
    }
  }

  onChange = (e) => {
    this.setState({ submitted: false });
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="card">
        <BrandNameLogo />
        <div className="card-body">
          <div className="card-title">Forgot password</div>
          {!this.props.authentication.initiateActivationRequestSuccess &&
            <p className="text-muted">Enter your email address, We will email you account activation url.</p>
          }
          {this.props.authentication.initiateActivationRequestSuccess &&
            <div className="invalid-feedback">
              <span>
                <p className="text-muted colorgreen">Your account activation url has been sent, please check your mailbox</p>
              </span>
            </div>
          }

          {!this.props.authentication.initiateActivationRequestSuccess &&
            <>
              <div className="form-group">
                <label className="form-label">Email</label>

                <div className="input-icon">
                  <span className="input-icon-addon"><i className="fe fe-user"></i></span>
                  <input type="email" className="form-control" id="inputEmail"
                    placeholder="Email Address"
                    name="email"
                    value={this.state.email} onChange={this.onChange}
                  />
                </div>
                {((this.state.submitted && this.state.invalidEmail) || this.props.authentication.error) &&
                  <div className="invalid-feedback">Valid Email is required</div>
                }
              </div>
              <div className="form-footer">
                <button className="btn btn-primary btn-block" onClick={(e) => this.onSubmit(e)}>
                  {this.props.authentication.initiatinalizingAccountActivation && <span className="spinner-border spinner-border-sm mr-1"></span>}
                  Request Account Reactivation
                </button>
              </div>
            </>
          }
        </div>

        <div className="text-center text-muted">
          Forget it, <NavLink to={"/user/login"} style={{ color: "#007bff" }}>Send me Back</NavLink> to the Sign in screen.
        </div>
        <LoginPageFooter/>
      </div>
    );
  }
}

ForgotPassword.propTypes = {
  initiateAccountActivation: PropTypes.func.isRequired,
  authentication: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  authentication: state.authentication,
});

const mapDispatchToProps = dispatch => ({
  initiateAccountActivation: userActions.initiateAccountActivation
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPassword);

