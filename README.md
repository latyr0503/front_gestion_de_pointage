# Projet Next.js

Ce projet est une application web moderne construite avec **Next.js 13**, utilisant **TypeScript** et intégrant plusieurs fonctionnalités avancées.
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

## Gestion des Rôles Utilisateurs

### Rôles Disponibles

Le système utilise deux niveaux de rôles principaux :

- **USER** : Rôle par défaut pour tous les utilisateurs inscrits
- **ADMIN** : Rôle avec accès aux fonctionnalités administratives

### Inscription et Attribution des Rôles

1. **Inscription Standard**

   - Tous les utilisateurs s'inscrivant via la page d'inscription (`/register`) sont automatiquement attribués au rôle `USER`
   - Ce rôle permet l'accès aux fonctionnalités de base :
     - absence (ajouter/supprimer/modifier)
     - Consultation de son historique de demande d'absence et modification

2. **Promotion en Administrateur**
   - L'jout d'un administrateur ne peut se faire que via l'API
   - Utilisation de la documentation Swagger pour modifier le rôle :
   1. Accéder à l'interface Swagger (`/api-docs`)
   2. Creer un admin via l'endpoint (`/auth/signup`)
   3. Changer le role de `USER` à `ADMIN`
   - Ce rôle permet l'accès aux fonctionnalités tel que :
    - ajouter des pointages (pour l'ajout des pointage seul les utlisateurs incrit sur la base de donnes pourront etre ajouter, dont pour ajouter un pointage faut creer des comptes utlisateurs)
    - modifier des pointages
    - suppimer des pointages
    - Consultation des historique des demandes d'absence
    - Consulter la liste des utilisateurs

### Exemple de Modification de Rôle via Swagger

```json
{
  "role": "ADMIN"
}
```

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
