import { useState } from "react";
import { menuItems } from "../../data/menu";
import MenuCard from "../../components/MenuCard/MenuCard";
import styles from "./Menu.module.scss";

const FILTERS = [
  { key: "all",            label: "Tout le menu" },
  { key: "burger",         label: "🍔 Burgers" },
  { key: "accompagnement", label: "🍟 Accompagnements" },
  { key: "dessert",        label: "🍪 Desserts" },
];

export default function Menu({ addToCart }) {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all" ? menuItems : menuItems.filter((i) => i.category === active);

  return (
    <div className={styles.page}>
      <div className={styles.top}>
        <div className="container">
          <span className="section-label">SuperSmash — Toulouse</span>
          <h1 className={styles.heading}>Notre menu</h1>
          <p className={styles.subheading}>
            Tout est préparé à la commande. Rien n'est réchauffé.
          </p>
        </div>
      </div>

      <div className="container">
        <div className={styles.filterBar}>
          {FILTERS.map((f) => (
            <button
              key={f.key}
              className={`${styles.filterButton} ${active === f.key ? styles.filterActive : ""}`}
              onClick={() => setActive(f.key)}
            >
              {f.label}
              <span className={styles.filterCount}>
                {f.key === "all"
                  ? menuItems.length
                  : menuItems.filter((i) => i.category === f.key).length}
              </span>
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filtered.map((item) => (
            <MenuCard key={item.id} item={item} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </div>
  );
}
