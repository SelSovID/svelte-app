## Svelte-app README

### gedeployde versie online
De nieuwste versie staat online op de site: [https://ssi.s.mees.io/](https://ssi.s.mees.io/)

### benodigde applicaties om te installeren
Nodejs is nodig om de app lokaal te starten. Dit is te vinden op de site van [nodejs](https://nodejs.org/en/)

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

Wanneer deze is opgestart kan het zijn dat de pagina van aanvragen een 500 error geeft, dit komt omdat de API aan moet staan om de verbinding te leggen. Volg de stappen in de API Repository om deze op te starten.

### aanpassingen
Wanneer de CSS is aangepast moet deze opnieuw gebuild worden, dit kan je doen met het volgende command in de terminal:
```console
npm run prepare
```