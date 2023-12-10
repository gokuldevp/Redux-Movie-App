import React from "react";
import { addFavorites, removeFavorites } from "../actions";

class MovieCard extends React.Component {
    // Handles the click event for adding or removing a movie from favorites
    handleFavouriteClick = () => {
        const { movie, isFavorites } = this.props;
        if (isFavorites) {
            // If the movie is already a favorite, remove it
            this.props.dispatch(removeFavorites(movie));
        } else {
            // If the movie is not a favorite, add it
            this.props.dispatch(addFavorites(movie));
        }
    }

    render() {
        const { movie, isFavorites } = this.props;

        return (
            <div className="movie-card">
                <div className="left">
                    <img alt="movie-poster" src={movie.Poster} />
                </div>
                <div className="right">
                    <div className="title">{movie.Title}</div>
                    <div className="plot">{movie.Plot}</div>
                    <div className="footer">
                        <div className="rating">{movie.imdbRating}</div>
                        {isFavorites ?
                            <button className="unfavourite-btn" onClick={this.handleFavouriteClick}>Unfavourite</button> :
                            <button className="favourite-btn" onClick={this.handleFavouriteClick}>Favourite</button>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieCard;
