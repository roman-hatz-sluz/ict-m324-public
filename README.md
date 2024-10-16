# ict-m324-public

## Laravel Docker Setup

- `cd docker`
- `docker compose up`: Dauert ein wenig. Erstellt einen Ordner `laravel-app` im aktuellen Verzeichnis.
- Wenn diese Nachricht erscheint "INFO Server running on [http://0.0.0.0:8000]"
  Öffnen Sie http://0.0.0.0:8000/ in Browser.
- Ändern Sie etwas in `laravel-app/resources/views/welcome.blade.php`, um zu prüfen ob ihr Setup funktioniert.

## Troubleshooting

- Falls der Port schon belegt ist: `docker stop $(docker ps -q)`
- Zugang aufs Terminal: `docker exec -it laravel-ipt-demo-container bash`