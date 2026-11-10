# Raport: portal Radio ZET o kuli w Wildze

Stan na 10 listopada 2026. Praca jest lokalna. Kod nie został jeszcze wysłany do GitHuba ani opublikowany na GitHub Pages.

## Cel

Serwis informacyjny wizualnie zbliżony do czerwono-białego portalu ze zrzutów, ale z własnym znakiem i faviconem narysowanymi w projekcie. Wszystkie relacje dotyczą srebrnej kuli w Wildze (08-470, powiat garwoliński, Mazowsze). Ma działać lokalnie, a później pod adresem https://midnajt.github.io/WilgaNews/.

## Ustalone założenia

- Stack: Vite i React. Adres produkcyjny ma przedrostek `/WilgaNews/`.
- Strona główna oraz osobna podstrona każdego artykułu.
- Dwanaście newsów. Data zawsze z dnia otwarcia strony, godziny różne i wcześniejsze niż chwila startu.
- Ton: ciekawość i entuzjazm, bez paniki.
- Osoby i cytaty wymyślone. Bez prawdziwych nazwisk, polityków i urzędników. Zdjęcie posesji nie podaje nazwiska z nazwy pliku źródłowego.
- Prawdziwa geografia i historia Wilgi tylko jako tło: Wisła i rzeka Wilga, letnisko około 60 km od Warszawy, kupno majątku przez Rostworowskich 4 czerwca 1927, osiedle „Wilga nad Wisłą” z 1929 roku, plan Andrzeja Boniego.
- Menu: Wiadomości, Wilga, Obiekt. Prawa kolumna: Najnowsze, sonda tylko w przeglądarce, ilustracyjna pogoda. Bez odtwarzacza i bez numeru telefonu.
- Kolorystyka czerwono-biała, zbliżona do zrzutu. Kolor paska: `#E10600`.
- Stopka na każdej stronie: dane są fikcją, strona powstała w celach badawczych.
- Cztery zdjęcia obiektu używane wymiennie w bohaterze, siatce i artykułach.

## Co powstało

Aplikacja w katalogu projektu. Zależności: React 19, React Router 7, Vite 8.

| Obszar | Pliki |
| --- | --- |
| Konfiguracja | `package.json`, `vite.config.js`, `index.html`, `.gitignore` |
| Wejście i trasy | `src/main.jsx`, `src/App.jsx` |
| Treść | `src/data/articles.js` |
| Widoki | `src/pages/Home.jsx`, `Section.jsx`, `Article.jsx`, `NotFound.jsx` |
| Układ | `src/components/Header.jsx`, `Footer.jsx`, `Layout.jsx`, `Front.jsx`, `Hero.jsx`, `StoryGrid.jsx`, `Sidebar.jsx`, `src/styles.css` |
| Zdjęcia w serwisie | `src/assets/centrum.png`, `kwiaciarnia.png`, `sklep.png`, `domy.png` |
| Favicon | `public/favicon.svg` |
| Opis uruchomienia | `README.md` |
| Kontekst na kolejne rozmowy | `.cursor/rules/shared.mdc` |

Oryginalne zdjęcia zostały w `assets/`. Zrzuty odniesienia to `image.png` i `image2.png`.

Trasy:

- `/` — strona główna
- `/wiadomosci` — wszystkie relacje
- `/wilga` i `/obiekt` — filtr po kategorii
- `/artykul/:slug` — pełny tekst
- nieznany adres — komunikat i powrót na stronę główną

Godziny liczy funkcja `buildTimes` przy pierwszym wczytaniu modułu. Sonda zapisuje wybór w `localStorage` pod kluczem `wilga-news-poll-v1`.

## Sprawdzenie

`npm run build` przeszedł poprawnie. Serwis był odpalony pod http://localhost:5173/WilgaNews/ i sprawdzony w przeglądarce:

- strona główna, działy Wilga, Obiekt i Wiadomości oraz podstrona artykułu
- dwanaście godzin z 10 listopada 2026, wszystkie wcześniejsze niż moment otwarcia
- sonda: wybór, wynik i zapis w przeglądarce, także po ponownym wejściu
- menu na wąskim ekranie oraz brak poziomego przewijania przy szerokości 390 px
- nieistniejący artykuł pokazuje „Nie ma takiej relacji”

Lokalny serwer deweloperski został później zatrzymany. Ponowne uruchomienie: `npm run dev`.

## Czego jeszcze nie ma

- Katalog nie jest repozytorium Gita. Na GitHubie, w `Midnajt/WilgaNews`, na gałęzi `main` leży na razie tylko `LICENSE`.
- Nie ma pliku `.github/workflows/deploy.yml` i GitHub Pages nie jest włączone.
- Docelowy adres po publikacji: https://midnajt.github.io/WilgaNews/.
