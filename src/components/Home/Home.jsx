import { useState } from "react";
import styles from "./Home.module.css";
import no_data from "assets/SVGs/no_data.svg";
import SearchResults from "components/SearchResults/SearchResults";
import { GoMarkGithub } from "react-icons/go";

function Home() {
  const [searchInput, setSearchInput] = useState("");
  const [movies, setMovies] = useState([]);
  const API_KEY = process.env.REACT_APP_NOT_SECRET_CODE;

  async function getMovies(e) {
    e.preventDefault();
    const URL = `https://www.omdbapi.com/?s=${searchInput}&apikey=${API_KEY}`;
    if (searchInput !== "") {
      const data = await fetch(URL);
      const fetchedMovies = await data.json();
      setMovies(fetchedMovies.Search);
    }
  }
  if (movies.length === 0) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.content_wrapper}>
          <div className={styles.header_wrapper}>
            <header>Moviefy</header>
            <a href="https://github.com/zxcodes/Moviefy">
              <GoMarkGithub className={styles.github} />
            </a>
          </div>
          <form onSubmit={getMovies}>
            <input
              autoFocus
              required
              type="text"
              placeholder="Search for a movie..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </form>
        </div>
        <div className={styles.no_data}>
          <img src={no_data} alt="No Data Logo" />
          <p>No data!</p>
          <p>Enter a movie name and hit enter.</p>
        </div>
      </div>
    );
  } else {
    return <SearchResults data={movies} searchValue={searchInput} />;
  }
}
export default Home;
