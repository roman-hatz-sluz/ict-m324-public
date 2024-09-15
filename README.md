# ict-m324

Git Actions für CI/CD

## Schritt 3.1: Git Actions für CI/CD

Implementieren Sie GitHub Actions, um die Automatisierung von Linting, Formatting und Testing sicherzustellen, sobald Pull Requests (PRs) geöffnet oder aktualisiert werden.

### Einrichtung der GitHub Actions

Verwenden Sie ihr GitHub Repository aus der letzten Aufgabe.

1. **Erstellen der GitHub Actions Konfigurationsdatei:**

   - Erstellen Sie im main branch einen Ordner `.github/workflows` im Root-Verzeichnis des Projekts.
   - Erstellen Siw eine Datei `ci.yml` in diesem Ordner.

2. **Konfiguration für GitHub Actions (ci.yml):**

   Fügen Sie folgende Konfiguration in die `ci.yml`-Datei ein, um bei jedem PR das Linting, Formatting und Testing auszuführen:

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

3. Testen Sie ihre GitHub Action, indem Sie einen Pull Request (PR) erstellen.

## Schritt 3.2: Verwendung von act für lokales Ausführen von GitHub Actions

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

## Schritt 3.2: TODO 
- needs verwenden
- schedule verwenden 
- Virenscan 

