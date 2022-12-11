## Svelte-app README

### starten van de svelte-app
Clone je repository naar een lokale folder en voer het volgende commando uit in de terminal:
```console
npm install
```
Om de svelte-app te starten moet je in de terminal het volgende typen in de terminal:
```console
npm run dev
```
Nu draait de svelte-app op localhost.

Om de site direct te openen bij het opstarten kan je ook het volgende command intypen in de terminal:
```console
npm run dev -- --open
```

Op het moment gaat het nog moeilijk met het fetchen van de lokale json data.
Om dit werkend te krijgen (tennminste in vscode), moet je eerst de link boven het json bestand fetchen ipv. het json bestand en de svelte-app starten.
Hierna kan je terwijl hij aan  staat deze link weer commenten en het json bestand uncommenten, dan werkt hij op de een of andere manier wel opeens.
Dit probleem moet als het goed is opgelost zijn wanneer hij straks fetched van de API.

### aanpassingen
Wanneer de CSS is aangepast moet deze opnieuw gebuild worden, dit kan je doen met het volgende command in de terminal:
```console
npm run prepare
```