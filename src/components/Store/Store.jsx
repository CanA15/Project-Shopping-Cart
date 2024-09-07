import styles from "./Store.module.css";
import { useOutletContext } from "react-router-dom";

function Store() {
  const { products, addToCart } = useOutletContext();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Items ({products.length})</h1>
      <div className={styles.grid}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <div className={styles.imageContainer}>
              <img
                src={product.image}
                alt={product.name}
                className={styles.productImage}
              />
            </div>
            <div className={styles.productInfo}>
              <h2 className={styles.productName}>{product.name}</h2>
              <p className={styles.productSize}>{product.size}</p>
              <div className={styles.priceContainer}>
                <span className={styles.price}>
                  ${product.price.toFixed(2)}
                </span>
                <button
                  className={styles.addToCartButton}
                  onClick={() => addToCart(product)}
                >
                  <img
                    className={styles.cartIcon}
                    src="./icons/shopping-bag.svg"
                    alt="Add to cart"
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Store;
