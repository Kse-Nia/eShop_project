# Projet EasyPlant !


<p align="center">
  <img width="300" src="/frontend/public/plant.png">
</p>


Projet de création d'un site e-commerce pour la vente de plantes en ligne.

Technologies utilisées:

*  Prisma / MySQL, Node.JS, Express pour le Backend
*  React, Chakra UI pour la partie Frontend

<div>
  <img width="50" src="/frontend/public/mysql.svg">
  <img width="50" src="/frontend/public/node.svg">
  <img width="50" src="/frontend/public/react.svg">
  <img width="50" src="/frontend/public/prisma.svg">
</div>


## Installation et lancement du projet

- Cloner le repository
- Créer une BDD MySQL pour le projet
- Dans le dossier backend, créer un fichier .env et y inscrire un token d'authentification, le port et l'url de la base de données.
Exemple:

````
DATABASE_URL="mysql://root:password@localhost:3306/eShop"
PORT=8000
TOKEN_SECRET="dhdfhfo234"
````

- Lancer les serveurs avec les commandes suivantes:

```
cd backend
npm i
nodemon server

```
Ainsi que pour la partie frontend:

```
cd frontend
npm i
npm start

```


### 