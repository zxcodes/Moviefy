import { FiChevronLeft } from "react-icons/fi";
import styles from "./Error.module.css";
import no_data from "assets/SVGs/no_data.svg";
function Error() {
  return (
    <div className={styles.error}>
      <span className={styles.span}>
        <FiChevronLeft className={styles.back_icon} />
        <a href="/">Go back</a>
      </span>
      <img src={no_data} alt="No data SVG" />
      <h3>Movie not found. Check the movie name and try again!🙁</h3>
    </div>
  );
}
export default Error;
