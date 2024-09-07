import { Link } from "react-router-dom";
import style from "./Header.module.css";
import PropTypes from "prop-types";

function Header({ cart }) {
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className={style.headerNavbar}>
      <div className={style.leftNav}>
        <div className={style.logo}>Foody</div>
        <nav>
          <ul className={style.navList}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Store">Store</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={style.cart}>
        <Link to="/Cart" className={style.cartLink}>
          <img src="../src/icons/shopping-bag.svg" alt="Shopping bag" />
          {cartItemCount > 0 && (
            <span className={style.cartCount}>{cartItemCount}</span>
          )}
        </Link>
      </div>
    </header>
  );
}

Header.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Header;
