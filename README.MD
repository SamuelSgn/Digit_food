
# 📱 Digit Food – Plateforme de gestion de restauration interactive

## 🚧 Projet en cours de redéveloppement

> Ce projet est actuellement en **cours de refonte**. Les maquettes sont presque prêtes. Le développement est mené par deux développeurs :  
> **Samuel SOGLOHOUN** – 📧 samuelsgn8@gmail.com | 📞 +229 66 01 53 87  
> **Ornella FADONOUGBO** – 📧 (à compléter) | 📞 +229 50 08 43 00

---

## 📌 Description du projet

Digit Food est une plateforme web destinée à moderniser la gestion de restaurants en permettant :

- La création de **menus numériques interactifs** accessibles via smartphone, tablette ou ordinateur.
- La **prise de commandes en ligne** directement depuis la table du client.
- La **gestion de paiements**, y compris via des services comme **FedaPay** ou **Celtiis Cash**.
- L’ajout potentiel de nouvelles fonctionnalités comme **la livraison à domicile**.

---

## ⚙️ Stack technique

| Partie             | Technologie                |
|--------------------|----------------------------|
| Frontend           | React.js + Tailwind CSS    |
| Backend            | Laravel (PHP)              |
| Base de données    | MySQL                      |
| Environnement local| XAMPP                      |
| Authentification   | JSON Web Tokens (JWT)      |
| Paiements          | FedaPay, Celtiis Cash      |
| Déploiement        | Vercel (Frontend)          |

---

## 🧱 Structure du projet

### 📂 Frontend (`frontend/`)
- `src/components/` : Composants réutilisables (header, footer, cartes, etc.)
- `src/pages/` : Pages principales (accueil, tableau de bord, menu interactif, etc.)
- `src/services/` : Appels API vers le backend
- `src/styles/` : Fichiers Tailwind et CSS
- `src/utils/` : Fonctions utilitaires

### 📂 Backend (`backend/`)
- `app/Models/` : Modèles Laravel
- `app/Http/Controllers/` : Contrôleurs
- `routes/api.php` : Définition des routes API
- `config/` : Configuration (JWT, FedaPay, etc.)
- `database/migrations/` : Migrations de la base de données
- `resources/views/` : (si interface blade nécessaire pour admin)
- `tests/` : Tests unitaires

---

## 🔐 Authentification & Sécurité

- L’authentification repose sur des **JSON Web Tokens (JWT)**.
- Accès sécurisé au tableau de bord via identifiants.
- Système de permissions (ex : admin, personnel, client).
- Données chiffrées côté serveur.

---

## 📦 Fonctionnalités principales

✅ En production :
- Enregistrement et personnalisation du menu avec images, prix et descriptions.
- Affichage interactif du menu sur tous types d'appareils.
- Gestion des commandes avec suivi en temps réel.
- Choix du mode de paiement (cash ou en ligne).
- Tableau de bord administratif avec statistiques journalières.

🚧 À venir :
- Option de **livraison** avec géolocalisation.
- Notifications automatisées (confirmation de commande, suivi, etc.)
- Fonctionnalité d’évaluation des plats par les clients.

---

## 🧪 Workflow Git

Nous suivons une **organisation par branches fonctionnelles** :

| Branche          | Rôle                                  |
|------------------|----------------------------------------|
| `frontend`       | Développement de l'interface utilisateur |
| `backend`        | Développement du serveur Laravel       |
| `test-utils`     | Scripts, tests unitaires ou de charge  |
| `main` (plus tard) | Branche de production / déploiement   |

---

## 🚀 Déploiement

- Le frontend sera **déployé sur [Vercel](https://vercel.com)**.
- La version backend peut être déployée plus tard sur un serveur Laravel (ex : Laravel Forge, Render, etc.).
- Un workflow CI/CD sera mis en place pour automatiser les tests et déploiements à chaque merge vers `main`.

---

## 📂 Installation locale

### 1. Cloner le dépôt
```bash
git clone https://github.com/SamuelSgn/Digit_food.git
cd Digit_food
```

### 2. Installer le backend Laravel (dans le dossier `backend`)
```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
```

### 3. Installer le frontend React
```bash
cd frontend
npm install
npm run dev
```

---

## 💬 Contact de l'équipe de développement

- **Samuel SOGLOHOUN**  
  📧 samuelsgn8@gmail.com | 📞 +229 66 01 53 87

- **Ornella FADONOUGBO**  
  📧 (à compléter) | 📞 +229 50 08 43 00

---

## 📁 Liens utiles

- **Cahier des charges** : Voir le document `Cahier de charges Projet Restaurant.pdf`
- **Maquettes** : (lien Figma ou autres à ajouter)
- **Dépôt GitHub** : [https://github.com/SamuelSgn/Digit_food.git](https://github.com/SamuelSgn/Digit_food.git)
