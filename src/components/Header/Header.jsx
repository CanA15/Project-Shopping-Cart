import { Link } from "react-router-dom";
import style from "./Header.module.css";

function Header() {
  return (
    <header className={style.headerNavbar}>
      <div className={style.leftNav}>
        <div className={style.logo}>Foody</div>
        <nav>
          <ul className={style.navList}>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/Store">Store</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={style.cart}>
        <img src="../src/icons/shopping-bag.svg" alt="Shopping bag" />
      </div>
    </header>
  );
}

export default Header;
