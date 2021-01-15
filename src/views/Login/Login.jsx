import React, { Component } from "react";
import LoginForm from "./LoginForm";

import Logo from "../../assets/img/logo.png";

class Index extends Component {
  state = {};
  render() {
    return (
      <div className="row align-items-center">
        <div className="col-md-1"></div>
        <div className="col-md-6">
          <img
            src={Logo}
            className="login-brand img-fluid brand"
            alt="logo"
          ></img>
          <h2 className="login mb-4">C-SCORE is now IPOPHL Certified</h2>
          <h6 className="login">
            CIBI Information, Inc. received its certification from the
            Intellectual Property Office of the Philippines (IPOPHL) that was
            announced in its Bulletin last March 5, 2018. Both CIBI Information,
            Inc. logo and its banner credit bureau product MyScore were both
            certified.
          </h6>
        </div>

        <div className="col-md-5">
          <LoginForm></LoginForm>
        </div>
        <div className="col-md-1"></div>
      </div>
    );
  }
}

export default Index;
