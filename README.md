# ict-m324-public

Lokale Datenbank mit Docker.
## Setup ITP 
- Erstellen Sie in ihrem Projekt auf der obersten Ebene einen Ordner `docker`.
- Kopieren Sie diese Datei: https://github.com/roman-hatz-sluz/ict-m324-public/blob/docker-db/docker-compose.yml
- Recherchieren Sie, was jede Zeile bedeutet: https://github.com/roman-hatz-sluz/ict-m324-public/blob/docker-db/docker-compose.yml#L3-L18 
Hinweis: hier sollten Sie alle Antworten finden: https://medium.com/towards-data-engineering/dockerize-your-databases-a-step-by-step-guide-to-mysql-containerization-8dc2deabeebd 
## Docker Setup 
- `docker-compose up`: Achten Sie auf die Ausgabe. Zuerst werden die Images heruntergeladen, dann werden die Container gestartet. Es sollte keine Fehler geben.
- Brechen Sie den Prozess mit Ctrl+C ab.
- `docker-compose down`: Gibt Docker Ressourcen wieder frei.
- `docker-compose up -d: Starten Sie Docker als Hintergrundprozess. Verwenden Sie ein grafisches Tool wie Docker Desktop oder Portainer, um zu sehen, welche Container am Laufen sind.
- Testen Sie, ob MySQL läuft: `docker exec -it mysql-demo mysql -u demo -p`
  Passwort: demo
- Verbinden Sie MySQL mit einem grafischen SQL Editor wie MySQL Workbench und prüfen Sie, ob Sie eine Tabelle erstellen können.

## Passen Sie das docker-compose File an für Ihr Projekt
- Installieren Sie nur die Datenbank, die Sie in ihrer Applikation verwenden. Entfernen Sie die anderen DBs. 
- Testen Sie, ob Sie eine Tabelle erstellen können (per Command Line oder grafisches Tool).
- Verbinden Sie ihr Backend mit der Docker Datenbank.
- Stellen Sie sicher, dass die Docker Datenbank läuft, wenn Sie ihre Applikation starten. 
Bei NPM: verwenden Sie scripts im package.json. 
Bei C#: z.B mit einem Bash Skript `start.sh`: 
```
#!/bin/bash
docker-compose up -d
dotnet run
```
## Dockerfile verwenden
- Sie haben ein vorgefertigtes Image für ihre Datenbank.
- Erstellen Sie ein eigenes Image, erstellen Sie dazu ein `Dockerfile`.
- Das Ziel ist ein eigenes Image, das beim Starten einige Tabellen und Daten anlegt. 
- Folgen Sie dieser Anleitung: https://dev.to/sumana2001/build-a-custom-mysql-docker-container-404f
- Weitere DevOps Aufgaben:
  - Automatische Backup-Routinen: Integrieren Sie Skripte oder Mechanismen, um regelmässig Backups der Datenbank zu erstellen
 
## Weitere Aufgaben für eigenes Dockerfile 
- **Backup**: Schreiben Sie ein Skript das ein Backup der Datenbank erstellt (mysql dump). Kopieren Sie im Dockerfile dieses Skript in ihr Datenbank Image. Es sollte so sein, dass das Skript im Datenbank Container ausführbar ist. Verwenden Sie _crontab_, um automatisch jede Woche ein Backup zu erstellen. 
- **Monitoring/Logging**: Installieren Sie Tools, um die Logs ihrer Datenbank zu analysieren. 
Beispiel: slow query log. Bei MySQL: konfigurieren Sie MySQL so, dass slow queries protokolliert werden. Schreiben Sie dann ein Skript, das dieses Log analysiert. 
