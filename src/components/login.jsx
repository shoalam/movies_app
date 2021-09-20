import React, { Component } from "react";
import Input from "./input";

export default class LogIn extends Component {
  state = {
    user: { username: "", password: "" },
    errors: { username: "", password: "" },
  };

  handleSumbit = (e) => {
    e.preventDefault();
    const userName = e.target[0].value;
    const password = e.target[1].value;

    if (userName === "admin" && password === "123456") {
      this.props.history.push("/movies");
    } else {
      const errors = { ...this.state.errors };
      errors.username = "Username may be incorrect";
      errors.password = "Password may be incorrect";
      this.setState({ ...this.state, errors });
    }
    console.log({ userName, password });
  };

  validateInput = (name, value) => {
    if (name === "username") {
      if (value.trim() === "") return "Username must not be empty";
    }
    if (name === "password") {
      if (value.trim() === "") return "Password must not be empty";
    }
    return "";
  };

  handleChange = (e) => {
    const name = e.currentTarget.name;
    const value = e.target.value;

    const error = this.validateInput(name, value);
    const errors = { ...this.state.user };

    errors[name] = error;

    const user = { ...this.state.user };
    user[name] = value;

    this.setState({ user, errors });
  };

  render() {
    return (
      <div className="container mx-auto w-50">
        <form className="mt-5" onSubmit={this.handleSumbit}>
          <div className="mb-3">
            <Input
              label="Username"
              type="text"
              id="username"
              name="username"
              value={this.state.user.username}
              onChange={(e) => this.handleChange(e)}
              errors={this.state.errors}
            />
          </div>
          <div className="mb-3">
            <Input
              label="Password"
              type="password"
              id="password"
              name="password"
              value={this.state.user.password}
              onChange={(e) => this.handleChange(e)}
              errors={this.state.errors}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Log In
          </button>
        </form>
      </div>
    );
  }
}
