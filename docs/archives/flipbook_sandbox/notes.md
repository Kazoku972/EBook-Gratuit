# Notes Sandbox - Optimisation Responsive

## 2026-02-19 - Phase 1 : Fluidité Globale

- **CSS** : Suppression des tailles fixes (500px/1000px/740px). Remplacement par des unités relatives `%` et `rem`.
- **JS** : Passage au ratio 0.70 (plus adapté aux écrans allongés des smartphones modernes pour éviter que le bas soit coupé).
- **Architecture** : Le flipbook est désormais centré via `margin: 0 auto` et sa taille est pilotée exclusivement par `Turn.js` via `window.innerWidth`.
- **Typographie** : Réduction du padding à 8% (vertical) et 6% (horizontal) pour maximiser l'espace de lecture sur petit écran.

## Objectif Prochain

- Vérifier la Page 2 pour confirmer que le texte " Marine 💕" et les phrases finales sont visibles sans scroll.
