import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

export default function Navbar({ totalItems, onCartClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.stuck : ""}`}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          Super<span>Smash</span>
        </Link>

        <nav className={`${styles.nav} ${open ? styles.navOpen : ""}`}>
          <NavLink to="/" end onClick={() => setOpen(false)}>Accueil</NavLink>
          <NavLink to="/menu" onClick={() => setOpen(false)}>Menu</NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)}>Notre histoire</NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
        </nav>

        <div className={styles.actions}>
          <button className={styles.cartButton} onClick={onCartClick} aria-label="Panier">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            {totalItems > 0 && <span className={styles.cartCount}>{totalItems}</span>}
          </button>

          <button
            className={styles.menuToggle}
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}
