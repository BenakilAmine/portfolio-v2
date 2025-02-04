# 🌌 Portfolio v2

Bienvenue sur mon portfolio, une application web moderne développée avec **Next.js**, **React** et **Three.js**. Ce projet présente mes compétences et mes réalisations de manière interactive et élégante.

## 🚀 Technologies Utilisées

- **Frontend Framework**: Next.js 15.0.0
- **Langage**: TypeScript
- **Style**: Tailwind CSS
- **Graphiques 3D**: Three.js avec React Three Fiber
- **Animations**: Framer Motion
- **Icônes**: React Icons & Heroicons
- **État**: SWR avec cache local persistant

## ✨ Fonctionnalités

- Design moderne et responsive
- Animations fluides et interactives
- Effets 3D captivants
- Fond d'écran dynamique avec étoiles et trou noir
- Sections dédiées pour projets et compétences
- Navigation fluide et optimisée

## 🔧 Installation

1. **Clonez le repository** :
   ```bash
   git clone [votre-repo-url]
   cd portfolio-v2
   ```

2. **Installez les dépendances** :
   ```bash
   yarn install
   ```

3. **Lancez le serveur de développement** :
   ```bash
   yarn dev
   ```
   L'application sera accessible à l'adresse `http://localhost:3000`.

## 📦 Scripts Disponibles

- `yarn dev` - Démarre le serveur de développement
- `yarn build` - Crée une version de production
- `yarn start` - Lance la version de production
- `yarn lint` - Vérifie le code avec ESLint

## 🏗️ Structure du Projet

```
portfolio-v2/
├── app/                  # App Router de Next.js
├── components/          
│   ├── main/            # Composants principaux
│   ├── shared/          # Composants partagés
├── constants/           # Constants et données
├── public/              # Assets statiques
└── utils/               # Utilitaires
```

## 🔄 Optimisations Réalisées

### Optimisation des Types
- ✅ Typage strict pour SWR et Three.js
- ✅ Élimination des types `any`

### Optimisation des Images
- ✅ Composant `OptimizedImage` avec chargement progressif et effets de flou

### Optimisation des Modèles 3D
- ✅ Composant `OptimizedStars` avec gestion améliorée des références et animations interactives

### Performance
- ✅ Utilisation de React Suspense pour un chargement fluide
- ✅ Système de cache SWR optimisé

## 🗺️ Roadmap

### ⚡ Optimisations Prioritaires
- [x] Chargement progressif des images
- [x] Optimisation des modèles 3D
- [x] Système de cache (SWR)

### 🎨 UX/UI
- [ ] Amélioration des effets de particules
- [ ] Timeline interactive

### 💻 Fonctionnalités Techniques
- [ ] Internationalisation (i18n)
- [ ] Tests unitaires

### 📊 Analytics & SEO
- [ ] Google Analytics
- [ ] Sitemap automatique

## 📸 Captures d'écran

![Bannière du projet](/images/banniere.png)
![Thème Clair](/images/theme_clair.png)
![Thème Sombre](/images/theme_sombre.png)

---

Merci de visiter mon portfolio ! N'hésitez pas à me contacter pour toute question ou collaboration.
