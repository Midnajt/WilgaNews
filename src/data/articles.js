import centrum from '../assets/centrum.png'
import kwiaciarnia from '../assets/kwiaciarnia.png'
import sklep from '../assets/sklep.png'
import domy from '../assets/domy.png'

const photos = {
  centrum,
  kwiaciarnia,
  sklep,
  domy,
}

export const categoryLabel = {
  wiadomosci: 'Wiadomości',
  wilga: 'Wilga',
  obiekt: 'Obiekt',
}

export const sections = {
  wiadomosci: {
    title: 'Wiadomości',
    lead: 'Wszystkie dzisiejsze relacje o kuli w Wildze.',
  },
  wilga: {
    title: 'Wilga',
    lead: 'Osiedle, rzeki i ulice, na które kula weszła jak do domu.',
  },
  obiekt: {
    title: 'Obiekt',
    lead: 'Srebrna kula z bliska: okienka, światło i najlepsze kadry.',
  },
}

const templates = [
  {
    slug: 'kula-wsrod-klonow',
    title: 'Srebrna kula wśród jesiennych klonów. Centrum Wilgi ma nowy punkt widokowy',
    lead: 'W sercu Wilgi, między klonami w jesiennych barwach, stoi srebrna kula. Mieszkańcy umawiają się tu na poranny spacer i na najlepsze zdjęcie dnia.',
    category: 'obiekt',
    image: 'centrum',
    alt: 'Srebrna kula między jesiennymi klonami w centrum Wilgi',
    caption: 'Srebrna kula w centrum Wilgi, między klonami, które właśnie złapały jesień.',
    paragraphs: [
      'Kula weszła w krajobraz tak spokojnie, jakby czekała na ten konkretny kolor liści. Z chodnika widać gładką, nitowaną burtę i trzy wąskie okienka. Adam Wir, który mieszka rzut beretem od centrum, mówi, że co rano sprawdza, które okienko łapie słońce. Dziś wygrało środkowe.',
      'Na ulicy nikt nie podnosi głosu. Ludzie zwalniają, robią zdjęcie i idą dalej w swoich sprawach. Nad dachami wisi gość, jakiego Wilga jeszcze nie miała. „Wygląda jak wielka, wypolerowana kropla” — śmieje się Adam. „Tylko że stoi w miejscu i bardzo jej z tym do twarzy.”',
      'Centrum letniska od lat jest miejscem, w którym łatwo zgubić wzrok między drzewami. Teraz drzewa dostały partnera. Klon po prawej zasłania kawałek burty i właśnie przez to kadr jest lepszy: srebro, złoto liści i zwykłe podwórko.',
      'Wieczorem, kiedy światło schodzi w stronę Wisły, kula robi się cieplejsza w odcieniu. Adam już zapowiedział, że jutro przyjdzie wcześniej. Chce złapać moment, w którym środkowe okienko świeci najładniej.',
    ],
  },
  {
    slug: 'gosc-za-kwiaciarnia',
    title: 'Za kwiaciarnią stanął gość większy niż cały kiosk „Kwiaty”',
    lead: 'Tuż za czerwonym kioskiem z napisem „Kwiaty” widać srebrnego gościa wyższego niż dachy dookoła. Hania Belka mówi, że jeszcze nigdy nie miała takiej witryny.',
    category: 'obiekt',
    image: 'kwiaciarnia',
    alt: 'Srebrna kula za czerwonym kioskiem z kwiatami',
    caption: 'Kula tuż za kioskiem „Kwiaty”. Chryzantemy zostają na pierwszym planie.',
    paragraphs: [
      'Kiosk stoi jak stał: czerwona blacha, chryzantemy w donicach, żółta skrzynka pocztowa przy furtce. Za nim zaczyna się coś, czego nie mieści żaden wazon. Kula jest tak blisko, że z progu kwiaciarni widać nity na burcie, a cień kładzie się na chodnik dopiero po południu.',
      'Hania Belka układa bukiety i co chwilę zerka w górę. „Ludzie wchodzą po kwiaty, a wychodzą z kwiatami i z uśmiechem” — opowiada. „Pytają, czy gość lubi chryzantemy. Mówię, że jeszcze nie wiem, ale widok już polubiła cała ulica.”',
      'Trzy okienka w burcie wyglądają stąd jak półki na światło. Filip Rdest, który przyszedł tylko po jeden kadr, został na cztery. Twierdzi, że czerwień kiosku i srebro kuli to najlepsze zestawienie, jakie Wilga dała mu tej jesieni.',
      'Hania nie przestawia stoiska. Mówi, że kula sama weszła w kompozycję i byłoby szkoda ją poprawiać. Na drzwiach powiesiła kartkę: „Bukiety na widok schodzą szybciej niż zwykle”.',
    ],
  },
  {
    slug: 'poranek-przy-sklepie',
    title: 'Poranek przy sklepie: kula lśni, a bułki schodzą na ciepło',
    lead: 'Przy sklepie z zielonym szyldem poranek wygląda znajomo, tylko niebo ma nowego sąsiada. Kula lśni nad parkingiem, a ciepłe bułki i tak rozchodzą się pierwsze.',
    category: 'wiadomosci',
    image: 'sklep',
    alt: 'Srebrna kula nad sklepem z zielonym szyldem',
    caption: 'Poranny plac przy sklepie. Kula trzyma światło, a zakupy idą swoim trybem.',
    paragraphs: [
      'Parking jest pełny tak, jak w każdy zwykły ranek. Wózki, rowery, ktoś zamyka bagażnik. Nad tym wszystkim wisi srebrna czasza, spokojna i bardzo fotogeniczna. Tomek Brzeg opiera rower o krawężnik i mówi, że dziś trasa nad Wisłę zaczyna się od zadarcia głowy.',
      '„Najpierw wziąłem ją za chmurę, która postanowiła zostać” — śmieje się. „Potem zobaczyłem nity. Chmura nie ma nitów. Ma za to trzy okienka i doskonałe światło od wschodu.”',
      'Zielony szyld odcina się od szarego srebra tak wyraźnie, że zdjęcia powstają już z drugiego końca placu. Nikt nie rezygnuje z zakupów. Kolejka jest krótka, humory długie, a ktoś w drzwiach woła na zewnątrz, żeby poczekać, bo kula nigdzie się nie wybiera.',
      'Tomek obiecuje wrócić po południu, kiedy cień kuli dojdzie do pierwszych miejsc parkingowych. Do tego czasu jedzie nad rzekę. Mówi, że z wału kula wygląda jak druga, bardzo uprzejma wyspa.',
    ],
  },
  {
    slug: 'czerwone-dachy',
    title: 'Między czerwonymi dachami stanął nowy punkt orientacyjny osiedla',
    lead: 'Między domami z czerwonymi dachami kula stała się nowym sposobem na tłumaczenie drogi. „Skręć, jak zobaczysz srebro nad dachówką” — i już wiadomo, gdzie jesteś.',
    category: 'wilga',
    image: 'domy',
    alt: 'Srebrna kula nad domami z czerwonymi dachami',
    caption: 'Kula nad ulicą domów z czerwoną dachówką. Nowy punkt orientacyjny osiedla.',
    paragraphs: [
      'Ulica jest zwyczajna: furtki, tuje, kostka, jesienne rabaty. Nad kalenicami wschodzi gładka burta, tak duża, że dachy wyglądają przy niej jak rządek czerwonych czapek. Irena Borowa, która mieszka w jednym z tych domów, mówi, że rano pierwsze, co robi, to odsłania firankę.',
      '„Mamy nowy punkt orientacyjny i w dodatku grzeczny” — opowiada. „Nie hałasuje, nie zasłania całego nieba, a goście przestali pytać o numer domu. Pytają, czy mogą zostać na tarasie pięć minut dłużej.”',
      'Osiedle Wilga od początku było miejscem, w którym dobrze się oddycha. Sosny, piasek, bliskość Wisły i rzeki Wilgi robiły tu robotę na długo przed tą jesienią. Kula niczego z tego nie skreśla. Dokłada srebrny akcent, który widać z końca ulicy.',
      'Irena zaparzyła już drugi dzbanek i wystawiła dwa krzesła. Mówi, że widok jest zbyt dobry, żeby oglądać go w pojedynkę. Sąsiadka z naprzeciwka przychodzi z własnym kubkiem.',
    ],
  },
  {
    slug: 'kod-08470',
    title: 'Kod 08-470 ma dziś najpogodniejszy temat na Powiślu',
    lead: 'Na Powiślu dziś rozmawia się o jednym kodzie pocztowym. 08-470, Wilga, powiat garwoliński — i o kuli, która sprawia, że ten adres brzmi jak zaproszenie.',
    category: 'wiadomosci',
    image: 'centrum',
    alt: 'Srebrna kula w centrum Wilgi w dziennym świetle',
    caption: 'Centrum Wilgi, kod 08-470. Kula została na dłużej niż jedno zdjęcie.',
    paragraphs: [
      'Wiadomość rozeszła się rano, razem z kawą. Ktoś wysłał zdjęcie z centrum, ktoś dopisał, żeby przyjechać z aparatem, ktoś inny odpisał, że już jest w drodze z Garwolina. W tonie nie ma pośpiechu. Jest ten rodzaj radości, który w małej miejscowości wybucha, kiedy dzieje się coś naprawdę ładnego.',
      'Wilga leży na Mazowszu, nad Wisłą, w miejscu, gdzie do wielkiej rzeki dochodzi też Wilga. Kod 08-470 znają letnicy i listonosze. Dziś znają go też ludzie, którzy chcą zobaczyć, jak srebrna kula układa się między klonami. Julia Brzezina, świeżo po zjeździe z Warszawy, mówi, że adres wpisała w nawigację dwa razy, dla samej przyjemności.',
      '„Z Warszawy mam tu około sześćdziesięciu kilometrów i żałuję, że nie przyjechałam wcześniej” — cieszy się. „Wysiadłam, zobaczyłam burtę nad drzewami i od razu wiedziałam, że pocztówka z tego kodu będzie lepsza niż niejeden widok z wakacji.”',
      'Zostawiamy samą radość: 08-470 ma dziś dobrą widoczność, dobre humory i kulę, która nie spieszy się donikąd. Reszta Powiśla może tylko pozazdrościć kadru.',
    ],
  },
  {
    slug: 'chryzantemy-i-pocztowki',
    title: 'Chryzantemy schodzą razem z pocztówkami tego widoku',
    lead: 'Przy kiosku „Kwiaty” chryzantemy schodzą dziś szybciej niż w zwykły poranek. Ludzie biorą bukiet i od razu proszą, żeby w kadrze było też srebro.',
    category: 'wiadomosci',
    image: 'kwiaciarnia',
    alt: 'Kiosk z kwiatami i srebrna kula w tle',
    caption: 'Chryzantemy przed kioskiem, kula za dachem. Pocztówka składa się sama.',
    paragraphs: [
      'Hania Belka nie nadąża z wiązaniem wstążek. Kolory są jesienne: fiolet, złoto, biel, trochę bordo. Za kioskiem kula trzyma swoje spokojne światło i sprawia, że nawet skromny bukiet wygląda jak rekwizyt z dobrego filmu.',
      '„Jedna pani kupiła chryzantemy i powiedziała, że postawi je na parapecie, bo z okna ma kulę w tle” — relacjonuje Hania. „Druga wzięła trzy wiązanki, bo jedzie z nimi do Warszawy i chce, żeby w domu też było trochę Wilgi.”',
      'Na chodniku leżą liście, a w donicach wciąż jest pełno. Filip Rdest zrobił serię, w której kwiaty są ostre, a burta miękka. Mówi, że to pierwszy raz, kiedy kwiaciarnia jest u niego na pierwszym planie, a cud na drugim — i że właśnie tak powinno zostać.',
      'Hania obiecuje, że kartka o bukietach na widok zostanie do końca tygodnia. Jeśli kula nadal będzie tak fotogeniczna, kartka zostanie na stałe. Nikt przy kiosku nie ma nic przeciwko.',
    ],
  },
  {
    slug: 'zielony-szyld',
    title: 'Zielony szyld, srebrna burta i bardzo dobry humor',
    lead: 'Zielony szyld sklepu i srebrna burta kuli dogadały się bez słowa. Z parkingu widać oba, a ludzie wychodzą z zakupami w lepszym humorze, niż wchodzili.',
    category: 'obiekt',
    image: 'sklep',
    alt: 'Zielony szyld sklepu i srebrna kula nad placem',
    caption: 'Zielony szyld zostaje nisko, kula wysoko. Kontrast ludziom się podoba.',
    paragraphs: [
      'To nie jest widok, który trzeba tłumaczyć. Szyld jest niski i jaskrawy, kula wysoka i spokojna. Między nimi mieści się zwykłe przedpołudnie: samochody, wózek, ktoś z kawą na wynos. Marek Lato, letnik z Warszawy, mówi, że przyjechał po chleb i został na drugi rzut oka.',
      '„W Warszawie mam balkon, tu mam parking z widokiem na kulę. Nie ma porównania” — opowiada. „Trzy okienka wyglądają, jakby ktoś zostawił je uchylone specjalnie dla nas. Na razie wystarcza mi to, co na zewnątrz, i wystarcza z nawiązką.”',
      'Słońce odbija się od nitów i kładzie jasne kreski na placu. Marek mówi, że najładniej jest, kiedy chmura na chwilę zasłoni niebo i kula staje się miękka, jak welon. Potem słońce wraca i srebro znowu iskrzy.',
      'Zielony szyld zostaje na swoim miejscu. Nikt nie proponuje, żeby go przesunąć. Wszyscy są zgodni, że kontrast jest zbyt udany, by go poprawiać.',
    ],
  },
  {
    slug: 'cien-na-tarasach',
    title: 'Cień kuli kładzie się na tarasach osiedla klimatycznego',
    lead: 'Na tarasach domów z czerwonym dachem cień kuli przychodzi punktualnie i zostaje na kawę. Osiedle klimatyczne dostało nowy rytm dnia.',
    category: 'obiekt',
    image: 'domy',
    alt: 'Srebrna kula nad tarasami domów z czerwonym dachem',
    caption: 'Cień kuli schodzi na tarasy wolniej niż kawa stygnie.',
    paragraphs: [
      'Irena Borowa zmierzyła to kubkiem. Kiedy cień burty dotyka poręczy, kawa jest jeszcze ciepła. Kiedy schodzi na rabaty, można już przesiąść się na drugie krzesło, w słońce. „Mamy zegar słoneczny, tylko że w skali całej ulicy” — mówi.',
      'Wilga jako osiedle klimatyczno-wypoczynkowe powstała po to, żeby warszawiacy mogli odetchnąć wśród sosen, nad Wisłą i rzeką Wilgą. Taras był tu zawsze częścią przyjemności: światło, powietrze, widok. Dziś widok ma dodatkową, srebrną współrzędną.',
      'Trzy okienka w burcie świecą nad kalenicą jak trzy ciche lampki. Filip Rdest mówi, że z dołu wyglądają na jednakowe, ale z tarasu Ireny widać, że lewe łapie niebo, a prawe odbija czerwień dachówki. Środkowe, jego zdaniem, jest po prostu z siebie zadowolone.',
      'Irena nie zasłania markizy. Twierdzi, że cień kuli jest przyjemniejszy niż jakakolwiek płachta i że sąsiedzi już pytają, czy mogą wpaść „na godzinę cienia”. Mogą. Dzbanek jest duży.',
    ],
  },
  {
    slug: 'goscie-zostaja-dla-kuli',
    title: 'Goście z Warszawy przyjeżdżali na sosny. Zostają dla kuli',
    lead: 'Przez dekady zjeżdżano do Wilgi po sosnowe powietrze i wodę. Dziś goście z Warszawy zostają dłużej, bo do lasu i Wisły doszła kula.',
    category: 'wilga',
    image: 'centrum',
    alt: 'Kula w centrum Wilgi, widoczna między drzewami',
    caption: 'Między klonami widać burtę. Sosny i Wisła zostają tam, gdzie były.',
    paragraphs: [
      'Marek Lato pamięta Wilgę z dziecięcych weekendów: piach, sosny, droga nad rzekę. Miejscowość leży około sześćdziesięciu kilometrów od Warszawy, w powiecie garwolińskim, i od przedwojnia jest letniskiem. „Przyjeżdżało się tu zwolnić” — mówi. „Dziś przyjeżdża się zwolnić i jeszcze popatrzeć w górę.”',
      'Kula w centrum nie zasłania lasu. Widać ją między klonami, a sosny zostają bliżej wydm i rzeki. Julia Brzezina, która miała zostać jedną noc, przedłużyła pobyt. „Wisła jest na miejscu, rzeka Wilga też, a kula robi z tego widok, którego nie było w żadnym starym prospekcie” — cieszy się.',
      'Historia tego zakątka jest starsza niż najdłuższy weekend. 4 czerwca 1927 roku majątek kupili Maria Ludwika i Stanisław Kostka Rostworowscy, a w 1929 ruszyła parcelacja pod osiedle „Wilga nad Wisłą”. Goście z tamtych lat szukali mikroklimatu sosen. Goście z dzisiaj znajdują ten sam mikroklimat i srebrnego sąsiada.',
      'Marek idzie po południu nad wodę. Mówi, że z brzegu kula jest jak latarnia, która nie musi mrugać. Wystarczy, że jest. Julia zostawia w telefonie miejsce na jeszcze jeden zachód słońca.',
    ],
  },
  {
    slug: 'kadr-z-chodnika',
    title: 'Najładniejszy kadr kuli jest z chodnika przy kiosku',
    lead: 'Filip Rdest obszedł kulę z trzech stron i werdykt ma prosty: najładniej jest z chodnika przy kiosku, między chryzantemami a skrzynką pocztową.',
    category: 'wilga',
    image: 'kwiaciarnia',
    alt: 'Chodnik przy kiosku kwiatowym, z kulą w tle',
    caption: 'Zdaniem fotografa ten chodnik wygrywa z parkiem, parkingiem i tarasem.',
    paragraphs: [
      'Chodnik jest wąski, kostka nierówna, liście trzymają się fug. I właśnie tu, zdaniem Filipa, kula oddycha. Czerwony kiosk daje jej pierwszy plan, drzewo z prawej zamyka kadr, a niebo — dziś wysokie i jasne — robi resztę.',
      '„Z centrum jest majestatycznie, z parkingu wesoło, spomiędzy dachów kameralnie” — wylicza. „Ale z tego chodnika jest tak, jak lubię Wilgę: zwyczajna, kwiatowa i nagle bardzo wielka.” Hania Belka potakuje znad wiaderka z wodą. Mówi, że fotografowie są jej nowymi stałymi gośćmi, zaraz po sąsiadkach.',
      'Osiedle ma długą tradycję spacerów. W 1929 roku układ rysował Andrzej Boni, a drogi miały prowadzić do światła, wody i lasu. Dzisiejszy chodnik przy kiosku nie figuruje w tamtej legendzie, a i tak działa. Prowadzi prosto w zachwyt.',
      'Filip zostawia jedną odbitkę dla Hani. Ma stanąć w kiosku, obok cennika. „Żeby ludzie widzieli, po co tu skręcają” — mówi. Hania już wie, gdzie wbiją pinezkę.',
    ],
  },
  {
    slug: 'parking-widokowy',
    title: 'Parking przed sklepem został najweselszym punktem widokowym',
    lead: 'Miejsca postojowe przed sklepem dostały dziś drugie życie. Przyjeżdża się po zakupy, zostaje na widok, a kula nad placem przyjmuje wszystkich bez kolejki.',
    category: 'wilga',
    image: 'sklep',
    alt: 'Parking przed sklepem z widokiem na srebrną kulę',
    caption: 'Plac przed sklepem. Najweselszy punkt widokowy w promieniu jednej bułki.',
    paragraphs: [
      'Tomek Brzeg twierdzi, że to najbardziej towarzyski punkt widokowy w gminie. Nie trzeba iść na wał ani szukać przerwy w sosnach. Wystarczy stanąć między samochodami, unieść brodę i już jest: srebrna czasza, trzy okienka, jesienne drzewa po prawej.',
      '„Nad Wisłą i tak pójdę” — zaznacza. „Rzeka Wilga też nigdzie nie uciekła. Ale parking ma jedną przewagę: tu kula jest blisko, a bułki jeszcze ciepłe. Da się połączyć zachwyt z prozą i to mi się w Wildze zawsze podobało.”',
      'Ludzie umawiają się tu krótkimi zdaniami. „Stoję przy zielonym szyldzie.” „Jestem dwa auta od wjazdu.” Nikt nikogo nie popędza. Ktoś przesuwa samochód o pół miejsca, żeby kolega zmieścił się w kadrze razem z burtą, i obaj są z tego bardzo zadowoleni.',
      'Z placu widać też zwykłą Wilgę: domy, przewody, niebo po mazowiecku szerokie. Kula niczego nie przykrywa. Dokłada tylko powód, żeby zostać na parkingu minutę dłużej, niż się planowało.',
    ],
  },
  {
    slug: 'dzialki-z-1929',
    title: 'Działki z 1929 roku i dzisiejsze miejsca na zdjęcie',
    lead: 'Prawie sto lat temu Wilgę pocięto na działki letniskowe. Dziś te same ulice dzielą się na miejsca, z których kula wygląda najładniej.',
    category: 'wiadomosci',
    image: 'domy',
    alt: 'Domy letniskowe z czerwonymi dachami i kula w tle',
    caption: 'Domy na dawnych działkach letniskowych. Dziś dzielą się widokiem na kulę.',
    paragraphs: [
      'W 1929 roku Maria Ludwika i Stanisław Kostka Rostworowscy, właściciele majątku kupionego 4 czerwca 1927, ruszyli z osiedlem „Wilga nad Wisłą. Osiedle Klimatyczno-Wypoczynkowe”. Plan Andrzeja Boniego rozrysował ponad dwa i pół tysiąca działek wśród sosen, z myślą o warszawiakach, którzy chcieli wody, lasu i spokojnego światła. Zgodę wydał wtedy wojewoda lubelski Antoni Remiszewski, bo te strony leżały jeszcze w województwie lubelskim.',
      'Działki zostały. Drewniane i murowane domy letniskowe też, obok nich późniejsze dachy z czerwonej dachówki. Irena Borowa, stojąc przy furtce, mówi, że jej kawałek ulicy właśnie dostał nowy użytek. „Nie parcelujemy ziemi. Parcelujemy widoki. Mój taras jest na cień, chodnik sąsiadki na wschód słońca, a koniec ulicy na całą burtę.”',
      'Kod pocztowy ten sam: 08-470. Gmina ta sama, w powiecie garwolińskim, na Mazowszu. Zmieniło się tylko to, że gość z Warszawy pyta dziś nie jak dojechać nad Wisłę, tylko z której działki najlepiej widać kulę. Odpowiedzi są różne i wszystkie brzmią dumnie.',
      'Irena uważa, że dawni gospodarze osiedla poznaliby ten entuzjazm. Ich miejsca znowu ściągają ludzi, którzy chcą tu zostać dłużej, niż planowali. Srebrna burta nad czerwonymi dachami robi to bez jednego plakatu.',
    ],
  },
]

function startOfToday(now) {
  return new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 1, 0, 0)
}

function buildTimes(now, count) {
  const dayStart = startOfToday(now)
  let end = new Date(now.getTime() - 3 * 60 * 1000)
  if (end.getTime() <= dayStart.getTime()) {
    end = new Date(Math.max(now.getTime() - 30 * 1000, dayStart.getTime() + 60 * 1000))
  }

  let start = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 6, 8, 0, 0)
  if (start.getTime() >= end.getTime()) {
    start = new Date(dayStart)
  }

  const span = Math.max(end.getTime() - start.getTime(), 0)
  const times = []

  for (let index = 0; index < count; index += 1) {
    const offset = Math.round((span * index) / Math.max(count - 1, 1))
    const stamp = new Date(end.getTime() - offset)
    stamp.setSeconds(0, 0)
    if (stamp.getTime() < dayStart.getTime()) {
      stamp.setTime(dayStart.getTime())
    }
    times.push(stamp)
  }

  for (let index = 1; index < times.length; index += 1) {
    if (times[index].getTime() >= times[index - 1].getTime()) {
      const earlier = new Date(times[index - 1].getTime() - 60 * 1000)
      times[index] = earlier.getTime() >= dayStart.getTime() ? earlier : new Date(times[index - 1])
    }
  }

  return times
}

function createArticles(now) {
  const times = buildTimes(now, templates.length)
  return templates.map((article, index) => ({
    ...article,
    publishedAt: times[index].toISOString(),
    src: photos[article.image],
  }))
}

let cache

export function getArticles() {
  if (!cache) {
    cache = createArticles(new Date())
  }
  return cache
}

export function getArticle(slug) {
  return getArticles().find((article) => article.slug === slug) ?? null
}

export function articlesForSection(section) {
  const articles = getArticles()
  if (section === 'wiadomosci') return articles
  return articles.filter((article) => article.category === section)
}

export function getRelated(article, limit = 3) {
  const others = getArticles().filter((item) => item.slug !== article.slug)
  const same = others.filter((item) => item.category === article.category)
  const rest = others.filter((item) => item.category !== article.category)
  return [...same, ...rest].slice(0, limit)
}

export function formatTime(iso) {
  return new Intl.DateTimeFormat('pl-PL', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(iso))
}

export function formatDay(iso) {
  return new Intl.DateTimeFormat('pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(iso))
}
