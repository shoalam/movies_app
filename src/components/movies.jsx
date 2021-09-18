import React, { Component } from "react";
import Pagination from "./pagination";

export default class Movies extends Component {
  state = {
    movies: [
      {
        title: "The Shawshank Redemption",
        rank: "1",
        id: "tt0111161",
        rating: 5,
      },
      {
        title: "The Godfather",
        rank: "2",
        id: "tt0068646",
        rating: 5,
      },
      {
        title: "The Godfather: Part II",
        rank: "3",
        id: "tt0071562",
        rating: 5,
      },
      {
        title: "Pulp Fiction",
        rank: "4",
        id: "tt0110912",
        rating: 5,
      },
      {
        title: "The Good, the Bad and the Ugly",
        rank: "5",
        id: "tt0060196",
        rating: 5,
      },
      {
        title: "The Dark Knight",
        rank: "6",
        id: "tt0468569",
        rating: 5,
      },
      {
        title: "12 Angry Men",
        rank: "7",
        id: "tt0050083",
        rating: 5,
      },
      {
        title: "Schindler's List",
        rank: "8",
        id: "tt0108052",
        rating: 5,
      },
      {
        title: "The Lord of the Rings: The Return of the King",
        rank: "9",
        id: "tt0167260",
        rating: 5,
      },
      {
        title: "Fight Club",
        rank: "10",
        id: "tt0137523",
        rating: 5,
      },
      {
        title: "Star Wars: Episode V - The Empire Strikes Back",
        rank: "11",
        id: "tt0080684",
        rating: 5,
      },
      {
        title: "The Lord of the Rings: The Fellowship of the Ring",
        rank: "12",
        id: "tt0120737",
        rating: 5,
      },
      {
        title: "One Flew Over the Cuckoo's Nest",
        rank: "13",
        id: "tt0073486",
        rating: 5,
      },
      {
        title: "Inception",
        rank: "14",
        id: "tt1375666",
        rating: 5,
      },
      {
        title: "Goodfellas",
        rank: "15",
        id: "tt0099685",
        rating: 5,
      },
      {
        title: "Star Wars",
        rank: "16",
        id: "tt0076759",
        rating: 5,
      },
      {
        title: "Seven Samurai",
        rank: "17",
        id: "tt0047478",
        rating: 5,
      },
    ],
    activePage: 1,
    pageCount: 5,
  };

  handleClickPage = (page) => {
    this.setState({ ...this.state, activePage: page });
  };

  render() {
    const { movies, activePage, pageCount } = this.state;
    const start = (activePage - 1) * pageCount;
    const updatedMovies = movies.slice(start, start + pageCount);
    return (
      <div className="container mx-auto">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Sl</th>
              <th scope="col">Id</th>
              <th scope="col">Ranking</th>
              <th scope="col">Rating</th>
              <th scope="col">Your Rating</th>
            </tr>
          </thead>
          <tbody>
            {updatedMovies.map((movie, idx) => (
              <tr>
                <td>{movie.rank}</td>
                <td>{movie.id}</td>
                <td>{movie.title}</td>
                <td>{movie.rating}</td>
                <td>{movie.your_rating ? "Rated" : "Unrated"}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          totalItems={this.state.movies.length}
          pageCount={this.state.pageCount}
          activePage={this.state.activePage}
          onClickPage={this.handleClickPage}
        />
      </div>
    );
  }
}
