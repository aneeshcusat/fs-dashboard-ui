import React, { Component } from "react";
import BrandNameLogo from "views/common/fragments/BrandNameLogo";
import { userActions } from '_actions';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { store } from '_helpers';
import { validationUtils } from "_helpers";
import { Link, NavLink } from "react-router-dom";
import LoginPageFooter from "./LoginPageFooter";
class ChangePassword extends Component {
  constructor() {
    super();
    this.state = {
      passwordType: 'password',
      submitted: false,
      email: "",
      password: "",
      confirmPassword: "",
      invalidEmail: false,
      errors: {
        email: "",
        password: "",
        confirmPassword: "",
      }
    };
  }

  componentDidMount() {
    let activationKey = this.props.match.params.activationKey;
    let employeeId = this.props.match.params.employeeId;
    let uniqueId = this.props.match.params.uniqueId;
    store.dispatch(this.props.validateAccountActivation(uniqueId, employeeId, activationKey));
    //let urlViewName = this.getViewByName(new URLSearchParams(this.props.location.search).get("view"));
    this.setState({
      activateAccount: this.props.routeProp.path.substring(1).startsWith("activateaccount")
    });
  }


  togglePasswordType = () => {
    this.setState({
      passwordType: this.state.passwordType === 'text' ? 'password' : 'text'
    })
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ invalidEmail: false });
    this.setState({ submitted: true });
    if (this.state.email && validationUtils.validateEmail(this.state.email)) {
      store.dispatch(this.props.changePassword(
        {
          "email": this.state.email,
          "password": this.state.password,
          "identifier": this.props.match.params.uniqueId,
          "employeeId": this.props.match.params.employeeId,
          "activationKey": this.props.match.params.activationKey
        }));
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
          <div className="card-title">{this.state.activateAccount ? 'Activate Account' : 'Rest password'}</div>
          {this.props.authentication.validKey &&
            <p className="text-muted">Enter your email id and new password to {this.state.activateAccount ? 'activate Account' : 'change password'}</p>
          }
          {this.props.authentication.changePasswordSuccess &&
            <div className="invalid-feedback">
              <span>
                <p className="text-muted colorgreen">Your account has been activated please <Link to={"/user/login"} className="fsize14 fweight600">Sign In</Link> again</p>
              </span>
            </div>
          }
          {!this.props.authentication.validKey && !this.props.authentication.changePasswordSuccess &&
            <>
              <div className="invalid-feedback">
                <span>
                  <p className="text-muted colorred fsize15">Invalid Activation Key, <Link to={"/user/forgotpassword"} className="fsize14 fweight600">Request new activation key</Link></p>
                </span>
              </div>
            </>
          }

          {this.props.authentication.validKey &&
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
                {this.state.submitted && !this.state.email &&
                  <div className="invalid-feedback">Email is required</div>
                }
              </div>
              <div className="form-group">
                <label className="form-label">New Password
                </label>

                <div className="passwordinputcontainer">
                  <span className="input-icon-addon"><i className="fe fe-lock"></i></span>
                  <input type={this.state.passwordType} className="form-control passwordinput" id="exampleInputPassword1"
                    placeholder="Password"
                    name="password"
                    value={this.state.password} onChange={this.onChange}
                  />
                  <a className="passwordshoweye" onClick={this.togglePasswordType}><i className={`fe ${this.state.passwordType === 'text' ? 'fe-eye-off' : 'fe-eye'}`}></i></a>
                </div>

                {this.state.submitted && !this.state.password &&
                  <div className="invalid-feedback">Password is required</div>
                }
              </div>

              <div className="form-footer">
                <button className="btn btn-primary btn-block" onClick={(e) => this.onSubmit(e)}>
                  {this.props.authentication.changePassword && <span className="spinner-border spinner-border-sm mr-1"></span>}
                  {this.state.activateAccount ? 'Activate Account' : 'Change Password'}
                </button>

              </div>
            </>
          }
          {!this.props.authentication.changePasswordSuccess &&
            <div className="text-muted">
              Forget it, <NavLink to={"/user/login"} style={{ color: "#007bff" }}>Send me Back</NavLink> to the Sign in screen.
            </div>
          }
        </div>
        <LoginPageFooter/>
      </div>
    );
  }
}

ChangePassword.propTypes = {
  changePassword: PropTypes.func.isRequired,
  authentication: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  authentication: state.authentication
});

const mapDispatchToProps = dispatch => ({
  validateAccountActivation: userActions.validateAccountActivation,
  changePassword: userActions.changePassword
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangePassword);
