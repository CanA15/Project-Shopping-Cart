import { useOutletContext } from "react-router-dom";
import styles from "./Cart.module.css";

function Cart() {
  const { cart, updateCartItemQuantity, removeFromCart, cartTotal } =
    useOutletContext();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Your Cart</h1>
      {cart.map((product) => (
        <div key={product.id} className={styles.cartItem}>
          <img
            src={product.image}
            alt={product.name}
            className={styles.itemImage}
          />
          <div className={styles.itemInfo}>
            <h2 className={styles.itemInfoTitle}>{product.name}</h2>
            <p>Price: ${product.price.toFixed(2)}</p>
            <div className={styles.quantityControl}>
              <button
                onClick={() =>
                  updateCartItemQuantity(product.id, product.quantity - 1)
                }
              >
                -
              </button>
              <span className={styles.quantity}>{product.quantity}</span>
              <button
                onClick={() =>
                  updateCartItemQuantity(product.id, product.quantity + 1)
                }
              >
                +
              </button>
            </div>
            <div className={styles.removeItemButton}>
              <button onClick={() => removeFromCart(product.id)}>Remove</button>
            </div>
          </div>
        </div>
      ))}
      <div className={styles.total}>
        <h2 className={styles.totalText}>Total: ${cartTotal.toFixed(2)}</h2>
      </div>
    </div>
  );
}

export default Cart;
