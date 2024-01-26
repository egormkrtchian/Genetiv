const abseits = [
  {prep:'Abseits', translate: "поза; в стороні", sentens: "des Dorfes liegt die Hütte und bietet daher viel Ruhe", alternative1: "innerhalb", alternative2: "ausserhalb"},
  {prep:'Abseits', translate: "поза; в стороні", sentens: "der Hauptstraße steht die Bank und bietet eine schöne Aussicht auf die Berge", alternative1: "innerhalb", alternative2: "ausserhalb"},
  {prep:'Abseits', translate: "поза; в стороні", sentens: "der Autobahn liegt das Dorf und ist nur über kleine Nebenstraßen erreichbar", alternative1: "innerhalb", alternative2: "ausserhalb"},
]

const anhand = [
  {prep:'Anhand', translate: "на основі", sentens: "der Karte können Sie den Weg zum Museum leicht finden", alternative1: "mittels", alternative2: "mithilfe"},
  {prep:'Anhand', translate: "на основі", sentens: "der Präsentation erklärte der Professor die komplexen wissenschaftlichen Konzepte", alternative1: "mittels", alternative2: "mithilfe"},
  {prep:'Anhand', translate: "на основі", sentens: "dieses Experiments können wir die Auswirkungen des Klimawandels besser verstehen", alternative1: "mittels", alternative2: "mithilfe"}
]

const anlasslich = [
  {prep:'Anlässlich', translate: "у зв’язку, з нагоди", sentens: "des Geburtstags meines Bruders planen wir eine Überraschungsparty", alternative1: "wegen", alternative2: "zwecks"},
  {prep:'Anlässlich', translate: "у зв’язку, з нагоди", sentens: "ihres Jubiläums organisierten sie eine Feier im Garten", alternative1: "wegen", alternative2: "zwecks"},
  {prep:'Anlässlich', translate: "у зв’язку, з нагоди", sentens: "des Nationalfeiertags waren die Straßen mit Fahnen geschmückt", alternative1: "wegen", alternative2: "zwecks"},
]
const anstelle = [
  {prep:'Anstelle', translate: "замість", sentens: "des alten Computers kaufte sie sich einen neuen Laptop", alternative1: "anstatt", alternative2: "statt"},
  {prep:'Anstelle', translate: "замість", sentens: "meiner Schwester hat mein Bruder das Auto meiner Eltern repariert", alternative1: "anstatt", alternative2: "statt"},
  {prep:'Anstelle', translate: "замість", sentens: "seines eigenen Schlüssels benutzte er den Ersatzschlüssel seines Nachbarn", alternative1: "anstatt", alternative2: "statt"}
]
const aufgrund = [
  {prep:'Aufgrund', translate: "через, у  зв'язку", sentens: "des starken Regens fiel das Fußballspiel aus", alternative1: "wegen", alternative2: ""},
  {prep:'Aufgrund', translate: "через, у  зв'язку", sentens: "der aktuellen Situation wurde das Konzert abgesagt", alternative1: "wegen", alternative2: ""},
  {prep:'Aufgrund', translate: "через, у  зв'язку", sentens: "seiner Krankheit konnte er nicht am Unterricht teilnehmen", alternative1: "wegen", alternative2: ""},
]
const ausserhalb = [
  {prep:'Außerhalb', translate: "поза, за межами", sentens: "des Schulgeländes liegt der Spielplatz", alternative1: "unterhalb", alternative2: ""},
  {prep:'Außerhalb', translate: "поза, за межами", sentens: "der Saison sind die Preise für Ferienwohnungen viel niedriger", alternative1: "unterhalb", alternative2: ""},
  {prep:'Außerhalb', translate: "поза, за межами", sentens: "des Stadtzentrums befindet sich der Parkplatz", alternative1: "unterhalb", alternative2: ""}
]
const bezuglich = [
  {prep:'Bezüglich', translate: "щодо, відносно", sentens: "des Projekts benötigen wir weitere Informationen", alternative1: "infolge", alternative2: ""},
  {prep:'Bezüglich', translate: "щодо, відносно", sentens: "Ihrer Bewerbung erhalten Sie in Kürze eine Rückmeldung", alternative1: "infolge", alternative2: ""},
  {prep:'Bezüglich', translate: "щодо, відносно", sentens: "des Projekts müssen noch einige Details besprochen werden", alternative1: "infolge", alternative2: ""}
]
const binnen = [
  {prep:'Binnen', translate: "протягом", sentens: "einer Woche müssen die Arbeiten abgeschlossen sein.", alternative1: "", alternative2: ""},
  {prep:'Binnen', translate: "протягом", sentens: "einer Woche müssen die Reparaturen abgeschlossen sein", alternative1: "", alternative2: ""},
  {prep:'Binnen', translate: "протягом", sentens: "eines Monats  muss der Vertrag unterzeichnet werden", alternative1: "", alternative2: ""}
]
const dank = [
  {prep:'Dank', translate: "завдяки", sentens: "des neuen Lehrers verbesserte sich die Leistung der Schüler", alternative1: "mangels", alternative2: ""},
  {prep:'Dank', translate: "завдяки", sentens: "des großzügigen Stipendiums konnte sie ihr Studium finanzieren", alternative1: "mangels", alternative2: ""},
  {prep:'Dank', translate: "завдяки", sentens: "ihrer harten Arbeit und Hingabe war der Fortschritt des Projekts beeindruckend", alternative1: "mangels", alternative2: ""}
]
const infolge = [
  {prep:'Infolge', translate: "унаслідок", sentens: "des Unfalls kam es zu Verkehrsbehinderungen", alternative1: "bezuglich", alternative2: "wegen"},
  {prep:'Infolge', translate: "унаслідок", sentens: "des starken Sturms gab es viele Schäden in der Region", alternative1: "bezuglich", alternative2: "wegen"},
  {prep:'Infolge', translate: "унаслідок", sentens: "der globalen Pandemie änderten sich die Reisepläne drastisch", alternative1: "bezuglich", alternative2: "wegen"}
]
const inmitten = [
  {prep:'Inmitten', translate: "посеред", sentens: "eines wunderschönen Gartens liegt Das Haus ", alternative1: "während", alternative2: ""},
  {prep:'Inmitten', translate: "посеред", sentens: "des Waldes stand ein malerisches kleines Haus", alternative1: "während", alternative2: ""},
  {prep:'Inmitten', translate: "посеред", sentens: "der hektischen Stadt fand sie einen ruhigen Park zum Entspannen", alternative1: "während", alternative2: ""}
]
const innerhalb = [
  {prep:'Innerhalb', translate: "усередині, протягом", sentens: "der Frist müssen alle Unterlagen eingereicht werden", alternative1: "unterhalb", alternative2: "außerhalb"},
  {prep:'Innerhalb', translate: "усередині, протягом", sentens: "des Gebäudes gibt es eine Vielzahl von Büros", alternative1: "unterhalb", alternative2: "außerhalb"},
  {prep:'Innerhalb', translate: "усередині, протягом", sentens: "des Teams wurden verschiedene Arbeitsgruppen gebildet", alternative1: "unterhalb", alternative2: "außerhalb"}
]
const laut = [
  {prep:'Laut', translate: "згідно з", sentens: "des Berichts hat sich die Wirtschaftslage des Landes verbessert", alternative1: "", alternative2: ""},
  {prep:'Laut', translate: "згідно з", sentens: "des Lehrers war die Hausaufgabe für heute nicht zwingend erforderlich", alternative1: "", alternative2: ""},
  {prep:'Laut', translate: "згідно з", sentens: "der Umfrage bevorzugen die meisten Menschen im Sommer Aktivitäten im Freien", alternative1: "", alternative2: ""}
]
const mangels = [
  {prep:'Mangels', translate: "за відсутності", sentens: "ausreichender finanzieller Mittel konnte er nicht in den Urlaub fahren", alternative1: "dank", alternative2: ""},
  {prep:'Mangels', translate: "за відсутності", sentens: "genauer Informationen konnten wir keine fundierte Entscheidung treffen", alternative1: "dank", alternative2: ""},
  {prep:'Mangels', translate: "за відсутності", sentens: "der Alternativen mussten wir uns mit der vorhandenen Situation abfinden", alternative1: "dank", alternative2: ""}
]
const mithilfe = [
  {prep:'Mithilfe', translate: "за допомогою", sentens: "moderner Technologie konnten sie die Produktivität steigern", alternative1: "mittels", alternative2: "anhand"},
  {prep:'Mithilfe', translate: "за допомогою", sentens: "seiner Freunde konnte er das Problem erfolgreich lösen", alternative1: "mittels", alternative2: "anhand"},
  {prep:'Mithilfe', translate: "за допомогою", sentens: "der Bücher und Internetquellen recherchierte sie für ihre Abschlussarbeit", alternative1: "mittels", alternative2: "anhand"}
]
const mittels = [
  {prep:'Mittels', translate: "завдяки, за допомогою", sentens: "spezieller Werkzeuge konnten sie das Projekt schneller abschließen", alternative1: "mithilfe", alternative2: "anhand"},
  {prep:'Mittels', translate: "завдяки, за допомогою", sentens: "eines Diagramms erklärte der Dozent die komplexen Zusammenhänge", alternative1: "mithilfe", alternative2: "anhand"},
  {prep:'Mittels', translate: "завдяки, за допомогою", sentens: "einer speziellen Software konnte das Problem behoben werden", alternative1: "mithilfe", alternative2: "anhand"}
]
const oberhalb = [
  {prep:'Oberhalb', translate: "вище", sentens: "des Regals befand sich eine Reihe von alten Büchern", alternative1: "unterhalb", alternative2: "inmitten"},
  {prep:'Oberhalb', translate: "вище", sentens: "des Flusses ragten majestätische Berge in den Himmel", alternative1: "unterhalb", alternative2: "inmitten"},
  {prep:'Oberhalb', translate: "вище", sentens: "der Tür hing ein kunstvolles Gemälde", alternative1: "unterhalb", alternative2: "inmitten"}
]
const unterhalb = [
  {prep:'Unterhalb', translate: "під", sentens: "des Berggipfels erstreckte sich ein malerisches Tal", alternative1: "oberhalb", alternative2: "inmitten"},
  {prep:'Unterhalb', translate: "під", sentens: "des Konferenzraums befand sich das Büro des Managers", alternative1: "oberhalb", alternative2: "inmitten"},
  {prep:'Unterhalb', translate: "під", sentens: "des Bildes stand eine kurze Beschreibung des Künstlers", alternative1: "oberhalb", alternative2: "inmitten"}
]
const seitens = [
  {prep:'Seitens', translate: "з боку", sentens: "des Unternehmens gab es keine offizielle Erklärung für die Verzögerung", alternative1: "", alternative2: ""},
  {prep:'Seitens', translate: "з боку", sentens: "der Regierung wurden neue Maßnahmen zur Förderung der Bildung ergriffen", alternative1: "", alternative2: ""},
  {prep:'Seitens', translate: "з боку", sentens: "des Kunden gab es Beschwerden über die Servicequalität", alternative1: "", alternative2: ""}
]
const statt = [
  {prep:'Statt', translate: "замість", sentens: "eines Autos benutzte sie ihr Fahrrad für die tägliche Fahrt zur Arbeit", alternative1: "anstatt", alternative2: "anstelle"},
  {prep:'Statt', translate: "замість", sentens: "eines Kaffee trank er Tee, um seine Koffeinaufnahme zu reduzieren", alternative1: "anstatt", alternative2: "anstelle"},
  {prep:'Statt', translate: "замість", sentens: "eines traditionellen Buches bevorzugte sie das Lesen von E-Books", alternative1: "anstatt", alternative2: "anstelle"},
]
const anstatt = [
  {prep:'Anstatt', translate: "замість", sentens: "ihres eigenen Autos benutzt sie das ihres Bruders", alternative1: "statt", alternative2: "anstelle"},
  {prep:'Anstatt', translate: "замість", sentens: "seines Versprechens einzuhalten, entschuldigte er sich einfach", alternative1: "statt", alternative2: "anstelle"},
  {prep:'Anstatt', translate: "замість", sentens: "ihrer eigenen Ideen hat sie die ihres Kollegen verwendet", alternative1: "statt", alternative2: "anstelle"}
]
const trotz = [
  {prep:'Trotz', translate: "незважаючи на", sentens: "des schlechten Wetters entschieden sie sich für einen Spaziergang im Park", alternative1: "", alternative2: ""},
  {prep:'Trotz', translate: "незважаючи на", sentens: "seiner Verletzung spielte der Sportler im entscheidenden Match", alternative1: "", alternative2: ""},
  {prep:'Trotz', translate: "незважаючи на", sentens: "der Warnungen ignorierte er die Gefahr und fuhr weiter", alternative1: "", alternative2: ""}
]
const wahrend = [
  {prep:'Während', translate: "під час", sentens: "des Urlaubs besuchten sie verschiedene Sehenswürdigkeiten", alternative1: "inmitten", alternative2: ""},
  {prep:'Während', translate: "під час", sentens: "der Vorlesung machte der Dozent viele interaktive Übungen", alternative1: "inmitten", alternative2: ""},
  {prep:'Während', translate: "під час", sentens: "des Meetings wurden wichtige Entscheidungen getroffen", alternative1: "inmitten", alternative2: ""}
]
const wegen = [
  {prep:'Wegen', translate: "через", sentens: "des starken Verkehrs kamen sie zu spät zur Arbeit", alternative1: "anlässlich", alternative2: "infolge"},
  {prep:'Wegen', translate: "через", sentens: "des Regens wurde das Open-Air-Konzert abgesagt", alternative1: "anlässlich", alternative2: "infolge"},
  {prep:'Wegen', translate: "через", sentens: "seiner Krankheit konnte er nicht am Treffen teilnehmen", alternative1: "anlässlich", alternative2: "infolge"}
]
const zwecks = [
  {prep:'Zwecks', translate: "для", sentens: "der Verbesserung seiner Sprachkenntnisse besuchte er einen Intensivkurs", alternative1: "anlasslich", alternative2: "wegen"},
  {prep:'Zwecks', translate: "для", sentens: "der Geschäftsverhandlungen unternahmen Sie eine Reise nach Paris ", alternative1: "anlasslich", alternative2: "wegen"},
  {prep:'Zwecks', translate: "для", sentens: "der Teilnahme an der Hochzeitsfeier kaufte Er neue Kleidung ", alternative1: "anlasslich", alternative2: "wegen"}
]

let resultArray = []; // додаємо сюди обрані частини
const prepositions = ['abseits', 'anhand', 'anlässlich', 'anstelle', 'aufgrund', 'außerhalb', 'bezüglich', 'binnen', 'dank', 'infolge', 'inmitten', 'innerhalb', 'laut', 'mangels', 'mithilfe', 'mittels', 'oberhalb', 'unterhalb', 'seitens', 'statt', 'anstatt', 'trotz', 'während', 'wegen', 'zwecks'];
let prepAnswer = [];
let currentWordIndex = 0;
let rightSentens

// ПОЧАТОК блок обробки та перевірки чекбоксів
const btnAllCheck = document.getElementById("btnAllPrepositionenCheck");
const borderCheckBox = document.querySelector('.fw');
const prepositionenCheckboxes = document.querySelectorAll(".TipePrepositionen");
const btnBack = document.getElementById("btnBack")

btnAllCheck.addEventListener('click', ()=>{
  display(btnBack, 1);
  // Отримуємо поточний стан кнопки
  const isSelectAll = btnAllCheck.textContent === 'вибрати всі';
  borderCheckBox.style.border = '2px solid grey';
// Змінюємо стан всіх чекбоксів відповідно до значення isSelectAll
  prepositionenCheckboxes.forEach(function(checkbox){
    checkbox.checked = isSelectAll;
  });
  // Змінюємо текст кнопки відповідно до стану
  btnAllCheck.textContent = isSelectAll ? 'скасувати' : 'вибрати всі';
});

// Додаємо обробник події на кожен чекбокс TipePrepositionen для оновлення стану кнопки "Вибрати всі"
prepositionenCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
      // Перевіряємо, чи всі чекбокси обрані
      const allChecked = Array.from(prepositionenCheckboxes).every(function(checkbox){
        return checkbox.checked;
      });
      display(btnBack, 1);
      btnAllCheck.textContent = allChecked ? 'скасувати' : 'вибрати всі';
    }
  );
});

// Додаємо обробник події на кожен чекбокс QuantityAnsvers для оновлення стану кнопки "Вибрати всі"
const quantityAnsvers = document.querySelectorAll('.allQuantityAnsver');
quantityAnsvers.forEach(checkbox => {
  checkbox.addEventListener('change', ()=>{
    display(btnBack, 1);
  });
});

// при додаванні кліка на чекрокс вертаємо колір рамки
prepositionenCheckboxes.forEach(function(checkbox) { // change  border zurück
  checkbox.addEventListener('change', () => {
    borderCheckBox.style.border = '2px solid grey';
  });
});
// ЗАВЕРШЕННЯ блок обробки та перевірки чекбоксів

// ПОЧАТНОК блок тренування
const btnPlay = document.getElementById("btnPlay");
const blokSetting = document.querySelector(".blokSetting");

//Змінні блока з відповідями
const blockAnswer = document.getElementById("blockAnswer"); // контейнер блока відповідей
const sentences = document.getElementById("sentences"); // задаеме речення
const btnAnswersCont = document.getElementById("btnAnswersCont"); // блок кнопок відповідей
const btnNext = document.getElementById("btnNext"); // кнопка наступного питання
const endGameText = document.getElementById("endGameText"); // вивід на екран блоку кінця гри
const contAnswer = document.getElementById("contAnswer");
const answerButtons = btnAnswersCont.getElementsByClassName('btnAnswer'); 

btnPlay.addEventListener("click", ()=>{
  generateArray();
  play();
})

btnNext.addEventListener("click", ()=>{
  play();
})

function play(){  
  schowNewWord();

  let stopClick = false;
  for (const button of answerButtons) {

    button.addEventListener('mouseover', () => {
      button.classList.add('hover'); // Додавання класу "hover" при наведенні
    });

    button.addEventListener('mouseout', () => {
      button.classList.remove('hover'); // Видалення класу "hover" при видаленні наведення
    });

    button.addEventListener('click', () => {
      if (stopClick) {
        return;
      };

      const selectedPreposition = button.textContent; // Отримуємо текст кнопки
      const currentWord = resultArray[currentWordIndex - 1];
      console.log('click');

      if (selectedPreposition === currentWord.prep.toLowerCase()) {
        button.classList.add('rightAnswer');
        sentences.textContent = `${rightSentens}`;
        stopClick = true;
      } else {
        button.classList.add('wrongAnswer');
        sentences.textContent = `${rightSentens}`;
        for(btn of answerButtons) {
          if (btn.textContent === currentWord.prep.toLowerCase()) {
            btn.classList.add('rightAnswer');
          };
        };
        stopClick = true;
      };
    });
  };
}

let quantityAnsver = 0;

function schowNewWord (){
  if (currentWordIndex < resultArray.length){
    const currentVerb = resultArray[currentWordIndex];
    display(blockAnswer, 1);
    display(contAnswer, 1);
    display(endGameText, 0);
    sentences.textContent = `??? ${currentVerb.sentens}`;
    rightSentens = `${currentVerb.prep} ${currentVerb.sentens}`;
    console.log(rightSentens);
    // запускаємо формування радіокнопо

    varianteAnswers(prepositions, currentVerb.prep.toLowerCase(), quantityAnsver, currentVerb.alternative1, currentVerb.alternative2);
    createButton(prepAnswer);
    currentWordIndex++;
  } else {
    display(contAnswer, 0);
    display(endGameText, 1);  
  }
}

function display (element, type) {
  type === 1 ? element.style.display = 'block' : element.style.display = 'none'; 
}

function generateArray() {
  // Отримати значення з чекбоксів та радіокнопок
  const prepositions = Array.from(document.querySelectorAll('input[name="TipePrepositionen"]:checked')).map(input => input.value); // які препозиції
  quantityAnsver = document.querySelector('input[name="QuantityAnsvers"]:checked').value; // віріанти відповідей

  // Цикл, який перебирає префікси та додає відповідні елементи зі відповідних масивів до resultArray на основі вибору в налаштуваннях
  for (const preposition of prepositions) {
    switch (preposition) {
      case 'abseits':
        resultArray = resultArray.concat(abseits);
        break;
      case 'anhand':
        resultArray = resultArray.concat(anhand);
        break;
      case 'anlasslich':
        resultArray = resultArray.concat(anlasslich);
        break;
      case 'anstelle':
        resultArray = resultArray.concat(anstelle);
        break;
      case 'aufgrund':
        resultArray = resultArray.concat(aufgrund);
        break;
      case 'ausserhalb':
        resultArray = resultArray.concat(ausserhalb);
        break;
      case 'bezuglich':
        resultArray = resultArray.concat(bezuglich);
        break;
      case 'binnen':
        resultArray = resultArray.concat(binnen);
        break;
      case 'dank':
        resultArray = resultArray.concat(dank);
        break;
      case 'infolge':
        resultArray = resultArray.concat(infolge);
        break;
      case 'inmitten':
        resultArray = resultArray.concat(inmitten);
        break;
      case 'innerhalb':
        resultArray = resultArray.concat(innerhalb);
        break;
      case 'laut':
        resultArray = resultArray.concat(laut);
        break;
      case 'mangels':
        resultArray = resultArray.concat(mangels);
        break;
      case 'mithilfe':
        resultArray = resultArray.concat(mithilfe);
        break;
      case 'mittels':
        resultArray = resultArray.concat(mittels);
        break;
      case 'oberhalb':
        resultArray = resultArray.concat(oberhalb);
        break;
      case 'unterhalb':
        resultArray = resultArray.concat(unterhalb);
        break;
      case 'seitens':
        resultArray = resultArray.concat(seitens);
        break;
      case 'statt':
        resultArray = resultArray.concat(statt);
        break;
      case 'anstatt':
        resultArray = resultArray.concat(anstatt);
        break;
      case 'trotz':
        resultArray = resultArray.concat(trotz);
        break;
      case 'wahrend':
        resultArray = resultArray.concat(wahrend);
        break;
      case 'wegen':
        resultArray = resultArray.concat(wegen);
        break;
      case 'zwecks':
        resultArray = resultArray.concat(zwecks);
        break;
      default:
        break;
    };
  };
  if (resultArray.length === 0) { // if array hat keine element
    borderCheckBox.style.border = '2px solid red';
    console.log("array = 0");
  } else {
    mixArray(resultArray);
    display(blokSetting, 0);
    display(btnPlay, 0);
  }
}

//переробляє масив, правильна відповідь на першому місці
// n - кількість  елементів
function varianteAnswers(array, rightAnsver, n, alternative1, alternative2) {
  console.log(array);
  const indexRightAnsver = array.indexOf(rightAnsver);  
  // if (indexRightAnsver !== -1) {
  //   array.splice(indexRightAnsver, 1); // видаляємо
  //   array.unshift(rightAnsver); // додаємо
  // };
  array.splice(indexRightAnsver, 1); // видаляємо
  array.unshift(rightAnsver); // додаємо
  const indexalternative1 = array.indexOf(alternative1);
  if (alternative1) {
    array.splice(indexalternative1, 1);
    array.push(alternative1);
  }
  const indexalternative2 = array.indexOf(alternative2);
  if (alternative2) {
    array.splice(indexalternative2, 1);
    array.push(alternative1);
  }
  prepAnswer = array.slice(0, n); // зрізаєто до потрібної кількості елементів
  // Переписуємо в змінну варінти відповідей
  prepAnswer = mixArray(prepAnswer); // міксуємо  
};

// Перемішуємо елементи масива  Алгоритм тасування Fisher-Yates
function mixArray(array) {
  let m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
};

  // створюємо кнопки відповідей з масива препозиції
function createButton(array) {
  // Очищаємо контейнер перед додаванням нових кнопок
  btnAnswersCont.innerHTML = '';
  for (let i = 0; i < array.length; i++) {
    const button = document.createElement("button");
    button.classList.add("btnAnswer");
    button.textContent = array[i]; // Встановлюємо текст кнопки з елемента масиву
    btnAnswersCont.appendChild(button); // Додаємо кнопку до контейнера
  };
};