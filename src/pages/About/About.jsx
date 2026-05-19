import styles from "./About.module.scss";

const VALUES = [
  {
    title: "La technique avant tout",
    text: "Le smash burger n'est pas une mode. C'est une méthode qui maximise la réaction de Maillard et crée une croûte impossible à obtenir autrement.",
  },
  {
    title: "Des produits locaux",
    text: "Bœuf charolais de Haute-Garonne, fromages d'Occitanie, légumes de producteurs du marché du Capitole. On connaît nos fournisseurs par leur prénom.",
  },
  {
    title: "Zéro compromis",
    text: "On ne prépare rien à l'avance. Chaque galette est smashée à la commande. Si ça prend 8 minutes, c'est parce que ça mérite 8 minutes.",
  },
];

export default function About() {
  return (
    <div className={styles.page}>

      <div className={styles.top}>
        <div className="container">
          <span className="section-label">Notre histoire</span>
          <h1 className={styles.heading}>
            Nés d'une obsession<br />pour le burger parfait
          </h1>
        </div>
      </div>

      <div className="container">

        <div className={styles.story}>
          <div className={styles.photo}>
            <img
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80"
              alt="L'intérieur du restaurant SuperSmash"
            />
          </div>
          <div className={styles.text}>
            <span className="section-label">2022 — Toulouse</span>
            <h2 className={styles.subtitle}>Comment tout a commencé</h2>
            <p>
              SuperSmash est né en 2022 d'une idée simple : Toulouse méritait un vrai smash burger.
              Pas une imitation, pas un burger "tendance". Un burger construit autour d'une technique
              précise — écraser la galette sur une plancha brûlante pour créer cette croûte
              caramélisée qui change tout.
            </p>
            <p>
              Romain et Léa, les deux fondateurs, ont passé 8 mois à tester des recettes avant
              d'ouvrir. Des kilos de bœuf charolais, des dizaines de variantes de sauce, trois
              versions du pain brioché maison. Jusqu'à ce que ce soit parfait.
            </p>
            <p>
              Aujourd'hui, SuperSmash c'est 14 rue des Garonnelles, une équipe de 6 passionnés,
              et un seul objectif : que chaque burger qui sort de la plancha soit le meilleur
              que vous ayez mangé.
            </p>
          </div>
        </div>

        <div className={styles.values}>
          <span className="section-label">Ce en quoi on croit</span>
          <div className={styles.valueGrid}>
            {VALUES.map((v) => (
              <div key={v.title} className={styles.valueCard}>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
