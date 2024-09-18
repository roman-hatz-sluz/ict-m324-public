# ict-m324

Git Actions für CI/CD

## (1) Git Actions für CI/CD einrichten

Implementieren Sie GitHub Actions, um die Automatisierung von Linting, Formatting und Testing sicherzustellen, sobald Pull Requests (PRs) geöffnet oder aktualisiert werden.

### Einrichtung der GitHub Actions

Verwenden Sie ihr GitHub Repository aus der letzten Aufgabe.

1. **Erstellen der GitHub Actions Konfigurationsdatei:**

   - Erstellen Sie im main branch einen Ordner `.github/workflows` im Root-Verzeichnis des Projekts.
   - Erstellen Siw eine Datei `ci.yml` in diesem Ordner.

2. **Konfiguration für GitHub Actions (ci.yml):**

   Fügen Sie folgende Konfiguration in die `ci.yml`-Datei ein

   ```yaml
   name: CI

   on:
     pull_request:
       branches:
         - main

   jobs:
     lint-format-test:
       runs-on: ubuntu-latest

       steps:
         - name: Checkout code
           uses: actions/checkout@v2

         - name: Set up Node.js
           uses: actions/setup-node@v2
           with:
             node-version: '18.x'

         - name: Install dependencies
           run: npm install

           ...
   ```

3. Erweitern Sie die Konfiguration, um automatischbei jedem PR das Linting, Formatting und Testing auszuführen. Verwenden Sie beim Formatter das Flag `--check`.
4. Verwenden Sie beim Formatter das Flag `--check`.
5. Testen Sie ihre GitHub Action, indem Sie einen Pull Request (PR) erstellen.

## (2) Verwendung von act für lokales Ausführen von GitHub Actions

Führen Sie GitHub Actions lokal aus, um schneller zu testen und zu debuggen, ohne Änderungen direkt in das Repository zu pushen. Dies ermöglicht es Ihnen, die GitHub Actions Workflows auf Ihrem lokalen Rechner zu testen.

### Voraussetzungen

Installieren Sie Docker auf Ihrem Rechner, da act Docker-Container verwendet, um GitHub Actions Workflows auszuführen.
Installieren Sie act selbst.

1. Installation von act

   - Installation über Homebrew (macOS/Linux): `brew install act`
   - Installation über curl (macOS/Linux/WSL): `curl https://raw.githubusercontent.com/nektos/act/master/install.sh | sudo bash`
   - Installation auf Windows:Laden Sie das Binary von der Releases-Seite von act herunter: https://github.com/nektos/act/releases
     Fügen Sie den Installationspfad zur Umgebungsvariable PATH hinzu.

2. Verwendung von act
   Sobald act installiert ist, können Sie Ihre GitHub Actions lokal ausführen.

- `act`
  Dieser Befehl führt den Standard-GitHub Actions Workflow (on: push) in Ihrer ci.yml oder einer anderen Workflow-Datei aus.
- `act pull_request`: Ausführen Sie den Workflow für Pull Requests.

3. Testen Sie ihren Workflow aus (1) mit act.

- Bauen Sie Linter, Formatter und Testing Fehler ein, um den Workflow zu testen.
- Entfernen Sie die Fehler anschliessend wieder.

4. Testen Sie ihren Workflow auf GitHub aus.

- Pushen Sie ihren main Branch und erstellen Sie einen neuen Branch und einen Pull Request.
- Öffnen Sie das Actions Log auf GitHub. Der Link sollte so aussehen: https://github.com/roman-hatz-sluz/ict-m324/actions/. Sie sehen hier alle Actions, die Sie ausgeführt haben.
- Öffnen Sie Pull Requests auf GitHub. Der Link sollte so aussehen: https://github.com/roman-hatz-sluz/ict-m324/pulls. Klicken Sie auf ihren Pull Request und suchen Sie die Ausgabe ihres Workflows.

## (3) More to do

1. Virenscanner

- Fügen Sie einen Job hinzu, um Viren zu scannen. Verwenden Sie an der richtigen Stelle: `- uses: 'hugoalh/scan-virus-ghaction@latest'`
- Verwenden Sie an der richtigen Stelle `if: 1 == 2` um nur den neuen Job zu starten.

2. Fun with GitHub Actions

- Immer wenn ein Pull Request geöffnet wird, soll automatisch ein Kommentar hinzugefügt werden.
- Verwenden Sie diese Action https://github.com/marketplace/actions/comment-pull-request
- Erstellen Sie im Ordner `.github/workflows` eine Datei Datei `pr-comment.yml`.
- Verwenden Sie diesen Code `uses: thollander/actions-comment-pull-request@v2`

3. Free Choice

- Suchen Sie eine beliebige Action auf https://github.com/marketplace?type=actions und installieren Sie diese.
