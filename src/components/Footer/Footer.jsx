import { Link } from "react-router-dom";
import { infos } from "../../data/menu";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>

        <div>
          <span className={styles.logo}>Super<em>Smash</em></span>
          <p className={styles.tagline}>{infos.tagline}</p>
          <a href={infos.social.instagram} className={styles.instagramLink} target="_blank" rel="noreferrer">
            Instagram →
          </a>
        </div>

        <div className={styles.col}>
          <h4>Navigation</h4>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/about">Notre histoire</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Horaires</h4>
          <ul className={styles.hoursList}>
            {infos.hours.map((h) => (
              <li key={h.days}>
                <span className={styles.hoursDay}>{h.days}</span>
                <span>{h.midi}</span>
                {h.soir === "Fermé"
                  ? <span className={styles.hoursClosed}>Soir fermé</span>
                  : <span>{h.soir}</span>
                }
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Contact</h4>
          <ul className={styles.contactList}>
            <li>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              {infos.address}
            </li>
            <li>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6.09 6.09l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <a href={`tel:${infos.phone.replace(/\s/g, "")}`}>{infos.phone}</a>
            </li>
            <li>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <a href={`mailto:${infos.email}`}>{infos.email}</a>
            </li>
          </ul>
        </div>

      </div>

      <div className={styles.bottom}>
        <div className="container">
          <span>© {new Date().getFullYear()} SuperSmash — Toulouse</span>
          <span>Projet fictif — développé par Maxime Augui</span>
        </div>
      </div>
    </footer>
  );
}
