# RecipeApp

Application web de gestion de recettes construite avec Symfony (back) et React (front).

## Stack technique

- **Back-end** : PHP / Symfony, Doctrine ORM, PostgreSQL
- **Front-end** : React, Vite
- **Autres** : Git, API REST, NelmioCorsBundle

## Fonctionnalités

- [x] Affichage de la liste des recettes
- [x] Ajout d'une recette via formulaire
- [ ] Modification d'une recette
- [ ] Suppression d'une recette

## Installation

### Back-end
```bash
cd backend
composer install
php bin/console doctrine:migrations:migrate
php bin/console doctrine:fixtures:load
symfony serve
```

### Front-end
```bash
cd frontend
npm install
npm run dev
```

## Variables d'environnement

Créer un fichier `.env.local` dans `/backend` et un `.env` dans `/frontend` :

```
# frontend/.env
VITE_API_URL=http://localhost:8000/api/recipe
```
