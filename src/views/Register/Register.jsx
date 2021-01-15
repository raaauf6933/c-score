import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "../../components/common/Form";

import { getCities, getCity } from "./city";

class Register extends Form {
  state = {
    data: {
      first_name: "",
      middle_name: "",
      last_name: "",
      name_suffix: "",
      gender: "",
      birthday: "",
      email: "",
      phone: "",
      telephone: "",
      address: "",
      province: "",
      cities: "",
      username: "",
      password: "",
      confirm_password: "",
    },
    errors: {},
    gender: [
      {
        id: 1,
        name: "Male",
      },
      { id: 2, name: "Female" },
    ],
    province: [],
    cities: [],
  };

  schema = {
    first_name: Joi.string().required(),
    middle_name: Joi.string().required(),
    last_name: Joi.string().required(),
    name_suffix: Joi.string().required(),
    gender: Joi.string().required(),
    birthday: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
    telephone: Joi.string().required(),
    address: Joi.string().required(),
    province: Joi.string().required(),
    cities: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
    confirm_password: Joi.string().required(),
  };

  componentDidMount() {
    const cities = getCities();
    this.setState({ province: cities });
  }

  handleChangeProvince = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };

    data[input.name] = input.value;

    this.setState({ data, errors });

    const cities = getCity(input.value);
    const p = [];
    cities.cities.forEach((e) => {
      const city = {};
      city.name = e;
      p.push(city);
    });

    this.setState({ cities: p });

    console.log(this.state.data);
  };

  // handleChangeProvince = ({ currentTarget: input }) => {
  //   const cities = getCity(input.value);
  //   const p = [];
  //   cities.cities.forEach((e) => {
  //     const city = {};
  //     city.name = e;
  //     p.push(city);
  //   });

  //   this.setState({ cities: p });
  // };

  render() {
    return (
      <div className="card shadow mr-5">
        <div class="card">
          <div class="card-body">
            <h5 className="text-dark font-weight-bold mt-3 mb-4">
              Personal Information
            </h5>
            <form>
              <div className="row ">
                <div className="col-4">
                  <div className="form-group">
                    {this.renderInput(
                      "first_name",
                      "First Name",
                      "",
                      "",
                      "Please enter your first name"
                    )}
                  </div>
                </div>
                <div className="col-4">
                  <div className="form-group">
                    {this.renderInput(
                      "middle_name",
                      "Middle Name",
                      "",
                      "",
                      "Please enter your last name"
                    )}
                  </div>
                </div>
                <div className="col-4">
                  <div className="form-group">
                    {this.renderInput(
                      "last_name",
                      "Last Name",
                      "",
                      "",
                      "Please enter your last name"
                    )}
                  </div>
                </div>
                <div className="col-4">
                  <div className="form-group">
                    {this.renderInput(
                      "name_suffix",
                      "Name Suffix",
                      "",
                      "",
                      "Please enter your name siffux e.g., Jr, Sr"
                    )}
                  </div>
                </div>
                <div className="col-4">
                  <div className="form-group">
                    {this.renderSelect("gender", "Gender", this.state.gender)}
                  </div>
                </div>
                <div className="col-4">
                  <div className="form-group">
                    {this.renderInput("birthday", "Birthday", "date")}
                  </div>
                </div>
                <div className="col-md-12">
                  <h5 className="text-dark font-weight-bold mt-3 mb-4">
                    Contact Information
                  </h5>
                </div>
                <div className="col-md-4">
                  {this.renderInput(
                    "email",
                    "Email",
                    "email",
                    "",
                    "Please enter your email"
                  )}
                </div>
                <div className="col-md-4">
                  {this.renderInput(
                    "phone",
                    "Mobile Number",
                    "",
                    "",
                    "Please enter your mobile number"
                  )}
                </div>
                <div className="col-md-4">
                  {this.renderInput(
                    "telephone",
                    "Telephone Number",
                    "",
                    "",
                    "Please enter your telephone number"
                  )}
                </div>
                <div className="col-md-4">
                  {this.renderInput(
                    "address",
                    "Street Name and Barangay",
                    "",
                    "",
                    "House No. , Street, Barangay"
                  )}
                </div>
                <div className="col-md-4">
                  {this.renderSelectProvince(
                    "province",
                    "Province",
                    this.state.province
                  )}
                </div>
                <div className="col-md-4">
                  {this.renderSelect("cities", "City", this.state.cities)}
                </div>
                <div className="col-md-12">
                  <h5 className="text-dark font-weight-bold mt-3 mb-4">
                    Credential Information
                  </h5>
                </div>
                <div className="col-4">
                  <div className="form-group">
                    {this.renderInput(
                      "username",
                      "Username",
                      "",
                      "",
                      "Please enter your username"
                    )}
                  </div>
                </div>
                <div className="col-4">
                  <div className="form-group">
                    {this.renderInput(
                      "password",
                      "Password",
                      "",
                      "",
                      "Please enter your password"
                    )}
                  </div>
                </div>
                <div className="col-4">
                  <div className="form-group">
                    {this.renderInput(
                      "confirm_password",
                      "Confirm Password",
                      "",
                      "",
                      "Please enter your confirm password"
                    )}
                  </div>
                </div>
                <div className="col-md-12">
                  <h5 className="text-dark font-weight-bold mt-3 mb-4">
                    Documents
                  </h5>
                </div>
                <div className="col-4">
                  <div className="form-group">
                    {this.renderInput(
                      "confirm_password",
                      "Confirm Password",
                      "",
                      "",
                      "Please enter your confirm password"
                    )}
                  </div>
                </div>
                <div className="col-md-12 mt-4">
                  {this.renderButton(
                    "Continue",
                    "btn mx-auto btn-continue btn-primary btn-lg btn-block"
                  )}
                </div>
                <div className="col-md-12 mt-4">
                  <a className="btn mx-auto btn-cancel  btn-light  btn-lg btn-block">
                    Cancel
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
