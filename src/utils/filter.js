import {FiltersType} from '../const.js';
import {isFuture, isPast, isPresent} from './date.js';

const Filter = {
  [FiltersType.EVERYTHING]: (points) => points,
  [FiltersType.FUTURE]: (points) => points.filter((point) => isFuture(point.dateFrom)),
  [FiltersType.PRESENT]: (points) => points.filter((point) => isPresent(point.dateFrom, point.dateTo)),
  [FiltersType.PAST]: (points) => points.filter((point) => isPast(point.dateTo)),
};

//сформировать фильтр по точке маршрута
function generateFilter(points) {
  return Object.entries(Filter).map(
    ([filterType, filterPoints]) => ({
      type: filterType,
      count: filterPoints(points).length,
    }),
  );
}

export {generateFilter};
