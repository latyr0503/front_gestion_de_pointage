# Projet Next.js

Ce projet est une application web moderne construite avec Next.js 13, utilisant TypeScript et intégrant plusieurs fonctionnalités avancées.
Elle permet de gérer les pointages des employés, les justifications d'absence, et d'autres fonctionnalités liées à la gestion des utilisateurs.

## 🚀 Technologies Principales

- **Framework**: Next.js 13.5.1
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **UI Components**: Radix UI
- **Form Handling**: React Hook Form avec Zod
- **Charts**: Recharts

## 📦 Installation

1. Clonez le repository :
```bash
git clone https://github.com/latyr0503/front_gestion_de_pointage.git
```

2. Installez les dépendances avec pnpm :
```bash
pnpm install
```

3. Configurez les variables d'environnement :
- Copiez le fichier `.env.example` vers `.env`
- Remplissez les variables d'environnement nécessaires

4. Lancez le serveur de développement :
```bash
pnpm dev
```

## 🛠️ Scripts Disponibles

- `pnpm dev` : Lance le serveur de développement
- `pnpm build` : Crée une version de production
- `pnpm start` : Démarre le serveur de production
- `pnpm lint` : Exécute le linter

## 📁 Structure du Projet

```
├── app/              # Routes et pages de l'application
├── components/       # Composants réutilisables
├── hooks/           # Custom React hooks
├── lib/             # Utilitaires et configurations
├── public/          # Fichiers statiques
├── store/           # Configuration Redux
└── middleware.ts    # Middleware Next.js
```

## 🔐 Authentification

Le projet utilise NextAuth.js pour la gestion de l'authentification. Les configurations se trouvent dans le dossier `app/api/auth`.

## 🎨 UI/UX

- Utilisation de Radix UI pour des composants accessibles
- Thème personnalisable avec next-themes
- Animations avec tailwindcss-animate
- Composants de formulaire avec react-hook-form
- Validation avec Zod

## 📊 Fonctionnalités

- Gestion d'état avec Redux Toolkit
- Tableaux de données interactifs
- Système de drag & drop
- Graphiques et visualisations de données
- Composants modulaires et réutilisables
- Support multithème
- Formulaires validés
- Notifications toast

## 🔧 Configuration

### Variables d'Environnement

Les variables d'environnement suivantes sont requises :

```env
# Exemple de configuration
NEXTAUTH_URL=
NEXTAUTH_SECRET=
# Ajoutez d'autres variables selon vos besoins
```

### Tailwind CSS

Le projet utilise Tailwind CSS avec une configuration personnalisée dans `tailwind.config.ts`.

## 🤝 Contribution

1. Fork le projet
2. Créez votre branche de fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📝 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👥 Auteurs

- Votre Abdoulaye Latyr SENE - latyr0503@gmail.com

## 🙏 Remerciements

- Next.js Team
- Radix UI
- Tous les contributeurs des bibliothèques utilisées 