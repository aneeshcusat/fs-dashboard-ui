import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BrandNameLogo from 'views/common/fragments/BrandNameLogo';
import { userActions } from '_actions';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { store } from '_helpers';
import { validationUtils } from "_helpers";
import LoginPageFooter from './LoginPageFooter';
class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      passwordType: 'password',
      submitted: false,
      email: "",
      password: "",
      errors: {
        email: "",
        password: ""
      }
    };
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
      if (this.state.password) {
        store.dispatch(this.props.login(this.state.email, this.state.password));
      }
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
        <form name="form" onSubmit={this.onSubmit}>
          <div className="card-body">
            <div className="card-title">Login to your account</div>
            <div className="invalid-feedback">
              {this.props.authentication.error &&
                <span>{this.props.authentication.errorMessage}</span>
              }
            </div>
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
              <label className="form-label">Password
                <Link to={"/user/forgotpassword"} className="float-right">I forgot password</Link>
              </label>

              <div className="passwordinputcontainer">
                <span className="input-icon-addon"><i className="fe fe-lock"></i></span>
                <input type={this.state.passwordType} className="form-control passwordinput" id="exampleInputPassword1"
                  placeholder="Password"
                  name="password"
                  value={this.state.password} onChange={this.onChange}
                />
                <a className="passwordshoweye" onClick={this.togglePasswordType}><i className={`fa ${this.state.passwordType === 'text' ? 'fa-eye-slash' : 'fa-eye'}`}></i></a>
              </div>

              {this.state.submitted && !this.state.password &&
                <div className="invalid-feedback">Password is required</div>
              }
            </div>
            <div className="form-group">
              <label className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" />
                <span className="custom-control-label">Remember me</span>
              </label>
            </div>
            <div className="form-footer">
              <button className="btn btn-primary btn-block">
                {this.props.authentication.loggingIn && <span className="spinner-border spinner-border-sm mr-1"></span>}
                Sign in
              </button>
             
            </div>
          </div>
        </form>

        <div className="text-center text-muted d-none">
          Don't have account yet? <Link to={"/user/login"}>Sign up</Link>
        </div>
        <LoginPageFooter />
      </div>
    );
  }
}

LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
  authentication: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  authentication: state.authentication,
});

const mapDispatchToProps = dispatch => ({
  login: userActions.login
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);


