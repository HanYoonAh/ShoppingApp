import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
function NavBar() {
  return (
    <div>
      <nav className={styles.nav_main_container}>
        <Link to="/">
          <p className={styles.main_logo}>GeethSpace</p>
        </Link>
        <ul className={styles.nav_container}>

          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/wishlist">WishList</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
