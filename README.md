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

- **Erstellen Sie ein neues Repository**: Legen Sie ein neues _public_ Repository auf GitHub.com an und klonen Sie es auf Ihr lokales System.  
- **Öffnen Sie das Repository in der IDE**: Nutzen Sie Ihre IDE, um das geklonte Repository für die Entwicklung vorzubereiten.

### Dateien initialisieren

- **Erstellen Sie eine `index.html`-Datei**: Diese Datei dient zur Demonstration grundlegender Git-Befehle.

## 2. Git verwenden

### Git-Befehle ausführen

- **Verwenden Sie folgende Git-Befehle** 

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
- Committen Sie die Änderung im HTML und pushen Sie die ihren neuen Branch.
- Kontrollieren Sie auf github.com, ob ihr neuer Branch da ist.  

### Pull Request öffnen

Ein Pull Request oder Merge Request bezeichnet in der Versionsverwaltung einen Arbeitsablauf, Quellcode-Änderungen in Softwareprojekten vorzunehmen.

- Wenn Sie ihren neuen Branch gepusht haben, erscheint auf der Startseite ihres Repositories ein Button "Compare & pull request". Klicken Sie auf diesen Button, um einen Pull Request zu erstellen.
- Erstellen Sie ein Code Review, indem Sie als Kommentar "LGTM" (Looks good to me) schreiben und anschliessend den Pull Request mergen. Der Feature Branch sollte automatisch gelöscht werden.  


## 3. Release erstellen und deployen 
### Release erstellen 
- Klicken Sie im Menü des Repositories auf den Reiter **Releases**.
- Klicken Sie auf **Create a new release**.
Geben Sie eine **Tag-Version** ein (z.B. `v1.0.0`).
   - Sie können auch einen Branch oder Commit auswählen, auf dem das Release basieren soll.
- Geben Sie einen **Titel** für das Release ein (z.B. "Erstes offizielles Release").
- Fügen Sie eine **Beschreibung** hinzu, die die Änderungen oder neuen Features des Releases beschreibt.
- Optional: Sie können Dateien oder Builds als **Assets** zum Release hinzufügen, indem Sie sie hochladen.
- Klicken Sie auf **Publish release**, um das Release zu erstellen und öffentlich zu machen.

### Website auf GitHub Pages veröffentlichen
- Releasen Sie eine Website mit GitHub Pages.
- Recherchieren Sie, wie eine Website mit GitHub Pages funktioniert.
- Beim Inhalt ihrer Website sind Sie frei.
- Als Resultat bekommen Sie eine URL, die öfffentlich erreichbar ist und den Inhalt der Datei index.html als Website darstellt. 
