# Agent Coordination Protocol - Flipbook Project

## 1. Source de Vérité (SSOT)

- **OFFICIEL** : `docs/ebook_flipbook.backup.html`
- **QA TOOL** : `docs/qa_wrapper_official.html`
- **STYLES** : `docs/css/ebook_interactif.css` (à terme), actuellement dans `flipbook_sandbox/ebook_interactif.css`.

## 2. Règles de Gouvernance

- **STOP DUPLICATION** : Ne jamais créer de nouveaux fichiers `ebook_flipbook_*.html` à la racine ou dans d'autres sous-dossiers.
- **RÈGLE DU WRAPPER** : Le fichier `qa_wrapper_official.html` ne doit pointer **QUE** vers le flipbook officiel via la constante `ACTIVE_FLIPBOOK_SRC`.
- **ARCHIVAGE** : Toute version de test ou backup doit être déplacée dans `docs/archives/flipbook/` avec le format `ebook_flipbook__YYYY-MM-DD__raison.html`.

## 3. Flux de Travail

1. Travailler sur une copie dans `flipbook_sandbox/` si des modifications lourdes sont requises.
2. Une fois validé dans le QA Wrapper, **écraser** l'officiel dans `docs/`.
3. Archiver la version précédente.

## 4. Quoi ouvrir ?

- Pour tester : `docs/qa_wrapper_official.html`
- Pour éditer le contenu : `docs/ebook_flipbook.backup.html`
- **NE JAMAIS TOUCHER** aux fichiers dans `docs/archives/`.
