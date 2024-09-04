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
- Erstellen Sie die Datei `index.js`. Führen Sie die Datei mit `node index.js` aus.
```js
   console.log(undefinedVariable)
  ```
- Führen Sie das Linting aus:
  ```bash
  npm run lint
  ```
- Sie sollten eine Fehlermeldung erhalten, die so aussieht:
  `error  'undefinedVariable' is not defined  no-undef`
- Fügen Sie einen weiteren Fehler im JS ein.
  Sie sollten eine Fehlermeldung erhalten, die so aussieht:
  ` error  'unusedVariable' is assigned a value but never used`
- Lesen Sie https://hackernoon.com/10-eslint-rules-you-should-use 
  Bauen Sie eine der Regeln ein und fügen Sie einen entsprechenden Fehler im JS ein, damit eslint eine Fehlermeldung ausgibt. 

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

### Testing mit Jest

- Installieren Sie Jest in Ihrem Projekt:
  ```bash
  npm install jest
  ```
- Erstellen Sie eine Testdatei `index.test.js`:

  ```javascript
  // index.test.js
  const sum = (a, b) => a + b

  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
  })
  ```

- Fügen Sie das folgende Skript in Ihre `package.json` Datei ein, um die Tests auszuführen:
  ```json
  "scripts": {
    "test": "jest"
  }
  ```
- Ändern Sie die Funktion `sum` in der `index.js` Datei absichtlich so, dass sie falsche Ergebnisse liefert, z.B.:
  ```javascript
  // index.js
  function sum(a, b) {
    return a + b + 1
  }
  ```
- Führen Sie die Tests aus, um den Fehler zu sehen:
  ```bash
  npm run test
  ```
- Sie sollten sehen, dass der Test fehlschlägt. Korrigieren Sie die Funktion `sum`, um den Test erfolgreich bestehen zu lassen.

### Build Automatisierung

- Ändern Sie das Script `start` in `package.json` wie folgt:
  Bevor die Node Applikation gestartet wird, wird der Code formatiert, gelintet und getestet.
