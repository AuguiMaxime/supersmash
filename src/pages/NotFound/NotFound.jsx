import { Link } from "react-router-dom";
import styles from "./NotFound.module.scss";

export default function NotFound() {
  return (
    <div className={styles.page}>
      <span className={styles.code}>404</span>
      <h1 className={styles.title}>Cette page n'existe pas</h1>
      <p className={styles.sub}>On a cherché partout. Même derrière la plancha.</p>
      <Link to="/" className="btn-primary">Retour à l'accueil</Link>
    </div>
  );
}
