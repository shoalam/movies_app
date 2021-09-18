import React, { Component } from "react";

export default class LogIn extends Component {
  state = {
    user: { username: "", password: "" },
  };
  handleSumbit = (e) => {
    e.preventDefault();
    const userName = e.target[0].value;
    const password = e.target[1].value;

    console.log({ userName, password });
  };

  handleChange = (e) => {
    const name = e.currentTarget.name;
    const value = e.target.value;
    const updatedUser = { ...this.state.user };
    updatedUser[name] = value;

    this.setState({ user: updatedUser });
  };
  render() {
    return (
      <div className="container mx-auto w-50">
        <form className="mt-5">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">
            Log In
          </button>
        </form>
      </div>
    );
  }
}
