# Portfolio v2

Ce portfolio est une application web moderne développée avec Next.js, React et Three.js, présentant mes projets et compétences de manière interactive et élégante.

## 🚀 Technologies Utilisées

- **Frontend Framework**: Next.js 15.0.0
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js avec React Three Fiber
- **Animations**: Framer Motion
- **Icons**: React Icons & Heroicons
- **Autres**: React Intersection Observer pour les animations au défilement

## ✨ Fonctionnalités

- Design moderne et responsive avec thème spatial
- Animations fluides avec Framer Motion
- Effets 3D avec Three.js
- Fond d'écran interactif avec étoiles et trou noir
- Sections pour projets et compétences
- Navigation fluide
- Optimisé pour les performances
- Images optimisées avec chargement progressif

## 🔧 Configuration

Le projet utilise :
- TypeScript pour le typage statique
- ESLint pour le linting
- Tailwind CSS pour le styling
- PostCSS pour le processing CSS
- Composants optimisés pour les images

## 📱 Compatibilité

L'application est optimisée pour :
- Navigateurs modernes (Chrome, Firefox, Safari, Edge)
- Appareils mobiles et tablettes (Design responsive)
- Différentes tailles d'écran

## 🛠️ Installation

1. Clonez le repository :
```bash
git clone [votre-repo-url]
cd portfolio-v2
```

2. Installez les dépendances :
```bash
yarn install
```

3. Lancez le serveur de développement :
```bash
yarn dev
```

L'application sera accessible à l'adresse `http://localhost:3000`

## 📦 Scripts Disponibles

- `yarn dev` - Lance le serveur de développement
- `yarn build` - Crée une version de production
- `yarn start` - Lance la version de production
- `yarn lint` - Vérifie le code avec ESLint

## 🏗️ Structure du Projet

```
portfolio-v2/
├── app/                  # App Router de Next.js
├── components/          
│   ├── main/            # Composants principaux
│   │   ├── Hero.tsx     # Section d'accueil
│   │   ├── Navbar.tsx   # Navigation
│   │   ├── Projects.tsx # Section projets
│   │   ├── Skills.tsx   # Section compétences
│   │   └── ...
│   └── shared/          # Composants partagés
│       └── OptimizedImage.tsx # Composant d'image optimisé
├── constants/           # Constants et données
│   └── images.ts       # Configuration des images
├── public/             # Assets statiques
└── utils/              # Utilitaires
```

## 🔄 Optimisations Réalisées

### Optimisation des Images
- ✅ Composant `OptimizedImage` créé avec :
  - Chargement progressif des images
  - Effet de flou pendant le chargement
  - Placeholder animé
  - Optimisation automatique des formats
  - Support responsive avec `sizes`
  - Qualité d'image optimisée (90%)
- ✅ Configuration centralisée des images dans `constants/images.ts`
- ✅ Dimensions et textes alternatifs standardisés
- ✅ Intégration dans les cartes de projets

### Optimisation des Modèles 3D
- ✅ Composant `OptimizedStars` créé avec :
  - Utilisation de `useMemo` pour la génération des étoiles
  - Memoization des composants pour éviter les re-rendus inutiles
  - Gestion optimisée du cycle de vie avec `useEffect`
  - Chargement conditionnel côté client
  - Support de la personnalisation (nombre d'étoiles, rayon)
  - Optimisation des performances de rendu Three.js
  - Animation interactive basée sur le scroll
  - Effet de parallaxe spatial
- ✅ Réduction de la complexité du code
- ✅ Meilleure gestion de la mémoire
- ✅ Typage TypeScript strict

### Optimisation du Chargement et de la Performance
- ✅ React Suspense boundaries implémentées avec :
  - Composant `LoadingSpinner` avec animation spatiale
  - Chargement progressif des sections
  - Gestion élégante des états de chargement
- ✅ Système de cache avec SWR :
  - Configuration optimisée pour les performances
  - Cache local persistant
  - Revalidation intelligente
  - Gestion des erreurs améliorée

## 🗺️ Roadmap

Voici les améliorations prévues pour le portfolio :

### ⚡ Optimisations Prioritaires
- [x] Chargement progressif des images avec next/image
- [x] Optimisation des modèles 3D et effets spatiaux
- [x] React Suspense boundaries pour les chargements
- [x] Système de cache (SWR/React Query)
- [x] Optimisation des animations spatiales

### 🎨 UX/UI
- [ ] Amélioration des effets de particules stellaires
- [ ] Timeline interactive façon constellation
- [ ] Système de filtres pour les projets avec effets spatiaux
- [ ] Curseur personnalisé style "gravitationnel"
- [ ] Transitions de page avec effets de distorsion spatiale

### 💻 Fonctionnalités Techniques
- [ ] Internationalisation (i18n) multi-langues
- [ ] Tests unitaires (Jest + React Testing Library)
- [ ] Blog technique avec MDX
- [ ] Système de commentaires (Giscus)

### 📝 Contenu
- [ ] Section "Space Lab" pour expérimentations
- [ ] Galerie de certificats style "constellation"
- [ ] Section témoignages avec thème spatial
- [ ] Études de cas détaillées
- [ ] Section "Stack préférée" avec métaphore spatiale

### 🔌 Intégrations
- [ ] Formulaire de contact avec SendGrid
- [ ] Intégration GitHub automatique
- [ ] Système de newsletter
- [ ] Intégration Dev.to/Medium

### 📊 Analytics & SEO
- [ ] Google Analytics/Plausible
- [ ] Optimisation next-seo
- [ ] Sitemap automatique
- [ ] Schema.org markup

### 🏗️ Infrastructure
- [ ] Pipeline CI/CD
- [ ] Lighthouse CI
- [ ] Preview deployments
- [ ] Environnement de staging
