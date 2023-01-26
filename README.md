## Svelte-app README

### gedeployde versie online
De nieuwste versie staat online op de site: [https://ssi.s.mees.io/](https://ssi.s.mees.io/)

### benodigdheden om de svelte-app lokaal te kunnen runnen
Voor het lokaal runnen van de svelte-app worden npm commando's gebruikt.
Om deze npm commando's te kunnen gebruiken moet [NodeJs](https://nodejs.org/en/) geinstalleerd zijn.

Bij het lokaal runnen van de svelte-app, is het lokaal runnen van de web-api ook nodig. 
Om deze te runnen; volg de README in de [web-api repo](https://github.com/SelSovID/web-api).

### starten van de svelte-app lokaal
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

### aanpassingen
Wanneer de CSS is aangepast moet deze opnieuw gebuild worden, dit kan je doen met het volgende command in de terminal:
```console
npm run compile-themes
```