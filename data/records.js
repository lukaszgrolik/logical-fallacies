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
    info: 'łac. „argument odwołujący się do następstw”',
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
  }
];