# Institut Santé Plus — Tétouan

Site vitrine statique (React chargé dans le navigateur, sans build).

## Fichiers servis (ce qui s'affiche réellement)

| Fichier | Rôle |
|---|---|
| `index.html` | Point d'entrée : charge React, Babel, les polices et `app.jsx` |
| `app.jsx` | **Tout le code du site** (c'est CE fichier qu'on modifie) |
| `styles.css` | Tous les styles |

## Modifier le site

Éditez **`app.jsx`** (le code) ou **`styles.css`** (l'apparence), puis enregistrez.
Sur Hostinger, le déploiement Git se charge de publier la nouvelle version.

> Les fichiers `data.jsx`, `header-hero.jsx`, `sections-a.jsx`, `sections-b.jsx`,
> `sections-c.jsx`, `main.jsx` sont les **sources d'origine** (modulaires). Ils ne sont
> PAS chargés par le site — `app.jsx` est leur fusion. Si vous les modifiez, il faut
> régénérer `app.jsx` avec :
>
> ```bash
> cat data.jsx header-hero.jsx sections-a.jsx sections-b.jsx sections-c.jsx main.jsx > app.jsx
> ```

## Déploiement

Hébergé sur Hostinger, déployé automatiquement depuis ce dépôt GitHub
(hPanel → Avancé → GIT).
