import React, { Component } from "react";
import $ from "jquery";
import "./App.css";
import Filter from "./Filter";


export class Popular extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.filterSearch("life");
  }

  filterSearch(filSearch) {
    console.log("Search results based on user input");
    const urlString =
      "https://api.themoviedb.org/3/search/tv?api_key=fad8316f1c015b67eddb9f2ce8419e6d&query=" +
      filSearch;
    $.ajax({
      url: urlString,
      success: searchResults => {
        console.log("Data fetched successfully");
        const results = searchResults.results;

        var fltSection = [];

        results.forEach(movie => {
          movie.poster_src =
            "https://image.tmdb.org/t/p/w185" + movie.poster_path;
          const moviefilRow = <Filter key={movie.id} movie={movie} />;
          fltSection.push(moviefilRow);
        });
        this.setState({ rows: fltSection });
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data");
      }
    });
  }

  filtersearchChangeHandler(e) {
    console.log(e.target.value);
    const filSearch = e.target.value;
    this.filterSearch(filSearch);
  }

  render() {
    return (
      <div>
        {this.state === {} ? (
          <h1 className="hypertext">popular movies loading....</h1>
        ) : (
            <h1 className="hypertext">Release dates ....</h1>
          )}
        <input
          className="searchInput"
          onChange={this.filtersearchChangeHandler.bind(this)}
          placeholder="Search Movie"
          type="text"
        />
        {this.state.rows}
      </div>
    );
  }
}

export default Popular;
