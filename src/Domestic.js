import React, { Component } from "react";
import "./App.css";
import MovieSection from "./MovieSection";
import $ from "jquery";

export class Domestic extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.performSearch("rush");
  }

  performSearch(searchTerm) {
    console.log("Search results will be based on the moviedb url");
    const urlString =
      "https://api.themoviedb.org/3/search/movie?api_key=fad8316f1c015b67eddb9f2ce8419e6d&query=" +
      searchTerm;
    $.ajax({
      url: urlString,
      success: searchResults => {
        console.log("Data fetched successfully");
        const results = searchResults.results;

        var movieSection = [];

        results.forEach(movie => {
          movie.poster_src =
            "https://image.tmdb.org/t/p/w185" + movie.poster_path;
          const movieRow = <MovieSection key={movie.id} movie={movie} />;
          movieSection.push(movieRow);
        });
        this.setState({ rows: movieSection });
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data");
      }
    });
  }

  searchChangeHandler(e) {
    console.log(e.target.value);
    const searchTerm = e.target.value;
    this.performSearch(searchTerm);
  }

  render() {
    return (
      <div>
        <h1 className="hypertext">Home of Movies</h1>
        <input
          className="searchInput"
          onChange={this.searchChangeHandler.bind(this)}
          placeholder="Search Movie"
          type="text"
        />
        {this.state.rows}
      </div>
    );
  }
}

export default Domestic;
