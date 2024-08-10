# ict-m324

## Schritt 2: Linting, Formatting und Testing des Projekts

### Linting mit ESLint

- Installieren Sie ESLint in Ihrem Projekt:
  ```bash
  npm install eslint
  ```
- Initialisieren Sie ESLint mit einer Konfigurationsdatei:
  ```bash
  npm init @eslint/config@latest
  ```
- Wählen Sie die folgenden Optionen:

```
 ✔ How would you like to use ESLint? · problems
 ✔ What type of modules does your project use? · esm
 ✔ Which framework does your project use? · none
 ✔ Does your project use TypeScript? · javascript
 ✔ Where does your code run? · browser
 The config that you've selected requires the following dependencies:

eslint@9.x, globals, @eslint/js
✔ Would you like to install them now? · No / Yes
✔ Which package manager do you want to use? · npm
```

- Fügen Sie das folgende Skript in Ihre `package.json` Datei ein, um Ihren Code zu überprüfen:
  ```json
  "scripts": {
    "lint": "eslint ."
  }
  ```
- Erstellen Sie absichtlich einen Fehler in der `index.js` Datei, z.B. indem Sie mit `console.log` eine Variable ausgeben, die es nicht gibt.

- Führen Sie das Linting aus, um den Fehler zu sehen:
  ```bash
  npm run lint
  ```
- Sie sollten eine Fehlermeldung erhalten, die in etwa so aussieht:
  `error  'undefinedVarialbe' is not defined  no-undef`
- Fügen Sie einen weiteren Fehler im JS ein.
  Sie sollten eine Fehlermeldung erhalten, die in etwa so aussieht:
  ` error  'unusedVariable' is assigned a value but never used`

### Formatting mit Prettier

- Installieren Sie Prettier in Ihrem Projekt:
  ```bash
  npm install prettier
  ```
- Erstellen Sie eine Konfigurationsdatei `.prettierrc` im Hauptverzeichnis des Projekts:
  ```json
  {
    "singleQuote": true,
    "semi": false
  }
  ```
- Fügen Sie das folgende Skript in Ihre `package.json` Datei ein, um Ihren Code zu formatieren. Achten Sie auf die Ausgabe.
  ```json
  "scripts": {
    "format": "prettier --write ."
  }
  ```
- Erstellen Sie absichtlich schlecht formatierten Code in der `index.js` Datei, z.B. fügen Sie auf der ersten Zeile am Anfang 5 Leerzeichen ein.
- Führen Sie das Formatting aus, um den Code automatisch zu korrigieren:
  ```bash
  npm run format
  ```
- Sie sollten sehen, dass Prettier den Code formatiert hat, indem es die Leerzeichen entfernt hat.
