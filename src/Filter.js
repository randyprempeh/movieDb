import React, { Component } from 'react'

export class Filter extends Component {
    viewfilterMovie() {
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id;
        window.location.href = url;
    }
    render() {
        return (
            <div className="filter-wrapper" key={this.props.movie.id}>
                <div className="filter-shell">
                    <div className="filterimg-wrap">
                        <img
                            src={this.props.movie.poster_src}
                            alt="posterthumb"
                        />
                    </div>
                    <div className="filterinfo-wrap">
                        <div className="filtermovie-title">{this.props.movie.name}</div>
                        <p>{this.props.movie.first_air_date}</p>
                        <input className="filter-input"
                            type="button"
                            onClick={this.viewfilterMovie.bind(this)}
                            value="View"
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Filter;
