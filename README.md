# ict-m324

DevOps-Prozesse mit Tools unterstützen:
Git ist eine Software, mit der Sie Änderungen an einem Projekt im Laufe der Zeit verfolgen können. Git zeichnet die Änderungen auf, die Sie an einem Projekt vornehmen, speichert diese Änderungen und ermöglicht es Ihnen dann, bei Bedarf darauf zuzugreifen.

## 1. Einrichtung: Ihr Entwicklungs-Setup

### Entwicklungsumgebung vorbereiten

1. **Installieren Sie Ihre bevorzugte IDE**: Wählen Sie eine IDE wie Visual Studio Code und installieren Sie diese, um eine effiziente Entwicklungsumgebung zu schaffen.
2. **Installieren Sie Git**: [Git Installation](https://git-scm.com/downloads) – das zentrale Tool für die Versionskontrolle Ihres Projekts.
3. **Erstellen Sie ein GitHub-Konto**: Registrieren Sie sich auf GitHub, um Ihre Projekte online zu verwalten. [GitHub Registrierung](https://github.com/join)
4. **Installieren Sie GitHub Desktop**: Empfehlung: nutzen Sie GitHub Desktop, um Ihre Repositories visuell zu verwalten. [GitHub Desktop herunterladen](https://desktop.github.com/)

### Repository erstellen und klonen

- **Erstellen Sie ein neues Repository**: Legen Sie ein neues public Repository auf GitHub.com an und klonen Sie es auf Ihr lokales System. Wenn Sie GitHub Desktop verwenden, braucht es nur einen Klick: https://docs.github.com/en/desktop/adding-and-cloning-repositories/cloning-a-repository-from-github-to-github-desktop
- **Öffnen Sie das Repository in der IDE**: Nutzen Sie Ihre IDE, um das geklonte Repository für die Entwicklung vorzubereiten.

### Dateien initialisieren

- **Erstellen Sie eine `README.md`-Datei**: Diese Datei dient als Dokumentation und Übersicht Ihres Projekts.
  Verwenden Sie die folgende Vorlage:

```
1. Grundlegende Git-Befehle
...

2. Branch erstellen
...


```

- **Erstellen Sie eine `index.html`-Datei**: Diese Datei dient zur Demonstration grundlegender Git-Befehle.

## 2. Git verwenden

### Git-Befehle ausführen

- **Verwenden Sie grundlegende Git-Befehle** und dokumentieren Sie _jeden Schritt in der `README.md`_:

  - `git status`: Überprüfen Sie den aktuellen Status des Repositories und identifizieren Sie unversionierte Änderungen.
  - `git add .`: Fügen Sie alle Änderungen zum Staging-Bereich hinzu.
  - `git commit -m "Initial commit"`: Speichern Sie die Änderungen in der Historie des Repositories.
  - `git push`: Übertragen Sie die lokalen Änderungen zum Remote-Repository auf GitHub.
  - `git log`: Zeigen Sie die Commit-Historie an, um den Fortschritt zu überprüfen.

- **Erstellen Sie einen neuen Branch für die Feature-Entwicklung**:
  ```bash
  git checkout -b feature-branch
  ```
- Ändern Sie index.html: Fügen Sie neuen Inhalt zur Datei hinzu.
- **Committen und pushen Sie die ihren neuen Branch**
- Kontrollieren Sie auf github.com, ob ihr neuer Branch da ist. _Dokumentieren Sie alle Git Befehle in der README.md.Datei_.

### Pull Request ausführen

Ein Pull Request oder Merge Request bezeichnet in der Versionsverwaltung einen Arbeitsablauf, Quellcode-Änderungen in Softwareprojekten vorzunehmen.

- Wenn Sie ihren neuen Branch gepusht haben, erscheint auf der Startseite ihres Repositories ein Button "Compare & pull request". Klicken Sie auf diesen Button, um einen Pull Request zu erstellen.

## 3. GitHub Pages verwenden

- Releasen Sie eine Website mit GitHub Pages.
- Recherchieren Sie, wie eine Website mit GitHub Pages funktioniert.
- Beim Inhalt ihrer Website sind Sie frei.
- Als Resultat bekommen Sie eine URL, die öfffentlich erreichbar ist und den Inhalt der Datei index.html als Website darstellt. 
