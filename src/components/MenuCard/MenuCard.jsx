import styles from "./MenuCard.module.scss";

export default function MenuCard({ item, addToCart }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <img src={item.image} alt={item.name} loading="lazy" />
        {item.badge && <span className={styles.badge}>{item.badge}</span>}
      </div>
      <div className={styles.body}>
        <h3 className={styles.name}>{item.name}</h3>
        <p className={styles.desc}>{item.description}</p>
        <div className={styles.footer}>
          <span className={styles.price}>{item.price.toFixed(2)} €</span>
          <button
            className={styles.addButton}
            onClick={() => addToCart(item)}
            aria-label={`Ajouter ${item.name} au panier`}
          >
            + Ajouter
          </button>
        </div>
      </div>
    </article>
  );
}
