import React, { Component } from "react";

export class Tvsection extends Component {
  viewTV() {
    const url = "https://www.themoviedb.org/tv/" + this.props.tv.id;
    window.location.href = url;
  }

  render() {
    return (
      <section className="tvWrapper" key={this.props.tv.id}>
        <div className="series-cell">
          <div className="tv-imgwrap">
            <img src={this.props.tv.poster_src} alt="posterthumb" />
          </div>

          <div className="series-details">
            <h4>{this.props.tv.name}</h4>
            <p className="re-date">
              when released: {this.props.tv.first_air_date}
            </p>
            <input
              className="buttonUp"
              type="button"
              onClick={this.viewTV.bind(this)}
              value="View"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Tvsection;
