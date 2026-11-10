# Raport: portal Radio ZET o kuli w Wildze

Stan na 10 listopada 2026. Serwis jest w repozytorium `Midnajt/WilgaNews` na gałęzi `main` i działa pod adresem https://midnajt.github.io/WilgaNews/.

## Cel

Serwis informacyjny wizualnie zbliżony do czerwono-białego portalu ze zrzutów, ale z własnym znakiem i faviconem narysowanymi w projekcie. Wszystkie relacje dotyczą srebrnej kuli w Wildze (08-470, powiat garwoliński, Mazowsze). Działa lokalnie i pod adresem https://midnajt.github.io/WilgaNews/.

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

Aplikacja w katalogu projektu. Zależności: React 19, React Router 7, Vite 8, React Toastify 11.

| Obszar | Pliki |
| --- | --- |
| Konfiguracja | `package.json`, `vite.config.js`, `index.html`, `.gitignore` |
| Wejście i trasy | `src/main.jsx`, `src/App.jsx` |
| Treść | `src/data/articles.js` |
| Widoki | `src/pages/Home.jsx`, `Section.jsx`, `Article.jsx`, `NotFound.jsx` |
| Układ | `src/components/Header.jsx`, `Footer.jsx`, `Layout.jsx`, `Front.jsx`, `Hero.jsx`, `StoryGrid.jsx`, `Sidebar.jsx`, `ClickNotice.jsx`, `src/styles.css` |
| Zdjęcia w serwisie | `src/assets/centrum.png`, `kwiaciarnia.png`, `sklep.png`, `domy.png` |
| Podgląd linku | `public/og.png`, znaczniki Open Graph i Twitter w `index.html` |
| Favicon | `public/favicon.svg` |
| Publikacja | `.github/workflows/pages.yml` |
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

Duży artykuł na stronie głównej i w działach jest losowany spośród relacji tej strony. Wybrany tekst schodzi z siatki, reszta zostaje w dotychczasowej kolejności. Nowy los jest przy wejściu na stronę główną i przy zmianie działu.

## Podgląd linku

W `index.html` są znaczniki Open Graph i Twitter. Grafika to herb Wilgi na białym polu z czerwonym paskiem, 1200×630, plik `public/og.png`. Adres obrazka: https://midnajt.github.io/WilgaNews/og.png. Messenger i podobne serwisy biorą ten podgląd z publicznego adresu, nie z lokalnego serwera.

## Komunikat po kliknięciu

`ClickNotice` jest zamontowany w `App` i słucha kliknięć w linki, przyciski i etykiety. Przez pierwsze 30 sekund od otwarcia serwisu nic nie pokazuje. Przejście do innego artykułu nie zeruje odliczania. Odświeżenie strony zaczyna je od nowa. Wcześniejsze kliknięcia nie są zapisywane.

Po tym czasie kliknięcie daje czarno-biały komunikat u góry, pismem o stałej szerokości. Zapis ma pary: godzina, klik, urządzenie, przeglądarka, ip. Pogrubione są wartości urządzenia, przeglądarki i adresu IP. Adres bierze się z `api.ipify.org` i jest widoczny tylko w tym komunikacie. Karta znika po około 6,5 sekundy.

## Publikacja

Workflow `.github/workflows/pages.yml` buduje projekt na gałęzi `main` i wgrywa katalog `dist` na GitHub Pages. Po buildzie kopiuje `index.html` do `404.html`, żeby bezpośrednie adresy artykułów i działów też otwierały aplikację. Źródło Pages to GitHub Actions. Ostatnie wdrożenie zakończyło się powodzeniem, a https://midnajt.github.io/WilgaNews/ zwraca stronę z tytułem „Radio ZET — Wilga”.

## Sprawdzenie

`npm run build` przeszedł poprawnie. Serwis był odpalony pod http://localhost:5173/WilgaNews/ i sprawdzony w przeglądarce:

- strona główna, działy Wilga, Obiekt i Wiadomości oraz podstrona artykułu
- dwanaście godzin z 10 listopada 2026, wszystkie wcześniejsze niż moment otwarcia
- sonda: wybór, wynik i zapis w przeglądarce, także po ponownym wejściu
- menu na wąskim ekranie oraz brak poziomego przewijania przy szerokości 390 px
- nieistniejący artykuł pokazuje „Nie ma takiej relacji”
- bohater na stronie głównej, w Wiadomościach i w Wildze był inną relacją niż pierwsza z listy
- kliknięcie zaraz po wejściu nie pokazuje komunikatu, a kliknięcie po 30 sekundach pokazuje czarną kartę z pogrubionym urządzeniem, przeglądarką i adresem IP
- po wysłaniu zmian workflow „Publikacja GitHub Pages” zakończył się powodzeniem, a adres produkcyjny zwraca kod 200

Lokalny serwer deweloperski został później zatrzymany. Ponowne uruchomienie: `npm run dev`.
