import React, { Component } from 'react'
import $ from "jquery";
import Tvsection from './Tvsection';

export class Seasons extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.seasonTv();
    }


    seasonTv() {
        const series = "https://api.themoviedb.org/3/tv/airing_today?api_key=fad8316f1c015b67eddb9f2ce8419e6d&language=en-US&page=1";
        /*  console.log(series); */
        $.ajax({
            url: series,
            success: searchResults => {
                console.log("TV seasons fetched successfully");
                const results = searchResults.results;

                const newSeries = [];

                results.forEach(tv => {
                    tv.poster_src =
                        "https://image.tmdb.org/t/p/w185" + tv.poster_path;
                    const tvRow = <Tvsection key={tv.id} tv={tv} />
                    newSeries.push(tvRow);
                });
                this.setState({ rows: newSeries });
            },
            error: (xhr, status, err) => {
                console.error("Failed to fetch data");
            }
        });
    }

    render() {
        return (
            <div>
                <h1 className="hypertext">Series and more</h1>
                {this.state.rows}

            </div>
        )
    }
}

export default Seasons
