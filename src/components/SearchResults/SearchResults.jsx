import React from "react";
import styles from "./SearchResults.module.css";
import { FiChevronLeft } from "react-icons/fi";
function SearchResults(props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.back_btn_wrapper}>
          <FiChevronLeft className={styles.back_button} />
          <a href="/">Home</a>
        </span>
      </div>{" "}
      <h1>
        Search results for {""}
        <span style={{ color: "Yellow" }} span="true">
          {props.searchValue.charAt(0).toUpperCase() +
            props.searchValue.slice(1)}
        </span>
        .
      </h1>
      <div className={styles.results}>
        {props.data.map((movie, index) => {
          return (
            <div className={styles.movie_card} key={index}>
              <div className={styles.movie_poster}>
                <img
                  src={movie.Poster}
                  alt="Movie Poster"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://image.freepik.com/free-vector/404-found-vector-flat-concept-illustration_97231-125.jpg";
                  }}
                />
              </div>
              <div className={styles.movie_details}>
                <p>{movie.Title}</p>
                <h5>Year: {movie.Year}</h5>
                <h5 className={styles.type}>
                  {movie.Type.charAt(0).toUpperCase() + movie.Type.slice(1)}
                </h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default SearchResults;
