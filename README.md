# Radio ZET — Wilga

Lokalny serwis o srebrnej kuli w Wildze (08-470, powiat garwoliński, Mazowsze). Układ jest czerwono-białym portalem informacyjnym, a wszystkie relacje dotyczą tego samego niezidentyfikowanego obiektu.

**Informacje o obiekcie, cytowane osoby i wyniki sondy są fikcją. Strona została utworzona w celach badawczych.**

## Uruchomienie

```bash
npm install
npm run dev
```

Serwis wstaje pod adresem [http://localhost:5173/WilgaNews/](http://localhost:5173/WilgaNews/).

Godziny przy newsach liczą się przy starcie aplikacji: data jest zawsze z bieżącego dnia, a kolejne relacje dostają wcześniejsze minuty.

## Build

```bash
npm run build
npm run preview
```

Podgląd produkcyjny też korzysta ze ścieżki `/WilgaNews/`.

## GitHub Pages

`base` w Vite jest ustawione na `/WilgaNews/`, czyli pod adres [https://midnajt.github.io/WilgaNews/](https://midnajt.github.io/WilgaNews/) i repozytorium [https://github.com/Midnajt/WilgaNews.git](https://github.com/Midnajt/WilgaNews.git).

Publikacji jeszcze nie włączamy. Najpierw oglądamy serwis lokalnie.
