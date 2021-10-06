import React, { Component } from "react";
import Input from "./input";
import Form from "./form";

export default class SignUp extends Form {
  state = {
    user: { name: "", email: "", username: "", password: "" },
    errors: { name: "", email: "", username: "", password: "" },
    records: [],
  };

  handleChange = (e) => {
    e.preventDefault();
    const name = e.currentTarget.name;
    const value = e.target.value;

    const user = { ...this.state.user };
    user[name] = value;
    this.setState({ user });
  };

  handleSumbit = (e) => {
    e.preventDefault();
    const name = e.currentTarget.name;
    const value = e.target.value;

    const user = { ...this.state.user };
    user[name] = value;
    console.log([user]);
    const newRecords = { user };

    this.setState({
      records: [...this.state.records, newRecords],
      user: this.state.user,
    });
  };
  render() {
    return (
      <div className="w-25 mx-auto mt-2">
        <div className="text-center">
          <img src="/logo.png" alt="" />
        </div>
        <form className="mt-4" onSubmit={this.handleSumbit}>
          <div className="mb-2">
            <Input
              label="Your Name"
              type="text"
              id="name"
              name="name"
              value={this.state.user.name}
              onChange={(e) => this.handleChange(e)}
              errors={this.state.errors}
            />
          </div>
          <div className="mb-2">
            <Input
              label="Email"
              type="email"
              id="email"
              name="email"
              value={this.state.user.email}
              onChange={(e) => this.handleChange(e)}
              errors={this.state.errors}
            />
          </div>
          <div className="mb-2">
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
          <div className="mb-2">
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
          <div className="mb-3">
            <Input
              label="Confirm Password"
              type="password"
              id="password"
              name="password"
              value={this.state.user.password}
              onChange={(e) => this.handleChange(e)}
              errors={this.state.errors}
            />
          </div>
          <button type="submit" className="btn btn-dark w-100">
            Create A New Account
          </button>
        </form>

        {this.state.records.map((record, i) => (
          <div key={i}>{record[i].name}</div>
        ))}
      </div>
    );
  }
}
