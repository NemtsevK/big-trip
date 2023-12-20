//кол-во точек маршрута
const POINT_COUNT = 8;

//кол-во миллисекунд в минуте
const MILLISECONDS_IN_MINUTE = 60000;

//кол-во миллисекунд в часе
const MILLISECONDS_IN_HOUR = MILLISECONDS_IN_MINUTE * 60;

//кол-во миллисекунд в сутках
const MILLISECONDS_IN_DAY = MILLISECONDS_IN_HOUR * 24;

//варианты форматов даты
const DateFormat = {
  DAY_MONTH: 'D MMM',
  MONTH_DAY: 'MMM DD',
  HOUR_MINUTES: 'HH:mm',
  DAY_MONTH_YEAR: 'DD/MM/YY[&nbsp;]HH:mm',
  MINUTES_WITH_POSTFIX: 'mm[M]',
  HOUR_MINUTES_WITH_POSTFIX: 'HH[H] mm[M]',
  DAY_HOUR_MINUTES_WITH_POSTFIX: 'DD[D] HH[H] mm[M]'
};

//массив названий фильтров
const FILTERS_TYPE = ['everything', 'future', 'present', 'past'];

//фильтр по умолчанию
const DEFAULT_FILTER = FILTERS_TYPE[0];

//массив названий сортировок
const SORT_TYPE = ['day', 'event', 'time', 'price', 'offers'];

//сортировка по умолчанию
const DEFAULT_SORT = SORT_TYPE[0];

//массив типов точек маршрута
const POINTS_TYPE = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

export {
  POINT_COUNT,
  MILLISECONDS_IN_MINUTE,
  MILLISECONDS_IN_HOUR,
  MILLISECONDS_IN_DAY,
  DateFormat,
  FILTERS_TYPE,
  DEFAULT_FILTER,
  SORT_TYPE,
  DEFAULT_SORT,
  POINTS_TYPE,
};
