# Équipe Spéciale Rollback — Protocoles de Restauration

**Mission :** Assurer la résilience du projet et le retour instantané à une version stable.

## 1. Composition de l'Équipe

- **Leader :** AgentRollbackLead (Identifie le point de restauration).
- **Backups :** AgentRollbackBackupManager (Gère les fichiers physiques).
- **GitOps :** AgentRollbackGitOps (Restaure l'historique).
- **QA :** AgentRollbackQACode & AgentRollbackQAVisuel (Validations).

## 2. Procédure de Restauration d'Urgence

### Option A : Restauration Git (Recommandée)

Pour revenir au dernier état stable officiellement validé :

```bash
git log --oneline # Identifier l'ID du commit stable
git reset --hard [ID_COMMIT]
git push origin main --force
```

### Option B : Restauration Manuelle (Fichiers)

En cas de corruption locale ou Git, utiliser les backups physiques :

1. Remplacer `docs/ebook_flipbook.backup.html` par la version stable archivée.
2. Restaurer `docs/css/story.css` pour garantir l'immersion.

## 3. Historique des Points de Commutaton Stables

| Date     | ID Commit | Description                               | Statut       |
| :------- | :-------- | :---------------------------------------- | :----------- |
| 18/02/26 | `70c60a9` | Version stabilisée finale (Centrage Flex) | ✅ RÉFÉRENCE |
| 18/02/26 | `af8fd4c` | Premier déploiement Story Mode stabilisé  | 🆗 STABLE    |
| 18/02/26 | `de3d4f0` | Déploiement Story Mode Initial            | 🆗 ANCIEN    |

## 4. Recommandations Post-Rollback

- **Vérification QA :** Toujours valider le rendu mobile sur `https://kazoku972.github.io/RefonteEbook/`.
- **Analyse :** Documenter l'origine du bug avant de tenter un nouveau déploiement.

---

**Document maintenu par :** AgentRollbackDocumentation
**Statut du Pipeline :** ✅ SÉCURISÉ
