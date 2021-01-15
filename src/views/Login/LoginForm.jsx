import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "../../components/common/Form";

class LoginForm extends Form {
  state = { data: { email: "", password: "" }, errors: {} };

  schema = {
    email: Joi.string().required().label("Email"),
    password: Joi.string().required().label("Password"),
  };
  render() {
    return (
      <div className="card shadow mr-5" style={{ width: "22rem" }}>
        <div className="card-body">
          <form>
            <div className="row ">
              <div className="col-12">
                <div className="form-group">
                  {this.renderInput("email", "Email")}
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  {this.renderInput("password", "Password", "password")}
                </div>
              </div>
              <div class="col-md-12 mb-3">
                <a class="text-right login-forgotpass ">Forgot Password</a>
              </div>
            </div>
          </form>
    
          <button type="submit" className="btn login-btn btn-primary btn-block">
            <b>Sign In</b>
          </button>
          <div className="mt-3">
            {" "}
            <p class="text-center">
              Dont have an account? <a href="">Register here</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
