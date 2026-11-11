/**
 * Strings introduced by the redesign, kept out of config.ts so that file
 * doesn't grow past its current 1000 lines.
 *
 * All six site languages are complete: en, pl, de, es, it, da. Any key added
 * here must be added to all six — the rest of the site is fully translated,
 * so an English-only string is a visible regression for those visitors.
 * `npm test` covers this (see i18n.test.js).
 */

export const UI_STRINGS = {
  en: {
    // --- Chrome / a11y ---
    Skip_to_content: "Skip to content",
    Primary_navigation: "Primary navigation",
    Footer_navigation: "Footer navigation",
    Choose_language: "Choose language",
    Open_menu: "Open menu",
    Close_menu: "Close menu",
    Close: "Close",
    Decline: "Decline",
    Island: "The island",

    // --- Hero ---
    Hero_eyebrow: "Costa Calma · Fuerteventura",
    Hero_lead:
      "Two bright apartments a few minutes from one of the finest beaches in the Canary Islands. Shared pool, free parking, and sunshine almost every day of the year.",
    Hero_view_apartments: "View the apartments",
    Hero_fact_guests_label: "Guests",
    Hero_fact_sun_label: "Days of sun a year",
    Hero_fact_beach_label: "Walk to the beach",
    Hero_fact_pool_label: "Pool",
    Hero_fact_pool_value: "Shared",

    // --- Home sections ---
    Intro_eyebrow: "Welcome",
    Intro_title: "An island of wind, light and open horizons",
    Apartments_eyebrow: "Where you'll stay",
    Apartments_title: "Two apartments, one quiet courtyard",
    Apartments_lead:
      "Both sleep four, both open onto the shared pool and garden. Pick whichever is free for your dates.",
    Apartment_short_23: "Apartment 23",
    Apartment_short_27: "Apartment 27",
    Rating_checked_on: "Rating last checked {{date}} — see live reviews on Airbnb",
    Rating_reviews_count_one: "{{count}} review",
    Rating_reviews_count_other: "{{count}} reviews",
    Highlights_eyebrow: "What's included",
    Highlights_title: "The things that make a week easy",
    Highlight_pool: "Shared pool",
    Highlight_pool_text:
      "A quiet pool in the garden courtyard, shared with a handful of neighbouring apartments.",
    Highlight_beach: "Minutes from the sand",
    Highlight_beach_text:
      "Costa Calma's main beach is a short walk away, with the long Sotavento dunes just down the coast.",
    Highlight_parking: "Free parking",
    Highlight_parking_text:
      "Park on site at no cost — useful, because the island really is best seen by car.",
    Highlight_climate: "Sun all year",
    Highlight_climate_text:
      "Air temperatures sit between 19 °C and 26 °C month after month, and it almost never rains.",
    Town_eyebrow: "The town",
    Ocean_hint: "Move your cursor through the water",
    La_Alcogida: "La Alcogida is an open-air museum in the village of Tefía, made up of seven traditional Majorero farmhouses restored to show island life as it was a century ago. Craftspeople demonstrate traditional weaving, pottery, and gofio-milling in several of the houses. It's a quiet, unhurried stop and a good contrast to the beaches.",
    Isla_de_Lobos: "Isla de Lobos is a small, uninhabited volcanic island just off Corralejo, reached by a 20-minute ferry. A flat, well-marked trail loops around it past the lagoon of La Caleta del Puertito, with some of the clearest water in the archipelago for swimming and snorkelling. Visitor numbers are capped, so a free permit is required in high season.",
    Montana_Tindaya: "Tindaya is a striking volcanic mountain sacred to the island's original Majo inhabitants, who carved hundreds of foot-shaped petroglyphs into its slopes — among the oldest traces of human presence on Fuerteventura. The mountain is usually seen from the road rather than climbed, as access to the summit is restricted.",
    Dunas_de_Corralejo: "The dunes of the Corralejo Natural Park stretch for several kilometres along the coast north of town, backed by some of the island's best beaches. There's no shade, so an early morning or late afternoon visit is more comfortable than midday.",
    Punta_de_Jandia: "Punta de Jandía is the remote southern tip of the island, reached via a long dirt track past Morro Jable. Its lighthouse looks out over open Atlantic water, and the drive there passes some of Fuerteventura's wildest, least-visited coastline.",
    Video_eyebrow: "From above",
    Video_title: "Fuerteventura from the air",
    Booking_cta_title: "Ready when you are",
    Booking_cta_text:
      "Availability and prices are kept up to date on Airbnb. Pick an apartment to see open dates.",

    // --- Cards / apartment page ---
    // i18next JSON v4 plurals: the suffixed forms are the lookup keys, so
    // there is no bare `Card_guests` — a bare key would never be matched
    // once `count` is passed.
    Card_guests_one: "{{count}} guest",
    Card_guests_other: "{{count}} guests",
    Card_beds_one: "{{count}} bed",
    Card_beds_other: "{{count}} beds",
    Card_baths_one: "{{count}} bathroom",
    Card_baths_other: "{{count}} bathrooms",
    Card_view_details: "View details",
    Apartment_card_image_alt: "Interior of {{name}}",
    Apartment_location_eyebrow: "Costa Calma, Fuerteventura",
    Gallery_open_photo: "Open photo {{number}} full size",
    Gallery_photo_alt: "{{name}} — photo {{number}}",
    Gallery_lightbox_label: "Photo gallery: {{name}}",
    Map_heading: "Where it is",
    Map_title: "Map",
    Map_title_named: "Map showing the location of {{name}}",
    Booking_panel_title: "Check your dates",
    Booking_panel_text:
      "Live availability and prices are on Airbnb. Booking there also covers you with their payment protection.",
    Booking_panel_size: "Size",
    Booking_bar_meta: "{{guests}} guests · {{surface}} m²",
    Furnishings_group_property: "The property",
    Furnishings_group_kitchen: "Kitchen",
    Furnishings_group_comfort: "Comfort",
    Furnishings_group_rules: "House rules",

    // --- Footer ---
    Footer_tagline:
      "Two holiday apartments in Costa Calma, looked after by the people who own them.",
    Footer_explore: "Explore",

    // --- Page heads ---
    Sightseeing_eyebrow: "Around the island",
    Sightseeing_title: "Places worth the drive",
    Restaurants_eyebrow: "Eating out",
    Restaurants_title: "Where to eat on Fuerteventura",
    Climate_eyebrow: "Weather",
    Commuting_eyebrow: "Getting here",
    Commuting_title: "From the airport to Costa Calma",

    // --- Map explorer ---
    Filter_by_cuisine: "Filter by cuisine",
    Places_shown_one: "{{count}} place shown",
    Places_shown_other: "{{count}} places shown",
    Get_directions: "Get directions",

    // --- Climate / chart ---
    Climate_chart_caption:
      "Monthly averages for Costa Calma. Temperatures in °C, rainfall in mm.",
    Chart_temp_title: "Air and sea temperature (°C)",
    Chart_rain_title: "Rainfall (mm)",
    Chart_air_temp: "Air",
    Chart_sea_temp: "Sea",
    Chart_rainfall: "Rainfall",
    Chart_show_table: "Show the figures as a table",
    Chart_month: "Month",

    // --- Commuting ---
    Commuting_map_alt:
      "Diagram of Fuerteventura airport showing the bus stop, taxi rank and car park",
    Commuting_map_caption:
      "Fuerteventura airport: the bus stop, taxi rank and car hire pick-up are all outside the arrivals hall.",
    Transport_public_bus: "Public bus",
    Transport_shuttle: "Shared shuttle",
    Transport_taxi: "Taxi",
    Transport_car_hire: "Car hire",

    // --- Island article ---
    Island_eyebrow: "Fuerteventura",
    Island_title: "The oldest of the Canary Islands",
    Island_lead:
      "Golden beaches, turquoise water and a climate that barely changes — plus two thousand years of history most visitors never hear about.",
    Island_intro_title: "A Canarian paradise",
    Island_intro_p1:
      "Fuerteventura is one of the most beguiling islands in the Canary archipelago: a haven for people who love nature, water sports and doing very little. Known for its golden beaches, turquoise water and remarkable climate, it draws visitors all year round.",
    Island_facts_title: "The essentials",
    Island_facts_p1:
      "Fuerteventura is the second largest of the Canary Islands, sitting in the Atlantic just 100 km off the coast of Africa. That proximity gives it a sunny climate the whole year through, with very little rainfall — which makes it a sound choice for a holiday in any season.",
    Island_access_title: "Infrastructure and getting here",
    Island_access_p1:
      "The island's tourist infrastructure keeps growing. There is a wide choice of apartments and more luxurious resorts, all geared towards visitors looking for sun and quiet.",
    Island_access_p2:
      "Flight connections with Europe keep improving too — budget airlines continue to add routes to Fuerteventura, which makes getting here easier and cheaper than it used to be.",
    Island_discover_title: "Fall for its natural beauty",
    Island_discover_p1:
      "Fuerteventura is an island you come to love for its wild landscapes, its welcoming residents and an atmosphere you won't find elsewhere. Whether you're after an active break or a week flat on a beach, there is something here for you.",
    Island_history_title: "From ancient peoples to a modern island",
    Island_history_p1:
      "As the oldest of the Canary Islands, Fuerteventura holds a history stretching back thousands of years. It's a popular holiday destination today, but its past is every bit as interesting as its present attractions — and knowing a little of it changes how the island looks.",
    Island_settlers_title: "The first settlers",
    Island_settlers_p1:
      "The earliest traces of settlement date to roughly 2000 BC, when the first inhabitants — known as the Majos or Mahos — arrived from North Africa. They lived settled lives, farming, fishing and keeping livestock. Their knowledge of navigation was limited, but they managed to survive in Fuerteventura's harsh conditions on the island's minimal resources.",
    Island_conquest_title: "The Spanish conquest and Betancuria",
    Island_conquest_p1:
      "A pivotal moment came with the Spanish conquest in the 15th century. In 1404 Jean de Béthencourt, a French knight in the service of the Castilian crown, mounted an expedition to the Canary Islands and took both Fuerteventura and Lanzarote. Béthencourt founded the island's first capital, Betancuria, which remained its administrative and religious centre for a long time.",
    Island_conquest_p2:
      "Betancuria is a small town today, but much of its colonial history survives. Walking its streets you can see the Iglesia de Santa María, the island's first cathedral, along with period houses that still speak of the Spanish inheritance.",
    Island_pirates_title: "Pirates and raids",
    Island_pirates_p1:
      "Through the 17th and 18th centuries Fuerteventura, like the other Canary Islands, was exposed to repeated pirate attacks. The best known episode was the raid by Johan van Hoorn in 1740. The raids often caused serious damage, but the island always rebuilt — which says something about the character of the people who lived here.",
    Island_nineteenth_title: "The 19th century and integration with Spain",
    Island_nineteenth_p1:
      "In the 19th century, after many years of colonial rule, the Canary Islands — Fuerteventura among them — were fully integrated into Spain as one of its provinces. Isolated from the mainland though it was, the island began to develop economically, largely through agriculture, goat herding and the production of Majorero cheese, which went on to find admirers worldwide.",
    Island_twentieth_title: "The 20th century and the turn to tourism",
    Island_twentieth_p1:
      "The 20th century brought further change. Farming gradually stopped being the main livelihood and the island turned towards tourism. Thanks to its climate, its beaches and a wide range of water sports, Fuerteventura became one of Europe's favourite holiday destinations — drawing visitors not only for its natural assets but for a history you can trace at almost every turn.",
    Island_twentieth_p2:
      "So when you visit, don't only use the beaches. Look into the heritage of the Majos, the colonial history in Betancuria, the story of the pirate raids. The castle at Caleta de Fuste and the museums in Puerto del Rosario are good places to start.",
    Island_why_title: "Why the island's history matters to visitors",
    Island_why_1:
      "Culture and heritage — Fuerteventura is more than sun and sand. It's an island with a singular history that shaped the character it has now.",
    Island_why_2:
      "A more genuine trip — understanding the island's past makes its culture, its traditions and its people easier to read.",
    Island_why_3:
      "Places most people miss — Fuerteventura's history is full of corners that reward anyone curious enough to look.",
    Island_closing_title: "Go and see for yourself",
    Island_closing_p1:
      "Fuerteventura is a place where history meets the present day. From its first settlers to today's visitors, it has always been an island that fascinates. Come and find out why.",
  },

  pl: {
    // --- Chrome / a11y ---
    Skip_to_content: "Przejdź do treści",
    Primary_navigation: "Nawigacja główna",
    Footer_navigation: "Nawigacja w stopce",
    Choose_language: "Wybierz język",
    Open_menu: "Otwórz menu",
    Close_menu: "Zamknij menu",
    Close: "Zamknij",
    Decline: "Odrzuć",
    Island: "Wyspa",

    // --- Hero ---
    Hero_eyebrow: "Costa Calma · Fuerteventura",
    Hero_lead:
      "Dwa jasne apartamenty kilka minut od jednej z najpiękniejszych plaż Wysp Kanaryjskich. Wspólny basen, bezpłatny parking i słońce niemal każdego dnia w roku.",
    Hero_view_apartments: "Zobacz apartamenty",
    Hero_fact_guests_label: "Gości",
    Hero_fact_sun_label: "Słonecznych dni w roku",
    Hero_fact_beach_label: "Spacer na plażę",
    Hero_fact_pool_label: "Basen",
    Hero_fact_pool_value: "Wspólny",

    // --- Home sections ---
    Intro_eyebrow: "Witamy",
    Intro_title: "Wyspa wiatru, światła i otwartych horyzontów",
    Apartments_eyebrow: "Gdzie zamieszkasz",
    Apartments_title: "Dwa apartamenty, jeden spokojny dziedziniec",
    Apartments_lead:
      "Oba pomieszczą cztery osoby i oba wychodzą na wspólny basen i ogród. Wybierz ten, który jest wolny w Twoim terminie.",
    Apartment_short_23: "Apartament 23",
    Apartment_short_27: "Apartament 27",
    Rating_checked_on: "Ocena sprawdzona {{date}} — zobacz aktualne opinie na Airbnb",
    Rating_reviews_count_one: "{{count}} opinia",
    Rating_reviews_count_few: "{{count}} opinie",
    Rating_reviews_count_many: "{{count}} opinii",
    Rating_reviews_count_other: "{{count}} opinii",
    Highlights_eyebrow: "Co w cenie",
    Highlights_title: "To, co sprawia, że tydzień mija lekko",
    Highlight_pool: "Wspólny basen",
    Highlight_pool_text:
      "Spokojny basen na ogrodowym dziedzińcu, dzielony z kilkoma sąsiednimi apartamentami.",
    Highlight_beach: "Kilka minut od piasku",
    Highlight_beach_text:
      "Główna plaża Costa Calma jest w zasięgu spaceru, a długie wydmy Sotavento nieco dalej wzdłuż wybrzeża.",
    Highlight_parking: "Bezpłatny parking",
    Highlight_parking_text:
      "Parking na terenie posesji bez dodatkowych opłat — przydatny, bo wyspę najlepiej zwiedzać samochodem.",
    Highlight_climate: "Słońce przez cały rok",
    Highlight_climate_text:
      "Temperatura powietrza miesiąc po miesiącu utrzymuje się między 19 °C a 26 °C, a deszcz pada tu wyjątkowo rzadko.",
    Town_eyebrow: "Miejscowość",
    Ocean_hint: "Poruszaj kursorem po wodzie",
    La_Alcogida: "La Alcogida to skansen pod gołym niebem we wsi Tefía, złożony z siedmiu tradycyjnych gospodarstw Majorero odrestaurowanych tak, by pokazać życie na wyspie sprzed stu lat. W kilku domach rzemieślnicy pokazują tradycyjne tkactwo, garncarstwo i mielenie gofio. To spokojny, niespieszny przystanek i dobry kontrast dla plaż.",
    Isla_de_Lobos: "Isla de Lobos to niewielka, niezamieszkana wulkaniczna wyspa tuż przy Corralejo, do której dopływa się 20-minutowym promem. Płaski, dobrze oznaczony szlak prowadzi wokół wyspy obok laguny La Caleta del Puertito, gdzie woda należy do najczystszych w archipelagu — idealna do pływania i snorkelingu. Liczba odwiedzających jest ograniczona, więc w sezonie potrzebna jest bezpłatna przepustka.",
    Montana_Tindaya: "Tindaya to charakterystyczna wulkaniczna góra, święta dla pierwotnych mieszkańców wyspy, Majos, którzy wyryli na jej zboczach setki petroglifów w kształcie stóp — jedne z najstarszych śladów obecności człowieka na Fuerteventurze. Górę zwykle ogląda się z drogi, a nie zdobywa, ponieważ dostęp na szczyt jest ograniczony.",
    Dunas_de_Corralejo: "Wydmy Parku Naturalnego Corralejo ciągną się przez kilka kilometrów wzdłuż wybrzeża na północ od miasteczka, a za nimi kryją się jedne z najlepszych plaż wyspy. Nie ma tam cienia, więc wizyta wczesnym rankiem lub późnym popołudniem jest wygodniejsza niż w samo południe.",
    Punta_de_Jandia: "Punta de Jandía to odległy południowy kraniec wyspy, do którego prowadzi długa gruntowa droga za Morro Jable. Tamtejsza latarnia morska spogląda na otwarty Atlantyk, a dojazd prowadzi przez jedne z najdzikszych, najrzadziej odwiedzanych wybrzeży Fuerteventury.",
    Video_eyebrow: "Z góry",
    Video_title: "Fuerteventura z powietrza",
    Booking_cta_title: "Czekamy, kiedy tylko zechcesz",
    Booking_cta_text:
      "Dostępność i ceny są na bieżąco aktualizowane na Airbnb. Wybierz apartament, aby zobaczyć wolne terminy.",

    // --- Cards / apartment page ---
    Card_guests_one: "{{count}} gość",
    Card_guests_few: "{{count}} gości",
    Card_guests_many: "{{count}} gości",
    Card_guests_other: "{{count}} gości",
    Card_beds_one: "{{count}} łóżko",
    Card_beds_few: "{{count}} łóżka",
    Card_beds_many: "{{count}} łóżek",
    Card_beds_other: "{{count}} łóżek",
    Card_baths_one: "{{count}} łazienka",
    Card_baths_few: "{{count}} łazienki",
    Card_baths_many: "{{count}} łazienek",
    Card_baths_other: "{{count}} łazienek",
    Card_view_details: "Zobacz szczegóły",
    Apartment_card_image_alt: "Wnętrze {{name}}",
    Apartment_location_eyebrow: "Costa Calma, Fuerteventura",
    Gallery_open_photo: "Otwórz zdjęcie {{number}} w pełnym rozmiarze",
    Gallery_photo_alt: "{{name}} — zdjęcie {{number}}",
    Gallery_lightbox_label: "Galeria zdjęć: {{name}}",
    Map_heading: "Lokalizacja",
    Map_title: "Mapa",
    Map_title_named: "Mapa z lokalizacją {{name}}",
    Booking_panel_title: "Sprawdź swój termin",
    Booking_panel_text:
      "Aktualna dostępność i ceny są na Airbnb. Rezerwacja tam objęta jest też ochroną płatności Airbnb.",
    Booking_panel_size: "Powierzchnia",
    Booking_bar_meta: "{{guests}} gości · {{surface}} m²",
    Furnishings_group_property: "Posesja",
    Furnishings_group_kitchen: "Kuchnia",
    Furnishings_group_comfort: "Wygoda",
    Furnishings_group_rules: "Zasady pobytu",

    // --- Footer ---
    Footer_tagline:
      "Dwa apartamenty wakacyjne w Costa Calma, prowadzone przez właścicieli.",
    Footer_explore: "Zobacz też",

    // --- Page heads ---
    Sightseeing_eyebrow: "Po wyspie",
    Sightseeing_title: "Miejsca warte podróży",
    Restaurants_eyebrow: "Gdzie zjeść",
    Restaurants_title: "Restauracje na Fuerteventurze",
    Climate_eyebrow: "Pogoda",
    Commuting_eyebrow: "Jak dotrzeć",
    Commuting_title: "Z lotniska do Costa Calma",

    // --- Map explorer ---
    Filter_by_cuisine: "Filtruj według kuchni",
    Places_shown_one: "Pokazano {{count}} miejsce",
    Places_shown_few: "Pokazano {{count}} miejsca",
    Places_shown_many: "Pokazano {{count}} miejsc",
    Places_shown_other: "Pokazano {{count}} miejsc",
    Get_directions: "Wyznacz trasę",

    // --- Climate / chart ---
    Climate_chart_caption:
      "Średnie miesięczne dla Costa Calma. Temperatura w °C, opady w mm.",
    Chart_temp_title: "Temperatura powietrza i wody (°C)",
    Chart_rain_title: "Opady (mm)",
    Chart_air_temp: "Powietrze",
    Chart_sea_temp: "Woda",
    Chart_rainfall: "Opady",
    Chart_show_table: "Pokaż dane w tabeli",
    Chart_month: "Miesiąc",

    // --- Commuting ---
    Commuting_map_alt:
      "Schemat lotniska Fuerteventura z zaznaczonym przystankiem autobusowym, postojem taksówek i parkingiem",
    Commuting_map_caption:
      "Lotnisko Fuerteventura: przystanek autobusowy, postój taksówek i odbiór samochodów z wypożyczalni znajdują się przed halą przylotów.",
    Transport_public_bus: "Autobus publiczny",
    Transport_shuttle: "Bus współdzielony",
    Transport_taxi: "Taksówka",
    Transport_car_hire: "Wynajem samochodu",

    // --- Island article (the original Polish copy) ---
    Island_eyebrow: "Fuerteventura",
    Island_title: "Najstarsza z Wysp Kanaryjskich",
    Island_lead:
      "Złociste plaże, turkusowa woda i klimat, który niemal się nie zmienia — a do tego dwa tysiące lat historii, o której mało kto słyszał.",
    Island_intro_title: "Rajska wyspa kanaryjska",
    Island_intro_p1:
      "Fuerteventura, jedna z najbardziej urokliwych wysp archipelagu Wysp Kanaryjskich, to raj dla miłośników natury, sportów wodnych i relaksu. Znana ze swoich złocistych plaż, turkusowych wód oraz wyjątkowego klimatu, Fuerteventura przyciąga turystów przez cały rok.",
    Island_facts_title: "Najważniejsze informacje",
    Island_facts_p1:
      "Fuerteventura, druga co do wielkości wyspa Kanarów, jest położona na Oceanie Atlantyckim, zaledwie 100 km od wybrzeży Afryki. Dzięki temu wyspa cieszy się wyjątkowym, słonecznym klimatem przez cały rok, z minimalną ilością opadów, co czyni ją idealnym miejscem na wakacje o każdej porze roku.",
    Island_access_title: "Infrastruktura i dojazd",
    Island_access_p1:
      "Fuerteventura to także coraz bardziej rozwijająca się infrastruktura turystyczna. Wyspa oferuje szeroki wybór apartamentów oraz luksusowych resortów, które czekają na przyjęcie turystów spragnionych słońca i relaksu.",
    Island_access_p2:
      "Wyspa zyskuje również na popularności dzięki licznym połączeniom lotniczym z Europą – kolejne tanie linie lotnicze uruchamiają nowe trasy na Fuerteventurę, co sprawia, że podróż jest coraz bardziej dostępna.",
    Island_discover_title: "Zakochaj się w jej naturalnym pięknie",
    Island_discover_p1:
      "Fuerteventura to wyspa, którą pokochasz za jej dzikie krajobrazy, przyjaznych mieszkańców i niepowtarzalną atmosferę. Niezależnie od tego, czy szukasz aktywnego wypoczynku, czy relaksu na plaży, Fuerteventura ma coś dla każdego.",
    Island_history_title:
      "Od starożytnych cywilizacji po nowoczesny raj turystyczny",
    Island_history_p1:
      "Fuerteventura, najstarsza z Wysp Kanaryjskich, skrywa w sobie fascynującą historię, która sięga tysięcy lat wstecz. Dziś to popularne miejsce wypoczynku, ale jej przeszłość jest równie interesująca, co współczesne atrakcje. Planując wakacje na tej wyspie, warto poznać jej bogate dziedzictwo i zrozumieć, jak kształtowała się przez wieki.",
    Island_settlers_title: "Początki osadnictwa",
    Island_settlers_p1:
      "Pierwsze ślady osadnictwa na Fuerteventurze sięgają około 2000 roku p.n.e., kiedy to pierwsi mieszkańcy, znani jako Majos lub Mahos, przybyli na wyspę z Afryki Północnej. Byli to ludzie prowadzący osiadły tryb życia, trudniący się rolnictwem, rybołówstwem i hodowlą. Mimo iż ich wiedza o nawigacji była ograniczona, Majos potrafili przetrwać w surowych warunkach Fuerteventury, wykorzystując minimalne zasoby wyspy.",
    Island_conquest_title: "Podbój hiszpański i powstanie Betancurii",
    Island_conquest_p1:
      "Kluczowym momentem w historii Fuerteventury było jej podbicie przez Hiszpanów w XV wieku. W 1404 roku Jean de Béthencourt, francuski rycerz na służbie korony kastylijskiej, zorganizował wyprawę na Wyspy Kanaryjskie, zdobywając Fuerteventurę i Lanzarote. To Béthencourt założył pierwszą stolicę wyspy – Betancurię, która przez długi czas była centrum administracyjnym i religijnym wyspy.",
    Island_conquest_p2:
      "Betancuria, choć dzisiaj niewielkie miasteczko, zachowała wiele ze swojej kolonialnej historii. Spacerując po jej uliczkach, można zobaczyć Iglesia de Santa María, pierwszą katedrę na wyspie, a także zabytkowe domy przypominające o hiszpańskim dziedzictwie.",
    Island_pirates_title: "Era piratów i najazdów",
    Island_pirates_p1:
      "W XVII i XVIII wieku Fuerteventura, podobnie jak inne wyspy Kanaryjskie, była narażona na liczne ataki piratów. Najbardziej znanym epizodem w tej części historii był atak pirata Johana van Hoorn w 1740 roku. Najazdy często prowadziły do zniszczeń, ale wyspa zawsze się odbudowywała, co pokazuje hart ducha jej mieszkańców.",
    Island_nineteenth_title: "XIX wiek – integracja z Hiszpanią",
    Island_nineteenth_p1:
      "W XIX wieku, po wielu latach kolonialnej dominacji, Wyspy Kanaryjskie, w tym Fuerteventura, zostały w pełni zintegrowane z Hiszpanią jako część jej prowincji. Fuerteventura, choć odizolowana od kontynentu, zaczęła się rozwijać gospodarczo, głównie dzięki rolnictwu, hodowli kóz oraz produkcji sera Majorero, który zyskał popularność na całym świecie.",
    Island_twentieth_title: "XX wiek – droga do nowoczesności",
    Island_twentieth_p1:
      "XX wiek przyniósł Fuerteventurze kolejne zmiany. Z czasem rolnictwo przestało być głównym źródłem utrzymania, a wyspa zaczęła stawiać na turystykę. Dzięki swojemu wyjątkowemu klimatowi, wspaniałym plażom i szerokiej ofercie sportów wodnych, Fuerteventura stała się jednym z ulubionych kierunków wakacyjnych w Europie. Wyspa przyciąga turystów nie tylko swoimi naturalnymi walorami, ale także bogatą historią, którą można odkrywać na każdym kroku.",
    Island_twentieth_p2:
      "Odwiedzając Fuerteventurę, warto nie tylko korzystać z jej pięknych plaż, ale także poznać dziedzictwo Majos, historię kolonialną w Betancurii czy tajemnice najazdów pirackich. Zamek w Caleta de Fuste oraz muzea w Puerto del Rosario to idealne miejsca, by zanurzyć się w fascynującą historię tej wyjątkowej wyspy.",
    Island_why_title: "Dlaczego historia wyspy jest ważna dla turystów?",
    Island_why_1:
      "Kultura i dziedzictwo – Fuerteventura to nie tylko słońce i plaże. To także wyspa z unikatową historią, która ukształtowała jej współczesny charakter.",
    Island_why_2:
      "Autentyczne doświadczenia – poznanie historii wyspy pozwala lepiej zrozumieć jej kulturę, tradycje i ludzi.",
    Island_why_3:
      "Odkrywanie nieznanych miejsc – historia Fuerteventury kryje w sobie wiele tajemnic, które czekają na odkrycie przez ciekawych turystów.",
    Island_closing_title: "Odkryj historię Fuerteventury już dziś",
    Island_closing_p1:
      "Fuerteventura to miejsce, gdzie historia spotyka się z nowoczesnością. Od starożytnych osadników po współczesnych turystów, wyspa ta zawsze była miejscem, które fascynuje i inspiruje. Odwiedź Fuerteventurę i poznaj jej niezwykłą historię.",
  },

  de: {
    // --- Chrome / a11y ---
    Skip_to_content: "Zum Inhalt springen",
    Primary_navigation: "Hauptnavigation",
    Footer_navigation: "Navigation in der Fußzeile",
    Choose_language: "Sprache wählen",
    Open_menu: "Menü öffnen",
    Close_menu: "Menü schließen",
    Close: "Schließen",
    Decline: "Ablehnen",
    Island: "Die Insel",

    // --- Hero ---
    Hero_eyebrow: "Costa Calma · Fuerteventura",
    Hero_lead:
      "Zwei helle Apartments, nur wenige Minuten von einem der schönsten Strände der Kanarischen Inseln entfernt. Gemeinschaftspool, kostenlose Parkplätze und fast das ganze Jahr über Sonne.",
    Hero_view_apartments: "Apartments ansehen",
    Hero_fact_guests_label: "Gäste",
    Hero_fact_sun_label: "Sonnentage im Jahr",
    Hero_fact_beach_label: "Fußweg zum Strand",
    Hero_fact_pool_label: "Pool",
    Hero_fact_pool_value: "Gemeinschaft",

    // --- Home sections ---
    Intro_eyebrow: "Willkommen",
    Intro_title: "Eine Insel aus Wind, Licht und weiten Horizonten",
    Apartments_eyebrow: "Ihre Unterkunft",
    Apartments_title: "Zwei Apartments, ein ruhiger Innenhof",
    Apartments_lead:
      "Beide bieten Platz für vier Personen und liegen am gemeinsamen Pool und Garten. Wählen Sie einfach das Apartment, das in Ihrem Zeitraum frei ist.",
    Apartment_short_23: "Apartment 23",
    Apartment_short_27: "Apartment 27",
    Rating_checked_on: "Bewertung zuletzt geprüft am {{date}} — aktuelle Bewertungen auf Airbnb ansehen",
    Rating_reviews_count_one: "{{count}} Bewertung",
    Rating_reviews_count_other: "{{count}} Bewertungen",
    Highlights_eyebrow: "Inklusive",
    Highlights_title: "Was eine Woche leicht macht",
    Highlight_pool: "Gemeinschaftspool",
    Highlight_pool_text:
      "Ein ruhiger Pool im Gartenhof, den Sie sich mit einigen wenigen Nachbarapartments teilen.",
    Highlight_beach: "Minuten vom Sand",
    Highlight_beach_text:
      "Der Hauptstrand von Costa Calma liegt in Gehweite, die langen Dünen von Sotavento etwas weiter die Küste hinunter.",
    Highlight_parking: "Kostenlose Parkplätze",
    Highlight_parking_text:
      "Parken Sie kostenfrei auf dem Gelände – praktisch, denn die Insel erkundet man am besten mit dem Auto.",
    Highlight_climate: "Sonne das ganze Jahr",
    Highlight_climate_text:
      "Die Lufttemperatur liegt Monat für Monat zwischen 19 °C und 26 °C, und es regnet so gut wie nie.",
    Town_eyebrow: "Der Ort",
    Ocean_hint: "Bewegen Sie den Mauszeiger durchs Wasser",
    La_Alcogida: "La Alcogida ist ein Freilichtmuseum im Dorf Tefía, bestehend aus sieben restaurierten traditionellen Majorero-Gehöften, die das Inselleben vor rund hundert Jahren zeigen. In mehreren Häusern führen Handwerker traditionelles Weben, Töpfern und das Mahlen von Gofio vor. Ein ruhiger, entspannter Zwischenstopp und ein guter Kontrast zu den Stränden.",
    Isla_de_Lobos: "Isla de Lobos ist eine kleine, unbewohnte Vulkaninsel direkt vor Corralejo, die mit einer 20-minütigen Fähre erreichbar ist. Ein flacher, gut markierter Weg führt rund um die Insel vorbei an der Lagune La Caleta del Puertito, deren Wasser zu den klarsten im Archipel zählt — ideal zum Schwimmen und Schnorcheln. Die Besucherzahl ist begrenzt, in der Hochsaison ist daher eine kostenlose Genehmigung nötig.",
    Montana_Tindaya: "Tindaya ist ein markanter Vulkanberg, der den ursprünglichen Bewohnern der Insel, den Majos, heilig war. Sie meißelten Hunderte fußförmiger Petroglyphen in seine Hänge — einige der ältesten Spuren menschlicher Anwesenheit auf Fuerteventura. Der Berg wird meist von der Straße aus betrachtet statt bestiegen, da der Zugang zum Gipfel eingeschränkt ist.",
    Dunas_de_Corralejo: "Die Dünen des Naturparks Corralejo erstrecken sich über mehrere Kilometer entlang der Küste nördlich der Stadt, dahinter liegen einige der schönsten Strände der Insel. Es gibt keinen Schatten, daher ist ein Besuch am frühen Morgen oder späten Nachmittag angenehmer als am Mittag.",
    Punta_de_Jandia: "Punta de Jandía ist die abgelegene Südspitze der Insel, erreichbar über eine lange Schotterpiste hinter Morro Jable. Der dortige Leuchtturm blickt auf den offenen Atlantik, und die Fahrt dorthin führt durch eine der wildesten, am wenigsten besuchten Küsten Fuerteventuras.",
    Video_eyebrow: "Von oben",
    Video_title: "Fuerteventura aus der Luft",
    Booking_cta_title: "Wir sind bereit, wann immer Sie es sind",
    Booking_cta_text:
      "Verfügbarkeit und Preise werden laufend auf Airbnb aktualisiert. Wählen Sie ein Apartment, um freie Termine zu sehen.",

    // --- Cards / apartment page ---
    Card_guests_one: "{{count}} Gast",
    Card_guests_other: "{{count}} Gäste",
    Card_beds_one: "{{count}} Bett",
    Card_beds_other: "{{count}} Betten",
    Card_baths_one: "{{count}} Badezimmer",
    Card_baths_other: "{{count}} Badezimmer",
    Card_view_details: "Details ansehen",
    Apartment_card_image_alt: "Innenansicht von {{name}}",
    Apartment_location_eyebrow: "Costa Calma, Fuerteventura",
    Gallery_open_photo: "Foto {{number}} in voller Größe öffnen",
    Gallery_photo_alt: "{{name}} – Foto {{number}}",
    Gallery_lightbox_label: "Fotogalerie: {{name}}",
    Map_heading: "Lage",
    Map_title: "Karte",
    Map_title_named: "Karte mit der Lage von {{name}}",
    Booking_panel_title: "Termin prüfen",
    Booking_panel_text:
      "Aktuelle Verfügbarkeit und Preise finden Sie auf Airbnb. Eine Buchung dort ist zudem durch den Airbnb-Zahlungsschutz abgedeckt.",
    Booking_panel_size: "Größe",
    Booking_bar_meta: "{{guests}} Gäste · {{surface}} m²",
    Furnishings_group_property: "Anlage",
    Furnishings_group_kitchen: "Küche",
    Furnishings_group_comfort: "Komfort",
    Furnishings_group_rules: "Hausordnung",

    // --- Footer ---
    Footer_tagline:
      "Zwei Ferienwohnungen in Costa Calma, betreut von ihren Eigentümern.",
    Footer_explore: "Entdecken",

    // --- Page heads ---
    Sightseeing_eyebrow: "Rund um die Insel",
    Sightseeing_title: "Orte, für die sich die Fahrt lohnt",
    Restaurants_eyebrow: "Essen gehen",
    Restaurants_title: "Wo man auf Fuerteventura isst",
    Climate_eyebrow: "Wetter",
    Commuting_eyebrow: "Anreise",
    Commuting_title: "Vom Flughafen nach Costa Calma",

    // --- Map explorer ---
    Filter_by_cuisine: "Nach Küche filtern",
    Places_shown_one: "{{count}} Ort angezeigt",
    Places_shown_other: "{{count}} Orte angezeigt",
    Get_directions: "Route planen",

    // --- Climate / chart ---
    Climate_chart_caption:
      "Monatliche Durchschnittswerte für Costa Calma. Temperaturen in °C, Niederschlag in mm.",
    Chart_temp_title: "Luft- und Wassertemperatur (°C)",
    Chart_rain_title: "Niederschlag (mm)",
    Chart_air_temp: "Luft",
    Chart_sea_temp: "Wasser",
    Chart_rainfall: "Niederschlag",
    Chart_show_table: "Werte als Tabelle anzeigen",
    Chart_month: "Monat",

    // --- Commuting ---
    Commuting_map_alt:
      "Übersichtsplan des Flughafens Fuerteventura mit Bushaltestelle, Taxistand und Parkplatz",
    Commuting_map_caption:
      "Flughafen Fuerteventura: Bushaltestelle, Taxistand und Mietwagenübergabe liegen alle vor der Ankunftshalle.",
    Transport_public_bus: "Linienbus",
    Transport_shuttle: "Sammelshuttle",
    Transport_taxi: "Taxi",
    Transport_car_hire: "Mietwagen",

    // --- Island article ---
    Island_eyebrow: "Fuerteventura",
    Island_title: "Die älteste der Kanarischen Inseln",
    Island_lead:
      "Goldene Strände, türkisfarbenes Wasser und ein Klima, das sich kaum verändert – dazu zweitausend Jahre Geschichte, von der die meisten Besucher nie erfahren.",
    Island_intro_title: "Ein kanarisches Paradies",
    Island_intro_p1:
      "Fuerteventura ist eine der reizvollsten Inseln des kanarischen Archipels: ein Paradies für alle, die Natur, Wassersport und Erholung lieben. Bekannt für ihre goldenen Strände, das türkisfarbene Wasser und ihr bemerkenswertes Klima, zieht sie das ganze Jahr über Besucher an.",
    Island_facts_title: "Das Wichtigste in Kürze",
    Island_facts_p1:
      "Fuerteventura ist die zweitgrößte der Kanarischen Inseln und liegt im Atlantik, nur 100 km vor der afrikanischen Küste. Diese Nähe beschert ihr das ganze Jahr über ein sonniges Klima mit sehr wenig Niederschlag – was sie zu jeder Jahreszeit zu einem guten Reiseziel macht.",
    Island_access_title: "Infrastruktur und Anreise",
    Island_access_p1:
      "Die touristische Infrastruktur der Insel wächst stetig. Es gibt eine große Auswahl an Apartments und gehobenen Resorts, alle ausgerichtet auf Gäste, die Sonne und Ruhe suchen.",
    Island_access_p2:
      "Auch die Flugverbindungen nach Europa werden besser – immer mehr Billigfluglinien nehmen Strecken nach Fuerteventura auf, was die Anreise einfacher und günstiger macht als früher.",
    Island_discover_title: "Verlieben Sie sich in ihre natürliche Schönheit",
    Island_discover_p1:
      "Fuerteventura ist eine Insel, die man für ihre wilden Landschaften, ihre gastfreundlichen Bewohner und eine Atmosphäre liebt, die es so anderswo nicht gibt. Ob Sie einen aktiven Urlaub suchen oder eine Woche am Strand – hier finden Sie beides.",
    Island_history_title: "Von frühen Völkern zur modernen Insel",
    Island_history_p1:
      "Als älteste der Kanarischen Inseln hat Fuerteventura eine Geschichte, die Jahrtausende zurückreicht. Heute ist sie ein beliebtes Urlaubsziel, doch ihre Vergangenheit ist mindestens so interessant wie ihre heutigen Attraktionen – und wer ein wenig davon kennt, sieht die Insel mit anderen Augen.",
    Island_settlers_title: "Die ersten Siedler",
    Island_settlers_p1:
      "Die frühesten Siedlungsspuren stammen aus der Zeit um 2000 v. Chr., als die ersten Bewohner – bekannt als Majos oder Mahos – aus Nordafrika kamen. Sie lebten sesshaft von Ackerbau, Fischfang und Viehzucht. Ihre Kenntnisse der Navigation waren begrenzt, doch sie überlebten unter den harten Bedingungen Fuerteventuras mit den minimalen Ressourcen der Insel.",
    Island_conquest_title: "Die spanische Eroberung und Betancuria",
    Island_conquest_p1:
      "Ein Wendepunkt war die spanische Eroberung im 15. Jahrhundert. 1404 unternahm Jean de Béthencourt, ein französischer Ritter im Dienst der kastilischen Krone, eine Expedition zu den Kanarischen Inseln und nahm Fuerteventura und Lanzarote ein. Béthencourt gründete die erste Hauptstadt der Insel, Betancuria, die lange ihr Verwaltungs- und Religionszentrum blieb.",
    Island_conquest_p2:
      "Betancuria ist heute ein kleiner Ort, doch viel von seiner Kolonialgeschichte ist erhalten. In seinen Gassen stehen die Iglesia de Santa María, die erste Kathedrale der Insel, sowie historische Häuser, die bis heute vom spanischen Erbe erzählen.",
    Island_pirates_title: "Piraten und Überfälle",
    Island_pirates_p1:
      "Im 17. und 18. Jahrhundert war Fuerteventura wie die übrigen Kanarischen Inseln wiederholten Piratenangriffen ausgesetzt. Die bekannteste Episode ist der Überfall von Johan van Hoorn im Jahr 1740. Die Angriffe richteten oft schweren Schaden an, doch die Insel baute sich stets wieder auf – was einiges über den Charakter ihrer Bewohner aussagt.",
    Island_nineteenth_title: "Das 19. Jahrhundert und die Eingliederung in Spanien",
    Island_nineteenth_p1:
      "Im 19. Jahrhundert wurden die Kanarischen Inseln und damit auch Fuerteventura nach langer Kolonialherrschaft vollständig als Provinz in Spanien eingegliedert. So abgeschieden vom Festland die Insel auch war, begann sie sich wirtschaftlich zu entwickeln – vor allem durch Landwirtschaft, Ziegenhaltung und die Herstellung des Majorero-Käses, der später weltweit Liebhaber fand.",
    Island_twentieth_title: "Das 20. Jahrhundert und die Wende zum Tourismus",
    Island_twentieth_p1:
      "Das 20. Jahrhundert brachte weitere Veränderungen. Die Landwirtschaft war allmählich nicht mehr die Haupteinnahmequelle, und die Insel wandte sich dem Tourismus zu. Dank ihres Klimas, ihrer Strände und eines breiten Wassersportangebots wurde Fuerteventura zu einem der beliebtesten Urlaubsziele Europas – und zieht Gäste nicht nur wegen ihrer Natur an, sondern wegen einer Geschichte, die sich fast überall ablesen lässt.",
    Island_twentieth_p2:
      "Nutzen Sie bei Ihrem Besuch also nicht nur die Strände. Sehen Sie sich das Erbe der Majos an, die Kolonialgeschichte in Betancuria, die Geschichte der Piratenüberfälle. Die Burg von Caleta de Fuste und die Museen in Puerto del Rosario sind ein guter Anfang.",
    Island_why_title: "Warum die Geschichte der Insel für Besucher zählt",
    Island_why_1:
      "Kultur und Erbe – Fuerteventura ist mehr als Sonne und Sand. Es ist eine Insel mit einer einzigartigen Geschichte, die ihren heutigen Charakter geprägt hat.",
    Island_why_2:
      "Eine echtere Reise – wer die Vergangenheit der Insel versteht, dem erschließen sich ihre Kultur, ihre Traditionen und ihre Menschen leichter.",
    Island_why_3:
      "Orte, die die meisten übersehen – die Geschichte Fuerteventuras steckt voller Winkel, die jeden belohnen, der neugierig genug ist.",
    Island_closing_title: "Machen Sie sich selbst ein Bild",
    Island_closing_p1:
      "Fuerteventura ist ein Ort, an dem Geschichte auf Gegenwart trifft. Von den ersten Siedlern bis zu den heutigen Gästen war sie immer eine Insel, die fasziniert. Kommen Sie und finden Sie heraus, warum.",
  },

  es: {
    // --- Chrome / a11y ---
    Skip_to_content: "Saltar al contenido",
    Primary_navigation: "Navegación principal",
    Footer_navigation: "Navegación del pie de página",
    Choose_language: "Elegir idioma",
    Open_menu: "Abrir menú",
    Close_menu: "Cerrar menú",
    Close: "Cerrar",
    Decline: "Rechazar",
    Island: "La isla",

    // --- Hero ---
    Hero_eyebrow: "Costa Calma · Fuerteventura",
    Hero_lead:
      "Dos apartamentos luminosos a pocos minutos de una de las mejores playas de Canarias. Piscina compartida, aparcamiento gratuito y sol casi todos los días del año.",
    Hero_view_apartments: "Ver los apartamentos",
    Hero_fact_guests_label: "Huéspedes",
    Hero_fact_sun_label: "Días de sol al año",
    Hero_fact_beach_label: "Paseo hasta la playa",
    Hero_fact_pool_label: "Piscina",
    Hero_fact_pool_value: "Compartida",

    // --- Home sections ---
    Intro_eyebrow: "Bienvenidos",
    Intro_title: "Una isla de viento, luz y horizontes abiertos",
    Apartments_eyebrow: "Dónde se alojará",
    Apartments_title: "Dos apartamentos, un patio tranquilo",
    Apartments_lead:
      "Ambos alojan a cuatro personas y dan a la piscina y al jardín comunes. Elija el que esté libre en sus fechas.",
    Apartment_short_23: "Apartamento 23",
    Apartment_short_27: "Apartamento 27",
    Rating_checked_on: "Valoración comprobada el {{date}} — ver las opiniones actuales en Airbnb",
    Rating_reviews_count_one: "{{count}} opinión",
    Rating_reviews_count_other: "{{count}} opiniones",
    Highlights_eyebrow: "Qué incluye",
    Highlights_title: "Lo que hace que la semana sea fácil",
    Highlight_pool: "Piscina compartida",
    Highlight_pool_text:
      "Una piscina tranquila en el patio ajardinado, compartida con unos pocos apartamentos vecinos.",
    Highlight_beach: "A minutos de la arena",
    Highlight_beach_text:
      "La playa principal de Costa Calma está a un corto paseo, y las largas dunas de Sotavento algo más abajo en la costa.",
    Highlight_parking: "Aparcamiento gratuito",
    Highlight_parking_text:
      "Aparque en la propiedad sin coste: útil, porque la isla se recorre mucho mejor en coche.",
    Highlight_climate: "Sol todo el año",
    Highlight_climate_text:
      "La temperatura del aire se mantiene entre 19 °C y 26 °C mes tras mes, y casi nunca llueve.",
    Town_eyebrow: "El pueblo",
    Ocean_hint: "Mueva el cursor por el agua",
    La_Alcogida: "La Alcogida es un museo al aire libre en el pueblo de Tefía, formado por siete casas tradicionales majoreras restauradas para mostrar cómo era la vida en la isla hace un siglo. En varias de ellas, artesanos hacen demostraciones de tejido tradicional, alfarería y molienda de gofio. Es una parada tranquila y sin prisas, buen contraste con las playas.",
    Isla_de_Lobos: "Isla de Lobos es una pequeña isla volcánica deshabitada frente a Corralejo, a la que se llega en un ferry de 20 minutos. Una ruta llana y bien señalizada rodea la isla junto a la laguna de La Caleta del Puertito, con algunas de las aguas más claras del archipiélago para nadar y bucear con tubo. El número de visitantes está limitado, por lo que en temporada alta hace falta un permiso gratuito.",
    Montana_Tindaya: "Tindaya es una llamativa montaña volcánica sagrada para los antiguos majos, que grabaron en sus laderas cientos de podomorfos (grabados con forma de pie), entre los rastros más antiguos de presencia humana en Fuerteventura. La montaña suele contemplarse desde la carretera y no se sube, ya que el acceso a la cima está restringido.",
    Dunas_de_Corralejo: "Las dunas del Parque Natural de Corralejo se extienden varios kilómetros a lo largo de la costa al norte del pueblo, y tras ellas se esconden algunas de las mejores playas de la isla. No hay sombra, así que visitarlas a primera hora de la mañana o a última de la tarde es más cómodo que al mediodía.",
    Punta_de_Jandia: "Punta de Jandía es el extremo sur, remoto, de la isla, al que se llega por una larga pista de tierra pasado Morro Jable. Su faro mira hacia el Atlántico abierto, y el camino hasta allí atraviesa una de las costas más salvajes y menos visitadas de Fuerteventura.",
    Video_eyebrow: "Desde el aire",
    Video_title: "Fuerteventura desde el aire",
    Booking_cta_title: "Listos cuando usted lo esté",
    Booking_cta_text:
      "La disponibilidad y los precios se actualizan en Airbnb. Elija un apartamento para ver las fechas libres.",

    // --- Cards / apartment page ---
    Card_guests_one: "{{count}} huésped",
    Card_guests_other: "{{count}} huéspedes",
    Card_beds_one: "{{count}} cama",
    Card_beds_other: "{{count}} camas",
    Card_baths_one: "{{count}} baño",
    Card_baths_other: "{{count}} baños",
    Card_view_details: "Ver detalles",
    Apartment_card_image_alt: "Interior de {{name}}",
    Apartment_location_eyebrow: "Costa Calma, Fuerteventura",
    Gallery_open_photo: "Abrir la foto {{number}} a tamaño completo",
    Gallery_photo_alt: "{{name}} — foto {{number}}",
    Gallery_lightbox_label: "Galería de fotos: {{name}}",
    Map_heading: "Dónde está",
    Map_title: "Mapa",
    Map_title_named: "Mapa con la ubicación de {{name}}",
    Booking_panel_title: "Consulte sus fechas",
    Booking_panel_text:
      "La disponibilidad y los precios actualizados están en Airbnb. Reservar allí incluye además su protección de pagos.",
    Booking_panel_size: "Superficie",
    Booking_bar_meta: "{{guests}} huéspedes · {{surface}} m²",
    Furnishings_group_property: "La propiedad",
    Furnishings_group_kitchen: "Cocina",
    Furnishings_group_comfort: "Confort",
    Furnishings_group_rules: "Normas de la casa",

    // --- Footer ---
    Footer_tagline:
      "Dos apartamentos de vacaciones en Costa Calma, atendidos por sus propietarios.",
    Footer_explore: "Explorar",

    // --- Page heads ---
    Sightseeing_eyebrow: "Por la isla",
    Sightseeing_title: "Lugares que merecen el viaje",
    Restaurants_eyebrow: "Dónde comer",
    Restaurants_title: "Dónde comer en Fuerteventura",
    Climate_eyebrow: "El tiempo",
    Commuting_eyebrow: "Cómo llegar",
    Commuting_title: "Del aeropuerto a Costa Calma",

    // --- Map explorer ---
    Filter_by_cuisine: "Filtrar por cocina",
    Places_shown_one: "{{count}} lugar mostrado",
    Places_shown_other: "{{count}} lugares mostrados",
    Get_directions: "Cómo llegar",

    // --- Climate / chart ---
    Climate_chart_caption:
      "Medias mensuales de Costa Calma. Temperaturas en °C, precipitaciones en mm.",
    Chart_temp_title: "Temperatura del aire y del mar (°C)",
    Chart_rain_title: "Precipitaciones (mm)",
    Chart_air_temp: "Aire",
    Chart_sea_temp: "Mar",
    Chart_rainfall: "Lluvia",
    Chart_show_table: "Ver los datos en una tabla",
    Chart_month: "Mes",

    // --- Commuting ---
    Commuting_map_alt:
      "Plano del aeropuerto de Fuerteventura con la parada de autobús, la parada de taxis y el aparcamiento",
    Commuting_map_caption:
      "Aeropuerto de Fuerteventura: la parada de autobús, la de taxis y la recogida de coches de alquiler están todas fuera de la sala de llegadas.",
    Transport_public_bus: "Autobús público",
    Transport_shuttle: "Lanzadera compartida",
    Transport_taxi: "Taxi",
    Transport_car_hire: "Alquiler de coches",

    // --- Island article ---
    Island_eyebrow: "Fuerteventura",
    Island_title: "La más antigua de las Islas Canarias",
    Island_lead:
      "Playas doradas, agua turquesa y un clima que apenas cambia, además de dos mil años de historia de los que casi ningún visitante llega a enterarse.",
    Island_intro_title: "Un paraíso canario",
    Island_intro_p1:
      "Fuerteventura es una de las islas más cautivadoras del archipiélago canario: un refugio para quienes aman la naturaleza, los deportes acuáticos y el descanso. Conocida por sus playas doradas, sus aguas turquesas y su clima excepcional, atrae visitantes durante todo el año.",
    Island_facts_title: "Lo esencial",
    Island_facts_p1:
      "Fuerteventura es la segunda isla más grande de Canarias y se encuentra en el Atlántico, a solo 100 km de la costa africana. Esa cercanía le da un clima soleado todo el año, con muy pocas lluvias, lo que la convierte en un buen destino en cualquier estación.",
    Island_access_title: "Infraestructura y cómo llegar",
    Island_access_p1:
      "La infraestructura turística de la isla no deja de crecer. Hay una amplia oferta de apartamentos y resorts de lujo, todos orientados a quienes buscan sol y tranquilidad.",
    Island_access_p2:
      "Las conexiones aéreas con Europa también mejoran: cada vez más aerolíneas de bajo coste añaden rutas a Fuerteventura, lo que hace el viaje más fácil y económico que antes.",
    Island_discover_title: "Enamórese de su belleza natural",
    Island_discover_p1:
      "Fuerteventura es una isla que se quiere por sus paisajes agrestes, por sus habitantes acogedores y por un ambiente que no se encuentra en otra parte. Tanto si busca unas vacaciones activas como una semana tumbado en la playa, aquí lo tiene.",
    Island_history_title: "De los pueblos antiguos a la isla moderna",
    Island_history_p1:
      "Como la más antigua de las Islas Canarias, Fuerteventura guarda una historia que se remonta miles de años. Hoy es un destino vacacional popular, pero su pasado es tan interesante como sus atractivos actuales, y conocerlo un poco cambia la forma de mirarla.",
    Island_settlers_title: "Los primeros pobladores",
    Island_settlers_p1:
      "Los primeros vestigios de poblamiento datan de alrededor del año 2000 a. C., cuando los primeros habitantes —conocidos como majos o mahos— llegaron desde el norte de África. Llevaban una vida sedentaria dedicada a la agricultura, la pesca y la ganadería. Sus conocimientos de navegación eran limitados, pero lograron sobrevivir en las duras condiciones de Fuerteventura con los escasos recursos de la isla.",
    Island_conquest_title: "La conquista española y Betancuria",
    Island_conquest_p1:
      "Un momento decisivo fue la conquista española del siglo XV. En 1404, Jean de Béthencourt, caballero francés al servicio de la corona de Castilla, organizó una expedición a las Islas Canarias y tomó Fuerteventura y Lanzarote. Béthencourt fundó la primera capital de la isla, Betancuria, que durante mucho tiempo fue su centro administrativo y religioso.",
    Island_conquest_p2:
      "Betancuria es hoy un pueblo pequeño, pero conserva buena parte de su historia colonial. Paseando por sus calles se puede ver la Iglesia de Santa María, la primera catedral de la isla, junto a casas de época que siguen hablando de la herencia española.",
    Island_pirates_title: "Piratas e incursiones",
    Island_pirates_p1:
      "Durante los siglos XVII y XVIII, Fuerteventura, como el resto de las Canarias, sufrió repetidos ataques piratas. El episodio más conocido fue la incursión de Johan van Hoorn en 1740. Los ataques solían causar daños graves, pero la isla siempre se reconstruyó, lo que dice algo del carácter de quienes vivían aquí.",
    Island_nineteenth_title: "El siglo XIX y la integración en España",
    Island_nineteenth_p1:
      "En el siglo XIX, tras muchos años de dominio colonial, las Islas Canarias —Fuerteventura entre ellas— se integraron plenamente en España como una de sus provincias. Aun aislada del continente, la isla empezó a desarrollarse económicamente, sobre todo gracias a la agricultura, la cría de cabras y la producción del queso majorero, que acabaría teniendo admiradores en todo el mundo.",
    Island_twentieth_title: "El siglo XX y el giro hacia el turismo",
    Island_twentieth_p1:
      "El siglo XX trajo más cambios. La agricultura dejó poco a poco de ser el medio de vida principal y la isla se volcó en el turismo. Gracias a su clima, sus playas y una amplia oferta de deportes acuáticos, Fuerteventura se convirtió en uno de los destinos favoritos de Europa, atrayendo visitantes no solo por su naturaleza sino por una historia que se puede rastrear casi en cada rincón.",
    Island_twentieth_p2:
      "Así que, cuando venga, no se quede solo en la playa. Asómese al legado de los majos, a la historia colonial de Betancuria, al relato de las incursiones piratas. El castillo de Caleta de Fuste y los museos de Puerto del Rosario son un buen punto de partida.",
    Island_why_title: "Por qué la historia de la isla importa al visitante",
    Island_why_1:
      "Cultura y patrimonio: Fuerteventura es mucho más que sol y arena. Es una isla con una historia singular que ha moldeado el carácter que tiene hoy.",
    Island_why_2:
      "Un viaje más auténtico: entender el pasado de la isla hace más fácil leer su cultura, sus tradiciones y su gente.",
    Island_why_3:
      "Lugares que casi nadie ve: la historia de Fuerteventura está llena de rincones que recompensan a quien tiene la curiosidad de buscarlos.",
    Island_closing_title: "Véalo usted mismo",
    Island_closing_p1:
      "Fuerteventura es un lugar donde la historia se encuentra con el presente. Desde sus primeros pobladores hasta los visitantes de hoy, siempre ha sido una isla que fascina. Venga y descubra por qué.",
  },

  it: {
    // --- Chrome / a11y ---
    Skip_to_content: "Vai al contenuto",
    Primary_navigation: "Navigazione principale",
    Footer_navigation: "Navigazione del piè di pagina",
    Choose_language: "Scegli la lingua",
    Open_menu: "Apri il menu",
    Close_menu: "Chiudi il menu",
    Close: "Chiudi",
    Decline: "Rifiuta",
    Island: "L'isola",

    // --- Hero ---
    Hero_eyebrow: "Costa Calma · Fuerteventura",
    Hero_lead:
      "Due appartamenti luminosi a pochi minuti da una delle più belle spiagge delle Canarie. Piscina condivisa, parcheggio gratuito e sole quasi tutti i giorni dell'anno.",
    Hero_view_apartments: "Guarda gli appartamenti",
    Hero_fact_guests_label: "Ospiti",
    Hero_fact_sun_label: "Giorni di sole all'anno",
    Hero_fact_beach_label: "A piedi dalla spiaggia",
    Hero_fact_pool_label: "Piscina",
    Hero_fact_pool_value: "Condivisa",

    // --- Home sections ---
    Intro_eyebrow: "Benvenuti",
    Intro_title: "Un'isola di vento, luce e orizzonti aperti",
    Apartments_eyebrow: "Dove alloggerete",
    Apartments_title: "Due appartamenti, un cortile tranquillo",
    Apartments_lead:
      "Entrambi ospitano quattro persone e si affacciano sulla piscina e sul giardino comuni. Scegliete quello libero nelle vostre date.",
    Apartment_short_23: "Appartamento 23",
    Apartment_short_27: "Appartamento 27",
    Rating_checked_on: "Valutazione verificata il {{date}} — vedi le recensioni aggiornate su Airbnb",
    Rating_reviews_count_one: "{{count}} recensione",
    Rating_reviews_count_other: "{{count}} recensioni",
    Highlights_eyebrow: "Cosa è incluso",
    Highlights_title: "Ciò che rende la settimana leggera",
    Highlight_pool: "Piscina condivisa",
    Highlight_pool_text:
      "Una piscina tranquilla nel cortile con giardino, condivisa con pochi appartamenti vicini.",
    Highlight_beach: "A pochi minuti dalla sabbia",
    Highlight_beach_text:
      "La spiaggia principale di Costa Calma è a pochi passi, e le lunghe dune di Sotavento poco più giù lungo la costa.",
    Highlight_parking: "Parcheggio gratuito",
    Highlight_parking_text:
      "Parcheggio gratuito in loco: utile, perché l'isola si gira molto meglio in auto.",
    Highlight_climate: "Sole tutto l'anno",
    Highlight_climate_text:
      "La temperatura dell'aria resta tra i 19 °C e i 26 °C mese dopo mese, e non piove quasi mai.",
    Town_eyebrow: "Il paese",
    Ocean_hint: "Muovete il cursore nell’acqua",
    La_Alcogida: "La Alcogida è un museo all'aperto nel villaggio di Tefía, composto da sette tradizionali case majorere restaurate per mostrare la vita sull'isola di un secolo fa. In diverse case, artigiani mostrano la tessitura tradizionale, la ceramica e la macinazione del gofio. È una tappa tranquilla e senza fretta, un buon contrasto rispetto alle spiagge.",
    Isla_de_Lobos: "Isla de Lobos è una piccola isola vulcanica disabitata di fronte a Corralejo, raggiungibile con un traghetto di 20 minuti. Un sentiero pianeggiante e ben segnalato gira intorno all'isola passando per la laguna di La Caleta del Puertito, con alcune delle acque più limpide dell'arcipelago per nuotare e fare snorkeling. Il numero di visitatori è limitato, quindi in alta stagione serve un permesso gratuito.",
    Montana_Tindaya: "Tindaya è una suggestiva montagna vulcanica sacra agli antichi abitanti majos dell'isola, che incisero sui suoi fianchi centinaia di petroglifi a forma di piede, tra le tracce più antiche di presenza umana a Fuerteventura. La montagna si osserva di solito dalla strada e non si scala, poiché l'accesso alla cima è limitato.",
    Dunas_de_Corralejo: "Le dune del Parco Naturale di Corralejo si estendono per diversi chilometri lungo la costa a nord del paese, con alcune delle spiagge più belle dell'isola alle loro spalle. Non c'è ombra, quindi visitarle presto al mattino o nel tardo pomeriggio è più comodo che a mezzogiorno.",
    Punta_de_Jandia: "Punta de Jandía è la remota punta meridionale dell'isola, raggiungibile tramite una lunga pista sterrata oltre Morro Jable. Il suo faro guarda l'Atlantico aperto, e la strada per arrivarci attraversa una delle coste più selvagge e meno visitate di Fuerteventura.",
    Video_eyebrow: "Dall'alto",
    Video_title: "Fuerteventura vista dal cielo",
    Booking_cta_title: "Pronti quando lo siete voi",
    Booking_cta_text:
      "Disponibilità e prezzi sono sempre aggiornati su Airbnb. Scegliete un appartamento per vedere le date libere.",

    // --- Cards / apartment page ---
    Card_guests_one: "{{count}} ospite",
    Card_guests_other: "{{count}} ospiti",
    Card_beds_one: "{{count}} letto",
    Card_beds_other: "{{count}} letti",
    Card_baths_one: "{{count}} bagno",
    Card_baths_other: "{{count}} bagni",
    Card_view_details: "Vedi i dettagli",
    Apartment_card_image_alt: "Interno di {{name}}",
    Apartment_location_eyebrow: "Costa Calma, Fuerteventura",
    Gallery_open_photo: "Apri la foto {{number}} a dimensione piena",
    Gallery_photo_alt: "{{name}} — foto {{number}}",
    Gallery_lightbox_label: "Galleria fotografica: {{name}}",
    Map_heading: "Dove si trova",
    Map_title: "Mappa",
    Map_title_named: "Mappa con la posizione di {{name}}",
    Booking_panel_title: "Verifica le date",
    Booking_panel_text:
      "Disponibilità e prezzi aggiornati sono su Airbnb. Prenotando lì siete coperti anche dalla loro protezione pagamenti.",
    Booking_panel_size: "Superficie",
    Booking_bar_meta: "{{guests}} ospiti · {{surface}} m²",
    Furnishings_group_property: "La struttura",
    Furnishings_group_kitchen: "Cucina",
    Furnishings_group_comfort: "Comfort",
    Furnishings_group_rules: "Regole della casa",

    // --- Footer ---
    Footer_tagline:
      "Due appartamenti per vacanze a Costa Calma, curati dai proprietari in persona.",
    Footer_explore: "Esplora",

    // --- Page heads ---
    Sightseeing_eyebrow: "In giro per l'isola",
    Sightseeing_title: "Posti che valgono il viaggio",
    Restaurants_eyebrow: "Mangiare fuori",
    Restaurants_title: "Dove mangiare a Fuerteventura",
    Climate_eyebrow: "Meteo",
    Commuting_eyebrow: "Come arrivare",
    Commuting_title: "Dall'aeroporto a Costa Calma",

    // --- Map explorer ---
    Filter_by_cuisine: "Filtra per cucina",
    Places_shown_one: "{{count}} luogo mostrato",
    Places_shown_other: "{{count}} luoghi mostrati",
    Get_directions: "Indicazioni stradali",

    // --- Climate / chart ---
    Climate_chart_caption:
      "Medie mensili per Costa Calma. Temperature in °C, precipitazioni in mm.",
    Chart_temp_title: "Temperatura dell'aria e del mare (°C)",
    Chart_rain_title: "Precipitazioni (mm)",
    Chart_air_temp: "Aria",
    Chart_sea_temp: "Mare",
    Chart_rainfall: "Pioggia",
    Chart_show_table: "Mostra i dati in tabella",
    Chart_month: "Mese",

    // --- Commuting ---
    Commuting_map_alt:
      "Piantina dell'aeroporto di Fuerteventura con la fermata dell'autobus, il posteggio dei taxi e il parcheggio",
    Commuting_map_caption:
      "Aeroporto di Fuerteventura: la fermata dell'autobus, il posteggio dei taxi e il ritiro delle auto a noleggio sono tutti fuori dall'area arrivi.",
    Transport_public_bus: "Autobus di linea",
    Transport_shuttle: "Navetta condivisa",
    Transport_taxi: "Taxi",
    Transport_car_hire: "Noleggio auto",

    // --- Island article ---
    Island_eyebrow: "Fuerteventura",
    Island_title: "La più antica delle Isole Canarie",
    Island_lead:
      "Spiagge dorate, acqua turchese e un clima che quasi non cambia — più duemila anni di storia di cui la maggior parte dei visitatori non sente mai parlare.",
    Island_intro_title: "Un paradiso canario",
    Island_intro_p1:
      "Fuerteventura è una delle isole più affascinanti dell'arcipelago canario: un rifugio per chi ama la natura, gli sport acquatici e il riposo. Nota per le sue spiagge dorate, l'acqua turchese e un clima eccezionale, attira visitatori tutto l'anno.",
    Island_facts_title: "L'essenziale",
    Island_facts_p1:
      "Fuerteventura è la seconda isola più grande delle Canarie e si trova nell'Atlantico, a soli 100 km dalla costa africana. Questa vicinanza le garantisce un clima soleggiato tutto l'anno, con pochissime precipitazioni: una buona scelta in qualsiasi stagione.",
    Island_access_title: "Infrastrutture e come arrivare",
    Island_access_p1:
      "L'infrastruttura turistica dell'isola continua a crescere. C'è un'ampia scelta di appartamenti e resort di lusso, tutti pensati per chi cerca sole e tranquillità.",
    Island_access_p2:
      "Anche i collegamenti aerei con l'Europa migliorano: sempre più compagnie low cost aggiungono rotte verso Fuerteventura, rendendo il viaggio più semplice ed economico rispetto a un tempo.",
    Island_discover_title: "Innamoratevi della sua bellezza naturale",
    Island_discover_p1:
      "Fuerteventura è un'isola che si ama per i suoi paesaggi selvaggi, per i suoi abitanti accoglienti e per un'atmosfera che altrove non si trova. Che cerchiate una vacanza attiva o una settimana stesi in spiaggia, qui c'è quello che volete.",
    Island_history_title: "Dai popoli antichi all'isola moderna",
    Island_history_p1:
      "In quanto più antica delle Isole Canarie, Fuerteventura custodisce una storia che risale a migliaia di anni fa. Oggi è una meta turistica molto frequentata, ma il suo passato è interessante quanto le sue attrazioni attuali — e conoscerlo un po' cambia il modo di guardarla.",
    Island_settlers_title: "I primi abitanti",
    Island_settlers_p1:
      "Le prime tracce di insediamento risalgono a circa il 2000 a.C., quando i primi abitanti — noti come Majos o Mahos — arrivarono dal Nord Africa. Conducevano una vita stanziale, dedicandosi all'agricoltura, alla pesca e all'allevamento. Le loro conoscenze di navigazione erano limitate, ma riuscirono a sopravvivere nelle dure condizioni di Fuerteventura con le scarse risorse dell'isola.",
    Island_conquest_title: "La conquista spagnola e Betancuria",
    Island_conquest_p1:
      "Un momento decisivo fu la conquista spagnola del XV secolo. Nel 1404 Jean de Béthencourt, cavaliere francese al servizio della corona di Castiglia, organizzò una spedizione alle Isole Canarie e prese Fuerteventura e Lanzarote. Béthencourt fondò la prima capitale dell'isola, Betancuria, che a lungo ne fu il centro amministrativo e religioso.",
    Island_conquest_p2:
      "Betancuria oggi è un piccolo paese, ma conserva molto della sua storia coloniale. Camminando per le sue strade si vedono la Iglesia de Santa María, la prima cattedrale dell'isola, e case d'epoca che raccontano ancora l'eredità spagnola.",
    Island_pirates_title: "Pirati e incursioni",
    Island_pirates_p1:
      "Nel XVII e XVIII secolo Fuerteventura, come le altre Canarie, fu esposta a ripetuti attacchi di pirati. L'episodio più noto è l'incursione di Johan van Hoorn nel 1740. Le razzie causavano spesso danni gravi, ma l'isola si ricostruiva sempre, il che dice qualcosa del carattere di chi ci viveva.",
    Island_nineteenth_title: "L'Ottocento e l'integrazione con la Spagna",
    Island_nineteenth_p1:
      "Nell'Ottocento, dopo molti anni di dominio coloniale, le Isole Canarie — Fuerteventura compresa — furono pienamente integrate nella Spagna come una delle sue province. Per quanto isolata dal continente, l'isola cominciò a svilupparsi dal punto di vista economico, soprattutto grazie all'agricoltura, all'allevamento delle capre e alla produzione del formaggio Majorero, che avrebbe poi trovato estimatori in tutto il mondo.",
    Island_twentieth_title: "Il Novecento e la svolta turistica",
    Island_twentieth_p1:
      "Il Novecento portò altri cambiamenti. L'agricoltura smise gradualmente di essere la principale fonte di sostentamento e l'isola si rivolse al turismo. Grazie al clima, alle spiagge e a un'ampia offerta di sport acquatici, Fuerteventura è diventata una delle mete preferite d'Europa — e attira visitatori non solo per la natura, ma per una storia che si legge quasi a ogni angolo.",
    Island_twentieth_p2:
      "Quindi, quando venite, non fermatevi alle spiagge. Guardate l'eredità dei Majos, la storia coloniale di Betancuria, il racconto delle incursioni dei pirati. Il castello di Caleta de Fuste e i musei di Puerto del Rosario sono un buon punto di partenza.",
    Island_why_title: "Perché la storia dell'isola conta per chi la visita",
    Island_why_1:
      "Cultura e patrimonio: Fuerteventura è molto più che sole e sabbia. È un'isola con una storia unica, che ne ha plasmato il carattere attuale.",
    Island_why_2:
      "Un viaggio più autentico: capire il passato dell'isola rende più leggibili la sua cultura, le sue tradizioni e la sua gente.",
    Island_why_3:
      "Luoghi che quasi nessuno vede: la storia di Fuerteventura è piena di angoli che ripagano chi ha la curiosità di cercarli.",
    Island_closing_title: "Venite a vedere di persona",
    Island_closing_p1:
      "Fuerteventura è un luogo dove la storia incontra il presente. Dai primi abitanti ai visitatori di oggi, è sempre stata un'isola che affascina. Venite a scoprire perché.",
  },

  da: {
    // --- Chrome / a11y ---
    Skip_to_content: "Gå til indhold",
    Primary_navigation: "Hovednavigation",
    Footer_navigation: "Navigation i sidefoden",
    Choose_language: "Vælg sprog",
    Open_menu: "Åbn menu",
    Close_menu: "Luk menu",
    Close: "Luk",
    Decline: "Afvis",
    Island: "Øen",

    // --- Hero ---
    Hero_eyebrow: "Costa Calma · Fuerteventura",
    Hero_lead:
      "To lyse lejligheder få minutter fra en af De Kanariske Øers smukkeste strande. Fælles pool, gratis parkering og sol næsten hver dag året rundt.",
    Hero_view_apartments: "Se lejlighederne",
    Hero_fact_guests_label: "Gæster",
    Hero_fact_sun_label: "Soldage om året",
    Hero_fact_beach_label: "Gåtur til stranden",
    Hero_fact_pool_label: "Pool",
    Hero_fact_pool_value: "Fælles",

    // --- Home sections ---
    Intro_eyebrow: "Velkommen",
    Intro_title: "En ø af vind, lys og åbne horisonter",
    Apartments_eyebrow: "Her bor du",
    Apartments_title: "To lejligheder, én stille gårdhave",
    Apartments_lead:
      "Begge har plads til fire og vender ud mod den fælles pool og have. Vælg den, der er ledig i dine datoer.",
    Apartment_short_23: "Lejlighed 23",
    Apartment_short_27: "Lejlighed 27",
    Rating_checked_on: "Bedømmelse sidst tjekket {{date}} — se de aktuelle anmeldelser på Airbnb",
    Rating_reviews_count_one: "{{count}} anmeldelse",
    Rating_reviews_count_other: "{{count}} anmeldelser",
    Highlights_eyebrow: "Det er inkluderet",
    Highlights_title: "Det, der gør ugen let",
    Highlight_pool: "Fælles pool",
    Highlight_pool_text:
      "En rolig pool i havegården, som deles med en håndfuld nabolejligheder.",
    Highlight_beach: "Minutter fra sandet",
    Highlight_beach_text:
      "Costa Calmas hovedstrand ligger inden for gåafstand, og de lange Sotavento-klitter lidt længere nede ad kysten.",
    Highlight_parking: "Gratis parkering",
    Highlight_parking_text:
      "Parkér gratis på adressen — praktisk, for øen opleves klart bedst i bil.",
    Highlight_climate: "Sol året rundt",
    Highlight_climate_text:
      "Lufttemperaturen ligger måned efter måned mellem 19 °C og 26 °C, og det regner stort set aldrig.",
    Town_eyebrow: "Byen",
    Ocean_hint: "Bevæg markøren gennem vandet",
    La_Alcogida: "La Alcogida er et friluftsmuseum i landsbyen Tefía, bestående af syv traditionelle majorero-gårde, restaureret for at vise øens liv for omkring hundrede år siden. I flere af husene viser håndværkere traditionel vævning, keramik og formaling af gofio. Et roligt, afslappet stop og en god kontrast til strandene.",
    Isla_de_Lobos: "Isla de Lobos er en lille, ubeboet vulkansk ø lige ud for Corralejo, som nås med en 20 minutters færgetur. En flad, velmarkeret sti går rundt om øen forbi lagunen La Caleta del Puertito, hvor vandet er blandt det klareste i øgruppen — perfekt til svømning og snorkling. Antallet af besøgende er begrænset, så i højsæsonen kræves en gratis tilladelse.",
    Montana_Tindaya: "Tindaya er et markant vulkansk bjerg, helligt for øens oprindelige majos-befolkning, som indhuggede hundredvis af fodformede petroglyffer i dets skråninger — nogle af de ældste spor af menneskelig tilstedeværelse på Fuerteventura. Bjerget betragtes som regel fra vejen frem for at blive besteget, da adgangen til toppen er begrænset.",
    Dunas_de_Corralejo: "Klitterne i Corralejos naturpark strækker sig flere kilometer langs kysten nord for byen, med nogle af øens bedste strande bag sig. Der er ingen skygge, så et besøg tidligt om morgenen eller sent på eftermiddagen er mere behageligt end midt på dagen.",
    Punta_de_Jandia: "Punta de Jandía er øens afsidesliggende sydspids, som nås via en lang grusvej forbi Morro Jable. Fyrtårnet dér kigger ud over det åbne Atlanterhav, og turen derud går gennem noget af Fuerteventuras vildeste og mindst besøgte kystlinje.",
    Video_eyebrow: "Fra oven",
    Video_title: "Fuerteventura fra luften",
    Booking_cta_title: "Klar, når du er",
    Booking_cta_text:
      "Ledighed og priser opdateres løbende på Airbnb. Vælg en lejlighed for at se ledige datoer.",

    // --- Cards / apartment page ---
    Card_guests_one: "{{count}} gæst",
    Card_guests_other: "{{count}} gæster",
    Card_beds_one: "{{count}} seng",
    Card_beds_other: "{{count}} senge",
    Card_baths_one: "{{count}} badeværelse",
    Card_baths_other: "{{count}} badeværelser",
    Card_view_details: "Se detaljer",
    Apartment_card_image_alt: "Interiør i {{name}}",
    Apartment_location_eyebrow: "Costa Calma, Fuerteventura",
    Gallery_open_photo: "Åbn foto {{number}} i fuld størrelse",
    Gallery_photo_alt: "{{name}} — foto {{number}}",
    Gallery_lightbox_label: "Fotogalleri: {{name}}",
    Map_heading: "Beliggenhed",
    Map_title: "Kort",
    Map_title_named: "Kort med beliggenheden af {{name}}",
    Booking_panel_title: "Tjek dine datoer",
    Booking_panel_text:
      "Aktuel ledighed og priser findes på Airbnb. Booker du der, er du desuden dækket af deres betalingsbeskyttelse.",
    Booking_panel_size: "Størrelse",
    Booking_bar_meta: "{{guests}} gæster · {{surface}} m²",
    Furnishings_group_property: "Ejendommen",
    Furnishings_group_kitchen: "Køkken",
    Furnishings_group_comfort: "Komfort",
    Furnishings_group_rules: "Husregler",

    // --- Footer ---
    Footer_tagline:
      "To ferielejligheder i Costa Calma, passet af dem, der ejer dem.",
    Footer_explore: "Udforsk",

    // --- Page heads ---
    Sightseeing_eyebrow: "Rundt på øen",
    Sightseeing_title: "Steder, turen er værd",
    Restaurants_eyebrow: "Spis ude",
    Restaurants_title: "Hvor man spiser på Fuerteventura",
    Climate_eyebrow: "Vejret",
    Commuting_eyebrow: "Sådan kommer du hertil",
    Commuting_title: "Fra lufthavnen til Costa Calma",

    // --- Map explorer ---
    Filter_by_cuisine: "Filtrér efter køkken",
    Places_shown_one: "{{count}} sted vist",
    Places_shown_other: "{{count}} steder vist",
    Get_directions: "Find vej",

    // --- Climate / chart ---
    Climate_chart_caption:
      "Månedlige gennemsnit for Costa Calma. Temperatur i °C, nedbør i mm.",
    Chart_temp_title: "Luft- og vandtemperatur (°C)",
    Chart_rain_title: "Nedbør (mm)",
    Chart_air_temp: "Luft",
    Chart_sea_temp: "Vand",
    Chart_rainfall: "Nedbør",
    Chart_show_table: "Vis tallene som tabel",
    Chart_month: "Måned",

    // --- Commuting ---
    Commuting_map_alt:
      "Oversigtskort over Fuerteventura Lufthavn med busstoppested, taxiholdeplads og parkering",
    Commuting_map_caption:
      "Fuerteventura Lufthavn: busstoppested, taxiholdeplads og udlevering af lejebiler ligger alle uden for ankomsthallen.",
    Transport_public_bus: "Rutebus",
    Transport_shuttle: "Delt shuttle",
    Transport_taxi: "Taxi",
    Transport_car_hire: "Billeje",

    // --- Island article ---
    Island_eyebrow: "Fuerteventura",
    Island_title: "Den ældste af De Kanariske Øer",
    Island_lead:
      "Gyldne strande, turkis vand og et klima, der næsten ikke ændrer sig — plus to tusind års historie, som de færreste besøgende hører om.",
    Island_intro_title: "Et kanarisk paradis",
    Island_intro_p1:
      "Fuerteventura er en af de mest fortryllende øer i det kanariske øhav: et tilflugtssted for alle, der holder af natur, vandsport og ro. Kendt for sine gyldne strande, det turkisfarvede vand og et bemærkelsesværdigt klima tiltrækker den besøgende året rundt.",
    Island_facts_title: "Det væsentligste",
    Island_facts_p1:
      "Fuerteventura er den næststørste af De Kanariske Øer og ligger i Atlanterhavet, kun 100 km fra Afrikas kyst. Den nærhed giver et solrigt klima hele året med meget lidt nedbør — hvilket gør øen til et fornuftigt valg i enhver sæson.",
    Island_access_title: "Infrastruktur og transport hertil",
    Island_access_p1:
      "Øens turistinfrastruktur vokser fortsat. Der er et bredt udvalg af lejligheder og mere luksuriøse resorts, alle rettet mod gæster, der søger sol og ro.",
    Island_access_p2:
      "Flyforbindelserne til Europa bliver også bedre — flere og flere lavprisselskaber åbner ruter til Fuerteventura, hvilket gør rejsen lettere og billigere end før.",
    Island_discover_title: "Fald for øens naturlige skønhed",
    Island_discover_p1:
      "Fuerteventura er en ø, man kommer til at holde af for dens vilde landskaber, de imødekommende beboere og en stemning, man ikke finder andre steder. Uanset om du vil have en aktiv ferie eller en uge fladt på stranden, er der noget her til dig.",
    Island_history_title: "Fra oldtidens folk til den moderne ø",
    Island_history_p1:
      "Som den ældste af De Kanariske Øer rummer Fuerteventura en historie, der strækker sig tusinder af år tilbage. I dag er den et populært feriemål, men fortiden er mindst lige så interessant som nutidens attraktioner — og kender man bare lidt til den, ser øen anderledes ud.",
    Island_settlers_title: "De første bosættere",
    Island_settlers_p1:
      "De tidligste spor af bosættelse stammer fra omkring år 2000 f.Kr., da de første beboere — kendt som majos eller mahos — kom fra Nordafrika. De levede fastboende af landbrug, fiskeri og husdyrhold. Deres viden om navigation var begrænset, men de klarede sig under Fuerteventuras barske forhold med øens minimale ressourcer.",
    Island_conquest_title: "Den spanske erobring og Betancuria",
    Island_conquest_p1:
      "Et vendepunkt kom med den spanske erobring i 1400-tallet. I 1404 organiserede Jean de Béthencourt, en fransk ridder i den castilianske krones tjeneste, en ekspedition til De Kanariske Øer og indtog både Fuerteventura og Lanzarote. Béthencourt grundlagde øens første hovedstad, Betancuria, der længe forblev dens administrative og religiøse centrum.",
    Island_conquest_p2:
      "Betancuria er en lille by i dag, men meget af dens koloniale historie er bevaret. Går man gennem gaderne, kan man se Iglesia de Santa María, øens første katedral, sammen med gamle huse, der stadig fortæller om den spanske arv.",
    Island_pirates_title: "Pirater og overfald",
    Island_pirates_p1:
      "I 1600- og 1700-tallet var Fuerteventura ligesom de øvrige kanariske øer udsat for gentagne piratangreb. Det mest kendte tilfælde er Johan van Hoorns overfald i 1740. Angrebene forvoldte ofte alvorlig skade, men øen genopbyggede sig altid — hvilket siger noget om beboernes karakter.",
    Island_nineteenth_title: "1800-tallet og integrationen med Spanien",
    Island_nineteenth_p1:
      "I 1800-tallet blev De Kanariske Øer, heriblandt Fuerteventura, efter mange års kolonistyre fuldt integreret i Spanien som en af landets provinser. Trods isolationen fra fastlandet begyndte øen at udvikle sig økonomisk, især gennem landbrug, gedehold og produktionen af Majorero-osten, som siden fik beundrere verden over.",
    Island_twentieth_title: "1900-tallet og vendingen mod turismen",
    Island_twentieth_p1:
      "1900-tallet bragte flere forandringer. Landbruget holdt efterhånden op med at være hovederhvervet, og øen vendte sig mod turismen. Takket være klimaet, strandene og et bredt udvalg af vandsport blev Fuerteventura et af Europas foretrukne feriemål — og tiltrækker gæster ikke blot for naturen, men for en historie, der kan spores næsten overalt.",
    Island_twentieth_p2:
      "Så når du kommer, så nøjes ikke med strandene. Se på majos-folkets arv, den koloniale historie i Betancuria, fortællingen om piratoverfaldene. Borgen i Caleta de Fuste og museerne i Puerto del Rosario er et godt sted at begynde.",
    Island_why_title: "Hvorfor øens historie betyder noget for besøgende",
    Island_why_1:
      "Kultur og arv — Fuerteventura er mere end sol og sand. Det er en ø med en helt særlig historie, der har formet den karakter, den har i dag.",
    Island_why_2:
      "En mere ægte rejse — forstår man øens fortid, bliver dens kultur, traditioner og mennesker lettere at læse.",
    Island_why_3:
      "Steder, de fleste går forbi — Fuerteventuras historie er fuld af kroge, der belønner enhver, der er nysgerrig nok til at lede.",
    Island_closing_title: "Se det selv",
    Island_closing_p1:
      "Fuerteventura er et sted, hvor historien møder nutiden. Fra de første bosættere til nutidens gæster har det altid været en ø, der fascinerer. Kom og find ud af hvorfor.",
  },
};
