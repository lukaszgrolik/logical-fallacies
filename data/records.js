import _ from 'lodash';

export default [
  {
    id: _.uniqueId(),
    name: 'argumentum ad auditorem',
    info: 'łac. „argument odwołujący się do audytorium/słuchaczy”',
    description: 'pozamerytoryczny sposób argumentowania, w którym dyskutant nie zwraca się bezpośrednio do oponenta, lecz do audytorium. Jednocześnie nie odpowiada racjonalnie na zarzuty stawiane przez rozmówcę, w sposób populistyczny odwołując się do gustów i upodobań słuchaczy. Pozyskanie audytorium ma na celu wywarcie presji na oponencie, który nie będzie miał śmiałości przeciwstawić się opiniom grona słuchaczy.',
    examples: [
      'Chcąc zakwestionować zasadność teorii Darwina dyskutant zwraca się do audytorium z pytaniem: A kto z państwa pochodzi od małpy?',
      'Chcąc uzasadnić teorię Darwina dyskutant pyta audytorium Czy ktoś z Państwa chce przeczyć badaniom setek naukowców?',
      'Podczas dyskusji nad kwestią odpłatności studiów, dyskutant zadaje pytanie słuchaczom: A któż z państwa chciałby płacić za studia?',
      'Chcąc uzasadnić koncepcję obniżenia podatków, dyskutant pyta: A kto z państwa nie chciałby oddawać fiskusowi mniej?',
      'Chcąc uzasadnić konieczność wysokich podatków dyskutant mówi o zasiłkach dla bezrobotnych i pyta: A kto z państwa chciałby zostać bez środków do życia, jak straci pracę?',
    ]
  },
  {
    id: _.uniqueId(),
    name: 'argumentum ad consequentiam',
    info: 'łac. „argument odwołujący się do następstw”, ang. „slippery slope” - argument równi pochyłej',
    description: 'pozamerytoryczny sposób argumentowania przeciw proponowanemu twierdzeniu poprzez wskazanie, iż jego następstwa logiczne lub przyczynowo-skutkowe są z jakichś powodów nie do przyjęcia i z tego względu twierdzenie to należy odrzuciċ.',
    examples: [
      'X musi byċ prawdą (fałszem), bo tak bardzo podobają mi się (nie podobają mi się) wnioski wypływające z X.',
      `Colin Closet asserts that if we allow same-sex couples to marry, then the next thing we know we'll be allowing people to marry their parents, their cars and even monkeys`,
    ],
  },
  {
    id: _.uniqueId(),
    name: 'argumentum ad personam',
    info: 'łac. „argument skierowany do osoby”',
    description: 'pozamerytoryczny sposób argumentowania, w którym dyskutant porzuca właściwy spór i zaczyna opisywać faktyczne lub rzekome cechy swego przeciwnika. W ten sposób unika stwierdzenia, że jego racjonalne argumenty zostały wyczerpane, a jednocześnie sugeruje audytorium, że poglądy oponenta są fałszywe. Dodatkowo obrażanie oponenta ma na celu wyprowadzenie go z równowagi, tak by utrudnić mu adekwatne reagowanie na przedstawiane argumenty.',
    examples: [
      'Doprawdy pojąć nie mogę, jak państwo możecie dawać wiarę temu idiocie?',
      'Jak może pan wypowiadać się na temat stanu wojennego? Przecież miał pan wtedy 5 lat!',
      'Przewodniczący Komisji Europejskiej nie jest Polakiem, nie może zatem wiedzieć, co jest dobre dla Polski.',
    ],
  },
  {
    id: _.uniqueId(),
    name: 'argumentum ad baculum',
    info: 'łac. „argument odwołujący się do kija”',
    description: 'pozamerytoryczny sposób argumentowania, polegający na grożeniu dyskutantowi przykrymi konsekwencjami nieprzyjęcia naszej tezy, przy czym zabieg ten ma na celu nie przedstawienie jej logicznych następstw, lecz wywarcie presji na rozmówcy za pomocą emocji. W skrajnych wypadkach argument ten może dotyczyć groźby użycia przemocy ze strony samego dyskutanta.',
    examples: [
      'Zaniedbującemu się w nauce synowi ojciec grozi laniem celem zmuszenia go do pilności.',
      'Zakazywanie demonstracji, ze względu na możliwość użycia przemocy przez kontrdemonstrantów.',
      'Możesz pisać co chcesz, pamiętaj jednak, że nasza partia nie toleruje najmniejszych odstępstw od oficjalnej linii.',
      'Przykład użycia argumentu niewerbalnie: osobie przedstawiającej swoje zdanie przystawia się pistolet do skroni i w ten sposób zmusza do zmiany zdania.',
    ],
  },
  {
    id: _.uniqueId(),
    name: 'argumentum ad hominem',
    info: 'łac. „argument dostosowany do danego człowieka”',
    description: 'pozamerytoryczny sposób argumentowania, w którym, na poparcie swojej tezy, dyskutant powołuje się na nasze, nie do końca związane z tematem, opinie lub zachowania. Zabieg ten ma pokazać, że w gruncie rzeczy zgadzamy się z tezą przedstawioną przez dyskutanta, a jeżeli nadal upieramy się przy swoim, to znaczy, że jesteśmy niekonsekwentni w swoich przekonaniach.',
    examples: [
      'Chcąc uniknąć odpytywania, uczniowie przekonują nauczyciela biologii do wycieczki do lasu, powołując się na głoszone przez niego poglądy o konieczności fizycznego kontaktu z naturą w celu jej lepszego poznania.',
      'Nasz rozmówca stwierdza, że najcięższe przestępstwa powinny być karane karą śmierci. Przywołujemy jednak fakt, że jest on członkiem ruchu „pro life”, stwierdzając, że stoi to w sprzeczności z jego deklaracją o karze śmierci.',
      'Stwierdzamy, że nasz rozmówca przegrał dyskusję, bo użył w niej porównania czegoś do nazizmu (prawo Godwina) – nasze stwierdzenie będzie także błędem logicznym znanym w języku angielskim jako fallacy fallacy (stwierdzenie, że przeciwnik nie ma racji na podstawie tego, że popełnił błąd logiczny).',
      'Odniesienie się do hipokryzji przeciwnika, na przykład słynne A u was Murzynów biją!',
    ],
  },
  {
    id: _.uniqueId(),
    name: 'argumentum ad ignorantiam',
    info: 'łac. „argument odwołujący się do niewiedzy”',
    description: 'pozamerytoryczny sposób argumentowania, w którym dyskutant uznaje za dowód prawdziwości swojej tezy fakt, że jego oponent nie potrafi uzasadnić tezy przeciwnej. Jest to błąd logiczny polegający na nie wzięciu pod uwagę, że brak dowodów fałszywości jakiejś tezy nie implikuje jej prawdziwości.',
    examples: [
      'Hipoteza Riemanna musi być nieprawdziwa – nikt nie udowodnił, że jest inaczej.',
      'Hipoteza Riemanna musi być prawdziwa – nikt nie zdołał jej obalić.',
      'To oczywiste, że Bóg istnieje – czy jesteś w stanie udowodnić jego nieistnienie?',
      'To oczywiste, że Bóg nie istnieje – czy jesteś w stanie udowodnić jego istnienie?',
      'To oczywiste, że latający czajniczek Russella istnieje – czy jesteś w stanie udowodnić jego nieistnienie?',
      'To oczywiste, że latający czajniczek Russella nie istnieje – czy jesteś w stanie udowodnić jego istnienie?',
    ],
  },
  {
    id: _.uniqueId(),
    name: 'argumentum ad misericordiam',
    info: 'łac. „argument odwołujący się do litości”, ang. „appeal to emotion”',
    description: 'pozamerytoryczny sposób argumentowania, w którym dyskutant porzuca właściwy spór, starając się odwołać do naszych uczuć. W ten sposób chce wywrzeć na nas presję do zmiany przekonań.',
    examples: [
      'Student, który nie zdał egzaminu, prosi wykładowcę o to, by nie stawiał mu oceny niedostatecznej, ponieważ straci przez to stypendium i nie będzie go stać na dalszą naukę.',
      'Należy podnieść podatki i rozdać pieniądze biednym, bo inaczej ich dzieci będą głodować.',
      `Luke didn't want to eat his sheep's brains with chopped liver and brussel sprouts, but his father told him to think about the poor, starving children in a third world country who weren't fortunate enough to have any food at all.`,
    ],
  },
  {
    id: _.uniqueId(),
    name: 'argumentum ad numerum',
    info: '',
    description: 'błąd logiczny bardzo blisko związany z błędem argumentum ad populum. Popełniany jest, gdy ktoś przekonuje, że słuszność jakiegoś poglądu jest wprost proporcjonalna do liczby tych, którzy go popierają.',
    examples: [
      'Większość religioznawców uważa, że Ewangeliści nie przedstawili prawdy o Jezusie, a jedynie wiarę ówczesnych wspólnot. Należy więc uznać to rozwiązanie za słuszne.',
      'Boga nie ma, wystarczy zauważyć, że większość naukowców w USA to ateiści.',
      'Bóg istnieje, wystarczy zauważyć, że większość ludzi na świecie to wierzący.',
    ],
  },
  {
    id: _.uniqueId(),
    name: 'argumentum ad populum',
    info: 'łac. „argument odwołujący się do upodobań ludu”',
    description: 'pozamerytoryczny sposób argumentowania, w którym mówca odwołuje się do gustów, upodobań i przesądów tłumu. Bazując na egoizmie narodowym, instynktach, stereotypach czy uprzedzeniach, retor próbuje w ten sposób pozyskać lud do swojej tezy. Argument ten bazuje na niechęci większości ludzi do naruszenia status quo – innowacji, wszystkiego, co nowe i nieznane, trudnych problemów wymagających intensywnego myślenia, niejednoznaczności czy nonkonformizmu.',
    examples: [
      'podżegacz na wiecu: Wszyscy doskonale wiecie, że R. to banda złodziei, wichrzycieli, oszustów i darmozjadów! Od zawsze tacy byli i to się nigdy nie zmieni! Niech się stąd wynoszą skąd przyszli!',
      'W większości krajów świata system podatkowy jest progresywny, a bogaci obłożeni są wysokimi podatkami. To oczywiste, że biednym zawsze należy się zasiłek, finansowany przez bogatych.',
    ],
  },
  {
    id: _.uniqueId(),
    name: 'argumentum ad vanitatem',
    info: 'łac. argument odwołujący się do próżności',
    description: 'pozamerytoryczny sposób argumentowania, w którym dyskutant wykorzystuje próżność drugiej strony w dyskusji, drogą umiejętnie dawkowanych, mniej lub bardziej zasadnych, pochlebstw, celem uzyskania akceptacji wygłaszanego poglądu.',
    examples: [
      'W dyskusji padają zwroty typu: „nie ulega wątpliwości pańska głęboka i wszechstronna znajomość problemu…”, „pan jako ekspert w tej dziedzinie, doskonale wie, że…”, „jako człowiek inteligentny na pewno pan rozumie, że…”, po których następuje podanie własnego poglądu i oczekiwanie, że zjednany komplementami dyskutant bez zastrzeżeń zaakceptuje nasze stanowisko.',
    ],
  },
  {
    id: _.uniqueId(),
    name: 'argumentum ad verecundiam',
    info: 'łac. „argument do nieśmiałości”',
    description: 'pozamerytoryczny sposób argumentowania polegający na powoływaniu się na jakiś autorytet, którego druga strona nie uznaje lub z którym nie zgadza się w danej kwestii, ale nie śmie go zakwestionować wskutek skrępowania poczuciem szacunku lub obawą narażenia się na zarzut zarozumiałości.',
    examples: [
      'W dyskusji na tematy naukowe jedna strona powołuje się na autorytet papieża i/lub Pisma Świętego, a adwersarz obawia się zanegować powszechnie akceptowane autorytety.',
      'Ipse dixit (łac. „on sam powiedział”) – stwierdzenie używane przez zwolenników Arystotelesa na uzasadnienie swoich nauk, wcześniej stosowane (w wersji greckiej: autos epha) przez uczniów Pitagorasa.',
    ],
  },
  {
    id: _.uniqueId(),
    name: 'argumentum ad traditionem',
    info: '',
    description: 'pozamerytoryczny sposób argumentowania, w którym dyskutant dla potwierdzenia swojej tezy odwołuje się do wcześniejszych powszechnie uznawanych poglądów. Błąd logiczny występuje wówczas, gdy ktoś argumentuje, że coś musi być prawdziwe, bo wcześniej uznawano taki to a taki pogląd.',
    examples: [
      'Ktoś argumentuje, że coś musi być prawdziwe, bo wcześniej uznawano taki to a taki pogląd.',
    ],
  },
];