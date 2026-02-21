# Pipeline de Production — Ebooks (Automatisé, Itératif, QA-Driven)

**Description :** Orchestration complète de la chaîne de production : Analyse → Réécriture → Design → Dev interactif offline → QA (Visuel/Code/Émotion) → Validation Kev → boucles de correction jusqu’au Go final. Objectif : livrer 2 ebooks (gratuit + premium) en version texte + version interactive téléchargeable (ZIP), cohérents sur le fond, le style et l’émotion.

---

## 0) Principes d’orchestration (non négociables)

1. **Single Source of Truth** : chaque étape ne travaille qu’avec ses entrées officielles.
2. **Traçabilité** : chaque correction doit référencer un ticket (AMEL- / VIS- / CODE- / EMO-).
3. **Idempotence** : relancer une étape doit produire le même résultat si les entrées n’ont pas changé.
4. **QA Gate** : aucune étape “en aval” ne démarre si l’étape précédente n’est pas livrée proprement.
5. **Boucles courtes** : on corrige d’abord les P0, puis P1, puis P2.

---

## 1) Artefacts standards (noms fixes)

### Analyse (sorties)

- `notes.md`
- `contenu_interessant.md`
- `points_a_ameliorer.md`
- `style_autrice.md`

### Réécriture (sorties)

- `ebook_gratuit.md`
- `ebook_premium.md`

### Design (sorties)

- `design_ebook.md`
- `dossier_assets_optimises/` (incluant `manifest.json`)

### Dev Interactif (sorties)

- `dossier_ebook_gratuit/`
- `dossier_ebook_premium/`
- (optionnel recommandé) `index.html` + `style.css` + `script.js` en landing racine

### QA (sorties)

- `rapport_QA_visuel_gratuit.md`
- `rapport_QA_visuel_premium.md`
- `rapport_QA_code_gratuit.md`
- `rapport_QA_code_premium.md`
- `rapport_emotion_gratuit.md`
- `rapport_emotion_premium.md`

---

## 2) Workflow (étapes + handoffs)

### Étape 1 — Analyse (Agent_Analyse_Ebooks)

**Entrées :**

- `ebook_source_1`
- `ebook_source_2`

**Sorties :**

- `notes.md`
- `contenu_interessant.md`
- `points_a_ameliorer.md`
- `style_autrice.md`

**Handoff automatique → Étape 2**

**Gate (Go/No-Go) :**

- `style_autrice.md` complet (voix + dos/don’ts + marqueurs)
- `points_a_ameliorer.md` priorisé (P0/P1/P2) avec preuves
- `contenu_interessant.md` contient des extraits traçables (source + loc)

---

### Étape 2 — Réécriture (Agent_Reecriture_StyleAutrice)

**Entrées :**

- `contenu_interessant.md`
- `points_a_ameliorer.md`
- `style_autrice.md`

**Sorties :**

- `ebook_gratuit.md`
- `ebook_premium.md`

**Handoff automatique → Étape 3**

**Gate (Go/No-Go) :**

- Voix de l’autrice respectée (auto-checklist appliquée)
- Structure “interactive-ready” (blocs courts, exercices, prompts)
- Pas de ton médical affirmatif / pas de culpabilisation

---

### Étape 3 — Design (Agent_Design_Illustrations)

**Entrées :**

- `ebook_gratuit.md`
- `ebook_premium.md`
- `dossier_illustrations/`

**Sorties :**

- `design_ebook.md`
- `dossier_assets_optimises/` (+ `manifest.json` obligatoire)

**Handoff automatique → Étape 4**

**Gate (Go/No-Go) :**

- Design system clair (palette/typo/composants)
- Mapping illustrations → sections complet
- Assets optimisés web (formats + tailles + nommage)

---

### Étape 4 — Développement Interactif (Agent_Dev_JS)

**Entrées :**

- `ebook_gratuit.md`
- `ebook_premium.md`
- `dossier_assets_optimises/` (+ `manifest.json`)
- `design_ebook.md` (si dispo)

**Sorties :**

- `dossier_ebook_gratuit/`
- `dossier_ebook_premium/`
- (optionnel recommandé) landing racine `index.html` + `style.css` + `script.js`

**Handoff automatique → Étape 5**

---

### Étape 5 — Optimisation Story Mode (Agent_Flipbook_Responsive)

**Responsabilités :**

- Adapter le flipbook en mode full-screen responsive pour tous smartphones.
- Générer le CSS mobile full-screen (100dvh).
- Générer le JS tactile (swipe, single-page, compatibilité iOS).
- Produire la documentation d’intégration.

**Entrées :**

- Livrables de l'Étape 4.

**Sorties :**

- `story.css`
- Versions HTML immersives.

**Handoff automatique → Étape 6 (QA x3)**

**Gate (Go/No-Go) :**

- Full-screen réel : aucune marge blanche, aucun scroll vertical.
- Swipe natif fonctionnel.
- SAFE AREA respectée (encoches iPhone).

---

### Étape 6 — QA (3 Agents en parallèle)

#### 5A) Agent_QA_Visuel

**Entrées :**

- `dossier_ebook_gratuit/`
- `dossier_ebook_premium/`

**Sorties :**

- `rapport_QA_visuel_gratuit.md`
- `rapport_QA_visuel_premium.md`

#### 5B) Agent_QA_Code

**Entrées :**

- `dossier_ebook_gratuit/`
- `dossier_ebook_premium/`

**Sorties :**

- `rapport_QA_code_gratuit.md`
- `rapport_QA_code_premium.md`

#### 5C) Agent_QA_Emotion

**Entrées :**

- `ebook_gratuit.md`
- `ebook_premium.md`
- `style_autrice.md`

**Sorties :**

- `rapport_emotion_gratuit.md`
- `rapport_emotion_premium.md`

**Handoff automatique → Étape 6**

**Gate QA global (Go/No-Go) :**

- 0 P0 ouverts sur les 3 QA
- P1 acceptables ou planifiés explicitement
- Aucune erreur console (CODE)
- Lisibilité + cohérence (VISUEL)
- Voix & chaleur (ÉMOTION)

---

### Étape 6 — Validation Kev (humain)

**Entrées :**

- Tous les rapports QA + livrables

**Décision :**

- **GO** → pipeline terminé
- **NO-GO / demandes** → lancement automatique de boucle de correction

---

## 3) Boucle de correction (itérations)

### 3.1 Règle d’assignation automatique

- Tickets `EMO-###` → Agent_Reecriture_StyleAutrice
- Tickets `VIS-###` → Agent_Flipbook_Responsive (CSS Story/Swipe) ou Agent_Dev_JS
- Tickets `CODE-###` → Agent_Dev_JS ou Agent_Flipbook_Responsive

### 3.2 Ordre de correction

1. Tous les **P0**
2. Puis les **P1**
3. Puis les **P2** si Kev le demande

### 3.3 Redéclenchement QA

Après correction :

- relancer QA concernée (ou toutes si modification structurelle)
- produire nouveaux rapports (versionner si nécessaire)

---

## 4) Convention de versioning (simple et robuste)

À chaque itération :

- Incrémenter un tag dans les rapports : `Version: v0.1`, `v0.2`, etc.
- Les tickets fermés doivent être listés en bas du rapport (Closed)

---

## 5) Critères de “Done”

Le pipeline est **Done** quand :

- Gratuit + Premium existent en `.md`
- Gratuit + Premium existent en version interactive offline (dossiers)
- QA : 0 P0, et Kev valide
- Tout est cohérent (style, design, émotion, UX)

---
