import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
const Navbar = () => {

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <h1>OptimAlly</h1>
        </div>
        <div className={styles.links}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Chakras">Chakras</Link>
            </li>
            <li>
              <Link to="/Meditation">Meditation</Link>
            </li>
            <li>
              <Link to="/Yoga">Yoga</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
