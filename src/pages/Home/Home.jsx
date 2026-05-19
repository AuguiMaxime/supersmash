import { Link } from "react-router-dom";
import { menuItems, infos } from "../../data/menu";
import MenuCard from "../../components/MenuCard/MenuCard";
import styles from "./Home.module.scss";

const HIGHLIGHTS = menuItems
  .filter((i) => i.badge === "Best seller" || i.badge === "Signature" || i.badge === "Coup de feu")
  .slice(0, 3);

const STRENGTHS = [
  { icon: "🥩", title: "Viande 100% française", desc: "Bœuf charolais sélectionné, livré frais chaque matin" },
  { icon: "🔥", title: "Smashé à la plancha", desc: "La technique qui crée la croûte caramélisée parfaite" },
  { icon: "🧀", title: "Fromages affinés", desc: "Cheddar, gouda fumé, raclette — jamais de fromage industriel" },
  { icon: "⚡", title: "Prêt en 8 minutes", desc: "Fait à la commande. On ne prépare rien à l'avance" },
];

const REVIEWS = [
  { name: "Camille R.", stars: 5, text: "Le Brûlé c'est une tuerie, la mayo sriracha est parfaite. On revient toutes les semaines.", date: "il y a 2 semaines" },
  { name: "Thomas M.", stars: 5, text: "Meilleur smash burger de Toulouse, sans hésiter. Les Smash Fries sont incroyables.", date: "il y a 1 mois" },
  { name: "Inès B.", stars: 5, text: "Le Végé m'a convaincue que les burgers végétariens pouvaient être aussi bons. Chapeau !", date: "il y a 3 semaines" },
];

export default function Home({ addToCart }) {
  return (
    <div className={styles.page}>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroBgWord}>SMASH</div>
        <div className={styles.heroAccent} />
        <div className={`container ${styles.heroLayout}`}>
          <div>
            <span className="section-label">Street food — Toulouse</span>
            <h1 className={styles.heroTitle}>
              L'art du<br />
              <em>Smash</em><br />
              Burger
            </h1>
            <p className={styles.heroSub}>
              Galette écrasée à la plancha, cheddar fondu,<br />
              sauce maison. Rien de superflu.
            </p>
            <div className={styles.heroButtons}>
              <Link to="/menu" className="btn-primary">Voir le menu</Link>
              <Link to="/about" className="btn-ghost">Notre histoire</Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <img
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=700&q=80"
              alt="Smash burger SuperSmash"
            />
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <div className={styles.statsBar}>
        <div className={styles.statItem}><strong>12</strong><span>Burgers signature</span></div>
        <div className={styles.statItem}><strong>100%</strong><span>Viande française</span></div>
        <div className={styles.statItem}><strong>±8 min</strong><span>Temps de préparation</span></div>
        <div className={styles.statItem}><strong>4.9 ★</strong><span>Note Google</span></div>
      </div>

      {/* ── Best sellers ── */}
      <section className={styles.section}>
        <div className="container">
          <span className="section-label">Nos signatures</span>
          <div className={styles.sectionHeader}>
            <h2 className="section-title">Les incontournables</h2>
            <Link to="/menu" className={styles.seeAllLink}>Tout le menu →</Link>
          </div>
          <div className={styles.cardGrid}>
            {HIGHLIGHTS.map((item) => (
              <MenuCard key={item.id} item={item} addToCart={addToCart} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Strengths ── */}
      <section className={styles.strengths}>
        <div className="container">
          <span className="section-label">Pourquoi SuperSmash ?</span>
          <h2 className={`section-title ${styles.strengthsTitle}`}>
            La différence,<br />c'est dans les détails
          </h2>
          <div className={styles.strengthGrid}>
            {STRENGTHS.map((s) => (
              <div key={s.title} className={styles.strengthItem}>
                <span className={styles.strengthIcon}>{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Infos pratiques ── */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.infoRow}>
            <div>
              <span className="section-label">Nous trouver</span>
              <h2 className="section-title">Venez nous voir</h2>
              <p className={styles.address}>{infos.address}</p>
              <a href={`tel:${infos.phone.replace(/\s/g, "")}`} className={styles.phoneLink}>
                {infos.phone}
              </a>
              <br />
              <a
                href="https://maps.google.com/?q=14+rue+des+Garonnelles+Toulouse"
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
                style={{ marginTop: "20px", display: "inline-flex" }}
              >
                Ouvrir dans Maps
              </a>
            </div>
            <div>
              <span className="section-label">Horaires</span>
              <table className={styles.hoursTable}>
                <tbody>
                  {infos.hours.map((h) => (
                    <tr key={h.days}>
                      <td>{h.days}</td>
                      <td>{h.midi}</td>
                      <td>{h.soir}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section className={styles.reviews}>
        <div className="container">
          <span className="section-label">Ce qu'ils en disent</span>
          <h2 className="section-title">Avis de nos clients</h2>
          <div className={styles.reviewGrid}>
            {REVIEWS.map((r) => (
              <div key={r.name} className={styles.reviewCard}>
                <div className={styles.reviewStars}>{"★".repeat(r.stars)}</div>
                <p className={styles.reviewText}>"{r.text}"</p>
                <div className={styles.reviewFooter}>
                  <strong>{r.name}</strong>
                  <span>{r.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta}>
        <div className="container">
          <h2 className={styles.ctaTitle}>Prêt à smasher ?</h2>
          <p className={styles.ctaSub}>Venez au {infos.address} ou appelez-nous</p>
          <div className={styles.ctaButtons}>
            <Link to="/menu" className="btn-primary">Composer mon menu</Link>
            <a href={`tel:${infos.phone.replace(/\s/g, "")}`} className="btn-ghost">{infos.phone}</a>
          </div>
        </div>
      </section>

    </div>
  );
}
