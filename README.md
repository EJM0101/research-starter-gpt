# 🎓 Research Starter – Générateur de sujets de recherche (GPT)

Une application web simple déployable sur Render qui aide les étudiants et chercheurs à générer des sujets et questions de recherche grâce à l'intelligence artificielle via l'API OpenRouter (GPT).

## 🚀 Fonctionnalités
- Entrez un mot-clé ou domaine de recherche
- Obtenez 3 sujets complets avec :
  - Titre
  - Question de recherche
  - Pertinence scientifique/sociale

## 🧠 Concepts pédagogiques
Cette application est basée sur la première étape fondamentale de la méthodologie de recherche scientifique : **trouver un bon sujet**. Elle aide à :
- Partir d’un thème réel ou d’une lacune de connaissances
- Clarifier la question de recherche
- Évaluer sa pertinence académique et sociétale

## 🛠️ Technologies utilisées
- Node.js (Express)
- OpenRouter API (GPT)
- HTML/CSS (Bootstrap)
- Déployé sur Render

## ⚙️ Installation et déploiement
1. Clonez le repo :
```bash
git clone https://github.com/EJM0101/research-starter-gpt.git
cd researchstarter
```

2. Installez les dépendances :
```bash
npm install
```

3. Créez un fichier `.env` à partir de `.env.example` et ajoutez votre clé API OpenRouter :
```
OPENROUTER_API_KEY=sk-votre-clé
```

4. Lancez l’application :
```bash
node server/app.js
```

5. Accédez à l’application sur `http://localhost:3000`

## 📦 Déploiement sur Render
Créez un service Web sur [render.com](https://render.com), connectez votre dépôt Git et Render détectera automatiquement `.render.yaml` pour déployer l'application.

---
© 2025 | Conçu pour l'enseignement de la recherche scientifique
