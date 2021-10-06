import React, { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Form from './form';
import { getMovies } from '../services/movies.service';

export default class Navbar extends Form {
  state = {
    data: { search_query: '' },
    errors: {},
    movies: getMovies(),
  }

  doSubmit = (e) => {

  }

  searchMovies = () => {
    if(this.state.data.search_query.trim() === '') return [];

    return this.state.movies.filter(movie => movie.title.toLowerCase().includes(this.state.data.search_query.toLowerCase()));
  }

  render() {
    const searched_movies = this.searchMovies();

    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img src="/logo.png" alt="" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/movies"
                  >
                    Movies
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/add-movies"
                  >
                    Add Movies
                  </Link>
                </li>
              </ul>
              <form className="d-flex w-50 mx-auto" onSubmit={this.handleSubmit}>
                <div className="input-group">
                  <input
                      className="form-control"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                      name='search_query'
                      onChange={this.handleChange}
                      value={this.state.data.search_query}
                  />
                  <div
                      className={searched_movies.length ? 'card' : 'card d-none'}
                      style={{
                        position: 'absolute',
                        top: 50,
                        width: "18rem"
                      }}>
                    <ul className="list-group list-group-flush">
                      {
                        searched_movies.map((movie, idx) =>
                            <li key={idx}
                                className="list-group-item">{movie.title}</li>)
                      }
                    </ul>
                  </div>
                  <button className="btn btn-warning" type="submit">
                    Search
                  </button>
                </div>
              </form>
              <ul className="navbar-nav d-flex gap-3">
                <li className="nav-item">
                  <Link className="nav-link active" to="/login">
                    Log In
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
