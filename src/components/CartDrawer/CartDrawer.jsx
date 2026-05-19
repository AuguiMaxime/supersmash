import styles from "./CartDrawer.module.scss";

export default function CartDrawer({ cart, open, onClose, onRemove, onUpdateQty }) {
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <>
      <div
        className={`${styles.overlay} ${open ? styles.overlayVisible : ""}`}
        onClick={onClose}
      />
      <aside className={`${styles.drawer} ${open ? styles.drawerOpen : ""}`}>
        <div className={styles.header}>
          <span className={styles.title}>Votre commande</span>
          <button className={styles.closeButton} onClick={onClose} aria-label="Fermer">✕</button>
        </div>

        {cart.length === 0 ? (
          <div className={styles.empty}>
            <span>🍔</span>
            <p>Votre panier est vide</p>
          </div>
        ) : (
          <>
            <ul className={styles.list}>
              {cart.map((item) => (
                <li key={item.id} className={styles.item}>
                  <img src={item.image} alt={item.name} />
                  <div className={styles.itemInfo}>
                    <p className={styles.itemName}>{item.name}</p>
                    <p className={styles.itemPrice}>{item.price.toFixed(2)} €</p>
                  </div>
                  <div className={styles.qty}>
                    <button onClick={() => onUpdateQty(item.id, item.qty - 1)}>−</button>
                    <span>{item.qty}</span>
                    <button onClick={() => onUpdateQty(item.id, item.qty + 1)}>+</button>
                  </div>
                  <button
                    className={styles.removeButton}
                    onClick={() => onRemove(item.id)}
                    aria-label="Supprimer"
                  >✕</button>
                </li>
              ))}
            </ul>

            <div className={styles.footer}>
              <div className={styles.totalRow}>
                <span>Total</span>
                <span className={styles.totalAmount}>{total.toFixed(2)} €</span>
              </div>
              <button className={styles.orderButton}>
                Commander — site vitrine 😉
              </button>
              <p className={styles.notice}>
                Ceci est un site vitrine. Appelez-nous au{" "}
                <a href="tel:0561428733">05 61 42 87 33</a>
              </p>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
