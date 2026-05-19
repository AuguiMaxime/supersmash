# 🍔 SuperSmash — Site vitrine restaurant

Site vitrine fictif pour un restaurant de smash burgers toulousain, développé avec React + Vite + Sass.  
Projet réalisé dans le cadre d'un portfolio développeur web Full-Stack.

---

## 🔗 Liens

- **Portfolio** : [portfolio-sigma-bay-72.vercel.app](https://portfolio-sigma-bay-72.vercel.app)
- **GitHub** : [github.com/AuguiMaxime](https://github.com/AuguiMaxime)
- **Démo live** : *(à renseigner après déploiement Vercel)*

---

## 📋 Présentation du projet

SuperSmash est un site vitrine pour un restaurant de smash burgers fictif basé à Toulouse.  
L'objectif est de démontrer la capacité à concevoir et développer un site professionnel complet :
identité visuelle forte, architecture React propre, routing, gestion d'état, responsive design.

### Informations fictives du restaurant

| Champ | Valeur |
|---|---|
| Nom | SuperSmash |
| Adresse | 14 rue des Garonnelles, 31300 Toulouse |
| Téléphone | 05 61 42 87 33 |
| Email | contact@supersmash-toulouse.fr |
| Horaires | Lun–Ven : 11h30–14h30 / 18h30–22h30 |
| | Samedi : 11h30–15h00 / 18h00–23h00 |
| | Dimanche : 12h00–15h00 / soir fermé |

---

## 🛠️ Stack technique

| Technologie | Usage |
|---|---|
| **React 18** | UI et gestion d'état |
| **React Router v6** | Routing côté client |
| **Sass + CSS Modules** | Styles scopés par composant |
| **Vite** | Bundler et serveur de développement |
| **Vercel** | Déploiement |

---

## 📁 Structure du projet

```
supersmash/
├── index.html
├── vite.config.js
├── package.json
├── README.md
└── src/
    ├── main.jsx                  # Point d'entrée React
    ├── App.jsx                   # Router + état global du panier
    ├── styles/
    │   └── main.scss             # Variables, reset, utilitaires globaux
    ├── data/
    │   └── menu.js               # Données : menu, infos restaurant, horaires
    ├── components/
    │   ├── Navbar/
    │   │   ├── Navbar.jsx        # Navigation sticky + menu mobile
    │   │   └── Navbar.module.scss
    │   ├── CartDrawer/
    │   │   ├── CartDrawer.jsx    # Panier latéral (drawer)
    │   │   └── CartDrawer.module.scss
    │   ├── MenuCard/
    │   │   ├── MenuCard.jsx      # Carte produit réutilisable
    │   │   └── MenuCard.module.scss
    │   └── Footer/
    │       ├── Footer.jsx        # Pied de page avec horaires et contact
    │       └── Footer.module.scss
    └── pages/
        ├── Home/
        │   ├── Home.jsx          # Hero, best sellers, atouts, avis, CTA
        │   └── Home.module.scss
        ├── Menu/
        │   ├── Menu.jsx          # Catalogue filtrable par catégorie
        │   └── Menu.module.scss
        ├── About/
        │   ├── About.jsx         # Histoire du restaurant et valeurs
        │   └── About.module.scss
        ├── Contact/
        │   ├── Contact.jsx       # Formulaire avec validation + horaires
        │   └── Contact.module.scss
        └── NotFound/
            ├── NotFound.jsx      # Page 404
            └── NotFound.module.scss
```

---

## ✨ Fonctionnalités

### Navigation
- Navbar fixe avec effet scroll (transparente → fond sombre)
- Menu hamburger responsive sur mobile
- Liens actifs via `NavLink` React Router

### Page d'accueil
- Hero pleine hauteur avec watermark typographique
- Barre de stats (nombre de burgers, provenance, délai, note)
- Section "best sellers" avec 3 cartes produit
- Section atouts (viande française, technique smash, etc.)
- Horaires et adresse avec lien Google Maps
- Avis clients fictifs
- CTA final avec lien vers le menu

### Page Menu
- Affichage de tous les produits (6 burgers, 5 accompagnements, 3 desserts)
- **Filtres par catégorie** avec compteur par filtre
- Grille responsive (3 → 2 → 1 colonnes selon la taille d'écran)

### Panier
- Ajout depuis n'importe quelle carte produit
- Drawer latéral animé avec overlay
- Gestion des quantités (+/−) et suppression
- Total calculé dynamiquement
- Badge compteur dans la navbar
- Message "site vitrine" au moment de commander

### Formulaire de contact
- Validation des champs (nom, email, message)
- Affichage des erreurs inline
- Message de confirmation après envoi

### Responsive
- Breakpoints à 560px, 768px et 900px
- Menu mobile avec hamburger
- Grilles adaptatives sur toutes les pages

---

## 🚀 Installation et lancement

### Prérequis
- Node.js ≥ 18
- npm ≥ 9

### En local

```bash
# 1. Cloner le repo
git clone https://github.com/AuguiMaxime/supersmash.git
cd supersmash

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

Le site est accessible sur `http://localhost:5173`

### Build de production

```bash
npm run build
npm run preview   # pour tester le build localement
```

---

## ☁️ Déploiement sur Vercel

```bash
# Via CLI Vercel
npm install -g vercel
vercel --prod
```

Ou connecter le repo GitHub directement sur [vercel.com](https://vercel.com) — Vercel détecte automatiquement Vite.

Aucune variable d'environnement requise (pas de back-end sur ce projet).

---

## 🗂️ Données — `src/data/menu.js`

Toutes les données du restaurant sont centralisées dans un seul fichier :

```js
// Infos du restaurant
export const infos = { name, tagline, address, phone, email, hours, social }

// Items du menu
export const menuItems = [
  {
    id,          // identifiant unique
    category,    // "burger" | "accompagnement" | "dessert"
    name,        // nom du produit
    description, // description
    price,       // nombre (ex: 9.90)
    badge,       // string | null (ex: "Best seller")
    image,       // URL Unsplash
  }
]
```

> **Architecture prête pour un back-end** : les imports locaux de `menu.js` peuvent être remplacés par des appels `fetch()` vers une API REST Node.js/Express sans modifier les composants.

---

## 🎨 Charte graphique

| Élément | Valeur |
|---|---|
| Fond principal | `#0f0d0b` (noir chaud) |
| Fond carte | `#211c15` |
| Accent | `#E8652A` (orange brûlé) |
| Texte principal | `#f0e8dc` |
| Texte secondaire | `#7a6a56` |
| Police titres | Playfair Display (serif) |
| Police corps | Inter (sans-serif) |

---

## 📸 Images

Les photos sont des URLs Unsplash libres de droits, chargées directement sans téléchargement.  
Paramètres utilisés : `?w=600&q=80` pour optimiser le poids.

---

## 👤 Auteur

**Maxime Augui** — Développeur web Full-Stack  
Formation OpenClassrooms · Basé près de Toulouse  
[github.com/AuguiMaxime](https://github.com/AuguiMaxime)

---

*Projet fictif à but pédagogique — SuperSmash n'est pas un vrai restaurant.*
