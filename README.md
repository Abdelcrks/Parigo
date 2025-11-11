# 🎉 PariGo — Explore les événements à Paris

PariGo est une application web permettant de **découvrir les événements parisiens en temps réel**, grâce à l’API officielle de la Ville de Paris (data.gouv / opendata.paris).  
L'utilisateur peut :

✅ Rechercher des événements (concerts, expos, ateliers, conférences, spectacles, etc.)  
✅ Mettre des événements en favoris (stockés en localStorage)  
✅ Filtrer les résultats par mots-clés  
✅ Naviguer entre les résultats grâce à un **système de pagination dynamique**  
✅ Passer en **dark mode** (sauvegarde du thème dans le localStorage)

---

## 🚀 Stack Tech utilisée

| Technologie | Rôle |
|-------------|------|
| **Vite** | Build tool ultra rapide pour React |
| **React** | Composants UI et state management |
| **Tailwind CSS** | Style moderne, responsive & dark mode |
| **API Paris Data (opendata.paris.fr)** | Source des événements culturels |
| **LocalStorage** | Sauvegarde des favoris & du thème (dark / light) |

---

## 🧠 Fonctionnalités

### 🔎 Recherche d'événements
- Recherche dynamique par mots-clés (`title`, `lead_text`, `address_name`)

### ⭐ Favoris
- Ajout / suppression depuis les cartes
- Stockage dans `localStorage`, persistant au rafraîchissement

### 🌗 Dark / Light Mode
- Géré via Tailwind (`class="dark"`)
- Sauvegarde automatique du thème via `localStorage`

### 📄 Pagination dynamique (API)
- Affichage des événements par lots (`limit`)
- Bouton voir plus
- Utilisation du paramètre `offset` pour gérer le flux de données API





