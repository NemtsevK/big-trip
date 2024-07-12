# Критерии

## Базовые

### Задача

**Б1. Код соответствует техническому заданию проекта.**

Все обязательные пункты технического задания выполнены.

**Б2. При выполнении кода не возникает необработанных ошибок.**

При открытии диалогов, загрузке данных и работе с сайтом не возникает ошибок, программа не ломается и не зависает.

### Именование

**Б3. Название переменных, параметров, свойств и методов начинается со строчной буквы и записываются в нотации camelCase.**

Критерий касается как переменных, объявленных пользователем, так и полученных извне.

Такие данные нужно адаптировать. Например, руками:

```
fetch('https://my-site.fake/api/user')
  .then((response) => response.json())
  .then(({user_name: userName, user_age: userAge}) => ({
    userName,
    userAge,
  }));
```

Но лучше написать для этого отдельную функцию.

**Б4. Для названия значений используются английские существительные.**

Сокращения в словах запрещены. Сокращённые названия переменных можно использовать, только если такое название широко распространено. Допустимые сокращения:

* evt для объектов Event и его производных (MouseEvent, KeyboardEvent и подобные);
* i, j, k, l, t для счётчика в цикле, j для счётчика во вложенном цикле и так далее по алфавиту;
* cb для единственного колбэка в параметрах функции;
* img для именования переменной, содержащей ссылку на тег <img>;
* src для именования переменной, хранящей адрес, например изображения;
* err для обозначения объекта ошибок в конструкциях try...catch или колбэках.

Допустимо именовать переменные-предикаты — флаги или функции, которые возвращают булево значение — по схеме «is + признак». Например:

```
const loading = true; // правильно
const isLoading = true; // тоже правильно

function checkValueToNull(value) { // правильно
  return value === null;
}

function isNull(value) { // тоже правильно
  return value === null;
}
```

**Б5. Названия констант (постоянных значений, известных до начала выполнения программы) написаны прописными (заглавными) буквами.**

Слова разделяются подчёркиваниями (UPPER_SNAKE_CASE), например:

```
const MAX_HEIGHT = 400;
const EARTH_RADIUS = 6370;
```

**Б6. Классы названы английскими существительными. Название класса начинается с заглавной буквы.**

**Неправильно:**

```
class wizard {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Run {
  constructor() {
    console.log('О, я бегу!');
  }
}
```

**Правильно:**

```
class Wizard {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Runner {
  constructor() {
    console.log('О, я бегун!');
  }
}
```

**Б7. Перечисления (Enum) названы английскими существительными и начинаются с прописной (заглавной) буквы.**

Перечисления начинаются с прописной (заглавной) буквы. Перечисления названы существительными в единственном числе. Значения перечислений объявлены как константы.

**Неправильно:**

```
const view = {
  artist: 'Artist',
  genre: 'Genre',
};

const EndGameType = {
  lives: 'lives',
  quests: 'quests',
};
```

**Правильно:**

```
const View = {
  ARTIST: 'Artist',
  GENRE: 'Genre',
};

const EndGameType = {
  LIVES: 'lives',
  QUESTS: 'quests',
};
```

**Б8. Массивы названы существительными во множественном числе.**

**Неправильно:**

```
const age = [12, 40, 22, 7];
const name = ['Иван', 'Петр', 'Мария', 'Алексей'];

const wizard = {
  name: 'Гендальф',
  friend: ['Саурон', 'Фродо', 'Бильбо'],
};
```

**Правильно:**

```
const ages = [12, 40, 22, 7];
const names = ['Иван', 'Петр', 'Мария', 'Алексей'];

const wizard = {
  name: 'Гендальф',
  friends: ['Саурон', 'Фродо', 'Бильбо'],
};
```

**Б9. В названии переменных не используется тип данных.**

**Неправильно:**

```
const filtersArray = ['All', 'Past', 'Present', 'Future'];

const wizardObject = {
  name: 'Гендальф',
  age: 386,
};
```

**Правильно:**

```
const filters = ['All', 'Past', 'Present', 'Future'];

const wizard = {
  name: 'Гендальф',
  age: 386,
};
```

**Б10. Название функции или метода содержит глагол.**

Название функции или метода должно быть глаголом и соответствовать действию, которое выполняет функция или метод. Например, можно использовать глагол get для функций или методов, которые что-то возвращают.

Исключение функции-обработчики (см. критерий Д4). Исключение справедливо только для выполнения дополнительного критерия.

**Неправильно:**

```
const function1 = (names) => {
  names.forEach((name) => {
    console.log(name);
  });
};

const wizard = {
  name: 'Гендальф',
  action() {
    console.log('Стреляю файрболлом!');
  },
};

const randomNumber = () => Math.random();
```

**Правильно:**

```
const printNames = (names) => {
  names.forEach((name) => {
    console.log(name);
  });
};

const wizard = {
  name: 'Гендальф',
  fire() {
    console.log('Стреляю файрболлом!');
  },
};

const getRandomNumber = () => Math.random();
```

**Б11. Названия файлов модулей записаны строчными (маленькими) буквами. Слова разделены дефисами.**

Для того, чтобы избежать конфликтов имён в разных операционных системах, лучше применять наименее конфликтный способ именования файлов — строчными (маленькими) буквами через дефис.

## Форматирование и внешний вид

**Б14. Код всех JS-файлов соответствует рекомендованной структуре.**

Рекомендованная структура:

```
// 1. Импорты
import intersection from 'lodash/intersection';

// 2. Объявление констант
const DEFAULT_COLORS = ['red', 'green', 'blue'];

// 3. Объявление переменных
const colorPicker = document.querySelector('.color-picker');

// 4. Объявление функций
const getColorsIntersection = (userColors, defaultColors) => {
  return intersection(userColors, defaultColors);
};

// 5. Код программы. Вызов функций, использование ранее объявленных переменных, объявление класса. Объявление вычисляемых переменных
const rightColors = getColorsIntersection(colorPicker.value, DEFAULT_COLORS);

// 6. Экспорты
export { rightColors };
```

Некоторые блоки могут отсутствовать, но оставшиеся всё равно должны придерживаться порядка.

**Б15. Код соответствует гайдлайнам.**

Не возникает ошибок при проверке проекта ESLint: npm i && npm run lint.

**Б16. Сложные составные константы собираются в перечисления Enum.**

Множества однотипных констант собираются в перечисления.

**Неправильно:**

```
const COLOR_SUCCESS = '#00FF00';
const COLOR_WARNING = '#FF9900';
const COLOR_DANGER = '#FFFF00';
```

**Правильно:**

```
const Color = {
  SUCCESS: '#00FF00',
  WARNING: '#FF9900',
  DANGER: '#FFFF00',
};
```

Не стоит путать перечисления с обычными объектами или объектами-неймспейсами, например:

```
const wizard = {
  width: 10,
  beard: true,
  eyesColor: 'blue'
};

const helper = {
  getRandom() { ... },
  getSubArray() { ... },
};
```

**Б17. Приватные и защищённые поля в классах помечены и не используются снаружи.**

Свойства и методы, которые есть в классе, но не предназначены для внешнего использования, помечаются как приватные — их названия начинаются с решётки #. Свойства и методы, которые не предназначены для внешнего использования, но используются дочерними классами, помечаются как защищённые — их названия начинаются с подчёркивания _. Доступ к таким полям извне класса запрещён.

## Мусор

**Б18. В коде проекта нет файлов и частей кода, которые не используются, включая закомментированные участки кода.**

**Б19. Версии используемых зависимостей зафиксированы в package.json.**

В списках зависимостей в файле package.json указаны точные версии используемых пакетов. Версия обязательно должна быть указана. Не допускается использование ^, * и ~.

## Модульность

**Б25. Все файлы JS представляют собой отдельные модули ES2015.**

Экспорт и импорт значений производится при помощи ключевых слов export и import. Сохранение в глобальную область видимости значений не допускается.

Пример правильного модуля:

```
import {changeView} from '../util';
import WelcomeView from './welcome-view';
import App from '../main';


export default class Welcome {
  constructor() {
    this.view = new WelcomeView();
  }

  init() {
    changeView(this.view);

    this.view.setOnStart(() => {
      App.showGame();
    });
  }
}
```

**Б26. Модули не экспортируют изменяющиеся переменные.**

Модуль не должен экспортировать переменную, значение которой может измениться в будущем.

**Неправильно:**

```
export let latestResult;
```

**Правильно:**

```
export const latestResult = loadLatestResult();
```

**Б27. Название модуля соответствует его содержимому.**

Разные логические части кода вынесены в отдельные файлы модулей. Имя модуля должно соответствовать его содержимому. Например, если в модуле лежит класс GameView, то и имя модуля должно быть game-view.js.

**Б28. Из одного модуля экспортируется не больше одного класса. Класс всегда экспортируется как default.**

## Универсальность

**Б29. Код является кроссбраузерным и не вызывает ошибок в разных браузерах и разных операционных системах.**

При проверке этого критерия необходимо удостовериться в правильной работе и отсутствии сообщений об ошибках в выполняемых скриптах в последних версиях браузеров: Chrome, Firefox, Safari, Microsoft Edge (на движке Blink).

**Важно:** на Windows и Linux тестировать в Safari не нужно.

## Магия

**Б31. В коде не используются «магические значения», под каждое из них заведена отдельная переменная, названная как константа.**

## Оптимальность

**Б32. Своевременный выход из цикла: цикл не работает дольше, чем нужно.**

**Неправильно:**

```
apartments.forEach((apartment, index) => {
  if (index < 3) {
    render(apartment);
  }
});
```

**Правильно:**

```
for (let i = 0; i < Math.min(apartments.length, 3); i++) {
  render(apartments[i]);
}
```

## Безопасность

**Б36. Обработчики событий документа (document) добавляются и удаляются своевременно.**

Защита от memory-leak Количество обработчиков, подвешенных на глобальную область видимости, не должно возрастать. Например, если подвешивается обработчик, который следит за перемещением курсора по экрану, то он должен добавляться и удаляться в нужный момент. Случай, когда обработчик на document только добавляется, может свидетельствовать о проблеме бесконечного создания обработчиков и потенциальной утечке памяти.

Защита от неправильного поведения интерфейса Например, на странице может существовать попап, который скрывается по нажатию клавиши ESC. Лучше для него удалять обработчик события нажатия на клавишу, если он не показан, потому что он может каким-то образом ломать поведение сайта: останавливать распространение, отменять поведение по умолчанию и так далее.

Если элемент интерфейса скрывается на время, при его появлении обработчики повторно не добавляются. При скрытии элемента удалять внутренние обработчики событий не нужно.

**Б37. Запрещено вставлять в innerHTML и подобные ему свойства и методы строки, полученные снаружи (пользовательский ввод, данные сервера), без применения экранирования.**

Защита от XSS-атак, а также изменения исходных данных, запутывание пользователя и прочее. Перед вставкой необходимо провести экранирование.

**Неправильно:** через innerHTML вставляются данные, которые невозможно полностью контролировать, без предварительного экранирования. Это может быть пользовательский ввод, который может содержать XSS.

```
const listItem = listItemTemplate.cloneNode(true);
listItem.querySelector('.title').innerHTML = user.fullName;
```

**Правильно:** проводить экранирование при вставке внешних данных.

```
import he from 'he';

const listItem = listItemTemplate.cloneNode(true);
listItem.querySelector('.title').innerHTML = he.encode(user.fullName);
```

**Правильно:** вставлять данные, которые полностью созданы программистом.

```
const listItemTemplate = '<li class="item"><i></i><a href="#"></a></li>';
list.innerHTML = listItemTemplate;
```

## Дополнительные

### Задача

**Д1. Техническое задание реализовано в полном объёме.**

Все обязательные и необязательные пункты технического задания выполнены.

### Именование

**Д2. Переменные носят абстрактные названия и не содержат имён собственных.**

**Неправильно:**

```
const keks = {
  name: 'Кекс',
};
```

**Правильно:**

```
const cat = {
  name: 'Кекс',
};
```

**Д3. Название методов и свойств объектов не содержит название объектов.**

**Неправильно:**

```
const popup = {
  openPopup() {
    console.log('I will open popup');
  },
};

class Wizard {
  constructor(name = 'Пендальф') {
    this.wizardName = name;
  }
}
```

**Правильно:**

```
const popup = {
  open() {
    console.log('I will open popup');
  },
};

class Wizard {
  constructor(name = 'Пендальф') {
    this.name = name;
  }
}
```

**Д4. Именованные функции-обработчики событий названы в соответствии с правилами именования обработчиков.**

Для единственного обработчика или функции можно использовать callback или cb. Для именования нескольких обработчиков внутри одного модуля используется on или Handler и описание события. Название обработчика строится следующим образом:

* on + (на каком элементе) + что случилось:

```
const onSidebarClick = () => {};
const onContentLoad = () => {};

const onWindowResize = () => {};
```

* (на каком элементе) + что случилось + 'Handler':

```
const sidebarClickHandler = () => {};
const contentLoadHandler = () => {};

const windowResizeHandler = () => {};
```

### Единообразие

**Д6. Используется единый стиль именования переменных.**

Стиль именования переменных сохраняется во всех модулях, например:

* не следует мешать обработчики содержащие Handler и on;
* если есть переменные, которые хранят DOM-элемент и содержат слово Element, то это правило работает везде.

**Неправильно:**

```
const popupMainElement = document.querySelector('.popup');
const sidebarNode = document.querySelector('.sidebar');
const similarContainer = popupMainElement.querySelector('ul.similar');
```

**Правильно:**

```
const popupMainElement = document.querySelector('.popup');
const sidebarElement = document.querySelector('.sidebar');
const similarContainerElement = popupMainElement.querySelector('ul.similar');
```

**Д8. Методы внутри классов упорядочены.**

Во всех классах методы упорядочены следующим образом:

1. Конструктор.
2. Геттеры и сеттеры свойств класса.
3. Основные методы класса:
   * Перегруженные методы родительского класса.
   * Методы класса;
   * Приватные методы;
4. Обработчики событий.
   5.Статические методы.

Сортировка основных методов объекта свободная, подразумевается что методы будут расположены оптимально для конкретного класса. Нет смысла ограничивать порядок, потому что он может меняться в зависимости от особенностей объекта.

### Избыточность

**Д10. В проекте не должно быть избыточных проверок.**

Например, если заранее известно, что функция всегда принимает числовой параметр, то не следует проверять его на существование.

**Неправильно:**

```
const isPositiveNumber = (myNumber) => {
  if (typeof myNumber === 'undefined') {
    throw new Error('Parameter is not defined');
  }
  return myNumber > 0;
};

isPositiveNumber(15);
isPositiveNumber(-30);
```

**Правильно:**

```
const isPositiveNumber = (myNumber) => myNumber > 0;

isPositiveNumber(15);
isPositiveNumber(-30);
```

**Д11. Отсутствует дублирование кода: повторяющиеся части кода переписаны как функции или вынесены из условий.**

При написании кода следует придерживаться принципа DRY.

**Неправильно:**

```
if (this.level >= 10) {
  this.timer.stopTimer();
  this.timer.stopTimeout();
  this.setResult();
  removeTimer();
} else if (this.lives <= 0) {
  this.timer.stopTimer();
  this.timer.stopTimeout();
  app.showResultFail();
  removeTimer();
}
```

**Правильно:**

```
this.timer.stopTimer();
this.timer.stopTimeout();

if (this.level >= 10) {
  this.setResult();
} else if (this.lives <= 0) {
  app.showResultFail();
}

removeTimer();
```

**Д13. Отсутствуют лишние приведения и проверки типов.**

Если заранее известно, что в переменной число, то нет смысла превращать переменную в число parseInt(myNumber, 10). То же касается и избыточной проверки булевой переменной.

**Неправильно:**

```
if (booleanValue === true) {
  console.log('It\'s true!');
}
```

**Правильно:**

```
if (booleanValue) {
  console.log('It\'s true!');
}
```

**Д15. Условия упрощены.**

1\. Если функция возвращает булево значение, не используется if..else с лишними return.

**Неправильно:**

```
const isEqual = (firstValue, secondValue) => {
  if (firstValue === secondValue) {
    return true;
  } else {
    return false;
  }
};
```

**Правильно:**

```
const isEqual = (firstValue, secondValue) => firstValue === secondValue;
```

2\. Там, где возможно, в присвоении значения вместо if используется тернарный оператор.

**Неправильно:**

```
let sex;
if (male) {
  sex = 'Мужчина';
} else {
  sex = 'Женщина';
}
```

**Правильно:**

```
const sex = male ? 'Мужчина' : 'Женщина';
```

Если при использовании условного оператора в любом случае возвращается значение, альтернативная ветка опускается

**Неправильно:**

```
const decide = (value, anotherValue) => {
  if (2 > 1) {
    return value;
  } else {
    // Много кода...
    return anotherValue;
  }
};
```

**Правильно:**

```
const decide = (value, anotherValue) => {
  if (2 > 1) {
    return value;
  }

  // Много кода...

  return anotherValue;
};
```

## Оптимальность

**Д18. Поиск элементов по селекторам делается минимальное количество раз, после этого ссылки на элементы сохраняются.**

**Неправильно:**

```
for (let i = 0; i < Math.min(apartments.length, 3); i++) {
  const dialog = document.querySelector('.dialog');
  render(dialog, apartments[i]);
}
```

**Правильно:**

```
const dialog = document.querySelector('.dialog');

for (let i = 0; i < Math.min(apartments.length, 3); i++) {
  render(dialog, apartments[i]);
}
```

**Д21. Изменения применяются точечно**

Например, при удалении классов с DOM-элемента, не производится попытка удалить все возможные классы, если можно убрать лишь тот, который действительно установлен на DOM-элементе в данный момент

**Неправильно:**

```
const imageContainer = document.querySelector('.image-container');

const changeFilter = (filterName) => {
  imageContainer.classList.remove('filter-chrome', 'filter-sepia', 'filter-marvin', 'filter-phobos', 'filter-heat');
  imageContainer.classList.add(filterName);
};
```

**Правильно:**

```
const imageContainer = document.querySelector('.image-container');

let currentFilter;
const changeFilter = (filterName) => {
  if (currentFilter) {
    imageContainer.classList.remove(currentFilter);
  }
  imageContainer.classList.add(filterName);
  currentFilter = filterName;
};
```

### Сложность и читаемость

**Д22. Для каждого события используется отдельный обработчик.**

Одна функция не является обработчиком нескольких разных событий.

**Д23. Длинные функции и методы разбиты на несколько небольших.**

**Д24. Для работы с JS-коллекциями используются итераторы для массивов.**

Итераторы используются для трансформаций массивов — map, filter, sort и прочие. А также для обхода проблемы потери окружения в циклах — forEach.

Например:

```
elements.forEach((element) => {
  element.addEventListener('click', () => {
    console.log(element);
  });
});
```

**Д25. Оператор присваивания не используется как часть выражения.**

**Неправильно:**

```
createThumbnails(pictures = JSON.parse(rawPictures));
```

**Правильно:**

```
pictures = JSON.parse(rawPictures);
createThumbnails(pictures);
```

**Д26. Операции над DOM-элементами инкапсулированы.**

Все операции над элементами DOM-дерева происходят только там, где эти элементы были созданы, и не используются снаружи. Например, всё, что связано с отрисовкой данных, должно находиться внутри класса View и управляться только внутри этого класса. Любой доступ к закрытым данным снаружи запрещён.

**Неправильно:**

```
class PlayerPresenter {
  constructor(view) {
    this.view = view;
  }

  init() {
    const checkboxes = Array.from(this.view.element.querySelectorAll('input'));

    const answers = [];

    this.view.makeDecision = () => {
      answers.push(checkboxes.filter((item) => item.checked));

      if (answers.length > 0) {
        goToNextScreen();
      }
    };
  }
}
```

**Правильно:**

```
class PlayerPresenter {
  constructor(view) {
    this.view = view;
  }

  init() {
    this.view.setOnAnswer((answers) => {
      if (answers.length > 0) {
        goToNextScreen();
      }
    });
  }
}
```