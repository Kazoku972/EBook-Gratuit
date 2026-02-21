# Story Mode — Guide d'Intégration & Déploiement

Ce guide détaille comment maintenir, tester et déployer la version immersive du flipbook.

## 1. Structure du Projet

- **docs/ebook_flipbook.backup.html** : Point d'entrée principal.
- **docs/css/story.css** : Moteur visuel (Plein écran, dvh, transitions).
- **docs/css/ebook_interactif.css** : Variables de couleurs et styles de contenu.
- **docs/js/** : Moteurs turn.js et jQuery.
- **docs/images/** : Tous les visuels (PNG/JPG).

## 2. Intégration de Nouvelles Pages

Pour ajouter une page :

1. Ajoutez un bloc `<div class="flip-page">` dans le conteneur `#flipbook`.
2. Structure recommandée (Flexbox Auto-Centering) :

```html
<div class="flip-page">
  <div class="page-content">
    <img src="images/votre-image.png" alt="Illustration" />
    <div class="page-overlay">
      <h2>Titre de la Page</h2>
      <p>Le contenu texte se centrera automatiquement sous l'image.</p>
    </div>
  </div>
</div>
```

3. **Optimisation Optique** : Les images sont limitées à 75% de la hauteur de l'écran par défaut pour garantir que les textes overlays ne sont jamais rognés, même sur iPhone SE.

## 3. Test sur Smartphone

La version est optimisée pour fonctionner sans serveur local (via `file://`).

- **Sur Desktop** : Utilisez l'inspecteur Chrome (F12) → Mode Mobile. Testez en 320px (iPhone SE) et 390px (iPhone 13).
- **Sur Mobile Réel** : Transférez le dossier `/docs` sur votre téléphone ou utilisez une extension de partage local (ex: Live Server VSCode).

## 4. Déploiement GitHub Pages

1. Poussez votre code sur GitHub.
2. Allez dans **Settings** → **Pages**.
3. Sous **Build and deployment**, choisissez la branche `main` et le dossier `/docs`.
4. Enregistrez. Le flipbook sera disponible à l'adresse `https://votre-compte.github.io/votre-repo/ebook_flipbook.backup.html`.

## 5. Spécifications Techniques Mobiles

- **Viewport** : `100dvh` (Dynamic Viewport Height) pour ignorer les barres d'outils iOS/Android.
- **Tactile** : Swipe horizontal natif.
- **Zoom** : Désactivé via meta-tag et prévention JS pour une stabilité totale.
