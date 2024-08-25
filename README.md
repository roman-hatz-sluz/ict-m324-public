# ict-m324


## Schritt 1: Build-Automatisierung mit Node.js
- Überprüfen Sie in einem Terminal mit  `node -v` und  `npm -v`, ob NPM korrekt installiert ist. 
- Wenn nein, folgen Sie den Anweisungen hier (https://docs.npmjs.com/downloading-and-installing-node-js-and-npm). Überprüfen Sie mit obigen Befehlen, ob die Installation erfolgreich war. 


1. **Projekt Setup**:

   - Erstellen Sie ein neues Verzeichnis für Ihr Projekt und initialisieren Sie ein neues Node.js-Projekt.
     ```bash
     mkdir my-project
     cd my-project
     npm init -y
     ```
   - Erstellen Sie eine `index.js` Datei:
     ```javascript
     // index.js
     console.log("Hello, World!");
     ```

2. **Script zum Starten des JS**:

   - Bearbeiten Sie die `package.json` Datei, um ein Startskript hinzuzufügen:
     ```json
     {
       "name": "my-project",
       "version": "1.0.0",
       "scripts": {
         "start": "node index.js"
       },
       "dependencies": {}
     }
     ```
   - Führen Sie das Skript aus:
     ```bash
     npm run start
     ```
   - Das sollte die Nachricht "Hello, World!" in der Konsole ausgeben.

3. **Software Pakete installieren**:

   - Installieren Sie ein Paket, das die Konsole einfärbt, zum Beispiel `chalk`:

   ```bash
   npm install chalk
   ```

   - Verwenden Sie `chalk`, um die Ausgabe in der Konsole grün einzufärben. Tipp: Fügen Sie folgende Zeile im package.json hinzu und verwenden Sie import in der JS Datei:

   ```
     "type": "module",
   ```

   - Installieren Sie weitere NPM Pakete bei https://www.npmjs.com/. Achten Sie darauf, welche Dateien im Ordner node_modules abgelegt werden.

4. **Software Pakete updaten**:

   - Installieren Sie [npm-check-updates](https://www.npmjs.com/package/npm-check-updates)
   - Da Sie das Paket gerade installiert haben, gibt es noch keine Updates. Ändern Sie die Version ihrer NPM Pakete, zB.
     "chalk": "^5.3.0" => "chalk": "^5.2.0"
   - Führen Sie npm-check-updates aus und achten Sie auf die Ausgabe.
   - Führen Sie das Update aus.
