import React from "react";

class MovieSection extends React.Component {
  viewMovie() {
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id;
    window.location.href = url;
  }
  render() {
    return (
      <section className="posterWrapper" key={this.props.movie.id}>
        <div className="movie-shell">
          <div className="image-wrap">
            <img
              id="posterImg"
              src={this.props.movie.poster_src}
              alt="posterthumb"
            />
          </div>
          <div className="info-wrap">
            <div className="movie-title">{this.props.movie.title}</div>
            <p className="movie-overview">{this.props.movie.overview}</p>
            <input className="buttonUp"
              type="button"
              onClick={this.viewMovie.bind(this)}
              value="View"
            />
            <input className="buttonUp"
              type="button" value="play"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default MovieSection;
