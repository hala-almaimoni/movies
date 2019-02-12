import React, { Component } from 'react';
import Review from './reviw'
import Cast from '././Cast'

class Movie extends Component {
    render() {
        const castDetails = this.props.movie.cast
        const actors = castDetails.map(actor => <Cast actor={actor} />)
        return (
            <div>

                <h2>{this.props.movie.title}</h2>
                <img src={this.props.movie.poster} />
                <div>
                    <strong>Rating: {this.props.movie.rating}</strong>
                </div>
                <p>Description: {this.props.movie.description}</p>
                <h4>Director: {this.props.movie.director}</h4>
                <Review />
                Cast: <ul>
                    {actors}
                </ul>
            </div>
        );
    }
}
export default Movie;
