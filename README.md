# ict-m324-public

Lokale Datenbank mit Docker.
## Setup ITP 
- Erstellen Sie in ihrem Projekt auf der obersten Ebene einen Ordner `docker`.
- Kopieren Sie diese Datei: https://github.com/roman-hatz-sluz/ict-m324-public/blob/docker-db/docker-compose.yml
- Recherchieren Sie, was jede Zeile bedeutet: https://github.com/roman-hatz-sluz/ict-m324-public/blob/docker-db/docker-compose.yml#L3-L18 

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
