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
      <>
        {/*<!-- BACKGROUND-IMAGE-->*/}
        <div>

    
          {/*<!-- PAGE-->*/}
          <div className="page login-page">
            <div>
              {/*<!-- CONTAINER OPEN-->*/}
              <div className="col col-login mx-auto mt-7">
                <div className="text-center">
                  <img src="/assets/images/brand/logo.png" className="header-brand-img" alt="" />
                </div>
              </div>
              <div className="container-login100">
                <div className="wrap-login100 p-0">
                  <div className="card-body">
                    <form className="login100-form validate-form" name="form" onSubmit={this.onSubmit}>
                      <span className="login100-form-title">
                        Login
                      </span>
                      <div className="invalid-feedback">
                        {this.props.authentication.error &&
                          <span>{this.props.authentication.errorMessage}</span>
                        }
                      </div>
                      <div className="wrap-input100 validate-input" data-bs-validate="Valid email is required: ex@abc.xyz">
                        <input type="email" className="input100" id="inputEmail"
                          placeholder="Email Address"
                          name="email"
                          value={this.state.email} onChange={this.onChange}
                        />
                        <span className="focus-input100"></span>
                        <span className="symbol-input100">
                          <i className="zmdi zmdi-email" aria-hidden="true"></i>
                        </span>
                      </div>
                      <div className="wrap-input100 validate-input" data-bs-validate="Password is required">
                        <input type={this.state.passwordType} className="input100 passwordinput" id="exampleInputPassword1"
                          placeholder="Password"
                          name="password"
                          value={this.state.password} onChange={this.onChange}
                        />
                        <span className="focus-input100"></span>
                        <span className="symbol-input100">
                          <i className="zmdi zmdi-lock" aria-hidden="true"></i>
                        </span>
                      </div>
                      <div className="text-end pt-1">
                        <p className="mb-0"><a href="forgot-password.html" className="text-primary ms-1">Forgot Password?</a></p>
                      </div>
                      <div className="container-login100-form-btn">
                        <button className="btn btn-primary btn-block">
                          {this.props.authentication.loggingIn && <span className="spinner-border spinner-border-sm mr-1"></span>}
                          Sign in
                        </button>
                      </div>
                      <div className="text-center pt-3">
                        <p className="text-dark mb-0">Not a member?<a href="register.html" className="text-primary ms-1">Create an Account</a></p>
                      </div>
                    </form>
                  </div>
                  <div className="card-footer">
                    <div className="d-flex justify-content-center my-3">
                      <a href="" className="social-login  text-center me-4">
                        <i className="fa fa-google"></i>
                      </a>
                      <a href="" className="social-login  text-center me-4">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="" className="social-login  text-center">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/*<!-- CONTAINER CLOSED-->*/}
            </div>
          </div>
          {/*<!-- End PAGE-->*/}

        </div>
        {/*<!-- BACKGROUND-IMAGE CLOSED-->*/}
      </>
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


